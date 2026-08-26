import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';
import { TELESCOPE_CONFIGS } from '../data/telescopes';

export class StudioUI {
    private container: HTMLElement;
    private headerMoney: HTMLElement;
    private contentArea: HTMLElement;
    private tabs: HTMLElement[];
    private unsubscribe: () => void;
    private currentTabIndex = 0;

    constructor() {
        const overlay = document.getElementById('ui-overlay');
        if (!overlay) throw new Error("ui-overlay not found");

        this.container = document.createElement('div');
        this.container.className = 'studio-panel';
        this.container.style.display = 'none';

        const header = document.createElement('div');
        header.className = 'studio-header';
        
        const title = document.createElement('h2');
        title.textContent = '觀星工作室 & 裝備商店';
        
        this.headerMoney = document.createElement('div');
        this.headerMoney.className = 'studio-money';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => {
            gameStore.getState().setGameMode(GameMode.Walk);
        };

        header.appendChild(title);
        header.appendChild(this.headerMoney);
        header.appendChild(closeBtn);

        const tabContainer = document.createElement('div');
        tabContainer.className = 'studio-tabs';
        
        this.tabs = [];
        ['照片庫', '望遠鏡升級', '配件商店'].forEach((name, index) => {
            const tab = document.createElement('button');
            tab.className = `studio-tab ${index === 0 ? 'active' : ''}`;
            tab.textContent = name;
            tab.onclick = () => this.switchTab(index);
            this.tabs.push(tab);
            tabContainer.appendChild(tab);
        });

        this.contentArea = document.createElement('div');
        this.contentArea.className = 'studio-body';

        this.container.appendChild(header);
        this.container.appendChild(tabContainer);
        this.container.appendChild(this.contentArea);

        overlay.appendChild(this.container);

        this.unsubscribe = gameStore.subscribe((state) => this.update(state));
    }

    private switchTab(index: number) {
        this.currentTabIndex = index;
        this.tabs.forEach((t, i) => t.classList.toggle('active', i === index));
        const state = gameStore.getState();
        
        this.contentArea.innerHTML = '';
        
        if (index === 0) this.renderGallery(state);
        else if (index === 1) this.renderTelescopes(state);
        else if (index === 2) this.renderAccessories(state);
    }

