import { gameStore } from '../game/GameStore';
import { LOCATIONS } from '../data/locations';

export class MenuSystem {
    private locationModal: HTMLElement;
    private timeReversalPanel: HTMLElement;
    private guideModal: HTMLElement;
    private unsubscribe: () => void;
    private currentGuideTab = 0;

    constructor() {
        const overlay = document.getElementById('ui-overlay');
        if (!overlay) throw new Error("ui-overlay not found");

        // Location Modal
        this.locationModal = document.createElement('div');
        this.locationModal.className = 'location-modal';
        this.locationModal.style.display = 'none';
        
        // Time Control & Reversal Panel
        this.timeReversalPanel = document.createElement('div');
        this.timeReversalPanel.className = 'time-reversal-panel';
        this.timeReversalPanel.style.display = 'none';

        // Handbook & User Guide Modal
        this.guideModal = this.createGuideModal();

        overlay.appendChild(this.locationModal);
        overlay.appendChild(this.timeReversalPanel);
        overlay.appendChild(this.guideModal);

        this.setupKeyboardListeners();
        this.unsubscribe = gameStore.subscribe((state) => this.update(state));
    }

    private createGuideModal(): HTMLElement {
        const modal = document.createElement('div');
        modal.className = 'guide-modal';
        modal.style.display = 'none';

        const header = document.createElement('div');
        header.className = 'guide-header';
        header.innerHTML = `
            <h2>觀星模擬器 — 操作說明書 & 天文指南</h2>
            <button class="close-btn" id="close-guide">&times;</button>
        `;
        modal.appendChild(header);

        const tabs = document.createElement('div');
        tabs.className = 'guide-tabs';
        const tabNames = ['快速入門', '完整按鍵', '觀星與長曝光技巧', '賺錢與升級攻略'];
        
        tabNames.forEach((name, idx) => {
            const btn = document.createElement('button');
            btn.className = `guide-tab ${idx === 0 ? 'active' : ''}`;
            btn.textContent = name;
            btn.onclick = () => this.switchGuideTab(idx);
            tabs.appendChild(btn);
        });
        modal.appendChild(tabs);

        const content = document.createElement('div');
        content.className = 'guide-content';
        modal.appendChild(content);

        const closeBtn = header.querySelector('#close-guide') as HTMLElement;
        closeBtn.onclick = () => this.hideGuide();

        return modal;
    }

