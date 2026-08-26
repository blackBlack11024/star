import { Quest, QuestCharacter } from '../data/quests';
import { gameStore } from '../game/GameStore';

export class StoryDialogue {
    private container: HTMLElement;
    private avatarEl: HTMLElement;
    private nameEl: HTMLElement;
    private roleEl: HTMLElement;
    private textEl: HTMLElement;
    private btnEl: HTMLButtonElement;
    private titleEl: HTMLElement;
    
    private currentLines: string[] = [];
    private lineIndex = 0;
    private onFinishCallback: (() => void) | null = null;
    private isTyping = false;
    private typingTimer: any = null;
    private currentLineText = '';

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'story-modal';
        this.container.style.display = 'none';

        this.container.innerHTML = `
            <div class="story-backdrop"></div>
            <div class="story-box">
                <div class="story-char-header">
                    <div class="story-avatar" id="story-avatar">👴</div>
                    <div class="story-char-meta">
                        <div class="story-char-name" id="story-name">陳伯</div>
                        <div class="story-char-role" id="story-role">合歡山老氣象員</div>
                    </div>
                    <div class="story-quest-title" id="story-title">【章節 0】第一道光</div>
                </div>
                <div class="story-body">
                    <div class="story-text" id="story-text"></div>
                </div>
                <div class="story-footer">
                    <button class="story-btn" id="story-next-btn">點擊繼續 ▶</button>
                </div>
            </div>
        `;

        document.body.appendChild(this.container);

        this.avatarEl = this.container.querySelector('#story-avatar')!;
        this.nameEl = this.container.querySelector('#story-name')!;
        this.roleEl = this.container.querySelector('#story-role')!;
        this.textEl = this.container.querySelector('#story-text')!;
        this.btnEl = this.container.querySelector('#story-next-btn')!;
        this.titleEl = this.container.querySelector('#story-title')!;

        this.btnEl.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleNext();
        });

        this.container.querySelector('.story-box')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleNext();
        });

        document.addEventListener('keydown', (e) => {
            if (this.container.style.display !== 'none') {
                if (e.code === 'Space' || e.code === 'Enter' || e.code === 'KeyE') {
                    this.handleNext();
                    e.preventDefault();
                }
            }
        });
    }

    public playIntroDialogue(quest: Quest, onFinish?: () => void) {
        this.currentLines = quest.introDialogue;
        this.lineIndex = 0;
        this.onFinishCallback = onFinish || null;
        this.setCharacter(quest.character, `【第 ${quest.chapter} 章】${quest.title}`);
        this.show();
        this.showCurrentLine();
    }

    public playCompleteDialogue(quest: Quest, onFinish?: () => void) {
        this.currentLines = quest.completeDialogue;
        this.lineIndex = 0;
        this.onFinishCallback = onFinish || null;
        this.setCharacter(quest.character, `【任務完成】${quest.title}`);
        this.show();
        this.showCurrentLine();
    }

    private setCharacter(char: QuestCharacter, title: string) {
        this.avatarEl.textContent = char.avatarIcon;
        this.nameEl.textContent = char.name;
        this.nameEl.style.color = char.color;
        this.roleEl.textContent = char.role;
        this.titleEl.textContent = title;
    }

    private show() {
        this.container.style.display = 'flex';
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
    }

    private hide() {
        this.container.style.display = 'none';
        if (this.onFinishCallback) {
            const cb = this.onFinishCallback;
            this.onFinishCallback = null;
            cb();
        }
    }

    private showCurrentLine() {
        if (this.lineIndex >= this.currentLines.length) {
            this.hide();
            return;
        }

        const line = this.currentLines[this.lineIndex];
        this.currentLineText = line;
        this.isTyping = true;
        this.textEl.textContent = '';
        this.btnEl.textContent = this.lineIndex === this.currentLines.length - 1 ? '接受委託 / 繼續 ▶' : '點擊繼續 ▶';

        if (this.typingTimer) clearInterval(this.typingTimer);
        let charIdx = 0;
        this.typingTimer = setInterval(() => {
            if (charIdx < line.length) {
                this.textEl.textContent = line.slice(0, ++charIdx);
            } else {
                this.isTyping = false;
                clearInterval(this.typingTimer);
            }
        }, 18);
    }

    private handleNext() {
        if (this.isTyping) {
            // Instantly complete typing
            if (this.typingTimer) clearInterval(this.typingTimer);
            this.isTyping = false;
            this.textEl.textContent = this.currentLineText;
        } else {
            this.lineIndex++;
            this.showCurrentLine();
        }
    }

    public dispose() {
        if (this.typingTimer) clearInterval(this.typingTimer);
        this.container.remove();
    }
}
