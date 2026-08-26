/**
 * Manages all game audio with smooth, soothing procedural acoustic generation via Web Audio API.
 * High frequencies are softened and a master limiter/compressor prevents any clipping or popping.
 */
export class AudioManager {
    private ctx: AudioContext | null = null;
    private masterGain: GainNode | null = null;
    private masterCompressor: DynamicsCompressorNode | null = null;
    private masterFilter: BiquadFilterNode | null = null;
    private categories: Record<string, GainNode> = {};
    
    // State
    private initialized = false;
    private currentSunPhase: string = '';
    private activeAmbientSource: AudioBufferSourceNode | null = null;
    private activeAmbientFilter: BiquadFilterNode | null = null;
    private ambientGain: GainNode | null = null;
    
    private activeWeather: AudioBufferSourceNode | null = null;
    private weatherGain: GainNode | null = null;
    private currentWeatherState: string = '';

    constructor() {}

    /**
     * Initialize AudioContext. Must be called after a user gesture.
     */
    public init() {
        if (this.initialized) return;
        
        try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            this.ctx = new AudioContextClass();

            // 1. Master Dynamics Compressor (Limiter) to eliminate all clipping / pops
            this.masterCompressor = this.ctx.createDynamicsCompressor();
            this.masterCompressor.threshold.setValueAtTime(-6, this.ctx.currentTime);
            this.masterCompressor.knee.setValueAtTime(10, this.ctx.currentTime);
            this.masterCompressor.ratio.setValueAtTime(12, this.ctx.currentTime);
            this.masterCompressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
            this.masterCompressor.release.setValueAtTime(0.25, this.ctx.currentTime);

            // 2. Master lowpass filter to soften harsh digital frequencies > 2800Hz
            this.masterFilter = this.ctx.createBiquadFilter();
            this.masterFilter.type = 'lowpass';
            this.masterFilter.frequency.setValueAtTime(2800, this.ctx.currentTime);
            this.masterFilter.Q.setValueAtTime(0.7, this.ctx.currentTime);

            // 3. Master Volume Gain
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.65, this.ctx.currentTime);

            // Routing: Categories -> MasterFilter -> MasterGain -> MasterCompressor -> Destination
            this.masterFilter.connect(this.masterGain);
            this.masterGain.connect(this.masterCompressor);
            this.masterCompressor.connect(this.ctx.destination);
            
            // Create category gains: ambient, weather, machine (motor & equipment), sfx
            ['ambient', 'weather', 'machine', 'sfx'].forEach(cat => {
                const gain = this.ctx!.createGain();
                gain.connect(this.masterFilter!);
                this.categories[cat] = gain;
            });
            