    public switchGuideTab(index: number) {
        this.currentGuideTab = index;
        const tabs = this.guideModal.querySelectorAll('.guide-tab');
        tabs.forEach((t, i) => t.classList.toggle('active', i === index));
        
        const content = this.guideModal.querySelector('.guide-content') as HTMLElement;
        content.innerHTML = '';

        if (index === 0) {
            // 快速入門
            content.innerHTML = `
                <h3>遊戲核心玩法循環</h3>
                <div class="guide-step-card">
                    <strong>1. 走向望遠鏡觀星：</strong>
                    出生點正前方圓台就是望遠鏡。走上前按下 <span class="key-hint">E</span> 鍵即可直接進入望遠鏡觀星目鏡視角。
                </div>
                <div class="guide-step-card">
                    <strong>2. 尋找與識別天體：</strong>
                    在望遠鏡中，使用 <strong>滑鼠左鍵拖曳</strong> 或 <strong>方向鍵</strong> 轉動赤道儀瞄準星空。瞄準到天體時，頂部會顯示如 <em>M31 仙女座星系</em>、<em>天狼星</em>。使用 <strong>滑鼠滾輪</strong> 可大幅度放大拉近視角。使用 <strong>滑鼠右鍵拖曳</strong> 可進行超精細微調。
                </div>
                <div class="guide-step-card">
                    <strong>3. 拍攝天體照片：</strong>
                    按下 <span class="key-hint">Space 空白鍵</span> 開始曝光。深空星雲與暗星系建議長曝光 <strong>15秒 ~ 60秒</strong>，曝光越足色彩越鮮豔、評級（S/A/B）越高！
                </div>
                <div class="guide-step-card">
                    <strong>4. 進入工作室賣照片賺錢：</strong>
                    按 <span class="key-hint">Esc</span> 退出望遠鏡，走向左後方的小木屋按下 <span class="key-hint">F</span> 進入工作室，一鍵出售相片賺取豐厚報酬！
                </div>
                <div class="guide-step-card">
                    <strong>5. 升級裝備與解鎖全球勝地：</strong>
                    在工作室中升級口徑更大的望遠鏡（可看清暗弱星雲），並按 <span class="key-hint">L</span> 解鎖夏威夷茂納凱亞、智利阿塔卡馬等 6 大世界頂級暗空公園！
                </div>
            `;
        } else if (index === 1) {
            // 完整按鍵
            content.innerHTML = `
                <h3>鍵盤與滑鼠快捷鍵清單</h3>
                <table class="key-table">
                    <thead>
                        <tr><th>按鍵</th><th>功能描述</th><th>適用模式</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><span class="key-hint">W</span> <span class="key-hint">A</span> <span class="key-hint">S</span> <span class="key-hint">D</span></td><td>前後左右移動角色（點擊畫面鎖定滑鼠視角）</td><td>第一人稱漫遊</td></tr>
                        <tr><td><span class="key-hint">Shift</span> + 移動</td><td>奔跑加速</td><td>第一人稱漫遊</td></tr>
                        <tr><td><span class="key-hint">按住滑鼠右鍵</span></td><td>手持 8x42 雙筒望遠鏡（7° 廣重視野巡天）</td><td>第一人稱漫遊</td></tr>
                        <tr><td><span class="key-hint">E</span></td><td>靠近望遠鏡時進入 / 望遠鏡模式下切換曝光秒數</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">F</span></td><td>靠近小木屋時進入工作室（照片庫、燈箱查看與商店）</td><td>漫遊模式</td></tr>
                        <tr><td><span class="key-hint">G</span></td><td>開啟「觀測圖鑑 & 任務劇情日誌」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">滑鼠移動 / 方向鍵</span></td><td>水平 (方位角) 與仰角指向星空（附電機音效）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">滑鼠右鍵拖曳</span></td><td>0.25x 精細微調鎖定目標</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">滑鼠滾輪</span></td><td>光學變焦縮放（Zoom In / Zoom Out）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">Space (空白鍵)</span></td><td>自由長曝光（點擊開始，再次點擊或按空白鍵完成）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">Esc</span></td><td>退出望遠鏡 / 退出工作室返回漫遊</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">1</span> ~ <span class="key-hint">5</span> / <span class="key-hint">P</span></td><td>時間流速 (1x / 10x / 60x / 300x / 1000x / 暫停)</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">R</span> 或 <span class="key-hint">T</span></td><td>開啟「時間控制與時空倒流中心」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">L</span></td><td>開啟「全球觀測地點選擇器」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">C</span></td><td>開啟 / 關閉 20+ 星座連線</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">M</span></td><td>一鍵靜音 / 開啟音效混音面板</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">U</span></td><td>一鍵切換「無 UI 沉浸觀星模式」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">H</span></td><td>開啟 / 關閉「操作說明書與觀星指南」</td><td>全域</td></tr>
                    </tbody>
                </table>
            `;
        } else if (index === 2) {
            // 觀星與長曝光技巧
            content.innerHTML = `
                <h3>為什麼需要「長曝光 (Long Exposure)」？</h3>
                <p>人類肉眼在夜間感光能力有限，許多深空天體（如梅西耶星雲、暗星系旋臂）在即時目鏡中看起來只是微弱的灰白色霧狀塊。</p>
                <div class="guide-step-card">
                    <strong>光子累積疊加機制：</strong>
                    在望遠鏡中按下空白鍵開始長曝光時，光學感光元件會持續收集光子，原本暗淡的星雲會逐漸顯現出鮮豔的粉紅發射線（H-alpha）與藍色反射星雲色彩！
                </div>
                <div class="guide-step-card">
                    <strong>照片品質評級與重複拍攝懲罰：</strong>
                    照片會根據 <strong>曝光充足度 + 當前天氣 + 地點光害 + 目標難度</strong> 自動評分（S / A / B / C / D 級）。<br>
                    <strong>注意：</strong>同一個天體重複拍攝，市場收購價會隨次數遞減（第1張 100%、第2張 60%、第3張 25%、第4張起飽和 $0）。多探索不同天體才是發家致富之道！
                </div>
            `;
        } else if (index === 3) {
            // 賺錢與升級攻略
            content.innerHTML = `
                <h3>望遠鏡升級鏈與口徑解析力</h3>
                <table class="key-table">
                    <thead>
                        <tr><th>階級與名稱</th><th>口徑/極限星等</th><th>最小視場</th><th>升級價格</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Tier 1 入門折射鏡</strong></td><td>60mm / 10.0等</td><td>2.5° (~24x)</td><td>初始自帶 ($0)</td></tr>
                        <tr><td><strong>Tier 2 中階牛頓反射鏡</strong></td><td>150mm / 12.0等</td><td>1.0° (~60x)</td><td>$500</td></tr>
                        <tr><td><strong>Tier 3 施密特-卡塞格林</strong></td><td>200mm / 13.5等</td><td>0.5° (~120x)</td><td>$2,000</td></tr>
                        <tr><td><strong>Tier 4 高階 APO 複消色差</strong></td><td>130mm / 12.5等</td><td>0.8° (~75x)</td><td>$3,500</td></tr>
                        <tr><td><strong>Tier 5 天文台級 RC 鏡</strong></td><td>350mm / 15.0等</td><td>0.2° (~300x)</td><td>$8,000</td></tr>
                    </tbody>
                </table>
                <h3 style="margin-top:16px;">快速發家致富秘訣</h3>
                <p>1. 初始階段先在合歡山拍攝 <strong>M31 仙女座星系</strong> 與 <strong>M42 獵戶星雲</strong>（長曝光 30s 可獲 A/S 級照片，每張 $300~$600）。</p>
                <p>2. 賺取 $500 後立即前往工作室升級 <strong>Tier 2 牛頓反射鏡</strong>，進光量提升 6 倍，可拍攝更多暗淡梅西耶星雲！</p>
            `;
        }
    }

