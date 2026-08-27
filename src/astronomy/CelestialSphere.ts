import * as THREE from 'three';

export class CelestialSphere {
    private scene: THREE.Scene;
    public group: THREE.Group;
    private currentLst: number = 0;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.group = new THREE.Group();
        this.scene.add(this.group);
    }

    /**
     * Compute GMST and LST, and rotate the celestial sphere.
     */
    public updateOrientation(latitude: number, longitude: number, date: Date) {
        const jd = date.getTime() / 86400000.0 + 2440587.5;
        const d_j2000 = jd - 2451545.0;
        
        const gmst = (18.697374558 + 24.06570982441908 * d_j2000) % 24;
        const gmst_adj = gmst < 0 ? gmst + 24 : gmst;
        
        const lst = (gmst_adj + longitude / 15) % 24;
        const lst_adj = lst < 0 ? lst + 24 : lst;
        this.currentLst = lst_adj;
        
        const lstRad = lst_adj * Math.PI / 12;
        const latRad = latitude * Math.PI / 180;
        
        this.group.rotation.set(0, 0, 0);
        this.group.setRotationFromEuler(new THREE.Euler((Math.PI / 2) - latRad, 0, -lstRad, 'ZXY'));
        this.group.matrixAutoUpdate = true;
        this.group.updateMatrixWorld(true);
    }

    public getLst(): number {
        return this.currentLst;
    }

    public getRaDecToVector(raHours: number, decDegrees: number): THREE.Vector3 {
        const R = 1000;
        const ra_rad = raHours * Math.PI / 12;
        const dec_rad = decDegrees * Math.PI / 180;
        const x = R * Math.cos(dec_rad) * Math.cos(ra_rad);
        const y = R * Math.sin(dec_rad);
        const z = R * Math.cos(dec_rad) * Math.sin(ra_rad);
        return new THREE.Vector3(x, y, z);
    }

    public vectorToRaDec(worldVector: THREE.Vector3): { ra: number, dec: number } {
        const localVec = worldVector.clone().normalize();
        const invMatrix = this.group.matrixWorld.clone().invert();
        localVec.applyMatrix4(invMatrix);

        const dec = Math.asin(Math.max(-1, Math.min(1, localVec.y))) * 180 / Math.PI;
        let ra = Math.atan2(localVec.z, localVec.x) * 12 / Math.PI;
        if (ra < 0) ra += 24;
        return { ra, dec };
    }

    public getHorizontalVector(azimuthDeg: number, altitudeDeg: number): THREE.Vector3 {
        const azRad = azimuthDeg * Math.PI / 180;
        const altRad = altitudeDeg * Math.PI / 180;
        const cosAlt = Math.cos(altRad);
        const x = cosAlt * Math.sin(azRad);
        const y = Math.sin(altRad);
        const z = -cosAlt * Math.cos(azRad);
        return new THREE.Vector3(x, y, z);
    }

    public raDecToScreenPosition(raHours: number, decDegrees: number, camera: THREE.Camera, width: number, height: number): THREE.Vector2 | null {
        const vec = this.getRaDecToVector(raHours, decDegrees);
        vec.applyMatrix4(this.group.matrixWorld);
        
        vec.project(camera);
        
        if (vec.z > 1.0) {
            return null;
        }

        const x = (vec.x * .5 + .5) * width;
        const y = (vec.y * -.5 + .5) * height;

        return new THREE.Vector2(x, y);
    }

    public dispose() {
        this.scene.remove(this.group);
    }
}
