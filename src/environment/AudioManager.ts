/**
 * Manages all game audio with smooth, soothing procedural acoustic generation via Web Audio API.
 * Includes gentle night crickets, daytime bird songs, warm mountain breeze, telescope motor, and master compressor limiter.
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

    // Wildlife audio scheduler
    private natureTimer: number | null = null;
    private isRaining: boolean = false;

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

            // 2. Master lowpass filter to soften harsh digital frequencies > 3000Hz
            this.masterFilter = this.ctx.createBiquadFilter();
            this.masterFilter.type = 'lowpass';
            this.masterFilter.frequency.setValueAtTime(3000, this.ctx.currentTime);
            this.masterFilter.Q.setValueAtTime(0.7, this.ctx.currentTime);

            // 3. Master Volume Gain
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.65, this.ctx.currentTime);

            // Routing: Categories -> MasterFilter -> MasterGain -> MasterCompressor -> Destination
            this.masterFilter.connect(this.masterGain);
            this.masterGain.connect(this.masterCompressor);
            this.masterCompressor.connect(this.ctx.destination);
            
            // Create category gains: ambient, weather, machine, sfx
            ['ambient', 'weather', 'machine', 'sfx'].forEach(cat => {
                const gain = this.ctx!.createGain();
                gain.connect(this.masterFilter!);
                this.categories[cat] = gain;
            });
            
            this.initialized = true;
            this.startNatureScheduler();
        } catch (e) {
            console.error('Failed to initialize AudioContext:', e);
        }
    }

    /**
     * Seamless noise buffer generator with crossfaded boundaries.
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

        // 100ms smooth crossfade at loop boundary
        const fadeSamples = Math.floor(sampleRate * 0.1);
        for (let i = 0; i < fadeSamples; i++) {
            const factor = i / fadeSamples;
            const startVal = output[i];
            const endVal = output[bufferSize - fadeSamples + i];
            output[i] = startVal * factor + endVal * (1 - factor);
            output[bufferSize - fadeSamples + i] = output[i];
        }

        return buffer;
    }

    /**
     * Soothing, soft night breeze and gentle ambient air.
     */
    public setAmbientForPhase(sunPhase: string) {
        if (!this.ctx || !this.initialized) return;
        if (this.currentSunPhase === sunPhase && this.activeAmbientSource) return;

        this.currentSunPhase = sunPhase;
        const now = this.ctx.currentTime;

        // Fade out old source
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
        
        // Deep warm brown noise (soft mountain air)
        const buffer = this.createNoiseBuffer('brown', 6.0);
        if (!buffer) return;

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        
        if (sunPhase === 'night' || sunPhase === 'astronomical_twilight') {
            filter.frequency.setValueAtTime(140, now);
            this.ambientGain.gain.setTargetAtTime(0.08, now, 0.8);
        } else {
            filter.frequency.setValueAtTime(200, now);
            this.ambientGain.gain.setTargetAtTime(0.05, now, 0.8);
        }
        
        source.connect(filter);
        filter.connect(this.ambientGain);
        
        source.start();
        this.activeAmbientSource = source;
        this.activeAmbientFilter = filter;
    }

    // =========================================================================
    // Wildlife Audio: Night Crickets & Daytime Birds
    // =========================================================================

    private startNatureScheduler() {
        if (this.natureTimer) clearInterval(this.natureTimer);

        const loop = () => {
            if (!this.ctx || !this.initialized || this.isRaining) {
                this.natureTimer = window.setTimeout(loop, 3000);
                return;
            }

            const isNight = this.currentSunPhase === 'night' ||
                            this.currentSunPhase === 'astronomical_twilight' ||
                            this.currentSunPhase === 'nautical_twilight';

            if (isNight) {
                // Nighttime: gentle cricket chirps
                this.triggerCricketChirp();
                const nextDelay = 1800 + Math.random() * 3200; // every 1.8s - 5.0s
                this.natureTimer = window.setTimeout(loop, nextDelay);
            } else {
                // Daytime / Dawn / Golden Hour: melodic bird songs
                this.triggerBirdSong();
                const nextDelay = 3500 + Math.random() * 4500; // every 3.5s - 8.0s
                this.natureTimer = window.setTimeout(loop, nextDelay);
            }
        };

        this.natureTimer = window.setTimeout(loop, 2000);
    }

    /**
     * Procedural Night Cricket Chirp (3-pulse rhythmic micro-chirp at ~4.7kHz).
     */
    private triggerCricketChirp() {
        if (!this.ctx || !this.initialized) return;

        const now = this.ctx.currentTime;
        const baseFreq = 4600 + Math.random() * 400; // 4600 - 5000 Hz
        const pulses = 3;
        const pulseLen = 0.035;
        const pulseGap = 0.025;

        // Stereo panner for spatial immersion
        let panNode: StereoPannerNode | null = null;
        if (typeof this.ctx.createStereoPanner === 'function') {
            panNode = this.ctx.createStereoPanner();
            panNode.pan.setValueAtTime((Math.random() * 1.4 - 0.7), now);
        }

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(baseFreq, now);
        filter.Q.setValueAtTime(4.0, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.0001, now);

        for (let i = 0; i < pulses; i++) {
            const pStart = now + i * (pulseLen + pulseGap);
            const pPeak = pStart + pulseLen * 0.3;
            const pEnd = pStart + pulseLen;
            const vol = 0.05 + Math.random() * 0.03; // Gentle volume
            gain.gain.setValueAtTime(0.0001, pStart);
            gain.gain.linearRampToValueAtTime(vol, pPeak);
            gain.gain.linearRampToValueAtTime(0.0001, pEnd);
        }

        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq, now);

        osc.connect(filter);
        filter.connect(gain);

        if (panNode) {
            gain.connect(panNode);
            panNode.connect(this.categories['ambient']);
        } else {
            gain.connect(this.categories['ambient']);
        }

        osc.start(now);
        osc.stop(now + pulses * (pulseLen + pulseGap) + 0.05);
    }

    /**
     * Procedural Forest Bird Song (melodic 2 to 3 note frequency sweeps).
     */
    private triggerBirdSong() {
        if (!this.ctx || !this.initialized) return;

        const now = this.ctx.currentTime;
        const notesCount = Math.random() < 0.5 ? 2 : 3;
        
        // Random stereo panning
        let panNode: StereoPannerNode | null = null;
        if (typeof this.ctx.createStereoPanner === 'function') {
            panNode = this.ctx.createStereoPanner();
            panNode.pan.setValueAtTime((Math.random() * 1.4 - 0.7), now);
        }

        let timeCursor = now;
        for (let i = 0; i < notesCount; i++) {
            const noteStart = timeCursor;
            const noteDuration = 0.12 + Math.random() * 0.1;
            const freqStart = 2400 + Math.random() * 800;
            const freqEnd = freqStart + (Math.random() * 800 - 300);

            const osc = this.ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freqStart, noteStart);
            osc.frequency.exponentialRampToValueAtTime(Math.max(1000, freqEnd), noteStart + noteDuration);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.0001, noteStart);
            gain.gain.linearRampToValueAtTime(0.045, noteStart + noteDuration * 0.3);
            gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + noteDuration);

            osc.connect(gain);
            if (panNode) {
                gain.connect(panNode);
                panNode.connect(this.categories['ambient']);
            } else {
                gain.connect(this.categories['ambient']);
            }

            osc.start(noteStart);
            osc.stop(noteStart + noteDuration + 0.02);

            timeCursor += noteDuration + (0.05 + Math.random() * 0.08);
        }
    }

    public setWeatherAudio(weather: string, intensity: number) {
        if (!this.ctx || !this.initialized) return;
        this.isRaining = (weather === 'Rainy');
        
        if (weather === 'Rainy') {
            if (!this.activeWeather) {
                const buffer = this.createNoiseBuffer('pink', 6.0);
                if (!buffer) return;
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(650, this.ctx.currentTime);
                
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
        if (this.natureTimer) {
            clearTimeout(this.natureTimer);
            this.natureTimer = null;
        }
        if (this.ctx) {
            this.ctx.close();
            this.initialized = false;
        }
    }
}
