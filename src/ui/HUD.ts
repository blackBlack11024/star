import * as THREE from 'three';
import { gameStore } from '../game/GameStore';
import { GameMode, WeatherState } from '../types';

export class HUD {
    private container: HTMLElement;
    private timeDisplay: HTMLElement;
    private sunPhaseDisplay: HTMLElement;
    private moneyDisplay: HTMLElement;
    private weatherDisplay: HTMLElement;
    private audioDisplay: HTMLElement;
    private locationDisplay: HTMLElement;
    private promptDisplay: HTMLElement;
    private crosshair: HTMLElement;
    private telescopeMarker: HTMLElement;
    private studioMarker: HTMLElement;
    private audioModal: HTMLElement;
    private timeButtons: HTMLButtonElement[] = [];
    private unsubscribe: () => void;

    // Audio slider elements
    private masterSlider!: HTMLInputElement;
    private machineSlider!: HTMLInputElement;
    private ambientSlider!: HTMLInputElement;
    private weatherSlider!: HTMLInputElement;
    private muteBtn!: HTMLButtonElement;
    private masterValSpan!: HTMLElement;
    private machineValSpan!: HTMLElement;
    private ambientValSpan!: HTMLElement;
    private weatherValSpan!: HTMLElement;

    constructor() {
        const overlay = document.getElementById('ui-overlay');
        if (!overlay) throw new Error("ui-overlay element not found in document");

        this.container = document.createElement('div');
        this.container.className = 'hud';

        // 1. Top-left panel: Time, Sun Phase, Time Scale Buttons
        const topLeft = document.createElement('div');
        topLeft.className = 'hud-panel top-left';
        
        const timeRow = document.createElement('div');
        timeRow.className = 'time-row';

        this.timeDisplay = document.createElement('div');
        this.timeDisplay.className = 'time-display';
        this.timeDisplay.textContent = '--:--:--';
        this.timeDisplay.style.cursor = 'pointer';
        this.timeDisplay.title = '點擊開啟時間與倒流控制中心 [R]';
        this.timeDisplay.onclick = () => {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'r' }));
        };

        this.sunPhaseDisplay = document.createElement('div');
        this.sunPhaseDisplay.className = 'sun-phase';
        this.sunPhaseDisplay.textContent = '觀星夜';
        this.sunPhaseDisplay.style.cursor = 'pointer';
        this.sunPhaseDisplay.onclick = () => {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'r' }));
        };

        const nowBtn = document.createElement('button');
        nowBtn.className = 'time-btn';
        nowBtn.textContent = '現在';
        nowBtn.title = '一鍵重置至目前現實時間';
        nowBtn.style.flex = 'none';
        nowBtn.style.padding = '2px 8px';
        nowBtn.onclick = () => {
            gameStore.getState().resetToRealTime();
        };

        timeRow.appendChild(this.timeDisplay);
        timeRow.appendChild(this.sunPhaseDisplay);
        timeRow.appendChild(nowBtn);
        topLeft.appendChild(timeRow);

        const timeControls = document.createElement('div');
        timeControls.className = 'time-controls';
        const scales = [
            { label: '暫停', value: 0 },
            { label: '1x', value: 1 },
            { label: '10x', value: 10 },
            { label: '60x', value: 60 },
            { label: '5m', value: 300 },
            { label: '16m', value: 1000 }
        ];
        
        scales.forEach(scale => {
            const btn = document.createElement('button');
            btn.className = `time-btn ${scale.value === 1 ? 'active' : ''}`;
            btn.textContent = scale.label;
            btn.onclick = () => {
                if (scale.value === 0) {
                    gameStore.getState().toggleTimePause();
                } else {
                    if (gameStore.getState().isTimePaused) {
                        gameStore.getState().toggleTimePause();
                    }
                    gameStore.getState().setTimeScale(scale.value);
                }
            };
            this.timeButtons.push(btn);
            timeControls.appendChild(btn);
        });
        topLeft.appendChild(timeControls);

        // 2. Top-right panel: Money, Weather, and Audio Toggle
        const topRight = document.createElement('div');
        topRight.className = 'hud-panel top-right';

        this.moneyDisplay = document.createElement('div');
        this.moneyDisplay.className = 'money-badge';
        this.moneyDisplay.innerHTML = `$0`;

        this.weatherDisplay = document.createElement('div');
        this.weatherDisplay.className = 'weather-badge';
        this.weatherDisplay.textContent = '晴朗';

        this.audioDisplay = document.createElement('div');
        this.audioDisplay.className = 'audio-badge';
        this.audioDisplay.innerHTML = `<span>音量</span> <span>70%</span>`;
        this.audioDisplay.onclick = () => this.toggleAudioModal();

        const codexBtn = document.createElement('div');
        codexBtn.className = 'guide-badge';
        codexBtn.innerHTML = `<span>圖鑑</span>`;
        codexBtn.title = '開啟觀測圖鑑與任務日誌 [G]';
        codexBtn.onclick = () => {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', code: 'KeyG' }));
        };

        const guideBtn = document.createElement('div');
        guideBtn.className = 'guide-badge';
        guideBtn.innerHTML = `<span>說明</span>`;
        guideBtn.title = '開啟操作說明書與觀星指南 [H]';
        guideBtn.onclick = () => {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h' }));
        };

        topRight.appendChild(this.moneyDisplay);
        topRight.appendChild(this.weatherDisplay);
        topRight.appendChild(this.audioDisplay);
        topRight.appendChild(codexBtn);
        topRight.appendChild(guideBtn);

        // 3. Audio Settings Mixer Modal
        this.audioModal = this.createAudioModal();

        // 4. Bottom-left panel: Location & Coordinates
        const bottomLeft = document.createElement('div');
        bottomLeft.className = 'hud-panel bottom-left';
        this.locationDisplay = document.createElement('div');
        bottomLeft.appendChild(this.locationDisplay);

        // 5. Bottom-right panel: Shortcut Guide
        const bottomRight = document.createElement('div');
        bottomRight.className = 'hud-panel bottom-right';
        bottomRight.innerHTML = `
            <span><span class="key-tag">C</span>星座</span>
            <span><span class="key-tag">L</span>地點</span>
            <span><span class="key-tag">R</span>倒流</span>
            <span><span class="key-tag">M</span>音量</span>
            <span><span class="key-tag">H</span>說明</span>
            <span><span class="key-tag">U</span>無UI</span>
        `;

        // 6. Interaction Prompt (center floating pill)
        this.promptDisplay = document.createElement('div');
        this.promptDisplay.className = 'interact-prompt';
        this.promptDisplay.innerHTML = `<span>按 [E] 使用望遠鏡</span>`;

        // 7. Crosshair
        this.crosshair = document.createElement('div');
        this.crosshair.className = 'crosshair';

        // 8. 3D Waypoint Markers
        this.telescopeMarker = document.createElement('div');
        this.telescopeMarker.className = 'waypoint-marker telescope';
        this.telescopeMarker.innerHTML = `<span>望遠鏡</span><span class="key-hint">E</span><span class="dist" style="opacity:0.6"></span>`;

        this.studioMarker = document.createElement('div');
        this.studioMarker.className = 'waypoint-marker studio';
        this.studioMarker.innerHTML = `<span>工作室</span><span class="key-hint">F</span><span class="dist" style="opacity:0.6"></span>`;

        this.container.appendChild(topLeft);
        this.container.appendChild(topRight);
        this.container.appendChild(this.audioModal);
        this.container.appendChild(bottomLeft);
        this.container.appendChild(bottomRight);
        this.container.appendChild(this.promptDisplay);
        this.container.appendChild(this.crosshair);
        this.container.appendChild(this.telescopeMarker);
        this.container.appendChild(this.studioMarker);

        overlay.appendChild(this.container);

        this.unsubscribe = gameStore.subscribe((state) => this.update(state));
        this.update(gameStore.getState());
    }

    private createAudioModal(): HTMLElement {
        const modal = document.createElement('div');
        modal.className = 'audio-modal';

        const header = document.createElement('div');
        header.className = 'audio-modal-header';
        header.innerHTML = `<h3>音效與音量設定</h3>`;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.style.width = '26px';
        closeBtn.style.height = '26px';
        closeBtn.style.fontSize = '14px';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => this.toggleAudioModal(false);
        header.appendChild(closeBtn);
        modal.appendChild(header);

        // Sliders config
        const rows = [
            { id: 'master', label: '全局音量 (Master)', val: 70, prop: 'masterVolume', setter: 'setMasterVolume' },
            { id: 'machine', label: '機器音量 (馬達/齒輪/快門)', val: 70, prop: 'machineVolume', setter: 'setMachineVolume' },
            { id: 'ambient', label: '環境音量 (自然夜風氛圍)', val: 80, prop: 'ambientVolume', setter: 'setAmbientVolume' },
            { id: 'weather', label: '天氣音量 (雨聲)', val: 80, prop: 'weatherVolume', setter: 'setWeatherVolume' }
        ];

        rows.forEach(r => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'audio-row';

            const labelRow = document.createElement('div');
            labelRow.className = 'audio-label-row';
            labelRow.innerHTML = `<span>${r.label}</span><span class="val" id="val-${r.id}">${r.val}%</span>`;

            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = '0';
            slider.max = '100';
            slider.value = r.val.toString();

            slider.oninput = () => {
                const num = parseInt(slider.value);
                const frac = num / 100;
                (gameStore.getState() as any)[r.setter](frac);
            };

            if (r.id === 'master') {
                this.masterSlider = slider;
                this.masterValSpan = labelRow.querySelector('.val')!;
            } else if (r.id === 'machine') {
                this.machineSlider = slider;
                this.machineValSpan = labelRow.querySelector('.val')!;
            } else if (r.id === 'ambient') {
                this.ambientSlider = slider;
                this.ambientValSpan = labelRow.querySelector('.val')!;
            } else if (r.id === 'weather') {
                this.weatherSlider = slider;
                this.weatherValSpan = labelRow.querySelector('.val')!;
            }

            rowDiv.appendChild(labelRow);
            rowDiv.appendChild(slider);
            modal.appendChild(rowDiv);
        });

        // Mute button
        this.muteBtn = document.createElement('button');
        this.muteBtn.className = 'audio-mute-btn';
        this.muteBtn.textContent = '一鍵靜音 (Mute)';
        this.muteBtn.onclick = () => {
            gameStore.getState().toggleMute();
        };
        modal.appendChild(this.muteBtn);

        return modal;
    }

    public toggleAudioModal(show?: boolean) {
        if (show !== undefined) {
            this.audioModal.classList.toggle('visible', show);
        } else {
            this.audioModal.classList.toggle('visible');
        }
    }

    private formatTime(time: Date): string {
        return time.toLocaleTimeString('zh-TW', {
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        });
    }

    private formatDate(time: Date): string {
        return time.toLocaleDateString('zh-TW', {
            year: 'numeric', month: '2-digit', day: '2-digit'
        });
    }

    private getSunPhaseText(time: Date): string {
        const hour = time.getHours();
        if (hour >= 6 && hour < 17) return '白晝';
        if (hour >= 17 && hour < 19) return '黃昏';
        if (hour >= 19 || hour < 5) return '觀星夜';
        return '黎明';
    }

    private getWeatherBadge(weather: WeatherState): string {
        switch (weather) {
            case WeatherState.Clear: return '萬里無雲';
            case WeatherState.PartlyCloudy: return '局部多雲';
            case WeatherState.Cloudy: return '密雲';
            case WeatherState.Rainy: return '降雨中';
            default: return '晴朗';
        }
    }

    public update(state: any) {
        const overlay = document.getElementById('ui-overlay');
        if (overlay) {
            overlay.classList.toggle('ui-hidden', !state.isUIVisible);
        }

        if (state.gameMode === GameMode.Studio || state.gameMode === GameMode.Telescope) {
            this.container.style.display = 'none';
            this.toggleAudioModal(false);
            return;
        } else {
            this.container.style.display = 'block';
        }

        this.crosshair.style.display = state.gameMode === GameMode.Walk ? 'block' : 'none';

        if (state.currentTime) {
            this.timeDisplay.innerHTML = `<span style="font-size:11px;color:#94a3b8;margin-right:6px">${this.formatDate(state.currentTime)}</span>${this.formatTime(state.currentTime)}`;
            this.sunPhaseDisplay.textContent = this.getSunPhaseText(state.currentTime);
        }
        
        this.moneyDisplay.innerHTML = `$${state.money}`;
        this.weatherDisplay.textContent = this.getWeatherBadge(state.weather);
        
        // Update audio badge & modal values
        const masterPct = Math.round(state.masterVolume * 100);
        const machinePct = Math.round(state.machineVolume * 100);
        const ambientPct = Math.round(state.ambientVolume * 100);
        const weatherPct = Math.round(state.weatherVolume * 100);

        if (state.isMuted) {
            this.audioDisplay.innerHTML = `<span>靜音</span>`;
            this.audioDisplay.classList.add('muted');
            this.muteBtn.textContent = '解除靜音 (Unmute)';
            this.muteBtn.classList.add('active');
        } else {
            this.audioDisplay.innerHTML = `<span>音量 ${masterPct}%</span>`;
            this.audioDisplay.classList.remove('muted');
            this.muteBtn.textContent = '一鍵靜音 (Mute)';
            this.muteBtn.classList.remove('active');
        }

        if (this.masterSlider) {
            this.masterSlider.value = masterPct.toString();
            this.masterValSpan.textContent = `${masterPct}%`;
            this.machineSlider.value = machinePct.toString();
            this.machineValSpan.textContent = `${machinePct}%`;
            this.ambientSlider.value = ambientPct.toString();
            this.ambientValSpan.textContent = `${ambientPct}%`;
            this.weatherSlider.value = weatherPct.toString();
            this.weatherValSpan.textContent = `${weatherPct}%`;
        }

        if (state.currentLocation) {
            const loc = state.currentLocation;
            this.locationDisplay.innerHTML = `
                <div class="location-title">${loc.name}</div>
                <div class="location-coords">
                    緯度 ${loc.latitude > 0 ? `${loc.latitude.toFixed(2)}°N` : `${(-loc.latitude).toFixed(2)}°S`} · 
                    經度 ${loc.longitude > 0 ? `${loc.longitude.toFixed(2)}°E` : `${(-loc.longitude).toFixed(2)}°W`} · 
                    ${loc.altitude}m
                </div>
            `;
        }

        // Update active time button state
        const currentScale = state.isTimePaused ? 0 : state.timeScale;
        const scales = [0, 1, 10, 60, 300, 1000];
        this.timeButtons.forEach((btn, idx) => {
            btn.classList.toggle('active', scales[idx] === currentScale);
        });
    }

    public showInteractPrompt(text: string) {
        this.promptDisplay.innerHTML = `<span>${text}</span>`;
        this.promptDisplay.classList.add('visible');
    }

    public hideInteractPrompt() {
        this.promptDisplay.classList.remove('visible');
    }

    public showNotification(text: string, type: string = 'info') {
        const notif = document.createElement('div');
        notif.className = `notification notification-${type}`;
        notif.textContent = text;
        document.getElementById('ui-overlay')?.appendChild(notif);
        // Animate in
        requestAnimationFrame(() => notif.classList.add('visible'));
        const duration = type === 'warning' ? 4500 : type === 'success' ? 3500 : 3000;
        setTimeout(() => {
            notif.classList.remove('visible');
            setTimeout(() => notif.remove(), 400);
        }, duration);
    }

    /** Update the quest tracker widget on the HUD. */
    public updateQuestTracker(activeQuest: { title: string; objectives: { description: string }[] } | null) {
        let tracker = document.getElementById('quest-tracker-hud');
        if (!activeQuest) {
            if (tracker) tracker.style.display = 'none';
            return;
        }
        if (!tracker) {
            tracker = document.createElement('div');
            tracker.id = 'quest-tracker-hud';
            tracker.className = 'quest-tracker-hud';
            tracker.style.cursor = 'pointer';
            tracker.title = '點擊開啟觀測圖鑑與任務日誌 [G]';
            tracker.onclick = () => {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', code: 'KeyG' }));
            };
            document.getElementById('ui-overlay')?.appendChild(tracker);
        }
        tracker.style.display = 'block';
        tracker.innerHTML = `
            <div class="qt-title">目前任務 (點擊查看)</div>
            <div class="qt-quest">${activeQuest.title}</div>
            <div class="qt-objectives">
                ${activeQuest.objectives.slice(0, 2).map(o => `<div class="qt-obj">\u25cb ${o.description}</div>`).join('')}
            </div>
            <div class="qt-hint">點擊此處或按 G 開啟圖鑑</div>
        `;
    }

    public updateWaypoints(camera: THREE.Camera, telescopePos: THREE.Vector3, studioPos: THREE.Vector3) {
        const state = gameStore.getState();
        if (state.gameMode !== GameMode.Walk) {
            this.telescopeMarker.style.display = 'none';
            this.studioMarker.style.display = 'none';
            return;
        }

        // Project Telescope Marker
        const telVec = telescopePos.clone().add(new THREE.Vector3(0, 1.8, 0));
        const telDist = camera.position.distanceTo(telescopePos);
        telVec.project(camera);

        if (telVec.z < 1.0) {
            const x = (telVec.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-telVec.y * 0.5 + 0.5) * window.innerHeight;
            this.telescopeMarker.style.left = `${x}px`;
            this.telescopeMarker.style.top = `${y}px`;
            this.telescopeMarker.style.display = 'flex';
            const distSpan = this.telescopeMarker.querySelector('.dist') as HTMLElement;
            if (distSpan) distSpan.textContent = `(${telDist.toFixed(1)}m)`;
        } else {
            this.telescopeMarker.style.display = 'none';
        }

        // Project Studio Marker
        const studioVec = studioPos.clone().add(new THREE.Vector3(0, 2.5, 0));
        const studioDist = camera.position.distanceTo(studioPos);
        studioVec.project(camera);

        if (studioVec.z < 1.0) {
            const x = (studioVec.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-studioVec.y * 0.5 + 0.5) * window.innerHeight;
            this.studioMarker.style.left = `${x}px`;
            this.studioMarker.style.top = `${y}px`;
            this.studioMarker.style.display = 'flex';
            const distSpan = this.studioMarker.querySelector('.dist') as HTMLElement;
            if (distSpan) distSpan.textContent = `(${studioDist.toFixed(1)}m)`;
        } else {
            this.studioMarker.style.display = 'none';
        }
    }

    public dispose() {
        this.unsubscribe();
        this.container.remove();
    }
}