            this.initialized = true;
        } catch (e) {
            console.error('Failed to initialize AudioContext:', e);
        }
    }

    /**
     * Seamless noise buffer generator with crossfaded boundaries (zero loop click/pop).
     */
    private createNoiseBuffer(type: 'pink' | 'brown', duration: number = 6.0): AudioBuffer | null {
        if (!this.ctx) return null;
        
        const sampleRate = this.ctx.sampleRate;
        const bufferSize = sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
        const output = buffer.getChannelData(0);
        
        let b0 = 0, b1 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            
            if (type === 'pink') {
                b0 = 0.99 * b0 + white * 0.05;
                b1 = 0.96 * b1 + white * 0.15;
                output[i] = (b0 + b1) * 0.25;
            } else if (type === 'brown') {
                b0 = (b0 + 0.02 * white) / 1.02;
                output[i] = b0 * 2.2;
            }
        }

        // Apply 100ms smooth crossfade at loop boundary to eliminate any loop click
        const fadeSamples = Math.floor(sampleRate * 0.1);
        for (let i = 0; i < fadeSamples; i++) {
            const factor = i / fadeSamples;
            // Smoothly blend start and end
            const startVal = output[i];
            const endVal = output[bufferSize - fadeSamples + i];
            output[i] = startVal * factor + endVal * (1 - factor);
            output[bufferSize - fadeSamples + i] = output[i];
        }

        return buffer;
    }

    /**
     * Soothing, soft night breeze and gentle ambient air.
     * Only updates when sunPhase changes to avoid 60fps audio recreate pops!
     */
    public setAmbientForPhase(sunPhase: string) {
        if (!this.ctx || !this.initialized) return;
        if (this.currentSunPhase === sunPhase && this.activeAmbientSource) return; // Prevent 60fps recreation!

        this.currentSunPhase = sunPhase;
        const now = this.ctx.currentTime;

        // Smoothly fade out old source if exists
        if (this.ambientGain && this.activeAmbientSource) {
            const oldSource = this.activeAmbientSource;
            const oldGain = this.ambientGain;
            oldGain.gain.setTargetAtTime(0.001, now, 0.4);
            setTimeout(() => {
                try { oldSource.stop(); } catch(e){}
            }, 600);
        }

        // Create new ambient channel
        this.ambientGain = this.ctx.createGain();
        this.ambientGain.gain.setValueAtTime(0.001, now);
        this.ambientGain.connect(this.categories['ambient']);
        
        // Deep warm brown noise (soft mountain night air)
        const buffer = this.createNoiseBuffer('brown', 6.0);
        if (!buffer) return;

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        
        if (sunPhase === 'night' || sunPhase === 'astronomical_twilight') {
            filter.frequency.setValueAtTime(140, now); // Gentle deep mountain night breeze
            this.ambientGain.gain.setTargetAtTime(0.09, now, 0.8);
        } else {
            filter.frequency.setValueAtTime(200, now);
            this.ambientGain.gain.setTargetAtTime(0.06, now, 0.8);
        }
        
        source.connect(filter);
        filter.connect(this.ambientGain);
        
        source.start();
        this.activeAmbientSource = source;
        this.activeAmbientFilter = filter;
    }

    public setWeatherAudio(weather: string, intensity: number) {
        if (!this.ctx || !this.initialized) return;
        
        if (weather === 'Rainy') {
            if (!this.activeWeather) {
                const buffer = this.createNoiseBuffer('pink', 6.0);
                if (!buffer) return;
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(650, this.ctx.currentTime); // Soft gentle rain sound
                
                this.weatherGain = this.ctx.createGain();
                this.weatherGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
                this.weatherGain.connect(this.categories['weather']);
                
                source.connect(filter);
                filter.connect(this.weatherGain);
                source.start();
                this.activeWeather = source;
            }
            if (this.weatherGain) {
                this.weatherGain.gain.setTargetAtTime(intensity * 0.18, this.ctx.currentTime, 0.5);
            }
        } else {
            if (this.weatherGain) {
                this.weatherGain.gain.setTargetAtTime(0.001, this.ctx.currentTime, 0.5);
            }
        }
    }

    /**
     * Camera shutter sound (soft optical click).
     */
    public playShutter() {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.06);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

        osc.connect(gain);
        gain.connect(this.categories['machine']);

        osc.start(now);
        osc.stop(now + 0.08);
    }

    /**
     * Telescope Motor & Gear Sound (gentle low hum).
     */
    public playMotor(duration: number = 0.3) {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(65, now);
        osc.frequency.linearRampToValueAtTime(75, now + duration * 0.5);
        osc.frequency.linearRampToValueAtTime(60, now + duration);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(120, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
        gain.gain.setValueAtTime(0.12, now + duration - 0.05);
        gain.gain.linearRampToValueAtTime(0.001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.categories['machine']);

        osc.start(now);
        osc.stop(now + duration);
    }

    public playCoins() {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(this.categories['sfx']);

        osc.start(now);
        osc.stop(now + 0.15);
    }

    public playClick() {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(360, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.03);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(gain);
        gain.connect(this.categories['sfx']);

        osc.start(now);
        osc.stop(now + 0.035);
    }

    public setMasterVolume(v: number) {
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, v)), this.ctx.currentTime, 0.05);
        }
    }

    public setCategory(category: string, volume: number) {
        const cat = this.categories[category];
        if (cat && this.ctx) {
            cat.gain.setTargetAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime, 0.05);
        }
    }

    public dispose() {
        if (this.ctx) {
            this.ctx.close();
            this.initialized = false;
        }
    }
}
