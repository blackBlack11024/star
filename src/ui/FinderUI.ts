import { gameStore } from '../game/GameStore';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { SOLAR_SYSTEM_TARGETS } from './CodexUI';
import { GameMode } from '../types';
import { calculateTargetVisibility } from '../astronomy/AstroTimeCalc';

export interface FinderTargetItem {
    id: string;
    name: string;
    commonName: string;
    type: 'planet' | 'nebula' | 'galaxy' | 'cluster' | 'planetary_nebula';
    typeName: string;
    ra: number;
    dec: number;
    magnitude: number;
    angularDist: number;
    currentAlt: number;
    isVisibleSky: boolean;
}

export class FinderUI {
    private container: HTMLElement;
    private isVisible = false;
    private currentCategory = 'all'; // all, in_fov, planet, nebula, galaxy, cluster
    private searchQuery = '';
    private updateInterval: any = null;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'finder-panel';
        this.container.style.display = 'none';
        document.body.appendChild(this.container);

        // Keydown listener for 'KeyF' inside telescope mode
        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyF' || e.key.toLowerCase() === 'f') {
                const mode = gameStore.getState().gameMode;
                if (mode === GameMode.Telescope) {
                    this.toggle();
                    e.stopPropagation();
                }
            } else if (e.code === 'Escape' && this.isVisible) {
                this.hide();
                e.stopPropagation();
            }
        });
    }

    public toggle() {
        if (this.isVisible) this.hide();
        else this.show();
    }

    public show() {
        this.isVisible = true;
        this.container.style.display = 'flex';
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
        this.render();
        // Periodically refresh distances and altitudes
        if (!this.updateInterval) {
            this.updateInterval = setInterval(() => {
                if (this.isVisible) this.updateDistancesOnly();
            }, 1000);
        }
    }

    public hide() {
        this.isVisible = false;
        this.container.style.display = 'none';
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    public get visible() {
        return this.isVisible;
    }

    private getTargets(): FinderTargetItem[] {
        const state = gameStore.getState();
        const curRa = state.telescopeRa;
        const curDec = state.telescopeDec;
        const lat = state.currentLocation?.latitude ?? 24.1;
        const lon = state.currentLocation?.longitude ?? 121.2;
        const time = state.currentTime;

        const results: FinderTargetItem[] = [];

        // 1. Planets
        for (const p of SOLAR_SYSTEM_TARGETS) {
            // Estimate rough RA/Dec for planets based on store if available
            const pState = (state as any).planets?.find((pl: any) => pl.name.toLowerCase().includes(p.name.toLowerCase()));
            const pRa = pState?.ra ?? 0;
            const pDec = pState?.dec ?? 0;
            const dist = this.calcAngularDistance(curRa, curDec, pRa, pDec);
            const vis = calculateTargetVisibility({ ra: pRa, dec: pDec } as any, lat, lon, time);

            results.push({
                id: p.id,
                name: p.name,
                commonName: p.commonName,
                type: 'planet',
                typeName: p.type,
                ra: pRa,
                dec: pDec,
                magnitude: p.magnitude,
                angularDist: dist,
                currentAlt: vis.currentAltitude,
                isVisibleSky: vis.isCurrentlyVisible
            });
        }

        // 2. DSOs
        const typeNames: Record<string, string> = {
            galaxy: '星系',
            nebula: '發射星雲',
            cluster: '星團',
            planetary_nebula: '行星狀星雲'
        };

        for (const dso of DEEP_SKY_OBJECTS) {
            const dist = this.calcAngularDistance(curRa, curDec, dso.ra, dso.dec);
            const vis = calculateTargetVisibility(dso, lat, lon, time);

            results.push({
                id: dso.id,
                name: dso.name,
                commonName: dso.commonName,
                type: dso.type as any,
                typeName: typeNames[dso.type] || dso.type,
                ra: dso.ra,
                dec: dso.dec,
                magnitude: dso.magnitude,
                angularDist: dist,
                currentAlt: vis.currentAltitude,
                isVisibleSky: vis.isCurrentlyVisible
            });
        }

        return results;
    }

    private calcAngularDistance(ra1: number, dec1: number, ra2: number, dec2: number): number {
        const radRa1 = (ra1 * Math.PI) / 12;
        const radDec1 = (dec1 * Math.PI) / 180;
        const radRa2 = (ra2 * Math.PI) / 12;
        const radDec2 = (dec2 * Math.PI) / 180;
        const dRa = radRa1 - radRa2;
        const cosAngle = Math.sin(radDec1) * Math.sin(radDec2) +
                         Math.cos(radDec1) * Math.cos(radDec2) * Math.cos(dRa);
        return (Math.acos(Math.max(-1, Math.min(1, cosAngle))) * 180) / Math.PI;
    }

    private render() {
        const state = gameStore.getState();
        const hasGoto = (state.accessories || []).some((a: any) => a.id === 'mount_goto' && a.owned);
        const currentTrackedId = state.customTrackedDsoId;

        const allTargets = this.getTargets();

        // Filter by category
        let filtered = allTargets;
        if (this.currentCategory === 'in_fov') {
            const fov = state.currentFov;
            filtered = allTargets.filter(t => t.angularDist <= fov / 2);
        } else if (this.currentCategory !== 'all') {
            filtered = allTargets.filter(t => t.type === this.currentCategory);
        }

        // Filter by search query
        if (this.searchQuery.trim()) {
            const q = this.searchQuery.trim().toLowerCase();
            filtered = filtered.filter(t => 
                t.id.toLowerCase().includes(q) ||
                t.name.toLowerCase().includes(q) ||
                t.commonName.toLowerCase().includes(q) ||
                t.typeName.toLowerCase().includes(q)
            );
        }

        // Sort: Visible in sky first, then closest angular distance
        filtered.sort((a, b) => {
            if (a.isVisibleSky && !b.isVisibleSky) return -1;
            if (!a.isVisibleSky && b.isVisibleSky) return 1;
            return a.angularDist - b.angularDist;
        });

        this.container.innerHTML = `
            <div class="finder-header">
                <div class="finder-title-row">
                    <span class="finder-badge">ELECTRONIC FINDER SCOPE</span>
                    <h3>電子尋星儀系統</h3>
                    <span class="finder-goto-tag ${hasGoto ? 'active' : ''}">
                        ${hasGoto ? 'GoTo 自動導星系統 [就緒]' : '手動導星模式 (未配備 GoTo)'}
                    </span>
                    <button class="close-btn" id="finder-close-btn" title="關閉 [ESC]">&times;</button>
                </div>
                <div class="finder-search-bar">
                    <input type="text" id="finder-search-input" placeholder="搜尋天體編號或名稱 (如 M42, 木星, 仙女座...)" value="${this.searchQuery}"/>
                </div>
                <div class="finder-category-tabs">
                    <button class="finder-tab ${this.currentCategory === 'all' ? 'active' : ''}" data-cat="all">全部天體</button>
                    <button class="finder-tab ${this.currentCategory === 'in_fov' ? 'active' : ''}" data-cat="in_fov">當前視野內</button>
                    <button class="finder-tab ${this.currentCategory === 'planet' ? 'active' : ''}" data-cat="planet">行星</button>
                    <button class="finder-tab ${this.currentCategory === 'nebula' ? 'active' : ''}" data-cat="nebula">星雲</button>
                    <button class="finder-tab ${this.currentCategory === 'galaxy' ? 'active' : ''}" data-cat="galaxy">星系</button>
                    <button class="finder-tab ${this.currentCategory === 'cluster' ? 'active' : ''}" data-cat="cluster">星團</button>
                </div>
            </div>
            <div class="finder-list" id="finder-items-list">
                ${filtered.length === 0 ? '<div class="finder-empty">未搜尋到相符的天體目標</div>' : ''}
                ${filtered.map(t => {
                    const isTracking = currentTrackedId === t.id || currentTrackedId === t.name;
                    const altStr = t.currentAlt >= 0 ? `空中仰角 +${Math.round(t.currentAlt)}°` : `地平線下 (${Math.round(t.currentAlt)}°)`;
                    const altColor = t.isVisibleSky ? '#34d399' : '#94a3b8';
                    const distStr = t.angularDist.toFixed(1);

                    return `
                        <div class="finder-card ${isTracking ? 'tracking' : ''} ${t.isVisibleSky ? 'sky-visible' : 'sky-hidden'}">
                            <div class="finder-card-left">
                                <div class="finder-card-tags">
                                    <span class="f-badge-id">${t.id}</span>
                                    <span class="f-badge-type">${t.typeName}</span>
                                    <span class="f-badge-mag">星等 ${t.magnitude}</span>
                                </div>
                                <div class="finder-card-name">${t.commonName || t.name} <span class="f-en-name">${t.name}</span></div>
                                <div class="finder-card-coords">
                                    <span>赤經 ${t.ra.toFixed(2)}h · 赤緯 ${t.dec.toFixed(1)}°</span>
                                    <span style="color:${altColor}; font-weight:500;"> · ${altStr}</span>
                                </div>
                            </div>
                            <div class="finder-card-right">
                                <div class="finder-dist-box">
                                    <span class="f-dist-label">角距離</span>
                                    <span class="f-dist-val">${distStr}°</span>
                                </div>
                                <div class="finder-card-btns">
                                    <button class="f-btn track-btn ${isTracking ? 'active' : ''}" data-id="${t.id}" data-name="${t.name}">
                                        ${isTracking ? '取消鎖定' : '鎖定導引'}
                                    </button>
                                    <button class="f-btn goto-btn ${hasGoto ? 'ready' : 'disabled'}" data-id="${t.id}" data-ra="${t.ra}" data-dec="${t.dec}" data-name="${t.commonName || t.name}">
                                        ${hasGoto ? 'GoTo 導向' : '需 GoTo 儀'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        // Bind events
        const closeBtn = this.container.querySelector('#finder-close-btn') as HTMLElement;
        if (closeBtn) closeBtn.onclick = () => this.hide();

        const searchInput = this.container.querySelector('#finder-search-input') as HTMLInputElement;
        if (searchInput) {
            searchInput.oninput = (e: any) => {
                this.searchQuery = e.target.value;
                this.renderListOnly();
            };
        }

        const tabs = this.container.querySelectorAll('.finder-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e: any) => {
                this.currentCategory = e.target.getAttribute('data-cat') || 'all';
                this.render();
            });
        });

        this.bindCardButtons();
    }

    private updateDistancesOnly() {
        const items = this.getTargets();
        const state = gameStore.getState();
        const curRa = state.telescopeRa;
        const curDec = state.telescopeDec;

        items.forEach(t => {
            const btn = this.container.querySelector(`.track-btn[data-id="${t.id}"]`);
            if (btn) {
                const card = btn.closest('.finder-card');
                if (card) {
                    const distVal = card.querySelector('.f-dist-val');
                    if (distVal) {
                        const d = this.calcAngularDistance(curRa, curDec, t.ra, t.dec);
                        distVal.textContent = `${d.toFixed(1)}°`;
                    }
                }
            }
        });
    }

    private renderListOnly() {
        const list = this.container.querySelector('#finder-items-list');
        if (!list) {
            this.render();
            return;
        }
        const state = gameStore.getState();
        const hasGoto = (state.accessories || []).some((a: any) => a.id === 'mount_goto' && a.owned);
        const currentTrackedId = state.customTrackedDsoId;

        const allTargets = this.getTargets();
        let filtered = allTargets;
        if (this.currentCategory === 'in_fov') {
            const fov = state.currentFov;
            filtered = allTargets.filter(t => t.angularDist <= fov / 2);
        } else if (this.currentCategory !== 'all') {
            filtered = allTargets.filter(t => t.type === this.currentCategory);
        }

        if (this.searchQuery.trim()) {
            const q = this.searchQuery.trim().toLowerCase();
            filtered = filtered.filter(t => 
                t.id.toLowerCase().includes(q) ||
                t.name.toLowerCase().includes(q) ||
                t.commonName.toLowerCase().includes(q) ||
                t.typeName.toLowerCase().includes(q)
            );
        }

        filtered.sort((a, b) => {
            if (a.isVisibleSky && !b.isVisibleSky) return -1;
            if (!a.isVisibleSky && b.isVisibleSky) return 1;
            return a.angularDist - b.angularDist;
        });

        list.innerHTML = `
            ${filtered.length === 0 ? '<div class="finder-empty">未搜尋到相符的天體目標</div>' : ''}
            ${filtered.map(t => {
                const isTracking = currentTrackedId === t.id || currentTrackedId === t.name;
                const altStr = t.currentAlt >= 0 ? `空中仰角 +${Math.round(t.currentAlt)}°` : `地平線下 (${Math.round(t.currentAlt)}°)`;
                const altColor = t.isVisibleSky ? '#34d399' : '#94a3b8';
                const distStr = t.angularDist.toFixed(1);

                return `
                    <div class="finder-card ${isTracking ? 'tracking' : ''} ${t.isVisibleSky ? 'sky-visible' : 'sky-hidden'}">
                        <div class="finder-card-left">
                            <div class="finder-card-tags">
                                <span class="f-badge-id">${t.id}</span>
                                <span class="f-badge-type">${t.typeName}</span>
                                <span class="f-badge-mag">星等 ${t.magnitude}</span>
                            </div>
                            <div class="finder-card-name">${t.commonName || t.name} <span class="f-en-name">${t.name}</span></div>
                            <div class="finder-card-coords">
                                <span>赤經 ${t.ra.toFixed(2)}h · 赤緯 ${t.dec.toFixed(1)}°</span>
                                <span style="color:${altColor}; font-weight:500;"> · ${altStr}</span>
                            </div>
                        </div>
                        <div class="finder-card-right">
                            <div class="finder-dist-box">
                                <span class="f-dist-label">角距離</span>
                                <span class="f-dist-val">${distStr}°</span>
                            </div>
                            <div class="finder-card-btns">
                                <button class="f-btn track-btn ${isTracking ? 'active' : ''}" data-id="${t.id}" data-name="${t.name}">
                                    ${isTracking ? '取消鎖定' : '鎖定導引'}
                                </button>
                                <button class="f-btn goto-btn ${hasGoto ? 'ready' : 'disabled'}" data-id="${t.id}" data-ra="${t.ra}" data-dec="${t.dec}" data-name="${t.commonName || t.name}">
                                    ${hasGoto ? 'GoTo 導向' : '需 GoTo 儀'}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        `;

        this.bindCardButtons();
    }

    private bindCardButtons() {
        const trackBtns = this.container.querySelectorAll('.track-btn');
        trackBtns.forEach(btn => {
            btn.addEventListener('click', (e: any) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const state = gameStore.getState();
                const current = state.customTrackedDsoId;

                if (current === id || current === name) {
                    state.setCustomTrackedDso(null);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: '已取消尋星鎖定', type: 'info' }
                    }));
                } else {
                    state.setCustomTrackedDso(id);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: `已鎖定目標: ${id}！鏡筒準星將顯示導向指針`, type: 'success' }
                    }));
                    this.hide();
                }
                this.render();
            });
        });

        const gotoBtns = this.container.querySelectorAll('.goto-btn');
        gotoBtns.forEach(btn => {
            btn.addEventListener('click', (e: any) => {
                e.stopPropagation();
                const hasGoto = (gameStore.getState().accessories || []).some((a: any) => a.id === 'mount_goto' && a.owned);
                if (!hasGoto) {
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: '尚未裝備「GoTo 電子自動尋星系統」，請先至工作室商店購買升級！', type: 'warning' }
                    }));
                    return;
                }

                const ra = parseFloat(btn.getAttribute('data-ra') || '0');
                const dec = parseFloat(btn.getAttribute('data-dec') || '0');
                const targetName = btn.getAttribute('data-name') || '';

                document.dispatchEvent(new CustomEvent('goto-target', {
                    detail: { ra, dec, targetName }
                }));

                this.hide();
            });
        });
    }

    public dispose() {
        if (this.updateInterval) clearInterval(this.updateInterval);
        this.container.remove();
    }
}
