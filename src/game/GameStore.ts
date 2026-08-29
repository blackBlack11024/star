// ============================================================
// Stargazer Simulator — Zustand Vanilla Store
// ============================================================
import { createStore } from 'zustand/vanilla';
import {
  GameMode, WeatherState, Photo, ObservationLocation,
  Accessory, FrameType,
} from '../types';
import { LOCATIONS } from '../data/locations';
import { TELESCOPE_CONFIGS, ACCESSORIES, getTelescopeConfig } from '../data/telescopes';
import { QUESTS } from '../data/quests';

export interface GameState {
  // ---- Time ----
  currentTime: Date;
  timeScale: number;
  isTimePaused: boolean;

  // ---- Location ----
  currentLocation: ObservationLocation;
  unlockedLocations: string[];

  // ---- Player ----
  money: number;
  telescopeLevel: number;
  unlockedTelescopeLevels: number[];
  accessories: Accessory[];
  photos: Photo[];
  equipTelescope: (level: number) => boolean;
  toggleEquipAccessory: (accessoryId: string) => void;
  unlockAccessory: (accessoryId: string) => void;

  // ---- Stargazing Stance & Laser Pointer ----
  isLyingDown: boolean;
  setLyingDown: (lying: boolean) => void;
  isLaserPointerActive: boolean;
  setLaserPointerActive: (active: boolean) => void;
  isLaserPointerMounted: boolean;
  setLaserPointerMounted: (mounted: boolean) => void;
  laserPointedTarget: any | null;
  setLaserPointedTarget: (target: any | null) => void;

  // ---- Mode ----
  gameMode: GameMode;

  // ---- Weather ----
  weather: WeatherState;
  weatherTimer: number;

  // ---- Telescope ----
  telescopeRa: number;
  telescopeDec: number;
  telescopeAzimuth: number;
  telescopeAltitude: number;
  currentFov: number;
  isExposing: boolean;
  exposureElapsed: number;
  exposureProgress: number;
  exposureDuration: number;
  currentFrameType: FrameType;
  setFrameType: (type: FrameType) => void;
  isTelescopeLocked: boolean;
  toggleTelescopeLock: () => void;
  setTelescopeLocked: (locked: boolean) => void;

  // ---- Time Reversal ----
  timeReversalCostPerHour: number;

  // ---- Audio Settings ----
  masterVolume: number;
  machineVolume: number;
  ambientVolume: number;
  weatherVolume: number;
  sfxVolume: number;
  isMuted: boolean;

  // ---- Display toggles ----
  showConstellations: boolean;
  showStarNames: boolean;
  showGrid: boolean;
  isUIVisible: boolean;
  toggleUIVisibility: () => void;

  // ---- Audio Actions ----
  setMasterVolume: (v: number) => void;
  setMachineVolume: (v: number) => void;
  setAmbientVolume: (v: number) => void;
  setWeatherVolume: (v: number) => void;
  setSfxVolume: (v: number) => void;
  toggleMute: () => void;

  // ---- Actions ----
  setGameMode: (mode: GameMode) => void;
  setTimeScale: (scale: number) => void;
  toggleTimePause: () => void;
  advanceTime: (deltaMs: number) => void;
  reverseTime: (hours: number) => boolean;
  advanceTimeHours: (hours: number) => void;
  advanceTimeDays: (days: number) => void;
  advanceTimeYears: (years: number) => void;
  resetToRealTime: () => void;
  setTime: (date: Date) => void;
  setWeather: (weather: WeatherState) => void;
  setWeatherTimer: (t: number) => void;
  setLocation: (location: ObservationLocation) => void;
  unlockLocation: (id: string) => void;
  addMoney: (amount: number) => void;
  spendMoney: (amount: number) => boolean;
  addPhoto: (photo: Photo) => void;
  deletePhoto: (photoId: string) => void;
  sellPhoto: (photoId: string) => number;
  sellAllPhotos: () => number;
  upgradeTelescope: (level: number) => boolean;
  buyAccessory: (accessoryId: string) => boolean;
  setTelescopePointing: (ra: number, dec: number) => void;
  setTelescopeHorizontal: (azimuth: number, altitude: number) => void;
  setFov: (fov: number) => void;
  startExposure: (duration?: number) => void;
  stopExposure: () => void;
  updateExposureProgress: (progress: number) => void;
  updateExposureElapsed: (seconds: number) => void;
  toggleConstellations: () => void;
  toggleStarNames: () => void;
  toggleGrid: () => void;
  // ---- Quest & Codex ----
  customTrackedDsoId: string | null;
  setCustomTrackedDso: (id: string | null) => void;
  planets: any[];
  setPlanets: (planets: any[]) => void;
  completedQuestIds: string[];
  discoveredTargets: string[];
  resetSaveData: () => void;
}

