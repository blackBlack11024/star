// ============================================================
// Stargazer Simulator — Story Quest & Narrative Data
// ============================================================

export interface QuestCharacter {
  name: string;
  role: string;
  avatarIcon: string;
  color: string;
}

export interface QuestObjective {
  type: 'capture_any' | 'capture_target' | 'capture_count' | 'quality_min' | 'laser_point_target' | 'mount_laser' | 'lie_down' | 'capture_meteor';
  targetId?: string;    // DSO id, star/planet name, or special event
  targetType?: string;  // 'messier', 'galaxy', 'planet', 'special_event'
  count?: number;       // number of photos needed
  minQuality?: string;  // 'A', 'S' etc.
  description: string;
}

export interface Quest {
  id: string;
  chapter: number;
  title: string;
  character: QuestCharacter;
  introDialogue: string[];   // Story dialogue shown upon unlocking/starting the quest
  completeDialogue: string[];// Story dialogue shown upon finishing the quest
  storySummary: string;
  starHoppingTip?: string;   // Star-hopping observation guide from character
  objectives: QuestObjective[];
  rewards: { money?: number; unlockLocation?: string; unlockAccessory?: string; telescopeDiscount?: number };
  prerequisiteQuestId?: string;
}

export const CHARACTERS: Record<string, QuestCharacter> = {
  chen: {
    name: '陳伯',
    role: '合歡山老氣象員 · 前天文台技師',
    avatarIcon: `<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.5"/><path d="M6 32 L16 16 L24 26 L34 32 Z" fill="#fbbf24" opacity="0.3"/><path d="M12 32 L20 18 L28 32 Z" fill="#fbbf24" opacity="0.5"/><circle cx="28" cy="11" r="3.5" fill="none" stroke="#fbbf24" stroke-width="1.2"/><circle cx="28" cy="11" r="1.5" fill="#fbbf24"/><path d="M20 18 L20 10 M17 10 L23 10 M18 8 L22 8" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    color: '#fbbf24',
  },
  lin: {
    name: '星際旅人 Lin',
    role: '天文攝影論壇版主 · 巡天愛好者',
    avatarIcon: `<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/><ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="#38bdf8" stroke-width="1.2" transform="rotate(-25 20 20)"/><path d="M20 6 L22 17 L33 20 L22 23 L20 34 L18 23 L7 20 L18 17 Z" fill="#38bdf8"/><circle cx="20" cy="20" r="2.5" fill="#0b1329"/><circle cx="20" cy="20" r="1.2" fill="#fff"/></svg>`,
    color: '#38bdf8',
  },
  director: {
    name: '張弘道館長',
    role: '國家天文台名譽台長',
    avatarIcon: `<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="1.5"/><path d="M10 26 C10 15, 30 15, 30 26 Z" fill="none" stroke="#a855f7" stroke-width="1.5"/><rect x="9" y="26" width="22" height="6" rx="1" fill="#a855f7" opacity="0.4"/><path d="M18 16 L22 16 L22 26 L18 26 Z" fill="#0b1329" stroke="#a855f7" stroke-width="1"/><line x1="14" y1="24" x2="27" y2="10" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round"/><circle cx="27" cy="10" r="1.8" fill="#fff"/></svg>`,
    color: '#a855f7',
  },
  sophie: {
    name: '蘇菲主編',
    role: '《國際天文攝影》亞洲特刊總編',
    avatarIcon: `<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="1.5"/><circle cx="20" cy="20" r="11" fill="none" stroke="#ec4899" stroke-width="1.5"/><polygon points="20,13 25,16 23,22 17,22 15,16" fill="none" stroke="#ec4899" stroke-width="1.2"/><circle cx="20" cy="20" r="3" fill="#ec4899"/><path d="M9 10 L13 10 M31 10 L27 10 M9 30 L13 30 M31 30 L27 30" stroke="#ec4899" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    color: '#ec4899',
  },
  alan: {
    name: '艾倫研究員',
    role: '跨國深空巡天計畫通訊員',
    avatarIcon: `<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1.5"/><path d="M12 26 Q20 18 28 26" fill="none" stroke="#34d399" stroke-width="2"/><line x1="20" y1="21" x2="20" y2="13" stroke="#34d399" stroke-width="1.5"/><line x1="17" y1="13" x2="23" y2="13" stroke="#34d399" stroke-width="1.5"/><path d="M14 9 Q20 4 26 9" fill="none" stroke="#34d399" stroke-width="1.2" stroke-dasharray="2,2"/><path d="M16 11 Q20 7 24 11" fill="none" stroke="#34d399" stroke-width="1.2"/><path d="M20 23 L20 32 M16 32 L24 32" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    color: '#34d399',
  },
};

