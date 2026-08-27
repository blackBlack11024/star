// ============================================================
// Stargazer Simulator — Meteor & Meteor Shower Particle System
// ============================================================

import * as THREE from 'three';

interface ActiveMeteor {
  startPos: THREE.Vector3;
  endPos: THREE.Vector3;
  dir: THREE.Vector3;
  length: number;
  duration: number;
  elapsed: number;
  trailLine: THREE.Line;
  headSprite: THREE.Sprite;
  color: THREE.Color;
  brightness: number;
  isDead: boolean;
}

export class MeteorSystem {
  private scene: THREE.Scene;
  private group: THREE.Group;
  private activeMeteors: ActiveMeteor[] = [];

  // Spawning parameters
  private spawnTimer = 0;
  private spawnInterval = 18; // Seconds between sporadic meteors
  private isShowerActive = false; // Meteor shower mode (much higher rate)

  // Last meteor captured in FOV flag for PhotoManager
  private recentMeteorInFov: boolean = false;
  private recentMeteorTimer: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'MeteorSystemGroup';
    this.scene.add(this.group);
  }

  public setShowerActive(active: boolean) {
    this.isShowerActive = active;
    this.spawnInterval = active ? 3.5 : 18; // 3.5s during shower!
  }

  public update(deltaTime: number, camera: THREE.Camera, sunElevation: number) {
    // Only show meteors at night or deep twilight
    if (sunElevation > -0.1) {
      this.clearAll();
      return;
    }

    if (this.recentMeteorTimer > 0) {
      this.recentMeteorTimer -= deltaTime;
      if (this.recentMeteorTimer <= 0) {
        this.recentMeteorInFov = false;
      }
    }

    // Spawn timer
    this.spawnTimer += deltaTime;
    if (this.spawnTimer >= this.spawnInterval) {
      this.spawnTimer = 0;
      this.spawnMeteor();
      // Randomize next interval slightly
      const base = this.isShowerActive ? 3.0 : 16.0;
      this.spawnInterval = base + (Math.random() - 0.5) * (base * 0.6);
    }

    // Update existing active meteors
    const frustum = new THREE.Frustum();
    const projScreenMatrix = new THREE.Matrix4();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);

    for (let i = this.activeMeteors.length - 1; i >= 0; i--) {
      const m = this.activeMeteors[i];
      m.elapsed += deltaTime;

      const progress = m.elapsed / m.duration;

      if (progress >= 1.0) {
        // Meteor has finished streak
        this.disposeMeteor(m);
        this.activeMeteors.splice(i, 1);
        continue;
      }

      // Check if meteor is inside camera view frustum
      if (frustum.containsPoint(m.headSprite.position)) {
        this.recentMeteorInFov = true;
        this.recentMeteorTimer = 2.0; // keep active for 2s window
      }

      // Head position travels from start to end
      const headPos = m.startPos.clone().lerp(m.endPos, progress);
      m.headSprite.position.copy(headPos);

      // Tail trails behind head
      const tailFraction = Math.max(0, progress - 0.35);
      const tailPos = m.startPos.clone().lerp(m.endPos, tailFraction);

      const posAttr = m.trailLine.geometry.attributes.position as THREE.BufferAttribute;
      posAttr.setXYZ(0, tailPos.x, tailPos.y, tailPos.z);
      posAttr.setXYZ(1, headPos.x, headPos.y, headPos.z);
      posAttr.needsUpdate = true;

      // Brightness envelope (parabola peaking in the center)
      const intensity = Math.sin(progress * Math.PI) * m.brightness;
      (m.trailLine.material as THREE.LineBasicMaterial).opacity = intensity * 0.9;
      (m.headSprite.material as THREE.SpriteMaterial).opacity = intensity;
    }
  }

  private spawnMeteor() {
    // Generate meteor across upper celestial sphere (R = 750)
    const R = 750;

    // Random azimuth (0 to 2PI)
    const az = Math.random() * Math.PI * 2;
    // Altitude: 35° to 85° (high in the sky)
    const alt = ((35 + Math.random() * 50) * Math.PI) / 180;

    const startX = R * Math.cos(alt) * Math.sin(az);
    const startY = R * Math.sin(alt);
    const startZ = R * Math.cos(alt) * Math.cos(az);
    const startPos = new THREE.Vector3(startX, startY, startZ);

    // Random streak direction with downward velocity component
    const streakLength = 80 + Math.random() * 120;
    const streakDir = new THREE.Vector3(
      (Math.random() - 0.5) * 1.5,
      -0.4 - Math.random() * 0.5,
      (Math.random() - 0.5) * 1.5
    ).normalize();

    const endPos = startPos.clone().add(streakDir.clone().multiplyScalar(streakLength));

    // Element spectral color (magnesium emerald green, sodium yellow, or incandescent white)
    const colorRoll = Math.random();
    let col = new THREE.Color(0xffffff);
    if (colorRoll < 0.45) {
      col = new THREE.Color(0x34d399); // Magnesium emerald green
    } else if (colorRoll < 0.75) {
      col = new THREE.Color(0xfef08a); // Sodium bright amber
    } else {
      col = new THREE.Color(0xe0f2fe); // High temp ice-blue/white
    }

    // Materials
    const lineMat = new THREE.LineBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0,
      linewidth: 2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const geom = new THREE.BufferGeometry().setFromPoints([startPos, startPos]);
    const trailLine = new THREE.Line(geom, lineMat);
    trailLine.frustumCulled = false;
    this.group.add(trailLine);

    // Head sprite
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(16, 16, 1, 16, 16, 15);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.4, `#${col.getHexString()}`);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 15, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const headSprite = new THREE.Sprite(spriteMat);
    headSprite.scale.set(10, 10, 1);
    headSprite.position.copy(startPos);
    this.group.add(headSprite);

    this.activeMeteors.push({
      startPos,
      endPos,
      dir: streakDir,
      length: streakLength,
      duration: 0.4 + Math.random() * 0.45, // 0.4s to 0.85s fast streak
      elapsed: 0,
      trailLine,
      headSprite,
      color: col,
      brightness: 0.8 + Math.random() * 0.4,
      isDead: false,
    });
  }

  public wasMeteorCaptured(): boolean {
    return this.recentMeteorInFov;
  }

  private disposeMeteor(m: ActiveMeteor) {
    this.group.remove(m.trailLine);
    this.group.remove(m.headSprite);
    m.trailLine.geometry.dispose();
    (m.trailLine.material as THREE.Material).dispose();
    (m.headSprite.material as THREE.Material).dispose();
  }

  private clearAll() {
    for (const m of this.activeMeteors) {
      this.disposeMeteor(m);
    }
    this.activeMeteors = [];
  }

  public dispose() {
    this.clearAll();
    this.scene.remove(this.group);
  }
}
