import { BRIGHT_STARS } from '../data/brightStars';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { TargetType } from '../types';
import { CelestialSphere } from './CelestialSphere';
import { PlanetData } from './PlanetarySystem';

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

  /** Check if a given RA/Dec position is above the local observer horizon (world Y >= 5). */
  private isAboveHorizon(ra: number, dec: number, celestialSphere?: CelestialSphere): boolean {
    if (!celestialSphere) return true;
    const vec = celestialSphere.getRaDecToVector(ra, dec);
    vec.applyMatrix4(celestialSphere.group.matrixWorld);
    return vec.y >= 5.0; // Above ground terrain / horizon (radius 1000)
  }

  /** Find all named objects within the telescope's field of view above the horizon. */
  public findObjectsInFov(telescopeRa: number, telescopeDec: number, fovDegrees: number, celestialSphere?: CelestialSphere, planets?: PlanetData[], spaceStation?: any): IdentifiedObject[] {
    const results: IdentifiedObject[] = [];
    const radius = fovDegrees / 2;

    // 0. Space Station (Top Priority)
    if (spaceStation && spaceStation.isVisible) {
      const dist = this.angularDistance(telescopeRa, telescopeDec, spaceStation.ra, spaceStation.dec);
      if (dist <= radius) {
        results.push({
          name: spaceStation.name,
          type: TargetType.SpecialEvent,
          magnitude: spaceStation.magnitude,
          angularDistance: dist,
          ra: spaceStation.ra,
          dec: spaceStation.dec,
        });
      }
    }

    // 1. Solar System Planets (High Priority)
    if (planets) {
      for (const p of planets) {
        if (!this.isAboveHorizon(p.ra, p.dec, celestialSphere)) continue;
        const dist = this.angularDistance(telescopeRa, telescopeDec, p.ra, p.dec);
        if (dist <= radius) {
          results.push({
            name: p.name,
            type: TargetType.Planet,
            magnitude: p.magnitude,
            angularDistance: dist,
            ra: p.ra,
            dec: p.dec,
          });
        }
      }
    }

    // 2. Bright Constellation & Navigation Stars
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

    // 3. Deep Sky Messier Objects
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

  /** Identify the celestial object currently centered in the telescope's reticle crosshair. */
  public identify(telescopeRa: number, telescopeDec: number, fovDegrees: number, celestialSphere?: CelestialSphere, planets?: PlanetData[], spaceStation?: any): IdentifiedObject | null {
    if (!this.isAboveHorizon(telescopeRa, telescopeDec, celestialSphere)) {
      return null;
    }
    const objects = this.findObjectsInFov(telescopeRa, telescopeDec, fovDegrees, celestialSphere, planets, spaceStation);
    if (objects.length === 0) return null;

    // Tight targeting cone accurately matching the central reticle crosshair ring:
    // At FOV 60°: ~1.2° radius (only triggers when aimed directly at the crosshair circle)
    // At FOV 20°: ~0.6° radius
    // At FOV 5°: ~0.15° radius
    // At FOV 1°: ~0.1° radius
    const maxCenterDist = Math.max(0.1, Math.min(1.2, fovDegrees * 0.03));

    // Filter objects to only those inside the center reticle crosshair zone
    const centeredObjects = objects.filter(o => o.angularDistance <= maxCenterDist);
    if (centeredObjects.length === 0) return null;

    // Sort primarily by proximity to the optical crosshair center; if similarly close, major targets take priority
    centeredObjects.sort((a, b) => {
      const distDiff = a.angularDistance - b.angularDistance;
      // If one target is distinctly closer to the dead center crosshair, prioritize it
      if (Math.abs(distDiff) > 0.08) {
        return distDiff;
      }
      // If targets are clustered at the center crosshair:
      // 0. Space Station (ISS) top priority
      if (a.type === TargetType.SpecialEvent && b.type !== TargetType.SpecialEvent) return -1;
      if (b.type === TargetType.SpecialEvent && a.type !== TargetType.SpecialEvent) return 1;
      // 1. Planet / Moon
      if (a.type === TargetType.Planet && b.type !== TargetType.Planet) return -1;
      if (b.type === TargetType.Planet && a.type !== TargetType.Planet) return 1;
      // 2. DSO over generic background star
      if (a.type === TargetType.Messier && b.type === TargetType.StarField) return -1;
      if (b.type === TargetType.Messier && a.type === TargetType.StarField) return 1;

      return distDiff;
    });

    return centeredObjects[0];
  }
}
