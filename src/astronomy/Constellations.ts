import * as THREE from 'three';
import { CONSTELLATIONS } from '../data/constellationLines';

export class Constellations {
    private group: THREE.Group;
    private lines: THREE.LineSegments | null = null;
    private material: THREE.ShaderMaterial | null = null;
    private geometry: THREE.BufferGeometry | null = null;

    constructor(parentGroup: THREE.Group) {
        this.group = new THREE.Group();
        parentGroup.add(this.group);
        this.init();
    }

    private init() {
        const R = 999;
        const positions: number[] = [];

        for (const constellation of CONSTELLATIONS) {
            for (const line of constellation.lines) {
                const ra1 = line[0] * Math.PI / 12;
                const dec1 = line[1] * Math.PI / 180;
                
                const ra2 = line[2] * Math.PI / 12;
                const dec2 = line[3] * Math.PI / 180;
                
                positions.push(
                    R * Math.cos(dec1) * Math.cos(ra1),
                    R * Math.sin(dec1),
                    R * Math.cos(dec1) * Math.sin(ra1),
                    R * Math.cos(dec2) * Math.cos(ra2),
                    R * Math.sin(dec2),
                    R * Math.cos(dec2) * Math.sin(ra2)
                );
            }
        }

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        
        const vertexShader = `
            varying vec3 vWorldPos;
            void main() {
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }
        `;

        const fragmentShader = `
            uniform vec3 uColor;
            uniform float uOpacity;
            varying vec3 vWorldPos;
            void main() {
                if (vWorldPos.y < 0.0) discard;
                float horizonFade = smoothstep(0.0, 15.0, vWorldPos.y);
                gl_FragColor = vec4(uColor, uOpacity * horizonFade);
            }
        `;

        this.material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uColor: { value: new THREE.Color(0x38bdf8) },
                uOpacity: { value: 0.18 }
            },
            transparent: true,
            depthWrite: false
        });

        this.lines = new THREE.LineSegments(this.geometry, this.material);
        this.group.add(this.lines);
    }

    public update(sunElevation: number) {
        if (!this.material) return;
        // Fade out lines during daytime
        const nightFactor = Math.max(0.0, Math.min(1.0, (-sunElevation) / 0.08));
        this.material.uniforms.uOpacity.value = 0.18 * nightFactor;
        this.group.visible = this.material.uniforms.uOpacity.value > 0.001;
    }

    public setVisible(visible: boolean) {
        this.group.visible = visible;
    }

    public isVisible(): boolean {
        return this.group.visible;
    }

    public dispose() {
        if (this.geometry) this.geometry.dispose();
        if (this.material) this.material.dispose();
        if (this.lines) this.group.remove(this.lines);
        if (this.group.parent) this.group.parent.remove(this.group);
    }
}
