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

            // Calculate angular distance and angle difference
            let dRaDeg = (targetDso.ra - ra) * 15;
            while (dRaDeg > 180) dRaDeg -= 360;
            while (dRaDeg < -180) dRaDeg += 360;
            const dDecDeg = targetDso.dec - dec;
            const distDeg = Math.sqrt(Math.pow(dRaDeg * Math.cos(dec * Math.PI / 180), 2) + Math.pow(dDecDeg, 2));

            const isLocked = distDeg <= Math.max(1.2, fov * 0.5);

            if (isLocked) {
                this.finderGuidance.className = 'finder-guidance locked';
                this.finderGuidance.innerHTML = `
                    <div class="fg-badge">🎯 目標已入鏡</div>
                    <div class="fg-title">${targetDso.commonName || targetDso.name}</div>
                    <div class="fg-sub">已成功定位天體！按空白鍵開始長曝光攝影</div>
                `;
            } else if (hasFinderSystem) {
                // Electronic Pointer Compass (Active only when finder accessory is purchased)
                const angleRad = Math.atan2(dDecDeg, -dRaDeg);
                const deg360 = (angleRad * 180 / Math.PI + 360) % 360;
                const arrows = ['→', '↗', '↑', '↖', '←', '↙', '↓', '↘'];
                const arrowIdx = Math.round(deg360 / 45) % 8;
                const arrow = arrows[arrowIdx];

                this.finderGuidance.className = 'finder-guidance seeking pointer';
                this.finderGuidance.innerHTML = `
                    <div class="fg-badge">🧭 電子尋星系統已啟用</div>
                    <div class="fg-title">${arrow} ${targetDso.commonName || targetDso.name}</div>
                    <div class="fg-dist">距離視野: ${distDeg.toFixed(1)}° · 請順箭頭方向轉動鏡筒</div>
                `;
            } else {
                // Pure Character Star-Hopping Teaching (Before buying finder system: NO POINTERS, ONLY TEACHING)
                const hoppingGuide = targetDso.starHoppingGuide || activeQuest?.starHoppingTip || '按 C 開啟星座連線，參考鄰近亮星特徵手動定位。';
                const charAvatar = activeQuest?.character?.avatarIcon || '🔭';
                const charName = activeQuest?.character?.name || '天文導師';

                this.finderGuidance.className = 'finder-guidance seeking teaching';
                this.finderGuidance.innerHTML = `
                    <div class="fg-badge">${charAvatar} ${charName} 傳授 · 認星尋星法</div>
                    <div class="fg-title">尋找目標：${targetDso.commonName || targetDso.name}</div>
                    <div class="fg-tip">📖 ${hoppingGuide}</div>
                    <div class="fg-note">（手動認星探索中 · 亦可在工作室購買「紅點尋星儀」開啟電子指針）</div>
                `;
            }
            this.finderGuidance.style.display = 'flex';
        } else {
            this.finderGuidance.style.display = 'none';
        }

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
