import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { QUESTS } from '../data/quests';

export class TelescopeHUD {
    private container: HTMLElement;
    private vignette: HTMLElement;
    private reticle: HTMLElement;
    private starIdentifier: HTMLElement;
    private finderGuidance: HTMLElement;
    private infoPanel: HTMLElement;
    private fovZoomDisplay: HTMLElement;
    private raDecDisplay: HTMLElement;
    private exposureBar: HTMLElement;
    private exposureProgress: HTMLElement;
    private toggleExposureBtn: HTMLButtonElement;
    private frameTypeButtons: Map<string, HTMLButtonElement> = new Map();
    private calibrationBanner: HTMLElement;
    private unsubscribe: () => void;
    private idleTimer: number | null = null;

    constructor() {
        const overlay = document.getElementById('ui-overlay');
        if (!overlay) throw new Error("ui-overlay not found");

        this.container = document.createElement('div');
        this.container.className = 'telescope-overlay';
        this.container.style.display = 'none';

        this.vignette = document.createElement('div');
        this.vignette.className = 'telescope-vignette';

        this.reticle = document.createElement('div');
        this.reticle.className = 'telescope-reticle';

        this.starIdentifier = document.createElement('div');
        this.starIdentifier.className = 'star-identifier';
        this.starIdentifier.style.display = 'none';

        this.finderGuidance = document.createElement('div');
        this.finderGuidance.className = 'finder-guidance';
        this.finderGuidance.style.display = 'none';

        // Calibration Visor Banner (Dark/Flat/Bias active notification)
        this.calibrationBanner = document.createElement('div');
        this.calibrationBanner.className = 'calibration-banner';
        this.calibrationBanner.style.display = 'none';

        this.infoPanel = document.createElement('div');
        this.infoPanel.className = 'telescope-info';

        const readouts = document.createElement('div');
        readouts.className = 'telescope-readouts';
        this.fovZoomDisplay = document.createElement('div');
        this.raDecDisplay = document.createElement('div');
        readouts.appendChild(this.fovZoomDisplay);
        readouts.appendChild(this.raDecDisplay);

        const controlsRow = document.createElement('div');
        controlsRow.className = 'telescope-controls-row';

        this.toggleExposureBtn = document.createElement('button');
        this.toggleExposureBtn.className = 'shutter-btn';
        this.toggleExposureBtn.innerHTML = `<span>開始曝光 [空白鍵]</span>`;
        this.toggleExposureBtn.onclick = (e) => {
            e.stopPropagation();
            document.dispatchEvent(new CustomEvent('capture-photo'));
            this.showControls();
        };

        // Frame Type Selector Container (Light, Dark, Flat, Bias)
        const frameSelector = document.createElement('div');
        frameSelector.className = 'frame-selector-group';

        const frameTypes: { key: string; label: string; shortcut: string }[] = [
            { key: 'light', label: '亮場', shortcut: '1' },
            { key: 'dark', label: '暗場', shortcut: '2' },
            { key: 'flat', label: '平場', shortcut: '3' },
            { key: 'bias', label: '偏壓', shortcut: '4' },
        ];

        this.frameTypeButtons = new Map();
        frameTypes.forEach(ft => {
            const btn = document.createElement('button');
            btn.className = `frame-type-btn ${ft.key === 'light' ? 'active' : ''}`;
            btn.innerHTML = `<span>${ft.label}</span><kbd>${ft.shortcut}</kbd>`;
            btn.title = `切換為${ft.label}拍攝模式 [按鍵 ${ft.shortcut}]`;
            btn.onclick = (e) => {
                e.stopPropagation();
                gameStore.getState().setFrameType(ft.key as any);
                this.showControls();
            };
            this.frameTypeButtons.set(ft.key, btn);
            frameSelector.appendChild(btn);
        });

        controlsRow.appendChild(this.toggleExposureBtn);
        controlsRow.appendChild(frameSelector);

        this.exposureBar = document.createElement('div');
        this.exposureBar.className = 'exposure-bar';
        this.exposureBar.style.display = 'none';
        
        this.exposureProgress = document.createElement('div');
        this.exposureProgress.className = 'exposure-progress';
        this.exposureBar.appendChild(this.exposureProgress);

        const hints = document.createElement('div');
        hints.className = 'keyboard-hints';
        hints.textContent = '空白鍵: 曝光 · 1: 亮場 · 2: 暗場 · 3: 平場 · 4: 偏壓 · V: 切換 · 滾輪: 變焦 · ESC: 退出';

        this.infoPanel.appendChild(readouts);
        this.infoPanel.appendChild(controlsRow);
        this.infoPanel.appendChild(this.exposureBar);
        this.infoPanel.appendChild(hints);

        this.container.appendChild(this.vignette);
        this.container.appendChild(this.reticle);
        this.container.appendChild(this.calibrationBanner);
        this.container.appendChild(this.finderGuidance);
        this.container.appendChild(this.starIdentifier);
        this.container.appendChild(this.infoPanel);

        overlay.appendChild(this.container);

        this.setupActivityListeners();
        this.unsubscribe = gameStore.subscribe((state) => this.handleStateChange(state));
    }