export const QUESTS: Quest[] = [
  // =========================================================================
  // CHAPTER 0: 初次仰望星空 (First Light on Hehuanshan)
  // =========================================================================
  {
    id: 'ch0_first_light',
    chapter: 0,
    title: '第一道星光 (First Light)',
    character: CHARACTERS.chen,
    introDialogue: [
      '「孩子，歡迎來到合歡山！這座觀測木屋已經很多年沒有新主人了。」陳伯端著一杯熱茶走進院子。',
      '「看到那台老舊的 60mm 折射望遠鏡了嗎？那是當年我初學天文時用的，保養得還很好。」',
      '「今晚天空很乾淨，去拍下你的第一張星空照片吧！走過去按 E 對準夜空，按下空白鍵開始長曝光，讓宇宙微弱的光子凝聚在感光元件上。」'
    ],
    completeDialogue: [
      '「太棒了！這就是天文攝影師的第一步——捕捉到了屬於你的第一道星光！」陳伯笑著拍了拍你的肩膀。',
      '「光子累積的感覺很神奇對吧？宇宙從不吝嗇展現美麗，只看你願不願意靜下心來等待。」'
    ],
    storySummary: '繼承了合歡山觀測小屋，在老氣象員陳伯的指導下完成人生第一張星空攝影。',
    starHoppingTip: '【陳伯傳授】：抬頭看向南方天空，將望遠鏡對準任何天區，手動長曝光 5 秒以上即可。',
    objectives: [{ type: 'capture_any', description: '操作望遠鏡完成任意一張星空照片' }],
    rewards: { money: 100 },
  },
  {
    id: 'ch0_find_orion',
    chapter: 0,
    title: '獵戶佩劍上的玫瑰 (M42 獵戶座大星雲)',
    character: CHARACTERS.chen,
    introDialogue: [
      '陳伯翻開一本邊角泛黃的手繪星圖，手指指著冬季星空最璀璨的一角：',
      '「你看獵戶座腰帶那三顆連星，下方佩劍的位置，藏著一朵巨大的宇宙玫瑰——M42 獵戶座大星雲。」',
      '「【觀測時段提醒】：獵戶座是秋冬季代表天體。夏末初秋要到【深夜 01:30 ~ 03:00】才會從東方地平線升起。如果你現在看不到，記得按 R 或 T 鍵開啟時空面板，將時間快轉到深夜！」',
      '「【認星口訣】：按 C 開啟星座連線，在東南方找到排成一直線的三顆腰帶三星，往正下方垂直看有三顆微弱的小星（佩劍），中間那顆就是 M42！」'
    ],
    completeDialogue: [
      '「看啊！那粉紅色的氣體卷雲與中心的四合星！你的對焦和曝光掌握得比我想像的還要出色！」',
      '「我把你這張 M42 的照片傳到全台天文攝影論壇了，這下子肯定會引來不少人的關注。」'
    ],
    storySummary: '在獵戶座佩劍處精確捕捉到著名的 M42 恆星育嬰室，照片在天文論壇引起了廣泛討論。',
    starHoppingTip: '【陳伯傳授】：M42 為秋冬季天體，深夜 01:30 後升起（可按 R/T 快轉時間）。按 C 開啟連線，順著獵戶腰帶三星垂直向下找到佩劍中間即是。',
    objectives: [{ type: 'capture_target', targetId: 'M42', description: '拍攝 M42 獵戶座大星雲' }],
    rewards: { money: 300 },
    prerequisiteQuestId: 'ch0_first_light',
  },

  // =========================================================================
  // CHAPTER 1: 深空信使與梅西耶馬拉松 (The Deep Sky Messenger)
  // =========================================================================
  {
    id: 'ch1_andromeda',
    chapter: 1,
    title: '250萬光年的凝望 (M31 仙女座星系)',
    character: CHARACTERS.lin,
    introDialogue: [
      '【論壇私訊】星際旅人 Lin：「嗨！我在論壇首頁看到你拍的 M42 了，在合歡山拍的吧？視寧度真乾淨！」',
      '「自我介紹一下，我是論壇版主 Lin。既然你已經掌握了星雲，那敢不敢挑戰真正的跨星系目標——仙女座大星系 M31？」',
      '「【觀測時段】：仙女座星系在秋季傍晚（20:00 ~ 02:00）就已經高掛東北方夜空，幾乎整夜都可以觀測！」',
      '「【認星口訣】：找到北天天空大大的『W 形仙后座』，順著中間頂點往右下方（飛馬座方向）延伸約兩個星座寬度，那團紡錘狀星系就是 M31！」'
    ],
    completeDialogue: [
      '【論壇私訊】星際旅人 Lin：「天啊……這解析度太驚人了！我甚至能看到 M31 旋臂上的暗黑塵埃帶！」',
      '「你絕對有極高的天文攝影天賦。接下來正好有一場全台天文盛事，你非參加不可！」'
    ],
    storySummary: '接受天文論壇版主 Lin 的挑戰，跨越 250 萬光年成功拍攝仙女座星系的壯麗旋臂。',
    starHoppingTip: '【Lin 傳授】：秋季 20:00 ~ 02:00 在東北方高掛。找到「W 形仙后座」，順著頂點向右下方（飛馬座方向）延伸即可找到。',
    objectives: [{ type: 'capture_target', targetId: 'M31', description: '拍攝 M31 仙女座星系（評級 B 級以上）', minQuality: 'B' }],
    rewards: { money: 600 },
    prerequisiteQuestId: 'ch0_find_orion',
  },
  {
    id: 'ch1_collector',
    chapter: 1,
    title: '梅西耶馬拉松 (Messier Marathon)',
    character: CHARACTERS.lin,
    introDialogue: [
      '【論壇私訊】星際旅人 Lin：「一年一度的『梅西耶馬拉松季』正式開跑了！」',
      '「十八世紀法國天文學家梅西耶為了不把星雲誤認為彗星，編製了 110 個著名的深空天體。現在全世界觀星者都在比誰收集得快。」',
      '「【推薦目標與時段】：金牛座的『M45 昴宿星團（七姊妹，秋冬季 22:00 後）』、武仙座的『M13 球狀星團（夏季 20:00~02:00）』、巨蟹座的『M44 蜂巢星團（冬春季）』都是極佳目標！按 G 打開圖鑑可以隨時查看各天體的最佳觀測時間！」',
      '「收集 5 個不同的梅西耶天體，我為你爭取阿里山頂級觀測站的通行證！」'
    ],
    completeDialogue: [
      '【論壇私訊】星際旅人 Lin：「太不可思議了！短短時間內你居然收集了 5 個完全不同類型的梅西耶天體！」',
      '「阿里山天文學會已經審核通過你的資格，高海拔暗空觀測站現在隨時為你敞開大門！」'
    ],
    storySummary: '參加梅西耶馬拉松並成功拍得 5 個不同天體，一躍成為論壇名人並獲贈觀測站通行證。',
    starHoppingTip: '【Lin 傳授】：按 G 開啟圖鑑，可隨時查看天體最佳觀測時段（例如 M45、M13、M44），善用 R/T 調整時間至適當季節與深夜！',
    objectives: [{ type: 'capture_count', targetType: 'messier', count: 5, description: '在圖鑑中收集 5 個不同的梅西耶天體' }],
    rewards: { money: 1200, unlockLocation: 'alishan' },
    prerequisiteQuestId: 'ch1_andromeda',
  },

  // =========================================================================
  // CHAPTER 2: 天文台的終極考驗 (The Observatory's Grand Quest)
  // =========================================================================
  {
    id: 'ch2_masterpiece',
    chapter: 2,
    title: '極限視寧度下的 S 級神作',
    character: CHARACTERS.director,
    introDialogue: [
      '一輛掛著天文台公務牌的四驅車停在小屋前，走下來的是高山天文台名譽台長張弘道教授。',
      '「年輕人，你的作品在學界傳開了。但我想知道，你是靠運氣，還是真正掌握了光學極限？」',
      '「【大師訣竅】：真正的 S 級神作需要三要素——在極低光害的地點（按 L 切換合歡山或阿里山）、晴朗無雲的深夜、以及 30 秒以上的扎實長曝光。證明給我看吧。」'
    ],
    completeDialogue: [
      '張教授凝視著螢幕上的相片，久久沒有說話，隨後露出由衷的微笑：',
      '「完美無瑕……動態範圍、核心明暗過渡與色彩飽和度都達到了極致！這份天文攝影大師的認可，你當之無愧。」'
    ],
    storySummary: '在張弘道教授嚴苛的考驗下，挑戰極限拍攝出 90 分以上的 S 級天體照片。',
    starHoppingTip: '【張館長傳授】：前往海拔最高、光害最低的觀測地點，在晴朗深夜將望遠鏡精準對焦深空天體，長曝光 30 秒以上即可衝擊 S 級評分！',
    objectives: [{ type: 'quality_min', minQuality: 'S', description: '拍攝一張品質達到 S 級（90分以上）的照片' }],
    rewards: { money: 2500 },
    prerequisiteQuestId: 'ch1_collector',
  },
  {
    id: 'ch2_nebula_expert',
    chapter: 2,
    title: '星雲三部曲：生與死的輪迴',
    character: CHARACTERS.sophie,
    introDialogue: [
      '【國際郵件】蘇菲主編：「親愛的攝影師，我是《國際天文攝影》雜誌的蘇菲主編。」',
      '「我們正在策劃亞洲特刊封面專題《恆星的生老病死》，需要三種極具代表性的星雲：」',
      '「【認星與時段】：1. M1 蟹狀星雲位於金牛座角尖（秋冬季 23:00 後）；2. M57 環狀星雲位於天琴座織女星下方（夏季 20:00~02:00）；3. M27 啞鈴星雲位於天鵝座與天箭座上方（夏秋季 20:00~01:00）。」',
      '「集齊這三張珍貴影像，雜誌社將提供 $3,500 特約稿費！」'
    ],
    completeDialogue: [
      '【國際郵件】蘇菲主編：「天哪！這三張照片組成的專題跨頁簡直是藝術品！讀者們都為之瘋狂了！」',
      '「雜誌社已經將豐厚稿費匯入你的帳戶，下一期封面故事的主角就是你！」'
    ],
    storySummary: '為國際頂尖天文雜誌拍攝星雲生死輪迴三部曲，作品登上國際特刊封面。',
    starHoppingTip: '【蘇菲主編傳授】：M1（金牛座角尖，秋冬季）、M57（天琴座織女星旁，夏季）、M27（狐狸座天鵝座間，夏秋季），按 R/T 調整至對應季節深夜。',
    objectives: [
      { type: 'capture_target', targetId: 'M1', description: '拍攝 M1 蟹狀星雲 (超新星殘骸)' },
      { type: 'capture_target', targetId: 'M57', description: '拍攝 M57 環狀星雲 (垂死恆星)' },
      { type: 'capture_target', targetId: 'M27', description: '拍攝 M27 啞鈴星雲 (雙極星雲)' },
    ],
    rewards: { money: 3500 },
    prerequisiteQuestId: 'ch2_masterpiece',
  },

  // =========================================================================
  // CHAPTER 3: 星系探索者與宇宙邊疆 (Frontiers of the Cosmos)
  // =========================================================================
  {
    id: 'ch3_galaxy_cluster',
    chapter: 3,
    title: '星系探索者：跨越億萬光年的凝視',
    character: CHARACTERS.alan,
    introDialogue: [
      '【加密通訊】艾倫研究員：「暗號確認。我是『深空巡天計畫』的艾倫。」',
      '「我們在追蹤數千萬光年外星系演化的微弱光譜信號，急需民間高階天文台協助觀測三座指標星系：」',
      '「【認星與時段】：1. M51 渦狀星系位於北斗七星勺柄（搖光星）往西南延伸處（春夏季 21:00~03:00）；2. M81 波德星系位於大熊座頭頂（幾乎全年北天可見）；3. M104 草帽星系位於室女座南端（春季 22:00~04:00）。」'
    ],
    completeDialogue: [
      '【加密通訊】艾倫研究員：「所有星系數據完整校準完畢！這組數據填補了跨星系演化模型的重要空白！」',
      '「你的名字已經被永久記錄在國際深空巡天數據庫的貢獻者名冊中。星空浩瀚，探索永無止境！」'
    ],
    storySummary: '為國際深空巡天計畫提供三座百萬光年外指標星系的高解析照片，名字被載入國際天文史冊。',
    starHoppingTip: '【艾倫傳授】：M51（北斗勺柄，春夏季）、M81（大熊座，整年）、M104（室女座南端，春季）。',
    objectives: [
      { type: 'capture_target', targetId: 'M51', description: '拍攝 M51 渦狀星系' },
      { type: 'capture_target', targetId: 'M81', description: '拍攝 M81 波德星系' },
      { type: 'capture_target', targetId: 'M104', description: '拍攝 M104 草帽星系' },
    ],
    rewards: { money: 1500, unlockAccessory: 'laser_pointer' },
    prerequisiteQuestId: 'ch2_nebula_expert',
  },

  // =========================================================================
  // CHAPTER 4: 太陽系近鄰與行星之王 (Planets of the Solar System)
  // =========================================================================
  {
    id: 'ch4_jupiter',
    chapter: 4,
    title: '指星者的啟蒙：太陽系巨擘',
    character: CHARACTERS.chen,
    introDialogue: [
      '陳伯從隨身背包裡拿出一個精緻的金屬圓筒，遞到你手裡：',
      '「孩子，你在深空巡天的成就令人驚嘆。這支 532nm 專業綠光指星筆是我當年隨考察隊在青藏高原用的，現在送給你！」',
      '「【指星筆操作教學】：在站立或平躺時，按下 X 鍵可開啟指星筆，視角會鎖定，你可以自由移動滑鼠指向夜空中的任何天體，辨識它的名字與方位！」',
      '「今晚太陽系的行星之王——木星正在夜空中閃耀，它是全天最明亮的星體之一。先用指星筆找到它，再用望遠鏡進行高倍率拍攝！」'
    ],
    completeDialogue: [
      '陳伯看著螢幕上木星平行的雲帶與四顆伽利略衛星，讚嘆不已：',
      '「乾淨俐落！行星攝影講求極短曝光與高解析度。這枚 2x 巴羅增倍鏡送給你，能讓你的鏡筒放大倍率翻倍！」'
    ],
    storySummary: '獲贈 532nm 綠光指星筆，在夜空中指星定位並成功拍攝木星大氣雲帶，獲贈 2x 巴羅鏡。',
    starHoppingTip: '【陳伯傳授】：按 X 開啟指星筆，移動滑鼠指向黃道附近的超亮星體「木星」。望遠鏡曝光時間需控制在 1-2 秒內避免過曝！',
    objectives: [
      { type: 'laser_point_target', targetId: '木星', description: '按 X 開啟指星筆，在夜空中指向「木星 Jupiter」' },
      { type: 'capture_target', targetId: '木星', minQuality: 'A', description: '操作望遠鏡拍攝「木星 Jupiter」（評級 A 級以上）' },
    ],
    rewards: { money: 400, unlockAccessory: 'eyepiece_barlow' },
    prerequisiteQuestId: 'ch3_galaxy_cluster',
  },
  {
    id: 'ch4_saturn_mars',
    chapter: 4,
    title: '環帶與極冠：前進南半球阿塔卡馬',
    character: CHARACTERS.lin,
    introDialogue: [
      '【論壇私訊】星際旅人 Lin：「看到你拍的木星了！但想要拍下土星的卡西尼環縫和火星極冠，在北半球可不容易。」',
      '「秋冬季土星在北半球仰角偏低，近地表熱氣流會把影像擾動得像水底看花。」',
      '「如果能前往南半球——智利阿塔卡馬沙漠（Atacama Desert），那裡海拔兩千多公尺、年降雨量趨近於零，土星與火星將直升天頂！拍完這兩顆行星，我就幫你申請阿塔卡馬特許通行證！」'
    ],
    completeDialogue: [
      '【論壇私訊】星際旅人 Lin：「不可思議！土星環薄如刀刃，火星白色的乾冰極冠清晰無比！」',
      '「智利阿塔卡馬暗空保護區的通行證已經正式核發給你！按 L 鍵打開地點清單，前往地表觀星天花板吧！」'
    ],
    storySummary: '拍攝土星光環與火星極冠，克服視寧度考驗，獲得南半球智利阿塔卡馬沙漠通行許可。',
    starHoppingTip: '【Lin 傳授】：土星與火星亮度高，建議搭配巴羅鏡 2x，曝光 0.5-2.5 秒即可凝固大氣波動。完成後可按 L 切換至阿塔卡馬！',
    objectives: [
      { type: 'capture_target', targetId: '土星', description: '拍攝「土星 Saturn」的壯麗光環' },
      { type: 'capture_target', targetId: '火星', description: '拍攝「火星 Mars」的橘紅地表與極冠' },
    ],
    rewards: { money: 800, unlockLocation: 'atacama' },
    prerequisiteQuestId: 'ch4_jupiter',
  },

  // =========================================================================
  // CHAPTER 5: 掠過天際的人造奇蹟 (The Space Station Intercept)
  // =========================================================================
  {
    id: 'ch5_mount_laser',
    chapter: 5,
    title: '鏡筒導引光柱：指星筆安裝試驗',
    character: CHARACTERS.director,
    introDialogue: [
      '張弘道教授在阿塔卡馬沙漠的連線通訊中說道：',
      '「阿塔卡馬的星空澄澈得像黑絲絨一般。但要在茫茫天幕中快速鎖定高速移動的目標，單靠肉眼是不夠的。」',
      '「你知道指星筆不僅可以拿在手裡嗎？在望遠鏡模式下按下 X 鍵（或點擊操作列按鈕），可以將指星筆固定在鏡筒上！」',
      '「固定後，鏡筒會向深空射出一道筆直的綠色光柱。在室外視角也能清晰看見望遠鏡正指向何方。先在望遠鏡上試著安裝一次吧！」'
    ],
    completeDialogue: [
      '張教授讚許地說：「很好！光軸完全平行！這道貫穿夜空的綠色光柱將成為我們捕捉下一個極速目標的致勝關鍵！」'
    ],
    storySummary: '掌握望遠鏡鏡筒架設指星筆的技巧，綠色引導光柱成功貫穿夜空。',
    starHoppingTip: '【張館長傳授】：按 E 進入望遠鏡視角，按 X（或點擊操作列的「指星筆」按鈕）即可安裝至鏡筒，再次按 X 可取下回手中。',
    objectives: [
      { type: 'mount_laser', description: '在望遠鏡視角按 X（或點擊面板）將指星筆安裝至鏡筒' },
    ],
    rewards: { money: 500 },
    prerequisiteQuestId: 'ch4_saturn_mars',
  },
  {
    id: 'ch5_iss_intercept',
    chapter: 5,
    title: '天際快客：國際太空站過境特寫',
    character: CHARACTERS.alan,
    introDialogue: [
      '【通訊廣播】艾倫研究員：「國際太空站（ISS）是以 93 分鐘環繞地球一圈，但只有在【傍晚日落後】（約 19:20 或 20:53）以及【清晨黎明前】（約 04:45），太空站高空受陽光直射反射、地面處於黑夜時，肉眼才可見！」',
      '「午夜時它會穿入地影而隱形。記得利用時間控制鍵（按 1-5 或 R 鍵倒流/快轉）調整至黃昏或清晨過境窗口！」',
      '「【過境特徵】：它比全天任何恆星都要明亮（-3.5等），像一顆無聲滑行的鑽石星點，橫跨天際僅有 3-4 分鐘！」',
      '「【操作要領】：利用鏡筒上的指星筆光柱快速追焦，切換至高放大倍率，在它掠過天頂的瞬間抓拍！若能在望遠鏡中解析出太陽能電池翼與實驗艙，這將是史詩級的作品！」'
    ],
    completeDialogue: [
      '艾倫激動地在通訊頻道中高呼：「解析出來了！命運號實驗艙、中央桁架、八片巨大的金色太陽翼完全可辨！」',
      '「這是民間天文攝影的天花板之作！國家天文台特批贈送你一台天文級製冷 CCD 相機，向你的追焦技術致敬！」'
    ],
    storySummary: '在阿塔卡馬荒漠成功追焦高速掠過天頂的國際太空站（ISS），清晰拍得太陽翼結構，獲贈製冷 CCD。',
    starHoppingTip: '【艾倫傳授】：國際太空站僅在傍晚 (19:20、20:53) 或清晨 (04:45) 可見。可按 R 或快捷鍵快轉至該時段，抬頭迅速對準軌跡拍攝！',
    objectives: [
      { type: 'capture_target', targetId: '國際太空站 ISS', description: '在太空站過境時精確追焦並拍下照片' },
    ],
    rewards: { money: 1200, unlockAccessory: 'camera_cooled' },
    prerequisiteQuestId: 'ch5_mount_laser',
  },

  // =========================================================================
  // CHAPTER 6: 草地上的流星雨與南天終局 (Meteors and the Southern Crown)
  // =========================================================================
  {
    id: 'ch6_stargazing_lie_down',
    chapter: 6,
    title: '回歸初心：草地仰望英仙座流星雨',
    character: CHARACTERS.sophie,
    introDialogue: [
      '【特刊邀約】蘇菲主編：「親愛的朋友，我們已經追逐了太多精密的深空數據。今晚，讓我們放下繁雜的長焦器材吧。」',
      '「今晚是年度流星雨極大期，阿塔卡馬的天頂將有數十顆流星劃破長空。」',
      '「【平躺操作】：走到空曠草地上，按下 Z 鍵平躺下來。視角將自然抬升仰望天頂，視野擴展到整片宇宙。靜靜欣賞流星，並用廣角鏡頭拍下一張帶有流星光軌的照片吧！」'
    ],
    completeDialogue: [
      '蘇菲主編感性地回覆：「那道綠色的鎂元素光軌劃過銀河中心，靜謐而震撼。這才是人類仰望星空最初的心跳。」'
    ],
    storySummary: '按 Z 平躺於阿塔卡馬草地仰望天頂，捕捉劃過天際的流星光軌，重溫觀星的純粹感動。',
    starHoppingTip: '【蘇菲傳授】：在室外按 Z 鍵即可平躺於草地仰望天頂，按空白鍵或 Z 鍵可隨時起身。深夜時分流星出現頻率最高！',
    objectives: [
      { type: 'lie_down', description: '在室外按 Z 平躺在草地上仰望天頂' },
      { type: 'capture_meteor', description: '捕捉到一張伴隨流星光軌的夜空照片' },
    ],
    rewards: { money: 1000 },
    prerequisiteQuestId: 'ch5_iss_intercept',
  },
  {
    id: 'ch6_southern_wonders',
    chapter: 6,
    title: '南天之冠：大麥哲倫與海山二終局',
    character: CHARACTERS.chen,
    introDialogue: [
      '陳伯、Lin、張館長、蘇菲與艾倫同時出現在通訊頻道中：',
      '「朋友，看看南天的星空吧！那是北半球永遠無法窺見的宇宙奇觀——如雲霧般漂浮的大麥哲倫星系（LMC），以及孕育著瀕死極超巨星的船底座大星雲（NGC 3372）。」',
      '「拍下這兩座南天瑰寶，為這趟跨越半個地球的追星旅程畫上完美的句點！全台天文同好與國際巡天隊正期待著你的終局謝幕！」'
    ],
    completeDialogue: [
      '陳伯眼眶泛紅，所有人在頻道中為你鼓掌喝彩：',
      '「從合歡山那台搖晃的 60mm 老折射鏡，到阿塔卡馬直擊大麥哲倫星系……你已經走過了天文攝影的最長道路。」',
      '「這台最新量子效率 >90% 的旗艦級冷卻 CMOS 感光晶片贈送給你！【自由沙盒觀測模式】已全面解鎖，宇宙是你的畫布，繼續航行吧，星空旅人！」'
    ],
    storySummary: '在智利阿塔卡馬成功拍攝大麥哲倫星系與船底座海山二，全主線圓滿通關，獲贈旗艦級 CMOS 晶片並解鎖終極自由觀測模式。',
    starHoppingTip: '【全體夥伴祝福】：大麥哲倫星系（LMC）在南天肉眼可見如一團星雲；船底座大星雲（NGC 3372）面積為獵戶座四倍，長曝光下呈現璀璨緋紅！',
    objectives: [
      { type: 'capture_target', targetId: 'LMC', description: '拍攝南天「LMC 大麥哲倫星系」' },
      { type: 'capture_target', targetId: 'NGC3372', description: '拍攝南天「NGC 3372 船底座大星雲（海山二）」' },
    ],
    rewards: { money: 2500, unlockAccessory: 'camera_cmos' },
    prerequisiteQuestId: 'ch6_stargazing_lie_down',
  },
];
