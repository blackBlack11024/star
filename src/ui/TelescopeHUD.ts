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

        controlsRow.appendChild(this.toggleExposureBtn);

        this.exposureBar = document.createElement('div');
        this.exposureBar.className = 'exposure-bar';
        this.exposureBar.style.display = 'none';
        
        this.exposureProgress = document.createElement('div');
        this.exposureProgress.className = 'exposure-progress';
        this.exposureBar.appendChild(this.exposureProgress);

        const hints = document.createElement('div');
        hints.className = 'keyboard-hints';
        hints.textContent = '滑鼠移動: 轉向視角 · 右鍵: 微調 · 滾輪: 變焦 · 空白鍵: 手動開始/結束曝光 · ESC: 退出';

        this.infoPanel.appendChild(readouts);
        this.infoPanel.appendChild(controlsRow);
        this.infoPanel.appendChild(this.exposureBar);
        this.infoPanel.appendChild(hints);

        this.container.appendChild(this.vignette);
        this.container.appendChild(this.reticle);
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

        if (isExposing) {
            this.infoPanel.classList.remove('idle-hidden');
            this.exposureBar.style.display = 'block';
            this.exposureProgress.style.width = '100%';
            this.toggleExposureBtn.className = 'shutter-btn exposing';
            this.toggleExposureBtn.innerHTML = `<span>結束曝光並存檔 [${elapsedSeconds.toFixed(1)}s]</span>`;
        } else {
            this.exposureBar.style.display = 'none';
            this.exposureProgress.style.width = '0%';
            this.toggleExposureBtn.className = 'shutter-btn';
            this.toggleExposureBtn.innerHTML = `<span>開始曝光 [空白鍵]</span>`;
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
