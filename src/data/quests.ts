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
  type: 'capture_any' | 'capture_target' | 'capture_count' | 'quality_min';
  targetId?: string;    // DSO id like 'M42'
  targetType?: string;  // 'messier', 'galaxy', etc.
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
  rewards: { money?: number; unlockLocation?: string; telescopeDiscount?: number };
  prerequisiteQuestId?: string;
}

export const CHARACTERS: Record<string, QuestCharacter> = {
  chen: {
    name: '陳伯',
    role: '合歡山老氣象員 · 72歲',
    avatarIcon: '👴',
    color: '#38bdf8',
  },
  lin: {
    name: '星際旅人 Lin',
    role: '天文論壇版主 · 星野攝影獵人',
    avatarIcon: '🌌',
    color: '#818cf8',
  },
  director: {
    name: '張弘道館長',
    role: '高山天文台名譽台長 · 天體物理學者',
    avatarIcon: '🔭',
    color: '#fbbf24',
  },
  sophie: {
    name: '蘇菲主編',
    role: '《國際天文攝影》雜誌特約編輯',
    avatarIcon: '📸',
    color: '#f472b6',
  },
  alan: {
    name: '艾倫研究員',
    role: '深空巡天計畫 · 神秘聯絡人',
    avatarIcon: '🛰️',
    color: '#34d399',
  }
};