    private renderGallery(state: any) {
        // Sort photos newest first
        const allPhotos = [...(state.photos || [])].sort((a: any, b: any) => {
            const tA = a.timestamp instanceof Date ? a.timestamp.getTime() : new Date(a.timestamp).getTime();
            const tB = b.timestamp instanceof Date ? b.timestamp.getTime() : new Date(b.timestamp).getTime();
            return tB - tA;
        });
        const unsoldPhotos = allPhotos.filter((p: any) => !p.sold);
        const totalValue = unsoldPhotos.reduce((sum: number, p: any) => sum + (p.sellPrice || p.price || 0), 0);

        const topBar = document.createElement('div');
        topBar.style.display = 'flex';
        topBar.style.justifyContent = 'space-between';
        topBar.style.alignItems = 'center';
        topBar.style.marginBottom = '16px';

        const statsText = document.createElement('div');
        statsText.textContent = `未出售照片: ${unsoldPhotos.length} 張 (總價值: $${totalValue})`;

        const sellAllBtn = document.createElement('button');
        sellAllBtn.className = 'buy-btn';
        sellAllBtn.textContent = `全部出售 ($${totalValue})`;
        sellAllBtn.disabled = unsoldPhotos.length === 0;
        sellAllBtn.onclick = () => {
            const earned = state.sellAllPhotos();
            if (earned > 0) {
                this.switchTab(0);
            }
        };

        topBar.appendChild(statsText);
        topBar.appendChild(sellAllBtn);
        this.contentArea.appendChild(topBar);

        const grid = document.createElement('div');
        grid.className = 'photo-grid';

        allPhotos.forEach((photo: any, photoIndex: number) => {
            const card = document.createElement('div');
            card.className = `photo-card ${photo.sold ? 'sold' : ''}`;
            card.style.cursor = 'pointer';
            
            const price = photo.sellPrice || photo.price || 0;
            const quality = photo.quality || 'C';
            const repeatBadge = (photo.repeatPenaltyFactor !== undefined && photo.repeatPenaltyFactor < 1.0)
                ? `<span class="repeat-badge" title="重複拍攝，市場價值降低">重複</span>`
                : '';

            card.innerHTML = `
                <img src="${photo.imageDataUrl}" alt="${photo.targetName}" />
                <div class="photo-meta">
                    <span class="quality ${quality}">${quality}級</span>
                    ${repeatBadge}
                    <div class="target">${photo.targetName}</div>
                    <div class="price">${photo.sold ? '已售出' : (price === 0 ? '市場飽和 $0' : `$${price}`)}</div>
                    ${!photo.sold ? `<button class="photo-sell-btn" data-id="${photo.id}">出售</button>` : ''}
                </div>
            `;
            
            // Click card body → open lightbox
            card.onclick = (e) => {
                const target = e.target as HTMLElement;
                if (target.classList.contains('photo-sell-btn')) return; // handled below
                document.dispatchEvent(new CustomEvent('open-lightbox', { detail: { photoId: photo.id } }));
            };

            // Sell button (separate from lightbox)
            const sellBtn = card.querySelector('.photo-sell-btn') as HTMLButtonElement | null;
            if (sellBtn) {
                sellBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    state.sellPhoto(photo.id);
                    this.switchTab(0);
                });
            }
            
            grid.appendChild(card);
        });

        if (allPhotos.length === 0) {
            const emptyMsg = document.createElement('p');
            emptyMsg.style.textAlign = 'center';
            emptyMsg.style.opacity = '0.5';
            emptyMsg.style.marginTop = '40px';
            emptyMsg.textContent = '目前沒有照片。按 E 使用望遠鏡並按空白鍵拍照！';
            this.contentArea.appendChild(emptyMsg);
        } else {
            this.contentArea.appendChild(grid);
        }
    }

    private renderTelescopes(state: any) {
        const list = document.createElement('div');
        list.className = 'shop-list';

        TELESCOPE_CONFIGS.forEach((tel) => {
            const item = document.createElement('div');
            const isCurrent = state.telescopeLevel === tel.level;
            const isUnlocked = state.telescopeLevel >= tel.level;
            
            item.className = 'shop-item';
            
            item.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${tel.name} ${isCurrent ? '（當前使用中）' : ''}</div>
                    <div class="item-desc">口徑: ${tel.apertureMm}mm | 極限星等: ${tel.limitingMagnitude} | 最小視場: ${tel.minFov}°</div>
                </div>
                <div class="item-price">$${tel.price}</div>
            `;

            if (isCurrent) {
                const badge = document.createElement('button');
                badge.className = 'buy-btn owned';
                badge.textContent = '使用中';
                item.appendChild(badge);
            } else if (isUnlocked) {
                const badge = document.createElement('button');
                badge.className = 'buy-btn owned';
                badge.textContent = '已擁有';
                item.appendChild(badge);
            } else {
                const btn = document.createElement('button');
                btn.className = 'buy-btn';
                btn.textContent = '升級';
                btn.disabled = state.money < tel.price;
                btn.onclick = () => {
                    if (state.upgradeTelescope(tel.level)) {
                        this.switchTab(1);
                    }
                };
                item.appendChild(btn);
            }

            list.appendChild(item);
        });

        this.contentArea.appendChild(list);
    }

    private renderAccessories(state: any) {
        const list = document.createElement('div');
        list.className = 'shop-list';

        (state.accessories || []).forEach((acc: any) => {
            const item = document.createElement('div');
            item.className = 'shop-item';
            
            item.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${acc.name}</div>
                    <div class="item-desc">${acc.description}</div>
                </div>
                <div class="item-price">$${acc.price}</div>
            `;

            if (acc.owned) {
                const badge = document.createElement('button');
                badge.className = 'buy-btn owned';
                badge.textContent = '已擁有';
                item.appendChild(badge);
            } else {
                const btn = document.createElement('button');
                btn.className = 'buy-btn';
                btn.textContent = '購買';
                btn.disabled = state.money < acc.price;
                btn.onclick = () => {
                    if (state.buyAccessory(acc.id)) {
                        this.switchTab(2);
                    }
                };
                item.appendChild(btn);
            }

            list.appendChild(item);
        });

        this.contentArea.appendChild(list);
    }

    public update(state: any) {
        this.headerMoney.textContent = `$${state.money}`;
        if (state.gameMode === GameMode.Studio && this.container.style.display === 'none') {
            this.show();
        } else if (state.gameMode !== GameMode.Studio && this.container.style.display === 'flex') {
            this.hide();
        }
    }

    public show() {
        this.container.style.display = 'flex';
        this.switchTab(this.currentTabIndex);
    }

    public hide() {
        this.container.style.display = 'none';
    }

    public dispose() {
        this.unsubscribe();
        this.container.remove();
    }
}
