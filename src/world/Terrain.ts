import * as THREE from 'three';
import { ObservationLocation } from '../types';

export class Terrain {
  private group: THREE.Group;
  private scene: THREE.Scene;
  private groundMesh!: THREE.Mesh;
  private horizonGroup: THREE.Group;
  private currentLocationId: string = 'hehuanshan';

  constructor(scene: THREE.Scene, initialLocation?: ObservationLocation) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.horizonGroup = new THREE.Group();
    this.group.add(this.horizonGroup);

    this.scene.add(this.group);

    const locId = initialLocation?.id || 'hehuanshan';
    this.buildTerrain(locId);
  }

  public updateLocation(location: ObservationLocation) {
    if (!location || location.id === this.currentLocationId) return;
    this.currentLocationId = location.id;
    this.buildTerrain(location.id);
  }

  private buildTerrain(locId: string) {
    // 1. Rebuild ground mesh with location-specific texture and palette
    if (this.groundMesh) {
      this.group.remove(this.groundMesh);
      this.groundMesh.geometry.dispose();
      (this.groundMesh.material as THREE.Material).dispose();
    }

    const radius = 250;
    const geometry = new THREE.CircleGeometry(radius, 64);
    geometry.rotateX(-Math.PI / 2);

    const groundTex = this.createGroundTexture(locId);
    const material = new THREE.MeshStandardMaterial({
      map: groundTex,
      color: this.getGroundBaseColor(locId),
      roughness: 0.96,
      metalness: 0.04,
      side: THREE.DoubleSide,
    });

    this.groundMesh = new THREE.Mesh(geometry, material);
    this.groundMesh.position.y = -0.2;
    this.groundMesh.receiveShadow = true;
    this.group.add(this.groundMesh);

    // 2. Clear and rebuild horizon landmarks & mountain silhouettes
    while (this.horizonGroup.children.length > 0) {
      const child = this.horizonGroup.children[0] as any;
      this.horizonGroup.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach((m: any) => m.dispose());
        else child.material.dispose();
      }
    }

    switch (locId) {
      case 'mauna_kea':
        this.buildMaunaKeaHorizon();
        break;
      case 'atacama':
        this.buildAtacamaHorizon();
        break;
      case 'uluru':
        this.buildUluruHorizon();
        break;
      case 'la_palma':
        this.buildLaPalmaHorizon();
        break;
      case 'namib':
        this.buildNamibHorizon();
        break;
      case 'hehuanshan':
      default:
        this.buildHehuanshanHorizon();
        break;
    }
  }

  /**
   * Procedural canvas ground texture reflecting the geological soil of each site.
   */
  private createGroundTexture(locId: string): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    let baseFill = '#0f1a0e';
    let dotColors = ['rgba(35, 45, 30, 0.4)', 'rgba(15, 20, 15, 0.5)'];

    if (locId === 'mauna_kea') {
      baseFill = '#171414'; // Volcanic basalt and dark ash
      dotColors = ['rgba(45, 35, 35, 0.5)', 'rgba(25, 20, 20, 0.6)'];
    } else if (locId === 'atacama') {
      baseFill = '#221610'; // Dry clay, salt gravel
      dotColors = ['rgba(65, 45, 35, 0.4)', 'rgba(30, 20, 15, 0.5)', 'rgba(120, 110, 100, 0.2)'];
    } else if (locId === 'uluru') {
      baseFill = '#2d120a'; // Central Australian deep red ochre sand
      dotColors = ['rgba(75, 30, 18, 0.45)', 'rgba(40, 18, 10, 0.55)', 'rgba(140, 110, 50, 0.25)'];
    } else if (locId === 'la_palma') {
      baseFill = '#14181c'; // Volcanic caldera stone
      dotColors = ['rgba(35, 40, 45, 0.45)', 'rgba(20, 24, 28, 0.55)'];
    } else if (locId === 'namib') {
      baseFill = '#2c1508'; // Sossusvlei orange-red desert dune sand
      dotColors = ['rgba(70, 35, 15, 0.45)', 'rgba(38, 18, 8, 0.5)'];
    }

    ctx.fillStyle = baseFill;
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 4500; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = Math.random() * 2 + 0.8;
      const c = dotColors[Math.floor(Math.random() * dotColors.length)];
      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 16);
    return texture;
  }

  private getGroundBaseColor(locId: string): number {
    switch (locId) {
      case 'mauna_kea': return 0x1f1b1a;
      case 'atacama': return 0x2e1e16;
      case 'uluru': return 0x3d170e;
      case 'la_palma': return 0x1a2026;
      case 'namib': return 0x381b0c;
      case 'hehuanshan':
      default: return 0x223020;
    }
  }

  /**
   * 1. Hehuanshan (合歡山暗空公園):
   * Rugged, dramatic alpine mountain ridge silhouettes (Qilai Peaks, Hehuan Main Peak ridgeline).
   */
  private buildHehuanshanHorizon() {
    const mountainMat = new THREE.MeshStandardMaterial({
      color: 0x050912,
      roughness: 0.98,
      flatShading: true,
    });

    const numPeaks = 32;
    for (let i = 0; i < numPeaks; i++) {
      const angle = (i / numPeaks) * Math.PI * 2;
      const dist = 320 + (i % 4) * 35;
      // High rugged peaks with acute angles
      const isMainRidge = (i >= 5 && i <= 10) || (i >= 20 && i <= 26);
      const height = isMainRidge ? (55 + Math.sin(i * 4) * 25) : (35 + Math.sin(i * 2.5) * 15);
      const baseWidth = 50 + (i % 3) * 25;

      const mtnGeo = new THREE.ConeGeometry(baseWidth, height, 4); // sharp 4-sided pyramid ridges
      const mtn = new THREE.Mesh(mtnGeo, mountainMat);
      mtn.position.set(
        Math.cos(angle) * dist,
        height * 0.45,
        Math.sin(angle) * dist
      );
      mtn.rotation.y = angle + 0.3;
      this.horizonGroup.add(mtn);
    }
  }

  /**
   * 2. Mauna Kea (夏威夷茂納凱亞天文台):
   * Massive gentle shield volcano ridge with iconic white astronomical observatory domes.
   */
  private buildMaunaKeaHorizon() {
    const volcanoMat = new THREE.MeshStandardMaterial({
      color: 0x070912,
      roughness: 0.98,
      flatShading: true,
    });
    const domeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.4,
      roughness: 0.3,
    });
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });

    // Broad gentle shield volcano slopes
    const numSlopes = 18;
    for (let i = 0; i < numSlopes; i++) {
      const angle = (i / numSlopes) * Math.PI * 2;
      const dist = 360;
      const height = 30 + Math.sin(i * 1.5) * 12;
      const baseWidth = 140;

      const slopeGeo = new THREE.ConeGeometry(baseWidth, height, 8);
      const slope = new THREE.Mesh(slopeGeo, volcanoMat);
      slope.position.set(Math.cos(angle) * dist, height * 0.4, Math.sin(angle) * dist);
      this.horizonGroup.add(slope);
    }

    // Iconic Observatory Domes along the Northwest / West summit ridge
    const domePositions = [
      { angle: 0.35, dist: 310, scale: 1.2 },  // Keck I
      { angle: 0.42, dist: 315, scale: 1.2 },  // Keck II
      { angle: 0.65, dist: 330, scale: 1.4 },  // Subaru
      { angle: 0.90, dist: 340, scale: 1.0 },  // Gemini North
    ];

    domePositions.forEach((dp) => {
      const x = Math.cos(dp.angle) * dp.dist;
      const z = Math.sin(dp.angle) * dp.dist;
      const groundY = 28;

      const domeGroup = new THREE.Group();
      domeGroup.position.set(x, groundY, z);

      // Cylindrical base
      const baseGeo = new THREE.CylinderGeometry(5 * dp.scale, 5 * dp.scale, 4 * dp.scale, 16);
      const baseMesh = new THREE.Mesh(baseGeo, domeMat);
      baseMesh.position.y = 2 * dp.scale;
      domeGroup.add(baseMesh);

      // Hemispherical dome
      const sphereGeo = new THREE.SphereGeometry(5 * dp.scale, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
      const sphereMesh = new THREE.Mesh(sphereGeo, domeMat);
      sphereMesh.position.y = 4 * dp.scale;
      domeGroup.add(sphereMesh);

      // Red aviation warning light on top
      const beaconGeo = new THREE.SphereGeometry(0.5, 8, 8);
      const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
      beaconMesh.position.y = (4 + 5) * dp.scale + 0.5;
      domeGroup.add(beaconMesh);

      this.horizonGroup.add(domeGroup);
    });
  }

  /**
   * 3. Atacama Desert (智利阿塔卡馬沙漠):
   * Jagged arid desert mesas and the 4 ESO VLT monolithic unit telescope enclosures on Cerro Paranal.
   */
  private buildAtacamaHorizon() {
    const mesaMat = new THREE.MeshStandardMaterial({
      color: 0x09070e,
      roughness: 0.98,
      flatShading: true,
    });
    const vltMat = new THREE.MeshStandardMaterial({
      color: 0x182030,
      roughness: 0.4,
      metalness: 0.5,
    });

    // Flat-topped desert mesas and sharp arid peaks
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const dist = 340 + (i % 3) * 30;
      const isMesa = i % 2 === 0;
      const height = 24 + (i % 5) * 8;
      const width = isMesa ? 80 : 50;

      const geo = isMesa
        ? new THREE.CylinderGeometry(width * 0.4, width * 0.55, height, 6)
        : new THREE.ConeGeometry(width * 0.5, height, 5);

      const mtn = new THREE.Mesh(geo, mesaMat);
      mtn.position.set(Math.cos(angle) * dist, height * 0.48, Math.sin(angle) * dist);
      this.horizonGroup.add(mtn);
    }

    // Cerro Paranal summit with the 4 VLT 8.2m rectangular enclosure towers in a line
    const vltBaseAngle = 1.15;
    const vltDist = 320;
    const vltSpacing = 9;

    for (let i = 0; i < 4; i++) {
      const offset = (i - 1.5) * vltSpacing;
      const tangentX = -Math.sin(vltBaseAngle);
      const tangentZ = Math.cos(vltBaseAngle);

      const x = Math.cos(vltBaseAngle) * vltDist + tangentX * offset;
      const z = Math.sin(vltBaseAngle) * vltDist + tangentZ * offset;
      const groundY = 24;

      // Rectangular monolithic enclosure (VLT Unit Telescope)
      const towerGeo = new THREE.BoxGeometry(6, 9, 6);
      const tower = new THREE.Mesh(towerGeo, vltMat);
      tower.position.set(x, groundY + 4.5, z);
      tower.rotation.y = vltBaseAngle;

      this.horizonGroup.add(tower);
    }
  }

  /**
   * 4. Uluru / Ayers Rock (澳洲烏魯魯):
   * Vast flat desert plain with the massive, steep-flanked flat-top sandstone inselberg monolith.
   */
  private buildUluruHorizon() {
    const plainMat = new THREE.MeshStandardMaterial({
      color: 0x0a0505,
      roughness: 0.98,
      flatShading: true,
    });
    const uluruMat = new THREE.MeshStandardMaterial({
      color: 0x160805, // Characteristic dark red sandstone night silhouette
      roughness: 0.95,
      flatShading: true,
    });

    // Low, rolling desert boundary ridges
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      // Leave southwest open for Uluru
      if (angle > 3.4 && angle < 4.2) continue;
      const dist = 380;
      const height = 12 + Math.sin(i * 3) * 6;
      const width = 120;
      const ridge = new THREE.Mesh(new THREE.ConeGeometry(width, height, 6), plainMat);
      ridge.position.set(Math.cos(angle) * dist, height * 0.4, Math.sin(angle) * dist);
      this.horizonGroup.add(ridge);
    }

    // THE COLOSSAL ULURU MONOLITH (Southwest horizon, ~ 220° = 3.84 rad)
    const uluruGroup = new THREE.Group();
    const uluruAngle = 3.84;
    const uluruDist = 310;
    uluruGroup.position.set(Math.cos(uluruAngle) * uluruDist, 0, Math.sin(uluruAngle) * uluruDist);
    uluruGroup.rotation.y = uluruAngle + Math.PI / 2;

    // Massive flat-topped elongated body
    const mainBodyGeo = new THREE.CylinderGeometry(35, 52, 42, 12, 1);
    mainBodyGeo.scale(2.2, 1.0, 1.0); // Elongate along ridge
    const mainBody = new THREE.Mesh(mainBodyGeo, uluruMat);
    mainBody.position.y = 21;
    uluruGroup.add(mainBody);

    // Rounded shoulder ends
    const leftShoulder = new THREE.Mesh(new THREE.CylinderGeometry(20, 38, 36, 8), uluruMat);
    leftShoulder.position.set(-68, 18, 0);
    uluruGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(new THREE.CylinderGeometry(24, 42, 38, 8), uluruMat);
    rightShoulder.position.set(65, 19, 0);
    uluruGroup.add(rightShoulder);

    this.horizonGroup.add(uluruGroup);
  }

  /**
   * 5. La Palma (加那利群島拉帕爾馬天文台):
   * Caldera crater rim with Gran Telescopio Canarias (GTC) and MAGIC Cherenkov reflector dishes.
   */
  private buildLaPalmaHorizon() {
    const calderaMat = new THREE.MeshStandardMaterial({
      color: 0x060810,
      roughness: 0.98,
      flatShading: true,
    });
    const gtcMat = new THREE.MeshStandardMaterial({
      color: 0x1a2232,
      metalness: 0.4,
      roughness: 0.35,
    });

    // Caldera de Taburiente rim peaks
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const dist = 330 + (i % 3) * 25;
      const height = 28 + Math.sin(i * 3) * 16;
      const width = 60 + (i % 2) * 20;

      const peak = new THREE.Mesh(new THREE.ConeGeometry(width, height, 5), calderaMat);
      peak.position.set(Math.cos(angle) * dist, height * 0.45, Math.sin(angle) * dist);
      this.horizonGroup.add(peak);
    }

    // Gran Telescopio Canarias (GTC) Giant 10.4m Dome
    const gtcAngle = 0.8;
    const gtcDist = 300;
    const gtcGroup = new THREE.Group();
    gtcGroup.position.set(Math.cos(gtcAngle) * gtcDist, 28, Math.sin(gtcAngle) * gtcDist);

    const gtcBase = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 6, 16), gtcMat);
    gtcBase.position.y = 3;
    gtcGroup.add(gtcBase);

    const gtcDome = new THREE.Mesh(new THREE.SphereGeometry(7, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), gtcMat);
    gtcDome.position.y = 6;
    gtcGroup.add(gtcDome);

    this.horizonGroup.add(gtcGroup);

    // MAGIC Cherenkov telescope parabolic dish silhouette
    const magicAngle = 0.95;
    const magicDist = 305;
    const magicDish = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 0.8, 12), gtcMat);
    magicDish.position.set(Math.cos(magicAngle) * magicDist, 32, Math.sin(magicAngle) * magicDist);
    magicDish.rotation.x = Math.PI / 3;
    this.horizonGroup.add(magicDish);
  }

  /**
   * 6. Namib Desert (納米比沙漠):
   * Sinuous, curving star dune ridge silhouettes against the southern night sky.
   */
  private buildNamibHorizon() {
    const duneMat = new THREE.MeshStandardMaterial({
      color: 0x120804, // Warm reddish desert shadow silhouette
      roughness: 0.98,
      flatShading: true,
    });

    const numDunes = 22;
    for (let i = 0; i < numDunes; i++) {
      const angle = (i / numDunes) * Math.PI * 2;
      const dist = 330 + (i % 4) * 25;
      // Star dunes have undulating, sinuous knife-edge crests
      const height = 22 + Math.sin(i * 2.8) * 14;
      const width = 85 + (i % 3) * 20;

      const duneGeo = new THREE.ConeGeometry(width, height, 4);
      duneGeo.scale(1.8, 1.0, 0.6); // Asymmetrical dune slope (slipface vs windward)

      const dune = new THREE.Mesh(duneGeo, duneMat);
      dune.position.set(Math.cos(angle) * dist, height * 0.46, Math.sin(angle) * dist);
      dune.rotation.y = angle + 0.4;
      this.horizonGroup.add(dune);
    }
  }

  public setVisible(visible: boolean) {
    this.group.visible = visible;
  }

  public dispose() {
    this.group.parent?.remove(this.group);
  }
}