    private setupActivityListeners() {
        const onActivity = () => {
            if (gameStore.getState().gameMode !== GameMode.Telescope) return;
            this.showControls();
        };

        window.addEventListener('mousemove', onActivity);
        window.addEventListener('wheel', onActivity, { passive: true });
        window.addEventListener('keydown', onActivity);
        window.addEventListener('mousedown', onActivity);
    }

    public showControls() {
        this.infoPanel.classList.remove('idle-hidden');
        if (this.idleTimer) clearTimeout(this.idleTimer);
        
        // If currently taking long exposure, keep panel visible
        if (gameStore.getState().isExposing) return;

        this.idleTimer = window.setTimeout(() => {
            if (gameStore.getState().gameMode === GameMode.Telescope && !gameStore.getState().isExposing) {
                this.infoPanel.classList.add('idle-hidden');
            }
        }, 2800);
    }

    private handleStateChange(state: any) {
        if (state.gameMode === GameMode.Telescope) {
            this.show();
        } else {
            this.hide();
        }
    }

    public update(identifiedTarget: any, isExposing: boolean, elapsedSeconds: number, _sampleCount: number, fov: number, zoom: number, ra: number, dec: number) {
        if (identifiedTarget) {
            this.starIdentifier.innerHTML = `
                <strong>${identifiedTarget.name}</strong><br/>
                <span style="font-size:12px;color:#94a3b8">星等: ${identifiedTarget.magnitude.toFixed(1)} · 赤經: ${identifiedTarget.ra.toFixed(2)}h · 赤緯: ${identifiedTarget.dec.toFixed(2)}°</span>
            `;
            this.starIdentifier.style.display = 'block';
        } else {
            this.starIdentifier.style.display = 'none';
        }

        this.fovZoomDisplay.textContent = `視場: ${fov.toFixed(1)}° (${zoom.toFixed(1)}x)`;
        this.raDecDisplay.textContent = `RA: ${ra.toFixed(2)}h | Dec: ${dec.toFixed(2)}°`;

        // ---- Target Finder Compass ----
        const state = gameStore.getState() as any;
        const completedIds: string[] = state.completedQuestIds || [];
        const activeQuest = QUESTS.find(q => {
            if (completedIds.includes(q.id)) return false;
            if (q.prerequisiteQuestId && !completedIds.includes(q.prerequisiteQuestId)) return false;
            return true;
        });

        // Find current target DSO
        let targetDso: any = null;
        if (state.customTrackedDsoId) {
            targetDso = DEEP_SKY_OBJECTS.find(d => d.id === state.customTrackedDsoId || d.name === state.customTrackedDsoId);
        } else if (activeQuest) {
            const targetObj = activeQuest.objectives.find(o => o.targetId);
            if (targetObj?.targetId) {
                targetDso = DEEP_SKY_OBJECTS.find(d => d.id === targetObj.targetId || d.name === targetObj.targetId);
            }
        }

        if (targetDso) {
            // Check if player owns electronic finder scope or GoTo system
            const ownedAccessories: string[] = state.accessories || [];
            const hasFinderSystem = ownedAccessories.includes('finder_red_dot') || ownedAccessories.includes('mount_goto');

            // Precise lock check: target must be identified by optical crosshair
            const isLocked = Boolean(identifiedTarget && (identifiedTarget.name.includes(targetDso.name) || identifiedTarget.name.includes(targetDso.commonName)));

            if (isLocked) {
                this.finderGuidance.className = 'finder-guidance locked';
                this.finderGuidance.innerHTML = `
                    <div class="fg-badge">目標已精確入鏡</div>
                    <div class="fg-title">${targetDso.commonName || targetDso.name}</div>
                    <div class="fg-sub">已成功定位天體！按空白鍵開始長曝光攝影</div>
                `;
                this.finderGuidance.style.display = 'flex';
            } else if (hasFinderSystem) {
                // Electronic Pointer Compass (Active only after purchasing finder accessory)
                let dRaDeg = (targetDso.ra - ra) * 15;
                while (dRaDeg > 180) dRaDeg -= 360;
                while (dRaDeg < -180) dRaDeg += 360;
                const dDecDeg = targetDso.dec - dec;
                const distDeg = Math.sqrt(Math.pow(dRaDeg * Math.cos(dec * Math.PI / 180), 2) + Math.pow(dDecDeg, 2));

                const angleRad = Math.atan2(dDecDeg, -dRaDeg);
                const deg360 = (angleRad * 180 / Math.PI + 360) % 360;
                const arrows = ['→', '↗', '↑', '↖', '←', '↙', '↓', '↘'];
                const arrowIdx = Math.round(deg360 / 45) % 8;
                const arrow = arrows[arrowIdx];

                this.finderGuidance.className = 'finder-guidance seeking pointer';
                this.finderGuidance.innerHTML = `
                    <div class="fg-badge">電子尋星系統已啟用</div>
                    <div class="fg-title">${arrow} ${targetDso.commonName || targetDso.name}</div>
                    <div class="fg-dist">距離視野: ${distDeg.toFixed(1)}° · 請順指針轉動鏡筒</div>
                `;
                this.finderGuidance.style.display = 'flex';
            } else {
                // Pure immersion manual mode before buying finder system: no floating boxes
                this.finderGuidance.style.display = 'none';
            }
        } else {
            this.finderGuidance.style.display = 'none';
        }

        // Update active frame type button & calibration banner
        const activeFrame = state.currentFrameType || 'light';
        this.frameTypeButtons.forEach((btn, key) => {
            btn.classList.toggle('active', key === activeFrame);
        });

        if (activeFrame === 'dark') {
            this.calibrationBanner.innerHTML = `<span>⬛ 【暗場模式 · 鏡頭蓋已蓋上】按空白鍵開始曝光，記錄感光元件熱噪點與壞點 [2]</span>`;
            this.calibrationBanner.className = 'calibration-banner dark-mode visible';
            this.calibrationBanner.style.display = 'block';
        } else if (activeFrame === 'flat') {
            this.calibrationBanner.innerHTML = `<span>⬜ 【平場模式 · 均勻柔光罩已開啟】按空白鍵快速曝光，記錄光學暗角與鏡片塵埃 [3]</span>`;
            this.calibrationBanner.className = 'calibration-banner flat-mode visible';
            this.calibrationBanner.style.display = 'block';
        } else if (activeFrame === 'bias') {
            this.calibrationBanner.innerHTML = `<span>🔲 【偏壓模式 · 極速快門讀出】按空白鍵 1/1000s 快速記錄晶片底噪 [4]</span>`;
            this.calibrationBanner.className = 'calibration-banner bias-mode visible';
            this.calibrationBanner.style.display = 'block';
        } else {
            this.calibrationBanner.style.display = 'none';
            this.calibrationBanner.className = 'calibration-banner';
        }

        if (isExposing) {
            this.infoPanel.classList.remove('idle-hidden');
            this.exposureBar.style.display = 'block';
            this.exposureProgress.style.width = '100%';
            this.toggleExposureBtn.className = 'shutter-btn exposing';
            const frameLabel = activeFrame === 'light' ? '曝光' : activeFrame === 'dark' ? '暗場曝光' : activeFrame === 'flat' ? '平場曝光' : '偏壓快門';
            this.toggleExposureBtn.innerHTML = `<span>結束${frameLabel}並存檔 [${elapsedSeconds.toFixed(1)}s]</span>`;
        } else {
            this.exposureBar.style.display = 'none';
            this.exposureProgress.style.width = '0%';
            this.toggleExposureBtn.className = 'shutter-btn';
            const frameLabel = activeFrame === 'light' ? '開始曝光' : activeFrame === 'dark' ? '拍攝暗場' : activeFrame === 'flat' ? '拍攝平場' : '拍攝偏壓';
            this.toggleExposureBtn.innerHTML = `<span>${frameLabel} [空白鍵]</span>`;
        }
    }

    public show() {
        this.container.style.display = 'block';
        this.showControls();
    }

    public hide() {
        this.container.style.display = 'none';
        if (this.idleTimer) clearTimeout(this.idleTimer);
    }

    public dispose() {
        this.unsubscribe();
        if (this.idleTimer) clearTimeout(this.idleTimer);
        this.container.remove();
    }
}
