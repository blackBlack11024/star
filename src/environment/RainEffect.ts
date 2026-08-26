import * as THREE from 'three';

const rainVertexShader = `
uniform float time;
attribute float speed;
attribute float phase;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec3 pos = position;
    // Fall downwards
    pos.y -= mod(time * speed + phase, 100.0); // wrap around 100 units
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 100.0 / -mvPosition.z; // Scale by distance
}
`;

const rainFragmentShader = `
varying vec2 vUv;
uniform float intensity;
void main() {
    // Make streaks
    vec2 uv = gl_PointCoord - 0.5;
    float len = length(vec2(uv.x, uv.y * 0.1));
    float alpha = smoothstep(0.05, 0.0, len) * 0.3 * intensity;
    
    if(alpha < 0.01) discard;
    gl_FragColor = vec4(0.8, 0.9, 1.0, alpha);
}
`;

export class RainEffect {
    private scene: THREE.Scene;
    private points: THREE.Points;
    private material: THREE.ShaderMaterial;
    private time: number = 0;
    private rainCount: number = 3000;
    private visible: boolean = false;

    constructor(scene: THREE.Scene) {
        this.scene = scene;

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.rainCount * 3);
        const speeds = new Float32Array(this.rainCount);
        const phases = new Float32Array(this.rainCount);

        for (let i = 0; i < this.rainCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = Math.random() * 100; // start height
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

            speeds[i] = 20 + Math.random() * 20; // falling speed
            phases[i] = Math.random() * 100;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
        geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));

        this.material = new THREE.ShaderMaterial({
            vertexShader: rainVertexShader,
            fragmentShader: rainFragmentShader,
            uniforms: {
                time: { value: 0 },
                intensity: { value: 0 }
            },
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.points = new THREE.Points(geometry, this.material);
        this.points.visible = false;
        this.scene.add(this.points);
    }

    public update(deltaTime: number, cameraPosition: THREE.Vector3, intensity: number) {
        if (intensity <= 0.01 && !this.visible) {
            this.points.visible = false;
            return;
        }
        
        this.points.visible = true;
        this.time += deltaTime;
        this.material.uniforms.time.value = this.time;
        this.material.uniforms.intensity.value = intensity;

        // Keep rain centered around camera
        this.points.position.set(cameraPosition.x, 0, cameraPosition.z);
    }

    public setVisible(v: boolean) {
        this.visible = v;
        if (!v) {
            this.material.uniforms.intensity.value = 0;
        }
    }

    public dispose() {
        this.scene.remove(this.points);
        this.points.geometry.dispose();
        this.material.dispose();
    }
}
