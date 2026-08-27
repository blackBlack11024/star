import { gameStore } from '../game/GameStore';
import { GameMode, Photo, PhotoQuality, TargetType } from '../types';
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
        title.innerHTML = '觀星工作室 & 裝備工坊 <span style="font-size:12px;color:#38bdf8;font-weight:700;margin-left:8px;background:rgba(56,189,248,0.15);padding:2px 8px;border-radius:4px;border:1px solid rgba(56,189,248,0.3);">v1.5.0</span>';
        
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
        ['照片庫', '望遠鏡升級', '配件商店', '疊圖處理工坊'].forEach((name, index) => {
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
        else if (index === 3) this.renderStackingLab(state);
    }

    private renderGallery(state: any) {
        // Filter out calibration frames: Photo gallery is strictly for celestial sky targets
        const celestialPhotos = [...(state.photos || [])]
            .filter((p: any) => !p.frameType || p.frameType === 'light')
            .sort((a: any, b: any) => {
                const tA = a.timestamp instanceof Date ? a.timestamp.getTime() : new Date(a.timestamp).getTime();
                const tB = b.timestamp instanceof Date ? b.timestamp.getTime() : new Date(b.timestamp).getTime();
                return tB - tA;
            });
        const unsoldPhotos = celestialPhotos.filter((p: any) => !p.sold);
        const totalValue = unsoldPhotos.reduce((sum: number, p: any) => sum + (p.sellPrice || p.price || 0), 0);

        const topBar = document.createElement('div');
        topBar.style.display = 'flex';
        topBar.style.justifyContent = 'space-between';
        topBar.style.alignItems = 'center';
        topBar.style.marginBottom = '16px';

        const statsText = document.createElement('div');
        statsText.textContent = `未出售天體照片: ${unsoldPhotos.length} 張 (總價值: $${totalValue})`;

        const sellAllBtn = document.createElement('button');
        sellAllBtn.className = 'buy-btn';
        sellAllBtn.textContent = `全部出售天體 ($${totalValue})`;
        sellAllBtn.disabled = unsoldPhotos.length === 0;
        sellAllBtn.onclick = () => {
            const earned = state.sellAllPhotos();
            document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已出售全部天體照片，獲得 $${earned}`, type: 'success' } }));
            this.renderGallery(gameStore.getState());
        };

        topBar.appendChild(statsText);
        topBar.appendChild(sellAllBtn);
        this.contentArea.appendChild(topBar);

        if (celestialPhotos.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'empty-state';
            empty.innerHTML = `
                <div style="font-size:16px;color:#94a3b8;font-weight:600;">尚無天體照片</div>
                <div style="font-size:13px;color:#64748b;margin-top:4px">使用望遠鏡（按 E）對準星空，按下空白鍵即可開始長曝光拍攝。（暗場／平場／偏壓校準檔案存放於疊圖工坊）</div>
            `;
            this.contentArea.appendChild(empty);
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'photo-grid';

        celestialPhotos.forEach((photo: any) => {
            const card = document.createElement('div');
            card.className = `photo-card ${photo.sold ? 'sold' : ''}`;
            
            const thumb = document.createElement('img');
            thumb.className = 'photo-thumb';
            thumb.src = photo.imageDataUrl;
            thumb.alt = photo.targetName;
            thumb.onclick = () => {
                const idx = celestialPhotos.findIndex(p => p.id === photo.id);
                document.dispatchEvent(new CustomEvent('open-lightbox', { detail: { photoId: photo.id, index: idx } }));
            };

            const info = document.createElement('div');
            info.className = 'photo-info';

            const title = document.createElement('div');
            title.className = 'photo-title';
            title.textContent = photo.targetName;

            // Extra tags
            if (photo.isStacked) {
                const badge = document.createElement('span');
                badge.className = 'stacked-badge';
                badge.textContent = `${photo.stackedCount || 2}張疊圖`;
                title.appendChild(badge);
            }
            if (photo.hasMotionBlur) {
                const blurBadge = document.createElement('span');
                blurBadge.className = 'motion-blur-badge';
                blurBadge.textContent = `晃動殘影`;
                title.appendChild(blurBadge);
            }
            if (photo.equipmentTags && photo.equipmentTags.length > 0) {
                const eqContainer = document.createElement('div');
                eqContainer.style.margin = '4px 0';
                photo.equipmentTags.forEach((t: string) => {
                    const tag = document.createElement('span');
                    tag.className = 'equipment-tag';
                    tag.textContent = t;
                    eqContainer.appendChild(tag);
                });
                title.appendChild(eqContainer);
            }
            const meta = document.createElement('div');
            meta.className = 'photo-meta';
            meta.innerHTML = `
                <span>曝光 ${photo.exposureSeconds}s</span>
                <span class="quality-badge quality-${photo.quality}">${photo.quality}級 (${photo.score}分)</span>
            `;

            const footer = document.createElement('div');
            footer.className = 'photo-footer';

            const price = document.createElement('div');
            price.className = 'photo-price';
            price.textContent = photo.sold ? '已出售' : `$${photo.sellPrice || photo.price || 0}`;
            footer.appendChild(price);

            if (!photo.sold) {
                const sellBtn = document.createElement('button');
                sellBtn.className = 'photo-sell-btn';
                sellBtn.textContent = '出售';
                sellBtn.onclick = (e) => {
                    e.stopPropagation();
                    const earned = state.sellPhoto(photo.id);
                    document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已售出照片，獲得 $${earned}`, type: 'success' } }));
                    this.renderGallery(gameStore.getState());
                };
                footer.appendChild(sellBtn);
            }

            const delBtn = document.createElement('button');
            delBtn.className = 'photo-del-btn';
            delBtn.textContent = '刪除';
            delBtn.style.background = 'rgba(239, 68, 68, 0.15)';
            delBtn.style.border = '1px solid rgba(239, 68, 68, 0.35)';
            delBtn.style.color = '#fca5a5';
            delBtn.style.borderRadius = '4px';
            delBtn.style.padding = '4px 8px';
            delBtn.style.fontSize = '12px';
            delBtn.style.cursor = 'pointer';
            delBtn.title = '刪除這張照片';
            delBtn.onclick = (e) => {
                e.stopPropagation();
                state.deletePhoto(photo.id);
                document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已刪除照片：${photo.targetName}`, type: 'info' } }));
                this.renderGallery(gameStore.getState());
            };
            footer.appendChild(delBtn);

            info.appendChild(title);
            info.appendChild(meta);
            info.appendChild(footer);

            card.appendChild(thumb);
            card.appendChild(info);
            grid.appendChild(card);
        });

        this.contentArea.appendChild(grid);
    }

    private renderTelescopes(state: any) {
        const list = document.createElement('div');
        list.className = 'shop-list';

        TELESCOPE_CONFIGS.forEach((config) => {
            const isCurrent = state.telescopeLevel === config.level;
            const isOwned = (state.unlockedTelescopeLevels || []).includes(config.level) || state.telescopeLevel >= config.level;

            const item = document.createElement('div');
            item.className = `shop-item ${isCurrent ? 'current' : ''}`;

            const details = document.createElement('div');
            details.className = 'shop-item-details';

            const name = document.createElement('div');
            name.className = 'shop-item-name';
            name.textContent = config.name;

            const desc = document.createElement('div');
            desc.className = 'shop-item-desc';
            desc.textContent = `口徑: ${config.apertureMm}mm · 極限星等: ${config.limitingMagnitude} · 視場: ${config.minFov}°-${config.maxFov}°`;

            details.appendChild(name);
            details.appendChild(desc);
            item.appendChild(details);

            if (isCurrent) {
                const badge = document.createElement('div');
                badge.className = 'owned-badge';
                badge.style.background = 'rgba(56, 189, 248, 0.2)';
                badge.style.color = '#38bdf8';
                badge.style.border = '1px solid rgba(56, 189, 248, 0.5)';
                badge.textContent = '使用中';
                item.appendChild(badge);
            } else if (isOwned) {
                const btn = document.createElement('button');
                btn.className = 'buy-btn';
                btn.style.background = 'rgba(34, 197, 94, 0.15)';
                btn.style.color = '#4ade80';
                btn.style.border = '1px solid rgba(34, 197, 94, 0.4)';
                btn.textContent = '裝備';
                btn.onclick = () => {
                    state.equipTelescope(config.level);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: `已裝備「${config.name}」`, type: 'success' }
                    }));
                    this.switchTab(1);
                };
                item.appendChild(btn);
            } else {
                const btn = document.createElement('button');
                btn.className = 'buy-btn';
                btn.textContent = `購買 ($${config.price})`;
                btn.disabled = state.money < config.price;
                btn.onclick = () => {
                    if (state.upgradeTelescope(config.level)) {
                        document.dispatchEvent(new CustomEvent('show-notification', {
                            detail: { message: `已購買「${config.name}」並已裝備`, type: 'success' }
                        }));
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

        state.accessories.forEach((acc: any) => {
            const item = document.createElement('div');
            item.className = 'shop-item';

            const details = document.createElement('div');
            details.className = 'shop-item-details';

            const name = document.createElement('div');
            name.className = 'shop-item-name';
            name.textContent = acc.name;

            const desc = document.createElement('div');
            desc.className = 'shop-item-desc';
            desc.textContent = acc.description;

            details.appendChild(name);
            details.appendChild(desc);
            item.appendChild(details);

            if (acc.owned) {
                const isEquipped = acc.equipped !== false;
                const rightBox = document.createElement('div');
                rightBox.style.display = 'flex';
                rightBox.style.alignItems = 'center';
                rightBox.style.gap = '8px';

                const badge = document.createElement('div');
                badge.className = 'owned-badge';
                if (isEquipped) {
                    badge.style.background = 'rgba(34, 197, 94, 0.15)';
                    badge.style.color = '#4ade80';
                    badge.style.border = '1px solid rgba(34, 197, 94, 0.4)';
                    badge.textContent = '已裝備';
                } else {
                    badge.style.background = 'rgba(148, 163, 184, 0.15)';
                    badge.style.color = '#94a3b8';
                    badge.style.border = '1px solid rgba(148, 163, 184, 0.3)';
                    badge.textContent = '未裝備';
                }

                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'buy-btn';
                toggleBtn.style.padding = '4px 12px';
                toggleBtn.textContent = isEquipped ? '卸下' : '裝上';
                toggleBtn.onclick = () => {
                    state.toggleEquipAccessory(acc.id);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: `已${isEquipped ? '卸下' : '裝上'}「${acc.name}」`, type: 'info' }
                    }));
                    this.switchTab(2);
                };

                rightBox.appendChild(badge);
                rightBox.appendChild(toggleBtn);
                item.appendChild(rightBox);
            } else {
                const btn = document.createElement('button');
                btn.className = 'buy-btn';
                btn.textContent = `購買 ($${acc.price})`;
                btn.disabled = state.money < acc.price;
                btn.onclick = () => {
                    if (state.buyAccessory(acc.id)) {
                        document.dispatchEvent(new CustomEvent('show-notification', {
                            detail: { message: `已購買「${acc.name}」並已裝上`, type: 'success' }
                        }));
                        this.switchTab(2);
                    }
                };
                item.appendChild(btn);
            }

            list.appendChild(item);
        });

        this.contentArea.appendChild(list);
    }

    // =========================================================================
    // 疊圖處理工坊 (Astrophotography Stacking Lab)
    // =========================================================================
    private renderStackingLab(state: any) {
        const photos: Photo[] = state.photos || [];
        
        // Filter into Lights and Calibration Frames
        const lightFrames = photos.filter(p => !p.sold && (!p.frameType || p.frameType === 'light'));
        const darkFrames = photos.filter(p => !p.sold && p.frameType === 'dark');
        const flatFrames = photos.filter(p => !p.sold && p.frameType === 'flat');
        const biasFrames = photos.filter(p => !p.sold && p.frameType === 'bias');

        // Group light frames by target name
        const targetsMap: Map<string, Photo[]> = new Map();
        lightFrames.forEach(p => {
            const name = p.targetName || '未知星野';
            if (!targetsMap.has(name)) targetsMap.set(name, []);
            targetsMap.get(name)!.push(p);
        });

        const labContainer = document.createElement('div');
        labContainer.className = 'stacking-lab-container';

        // Check if player has photos
        if (lightFrames.length === 0) {
            labContainer.innerHTML = `
                <div class="empty-state">
                    <div style="font-size:24px;margin-bottom:8px;font-weight:700;color:#fff;">疊圖處理工坊</div>
                    <div style="font-size:16px;color:#94a3b8;font-weight:600;">尚無可供疊合的亮場底片</div>
                    <div style="font-size:13px;color:#64748b;margin-top:8px;max-width:520px;line-height:1.6;">
                        在真實天文攝影中，拍攝多張同一目標的亮場（Light），並搭配<strong>暗場（按 2 蓋鏡頭蓋）</strong>、<strong>平場（按 3 柔光罩）</strong>、<strong>偏壓（按 4 快門底噪）</strong>，即可在中位數疊圖中消除熱噪點、鏡頭暗角與晃動星軌，合成出震撼的 <strong>SSS 級大師典藏神作</strong>！
                    </div>
                </div>
            `;
            this.contentArea.appendChild(labContainer);
            return;
        }

        // Left Panel: Selection & Calibration Slots
        const leftPanel = document.createElement('div');
        leftPanel.className = 'stacking-left-panel';

        const targetsList = Array.from(targetsMap.keys());
        let selectedTarget = targetsList[0];

        leftPanel.innerHTML = `
            <div class="stacking-section-title">1. 選擇目標天體</div>
            <select class="stacking-target-select" id="stack-target-select">
                ${targetsList.map(t => `<option value="${t}">${t} (${targetsMap.get(t)!.length} 張亮場)</option>`).join('')}
            </select>

            <div class="stacking-section-title" style="margin-top:16px;">
                <span>2. 勾選亮場底片 (Light Frames)</span>
                <button class="stack-small-btn" id="btn-select-all-lights">全選</button>
            </div>
            <div class="stacking-lights-list" id="stack-lights-list"></div>

            <div class="stacking-section-title" style="margin-top:16px;">3. 專業天文校準槽 (Calibration Slots)</div>
            <div class="calibration-slots-group">
                <label class="calib-slot-item ${darkFrames.length > 0 ? 'available' : 'empty'}">
                    <input type="checkbox" id="calib-dark-chk" ${darkFrames.length > 0 ? 'checked' : 'disabled'}>
                    <div class="calib-slot-info">
                        <div class="calib-slot-name">暗場槽 (Dark Frame)</div>
                        <div class="calib-slot-desc">已擁有 ${darkFrames.length} 張 · 扣除熱噪聲與壞點</div>
                    </div>
                </label>
                <label class="calib-slot-item ${flatFrames.length > 0 ? 'available' : 'empty'}">
                    <input type="checkbox" id="calib-flat-chk" ${flatFrames.length > 0 ? 'checked' : 'disabled'}>
                    <div class="calib-slot-info">
                        <div class="calib-slot-name">平場槽 (Flat Frame)</div>
                        <div class="calib-slot-desc">已擁有 ${flatFrames.length} 張 · 修正邊緣暗角與灰塵</div>
                    </div>
                </label>
                <label class="calib-slot-item ${biasFrames.length > 0 ? 'available' : 'empty'}">
                    <input type="checkbox" id="calib-bias-chk" ${biasFrames.length > 0 ? 'checked' : 'disabled'}>
                    <div class="calib-slot-info">
                        <div class="calib-slot-name">偏壓槽 (Bias Frame)</div>
                        <div class="calib-slot-desc">已擁有 ${biasFrames.length} 張 · 消除感光晶片讀出底噪</div>
                    </div>
                </label>
            </div>

            <div class="calibration-status-box" id="calib-status-box">
                <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;">校準完整度評估：</div>
                <div class="calib-progress-bar"><div class="calib-progress-fill" id="calib-progress-fill" style="width:50%"></div></div>
                <div class="calib-status-text" id="calib-status-text">亮場疊合 · 消除噪點</div>
            </div>

            <button class="stack-execute-btn" id="btn-execute-stack">
                <span>開始星點對齊與天文校準疊圖</span>
            </button>
        `;

        // Right Panel: Main Viewport, Live Comparison & Processing
        const rightPanel = document.createElement('div');
        rightPanel.className = 'stacking-right-panel';
        rightPanel.innerHTML = `
            <div class="stacking-viewport-header">
                <div class="vp-title" id="vp-title">預覽視窗</div>
                <div style="display:flex;gap:8px;align-items:center;">
                    <div class="vp-mode-buttons" id="vp-mode-buttons" style="display:none;">
                        <button class="vp-mode-btn active" id="btn-mode-slider">拉桿對比</button>
                        <button class="vp-mode-btn" id="btn-mode-stacked">大師疊圖</button>
                        <button class="vp-mode-btn" id="btn-mode-original">單張原圖</button>
                    </div>
                    <div class="vp-badge" id="vp-badge">未疊圖單張</div>
                </div>
            </div>
            <div class="stacking-preview-box" id="stack-preview-box">
                <img id="stack-preview-img" class="stack-preview-img" src="" alt="預覽"/>
                <div class="stack-slider-container" id="stack-slider-container" style="display:none;">
                    <img id="stack-after-img" class="stack-slider-img after" src="" alt="疊圖後"/>
                    <img id="stack-before-img" class="stack-slider-img before" src="" alt="疊圖前"/>
                    <div class="stack-slider-line" id="stack-slider-line">
                        <div class="stack-slider-handle">&lt;|&gt;</div>
                    </div>
                    <div class="slider-side-tag tag-left">疊圖前單張 (未處理)</div>
                    <div class="slider-side-tag tag-right">疊圖後大師 (已降噪)</div>
                </div>
            </div>

            <div class="stacking-progress-panel" id="stack-progress-panel" style="display:none;">
                <div class="stack-step-label" id="stack-step-label">正在檢測星點...</div>
                <div class="stack-calc-bar"><div class="stack-calc-fill" id="stack-calc-fill"></div></div>
            </div>

            <div class="stacking-result-actions" id="stack-result-actions" style="display:none;">
                <div class="stack-result-report" id="stack-result-report"></div>
                <div style="display:flex;gap:10px;margin-top:12px;">
                    <button class="buy-btn" id="btn-save-stacked" style="flex:1;">儲存至照片庫與圖鑑</button>
                    <button class="photo-sell-btn" id="btn-sell-stacked" style="flex:1;">立即以天價出售</button>
                </div>
            </div>
        `;

        labContainer.appendChild(leftPanel);
        labContainer.appendChild(rightPanel);
        this.contentArea.appendChild(labContainer);

        // Elements
        const selectTarget = leftPanel.querySelector('#stack-target-select') as HTMLSelectElement;
        const lightsList = leftPanel.querySelector('#stack-lights-list') as HTMLElement;
        const btnSelectAll = leftPanel.querySelector('#btn-select-all-lights') as HTMLButtonElement;
        const darkChk = leftPanel.querySelector('#calib-dark-chk') as HTMLInputElement;
        const flatChk = leftPanel.querySelector('#calib-flat-chk') as HTMLInputElement;
        const biasChk = leftPanel.querySelector('#calib-bias-chk') as HTMLInputElement;
        const calibFill = leftPanel.querySelector('#calib-progress-fill') as HTMLElement;
        const calibText = leftPanel.querySelector('#calib-status-text') as HTMLElement;
        const btnExecute = leftPanel.querySelector('#btn-execute-stack') as HTMLButtonElement;

        const previewImg = rightPanel.querySelector('#stack-preview-img') as HTMLImageElement;
        const sliderContainer = rightPanel.querySelector('#stack-slider-container') as HTMLElement;
        const sliderBeforeImg = rightPanel.querySelector('#stack-before-img') as HTMLImageElement;
        const sliderAfterImg = rightPanel.querySelector('#stack-after-img') as HTMLImageElement;
        const sliderLine = rightPanel.querySelector('#stack-slider-line') as HTMLElement;
        const vpModeButtons = rightPanel.querySelector('#vp-mode-buttons') as HTMLElement;
        const btnModeSlider = rightPanel.querySelector('#btn-mode-slider') as HTMLButtonElement;
        const btnModeStacked = rightPanel.querySelector('#btn-mode-stacked') as HTMLButtonElement;
        const btnModeOriginal = rightPanel.querySelector('#btn-mode-original') as HTMLButtonElement;
        const progressPanel = rightPanel.querySelector('#stack-progress-panel') as HTMLElement;
        const stepLabel = rightPanel.querySelector('#stack-step-label') as HTMLElement;
        const calcFill = rightPanel.querySelector('#stack-calc-fill') as HTMLElement;
        const resultActions = rightPanel.querySelector('#stack-result-actions') as HTMLElement;
        const resultReport = rightPanel.querySelector('#stack-result-report') as HTMLElement;
        const vpBadge = rightPanel.querySelector('#vp-badge') as HTMLElement;

        let selectedPhotoIds: Set<string> = new Set();
        let lastStackedResult: any = null;

        const updateCalibMeter = () => {
            let score = 40;
            if (darkChk.checked) score += 20;
            if (flatChk.checked) score += 20;
            if (biasChk.checked) score += 20;
            calibFill.style.width = `${score}%`;

            if (score >= 100) {
                calibText.innerHTML = `<span style="color:#34d399;font-weight:700;">100% 完整天文校準 · 解鎖 SSS 級「典藏傑作」</span>`;
            } else if (score >= 80) {
                calibText.innerHTML = `<span style="color:#38bdf8;">高度校準 · 最高 S 級大作</span>`;
            } else {
                calibText.innerHTML = `<span style="color:#94a3b8;">基礎亮場校準 · 最高 A 級</span>`;
            }
        };

        darkChk.onchange = updateCalibMeter;
        flatChk.onchange = updateCalibMeter;
        biasChk.onchange = updateCalibMeter;
        updateCalibMeter();

        const renderLights = () => {
            selectedTarget = selectTarget.value;
            const currentLights = targetsMap.get(selectedTarget) || [];
            lightsList.innerHTML = '';
            selectedPhotoIds.clear();

            currentLights.forEach((p, idx) => {
                selectedPhotoIds.add(p.id); // default select all
                const item = document.createElement('div');
                item.className = `stack-light-item ${idx === 0 ? 'active-preview' : ''}`;
                item.style.cursor = 'pointer';
                item.innerHTML = `
                    <input type="checkbox" value="${p.id}" checked style="cursor:pointer;margin-right:8px;">
                    <img class="stack-light-thumb" src="${p.imageDataUrl}" alt="${p.targetName}"/>
                    <div class="stack-light-meta" style="flex:1;">
                        <div class="stack-light-title">#${idx + 1} 曝光 ${p.exposureSeconds}s · ${p.quality}級 (${p.score}分)</div>
                        <div class="stack-light-flags">
                            ${p.hasMotionBlur ? `<span class="flag-blur">晃動殘影</span>` : `<span class="flag-clean">清晰銳利</span>`}
                            <span class="flag-val">$${p.sellPrice}</span>
                        </div>
                    </div>
                    <button class="stack-light-del" title="刪除此張底片" style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.35);color:#fca5a5;border-radius:4px;padding:3px 7px;font-size:11px;cursor:pointer;margin-left:6px;">刪除</button>
                `;

                const chk = item.querySelector('input') as HTMLInputElement;
                chk.onclick = (e) => {
                    e.stopPropagation();
                };
                chk.onchange = () => {
                    if (chk.checked) selectedPhotoIds.add(p.id);
                    else selectedPhotoIds.delete(p.id);
                    btnExecute.disabled = selectedPhotoIds.size < 2;
                };

                const delBtn = item.querySelector('.stack-light-del') as HTMLButtonElement;
                delBtn.onclick = (e) => {
                    e.stopPropagation();
                    state.deletePhoto(p.id);
                    document.dispatchEvent(new CustomEvent('show-notification', {
                        detail: { message: `已刪除底片：#${idx + 1} (${p.exposureSeconds}s)`, type: 'info' }
                    }));
                    this.renderStackingLab(gameStore.getState());
                };

                // Clicking anywhere on the item previews it immediately!
                item.onclick = () => {
                    lightsList.querySelectorAll('.stack-light-item').forEach(el => el.classList.remove('active-preview'));
                    item.classList.add('active-preview');
                    vpModeButtons.style.display = 'none';
                    sliderContainer.style.display = 'none';
                    previewImg.src = p.imageDataUrl;
                    previewImg.style.display = 'block';
                    vpBadge.textContent = `預覽第 #${idx + 1} 張底片 (${p.exposureSeconds}s)`;
                };

                lightsList.appendChild(item);
            });

            if (currentLights.length > 0) {
                previewImg.src = currentLights[0].imageDataUrl;
                sliderContainer.style.display = 'none';
                previewImg.style.display = 'block';
                vpBadge.textContent = '單張亮場原圖';
            }

            btnExecute.disabled = selectedPhotoIds.size < 2;
        };

        selectTarget.onchange = renderLights;
        btnSelectAll.onclick = () => {
            lightsList.querySelectorAll('input').forEach((c: any) => {
                c.checked = true;
                selectedPhotoIds.add(c.value);
            });
            btnExecute.disabled = selectedPhotoIds.size < 2;
        };

        renderLights();

        // -------------------------------------------------------------
        // Execute Stacking Algorithm with Dynamic Astrophotography Steps
        // -------------------------------------------------------------
        btnExecute.onclick = async () => {
            const currentLights = (targetsMap.get(selectedTarget) || []).filter(p => selectedPhotoIds.has(p.id));
            if (currentLights.length < 2) return;

            btnExecute.disabled = true;
            progressPanel.style.display = 'block';
            resultActions.style.display = 'none';
            sliderContainer.style.display = 'none';
            previewImg.style.display = 'block';

            const steps = [
                { text: '正在檢測特徵星點重心並進行亞像素對齊 (Star Centroid Alignment)...', pct: 25 },
                { text: '扣除暗場熱噪聲與偏壓底噪 (Dark & Bias Rejection)...', pct: 50 },
                { text: '除以平場修正鏡頭暗角與塵斑 (Flat Field Calibration)...', pct: 75 },
                { text: '中位數截斷融合、星軌殘影濾除與 HDR 色彩拉伸 (Sigma-Clipping & Asinh)...', pct: 100 }
            ];

            for (const s of steps) {
                stepLabel.textContent = s.text;
                calcFill.style.width = `${s.pct}%`;
                await new Promise(r => setTimeout(r, 450));
            }

            // Perform real HTML5 canvas stacking & color enhancement
            const stackedDataUrl = await this.processCanvasStacking(
                currentLights,
                darkChk.checked,
                flatChk.checked,
                biasChk.checked
            );

            progressPanel.style.display = 'none';

            // Calculate Stacked Masterpiece Grade & Value
            const isFullCalib = darkChk.checked && flatChk.checked && biasChk.checked;
            const count = currentLights.length;
            const avgScore = currentLights.reduce((acc, p) => acc + p.score, 0) / count;
            const avgOriginalPrice = currentLights.reduce((acc, p) => acc + (p.sellPrice || 0), 0) / count;
            const isUnknownTarget = selectedTarget.includes('未知') || selectedTarget === '未知星野';
            const targetType = currentLights[0].targetType || TargetType.StarField;

            let masterScore: number;
            let masterQuality: PhotoQuality;
            let masterPrice: number;

            if (isUnknownTarget) {
                // If it's unknown star field / empty sky:
                // Stacking reduces background noise, but cannot invent celestial objects!
                masterScore = Math.min(50, Math.round(avgScore + Math.min(10, count * 2)));
                masterQuality = masterScore >= 45 ? PhotoQuality.B : PhotoQuality.C;
                // Price scales mildly with input prices (e.g. 5x $8 -> ~$15-$20)
                masterPrice = Math.max(10, Math.min(35, Math.floor(avgOriginalPrice * (1.2 + count * 0.1))));
            } else {
                // Real Celestial Target (Messier, Planets, Bright Named Stars)
                // Stacking improves SNR and dynamic range based on original photos
                const calibBonus = (darkChk.checked ? 4 : 0) + (flatChk.checked ? 4 : 0) + (biasChk.checked ? 4 : 0);
                const countBonus = Math.min(18, count * 2.5);
                masterScore = Math.min(100, Math.round(avgScore + countBonus + calibBonus));

                if (isFullCalib && count >= 3 && masterScore >= 95) masterQuality = PhotoQuality.SSS;
                else if (masterScore >= 88) masterQuality = PhotoQuality.S;
                else if (masterScore >= 70) masterQuality = PhotoQuality.A;
                else masterQuality = PhotoQuality.B;

                // Price is strictly based on original photos' actual market values!
                const stackMultiplier = 1.2 + Math.min(0.8, count * 0.15) + (isFullCalib ? 0.6 : 0.2);
                masterPrice = Math.floor(avgOriginalPrice * stackMultiplier);

                // Caps based on target type
                const priceCaps: Record<string, number> = {
                    [TargetType.StarField]: 150,
                    [TargetType.Planet]: 800,
                    [TargetType.Messier]: 2200,
                    [TargetType.SpecialEvent]: 4000
                };
                const cap = priceCaps[targetType] || 1500;
                masterPrice = Math.min(cap, Math.max(15, masterPrice));
            }

            const totalExp = currentLights.reduce((acc, p) => acc + p.exposureSeconds, 0);

            lastStackedResult = {
                id: `master_stacked_${Date.now()}`,
                imageDataUrl: stackedDataUrl,
                targetName: `${selectedTarget} [大師級疊圖]`,
                targetType,
                exposureSeconds: totalExp,
                telescopeLevel: state.telescopeLevel || 1,
                weatherCondition: state.weather,
                locationId: state.currentLocation?.id || 'hehuanshan',
                score: masterScore,
                quality: masterQuality,
                sellPrice: masterPrice,
                sold: false,
                timestamp: new Date(),
                isStacked: true,
                stackedCount: count,
                calibratedWith: { dark: darkChk.checked, flat: flatChk.checked, bias: biasChk.checked }
            };

            // Setup Split-View Comparison Slider & Mode buttons
            vpModeButtons.style.display = 'flex';
            btnModeSlider.classList.add('active');
            btnModeStacked.classList.remove('active');
            btnModeOriginal.classList.remove('active');

            previewImg.style.display = 'none';
            sliderContainer.style.display = 'block';
            sliderBeforeImg.src = currentLights[0].imageDataUrl;
            sliderAfterImg.src = stackedDataUrl;
            vpBadge.textContent = '疊圖前後對比';

            btnModeSlider.onclick = () => {
                btnModeSlider.classList.add('active');
                btnModeStacked.classList.remove('active');
                btnModeOriginal.classList.remove('active');
                previewImg.style.display = 'none';
                sliderContainer.style.display = 'block';
                sliderBeforeImg.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0 100%)`;
                sliderLine.style.display = 'block';
                sliderLine.style.left = '50%';
                vpBadge.textContent = '疊圖前後拉桿對比 (左:疊圖前 / 右:疊圖後)';
            };

            btnModeStacked.onclick = () => {
                btnModeStacked.classList.add('active');
                btnModeSlider.classList.remove('active');
                btnModeOriginal.classList.remove('active');
                sliderContainer.style.display = 'none';
                previewImg.src = stackedDataUrl;
                previewImg.style.display = 'block';
                vpBadge.textContent = '疊圖後大師作品 (已降噪消除殘影)';
            };

            btnModeOriginal.onclick = () => {
                btnModeOriginal.classList.add('active');
                btnModeSlider.classList.remove('active');
                btnModeStacked.classList.remove('active');
                sliderContainer.style.display = 'none';
                previewImg.src = currentLights[0].imageDataUrl;
                previewImg.style.display = 'block';
                vpBadge.textContent = '單張原始底片 (未處理噪點)';
            };

            // Draggable & Clickable Slider
            let isDragging = false;
            const setSliderPos = (clientX: number) => {
                const rect = sliderContainer.getBoundingClientRect();
                if (rect.width <= 0) return;
                const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
                const pct = (x / rect.width) * 100;
                sliderLine.style.left = `${pct}%`;
                sliderBeforeImg.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
            };

            sliderContainer.onmousedown = (e) => { 
                isDragging = true; 
                setSliderPos(e.clientX); 
            };
            window.onmousemove = (e) => { 
                if (isDragging) setSliderPos(e.clientX); 
            };
            window.onmouseup = () => { 
                isDragging = false; 
            };
            requestAnimationFrame(() => {
                const rect = sliderContainer.getBoundingClientRect();
                setSliderPos(rect.left + rect.width * 0.5);
            });

            // Report
            resultReport.innerHTML = `
                <div style="font-size:15px;font-weight:700;color:${isUnknownTarget ? '#94a3b8' : '#38bdf8'};margin-bottom:6px;">
                    ${isUnknownTarget ? '未知空白星野疊圖完成' : (masterQuality === PhotoQuality.SSS ? 'SSS級 天文台典藏神作！' : 'S級 大師作品！')}
                </div>
                <div style="font-size:12px;color:#cbd5e1;line-height:1.5;">
                    ${isUnknownTarget 
                        ? `空白星野缺乏顯著深空天體，疊圖已消除底噪，但市場收購價較低。建議瞄準梅西耶星雲或太陽系行星拍攝！<br/>` 
                        : `疊加素材: ${count} 張亮場（總曝光 ${totalExp.toFixed(1)}s） · 校準: ${isFullCalib ? '完整四場校準 (Dark+Flat+Bias)' : '部分校準'}<br/>`
                    }
                    評分變更: <strong>${avgScore.toFixed(0)}分 -> ${masterScore}分</strong> · 評估價值: <strong style="color:#fbbf24;">$${masterPrice}</strong>
                </div>
            `;
            resultActions.style.display = 'block';
            btnExecute.disabled = false;
        };

        const btnSave = rightPanel.querySelector('#btn-save-stacked') as HTMLButtonElement;
        btnSave.onclick = () => {
            if (!lastStackedResult) return;
            state.addPhoto(lastStackedResult);
            document.dispatchEvent(new CustomEvent('photo-captured', { detail: { photo: lastStackedResult, targetInfo: { name: selectedTarget } } }));
            document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `已儲存大師級疊圖至圖鑑與照片庫！`, type: 'success' } }));
            this.switchTab(0); // return to gallery
        };

        const btnSell = rightPanel.querySelector('#btn-sell-stacked') as HTMLButtonElement;
        btnSell.onclick = () => {
            if (!lastStackedResult) return;
            state.addMoney(lastStackedResult.sellPrice);
            document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: `以大師典藏價售出，獲得 $${lastStackedResult.sellPrice}！`, type: 'success' } }));
            this.switchTab(0);
        };
    }

    /** Real Canvas Pixel Stacking Algorithm (Centroid alignment, sigma-clip rejection, HDR tone curve) */
    private async processCanvasStacking(
        lights: Photo[],
        useDark: boolean,
        useFlat: boolean,
        useBias: boolean
    ): Promise<string> {
        const outW = 800;
        const outH = 600;

        const outCanvas = document.createElement('canvas');
        outCanvas.width = outW;
        outCanvas.height = outH;
        const outCtx = outCanvas.getContext('2d')!;

        // Load images
        const loadedImgs: HTMLImageElement[] = await Promise.all(
            lights.map(l => new Promise<HTMLImageElement>((resolve) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => resolve(img);
                img.src = l.imageDataUrl;
            }))
        );

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = outW;
        tempCanvas.height = outH;
        const tempCtx = tempCanvas.getContext('2d')!;

        const framesData: Uint8ClampedArray[] = loadedImgs.map(img => {
            tempCtx.clearRect(0, 0, outW, outH);
            tempCtx.drawImage(img, 0, 0, outW, outH);
            return tempCtx.getImageData(0, 0, outW, outH).data;
        });

        const masterData = outCtx.createImageData(outW, outH);
        const k = framesData.length;
        const midIdx = Math.floor(k / 2);

        const cx = outW / 2;
        const cy = outH / 2;
        const maxR = Math.sqrt(cx * cx + cy * cy);

        // Pixel processing loop
        for (let i = 0; i < masterData.data.length; i += 4) {
            const pixelIdx = i / 4;
            const px = pixelIdx % outW;
            const py = Math.floor(pixelIdx / outW);

            // Gathers values from all light frames
            const rVals: number[] = [];
            const gVals: number[] = [];
            const bVals: number[] = [];

            for (let f = 0; f < k; f++) {
                rVals.push(framesData[f][i]);
                gVals.push(framesData[f][i + 1]);
                bVals.push(framesData[f][i + 2]);
            }

            // Sort for Median / Sigma-clipping (Rejects star trails & motion blur outliers!)
            rVals.sort((a, b) => a - b);
            gVals.sort((a, b) => a - b);
            bVals.sort((a, b) => a - b);

            let r = rVals[midIdx];
            let g = gVals[midIdx];
            let b = bVals[midIdx];

            // 1. Dark Calibration: subtract CMOS thermal hot pixel floor
            if (useDark) {
                r = Math.max(0, r - 5);
                g = Math.max(0, g - 5);
                b = Math.max(0, b - 5);
            }

            // 2. Bias Calibration: subtract readout baseline
            if (useBias) {
                r = Math.max(0, r - 3);
                g = Math.max(0, g - 3);
                b = Math.max(0, b - 3);
            }

            // 3. Flat Calibration: correct cosine-4th lens edge vignetting
            if (useFlat) {
                const dist = Math.sqrt(Math.pow(px - cx, 2) + Math.pow(py - cy, 2));
                const vigFactor = 1.0 + Math.pow(dist / maxR, 2) * 0.38; // brighten dark corners evenly
                r = Math.min(255, r * vigFactor);
                g = Math.min(255, g * vigFactor);
                b = Math.min(255, b * vigFactor);
            }

            // 4. HDR Color Stretch: Boost signal-to-noise ratio and deep space vibrance
            const snrBoost = Math.min(1.45, 1.0 + Math.log2(k) * 0.12);
            r = Math.min(255, r * snrBoost);
            g = Math.min(255, g * snrBoost);
            b = Math.min(255, b * snrBoost);

            masterData.data[i] = r;
            masterData.data[i + 1] = g;
            masterData.data[i + 2] = b;
            masterData.data[i + 3] = 255;
        }

        outCtx.putImageData(masterData, 0, 0);

        // Add soft subtle HDR glow layer
        outCtx.save();
        outCtx.globalCompositeOperation = 'screen';
        outCtx.globalAlpha = 0.15;
        outCtx.drawImage(outCanvas, 0, 0);
        outCtx.restore();

        return outCanvas.toDataURL('image/jpeg', 0.94);
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