const SAVE_KEY = 'stargazer_sim_save_v1';

interface SavedState {
  money: number;
  telescopeLevel: number;
  unlockedTelescopeLevels?: number[];
  accessories: Accessory[];
  photos: any[];
  unlockedLocations: string[];
  completedQuestIds: string[];
  discoveredTargets: string[];
  masterVolume?: number;
  machineVolume?: number;
  ambientVolume?: number;
  weatherVolume?: number;
  sfxVolume?: number;
  isMuted?: boolean;
  telescopeRa?: number;
  telescopeDec?: number;
  telescopeFov?: number;
}

function loadSavedData(): Partial<SavedState> | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.photos)) {
      parsed.photos = parsed.photos.map((p: any) => ({
        ...p,
        timestamp: p.timestamp ? new Date(p.timestamp) : new Date(),
      }));
    }
    return parsed;
  } catch (e) {
    console.warn('[Storage] Failed to load save data:', e);
    return null;
  }
}

let saveTimer: any = null;
export function autoSaveState(state: GameState) {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      const dataToSave: SavedState = {
        money: state.money,
        telescopeLevel: state.telescopeLevel,
        unlockedTelescopeLevels: state.unlockedTelescopeLevels,
        accessories: state.accessories,
        photos: (state.photos || []).slice(-30), // strictly save the 30 most recent photos
        unlockedLocations: state.unlockedLocations,
        completedQuestIds: state.completedQuestIds || [],
        discoveredTargets: state.discoveredTargets || [],
        masterVolume: state.masterVolume,
        machineVolume: state.machineVolume,
        ambientVolume: state.ambientVolume,
        weatherVolume: state.weatherVolume,
        sfxVolume: state.sfxVolume,
        isMuted: state.isMuted,
        telescopeRa: state.telescopeRa,
        telescopeDec: state.telescopeDec,
        telescopeFov: state.currentFov,
      };

      try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(dataToSave));
      } catch (quotaErr) {
        // If localStorage 5MB limit is reached, progressively keep fewer recent photos to guarantee save integrity
        console.warn('[Storage] Quota exceeded, trimming photos to preserve latest save...');
        try {
          dataToSave.photos = (dataToSave.photos || []).slice(-15);
          localStorage.setItem(SAVE_KEY, JSON.stringify(dataToSave));
        } catch (e2) {
          try {
            dataToSave.photos = (dataToSave.photos || []).slice(-6);
            localStorage.setItem(SAVE_KEY, JSON.stringify(dataToSave));
          } catch (e3) {
            dataToSave.photos = (dataToSave.photos || []).slice(-2);
            localStorage.setItem(SAVE_KEY, JSON.stringify(dataToSave));
          }
        }
      }
    } catch (e) {
      console.warn('[Storage] Auto-save error:', e);
    }
  }, 300);
}

const savedData = loadSavedData();
const savedCompletedIds: string[] = savedData?.completedQuestIds || [];

const initialAccessories: Accessory[] = (savedData?.accessories || JSON.parse(JSON.stringify(ACCESSORIES))).map((a: Accessory) => ({
  ...a,
  equipped: a.equipped !== undefined ? a.equipped : a.owned
}));

// Retroactively ensure all accessories awarded by completed quests are unlocked & equipped
for (const q of QUESTS) {
  if (savedCompletedIds.includes(q.id) && q.rewards.unlockAccessory) {
    const acc = initialAccessories.find((a) => a.id === q.rewards.unlockAccessory);
    if (acc) {
      acc.owned = true;
      acc.equipped = true;
    }
  }
}

// Special safeguard: If player completed the planetary tour or end-game, guarantee star trail camera is unlocked!
if (savedCompletedIds.includes('ch5_all_planets') || savedCompletedIds.includes('ch6_southern_wonders')) {
  const stAcc = initialAccessories.find((a) => a.id === 'camera_startrail');
  if (stAcc) {
    stAcc.owned = true;
    stAcc.equipped = true;
  }
}

