import { DeepSkyObjectData } from '../types';

/** Messier catalog deep-sky objects with real coordinates. */
export const DEEP_SKY_OBJECTS: DeepSkyObjectData[] = [
  // --- Galaxies ---
  { 
    id: 'M31', name: 'M31', commonName: '仙女座星系 Andromeda Galaxy', ra: 0.712, dec: 41.269, magnitude: 3.4, type: 'galaxy', sizeArcmin: 178, difficulty: 1, basePrice: 200,
    starHoppingGuide: '先在東北方找到大大的「W 形仙后座」，順著中間頂點（策星）向右下方延伸約兩個星座寬度；或從飛馬座大四邊形東側向上沿仙女座星脊找到奎宿九，再往西北偏北移動 2 度。'
  },
  { 
    id: 'M33', name: 'M33', commonName: '三角座星系 Triangulum Galaxy', ra: 1.564, dec: 30.660, magnitude: 5.7, type: 'galaxy', sizeArcmin: 73, difficulty: 3, basePrice: 300,
    starHoppingGuide: '從仙女座奎宿九出發，朝向白羊座最亮星「婁宿三」方向直線移動，位於兩星連線的中點稍偏南。'
  },
  { 
    id: 'M51', name: 'M51', commonName: '渦狀星系 Whirlpool Galaxy', ra: 13.500, dec: 47.195, magnitude: 8.4, type: 'galaxy', sizeArcmin: 11, difficulty: 3, basePrice: 350,
    starHoppingGuide: '先找到北斗七星勺柄末端的最後一顆星「搖光星（大熊座 Eta）」，往西南偏西方向移動約 3.5 度（約 7 個滿月寬度）。'
  },
  { 
    id: 'M81', name: 'M81', commonName: '波德星系 Bode\'s Galaxy', ra: 9.926, dec: 69.065, magnitude: 6.9, type: 'galaxy', sizeArcmin: 27, difficulty: 2, basePrice: 250,
    starHoppingGuide: '從北斗七星勺身左下角的「天璇星」連線至右上角的「天樞星」，順著連線方向向外延伸相同距離，即可到達大熊座頭部上方的 M81 與 M82。'
  },
  { 
    id: 'M82', name: 'M82', commonName: '雪茄星系 Cigar Galaxy', ra: 9.932, dec: 69.680, magnitude: 8.4, type: 'galaxy', sizeArcmin: 11, difficulty: 3, basePrice: 300,
    starHoppingGuide: '緊鄰 M81 波德星系北側約 0.6 度（不到一個視野距離），側向看過去呈細長雪茄狀。'
  },
  { 
    id: 'M104', name: 'M104', commonName: '草帽星系 Sombrero Galaxy', ra: 12.667, dec: -11.623, magnitude: 8.0, type: 'galaxy', sizeArcmin: 9, difficulty: 4, basePrice: 400,
    starHoppingGuide: '先找到室女座最亮星「角宿一」與烏鴉座四邊形右上角的「軫宿一」，M104 位於烏鴉座上方、兩星連線偏北側約 5.5 度處。'
  },
  { 
    id: 'M101', name: 'M101', commonName: '風車星系 Pinwheel Galaxy', ra: 14.054, dec: 54.349, magnitude: 7.9, type: 'galaxy', sizeArcmin: 29, difficulty: 4, basePrice: 350,
    starHoppingGuide: '位於北斗七星勺柄末端兩顆星（開陽星與搖光星）之間，以這兩顆星為底邊，往東北方向構成一個正三角形頂點。'
  },

  // --- Emission / Reflection Nebulae ---
  { 
    id: 'M42', name: 'M42', commonName: '獵戶座大星雲 Orion Nebula', ra: 5.588, dec: -5.391, magnitude: 4.0, type: 'nebula', sizeArcmin: 85, difficulty: 1, basePrice: 180,
    starHoppingGuide: '先找到東南方最耀眼的「獵戶座腰帶三星（參宿一、參宿二、參宿三）」，朝正下方佩劍方向垂直看三顆微弱小星，中間那顆微光就是 M42！'
  },
  { 
    id: 'M43', name: 'M43', commonName: '獵戶座星雲 (北部) De Mairan\'s Nebula', ra: 5.593, dec: -5.268, magnitude: 9.0, type: 'nebula', sizeArcmin: 20, difficulty: 2, basePrice: 150,
    starHoppingGuide: '直接對準 M42 獵戶座大星雲，在主雲氣正北側（正上方）被一條暗黑塵埃帶隔開的逗點狀星雲即是 M43。'
  },
  { 
    id: 'M78', name: 'M78', commonName: '獵戶座反射星雲', ra: 5.779, dec: 0.081, magnitude: 8.3, type: 'nebula', sizeArcmin: 8, difficulty: 3, basePrice: 250,
    starHoppingGuide: '從獵戶座腰帶最左側的「參宿一」出發，朝向右上方的「參宿四（紅超巨星）」連線方向移動約 2.5 度處。'
  },
  { 
    id: 'M8', name: 'M8', commonName: '礁湖星雲 Lagoon Nebula', ra: 18.063, dec: -24.384, magnitude: 6.0, type: 'nebula', sizeArcmin: 90, difficulty: 1, basePrice: 200,
    starHoppingGuide: '在南方銀河中找到人馬座「茶壺」造型，從茶壺嘴的「箕宿二」向上往銀河中心方向移動約 5 度即可看見大片雲氣。'
  },
  { 
    id: 'M17', name: 'M17', commonName: '天鵝星雲 Omega Nebula', ra: 18.346, dec: -16.175, magnitude: 6.0, type: 'nebula', sizeArcmin: 46, difficulty: 2, basePrice: 220,
    starHoppingGuide: '沿著人馬座茶壺頂部蓋子「斗宿二」向上延伸約 12 度，位於人馬座與盾牌座交界處的銀河密集區。'
  },
  { 
    id: 'M20', name: 'M20', commonName: '三裂星雲 Trifid Nebula', ra: 18.043, dec: -23.028, magnitude: 6.3, type: 'nebula', sizeArcmin: 28, difficulty: 2, basePrice: 250,
    starHoppingGuide: '位於 M8 礁湖星雲的正北方僅 1.4 度處（同一個雙筒望遠鏡視野內），由紅藍雙色三道暗黑塵埃帶裂開。'
  },
  { 
    id: 'M16', name: 'M16', commonName: '鷹星雲 Eagle Nebula', ra: 18.314, dec: -13.793, magnitude: 6.0, type: 'nebula', sizeArcmin: 35, difficulty: 2, basePrice: 280,
    starHoppingGuide: '在巨蛇座尾部，緊鄰 M17 天鵝星雲北側約 2.5 度處（著名的創生之柱所在之處）。'
  },
  { 
    id: 'M1', name: 'M1', commonName: '蟹狀星雲 Crab Nebula', ra: 5.576, dec: 22.015, magnitude: 8.4, type: 'nebula', sizeArcmin: 7, difficulty: 3, basePrice: 350,
    starHoppingGuide: '先找到金牛座南側長角的尖端亮星「天關星（金牛座 Zeta）」，往西北方向微調約 1 度（兩顆滿月距離）。'
  },

  // --- Planetary Nebulae ---
  { 
    id: 'M57', name: 'M57', commonName: '環狀星雲 Ring Nebula', ra: 18.893, dec: 33.029, magnitude: 8.8, type: 'planetary_nebula', sizeArcmin: 1.4, difficulty: 2, basePrice: 300,
    starHoppingGuide: '先找到天琴座超亮「織女星」，朝南看到平行四邊形底部的兩顆星「漸台二」與「漸台三」，M57 就位於這兩星連線的正中點。'
  },
  { 
    id: 'M27', name: 'M27', commonName: '啞鈴星雲 Dumbbell Nebula', ra: 19.993, dec: 22.721, magnitude: 7.5, type: 'planetary_nebula', sizeArcmin: 8, difficulty: 2, basePrice: 280,
    starHoppingGuide: '在夏夜大三角的天鵝座天津四與天鷹座牛郎星連線中點偏東處，位於狐狸座中心、天箭座箭尖正上方約 3 度。'
  },
  { 
    id: 'M97', name: 'M97', commonName: '貓頭鷹星雲 Owl Nebula', ra: 11.248, dec: 55.019, magnitude: 9.9, type: 'planetary_nebula', sizeArcmin: 3.4, difficulty: 4, basePrice: 400,
    starHoppingGuide: '從北斗七星勺底的「天璇星」往東南向「天璣星」方向移動約 2.3 度處。'
  },

  // --- Star Clusters (Open) ---
  { 
    id: 'M45', name: 'M45', commonName: '昴宿星團 Pleiades', ra: 3.791, dec: 24.105, magnitude: 1.6, type: 'cluster', sizeArcmin: 110, difficulty: 1, basePrice: 150,
    starHoppingGuide: '肉眼可見！先找到金牛座紅巨星「畢宿五」，往西北方向約 14 度，即可看見一小撮像微縮北斗七星的七姊妹藍白星群。'
  },
  { 
    id: 'M44', name: 'M44', commonName: '蜂巢星團 Beehive Cluster', ra: 8.667, dec: 19.669, magnitude: 3.7, type: 'cluster', sizeArcmin: 95, difficulty: 1, basePrice: 120,
    starHoppingGuide: '位於雙子座雙子星與獅子座軒轅十四連線的正中點，巨蟹座四顆暗星包圍的中心。'
  },
  { 
    id: 'M35', name: 'M35', commonName: '雙子座疏散星團', ra: 6.148, dec: 24.333, magnitude: 5.3, type: 'cluster', sizeArcmin: 28, difficulty: 2, basePrice: 130,
    starHoppingGuide: '在雙子座哥哥「卡斯托爾」的右腳尖「鉞星（雙子座 Eta）」西北方約 2.5 度處。'
  },
  { 
    id: 'M11', name: 'M11', commonName: '野鴨星團 Wild Duck Cluster', ra: 18.851, dec: -6.267, magnitude: 6.3, type: 'cluster', sizeArcmin: 14, difficulty: 2, basePrice: 160,
    starHoppingGuide: '在天鷹座牛郎星向西南方延伸的銀河暗帶中，盾牌座四邊形頂部。'
  },

  // --- Globular Clusters ---
  { 
    id: 'M13', name: 'M13', commonName: '武仙座球狀星團 Great Hercules Cluster', ra: 16.695, dec: 36.462, magnitude: 5.8, type: 'cluster', sizeArcmin: 20, difficulty: 1, basePrice: 180,
    starHoppingGuide: '先找到武仙座「拱頂四邊形」，在西側兩星（天紀二與天紀三）連線偏北三分之二處，是一團由數十萬顆恆星組成的球狀星團。'
  },
  { 
    id: 'M3', name: 'M3', commonName: '獵犬座球狀星團', ra: 13.703, dec: 28.377, magnitude: 6.2, type: 'cluster', sizeArcmin: 18, difficulty: 2, basePrice: 170,
    starHoppingGuide: '位於牧夫座超亮紅巨星「大角星」與獵犬座常陳一連線的正中點。'
  },
  { 
    id: 'M5', name: 'M5', commonName: '巨蛇座球狀星團', ra: 15.310, dec: 2.083, magnitude: 5.7, type: 'cluster', sizeArcmin: 23, difficulty: 2, basePrice: 170,
    starHoppingGuide: '從室女座角宿一往東偏北找到室女座東側邊界，位於巨蛇座頭部天市右垣七西南方約 8 度。'
  },
  { 
    id: 'M15', name: 'M15', commonName: '飛馬座球狀星團', ra: 21.500, dec: 12.167, magnitude: 6.2, type: 'cluster', sizeArcmin: 18, difficulty: 2, basePrice: 165,
    starHoppingGuide: '從飛馬座大四邊形西南角的室宿一出發，穿過飛馬座鼻尖的危宿三，向前直線延伸約 4 度。'
  },
  { 
    id: 'M22', name: 'M22', commonName: '人馬座球狀星團', ra: 18.607, dec: -23.905, magnitude: 5.1, type: 'cluster', sizeArcmin: 32, difficulty: 1, basePrice: 160,
    starHoppingGuide: '位於人馬座茶壺蓋頂部「斗宿二」往東北偏東方向僅 2.5 度處，是夜空中第三亮的巨大球狀星團。'
  },
  { 
    id: 'M4', name: 'M4', commonName: '天蠍座球狀星團', ra: 16.394, dec: -26.526, magnitude: 5.6, type: 'cluster', sizeArcmin: 36, difficulty: 1, basePrice: 150,
    starHoppingGuide: '極易尋找！先在南方天空找到天蠍座紅超巨星「心宿二（天蠍座心臟）」，往西側僅 1.3 度處即可看到鬆散的球狀星團。'
  },

  // --- Southern Hemisphere Specialties (南天瑰寶) ---
  {
    id: 'LMC', name: 'LMC', commonName: '大麥哲倫星系 Large Magellanic Cloud', ra: 5.394, dec: -69.756, magnitude: 0.9, type: 'galaxy', sizeArcmin: 650, difficulty: 2, basePrice: 380,
    starHoppingGuide: '南半球肉眼震撼可見！位於劍魚座與山案座交界，如一朵漂浮在南天的燦爛星雲光斑，是銀河系最大的伴星系。'
  },
  {
    id: 'SMC', name: 'SMC', commonName: '小麥哲倫星系 Small Magellanic Cloud', ra: 0.887, dec: -72.828, magnitude: 2.7, type: 'galaxy', sizeArcmin: 300, difficulty: 2, basePrice: 320,
    starHoppingGuide: '位於杜鵑座南側，緊鄰全天第二亮的杜鵑座 47 球狀星團，肉眼可見的南天矮星系。'
  },
  {
    id: 'NGC3372', name: 'NGC 3372', commonName: '船底座大星雲 Carina Nebula', ra: 10.750, dec: -59.867, magnitude: 3.0, type: 'nebula', sizeArcmin: 120, difficulty: 2, basePrice: 350,
    starHoppingGuide: '南天最磅礡的發射星雲，面積為獵戶座大星雲的四倍！中心包含瀕臨超新星爆發的極超巨星海山二（Eta Carinae）。'
  },
  {
    id: 'NGC5139', name: 'NGC 5139', commonName: '半人馬座 Omega 球狀星團', ra: 13.447, dec: -47.478, magnitude: 3.9, type: 'cluster', sizeArcmin: 36, difficulty: 1, basePrice: 300,
    starHoppingGuide: '全天最明亮、質量最大的巨型球狀星團，包含上百萬顆恆星，肉眼看去如同一顆朦朧的 4 等星。'
  },
  {
    id: 'NGC4755', name: 'NGC 4755', commonName: '珠寶盒星團 Jewel Box Cluster', ra: 12.895, dec: -60.337, magnitude: 4.2, type: 'cluster', sizeArcmin: 10, difficulty: 1, basePrice: 280,
    starHoppingGuide: '南半球最瑰麗的疏散星團！位於南十字座「十字架三（Mimosa）」東南方僅 1 度處，中心一顆紅超巨星被多顆藍白色寶石星環繞。'
  },
  {
    id: 'NGC104', name: 'NGC 104', commonName: '杜鵑座 47 球狀星團 47 Tucanae', ra: 0.402, dec: -72.081, magnitude: 4.0, type: 'cluster', sizeArcmin: 50, difficulty: 1, basePrice: 310,
    starHoppingGuide: '全天第二大、最密集的球狀星團！緊鄰小麥哲倫星系（SMC），肉眼清晰可見如一顆明亮的朦朧星體。'
  }
];
