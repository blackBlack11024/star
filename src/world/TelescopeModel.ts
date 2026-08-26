import * as THREE from 'three';

export class TelescopeModel {
  private group: THREE.Group;
  private tubeGroup: THREE.Group;
  private eyepieceMesh: THREE.Mesh;
  private eyepieceGlow: THREE.PointLight;
  private beaconLight: THREE.PointLight;
  private interactionDistance = 4.0;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    // Placed directly in front of the player's initial view!
    this.group.position.set(0, 0, -3.5);

    // ==========================================
    // 1. Observation Platform Pad (Circular Stone Base)
    // ==========================================
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x1c2333,
      roughness: 0.85,
      metalness: 0.15
    });
    const padGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.08, 32);
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.y = 0.04;
    pad.receiveShadow = true;
    this.group.add(pad);

    // Outer luminous guide ring on the pad (soft cyan glow)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
    const ringGeo = new THREE.RingGeometry(1.48, 1.52, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 0.082;
    this.group.add(ring);

    // Platform guide beacon lights
    const padLight1 = new THREE.PointLight(0x38bdf8, 0.8, 4);
    padLight1.position.set(1.3, 0.2, 0);
    this.group.add(padLight1);

    const padLight2 = new THREE.PointLight(0x38bdf8, 0.8, 4);
    padLight2.position.set(-1.3, 0.2, 0);
    this.group.add(padLight2);

    // ==========================================
    // 2. Telescope Tripod & Equatorial Mount
    // ==========================================
    const legMat = new THREE.MeshStandardMaterial({ color: 0x22262c, metalness: 0.85, roughness: 0.25 });
    const mountMat = new THREE.MeshStandardMaterial({ color: 0x181c22, metalness: 0.9, roughness: 0.2 });
    const tubeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.2, roughness: 0.15 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.9, roughness: 0.25 }); // Gold brass

    // Tripod legs
    for (let i = 0; i < 3; i++) {
      const legGeo = new THREE.CylinderGeometry(0.025, 0.02, 1.4);
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.y = 0.7;
      const angle = (i / 3) * Math.PI * 2;
      leg.position.x = Math.cos(angle) * 0.38;
      leg.position.z = Math.sin(angle) * 0.38;
      leg.rotation.x = 0.28;
      leg.rotation.y = -angle;
      this.group.add(leg);
    }

    // Accessory spreader tray
    const trayGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.02, 3);
    const tray = new THREE.Mesh(trayGeo, mountMat);
    tray.position.y = 0.65;
    this.group.add(tray);
    
    // Mount head
    const mountGeo = new THREE.CylinderGeometry(0.1, 0.13, 0.28, 16);
    const mount = new THREE.Mesh(mountGeo, mountMat);
    mount.position.y = 1.4;
    this.group.add(mount);
    
    // Counterweight bar & weight
    const cwBar = new THREE.CylinderGeometry(0.012, 0.012, 0.45);
    const barMesh = new THREE.Mesh(cwBar, legMat);
    barMesh.position.set(0, 1.2, -0.22);
    barMesh.rotation.x = Math.PI / 4;
    this.group.add(barMesh);
    
    const cwWeight = new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16);
    const weightMesh = new THREE.Mesh(cwWeight, mountMat);
    weightMesh.position.set(0, 1.05, -0.37);
    weightMesh.rotation.x = Math.PI / 4;
    this.group.add(weightMesh);
    
    // ==========================================
    // 3. Optical Tube Assembly (OTA)
    // ==========================================
    this.tubeGroup = new THREE.Group();
    this.tubeGroup.position.set(0, 1.55, 0);
    
    // Main optical tube
    const tubeGeo = new THREE.CylinderGeometry(0.13, 0.13, 1.05, 24);
    tubeGeo.rotateX(Math.PI / 2);
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    this.tubeGroup.add(tube);

    // Front brass aperture ring
    const ringAperture = new THREE.Mesh(new THREE.TorusGeometry(0.132, 0.012, 8, 24), accentMat);
    ringAperture.position.z = 0.525;
    this.tubeGroup.add(ringAperture);

    // Front lens glass
    const lensGeo = new THREE.CircleGeometry(0.125, 24);
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0x0055ff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.6,
      transparent: true,
      opacity: 0.9
    });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.z = 0.52;
    this.tubeGroup.add(lens);
    
    // Finder scope
    const finder = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.28, 12), mountMat);
    finder.geometry.rotateX(Math.PI / 2);
    finder.position.set(0.11, 0.16, 0);
    this.tubeGroup.add(finder);
    
    // Eyepiece
    const epGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.12, 12);
    this.eyepieceMesh = new THREE.Mesh(epGeo, accentMat);
    this.eyepieceMesh.position.set(0, 0.13, -0.45);
    this.tubeGroup.add(this.eyepieceMesh);
    
    // Soft red night-vision glow at eyepiece
    this.eyepieceGlow = new THREE.PointLight(0xef4444, 0.8, 2.0);
    this.eyepieceMesh.add(this.eyepieceGlow);
    
    this.group.add(this.tubeGroup);

    // Soft beacon light for visibility at night
    this.beaconLight = new THREE.PointLight(0x38bdf8, 1.2, 8);
    this.beaconLight.position.set(0, 2.2, 0);
    this.group.add(this.beaconLight);

    scene.add(this.group);
  }
  
  public isPlayerNear(playerPos: THREE.Vector3): boolean {
    return this.group.position.distanceTo(playerPos) < this.interactionDistance;
  }

  public getPosition(): THREE.Vector3 {
    return this.group.position.clone();
  }
  
  public updatePointing(ra: number, dec: number, latitude: number, lst: number) {
    const ha = lst - ra;
    this.tubeGroup.rotation.order = 'YXZ';
    this.tubeGroup.rotation.y = ha * Math.PI / 12;
    this.tubeGroup.rotation.x = dec * Math.PI / 180;
  }
  
  public update(playerPos: THREE.Vector3) {
    if (this.isPlayerNear(playerPos)) {
      this.eyepieceGlow.intensity = 1.2;
    } else {
      this.eyepieceGlow.intensity = 0.5;
    }
  }
  
  public getEyepieceWorldPosition(): THREE.Vector3 {
    const pos = new THREE.Vector3();
    this.eyepieceMesh.getWorldPosition(pos);
    return pos;
  }
  
  public setVisible(visible: boolean) {
    this.group.visible = visible;
  }
  
  public dispose() {
    this.group.parent?.remove(this.group);
  }
}
