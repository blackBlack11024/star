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

        const durationSelect = document.createElement('select');
        [5, 15, 30, 60, 120, 300].forEach(val => {
            const opt = document.createElement('option');
            opt.value = val.toString();
            opt.textContent = `曝光 ${val}s`;
            durationSelect.appendChild(opt);
        });
        durationSelect.onchange = () => {
            gameStore.setState({ exposureDuration: parseInt(durationSelect.value) });
        };

        this.toggleExposureBtn = document.createElement('button');
        this.toggleExposureBtn.className = 'shutter-btn';
        this.toggleExposureBtn.textContent = '開始長曝光 (空白鍵)';
        this.toggleExposureBtn.onclick = () => {
            document.dispatchEvent(new CustomEvent('capture-photo'));
        };

        controlsRow.appendChild(durationSelect);
        controlsRow.appendChild(this.toggleExposureBtn);

        this.exposureBar = document.createElement('div');
        this.exposureBar.className = 'exposure-bar';
        this.exposureBar.style.display = 'none';
        
        this.exposureProgress = document.createElement('div');
        this.exposureProgress.className = 'exposure-progress';
        this.exposureBar.appendChild(this.exposureProgress);

        const hints = document.createElement('div');
        hints.className = 'keyboard-hints';
        hints.textContent = '滑鼠左鍵/方向鍵: 轉向 · 滑鼠右鍵: 微調對準 · 滾輪: 變焦縮放 · [空白鍵]: 拍照/曝光 · [ESC]: 退出';

        this.infoPanel.appendChild(readouts);
        this.infoPanel.appendChild(controlsRow);
        this.infoPanel.appendChild(this.exposureBar);
        this.infoPanel.appendChild(hints);

        this.container.appendChild(this.vignette);
        this.container.appendChild(this.reticle);
        this.container.appendChild(this.starIdentifier);
        this.container.appendChild(this.infoPanel);

        overlay.appendChild(this.container);

        this.unsubscribe = gameStore.subscribe((state) => this.handleStateChange(state));
    }

    private handleStateChange(state: any) {
        if (state.gameMode === GameMode.Telescope) {
            this.show();
        } else {
            this.hide();
        }
    }

    public update(identifiedTarget: any, progress: number, isExposing: boolean, fov: number, zoom: number, ra: number, dec: number) {
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
            this.exposureBar.style.display = 'block';
            this.exposureProgress.style.width = `${Math.min(100, progress * 100)}%`;
            this.toggleExposureBtn.textContent = `曝光中 (${Math.round(progress * 100)}%) - 點擊完成`;
        } else {
            this.exposureBar.style.display = 'none';
            this.exposureProgress.style.width = '0%';
            this.toggleExposureBtn.textContent = '開始長曝光 (空白鍵)';
        }
    }

    public show() {
        this.container.style.display = 'block';
    }

    public hide() {
        this.container.style.display = 'none';
    }

    public dispose() {
        this.unsubscribe();
        this.container.remove();
    }
}
