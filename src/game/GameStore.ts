// ============================================================
// Stargazer Simulator — Zustand Vanilla Store
// ============================================================
import { createStore } from 'zustand/vanilla';
import {
  GameMode, WeatherState, Photo, ObservationLocation,
  Accessory,
} from '../types';
import { LOCATIONS } from '../data/locations';
import { TELESCOPE_CONFIGS, ACCESSORIES, getTelescopeConfig } from '../data/telescopes';

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
  accessories: Accessory[];
  photos: Photo[];

  // ---- Mode ----
  gameMode: GameMode;

  // ---- Weather ----
  weather: WeatherState;
  weatherTimer: number;

  // ---- Telescope ----
  telescopeRa: number;
  telescopeDec: number;
  currentFov: number;
  isExposing: boolean;
  exposureProgress: number;
  exposureDuration: number;

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
  resetToRealTime: () => void;
  setTime: (date: Date) => void;
  setWeather: (weather: WeatherState) => void;
  setWeatherTimer: (t: number) => void;
  setLocation: (location: ObservationLocation) => void;
  unlockLocation: (id: string) => void;
  addMoney: (amount: number) => void;
  spendMoney: (amount: number) => boolean;
  addPhoto: (photo: Photo) => void;
  sellPhoto: (photoId: string) => number;
  sellAllPhotos: () => number;
  upgradeTelescope: (level: number) => boolean;
  buyAccessory: (accessoryId: string) => boolean;
  setTelescopePointing: (ra: number, dec: number) => void;
  setFov: (fov: number) => void;
  startExposure: (duration: number) => void;
  stopExposure: () => void;
  updateExposureProgress: (progress: number) => void;
  toggleConstellations: () => void;
  toggleStarNames: () => void;
  toggleGrid: () => void;
}

export const gameStore = createStore<GameState>()((set, get) => ({
  // ---- Initial state (Default to clear stargazing night at 21:30) ----
  currentTime: (() => {
    const d = new Date();
    d.setHours(21, 30, 0, 0);
    return d;
  })(),
  timeScale: 1,
  isTimePaused: false,

  currentLocation: LOCATIONS[0],
  unlockedLocations: [LOCATIONS[0].id],

  money: 0,
  telescopeLevel: 1,
  accessories: JSON.parse(JSON.stringify(ACCESSORIES)),
  photos: [],

  gameMode: GameMode.Walk,

  weather: WeatherState.Clear,
  weatherTimer: 300,

  telescopeRa: 0,
  telescopeDec: 45,
  currentFov: 60,
  isExposing: false,
  exposureProgress: 0,
  exposureDuration: 30,

  timeReversalCostPerHour: 50,

  // ---- Audio initial state ----
  masterVolume: 0.7,
  machineVolume: 0.7,
  ambientVolume: 0.8,
  weatherVolume: 0.8,
  sfxVolume: 0.8,
  isMuted: false,

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

  setTimeScale: (scale) => set({ timeScale: Math.max(0, scale) }),

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

  sellPhoto: (photoId) => {
    const s = get();
    const photo = s.photos.find((p) => p.id === photoId);
    if (!photo || photo.sold) return 0;
    set({
      money: s.money + photo.sellPrice,
      photos: s.photos.map((p) => (p.id === photoId ? { ...p, sold: true } : p)),
    });
    return photo.sellPrice;
  },

  sellAllPhotos: () => {
    const s = get();
    const unsold = s.photos.filter((p) => !p.sold);
    const total = unsold.reduce((sum, p) => sum + p.sellPrice, 0);
    if (total === 0) return 0;
    set({
      money: s.money + total,
      photos: s.photos.map((p) => ({ ...p, sold: true })),
    });
    return total;
  },

  upgradeTelescope: (level) => {
    const s = get();
    const config = TELESCOPE_CONFIGS.find((t) => t.level === level);
    if (!config || s.money < config.price || s.telescopeLevel >= level) return false;
    set({ money: s.money - config.price, telescopeLevel: level });
    return true;
  },

  buyAccessory: (accessoryId) => {
    const s = get();
    const accIdx = s.accessories.findIndex((a) => a.id === accessoryId);
    if (accIdx === -1) return false;
    const acc = s.accessories[accIdx];
    if (acc.owned || s.money < acc.price) return false;
    const updated = [...s.accessories];
    updated[accIdx] = { ...acc, owned: true };
    set({ money: s.money - acc.price, accessories: updated });
    return true;
  },

  setTelescopePointing: (ra, dec) => set({ telescopeRa: ra, telescopeDec: dec }),
  setFov: (fov) => set({ currentFov: fov }),
  startExposure: (duration) => set({ isExposing: true, exposureDuration: duration, exposureProgress: 0 }),
  stopExposure: () => set({ isExposing: false, exposureProgress: 0 }),
  updateExposureProgress: (progress) => set({ exposureProgress: Math.min(1, progress) }),
  toggleConstellations: () => set((s) => ({ showConstellations: !s.showConstellations })),
  toggleStarNames: () => set((s) => ({ showStarNames: !s.showStarNames })),
  toggleGrid: () => set((s) => ({ showGrid: !s.showGrid })),
}));
