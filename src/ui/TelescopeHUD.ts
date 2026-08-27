import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';

export class TelescopeHUD {
    private container: HTMLElement;
    private vignette: HTMLElement;
    private reticle: HTMLElement;
    private starIdentifier: HTMLElement;
    private infoPanel: HTMLElement;
    private fovZoomDisplay: HTMLElement;
    private raDecDisplay: HTMLElement;
    private exposureBar: HTMLElement;
    private exposureProgress: HTMLElement;
    private toggleExposureBtn: HTMLButtonElement;
    private frameTypeButtons: Map<string, HTMLButtonElement> = new Map();
    private calibrationBanner: HTMLElement;
    private eyepiecePhysicalMask: HTMLElement;
    private currentIdentifiedTarget: any = null;
    private unsubscribe: () => void;
    private idleTimer: number | null = null;

    constructor() {
        const overlay = document.getElementById('ui-overlay');
        if (!overlay) throw new Error("ui-overlay not found");

        this.container = document.createElement('div');
        this.container.className = 'telescope-overlay';
        this.container.style.display = 'none';

        this.eyepiecePhysicalMask = document.createElement('div');
        this.eyepiecePhysicalMask.className = 'eyepiece-physical-mask hidden';
        this.container.appendChild(this.eyepiecePhysicalMask);

        this.vignette = document.createElement('div');
        this.vignette.className = 'telescope-vignette';

        this.reticle = document.createElement('div');
        this.reticle.className = 'telescope-reticle';

        this.starIdentifier = document.createElement('div');
        this.starIdentifier.className = 'star-identifier';
        this.starIdentifier.style.display = 'none';

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
        this.toggleExposureBtn.innerHTML = `<span>開始曝光</span>`;
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

        const finderBtn = document.createElement('button');
        finderBtn.className = 'telescope-finder-btn';
        finderBtn.innerHTML = `<span>尋星儀</span><kbd>F</kbd>`;
        finderBtn.title = '尋星儀 [F]';
        finderBtn.onclick = (e) => {
            e.stopPropagation();
            document.dispatchEvent(new CustomEvent('toggle-finder-ui'));
        };

        controlsRow.appendChild(this.toggleExposureBtn);
        controlsRow.appendChild(frameSelector);
        controlsRow.appendChild(finderBtn);

        this.exposureBar = document.createElement('div');
        this.exposureBar.className = 'exposure-bar';
        this.exposureBar.style.display = 'none';
        
        this.exposureProgress = document.createElement('div');
        this.exposureProgress.className = 'exposure-progress';
        this.exposureBar.appendChild(this.exposureProgress);

        const hints = document.createElement('div');
        hints.className = 'keyboard-hints';
        hints.textContent = '空白鍵 曝光 · 1-4 場次 · V 循環 · 滾輪 變焦 · ESC 退出';

        this.infoPanel.appendChild(readouts);
        this.infoPanel.appendChild(controlsRow);
        this.infoPanel.appendChild(this.exposureBar);
        this.infoPanel.appendChild(hints);

        this.container.appendChild(this.vignette);
        this.container.appendChild(this.reticle);
        this.container.appendChild(this.calibrationBanner);
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
        this.currentIdentifiedTarget = identifiedTarget;
        if (identifiedTarget) {
            this.starIdentifier.innerHTML = `
                <strong>${identifiedTarget.name}</strong><br/>
                <span style="font-size:12px;color:#94a3b8">${identifiedTarget.magnitude.toFixed(1)} mag · RA ${identifiedTarget.ra.toFixed(2)}h · Dec ${identifiedTarget.dec.toFixed(2)}°</span>
            `;
            this.starIdentifier.style.display = 'block';
        } else {
            this.starIdentifier.style.display = 'none';
        }

        this.fovZoomDisplay.textContent = `視場: ${fov.toFixed(1)}° (${zoom.toFixed(1)}x)`;
        this.raDecDisplay.textContent = `RA: ${ra.toFixed(2)}h | Dec: ${dec.toFixed(2)}°`;

        const state = gameStore.getState() as any;

        // Update active frame type button & calibration banner
        const activeFrame = state.currentFrameType || 'light';
        this.frameTypeButtons.forEach((btn, key) => {
            btn.classList.toggle('active', key === activeFrame);
        });

        if (activeFrame === 'dark') {
            this.eyepiecePhysicalMask.className = 'eyepiece-physical-mask mask-dark';
            this.eyepiecePhysicalMask.innerHTML = `
                <div class="mask-cap-emboss">
                    <span style="font-size:15px;letter-spacing:0.1em;margin-bottom:6px;color:#f87171;">[ LENS CAP ]</span>
                    <span>LENS CAP ON</span>
                    <span style="font-size:11px;margin-top:4px;color:#f87171;">鏡頭蓋蓋上</span>
                </div>
            `;
            this.reticle.style.display = 'none';
            this.starIdentifier.style.display = 'none';
            this.calibrationBanner.innerHTML = `<span>暗場 · 鏡頭蓋已蓋上 · 按空白鍵曝光</span>`;
            this.calibrationBanner.className = 'calibration-banner dark-mode visible';
            this.calibrationBanner.style.display = 'block';
        } else if (activeFrame === 'bias') {
            this.eyepiecePhysicalMask.className = 'eyepiece-physical-mask mask-dark';
            this.eyepiecePhysicalMask.innerHTML = `
                <div class="mask-cap-emboss">
                    <span style="font-size:15px;letter-spacing:0.1em;margin-bottom:6px;color:#38bdf8;">[ FAST SHUTTER ]</span>
                    <span>FAST SHUTTER BIAS</span>
                    <span style="font-size:11px;margin-top:4px;color:#38bdf8;">快門底噪讀出</span>
                </div>
            `;
            this.reticle.style.display = 'none';
            this.starIdentifier.style.display = 'none';
            this.calibrationBanner.innerHTML = `<span>偏壓 · 極速快門 · 按空白鍵曝光</span>`;
            this.calibrationBanner.className = 'calibration-banner bias-mode visible';
            this.calibrationBanner.style.display = 'block';
        } else if (activeFrame === 'flat') {
            this.eyepiecePhysicalMask.className = 'eyepiece-physical-mask mask-flat';
            this.eyepiecePhysicalMask.innerHTML = `
                <div class="mask-flat-emboss">
                    <span style="font-size:15px;letter-spacing:0.1em;margin-bottom:6px;color:#0284c7;">[ FLAT PANEL ]</span>
                    <span>FLAT PANEL DIFFUSER</span>
                    <span style="font-size:11px;margin-top:4px;color:#0284c7;">平場柔光板</span>
                </div>
            `;
            this.reticle.style.display = 'none';
            this.starIdentifier.style.display = 'none';
            this.calibrationBanner.innerHTML = `<span>平場 · 柔光罩 · 按空白鍵曝光</span>`;
            this.calibrationBanner.className = 'calibration-banner flat-mode visible';
            this.calibrationBanner.style.display = 'block';
        } else {
            this.eyepiecePhysicalMask.className = 'eyepiece-physical-mask hidden';
            this.eyepiecePhysicalMask.innerHTML = '';
            this.reticle.style.display = 'block';
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
            this.toggleExposureBtn.innerHTML = `<span>${frameLabel}</span>`;
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

    public getCurrentIdentifiedTarget(): any {
        return this.currentIdentifiedTarget;
    }

    public dispose() {
        this.unsubscribe();
        if (this.idleTimer) clearTimeout(this.idleTimer);
        this.container.remove();
    }
}