export const QUESTS: Quest[] = [
  // =========================================================================
  // CHAPTER 0: 星野小屋的初夜 (The Cabin on Hehuan Mountain)
  // =========================================================================
  {
    id: 'ch0_first_light',
    chapter: 0,
    title: '第一道光 (First Light)',
    character: CHARACTERS.chen,
    introDialogue: [
      '「孩子，好久沒有年輕人願意留在這座合歡山小屋了。」老鄰居陳伯拄著拐杖，遞過一杯熱騰騰的薑茶。',
      '「今晚是新月，海拔三千公尺的天空就像打翻的黑曜石寶盒一樣純淨。看到觀測坪上那台望遠鏡了嗎？」',
      '「走過去按 E 對準星空，按下空白鍵開始曝光。讓那些在宇宙旅行了幾百、幾千光年的光子，在感光元件上慢慢凝聚吧。」'
    ],
    completeDialogue: [
      '「太棒了！這就是天文攝影師的第一步——捕捉到了屬於你的第一道星光！」陳伯笑著拍了拍你的肩膀。',
      '「光子累積的感覺很神奇對吧？宇宙從不吝嗇展現美麗，只看你願不願意靜下心來等待。」'
    ],
    storySummary: '繼承了合歡山觀測小屋，在老氣象員陳伯的指導下完成人生第一張星空攝影。',
    starHoppingTip: '按 C 鍵開啟星座連線。抬頭看向南方天空，找到最耀眼的亮星，或將望遠鏡對準任何天區，長曝光 5 秒以上即可。',
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
      '「【認星訣竅】：按 C 開啟星座連線，在東南方找到排成一直線的三顆腰帶三星，往正下方垂直看有三顆微弱的小星（佩劍），中間那顆就是 M42！」',
      '「我在望遠鏡上幫你校準了【尋星導航箭頭】，轉動鏡筒順著箭頭方向瞄準，進入視野後給它 30 秒以上的長曝光，你將看見絢爛的粉紅雲氣！」'
    ],
    completeDialogue: [
      '「看啊！那粉紅色的氣體卷雲與中心的四合星！你的對焦和曝光掌握得比我想像的還要出色！」',
      '「我把你這張 M42 的照片傳到全台天文攝影論壇了，這下子肯定會引來不少人的關注。」'
    ],
    storySummary: '在獵戶座佩劍處精確捕捉到著名的 M42 恆星育嬰室，照片在天文論壇引起了廣泛討論。',
    starHoppingTip: '【陳伯傳授】：按 C 開啟星座連線。在東南方找到「獵戶座腰帶三星」，順著下方垂直佩劍連線看，中間那顆微光就是 M42！望遠鏡視野邊緣的【尋星導航箭頭】會即時指引鏡筒轉向。',
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
      '「自我介紹一下，我是論壇的版主 Lin。既然你已經掌握了星雲，那敢不敢挑戰真正的跨星系目標——仙女座大星系 M31？」',
      '「【認星訣竅】：找到北天天空那個大大的『W 形仙后座』，順著中間頂點往右下方（飛馬座方向）延伸約兩個星座寬度，那團紡錘狀星系就是 M31！」',
      '「跟隨望遠鏡的導航雷達轉向，用長曝光捕捉它的外圍旋臂吧，我期待一張至少 B 級以上的驚豔之作！」'
    ],
    completeDialogue: [
      '【論壇私訊】星際旅人 Lin：「天啊……這解析度太驚人了！我甚至能看到 M31 旋臂上的暗黑塵埃帶！」',
      '「你絕對有極高的天文攝影天賦。接下來正好有一場全台天文盛事，你非參加不可！」'
    ],
    storySummary: '接受天文論壇版主 Lin 的挑戰，跨越 250 萬光年成功拍攝仙女座星系的壯麗旋臂。',
    starHoppingTip: '【Lin 傳授】：在東北方找到「W 形仙后座」，順著頂點向右下方（飛馬座方向）延伸，即可看到 M31 仙女座星系！望遠鏡尋星鏡會顯示精確角度與方位。',
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
      '「【認星訣竅】：金牛座背後的『M45 昴宿星團（七姊妹）』、武仙座腰部的『M13 球狀星團』、巨蟹座中心的『M44 蜂巢星團』都是極佳目標！按 G 打開圖鑑可以隨時鎖定導航！」',
      '「收集 5 個不同的梅西耶天體，我為你爭取阿里山頂級觀測站的通行證！」'
    ],
    completeDialogue: [
      '【論壇私訊】星際旅人 Lin：「太不可思議了！短短時間內你居然收集了 5 個完全不同類型的梅西耶天體！」',
      '「阿里山天文學會已經審核通過你的資格，高海拔暗空觀測站現在隨時為你敞開大門！」'
    ],
    storySummary: '參加梅西耶馬拉松並成功拍得 5 個不同天體，一躍成為論壇名人並獲贈觀測站通行證。',
    starHoppingTip: '【Lin 傳授】：按 G 開啟圖鑑，可點擊任意梅西耶天體（如 M45 昴宿星團、M13 武仙座球狀星團）鎖定導航，跟隨望遠鏡箭頭輕鬆巡天！',
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
      '「【認星訣竅】：1. M1 蟹狀星雲位於金牛座角尖；2. M57 環狀星雲位於天琴座織女星下方的平行星之間；3. M27 啞鈴星雲位於天鵝座與天箭座上方。望遠鏡導航鏡會為你指明方向！」',
      '「集齊這三張珍貴影像，雜誌社將提供 $3,500 特約稿費！」'
    ],
    completeDialogue: [
      '【國際郵件】蘇菲主編：「天哪！這三張照片組成的專題跨頁簡直是藝術品！讀者們都為之瘋狂了！」',
      '「雜誌社已經將豐厚稿費匯入你的帳戶，下一期封面故事的主角就是你！」'
    ],
    storySummary: '為國際頂尖天文雜誌拍攝星雲生死輪迴三部曲，作品登上國際特刊封面。',
    starHoppingTip: '【蘇菲主編傳授】：M1（金牛座南角）、M57（天琴座織女星旁）、M27（狐狸座天鵝座間），望遠鏡尋星鏡會顯示即時方位角！',
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
      '「【認星訣竅】：1. M51 渦狀星系位於北斗七星勺柄（搖光星）往西南延伸處；2. M81 波德星系位於大熊座頭頂；3. M104 草帽星系位於室女座南端。利用尋星鏡導航箭頭，鏡頭將成為人類探索宇宙邊疆的先鋒之眼。」'
    ],
    completeDialogue: [
      '【加密通訊】艾倫研究員：「所有星系數據完整校準完畢！這組數據填補了跨星系演化模型的重要空白！」',
      '「你的名字已經被永久記錄在國際深空巡天數據庫的貢獻者名冊中。星空浩瀚，探索永無止境！」'
    ],
    storySummary: '為國際深空巡天計畫提供三座百萬光年外指標星系的高解析照片，名字被載入國際天文史冊。',
    starHoppingTip: '【艾倫研究員傳授】：M51（北斗七星勺柄末端延伸）、M81（大熊座上方）、M104（室女座南邊），望遠鏡尋星雷達會帶你直達目標！',
    objectives: [
      { type: 'capture_target', targetId: 'M51', description: '拍攝 M51 渦狀星系' },
      { type: 'capture_target', targetId: 'M81', description: '拍攝 M81 波德星系' },
      { type: 'capture_target', targetId: 'M104', description: '拍攝 M104 草帽星系' },
    ],
    rewards: { money: 6000 },
    prerequisiteQuestId: 'ch2_nebula_expert',
  },
];
