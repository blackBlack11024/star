import * as THREE from 'three';

export class Terrain {
  private group: THREE.Group;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();

    // 1. Ground Plane with rich procedural dark earth texture
    const radius = 250;
    const geometry = new THREE.CircleGeometry(radius, 64);
    geometry.rotateX(-Math.PI / 2);
    
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Smooth dark grass and gravel
    ctx.fillStyle = '#0f1a0e';
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = Math.random() * 2 + 1;
      const c = Math.random() > 0.6 ? 'rgba(35, 45, 30, 0.4)' : 'rgba(15, 20, 15, 0.5)';
      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 16);
    
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      color: 0x223020,
      roughness: 0.95,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });
    
    const groundMesh = new THREE.Mesh(geometry, material);
    groundMesh.position.y = -0.2;
    groundMesh.receiveShadow = true;
    this.group.add(groundMesh);

    // 2. Distant Mountain Silhouettes on the horizon (low-poly ring)
    const mountainMat = new THREE.MeshStandardMaterial({
      color: 0x050a12,
      roughness: 0.98,
      flatShading: true,
    });

    const numMountains = 24;
    for (let i = 0; i < numMountains; i++) {
      const angle = (i / numMountains) * Math.PI * 2;
      const dist = 320 + (i % 3) * 40;
      const height = 30 + Math.sin(i * 3) * 18 + Math.random() * 10;
      const baseWidth = 60 + Math.random() * 30;

      const mtnGeo = new THREE.ConeGeometry(baseWidth, height, 5);
      const mtn = new THREE.Mesh(mtnGeo, mountainMat);
      mtn.position.set(
        Math.cos(angle) * dist,
        height * 0.45,
        Math.sin(angle) * dist
      );
      this.group.add(mtn);
    }
    
    scene.add(this.group);
  }
  
  public setVisible(visible: boolean) {
    this.group.visible = visible;
  }
  
  public dispose() {
    this.group.parent?.remove(this.group);
  }
}
