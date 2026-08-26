import { gameStore } from '../game/GameStore';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { QUESTS } from '../data/quests';
import { GameMode } from '../types';
import { calculateTargetVisibility } from '../astronomy/AstroTimeCalc';

export interface SolarSystemTarget {
    id: string;
    name: string;
    commonName: string;
    type: string;
    desc: string;
    magnitude: number;
}

export const SOLAR_SYSTEM_TARGETS: SolarSystemTarget[] = [
    { id: 'moon', name: 'Moon', commonName: '月球', type: '天然衛星', desc: '地球唯一的天然衛星，表面覆蓋大量環形山（第谷、哥白尼）與月海暗斑。', magnitude: -12.5 },
    { id: 'saturn', name: 'Saturn', commonName: '土星', type: '氣態巨行星', desc: '擁有太陽系中最壯觀耀眼的光環系統、卡西尼環縫與金色雲帶。', magnitude: 0.5 },
    { id: 'jupiter', name: 'Jupiter', commonName: '木星', type: '氣態巨行星', desc: '太陽系行星之王，擁有絢麗氣態雲帶、大紅斑旋渦與4顆伽利略衛星。', magnitude: -2.6 },
    { id: 'mars', name: 'Mars', commonName: '火星', type: '類地行星', desc: '紅色荒漠行星，兩極擁有由乾冰與水冰組成的白色極冠。', magnitude: -1.5 },
    { id: 'venus', name: 'Venus', commonName: '金星', type: '類地行星', desc: '夜空中最璀璨的啟明星與長庚星，擁有顯著的金星相位盈虧。', magnitude: -4.3 },
    { id: 'mercury', name: 'Mercury', commonName: '水星', type: '類地行星', desc: '最接近太陽的行星，運行速度極快，僅在清晨或黃昏短暫可見。', magnitude: -0.4 },
    { id: 'uranus', name: 'Uranus', commonName: '天王星', type: '冰巨行星', desc: '淡藍綠色的遙遠冰巨星，自轉軸極度傾斜。', magnitude: 5.7 },
    { id: 'neptune', name: 'Neptune', commonName: '海王星', type: '冰巨行星', desc: '深藍色的太陽系最外側大行星，擁有強烈的風暴系統。', magnitude: 7.8 },
];

/** Smart fuzzy matching between captured photo names and catalog entries */
function getMatchingPhotos(target: { id?: string; name: string; commonName?: string }, photos: any[]): any[] {
    const n = (target.name || '').toLowerCase();
    const cn = (target.commonName || '').toLowerCase();
    const id = (target.id || '').toLowerCase();

    return photos.filter((p: any) => {
        const tn = (p.targetName || '').toLowerCase();
        if (!tn) return false;
        if (id && (tn.includes(id) || tn === id)) return true;
        if (cn && (tn.includes(cn) || cn.includes(tn))) return true;
        if (n && (tn.includes(n) || n.includes(tn))) return true;
        return false;
    }).sort((a: any, b: any) => (b.score || 0) - (a.score || 0));
}

export class CodexUI {
    private container: HTMLElement;
    private isVisible = false;
    private currentTab = 0; // 0: Messier Deep Sky, 1: Solar System, 2: Quests
    private onPhotoCapturedHandler: () => void;
    private onQuestCompletedHandler: () => void;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'codex-panel';
        this.container.style.display = 'none';
        document.body.appendChild(this.container);

        // Re-render when photo is captured or quest completed
        this.onPhotoCapturedHandler = () => {
            if (this.isVisible) this.render();
        };
        this.onQuestCompletedHandler = () => {
            if (this.isVisible) this.render();
        };

        document.addEventListener('photo-captured', this.onPhotoCapturedHandler);
        document.addEventListener('quest-completed', this.onQuestCompletedHandler);