    private setupKeyboardListeners() {
        window.addEventListener('keydown', (e) => {
            const state = gameStore.getState() as any;
            if (state.gameMode === 'studio') return;

            if (e.key.toLowerCase() === 'l') {
                if (this.locationModal.style.display === 'none') {
                    this.showLocationSelector();
                } else {
                    this.hideLocationSelector();
                }
            } else if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 't') {
                if (this.timeReversalPanel.style.display === 'none') {
                    this.showTimeReversal();
                } else {
                    this.hideTimeReversal();
                }
            } else if (e.key.toLowerCase() === 'h' || e.key === '?') {
                if (this.guideModal.style.display === 'none' || this.guideModal.style.display === '') {
                    this.showGuide();
                } else {
                    this.hideGuide();
                }
            } else if (e.code === 'Escape') {
                if (this.guideModal.style.display !== 'none') this.hideGuide();
                if (this.locationModal.style.display !== 'none') this.hideLocationSelector();
                if (this.timeReversalPanel.style.display !== 'none') this.hideTimeReversal();
            }
        });
    }

    public showGuide() {
        this.switchGuideTab(this.currentGuideTab);
        this.guideModal.style.display = 'flex';
    }

    public hideGuide() {
        this.guideModal.style.display = 'none';
    }

    public showLocationSelector() {
        const state = gameStore.getState() as any;
        this.locationModal.innerHTML = `
            <div class="location-list">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                    <h2 style="font-size:18px;color:#fff;">選擇全球觀測地點</h2>
                    <button class="close-btn" id="close-loc">&times;</button>
                </div>
                <div class="locations-container"></div>
            </div>
        `;
        
        const list = this.locationModal.querySelector('.locations-container') as HTMLElement;
        const closeBtn = this.locationModal.querySelector('#close-loc') as HTMLElement;
        closeBtn.onclick = () => this.hideLocationSelector();

        LOCATIONS.forEach((loc) => {
            const isUnlocked = state.unlockedLocations?.includes(loc.id) || loc.id === LOCATIONS[0].id;
            const isCurrent = state.currentLocation?.id === loc.id;
            
            const card = document.createElement('div');
            card.className = `location-card ${isCurrent ? 'current' : ''} ${!isUnlocked ? 'locked' : ''}`;
            
            card.innerHTML = `
                <h3>${loc.name} (${loc.nameEn}) ${isCurrent ? '（當前位置）' : ''}</h3>
                <p>經緯度: ${loc.latitude.toFixed(2)}°, ${loc.longitude.toFixed(2)}° | 海拔: ${loc.altitude}m</p>
                <p>夜空光害等級: ${(loc.lightPollution * 100).toFixed(0)}%</p>
                <p class="desc">${loc.description}</p>
            `;

            if (!isUnlocked) {
                const btn = document.createElement('button');
                btn.textContent = `解鎖此地點 ($500)`;
                btn.onclick = () => {
                    if (state.money >= 500) {
                        state.spendMoney(500);
                        state.unlockLocation(loc.id);
                        this.showLocationSelector();
                    } else {
                        alert('金錢不足！需要 $500 解鎖新觀測站');
                    }
                };
                card.appendChild(btn);
            } else if (!isCurrent) {
                const btn = document.createElement('button');
                btn.textContent = '前往此處觀星';
                btn.onclick = () => {
                    state.setLocation(loc);
                    this.hideLocationSelector();
                };
                card.appendChild(btn);
            }

            list.appendChild(card);
        });

        this.locationModal.style.display = 'flex';
    }

    public hideLocationSelector() {
        this.locationModal.style.display = 'none';
    }

    public showTimeReversal() {
        const state = gameStore.getState();
        const timeStr = state.currentTime.toLocaleString('zh-TW', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        });

        const hour = state.currentTime.getHours();
        let phaseText = '觀星夜';
        if (hour >= 6 && hour < 17) phaseText = '白晝';
        else if (hour >= 17 && hour < 19) phaseText = '黃昏';
        else if (hour >= 5 && hour < 6) phaseText = '黎明';

        this.timeReversalPanel.innerHTML = `
            <div class="time-modal-header">
                <h3>時間控制與倒流中心</h3>
                <button class="close-btn" id="close-time">&times;</button>
            </div>

            <div class="current-time-box">
                <div class="time-str">${timeStr}</div>
                <div class="phase-str">${phaseText} · 隨意穿梭時空（無須消耗金錢）</div>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin-bottom:8px;font-weight:600;">快速微調與倒退時間</div>
            <div class="time-btn-grid">
                <button class="time-step-btn" id="btn-sub-6h">-6小時</button>
                <button class="time-step-btn" id="btn-sub-1h">-1小時</button>
                <button class="time-step-btn" id="btn-add-1h">+1小時</button>
                <button class="time-step-btn" id="btn-add-6h">+6小時</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin-bottom:8px;font-weight:600;">天象預設時間快速跳轉</div>
            <div class="time-preset-grid">
                <button class="preset-btn" id="preset-dawn">黎明 (05:30)</button>
                <button class="preset-btn" id="preset-noon">正午 (12:00)</button>
                <button class="preset-btn" id="preset-dusk">日落 (18:30)</button>
                <button class="preset-btn" id="preset-night">初夜 (21:00)</button>
                <button class="preset-btn" id="preset-midnight" style="grid-column: span 2;">最佳深空觀測 (01:00)</button>
            </div>

            <button class="reset-realtime-btn" id="btn-reset-realtime">
                <span>一鍵回到目前現實時間</span>
            </button>
        `;

        // Wire events
        const closeBtn = this.timeReversalPanel.querySelector('#close-time') as HTMLElement;
        closeBtn.onclick = () => this.hideTimeReversal();

        // Stepper buttons
        this.timeReversalPanel.querySelector('#btn-sub-6h')!.addEventListener('click', () => {
            state.reverseTime(6);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-sub-1h')!.addEventListener('click', () => {
            state.reverseTime(1);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-add-1h')!.addEventListener('click', () => {
            state.advanceTimeHours(1);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-add-6h')!.addEventListener('click', () => {
            state.advanceTimeHours(6);
            this.showTimeReversal();
        });

        // Presets
        const jumpToHour = (h: number, m: number = 0) => {
            const d = new Date(state.currentTime);
            d.setHours(h, m, 0, 0);
            state.setTime(d);
            this.showTimeReversal();
        };

        this.timeReversalPanel.querySelector('#preset-dawn')!.addEventListener('click', () => jumpToHour(5, 30));
        this.timeReversalPanel.querySelector('#preset-noon')!.addEventListener('click', () => jumpToHour(12, 0));
        this.timeReversalPanel.querySelector('#preset-dusk')!.addEventListener('click', () => jumpToHour(18, 30));
        this.timeReversalPanel.querySelector('#preset-night')!.addEventListener('click', () => jumpToHour(21, 0));
        this.timeReversalPanel.querySelector('#preset-midnight')!.addEventListener('click', () => jumpToHour(1, 0));

        // Reset to real time
        this.timeReversalPanel.querySelector('#btn-reset-realtime')!.addEventListener('click', () => {
            state.resetToRealTime();
            this.showTimeReversal();
        });

        this.timeReversalPanel.style.display = 'block';
    }

    public hideTimeReversal() {
        this.timeReversalPanel.style.display = 'none';
    }

    public update(state: any) {
        // dynamic updates if needed while open
    }

    public dispose() {
        this.unsubscribe();
        this.locationModal.remove();
        this.timeReversalPanel.remove();
        this.guideModal.remove();
    }
}
