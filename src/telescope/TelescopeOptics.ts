import { gameStore, GameState } from '../game/GameStore';
import { TELESCOPE_CONFIGS } from '../data/telescopes';
import { TelescopeConfig, Accessory } from '../types';

export class TelescopeOptics {
  private config: TelescopeConfig = TELESCOPE_CONFIGS[0];
  private accessories: Accessory[] = [];

  private minFov: number = 0.8;
  private maxFov: number = 45;
  private limitingMagnitude: number = 11.5;
  private trackingAccuracy: number = 0.5;
  private chromaticAberration: number = 0.08;
  private exposureGain: number = 1.0;
  private noiseReduction: number = 0.0;
  private lightPollutionReduction: number = 0.0;

  // Specific accessory flags
  private hasBarlow: boolean = false;
  private hasWideEyepiece: boolean = false;
  private hasHAlpha: boolean = false;
  private hasOIII: boolean = false;
  private hasLightPollutionFilter: boolean = false;
  private hasCooledCamera: boolean = false;
  private hasCmosCamera: boolean = false;
  private hasEqMount: boolean = false;
  private hasGoTo: boolean = false;
  private hasRedDotFinder: boolean = false;

  private unsubscribe: () => void;

  constructor() {
    this.unsubscribe = gameStore.subscribe((state) => {
      this.update(state);
    });
    this.update(gameStore.getState());
  }

  public update(state: GameState) {
    const level = state.telescopeLevel || 1;
    this.config = TELESCOPE_CONFIGS.find((t) => t.level === level) || TELESCOPE_CONFIGS[0];
    const accs = state.accessories || [];
    this.accessories = accs;

    const isOwned = (id: string) => accs.some((a) => a.id === id && a.owned);

    this.hasBarlow = isOwned('eyepiece_barlow');
    this.hasWideEyepiece = isOwned('eyepiece_wide');
    this.hasHAlpha = isOwned('filter_halpha');
    this.hasOIII = isOwned('filter_oiii');
    this.hasLightPollutionFilter = isOwned('filter_light_pollution');
    this.hasCooledCamera = isOwned('camera_cooled');
    this.hasCmosCamera = isOwned('camera_cmos');
    this.hasEqMount = isOwned('mount_eq');
    this.hasGoTo = isOwned('mount_goto');
    this.hasRedDotFinder = isOwned('finder_red_dot');

    // 1. FOV calculations
    let minF = this.config.minFov;
    let maxF = this.config.maxFov;

    if (this.hasBarlow) {
      minF *= 0.5; // 2x magnification cuts min FOV in half!
    }
    if (this.hasWideEyepiece) {
      maxF += 15; // 32mm wide eyepiece expands wide angle view!
    }
    this.minFov = Math.max(0.08, minF);
    this.maxFov = Math.min(85, maxF);

    // 2. Limiting magnitude
    let limMag = this.config.limitingMagnitude;
    if (this.hasCooledCamera) limMag += 1.0;
    if (this.hasCmosCamera) limMag += 1.8;
    if (this.hasLightPollutionFilter) limMag += 0.6;
    this.limitingMagnitude = limMag;

    // 3. Tracking accuracy & mount drift mitigation
    let trackAcc = this.config.trackingAccuracy;
    if (this.hasEqMount) trackAcc = Math.min(0.98, trackAcc + 0.35);
    if (this.hasGoTo) trackAcc = Math.min(0.99, trackAcc + 0.5);
    this.trackingAccuracy = trackAcc;

    // 4. Chromatic aberration
    let chrAb = this.config.chromaticAberration;
    if (this.hasHAlpha || this.hasOIII) {
      chrAb *= 0.5; // Narrowband filters eliminate broadband color fringing
    }
    this.chromaticAberration = chrAb;

    // 5. Exposure Gain & Sensor Noise Reduction
    let expGain = 1.0;
    let noiseRed = 0.0;
    if (this.hasCooledCamera) {
      expGain *= 1.5;
      noiseRed += 0.5;
    }
    if (this.hasCmosCamera) {
      expGain *= 2.0;
      noiseRed += 0.8;
    }
    this.exposureGain = expGain;
    this.noiseReduction = Math.min(0.9, noiseRed);

    // 6. Light Pollution Reduction
    this.lightPollutionReduction = this.hasLightPollutionFilter ? 0.7 : 0.0;
  }

  // Getters
  public getEffectiveFovRange(): [number, number] { return [this.minFov, this.maxFov]; }
  public getLimitingMagnitude(): number { return this.limitingMagnitude; }
  public getTrackingAccuracy(): number { return this.trackingAccuracy; }
  public getMountDriftMitigation(): number {
    if (this.hasGoTo) return 0.05; // 95% drift eliminated
    if (this.hasEqMount) return 0.25; // 75% drift eliminated
    return Math.max(0.2, 1.0 - (this.config.trackingAccuracy * 0.5));
  }
  public getChromaticAberration(): number { return this.chromaticAberration; }
  public getExposureGain(): number { return this.exposureGain; }
  public getNoiseReduction(): number { return this.noiseReduction; }
  public getLightPollutionReduction(): number { return this.lightPollutionReduction; }

  public getInstalledAccessories(): Accessory[] {
    return (this.accessories || []).filter(a => a.owned);
  }

  public hasAccessory(id: string): boolean {
    return (this.accessories || []).some(a => a.id === id && a.owned);
  }

  public dispose() {
    this.unsubscribe();
  }
}
