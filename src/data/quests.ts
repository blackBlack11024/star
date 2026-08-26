// ============================================================
// Stargazer Simulator — Quest Data Definitions
// ============================================================

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
  story: string;          // Narrative dialogue/description
  objectives: QuestObjective[];
  rewards: { money?: number; unlockLocation?: string; telescopeDiscount?: number; title?: string };
  prerequisiteQuestId?: string;
}

export const QUESTS: Quest[] = [
  {
    id: 'ch0_first_light',
    chapter: 0,
    title: '第一道光',
    story: '你搬到山上的小屋，旁邊有一台老舊的望遠鏡。老鄰居陳伯說：「孩子，今晚天氣不錯，去拍一張星野照試試吧。記得長曝光，讓光子慢慢累積。」',
    objectives: [{ type: 'capture_any', description: '拍下任何一張天空照片' }],
    rewards: { money: 50 },
  },
  {
    id: 'ch0_find_orion',
    chapter: 0,
    title: '獵戶的劍',
    story: '陳伯翻出一本褪色的星圖：「你看這裡，獵戶座腰帶以南，有個紅色的大星雲，那是M42。每年冬天，天文攝影師都搶著拍它。你也試試？」',
    objectives: [{ type: 'capture_target', targetId: 'M42', description: '拍攝 M42 獵戶座大星雲' }],
    rewards: { money: 200 },
    prerequisiteQuestId: 'ch0_first_light',
  },
  {
    id: 'ch1_andromeda',
    chapter: 1,
    title: '最近的星系',
    story: '你把M42的照片發到天文論壇，意外引來一位網友「星際旅人Lin」的回覆：「不錯嘛！但你拍過M31嗎？那是250萬光年外的仙女座星系，卻肉眼可見。去試試，讓我見識你的技術。」',
    objectives: [{ type: 'capture_target', targetId: 'M31', description: '拍攝 M31 仙女座星系（至少B級）', minQuality: 'B' }],
    rewards: { money: 500 },
    prerequisiteQuestId: 'ch0_find_orion',
  },
  {
    id: 'ch1_collector',
    chapter: 1,
    title: '深空收藏家',
    story: '「星際旅人Lin」傳訊：「馬上要舉辦梅西耶馬拉松了！收集越多梅西耶天體越好。先從5個開始練習。」',
    objectives: [{ type: 'capture_count', targetType: 'messier', count: 5, description: '拍攝5個不同的梅西耶天體' }],
    rewards: { money: 1000, unlockLocation: 'alishan' },
    prerequisiteQuestId: 'ch1_andromeda',
  },
  {
    id: 'ch2_masterpiece',
    chapter: 2,
    title: '星野藝術家',
    story: '本地天文台的館長看到你的作品集，說：「你有才華。但真正的星野攝影，需要在對的時機、對的地點、對的設備才能拍出S級作品。我等你。」',
    objectives: [{ type: 'quality_min', minQuality: 'S', description: '拍攝一張S級評價的照片' }],
    rewards: { money: 2500, title: '星野藝術家' },
    prerequisiteQuestId: 'ch1_collector',
  },
  {
    id: 'ch2_nebula_expert',
    chapter: 2,
    title: '星雲獵人',
    story: '國際天文攝影雜誌的編輯寄來邀請函：「我們正在策劃「台灣星雲」專題，需要蟹狀星雲M1、環狀星雲M57、啞鈴星雲M27的高品質影像。你能辦到嗎？」',
    objectives: [
      { type: 'capture_target', targetId: 'M1', description: '拍攝 M1 蟹狀星雲' },
      { type: 'capture_target', targetId: 'M57', description: '拍攝 M57 環狀星雲' },
      { type: 'capture_target', targetId: 'M27', description: '拍攝 M27 啞鈴星雲' },
    ],
    rewards: { money: 3000, telescopeDiscount: 0.2 },
    prerequisiteQuestId: 'ch2_masterpiece',
  },
  {
    id: 'ch3_galaxy_cluster',
    chapter: 3,
    title: '星系探索者',
    story: '一封神秘的信件出現在信箱中，寄件人是「深空觀測協會」。信中寫道：「我們正在進行一項秘密計畫，需要幾個特殊星系的影像：渦狀星系、波德星系、草帽星系。請速回覆。」',
    objectives: [
      { type: 'capture_target', targetId: 'M51', description: '拍攝 M51 渦狀星系' },
      { type: 'capture_target', targetId: 'M81', description: '拍攝 M81 波德星系' },
      { type: 'capture_target', targetId: 'M104', description: '拍攝 M104 草帽星系' },
    ],
    rewards: { money: 5000 },
    prerequisiteQuestId: 'ch2_nebula_expert',
  },
];
