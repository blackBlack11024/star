import { gameStore } from '../game/GameStore';
import SunCalc from 'suncalc';

export type SunPhase = 'day' | 'golden_hour' | 'civil_twilight' | 'nautical_twilight' | 'astronomical_twilight' | 'night';

/**
 * Manages game time progression with adjustable speed and time reversal.
 */
export class TimeManager {
  public timeScales = [0, 1, 10, 60, 300, 1000];
  private lastSunElevation = 0;

  constructor() {}

  /**
   * Advances game time by realDelta * timeScale.
   * Uses the store's advanceTime action.
   */
  public update(realDeltaSeconds: number): void {
    const state = gameStore.getState();
    if (!state.isTimePaused && state.timeScale !== 0) {
      state.advanceTime(realDeltaSeconds * 1000);
    }
  }

  /** Store the latest sun elevation for phase calculation. */
  public setSunElevation(elevation: number): void {
    this.lastSunElevation = elevation;
  }

  /**
   * Reverses time by specified hours (delegates to store).
   * @returns true if successful, false if insufficient funds.
   */
  public reverseTime(hours: number): boolean {
    return gameStore.getState().reverseTime(hours);
  }

  /** Returns formatted date/time string. */
  public getFormattedTime(): string {
    const date = gameStore.getState().currentTime;
    return date.toLocaleString('zh-TW', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false,
    });
  }

  /** Returns sun phase based on stored sun elevation (radians). */
  public getSunPhase(sunElevationRadians?: number): SunPhase {
    const elev = sunElevationRadians ?? this.lastSunElevation;
    const degrees = elev * (180 / Math.PI);
    if (degrees > 6) return 'day';
    if (degrees > 0) return 'golden_hour';
    if (degrees > -6) return 'civil_twilight';
    if (degrees > -12) return 'nautical_twilight';
    if (degrees > -18) return 'astronomical_twilight';
    return 'night';
  }
}
