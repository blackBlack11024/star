import { gameStore } from '../game/GameStore';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { BRIGHT_STARS } from '../data/brightStars';
import { SOLAR_SYSTEM_TARGETS } from './CodexUI';
import { GameMode } from '../types';
import { calculateTargetVisibility } from '../astronomy/AstroTimeCalc';

export interface FinderTargetItem {
    id: string;
    name: string;
    commonName: string;
    type: 'planet' | 'star' | 'nebula' | 'galaxy' | 'cluster' | 'planetary_nebula';
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

        // Prevent any mouse/wheel events inside finder panel from leaking to telescope
        this.container.addEventListener('wheel', (e) => e.stopPropagation(), { passive: false });
        this.container.addEventListener('mousedown', (e) => e.stopPropagation());
        this.container.addEventListener('mouseup', (e) => e.stopPropagation());
        this.container.addEventListener('click', (e) => e.stopPropagation());

        // Close on Escape if visible
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && this.isVisible) {
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

        // 1. Real-time Solar System Planets
        const livePlanets = state.planets || [];
        for (const p of livePlanets) {
            const dist = this.calcAngularDistance(curRa, curDec, p.ra, p.dec);
            const vis = calculateTargetVisibility({ ra: p.ra, dec: p.dec } as any, lat, lon, time);

            results.push({
                id: p.id,
                name: p.nameEn || p.id,
                commonName: p.name,
                type: 'planet',
                typeName: '行星',
                ra: p.ra,
                dec: p.dec,
                magnitude: p.magnitude,
                angularDist: dist,
                currentAlt: vis.currentAltitude,
                isVisibleSky: vis.isCurrentlyVisible
            });
        }

        // Fallback planets if live array not populated yet
        if (livePlanets.length === 0) {
            for (const p of SOLAR_SYSTEM_TARGETS) {
                results.push({
                    id: p.id,
                    name: p.name,
                    commonName: p.commonName,
                    type: 'planet',
                    typeName: p.type,
                    ra: 0,
                    dec: 0,
                    magnitude: p.magnitude,
                    angularDist: 0,
                    currentAlt: 30,
                    isVisibleSky: true
                });
            }
        }

        // 2. Deep Sky Objects (DSOs)
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

        // 3. Bright Stars & Constellation Nav Stars
        for (const star of BRIGHT_STARS) {
            const dist = this.calcAngularDistance(curRa, curDec, star.ra, star.dec);
            const vis = calculateTargetVisibility({ ra: star.ra, dec: star.dec } as any, lat, lon, time);

            const parts = star.name.split('·').map(s => s.trim());
            const commonName = parts.length > 1 ? parts[1] : parts[0];
            const bayerName = parts[0];
            const id = star.hip ? `HIP ${star.hip}` : star.name;

            results.push({
                id,
                name: bayerName,
                commonName,
                type: 'star',
                typeName: '恆星',
                ra: star.ra,
                dec: star.dec,
                magnitude: star.mag,
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
                    <h3>尋星儀</h3>
                    <span class="finder-goto-tag ${hasGoto ? 'active' : ''}">
                        ${hasGoto ? 'GoTo 就緒' : '手動模式'}
                    </span>
                    <button class="close-btn" id="finder-close-btn" title="關閉">&times;</button>
                </div>
                <div class="finder-search-bar">
                    <input type="text" id="finder-search-input" placeholder="輸入編號或名稱…" value="${this.searchQuery}"/>
                </div>
                <div class="finder-category-tabs">
                    <button class="finder-tab ${this.currentCategory === 'all' ? 'active' : ''}" data-cat="all">全部</button>
                    <button class="finder-tab ${this.currentCategory === 'in_fov' ? 'active' : ''}" data-cat="in_fov">視野內</button>
                    <button class="finder-tab ${this.currentCategory === 'star' ? 'active' : ''}" data-cat="star">恆星</button>
                    <button class="finder-tab ${this.currentCategory === 'planet' ? 'active' : ''}" data-cat="planet">行星</button>
                    <button class="finder-tab ${this.currentCategory === 'nebula' ? 'active' : ''}" data-cat="nebula">星雲</button>
                    <button class="finder-tab ${this.currentCategory === 'galaxy' ? 'active' : ''}" data-cat="galaxy">星系</button>
                    <button class="finder-tab ${this.currentCategory === 'cluster' ? 'active' : ''}" data-cat="cluster">星團</button>
                </div>
            </div>
            <div class="finder-list" id="finder-items-list">
                ${filtered.length === 0 ? '<div class="finder-empty">無符合結果</div>' : ''}
                ${filtered.map(t => {
                    const isTracking = currentTrackedId === t.id || currentTrackedId === t.name;
                    const altStr = t.currentAlt >= 0 ? `仰角 +${Math.round(t.currentAlt)}°` : `地平線下`;
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
                                    <span class="f-dist-label">偏角</span>
                                    <span class="f-dist-val">${distStr}°</span>
                                </div>
                                <div class="finder-card-btns">
                                    <button class="f-btn track-btn ${isTracking ? 'active' : ''}" data-id="${t.id}" data-name="${t.name}">
                                        ${isTracking ? '取消' : '鎖定'}
                                    </button>
                                    <button class="f-btn goto-btn ${hasGoto ? 'ready' : 'manual'}" data-id="${t.id}" data-ra="${t.ra}" data-dec="${t.dec}" data-name="${t.commonName || t.name}">
                                        ${hasGoto ? 'GoTo' : '導引'}
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
            ${filtered.length === 0 ? '<div class="finder-empty">無符合結果</div>' : ''}
            ${filtered.map(t => {
                const isTracking = currentTrackedId === t.id || currentTrackedId === t.name;
                const altStr = t.currentAlt >= 0 ? `仰角 +${Math.round(t.currentAlt)}°` : `地平線下`;
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
                                <span class="f-dist-label">偏角</span>
                                <span class="f-dist-val">${distStr}°</span>
                            </div>
                            <div class="finder-card-btns">
                                <button class="f-btn track-btn ${isTracking ? 'active' : ''}" data-id="${t.id}" data-name="${t.name}">
                                    ${isTracking ? '取消' : '鎖定'}
                                </button>
                                <button class="f-btn goto-btn ${hasGoto ? 'ready' : 'manual'}" data-id="${t.id}" data-ra="${t.ra}" data-dec="${t.dec}" data-name="${t.commonName || t.name}">
                                    ${hasGoto ? 'GoTo' : '導引'}
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
                        detail: { message: '已取消鎖定', type: 'info' }
                    }));
                } else {
                    state.setCustomTrackedDso(id);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: `已鎖定 ${id}：請依照目鏡上方的導引箭頭轉動望遠鏡`, type: 'success' }
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
                const id = btn.getAttribute('data-id') || '';
                const targetName = btn.getAttribute('data-name') || id;
                const ra = parseFloat(btn.getAttribute('data-ra') || '0');
                const dec = parseFloat(btn.getAttribute('data-dec') || '0');

                if (!hasGoto) {
                    gameStore.getState().setCustomTrackedDso(id);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: `已鎖定 ${targetName}：請依照目鏡上方的導引箭頭手動轉動望遠鏡`, type: 'info' }
                    }));
                    this.hide();
                    return;
                }

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
