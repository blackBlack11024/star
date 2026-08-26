import { TelescopeConfig, Accessory } from '../types';

export const TELESCOPE_CONFIGS: TelescopeConfig[] = [
  {
    level: 1,
    name: '入門折射鏡 60mm',
    apertureMm: 60,
    limitingMagnitude: 10.0,
    minFov: 2.5,
    maxFov: 60,
    chromaticAberration: 0.7,
    trackingAccuracy: 0.2,
    price: 0, // starter
  },
  {
    level: 2,
    name: '中階牛頓反射鏡 150mm',
    apertureMm: 150,
    limitingMagnitude: 12.0,
    minFov: 1.0,
    maxFov: 60,
    chromaticAberration: 0.1,
    trackingAccuracy: 0.5,
    price: 500,
  },
  {
    level: 3,
    name: '施密特-卡塞格林 200mm',
    apertureMm: 200,
    limitingMagnitude: 13.5,
    minFov: 0.5,
    maxFov: 60,
    chromaticAberration: 0.2,
    trackingAccuracy: 0.7,
    price: 2000,
  },
  {
    level: 4,
    name: '高階 APO 折射鏡 130mm',
    apertureMm: 130,
    limitingMagnitude: 12.5,
    minFov: 0.8,
    maxFov: 60,
    chromaticAberration: 0.02,
    trackingAccuracy: 0.85,
    price: 3500,
  },
  {
    level: 5,
    name: '天文台級 RC 鏡 350mm',
    apertureMm: 350,
    limitingMagnitude: 15.0,
    minFov: 0.2,
    maxFov: 60,
    chromaticAberration: 0.01,
    trackingAccuracy: 0.95,
    price: 8000,
  },
];

export const ACCESSORIES: Accessory[] = [
  // Eyepieces
  {
    id: 'eyepiece_wide',
    name: '廣角目鏡 32mm',
    type: 'eyepiece',
    description: '82° 超廣角視野，適合觀測大範圍星野。',
    price: 200,
    effects: { maxFovBonus: 5, minFovBonus: 0.5 },
    owned: false,
  },
  {
    id: 'eyepiece_barlow',
    name: '巴羅鏡 2x',
    type: 'eyepiece',
    description: '倍增放大倍率，適合行星觀測。',
    price: 150,
    effects: { minFovMultiplier: 0.5 },
    owned: false,
  },
  // Filters
  {
    id: 'filter_halpha',
    name: 'H-alpha 窄帶濾鏡',
    type: 'filter',
    description: '增強氫元素發射星雲的對比度。',
    price: 300,
    effects: { nebulaBonus: 1.5 },
    owned: false,
  },
  {
    id: 'filter_oiii',
    name: 'OIII 窄帶濾鏡',
    type: 'filter',
    description: '增強氧元素行星狀星雲的對比度。',
    price: 350,
    effects: { planetaryNebulaBonus: 1.8 },
    owned: false,
  },
  {
    id: 'filter_light_pollution',
    name: '光害濾鏡',
    type: 'filter',
    description: '減少光害影響，提升暗淡天體可見度。',
    price: 180,
    effects: { lightPollutionReduction: 0.3 },
    owned: false,
  },
  // Camera upgrades
  {
    id: 'camera_cooled',
    name: '製冷 CCD 相機',
    type: 'camera',
    description: '降低感光元件熱雜訊，長曝光效果大幅提升。',
    price: 1200,
    effects: { exposureGain: 1.5, noiseReduction: 0.5 },
    owned: false,
  },
  {
    id: 'camera_cmos',
    name: '高量子效率 CMOS 相機',
    type: 'camera',
    description: '最新 BSI CMOS 感光元件，量子效率 >90%。',
    price: 2500,
    effects: { exposureGain: 2.0, noiseReduction: 0.7 },
    owned: false,
  },
  // Mount
  {
    id: 'mount_eq',
    name: '赤道儀升級',
    type: 'mount',
    description: '精密赤道儀追蹤，消除長曝光星跡。',
    price: 800,
    effects: { trackingAccuracyBonus: 0.3 },
    owned: false,
  },
  {
    id: 'mount_goto',
    name: 'GoTo 自動導星系統',
    type: 'mount',
    description: '自動搜尋並追蹤目標天體。',
    price: 1500,
    effects: { trackingAccuracyBonus: 0.5, autoFind: 1 },
    owned: false,
  },
];

export function getTelescopeConfig(level: number): TelescopeConfig {
  return TELESCOPE_CONFIGS.find(t => t.level === level) ?? TELESCOPE_CONFIGS[0];
}
