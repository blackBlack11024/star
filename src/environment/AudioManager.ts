/**
 * Manages all game audio with smooth, soothing procedural acoustic generation via Web Audio API.
 * High frequencies are softened to prevent harsh piercing sounds.
 */
export class AudioManager {
    private ctx: AudioContext | null = null;
    private masterGain: GainNode | null = null;
    private masterFilter: BiquadFilterNode | null = null;
    private categories: Record<string, GainNode> = {};
    
    // State
    private initialized = false;
    private activeAmbientSource: AudioBufferSourceNode | null = null;
    private activeAmbientFilter: BiquadFilterNode | null = null;
    private ambientGain: GainNode | null = null;
    
    private activeWeather: AudioBufferSourceNode | null = null;
    private weatherGain: GainNode | null = null;
    
    private motorOsc: OscillatorNode | null = null;
    private motorGain: GainNode | null = null;

    constructor() {}

    /**
     * Initialize AudioContext. Must be called after a user gesture.
     */
    public init() {
        if (this.initialized) return;
        
        try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            this.ctx = new AudioContextClass();

            // Master lowpass filter to remove any harsh digital frequencies > 3000Hz
            this.masterFilter = this.ctx.createBiquadFilter();
            this.masterFilter.type = 'lowpass';
            this.masterFilter.frequency.setValueAtTime(3200, this.ctx.currentTime);
            this.masterFilter.Q.setValueAtTime(0.7, this.ctx.currentTime);

            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);

            this.masterFilter.connect(this.masterGain);
            this.masterGain.connect(this.ctx.destination);
            
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

    private createNoiseBuffer(type: 'pink' | 'brown', duration: number = 4.0): AudioBuffer | null {
        if (!this.ctx) return null;
        
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        
        let b0=0, b1=0, b2=0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            
            if (type === 'pink') {
                b0 = 0.99 * b0 + white * 0.05;
                b1 = 0.96 * b1 + white * 0.15;
                output[i] = (b0 + b1) * 0.3;
            } else if (type === 'brown') {
                b0 = (b0 + (0.02 * white)) / 1.02;
                output[i] = b0 * 2.5;
            }
        }
        return buffer;
    }

    /**
     * Soothing, soft night breeze and gentle ambient air (zero harsh frequencies).
     */
    public setAmbientForPhase(sunPhase: string) {
        if (!this.ctx || !this.initialized) return;
        
        // Cleanup old
        if (this.activeAmbientSource) {
            try { this.activeAmbientSource.stop(); } catch(e){}
            this.activeAmbientSource = null;
        }
        if (this.ambientGain) {
            this.ambientGain.disconnect();
        }

        this.ambientGain = this.ctx.createGain();
        this.ambientGain.connect(this.categories['ambient']);
        
        // Deep warm brown noise (soft night breeze)
        const buffer = this.createNoiseBuffer('brown', 6.0);
        if (!buffer) return;

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        
        // Lowpass filter for smooth deep air sound
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        
        if (sunPhase === 'night' || sunPhase === 'astronomical_twilight') {
            filter.frequency.setValueAtTime(180, this.ctx.currentTime); // Very mellow night breeze
            this.ambientGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        } else {
            filter.frequency.setValueAtTime(260, this.ctx.currentTime);
            this.ambientGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
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
                const buffer = this.createNoiseBuffer('pink', 5.0);
                if (!buffer) return;
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(800, this.ctx.currentTime); // Soft warm rain sound
                
                this.weatherGain = this.ctx.createGain();
                this.weatherGain.gain.setValueAtTime(0, this.ctx.currentTime);
                this.weatherGain.connect(this.categories['weather']);
                
                source.connect(filter);
                filter.connect(this.weatherGain);
                source.start();
                this.activeWeather = source;
            }
            if (this.weatherGain) {
                this.weatherGain.gain.setTargetAtTime(intensity * 0.25, this.ctx.currentTime, 0.5);
            }
        } else {
            if (this.weatherGain) {
                this.weatherGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.5);
            }
        }
    }

    /**
     * Camera shutter sound (soft optical click, no harsh high frequencies).
     */
    public playShutter() {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.connect(gain);
        gain.connect(this.categories['machine']);

        osc.start(now);
        osc.stop(now + 0.1);
    }

    /**
     * Telescope Motor & Gear Sound (low hum with warm resonance).
     */
    public playMotor(duration: number = 0.4) {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle'; // Smoother than harsh sawtooth
        osc.frequency.setValueAtTime(75, now);
        osc.frequency.linearRampToValueAtTime(85, now + duration * 0.5);
        osc.frequency.linearRampToValueAtTime(70, now + duration);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(160, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.06);
        gain.gain.setValueAtTime(0.18, now + duration - 0.06);
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
        osc.frequency.setValueAtTime(980, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.categories['sfx']);

        osc.start(now);
        osc.stop(now + 0.2);
    }

    public playClick() {
        if (!this.ctx || !this.initialized) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.04);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(this.categories['sfx']);

        osc.start(now);
        osc.stop(now + 0.04);
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
