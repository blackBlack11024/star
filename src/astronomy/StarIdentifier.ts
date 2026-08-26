import { BRIGHT_STARS } from '../data/brightStars';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { TargetType } from '../types';
import { CelestialSphere } from './CelestialSphere';

export interface IdentifiedObject {
  name: string;
  type: TargetType;
  magnitude: number;
  angularDistance: number;
  ra: number;
  dec: number;
}

/**
 * Identifies celestial objects near the telescope's pointing direction.
 */
export class StarIdentifier {
  constructor() {}

  private angularDistance(ra1: number, dec1: number, ra2: number, dec2: number): number {
    const radRa1 = ra1 * Math.PI / 12;
    const radDec1 = dec1 * Math.PI / 180;
    const radRa2 = ra2 * Math.PI / 12;
    const radDec2 = dec2 * Math.PI / 180;

    const deltaRa = radRa1 - radRa2;
    const cosAngle = Math.sin(radDec1) * Math.sin(radDec2) +
                     Math.cos(radDec1) * Math.cos(radDec2) * Math.cos(deltaRa);
    return Math.acos(Math.max(-1, Math.min(1, cosAngle))) * 180 / Math.PI;
  }

  /** Check if a given RA/Dec position is above the local observer horizon (world Y >= 0). */
  private isAboveHorizon(ra: number, dec: number, celestialSphere?: CelestialSphere): boolean {
    if (!celestialSphere) return true;
    const vec = celestialSphere.getRaDecToVector(ra, dec);
    vec.applyMatrix4(celestialSphere.group.matrixWorld);
    return vec.y >= 0.0;
  }

  /** Find all named objects within the telescope's field of view above the horizon. */
  public findObjectsInFov(telescopeRa: number, telescopeDec: number, fovDegrees: number, celestialSphere?: CelestialSphere): IdentifiedObject[] {
    const results: IdentifiedObject[] = [];
    const radius = fovDegrees / 2;

    for (const star of BRIGHT_STARS) {
      if (!star.name) continue;
      if (!this.isAboveHorizon(star.ra, star.dec, celestialSphere)) continue;

      const dist = this.angularDistance(telescopeRa, telescopeDec, star.ra, star.dec);
      if (dist <= radius) {
        results.push({
          name: star.name,
          type: TargetType.StarField,
          magnitude: star.mag,
          angularDistance: dist,
          ra: star.ra,
          dec: star.dec,
        });
      }
    }

    for (const dso of DEEP_SKY_OBJECTS) {
      if (!this.isAboveHorizon(dso.ra, dso.dec, celestialSphere)) continue;

      const dist = this.angularDistance(telescopeRa, telescopeDec, dso.ra, dso.dec);
      if (dist <= radius) {
        results.push({
          name: `${dso.name} ${dso.commonName}`,
          type: TargetType.Messier,
          magnitude: dso.magnitude,
          angularDistance: dist,
          ra: dso.ra,
          dec: dso.dec,
        });
      }
    }

    return results.sort((a, b) => a.magnitude - b.magnitude);
  }

  /** Identify the closest/brightest object near the telescope center. */
  public identify(telescopeRa: number, telescopeDec: number, fovDegrees: number, celestialSphere?: CelestialSphere): IdentifiedObject | null {
    // If telescope pointing itself is below horizon, return null
    if (!this.isAboveHorizon(telescopeRa, telescopeDec, celestialSphere)) {
      return null;
    }
    const objects = this.findObjectsInFov(telescopeRa, telescopeDec, fovDegrees, celestialSphere);
    if (objects.length === 0) return null;
    objects.sort((a, b) => a.angularDistance - b.angularDistance);
    return objects[0];
  }
}
