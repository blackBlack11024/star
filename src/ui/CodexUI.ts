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
        const overlay = document.getElementById('ui-overlay')!;
        this.container = document.createElement('div');
        this.container.className = 'codex-panel';
        this.container.style.display = 'none';
        overlay.appendChild(this.container);

        this.unsubscribe = gameStore.subscribe(() => {
            if (this.isVisible) this.render();
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyG') {
                const mode = gameStore.getState().gameMode;
                if (mode === GameMode.Walk || mode === GameMode.Studio) this.toggle();
            }
        });
    }

    public toggle() {
        this.isVisible = !this.isVisible;
        this.container.style.display = this.isVisible ? 'flex' : 'none';
        if (this.isVisible) this.render();
    }

    public show() { this.isVisible = true; this.container.style.display = 'flex'; this.render(); }
    public hide() { this.isVisible = false; this.container.style.display = 'none'; }

    private render() {
        const state = gameStore.getState() as any;
        const photos = state.photos || [];
        const completedQuestIds: string[] = state.completedQuestIds || [];

        const capturedTargets = new Set<string>(photos.map((p: any) => (p.targetName || '') as string));

        this.container.innerHTML = `
        <div class="codex-header">
            <h2>觀測圖鑑 & 任務日誌</h2>
            <button class="close-btn" id="codex-close">&times;</button>
        </div>
        <div class="codex-tabs">
            <button class="codex-tab ${this.currentTab === 0 ? 'active' : ''}" data-tab="0">深空天體 (${capturedTargets.size}/${DEEP_SKY_OBJECTS.length})</button>
            <button class="codex-tab ${this.currentTab === 1 ? 'active' : ''}" data-tab="1">任務進度 (${completedQuestIds.length}/${QUESTS.length})</button>
        </div>
        <div class="codex-body ${this.currentTab === 1 ? 'quest-mode' : ''}" id="codex-body"></div>
        `;

        this.container.querySelector('#codex-close')?.addEventListener('click', () => this.hide());
        this.container.querySelectorAll('.codex-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentTab = parseInt((btn as HTMLElement).dataset.tab || '0');
                this.render();
            });
        });

        const body = this.container.querySelector('#codex-body') as HTMLElement;
        if (this.currentTab === 0) this.renderDSOGrid(body, capturedTargets, photos);
        else this.renderQuestLog(body, completedQuestIds);
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
                .sort((a: any, b: any) => b.score - a.score)[0];

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
                card.onclick = () => {
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
            card.innerHTML = `
                <div class="quest-status">${done ? '已完成' : available ? '進行中' : '未解鎖'}</div>
                <div class="quest-chapter">第 ${quest.chapter} 章</div>
                <div class="quest-title">${done || available ? quest.title : '???'}</div>
                <div class="quest-story">${done || available ? quest.story : '完成前置任務以解鎖劇情'}</div>
                ${done || available ? `<div class="quest-objectives">${quest.objectives.map(o => `<div class="quest-obj ${done ? 'done' : ''}">${done ? '✓' : '○'} ${o.description}</div>`).join('')}</div>` : ''}
                <div class="quest-reward">任務獎勵: ${quest.rewards.money ? `$${quest.rewards.money}` : ''}${quest.rewards.title ? ` · 稱號「${quest.rewards.title}」` : ''}${quest.rewards.unlockLocation ? ` · 解鎖新地點` : ''}</div>
            `;
            body.appendChild(card);
        }
    }

    public dispose() {
        this.unsubscribe();
        this.container.remove();
    }
}
