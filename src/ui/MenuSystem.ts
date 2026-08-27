import { gameStore } from '../game/GameStore';
import { LOCATIONS } from '../data/locations';
import { GameMode } from '../types';

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
                    走向觀測台圓台，按 <span class="key-hint">E</span> 進入目鏡視角。
                </div>
                <div class="guide-step-card">
                    <strong>2. 尋找與識別天體：</strong>
                    滑鼠左鍵拖曳或方向鍵轉動鏡筒，瞄準目標後頂部顯示天體名稱。滾輪放大，右鍵拖曳微調。按 <span class="key-hint">F</span> 開啟尋星儀，可自動 GoTo 導向目標。
                </div>
                <div class="guide-step-card">
                    <strong>3. 拍攝天體照片：</strong>
                    按 <span class="key-hint">Space</span> 開始曝光。深空天體建議 15 ~ 60 秒，曝光越長評級越高（SSS / S / A / B 等）。
                </div>
                <div class="guide-step-card">
                    <strong>4. 進入工作室賣照片賺錢：</strong>
                    按 <span class="key-hint">Esc</span> 退出，走向木屋按 <span class="key-hint">F</span> 進入工作室出售相片賺錢。
                </div>
                <div class="guide-step-card">
                    <strong>5. 升級裝備與解鎖全球勝地：</strong>
                    在工作室升級望遠鏡，按 <span class="key-hint">L</span> 解鎖夏威夷茂納凱亞、智利阿塔卡馬等世界暗空地點。
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
                        <tr><td><span class="key-hint">E</span></td><td>進入望遠鏡 / 拍照</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">F</span></td><td>進入工作室</td><td>漫遊模式</td></tr>
                        <tr><td><span class="key-hint">F</span></td><td>開啟尋星儀 (支援 GoTo 自動導向)</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">G</span></td><td>開啟「觀測圖鑑 & 任務劇情日誌」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">滑鼠移動 / 方向鍵</span></td><td>水平 (方位角) 與仰角指向星空（附電機音效）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">滑鼠右鍵拖曳</span></td><td>0.25x 精細微調鎖定目標</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">滑鼠滾輪</span></td><td>光學變焦縮放（Zoom In / Zoom Out）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">Space (空白鍵)</span></td><td>自由長曝光（點擊開始，再次點擊或按空白鍵完成）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">Esc</span></td><td>退出望遠鏡 / 退出工作室返回漫遊</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">1</span> ~ <span class="key-hint">4</span> / <span class="key-hint">V</span></td><td>場次切換 (亮場/暗場/平場/偏壓)，V 循環</td><td>望遠鏡模式</td></tr>
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
                <h3>為什麼要長曝光？</h3>
                <p>肉眼感光有限，深空天體在目鏡中往往只是灰白霧狀。長曝光讓感光元件持續積累光子，才能顯現出星雲的色彩與細節。</p>
                <div class="guide-step-card">
                    按空白鍵開始長曝光，暗淡星雲會逐漸呈現出發射線的粉紅與反射星雲的藍色。
                </div>
                <div class="guide-step-card">
                    <strong>照片品質評級與重複拍攝懲罰：</strong>
                    照片會根據 <strong>曝光充足度 + 當前天氣 + 地點光害 + 目標難度</strong> 自動評分（SSS / S / A / B / C 級）。<br>
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
                <p>1. 初期先拍 <strong>M31 仙女座星系</strong>和 <strong>M42 獵戶星雲</strong>，長曝光 30 秒可得 S 或 A 級，每張 $300~$600。</p>
                <p>2. 存到 $500 立即升級 <strong>Tier 2 牛頓反射鏡</strong>，進光量提升 6 倍，可觀測更多暗弱天體。</p>
            `;
        }
    }

    private setupKeyboardListeners() {
        window.addEventListener('keydown', (e) => {
            const state = gameStore.getState();
            if (state.gameMode === GameMode.Studio || state.gameMode === GameMode.Telescope) {
                if (e.code === 'Escape') {
                    if (this.guideModal.style.display !== 'none') this.hideGuide();
                    if (this.locationModal.style.display !== 'none') this.hideLocationSelector();
                    if (this.timeReversalPanel.style.display !== 'none') this.hideTimeReversal();
                }
                return;
            }

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
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
        this.switchGuideTab(this.currentGuideTab);
        this.guideModal.style.display = 'flex';
    }

    public hideGuide() {
        this.guideModal.style.display = 'none';
    }

    public showLocationSelector() {
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
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

                    // Re-orient telescope directly at the local zenith of the new site
                    // At any location: Zenith Dec = Latitude, Zenith RA = LST
                    const d_j2000 = (state.currentTime.getTime() / 86400000.0 + 2440587.5) - 2451545.0;
                    const gmst = (18.697374558 + 24.06570982441908 * d_j2000) % 24;
                    const gmstAdj = gmst < 0 ? gmst + 24 : gmst;
                    const lst = (gmstAdj + loc.longitude / 15) % 24;
                    const lstAdj = lst < 0 ? lst + 24 : lst;

                    state.setTelescopePointing(lstAdj, loc.latitude);
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
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
        const state = gameStore.getState();
        const curr = state.currentTime;
        const timeStr = curr.toLocaleString('zh-TW', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        });

        const year = curr.getFullYear();
        const month = String(curr.getMonth() + 1).padStart(2, '0');
        const day = String(curr.getDate()).padStart(2, '0');
        const dateInputVal = `${year}-${month}-${day}`;

        const hours = String(curr.getHours()).padStart(2, '0');
        const minutes = String(curr.getMinutes()).padStart(2, '0');
        const timeInputVal = `${hours}:${minutes}`;

        const hour = curr.getHours();
        let phaseText = '觀星夜';
        if (hour >= 6 && hour < 17) phaseText = '白晝';
        else if (hour >= 17 && hour < 19) phaseText = '黃昏';
        else if (hour >= 5 && hour < 6) phaseText = '黎明';

        this.timeReversalPanel.innerHTML = `
            <div class="time-modal-header">
                <h3>日期與時間穿梭控制中心</h3>
                <button class="close-btn" id="close-time">&times;</button>
            </div>

            <div class="current-time-box">
                <div class="time-str">${timeStr}</div>
                <div class="phase-str">${phaseText} · 隨意穿梭時空與四季星空</div>
            </div>

            <div style="font-size:12px;color:#38bdf8;margin-bottom:6px;font-weight:600;">自訂日期與時刻</div>
            <div class="date-picker-row">
                <input type="date" id="input-custom-date" class="time-input-field" value="${dateInputVal}">
                <input type="time" id="input-custom-time" class="time-input-field" value="${timeInputVal}">
                <button id="btn-apply-custom-date" class="apply-date-btn">設定天象</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin:12px 0 6px 0;font-weight:600;">日期與年份跨度跳轉</div>
            <div class="time-btn-grid" style="grid-template-columns: repeat(6, 1fr);">
                <button class="time-step-btn" id="btn-sub-1y">-1年</button>
                <button class="time-step-btn" id="btn-sub-30d">-30天</button>
                <button class="time-step-btn" id="btn-sub-1d">-1天</button>
                <button class="time-step-btn" id="btn-add-1d">+1天</button>
                <button class="time-step-btn" id="btn-add-30d">+30天</button>
                <button class="time-step-btn" id="btn-add-1y">+1年</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin:10px 0 6px 0;font-weight:600;">四季著名星空一鍵跳轉</div>
            <div class="time-preset-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 12px;">
                <button class="preset-btn" id="season-spring" title="4月15日 21:00 · 北斗七星與大角星">春季星空</button>
                <button class="preset-btn" id="season-summer" title="7月15日 21:00 · 夏季大三角與璀璨銀河">夏季銀河</button>
                <button class="preset-btn" id="season-autumn" title="10月15日 21:00 · 飛馬座與仙女座星系">秋季仙女</button>
                <button class="preset-btn" id="season-winter" title="1月15日 21:00 · 獵戶座與冬季大三角">冬季獵戶</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin:10px 0 6px 0;font-weight:600;">當日時刻微調與跳轉</div>
            <div class="time-btn-grid" style="margin-bottom: 8px;">
                <button class="time-step-btn" id="btn-sub-6h">-6小時</button>
                <button class="time-step-btn" id="btn-sub-1h">-1小時</button>
                <button class="time-step-btn" id="btn-add-1h">+1小時</button>
                <button class="time-step-btn" id="btn-add-6h">+6小時</button>
            </div>
            <div class="time-preset-grid" style="margin-bottom: 14px;">
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

        // Wire close
        const closeBtn = this.timeReversalPanel.querySelector('#close-time') as HTMLElement;
        closeBtn.onclick = () => this.hideTimeReversal();

        // Direct date & time picker
        const dateInput = this.timeReversalPanel.querySelector('#input-custom-date') as HTMLInputElement;
        const timeInput = this.timeReversalPanel.querySelector('#input-custom-time') as HTMLInputElement;
        const applyBtn = this.timeReversalPanel.querySelector('#btn-apply-custom-date') as HTMLButtonElement;

        const applyCustomDateTime = () => {
            if (!dateInput.value) return;
            const [y, m, d] = dateInput.value.split('-').map(Number);
            const [hh, mm] = (timeInput.value || '21:00').split(':').map(Number);
            const newDate = new Date(y, m - 1, d, hh, mm, 0);
            state.setTime(newDate);
            this.showTimeReversal();
        };

        applyBtn.onclick = applyCustomDateTime;
        dateInput.onchange = applyCustomDateTime;
        timeInput.onchange = applyCustomDateTime;

        // Day and Year steppers
        this.timeReversalPanel.querySelector('#btn-sub-1y')!.addEventListener('click', () => {
            state.advanceTimeYears(-1);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-sub-30d')!.addEventListener('click', () => {
            state.advanceTimeDays(-30);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-sub-1d')!.addEventListener('click', () => {
            state.advanceTimeDays(-1);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-add-1d')!.addEventListener('click', () => {
            state.advanceTimeDays(1);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-add-30d')!.addEventListener('click', () => {
            state.advanceTimeDays(30);
            this.showTimeReversal();
        });
        this.timeReversalPanel.querySelector('#btn-add-1y')!.addEventListener('click', () => {
            state.advanceTimeYears(1);
            this.showTimeReversal();
        });

        // Four Seasons presets
        const jumpToSeason = (monthIndex: number, dayNum: number) => {
            const currentYear = state.currentTime.getFullYear();
            const seasonDate = new Date(currentYear, monthIndex, dayNum, 21, 0, 0);
            state.setTime(seasonDate);
            this.showTimeReversal();
        };

        this.timeReversalPanel.querySelector('#season-spring')!.addEventListener('click', () => jumpToSeason(3, 15)); // Apr 15
        this.timeReversalPanel.querySelector('#season-summer')!.addEventListener('click', () => jumpToSeason(6, 15)); // Jul 15
        this.timeReversalPanel.querySelector('#season-autumn')!.addEventListener('click', () => jumpToSeason(9, 15)); // Oct 15
        this.timeReversalPanel.querySelector('#season-winter')!.addEventListener('click', () => jumpToSeason(0, 15)); // Jan 15

        // Hour Steppers
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

        // Time of Day Presets
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
