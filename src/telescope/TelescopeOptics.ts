import { gameStore } from '../game/GameStore';

export class TelescopeOptics {
  private minFov = 0.5;
  private maxFov = 45;
  private limitingMagnitude = 6;
  private trackingAccuracy = 1.0;
  private chromaticAberration = 0.05;
  private exposureGain = 1.0;

  private unsubscribe: () => void;

  constructor() {
    this.unsubscribe = gameStore.subscribe((state) => {
      this.update(state);
    });
    this.update(gameStore.getState());
  }

  private update(state: any) {
    // Read from state.equipment or similar
    const level = state.telescopeLevel || 1;
    
    // Mock calculations based on level
    this.minFov = Math.max(0.1, 5.0 / level);
    this.maxFov = 45; 
    
    this.limitingMagnitude = 5 + level * 2;
    this.trackingAccuracy = 1.0 / level;
    this.chromaticAberration = 0.05 / level;
    this.exposureGain = 1.0 + (level * 0.5);
  }

  public getEffectiveFovRange(): [number, number] {
    return [this.minFov, this.maxFov];
  }

  public getLimitingMagnitude(): number {
    return this.limitingMagnitude;
  }

  public getTrackingAccuracy(): number {
    return this.trackingAccuracy;
  }

  public getChromaticAberration(): number {
    return this.chromaticAberration;
  }

  public getExposureGain(): number {
    return this.exposureGain;
  }

  public dispose() {
    this.unsubscribe();
  }
}
