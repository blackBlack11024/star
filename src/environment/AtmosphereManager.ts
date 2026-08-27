import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import SunCalc from 'suncalc';

/**
 * Manages sky rendering, sun/moon lighting, and day/night transitions.
 */
export class AtmosphereManager {
    private scene: THREE.Scene;
    private sky: Sky;
    private sunLight: THREE.DirectionalLight;
    private moonLight: THREE.DirectionalLight;
    private ambientLight: THREE.AmbientLight;
    private hemisphereLight: THREE.HemisphereLight;

    constructor(scene: THREE.Scene) {
        this.scene = scene;

        // Background color for deep space
        this.scene.background = new THREE.Color(0x010206);

        // Initialize Sky
        this.sky = new Sky();
        this.sky.scale.setScalar(450000);
        
        const uniforms = this.sky.material.uniforms;
        uniforms['turbidity'].value = 2.0;
        uniforms['rayleigh'].value = 1.0;
        uniforms['mieCoefficient'].value = 0.003;
        uniforms['mieDirectionalG'].value = 0.8;
        
        this.scene.add(this.sky);

        // Sun Light
        this.sunLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 1024;
        this.sunLight.shadow.mapSize.height = 1024;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.camera.far = 500;
        const d = 50;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.scene.add(this.sunLight);

        // Moon Light
        this.moonLight = new THREE.DirectionalLight(0x88aaff, 0.15);
        this.moonLight.castShadow = false;
        this.scene.add(this.moonLight);

        // Ambient Light
        this.ambientLight = new THREE.AmbientLight(0x060c18, 0.35);
        this.scene.add(this.ambientLight);

        // Hemisphere Light (sky blue-gray, ground dark olive)
        this.hemisphereLight = new THREE.HemisphereLight(0x101c30, 0x050a05, 0.25);
        this.scene.add(this.hemisphereLight);
    }

    /**
     * Updates sun, moon, and sky based on date and location
     * @param date Current game date
     * @param latitude Observer latitude
     * @param longitude Observer longitude
     * @returns sunElevation in radians
     */
    public update(date: Date, latitude: number, longitude: number): number {
        const sunPos = SunCalc.getPosition(date, latitude, longitude);
        const moonPos = SunCalc.getMoonPosition(date, latitude, longitude);

        const sunPhi = Math.PI / 2 - sunPos.altitude;
        const sunTheta = sunPos.azimuth;
        
        const moonPhi = Math.PI / 2 - moonPos.altitude;
        const moonTheta = moonPos.azimuth;

        const distance = 1000;
        
        const sunVector = new THREE.Vector3().setFromSphericalCoords(distance, sunPhi, sunTheta);
        const moonVector = new THREE.Vector3().setFromSphericalCoords(distance, moonPhi, moonTheta);

        const sunElevation = sunPos.altitude;
        const sunElevDeg = sunElevation * (180 / Math.PI);
        const uniforms = this.sky.material.uniforms;

        // Day/Night atmosphere scattering parameters
        if (sunElevDeg > 0) {
            // Day / Sunrise / Sunset
            const elevNorm = Math.min(1.0, sunElevDeg / 45.0);
            uniforms['turbidity'].value = 2.0;
            uniforms['rayleigh'].value = 1.2 + (1.0 - elevNorm) * 1.5;
            uniforms['mieCoefficient'].value = 0.0005; // Small mie avoids giant overexposed white disk
            uniforms['mieDirectionalG'].value = 0.85;
            uniforms['sunPosition'].value.copy(sunVector);

            this.sunLight.intensity = Math.max(0.2, elevNorm * 1.2);
            if (sunElevDeg < 10) {
                // Golden hour
                this.sunLight.color.setHSL(0.08, 0.85, 0.6);
                this.ambientLight.color.setHex(0x382018);
                this.ambientLight.intensity = 0.35;
            } else {
                this.sunLight.color.setHSL(0.12, 0.15, 0.95);
                this.ambientLight.color.setHex(0x203850);
                this.ambientLight.intensity = 0.45;
            }
        } else {
            // Twilight & Night: gradually extinguish atmosphere scattering
            const nightFactor = Math.max(0.0, Math.min(1.0, (-sunElevDeg) / 10.0));
            // Move sun vector below ground so sky shader doesn't create bright horizon
            uniforms['sunPosition'].value.set(0, -1000, 0);
            uniforms['turbidity'].value = Math.max(0.0, 2.0 * (1.0 - nightFactor));
            uniforms['rayleigh'].value = Math.max(0.0, 1.0 * (1.0 - nightFactor));
            uniforms['mieCoefficient'].value = Math.max(0.0, 0.003 * (1.0 - nightFactor));

            // When deep into night (astronomical twilight, sun below -10 deg), turn off Preetham sky mesh
            // so the scene renders true pure black space (scene.background 0x010206) without residual grey haze.
            this.sky.visible = sunElevDeg > -10.0;

            this.sunLight.intensity = 0;
            this.ambientLight.color.setHex(0x060c18);
            this.ambientLight.intensity = 0.25;
        }

        this.sunLight.position.copy(sunVector);
        this.moonLight.position.copy(moonVector);

        // Adjust Moon Light
        if (moonPos.altitude > 0) {
            const moonElevNorm = Math.sin(Math.max(0, moonPos.altitude));
            this.moonLight.intensity = moonElevNorm * 0.2;
        } else {
            this.moonLight.intensity = 0;
        }

        return sunElevation;
    }

    public setSkyVisible(visible: boolean) {
        this.sky.visible = visible;
    }

    public dispose() {
        this.scene.remove(this.sky);
        this.scene.remove(this.sunLight);
        this.scene.remove(this.moonLight);
        this.scene.remove(this.ambientLight);
        this.scene.remove(this.hemisphereLight);
        this.sky.geometry.dispose();
        (this.sky.material as THREE.Material).dispose();
    }
}