        // Toggle on G key or Escape to close
        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyG' || e.key.toLowerCase() === 'g') {
                const mode = gameStore.getState().gameMode;
                if (mode === GameMode.Walk || mode === GameMode.Studio || this.isVisible) {
                    this.toggle();
                }
            } else if (e.code === 'Escape' && this.isVisible) {
                this.hide();
                e.stopPropagation();
            }
        });
    }

    public toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    public show() {
        this.isVisible = true;
        this.container.style.display = 'flex';
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
        this.render();
    }

    public hide() {
        this.isVisible = false;
        this.container.style.display = 'none';
    }

    public get visible() {
        return this.isVisible;
    }

    private render() {
        const state = gameStore.getState() as any;
        const photos = state.photos || [];
        const completedQuestIds: string[] = state.completedQuestIds || [];

        // Count unlocked items
        const unlockedDSOCount = DEEP_SKY_OBJECTS.filter(d => getMatchingPhotos(d, photos).length > 0).length;
        const unlockedPlanetCount = SOLAR_SYSTEM_TARGETS.filter(p => getMatchingPhotos(p, photos).length > 0).length;

        this.container.innerHTML = `
        <div class="codex-header">
            <h2>梅西耶觀測圖鑑 & 任務日誌</h2>
            <button class="close-btn" id="codex-close-btn" title="關閉圖鑑 [ESC]">&times;</button>
        </div>
        <div class="codex-tabs">
            <button class="codex-tab ${this.currentTab === 0 ? 'active' : ''}" id="codex-tab-0">梅西耶深空天體 (${unlockedDSOCount}/${DEEP_SKY_OBJECTS.length})</button>
            <button class="codex-tab ${this.currentTab === 1 ? 'active' : ''}" id="codex-tab-1">太陽系行星 (${unlockedPlanetCount}/${SOLAR_SYSTEM_TARGETS.length})</button>
            <button class="codex-tab ${this.currentTab === 2 ? 'active' : ''}" id="codex-tab-2">主線任務 (${completedQuestIds.length}/${QUESTS.length})</button>
        </div>
        <div class="codex-body ${this.currentTab === 2 ? 'quest-mode' : ''}" id="codex-body"></div>
        `;

        const closeBtn = this.container.querySelector('#codex-close-btn') as HTMLElement | null;
        if (closeBtn) {
            closeBtn.onclick = (e: MouseEvent) => {
                e.stopPropagation();
                this.hide();
            };
        }

        const tab0 = this.container.querySelector('#codex-tab-0') as HTMLElement | null;
        if (tab0) {
            tab0.onclick = (e: MouseEvent) => {
                e.stopPropagation();
                this.currentTab = 0;
                this.render();
            };
        }

        const tab1 = this.container.querySelector('#codex-tab-1') as HTMLElement | null;
        if (tab1) {
            tab1.onclick = (e: MouseEvent) => {
                e.stopPropagation();
                this.currentTab = 1;
                this.render();
            };
        }

        const tab2 = this.container.querySelector('#codex-tab-2') as HTMLElement | null;
        if (tab2) {
            tab2.onclick = (e: MouseEvent) => {
                e.stopPropagation();
                this.currentTab = 2;
                this.render();
            };
        }

        const body = this.container.querySelector('#codex-body') as HTMLElement;
        if (body) {
            if (this.currentTab === 0) this.renderDSOGrid(body, photos, state);
            else if (this.currentTab === 1) this.renderPlanetsGrid(body, photos, state);
            else this.renderQuestLog(body, completedQuestIds);
        }
    }

    private renderDSOGrid(body: HTMLElement, photos: any[], state: any) {
        body.innerHTML = '';
        const typeLabels: Record<string, { name: string; color: string }> = {
            'galaxy': { name: '星系 (Galaxy)', color: '#38bdf8' },
            'nebula': { name: '發射星雲 (Nebula)', color: '#f43f5e' },
            'cluster': { name: '星團 (Cluster)', color: '#fbbf24' },
            'planetary_nebula': { name: '行星狀星雲 (Planetary)', color: '#34d399' }
        };

        const currentTrackedId = state.customTrackedDsoId;

        for (const dso of DEEP_SKY_OBJECTS) {
            const matches = getMatchingPhotos(dso, photos);
            const captured = matches.length > 0;
            const bestPhoto = matches[0];
            const isTracking = currentTrackedId === dso.id || currentTrackedId === dso.name;

            const vis = calculateTargetVisibility(dso, state.currentLocation.latitude, state.currentLocation.longitude, state.currentTime);
            const typeInfo = typeLabels[dso.type] || { name: dso.type, color: '#94a3b8' };

            const card = document.createElement('div');
            card.className = `codex-dso-card ${captured ? 'captured' : 'locked'} ${isTracking ? 'tracking' : ''}`;
            card.innerHTML = `
                <div class="codex-card-top">
                    <span class="dso-badge" style="background:${typeInfo.color}22; color:${typeInfo.color}; border:1px solid ${typeInfo.color}44;">${dso.id}</span>
                    <span class="dso-type-tag" style="color:${typeInfo.color}; font-size:11px;">${typeInfo.name}</span>
                </div>
                ${captured && bestPhoto ? `<img src="${bestPhoto.imageDataUrl}" alt="${dso.name}" class="codex-thumb"/>` : `<div class="codex-thumb-lock">${dso.id}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name" title="${dso.commonName}">${dso.name} · ${dso.commonName}</div>
                    <div class="codex-dso-meta">視星等 ${dso.magnitude} · 視直徑 ${dso.sizeArcmin}' · RA ${dso.ra.toFixed(2)}h / Dec ${dso.dec.toFixed(1)}°</div>
                    <div class="codex-vis-badge ${vis.isCurrentlyVisible ? 'visible' : 'waiting'}">
                        ${vis.isCurrentlyVisible ? `目前空中可見 (仰角 ${Math.round(vis.currentAltitude)}°)` : `最佳時段: ${vis.bestTimeStr}`}
                    </div>
                    ${dso.starHoppingGuide ? `<div class="codex-guide-text"><strong>尋星導引：</strong>${dso.starHoppingGuide}</div>` : ''}
                    ${captured ? `<div class="codex-dso-grade quality ${bestPhoto?.quality}">最高評級: ${bestPhoto?.quality}級 (${bestPhoto?.score}分 · 價值 $${bestPhoto?.sellPrice})</div>` : '<div class="codex-dso-lock-icon">未觀測解鎖</div>'}
                </div>
                <div class="codex-card-actions">
                    <button class="codex-track-btn ${isTracking ? 'active' : ''}" id="btn-track-${dso.id}">
                        ${isTracking ? '追蹤中 (點擊取消)' : '設為望遠鏡尋星目標'}
                    </button>
                    ${captured && bestPhoto ? `<button class="codex-view-btn" id="btn-view-${dso.id}">查看相片</button>` : ''}
                </div>
            `;

            const trackBtn = card.querySelector(`#btn-track-${dso.id}`) as HTMLButtonElement | null;
            if (trackBtn) {
                trackBtn.onclick = (e) => {
                    e.stopPropagation();
                    if (isTracking) {
                        gameStore.getState().setCustomTrackedDso(null);
                        document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已取消追蹤 ${dso.id}`, type: 'info' } }));
                    } else {
                        gameStore.getState().setCustomTrackedDso(dso.id);
                        document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已將 ${dso.id} ${dso.commonName} 設為尋星目標！進入望遠鏡將啟用指針導引`, type: 'success' } }));
                    }
                    this.render();
                };
            }

            const viewBtn = card.querySelector(`#btn-view-${dso.id}`) as HTMLButtonElement | null;
            if (viewBtn && bestPhoto) {
                viewBtn.onclick = (e) => {
                    e.stopPropagation();
                    document.dispatchEvent(new CustomEvent('open-lightbox', { detail: { photoId: bestPhoto.id } }));
                };
            }

            body.appendChild(card);
        }
    }

    private renderPlanetsGrid(body: HTMLElement, photos: any[], state: any) {
        body.innerHTML = '';
        const currentTrackedId = state.customTrackedDsoId;

        for (const p of SOLAR_SYSTEM_TARGETS) {
            const matches = getMatchingPhotos(p, photos);
            const captured = matches.length > 0;
            const bestPhoto = matches[0];
            const isTracking = currentTrackedId === p.id || currentTrackedId === p.name;

            const card = document.createElement('div');
            card.className = `codex-dso-card ${captured ? 'captured' : 'locked'} ${isTracking ? 'tracking' : ''}`;
            card.innerHTML = `
                <div class="codex-card-top">
                    <span class="dso-badge" style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">${p.commonName}</span>
                    <span class="dso-type-tag" style="color:#94a3b8; font-size:11px;">${p.type}</span>
                </div>
                ${captured && bestPhoto ? `<img src="${bestPhoto.imageDataUrl}" alt="${p.commonName}" class="codex-thumb"/>` : `<div class="codex-thumb-lock">${p.commonName}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name">${p.commonName} · ${p.name}</div>
                    <div class="codex-dso-meta">${p.type} &bull; 視星等 ${p.magnitude}</div>
                    <div class="codex-guide-text" style="color:#cbd5e1; margin:6px 0;">${p.desc}</div>
                    ${captured ? `<div class="codex-dso-grade quality ${bestPhoto?.quality}">最高評級: ${bestPhoto?.quality}級 (${bestPhoto?.score}分 · 價值 $${bestPhoto?.sellPrice})</div>` : '<div class="codex-dso-lock-icon">未拍攝收錄</div>'}
                </div>
                <div class="codex-card-actions">
                    <button class="codex-track-btn ${isTracking ? 'active' : ''}" id="btn-track-planet-${p.id}">
                        ${isTracking ? '追蹤中 (點擊取消)' : '設為望遠鏡尋星目標'}
                    </button>
                    ${captured && bestPhoto ? `<button class="codex-view-btn" id="btn-view-planet-${p.id}">查看相片</button>` : ''}
                </div>
            `;

            const trackBtn = card.querySelector(`#btn-track-planet-${p.id}`) as HTMLButtonElement | null;
            if (trackBtn) {
                trackBtn.onclick = (e) => {
                    e.stopPropagation();
                    if (isTracking) {
                        gameStore.getState().setCustomTrackedDso(null);
                        document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已取消追蹤 ${p.commonName}`, type: 'info' } }));
                    } else {
                        gameStore.getState().setCustomTrackedDso(p.id);
                        document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已將 ${p.commonName} 設為尋星目標！進入望遠鏡將啟用指針導引`, type: 'success' } }));
                    }
                    this.render();
                };
            }

            const viewBtn = card.querySelector(`#btn-view-planet-${p.id}`) as HTMLButtonElement | null;
            if (viewBtn && bestPhoto) {
                viewBtn.onclick = (e) => {
                    e.stopPropagation();
                    document.dispatchEvent(new CustomEvent('open-lightbox', { detail: { photoId: bestPhoto.id } }));
                };
            }

            body.appendChild(card);
        }
    }

    private renderQuestLog(body: HTMLElement, completedQuestIds: string[]) {
        body.innerHTML = '';
        for (const quest of QUESTS) {
            const done = completedQuestIds.includes(quest.id);
            const prereqDone = !quest.prerequisiteQuestId || completedQuestIds.includes(quest.prerequisiteQuestId);
            const available = prereqDone && !done;

            const card = document.createElement('div');
            card.className = `codex-quest-card ${done ? 'done' : available ? 'available' : 'locked'}`;
            
            const char = quest.character;
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <div>
                        <div class="quest-status">${done ? '[已完成]' : available ? '[進行中]' : '[未解鎖]'}</div>
                        <div class="quest-chapter">第 ${quest.chapter} 章 · ${quest.title}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.06); padding:4px 10px; border-radius:16px;">
                        <span style="font-size:16px;">${char.avatarIcon}</span>
                        <span style="font-size:12px; color:${char.color}; font-weight:600;">${char.name}</span>
                    </div>
                </div>
                <div class="quest-story">${done || available ? quest.storySummary : '完成前置章節任務以解鎖劇情'}</div>
                ${done || available ? `
                    <div class="quest-objectives">
                        <div style="font-size:11px; color:#64748b; margin-bottom:4px;">任務目標：</div>
                        ${quest.objectives.map(o => `<div class="quest-obj ${done ? 'done' : ''}">${done ? '[完成]' : '[進行]'} ${o.description}</div>`).join('')}
                    </div>
                ` : ''}
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; border-top:1px solid rgba(255,255,255,0.08); padding-top:8px;">
                    <div class="quest-reward">獎勵: ${quest.rewards.money ? `$${quest.rewards.money}` : ''}${quest.rewards.unlockLocation ? ` · 解鎖新地點` : ''}</div>
                    ${done || available ? `<button class="quest-replay-btn" style="background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; padding:4px 12px; border-radius:6px; font-size:12px; cursor:pointer; transition:all 0.2s;">聆聽劇情對話</button>` : ''}
                </div>
            `;

            const replayBtn = card.querySelector('.quest-replay-btn') as HTMLButtonElement | null;
            if (replayBtn) {
                replayBtn.onclick = (e) => {
                    e.stopPropagation();
                    this.hide();
                    document.dispatchEvent(new CustomEvent('play-story-dialogue', { detail: { quest, mode: done ? 'complete' : 'intro' } }));
                };
            }

            body.appendChild(card);
        }
    }

    public dispose() {
        document.removeEventListener('photo-captured', this.onPhotoCapturedHandler);
        document.removeEventListener('quest-completed', this.onQuestCompletedHandler);
        this.container.remove();
    }
}