export const gameStore = createStore<GameState>()((set, get) => ({
  // ---- Initial state (Default to player's current real-world time) ----
  currentTime: new Date(),
  timeScale: 1,
  isTimePaused: false,

  currentLocation: LOCATIONS[0],
  unlockedLocations: savedData?.unlockedLocations || [LOCATIONS[0].id],

  money: savedData?.money ?? 0,
  telescopeLevel: savedData?.telescopeLevel ?? 1,
  unlockedTelescopeLevels: savedData?.unlockedTelescopeLevels ?? Array.from(new Set([1, savedData?.telescopeLevel ?? 1])),
  accessories: initialAccessories,
  photos: (savedData?.photos as Photo[]) || [],

  gameMode: GameMode.Walk,

  isLyingDown: false,
  setLyingDown: (lying) => set({ isLyingDown: lying }),
  isLaserPointerActive: false,
  setLaserPointerActive: (active) => set({ isLaserPointerActive: active }),
  isLaserPointerMounted: false,
  setLaserPointerMounted: (mounted) => set({ isLaserPointerMounted: mounted }),
  laserPointedTarget: null,
  setLaserPointedTarget: (target) => set({ laserPointedTarget: target }),

  weather: WeatherState.Clear,
  weatherTimer: 300,

  telescopeRa: savedData?.telescopeRa ?? 0,
  telescopeDec: savedData?.telescopeDec ?? 45,
  telescopeAzimuth: 180,
  telescopeAltitude: 45,
  currentFov: savedData?.telescopeFov ?? 20,
  isExposing: false,
  exposureElapsed: 0,
  exposureProgress: 0,
  exposureDuration: 30,
  currentFrameType: 'light',
  setFrameType: (type) => set({ currentFrameType: type }),
  isTelescopeLocked: false,
  toggleTelescopeLock: () => set((s) => ({ isTelescopeLocked: !s.isTelescopeLocked })),
  setTelescopeLocked: (locked) => set({ isTelescopeLocked: locked }),

  completedQuestIds: savedData?.completedQuestIds || [],
  discoveredTargets: savedData?.discoveredTargets || [],

  timeReversalCostPerHour: 50,

  // ---- Audio initial state ----
  masterVolume: savedData?.masterVolume ?? 0.7,
  machineVolume: savedData?.machineVolume ?? 0.7,
  ambientVolume: savedData?.ambientVolume ?? 0.8,
  weatherVolume: savedData?.weatherVolume ?? 0.8,
  sfxVolume: savedData?.sfxVolume ?? 0.8,
  isMuted: savedData?.isMuted ?? false,

  showConstellations: true,
  showStarNames: true,
  showGrid: false,
  isUIVisible: true,
  toggleUIVisibility: () => set((s) => ({ isUIVisible: !s.isUIVisible })),

  // ---- Audio Actions ----
  setMasterVolume: (v) => set({ masterVolume: Math.max(0, Math.min(1, v)) }),
  setMachineVolume: (v) => set({ machineVolume: Math.max(0, Math.min(1, v)) }),
  setAmbientVolume: (v) => set({ ambientVolume: Math.max(0, Math.min(1, v)) }),
  setWeatherVolume: (v) => set({ weatherVolume: Math.max(0, Math.min(1, v)) }),
  setSfxVolume: (v) => set({ sfxVolume: Math.max(0, Math.min(1, v)) }),
  toggleMute: () => set((s) => ({ isMuted: !s.isMuted })),

  // ---- Actions ----
  setGameMode: (mode) => set({ gameMode: mode }),

  setTimeScale: (scale) => set({ timeScale: scale }),

  toggleTimePause: () => set((s) => ({ isTimePaused: !s.isTimePaused })),

  advanceTime: (deltaMs) =>
    set((s) => {
      if (s.isTimePaused) return {};
      return { currentTime: new Date(s.currentTime.getTime() + deltaMs * s.timeScale) };
    }),

  reverseTime: (hours) => {
    set((s) => ({
      currentTime: new Date(s.currentTime.getTime() - hours * 3600000),
    }));
    return true;
  },

  advanceTimeHours: (hours) => {
    set((s) => ({
      currentTime: new Date(s.currentTime.getTime() + hours * 3600000),
    }));
  },

  advanceTimeDays: (days) => {
    set((s) => {
      const d = new Date(s.currentTime);
      d.setDate(d.getDate() + days);
      return { currentTime: d };
    });
  },

  advanceTimeYears: (years) => {
    set((s) => {
      const d = new Date(s.currentTime);
      d.setFullYear(d.getFullYear() + years);
      return { currentTime: d };
    });
  },

  resetToRealTime: () => {
    set({ currentTime: new Date() });
  },

  setTime: (date) => {
    set({ currentTime: date });
  },

  setWeather: (weather) => set({ weather }),
  setWeatherTimer: (t) => set({ weatherTimer: t }),

  setLocation: (location) => set({ currentLocation: location }),
  unlockLocation: (id) =>
    set((s) => {
      if (s.unlockedLocations.includes(id)) return {};
      return { unlockedLocations: [...s.unlockedLocations, id] };
    }),

  addMoney: (amount) => set((s) => ({ money: s.money + amount })),

  spendMoney: (amount) => {
    const s = get();
    if (s.money < amount) return false;
    set({ money: s.money - amount });
    return true;
  },

  addPhoto: (photo) => set((s) => ({ photos: [...s.photos, photo] })),
  deletePhoto: (photoId) => set((s) => ({ photos: s.photos.filter((p) => p.id !== photoId) })),

  sellPhoto: (photoId) => {
    const s = get();
    const photo = s.photos.find((p) => p.id === photoId);
    if (!photo || photo.sold || (photo.frameType && photo.frameType !== 'light')) return 0;
    set({
      money: s.money + photo.sellPrice,
      photos: s.photos.map((p) => (p.id === photoId ? { ...p, sold: true } : p)),
    });
    return photo.sellPrice;
  },

  sellAllPhotos: () => {
    const s = get();
    // Only sell actual celestial photos, NEVER sell calibration frames!
    const unsold = s.photos.filter((p) => !p.sold && (!p.frameType || p.frameType === 'light'));
    const total = unsold.reduce((sum, p) => sum + p.sellPrice, 0);
    if (total === 0) return 0;
    set({
      money: s.money + total,
      photos: s.photos.map((p) => ((!p.frameType || p.frameType === 'light') ? { ...p, sold: true } : p)),
    });
    return total;
  },

  upgradeTelescope: (level) => {
    const s = get();
    const config = TELESCOPE_CONFIGS.find((t) => t.level === level);
    if (!config || s.money < config.price || (s.unlockedTelescopeLevels || []).includes(level)) return false;
    set({
      money: s.money - config.price,
      telescopeLevel: level,
      unlockedTelescopeLevels: Array.from(new Set([...(s.unlockedTelescopeLevels || [1]), level])),
    });
    return true;
  },

  equipTelescope: (level) => {
    const s = get();
    const isOwned = (s.unlockedTelescopeLevels || []).includes(level) || s.telescopeLevel >= level;
    if (!isOwned) return false;
    set({ telescopeLevel: level });
    return true;
  },

  buyAccessory: (accessoryId) => {
    const s = get();
    const accIdx = s.accessories.findIndex((a) => a.id === accessoryId);
    if (accIdx === -1) return false;
    const acc = s.accessories[accIdx];
    if (acc.owned || s.money < acc.price) return false;
    const updated = [...s.accessories];
    updated[accIdx] = { ...acc, owned: true, equipped: true };
    set({ money: s.money - acc.price, accessories: updated });
    return true;
  },

  unlockAccessory: (accessoryId) => {
    const s = get();
    const accIdx = s.accessories.findIndex((a) => a.id === accessoryId);
    if (accIdx === -1) return;
    const acc = s.accessories[accIdx];
    const updated = [...s.accessories];
    updated[accIdx] = { ...acc, owned: true, equipped: true };
    set({ accessories: updated });
  },

  toggleEquipAccessory: (accessoryId) => {
    const s = get();
    const accIdx = s.accessories.findIndex((a) => a.id === accessoryId);
    if (accIdx === -1) return;
    const acc = s.accessories[accIdx];
    if (!acc.owned) return;
    const updated = [...s.accessories];
    const currentlyEquipped = acc.equipped !== false;
    updated[accIdx] = { ...acc, equipped: !currentlyEquipped };
    set({ accessories: updated });
  },

  setTelescopePointing: (ra, dec) => set({ telescopeRa: ra, telescopeDec: dec }),
  setTelescopeHorizontal: (azimuth, altitude) => set({ telescopeAzimuth: azimuth, telescopeAltitude: altitude }),
  setFov: (fov) => set({ currentFov: fov }),
  startExposure: (duration?) => set((s) => ({ isExposing: true, exposureDuration: duration ?? s.exposureDuration, exposureProgress: 0, exposureElapsed: 0 })),
  stopExposure: () => set({ isExposing: false, exposureProgress: 0, exposureElapsed: 0 }),
  updateExposureProgress: (progress) => set({ exposureProgress: Math.min(1, progress) }),
  updateExposureElapsed: (seconds) => set({ exposureElapsed: seconds }),
  toggleConstellations: () => set((s) => ({ showConstellations: !s.showConstellations })),
  toggleStarNames: () => set((s) => ({ showStarNames: !s.showStarNames })),
  toggleGrid: () => set((s) => ({ showGrid: !s.showGrid })),
  customTrackedDsoId: null,
  setCustomTrackedDso: (id) => set({ customTrackedDsoId: id }),
  planets: [],
  setPlanets: (planets) => set({ planets }),

  resetSaveData: () => {
    try {
      localStorage.removeItem(SAVE_KEY);
      location.reload();
    } catch (e) {
      console.warn('Failed to clear save data:', e);
    }
  },
}));

// Automatically persist changes to localStorage
gameStore.subscribe((state) => {
  autoSaveState(state);
});
