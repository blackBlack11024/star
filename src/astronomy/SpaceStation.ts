// ============================================================
// Stargazer Simulator — International Space Station (ISS) System
// ============================================================

import * as THREE from 'three';
import { TargetType } from '../types';

export interface SpaceStationPassData {
  id: string;
  name: string;
  type: TargetType;
  ra: number;       // hours
  dec: number;      // degrees
  magnitude: number;
  altitude: number; // degrees
  azimuth: number;  // degrees
  distanceKm: number;
  isVisible: boolean;
}

export interface ScheduledPass {
  startHour: number;
  durationMinutes: number;
  maxAltitude: number;
  startAzimuth: number;
  endAzimuth: number;
  maxMag: number;
  name: string;
}

export const REALISTIC_DAILY_PASSES: ScheduledPass[] = [
  {
    startHour: 19 + 20 / 60, // 19:20:00 (Dusk prime pass - 78 deg zenith)
    durationMinutes: 4.0,
    maxAltitude: 78,
    startAzimuth: 220, // SW to NE
    endAzimuth: 40,
    maxMag: -3.5,
    name: '傍晚黃金過境'
  },
  {
    startHour: 20 + 53 / 60, // 20:53:00 (Secondary dusk pass - 1 orbit later: 93 min)
    durationMinutes: 3.8,
    maxAltitude: 36,
    startAzimuth: 238, // WSW to NNE
    endAzimuth: 22,
    maxMag: -1.8,
    name: '初夜過境'
  },
  {
    startHour: 4 + 45 / 60,  // 04:45:00 (Dawn pre-sunrise pass - 68 deg)
    durationMinutes: 4.0,
    maxAltitude: 68,
    startAzimuth: 215, // SW to ENE
    endAzimuth: 55,
    maxMag: -3.0,
    name: '黎明過境'
  }
];

export class SpaceStation {
  private group: THREE.Group;
  private issMeshGroup: THREE.Group;
  private pointSprite: THREE.Sprite;
  private currentPassData: SpaceStationPassData | null = null;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    this.group.name = 'SpaceStationGroup';
    scene.add(this.group);

    // 1. High-power detailed ISS 3D Model
    this.issMeshGroup = this.createIss3DModel();
    this.group.add(this.issMeshGroup);

    // 2. Naked-eye brilliant point sprite (visible from afar)
    this.pointSprite = this.createPointSprite();
    this.group.add(this.pointSprite);

