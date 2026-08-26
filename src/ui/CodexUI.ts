import { gameStore } from '../game/GameStore';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { QUESTS } from '../data/quests';
import { GameMode } from '../types';

export class CodexUI {
    private container: HTMLElement;
    private isVisible = false;
    private currentTab = 0;
    private unsubscribe: () => void;

    constructor() {
        const overlay = document.getElementById('ui-overlay') || document.body;
        this.container = document.createElement('div');
        this.container.className = 'codex-panel';
        this.container.style.display = 'none';
        overlay.appendChild(this.container);

        this.unsubscribe = gameStore.subscribe(() => {
            if (this.isVisible) this.render();
        });

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
        // Release pointer lock so cursor is visible and interactive
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

        const capturedTargets = new Set<string>(photos.map((p: any) => (p.targetName || '') as string));

        this.container.innerHTML = `
        <div class="codex-header">
            <h2>觀測圖鑑 & 任務日誌</h2>
            <button class="close-btn" id="codex-close-btn" title="關閉圖鑑 [ESC]">&times;</button>
        </div>
        <div class="codex-tabs">
            <button class="codex-tab ${this.currentTab === 0 ? 'active' : ''}" id="codex-tab-0">深空天體 (${capturedTargets.size}/${DEEP_SKY_OBJECTS.length})</button>
            <button class="codex-tab ${this.currentTab === 1 ? 'active' : ''}" id="codex-tab-1">主線任務 (${completedQuestIds.length}/${QUESTS.length})</button>
        </div>
        <div class="codex-body ${this.currentTab === 1 ? 'quest-mode' : ''}" id="codex-body"></div>
        `;

        const closeBtn = this.container.querySelector('#codex-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.hide();
            });
        }

        const tab0 = this.container.querySelector('#codex-tab-0');
        if (tab0) {
            tab0.addEventListener('click', (e) => {
                e.stopPropagation();
                this.currentTab = 0;
                this.render();
            });
        }

        const tab1 = this.container.querySelector('#codex-tab-1');
        if (tab1) {
            tab1.addEventListener('click', (e) => {
                e.stopPropagation();
                this.currentTab = 1;
                this.render();
            });
        }

        const body = this.container.querySelector('#codex-body') as HTMLElement;
        if (body) {
            if (this.currentTab === 0) this.renderDSOGrid(body, capturedTargets, photos);
            else this.renderQuestLog(body, completedQuestIds);
        }
    }

    private renderDSOGrid(body: HTMLElement, capturedTargets: Set<string>, photos: any[]) {
        body.innerHTML = '';
        const typeLabels: Record<string, string> = {
            'galaxy': '星系', 'nebula': '星雲', 'cluster': '星團', 'planetary_nebula': '行星狀星雲'
        };
        for (const dso of DEEP_SKY_OBJECTS) {
            const captured = capturedTargets.has(dso.commonName) || capturedTargets.has(dso.name);
            const bestPhoto = photos
                .filter((p: any) => p.targetName === dso.commonName || p.targetName === dso.name)
                .sort((a: any, b: any) => (b.score || 0) - (a.score || 0))[0];

            const card = document.createElement('div');
            card.className = `codex-dso-card ${captured ? 'captured' : 'locked'}`;
            card.innerHTML = `
                ${captured && bestPhoto ? `<img src="${bestPhoto.imageDataUrl}" alt="${dso.name}" class="codex-thumb"/>` : `<div class="codex-thumb-lock">${dso.name}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name">${captured ? dso.commonName : dso.name}</div>
                    <div class="codex-dso-meta">${typeLabels[dso.type] || dso.type} &bull; 視星等 ${dso.magnitude}</div>
                    ${captured ? `<div class="codex-dso-grade quality ${bestPhoto?.quality}">最高評級: ${bestPhoto?.quality}級 (${bestPhoto?.score}分)</div>` : '<div class="codex-dso-lock-icon">未觀測解鎖</div>'}
                </div>
            `;
            if (captured && bestPhoto) {
                card.style.cursor = 'pointer';
                card.title = '點擊查看高解析照片';
                card.onclick = (e) => {
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
                        <span style="font-size:12px; color:${char.color}; font-weight:700;">[${char.avatarIcon}]</span>
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
        this.unsubscribe();
        this.container.remove();
    }
}

