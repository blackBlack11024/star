import * as THREE from 'three';
import { BRIGHT_STARS, generateFillerStars, bvToRgb } from '../data/brightStars';

export class StarField {
    private scene: THREE.Scene;
    private group: THREE.Group;
    private points: THREE.Points | null = null;
    private material: THREE.ShaderMaterial | null = null;
    private geometry: THREE.BufferGeometry | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.group = new THREE.Group();
        this.scene.add(this.group);
    }

    public async loadStars() {
        let starsData: any[] = [];
        let useFallback = true;
        try {
            const response = await fetch('/stars.bin');
            if (response.ok) {
                const buffer = await response.arrayBuffer();
                const view = new Float32Array(buffer);
                const numStars = view.length / 8;
                starsData = new Array(numStars);
                for (let i = 0; i < numStars; i++) {
                    const idx = i * 8;
                    starsData[i] = {
                        x: view[idx], y: view[idx+1], z: view[idx+2],
                        r: view[idx+3], g: view[idx+4], b: view[idx+5],
                        mag: view[idx+6]
                    };
                }
                useFallback = false;
            }
        } catch (e) {
            console.warn('Failed to load stars.bin, using fallback', e);
        }

        if (useFallback) {
            starsData = [...BRIGHT_STARS, ...generateFillerStars(32000)].map(star => {
                const R = 1000;
                const ra_rad = star.ra * Math.PI / 12;
                const dec_rad = star.dec * Math.PI / 180;
                const x = R * Math.cos(dec_rad) * Math.cos(ra_rad);
                const y = R * Math.sin(dec_rad);
                const z = R * Math.cos(dec_rad) * Math.sin(ra_rad);
                
                const [r, g, b] = bvToRgb(star.bv);
                return {
                    x, y, z,
                    r, g, b,
                    mag: star.mag
                };
            });
        }

        const count = starsData.length;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const magnitudes = new Float32Array(count);
        const twinkleSpeeds = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const s = starsData[i];
            positions[i*3] = s.x;
            positions[i*3+1] = s.y;
            positions[i*3+2] = s.z;
            colors[i*3] = s.r;
            colors[i*3+1] = s.g;
            colors[i*3+2] = s.b;
            magnitudes[i] = s.mag;
            twinkleSpeeds[i] = Math.random() * 2.5 + 0.5;
        }

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
        this.geometry.setAttribute('aMagnitude', new THREE.BufferAttribute(magnitudes, 1));
        this.geometry.setAttribute('aTwinkleSpeed', new THREE.BufferAttribute(twinkleSpeeds, 1));

        const vertexShader = `
            attribute vec3 aColor;
            attribute float aMagnitude;
            attribute float aTwinkleSpeed;
            
            uniform float uTime;
            uniform float uPixelRatio;
            uniform float uBaseSize;
            uniform float uCurrentFov;
            uniform float uMinFov;
            
            varying vec3 vColor;
            varying float vMagnitude;
            varying float vTwinkle;
            varying vec3 vWorldPosition;
            
            void main() {
                vColor = aColor;
                vMagnitude = aMagnitude;
                
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPos.xyz;
                
                vec4 mvPosition = viewMatrix * worldPos;
                gl_Position = projectionMatrix * mvPosition;
                
                float twinkle = 0.82 + 0.18 * sin(uTime * aTwinkleSpeed + position.x * 0.1);
                vTwinkle = twinkle;
                
                // Magnitude-based size scaling (apparent magnitude scale)
                // Mag -1 (Sirius) -> size ~ 8px, Mag 2 -> ~5px, Mag 6+ -> ~2.2px
                float magFactor = clamp((8.5 - aMagnitude) / 7.5, 0.22, 1.6);
                float fovZoom = pow(clamp(60.0 / max(uCurrentFov, 0.4), 1.0, 50.0), 0.38);
                
                float ptSize = uBaseSize * magFactor * fovZoom * uPixelRatio * twinkle;
                gl_PointSize = clamp(ptSize, 1.8, 22.0);
            }
        `;

        const fragmentShader = `
            uniform float uSunElevation;
            varying vec3 vColor;
            varying float vMagnitude;
            varying float vTwinkle;
            varying vec3 vWorldPosition;
            
            void main() {
                // Strict Horizon Extinction: Discard stars below ground (y < 0)
                if (vWorldPosition.y < 0.0) discard;
                float horizonFade = smoothstep(0.0, 15.0, vWorldPosition.y);
                
                vec2 coord = gl_PointCoord * 2.0 - 1.0;
                float dist = length(coord);
                if (dist > 1.0) discard;
                
                // Gaussian Airy disk profile with crisp core and soft halo
                float core = exp(-dist * dist * 3.0);
                float halo = max(0.0, 1.0 - dist) * 0.35;
                float alpha = (core + halo) * horizonFade;
                
                // Daylight extinction based on sun elevation in degrees
                float sunElevDeg = uSunElevation * 57.2957795;
                float daylight = smoothstep(-12.0, 0.0, sunElevDeg);
                alpha *= max(0.0, 1.0 - daylight * 0.98);
                
                // Bright stars have brilliant luminous core
                vec3 finalColor = mix(vColor, vec3(1.0), (1.0 - dist) * clamp((3.5 - vMagnitude) * 0.25, 0.0, 0.7));
                
                gl_FragColor = vec4(finalColor * vTwinkle, alpha);
            }
        `;

        this.material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
                uBaseSize: { value: 5.2 },
                uCurrentFov: { value: 60.0 },
                uMinFov: { value: 0.2 },
                uSunElevation: { value: -0.2 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.points = new THREE.Points(this.geometry, this.material);
        this.group.add(this.points);
    }

    public update(time: number, fov: number, sunElevation: number) {
        if (this.material) {
            this.material.uniforms.uTime.value = time;
            this.material.uniforms.uCurrentFov.value = fov;
            this.material.uniforms.uSunElevation.value = sunElevation;
        }
    }

    public setVisible(visible: boolean) {
        this.group.visible = visible;
    }

    public getStarGroup(): THREE.Group {
        return this.group;
    }

    public dispose() {
        if (this.geometry) this.geometry.dispose();
        if (this.material) this.material.dispose();
        if (this.points) this.group.remove(this.points);
        this.scene.remove(this.group);
    }
}
