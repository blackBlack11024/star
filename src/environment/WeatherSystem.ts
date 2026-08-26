import { gameStore } from '../game/GameStore';
import { WeatherState } from '../types';

/**
 * Dynamic weather state machine with random transitions.
 */
export class WeatherSystem {
  private timeSinceLastChange = 0;
  private changeInterval = 0;

  constructor() {
    this.resetTimer();
  }

  private resetTimer() {
    this.changeInterval = 300 + Math.random() * 600;
    this.timeSinceLastChange = 0;
  }

  /** Update weather based on elapsed game time. */
  public update(gameDeltaSeconds: number): void {
    this.timeSinceLastChange += gameDeltaSeconds;
    if (this.timeSinceLastChange >= this.changeInterval) {
      this.transitionWeather();
      this.resetTimer();
    }
  }

  private transitionWeather() {
    const currentState = gameStore.getState().weather;
    const rand = Math.random();
    let nextState: WeatherState = currentState;

    switch (currentState) {
      case WeatherState.Clear:
        if (rand < 0.70) nextState = WeatherState.Clear;
        else if (rand < 0.95) nextState = WeatherState.PartlyCloudy;
        else nextState = WeatherState.Cloudy;
        break;
      case WeatherState.PartlyCloudy:
        if (rand < 0.30) nextState = WeatherState.Clear;
        else if (rand < 0.70) nextState = WeatherState.PartlyCloudy;
        else if (rand < 0.95) nextState = WeatherState.Cloudy;
        else nextState = WeatherState.Rainy;
        break;
      case WeatherState.Cloudy:
        if (rand < 0.10) nextState = WeatherState.Clear;
        else if (rand < 0.35) nextState = WeatherState.PartlyCloudy;
        else if (rand < 0.80) nextState = WeatherState.Cloudy;
        else nextState = WeatherState.Rainy;
        break;
      case WeatherState.Rainy:
        if (rand < 0.05) nextState = WeatherState.Clear;
        else if (rand < 0.20) nextState = WeatherState.PartlyCloudy;
        else if (rand < 0.60) nextState = WeatherState.Cloudy;
        else nextState = WeatherState.Rainy;
        break;
    }

    if (nextState !== currentState) {
      gameStore.getState().setWeather(nextState);
    }
  }

  /** Returns visibility factor 0-1 (1 = perfect for observing). */
  public getVisibility(): number {
    switch (gameStore.getState().weather) {
      case WeatherState.Clear: return 1.0;
      case WeatherState.PartlyCloudy: return 0.6;
      case WeatherState.Cloudy: return 0.1;
      case WeatherState.Rainy: return 0.0;
      default: return 1.0;
    }
  }

  /** Returns cloud coverage factor 0-1. */
  public getCloudCoverage(): number {
    switch (gameStore.getState().weather) {
      case WeatherState.Clear: return 0.0;
      case WeatherState.PartlyCloudy: return 0.4;
      case WeatherState.Cloudy: return 0.8;
      case WeatherState.Rainy: return 1.0;
      default: return 0.0;
    }
  }
}
