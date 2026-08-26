import * as THREE from 'three';

export class Studio {
  private group: THREE.Group;
  private entranceGroup: THREE.Group;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    this.group.position.set(50, -10, 50); // Off-map interior
    this.group.visible = false;

    // Room
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x2a2d34, side: THREE.BackSide, roughness: 0.8 });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x1f1914, side: THREE.DoubleSide, roughness: 0.7 });
    
    const roomGeo = new THREE.BoxGeometry(8, 3, 6);
    const room = new THREE.Mesh(roomGeo, wallMat);
    room.position.y = 1.5;
    this.group.add(room);
    
    // Desk
    const deskGeo = new THREE.BoxGeometry(2, 0.1, 1);
    const deskMat = new THREE.MeshStandardMaterial({ color: 0x4a2e18, roughness: 0.6 });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, 0.8, -2);
    this.group.add(desk);
    
    // Monitor
    const monitorGeo = new THREE.BoxGeometry(0.8, 0.5, 0.05);
    const monitorMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.2 });
    const monitor = new THREE.Mesh(monitorGeo, monitorMat);
    monitor.position.set(0, 1.1, -2.2);
    this.group.add(monitor);
    
    // Screen (emissive)
    const screenGeo = new THREE.PlaneGeometry(0.75, 0.45);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x3377ff });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.1, -2.17);
    this.group.add(screen);
    
    // Warm interior light
    const light = new THREE.PointLight(0xffbe76, 2.0, 12);
    light.position.set(0, 2.5, 0);
    this.group.add(light);
    
    scene.add(this.group);
    
    // ==========================================
    // Outdoor Observation Shelter (Studio Entrance)
    // ==========================================
    this.entranceGroup = new THREE.Group();
    this.entranceGroup.position.set(-10, 0, 8); // Positioned comfortably in the yard
    
    // Wooden cabin body
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0x2e2018, roughness: 0.85 });
    const cabinGeo = new THREE.BoxGeometry(3.5, 2.4, 3.5);
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.y = 1.2;
    this.entranceGroup.add(cabin);

    // Gabled roof
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x181e28, roughness: 0.7 });
    const roofGeo = new THREE.ConeGeometry(3.0, 1.2, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 2.9;
    this.entranceGroup.add(roof);
    
    // Door
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x1a120c, roughness: 0.9 });
    const doorGeo = new THREE.PlaneGeometry(0.9, 1.8);
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 0.9, 1.76);
    this.entranceGroup.add(door);

    // Glowing warm window
    const windowMat = new THREE.MeshBasicMaterial({ color: 0xffcc66 });
    const windowGeo = new THREE.PlaneGeometry(0.8, 0.8);
    const win = new THREE.Mesh(windowGeo, windowMat);
    win.position.set(1.1, 1.3, 1.76);
    this.entranceGroup.add(win);

    // Porch warm lantern
    const lanternGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.18, 6);
    const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffaa44 });
    const lantern = new THREE.Mesh(lanternGeo, lanternMat);
    lantern.position.set(-0.8, 1.6, 1.85);
    this.entranceGroup.add(lantern);

    const porchLight = new THREE.PointLight(0xff9933, 1.5, 8);
    porchLight.position.set(-0.8, 1.5, 2.0);
    this.entranceGroup.add(porchLight);
    
    scene.add(this.entranceGroup);
  }
  
  public setVisible(visible: boolean) {
    this.group.visible = visible;
  }
  
  public isPlayerNear(playerPos: THREE.Vector3): boolean {
    return this.entranceGroup.position.distanceTo(playerPos) < 4.5;
  }

  public getPosition(): THREE.Vector3 {
    return this.entranceGroup.position.clone();
  }
  
  public dispose() {
    this.group.parent?.remove(this.group);
    this.entranceGroup.parent?.remove(this.entranceGroup);
  }
}