    this.group.visible = false;
  }

  private createPointSprite(): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    // 1. Crisp optical core: brilliant diamond white + faint cold ice-blue halo (reflecting 6000K sunlight in vacuum)
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.08, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.2, 'rgba(224, 242, 254, 0.55)');
    grad.addColorStop(0.5, 'rgba(186, 230, 253, 0.15)');
    grad.addColorStop(1, 'rgba(186, 230, 253, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fill();

    // 2. Optical diffraction cross-spikes (Airy disk diffraction from camera / telescope optics)
    const spikeGradH = ctx.createLinearGradient(14, 64, 114, 64);
    spikeGradH.addColorStop(0, 'rgba(255, 255, 255, 0)');
    spikeGradH.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');
    spikeGradH.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.strokeStyle = spikeGradH;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(14, 64);
    ctx.lineTo(114, 64);
    ctx.stroke();

    const spikeGradV = ctx.createLinearGradient(64, 14, 64, 114);
    spikeGradV.addColorStop(0, 'rgba(255, 255, 255, 0)');
    spikeGradV.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');
    spikeGradV.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.strokeStyle = spikeGradV;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(64, 14);
    ctx.lineTo(64, 114);
    ctx.stroke();

    // 3. Central bright point
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(64, 64, 3, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(8.5, 8.5, 1);
    return sprite;
  }

  private createIss3DModel(): THREE.Group {
    const group = new THREE.Group();

    // Solar panel material: deep navy blue with gold metallic frame
    const solarMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x172554,
      emissiveIntensity: 0.2,
    });

    // Module / Truss material: metallic white/grey
    const moduleMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.4,
      metalness: 0.6,
    });

    // Main integrated truss structure (long bar across)
    const trussGeom = new THREE.BoxGeometry(60, 2, 2);
    const trussMesh = new THREE.Mesh(trussGeom, moduleMat);
    group.add(trussMesh);

    // Central pressurized modules (Destiny, Unity, Zvezda)
    const moduleGeom = new THREE.CylinderGeometry(2.5, 2.5, 25, 16);
    const moduleMesh = new THREE.Mesh(moduleGeom, moduleMat);
    moduleMesh.rotation.x = Math.PI / 2;
    group.add(moduleMesh);

    // Kibo / Columbus lateral modules
    const lateralGeom = new THREE.CylinderGeometry(2, 2, 16, 12);
    const lateralMesh = new THREE.Mesh(lateralGeom, moduleMat);
    lateralMesh.rotation.z = Math.PI / 2;
    group.add(lateralMesh);

    // Solar Array Wings (4 pairs on truss)
    const panelPositions = [-24, -16, 16, 24];
    for (const xPos of panelPositions) {
      // Top wing
      const panelGeom1 = new THREE.BoxGeometry(6, 0.4, 18);
      const panelMesh1 = new THREE.Mesh(panelGeom1, solarMat);
      panelMesh1.position.set(xPos, 0, 12);
      group.add(panelMesh1);

      // Bottom wing
      const panelGeom2 = new THREE.BoxGeometry(6, 0.4, 18);
      const panelMesh2 = new THREE.Mesh(panelGeom2, solarMat);
      panelMesh2.position.set(xPos, 0, -12);
      group.add(panelMesh2);
    }

    // Radiator panels
    const radGeom = new THREE.BoxGeometry(4, 0.2, 10);
    const radMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const radMesh = new THREE.Mesh(radGeom, radMat);
    radMesh.position.set(-6, 0, -6);
    group.add(radMesh);

    return group;
  }

  public update(deltaTime: number, fov: number, _latitude: number, sunElevation: number, gameTime?: Date) {
    const time = gameTime || new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const timeOfDayHours = hours + minutes / 60 + seconds / 3600;

    let activePass: ScheduledPass | null = null;
    let passProgress = 0;

    for (let i = 0; i < REALISTIC_DAILY_PASSES.length; i++) {
      const p = REALISTIC_DAILY_PASSES[i];
      const start = p.startHour;
      const end = p.startHour + p.durationMinutes / 60;

      // Active pass check
      if (timeOfDayHours >= start && timeOfDayHours <= end) {
        activePass = p;
        passProgress = (timeOfDayHours - start) / (p.durationMinutes / 60);
        break;
      }
    }

    if (!activePass) {
      this.group.visible = false;
      this.currentPassData = null;
      return;
    }

    // Trajectory arc across the sky
    const altDeg = Math.sin(passProgress * Math.PI) * activePass.maxAltitude;
    let dAz = activePass.endAzimuth - activePass.startAzimuth;
    if (dAz < -180) dAz += 360;
    if (dAz > 180) dAz -= 360;
    const azDeg = (activePass.startAzimuth + passProgress * dAz + 360) % 360;

    // Optical visibility condition:
    // Ground must be dark (sunElevation <= -0.08 rad, sun altitude < -4.5°)
    // and station above horizon (altDeg > 3°)
    const isVisible = altDeg > 3.0 && sunElevation <= -0.08;
    this.group.visible = isVisible;

    if (!isVisible) {
      this.currentPassData = null;
      return;
    }

    const altRad = (altDeg * Math.PI) / 180;
    const azRad = (azDeg * Math.PI) / 180;

    const R = 800; // Celestial radius
    const x = R * Math.cos(altRad) * Math.sin(azRad);
    const y = R * Math.sin(altRad);
    const z = R * Math.cos(altRad) * Math.cos(azRad);

    this.group.position.set(x, y, z);

    // Orient ISS model toward orbital motion velocity
    this.issMeshGroup.rotation.y = azRad + Math.PI / 2;
    this.issMeshGroup.rotation.x = -altRad * 0.5;

    // Scale 3D model according to FOV zoom
    // When zoomed in through telescope (FOV < 2°), make it resolve clearly
    const zoomFactor = Math.max(1, 45 / Math.max(0.2, fov));
    const modelScale = 0.35 * Math.min(25, Math.pow(zoomFactor, 0.85));
    this.issMeshGroup.scale.set(modelScale, modelScale, modelScale);

    // Fade out point-source diffraction sprite as FOV zooms in through telescope (below 8°)
    // This allows the high-res 3D ISS space station model (solar wings, modules) to be seen with razor-sharp clarity!
    const spriteMaterial = this.pointSprite.material as THREE.SpriteMaterial;
    if (fov < 8.0) {
      spriteMaterial.opacity = Math.max(0, (fov - 1.5) / 6.5);
    } else {
      spriteMaterial.opacity = 1.0;
    }

    // In naked-eye or wide-angle view, keep point light sharp, compact, and sparkling
    const spriteScale = Math.min(10.0, Math.max(4.5, 8.5 * Math.min(1.0, fov / 45)));
    this.pointSprite.scale.set(spriteScale, spriteScale, 1);

    // Apparent magnitude: brightest at zenith
    const mag = activePass.maxMag + (1 - Math.sin(passProgress * Math.PI)) * 2.0;

    // Approximate RA/Dec from current Cartesian position
    const decDeg = (Math.asin(Math.max(-1, Math.min(1, y / R))) * 180) / Math.PI;
    let raHours = ((Math.atan2(z, x) * 12) / Math.PI + 24) % 24;

    this.currentPassData = {
      id: 'iss',
      name: '國際太空站 ISS',
      type: TargetType.SpecialEvent,
      ra: raHours,
      dec: decDeg,
      magnitude: mag,
      altitude: altDeg,
      azimuth: azDeg,
      distanceKm: 420 + (1 - Math.sin(passProgress * Math.PI)) * 300,
      isVisible: true,
    };
  }

  public getCurrentPassData(): SpaceStationPassData | null {
    return this.currentPassData;
  }

  public dispose() {
    this.group.clear();
  }
}
