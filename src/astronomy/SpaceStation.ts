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

export class SpaceStation {
  private group: THREE.Group;
  private issMeshGroup: THREE.Group;
  private pointSprite: THREE.Sprite;
  private currentPassData: SpaceStationPassData | null = null;

  // Orbital parameters
  private orbitProgress = 0; // 0 to 1 along current pass
  private passDurationSeconds = 240; // 4 minutes pass
  private orbitIntervalSeconds = 900; // pass every 15 minutes of game time
  private orbitTimer = 180; // initial delay before first pass

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

    const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 60);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(254, 240, 138, 0.9)');
    grad.addColorStop(0.5, 'rgba(251, 191, 36, 0.4)');
    grad.addColorStop(1, 'rgba(251, 191, 36, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(30, 30, 1);
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

  public update(deltaTime: number, fov: number, _latitude: number, _sunElevation: number) {
    this.orbitTimer += deltaTime;

    // Check if an orbital pass is in progress
    const isPassing = this.orbitTimer % this.orbitIntervalSeconds < this.passDurationSeconds;

    if (!isPassing) {
      this.group.visible = false;
      this.currentPassData = null;
      return;
    }

    this.group.visible = true;
    this.orbitProgress = (this.orbitTimer % this.orbitIntervalSeconds) / this.passDurationSeconds;

    // Trajectory arc across the sky (from South-West to North-East)
    // Altitude reaches up to 78° at midpoint
    const altDeg = Math.sin(this.orbitProgress * Math.PI) * 78;
    const azDeg = 220 + this.orbitProgress * 140; // 220° (SW) to 360° (N)

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

    // Sprite scales inversely with zoom so point size stays bright and visible
    const spriteScale = Math.max(15, 30 * (fov / 45));
    this.pointSprite.scale.set(spriteScale, spriteScale, 1);

    // Apparent magnitude: brightest at zenith (-3.5 mag)
    const mag = -1.5 - Math.sin(this.orbitProgress * Math.PI) * 2.2;

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
      distanceKm: 420 + (1 - Math.sin(this.orbitProgress * Math.PI)) * 300,
      isVisible: altDeg > 5,
    };
  }

  public getCurrentPassData(): SpaceStationPassData | null {
    return this.currentPassData;
  }

  public dispose() {
    this.group.clear();
  }
}
