// ============================================================
// Stargazer Simulator — Shared Type Definitions
// ============================================================
import * as THREE from 'three';

// ======================== Enums ========================

export enum GameMode {
  Walk = 'walk',
  Telescope = 'telescope',
  Studio = 'studio',
  Menu = 'menu',
}

export enum WeatherState {
  Clear = 'clear',
  PartlyCloudy = 'partly_cloudy',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
}

export enum PhotoQuality {
  SSS = 'SSS',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export type FrameType = 'light' | 'dark' | 'flat' | 'bias';

export enum TargetType {
  StarField = 'star_field',
  Planet = 'planet',
  Messier = 'messier',
  SpecialEvent = 'special_event',
}

// ======================== Data Interfaces ========================

export interface ObservationLocation {
  id: string;
  name: string;
  nameEn: string;
  latitude: number;
  longitude: number;
  altitude: number;
  lightPollution: number; // 0 (none) to 1 (severe)
  description: string;
}

export interface TelescopeConfig {
  level: number;
  name: string;
  apertureMm: number;
  limitingMagnitude: number;
  minFov: number;
  maxFov: number;
  chromaticAberration: number;
  trackingAccuracy: number;
  price: number;
}

export interface Accessory {
  id: string;
  name: string;
  type: 'eyepiece' | 'filter' | 'camera' | 'mount';
  description: string;
  price: number;
  effects: Record<string, number>;
  owned: boolean;
}

export interface Photo {
  id: string;
  imageDataUrl: string;
  timestamp: Date;
  locationId: string;
  targetName: string;
  targetType: TargetType;
  exposureSeconds: number;
  telescopeLevel: number;
  weatherCondition: WeatherState;
  quality: PhotoQuality;
  score: number;
  sellPrice: number;
  sold: boolean;
  frameType?: FrameType;
  isStacked?: boolean;
  stackedCount?: number;
  calibratedWith?: { dark: boolean; flat: boolean; bias: boolean };
  hasMotionBlur?: boolean;
  driftAmount?: number;
}

export interface DeepSkyObjectData {
  id: string;
  name: string;
  commonName: string;
  ra: number;
  dec: number;
  magnitude: number;
  type: 'galaxy' | 'nebula' | 'cluster' | 'planetary_nebula';
  sizeArcmin: number;
  difficulty: number;
  basePrice: number;
  starHoppingGuide?: string; // Step-by-step observation and star-hopping guide
}

export interface BrightStar {
  name: string;
  ra: number;    // hours
  dec: number;   // degrees
  mag: number;   // apparent visual magnitude
  bv: number;    // B-V color index
  hip?: number;  // Hipparcos catalog ID
}

export interface ConstellationData {
  name: string;
  nameZh: string;
  lines: [number, number, number, number][]; // [ra1, dec1, ra2, dec2] in hours/degrees
}

// ======================== System Interfaces ========================

export interface ISystem {
  init?(): Promise<void> | void;
  update(deltaTime: number): void;
  dispose?(): void;
}

export interface StarDataArrays {
  positions: Float32Array;
  colors: Float32Array;
  magnitudes: Float32Array;
  twinkle: Float32Array;
  count: number;
}

export interface IdentifiedStar {
  name: string;
  ra: number;
  dec: number;
  magnitude: number;
  type: TargetType;
  screenPosition?: THREE.Vector2;
  distance?: number; // angular distance from telescope center in degrees
}
