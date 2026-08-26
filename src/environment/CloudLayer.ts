import * as THREE from 'three';

const cloudVertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const cloudFragmentShader = `
uniform float time;
uniform float coverage;
uniform vec2 windDir;
varying vec2 vUv;

// Simple 2D noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626, // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main() {
    vec2 pos = vUv * 5.0 + windDir * time * 0.05;
    
    // Fractal noise
    float n = 0.5 * (snoise(pos) + 1.0);
    n += 0.25 * (snoise(pos * 2.0) + 1.0);
    n += 0.125 * (snoise(pos * 4.0) + 1.0);
    n /= (1.0 + 0.5 + 0.25 + 0.125);
    
    // Cloud density based on coverage
    float density = smoothstep(1.0 - coverage, 1.0 - coverage + 0.2, n);
    
    // Fade out at edges
    float edge = length(vUv - 0.5) * 2.0;
    float alpha = density * smoothstep(1.0, 0.5, edge) * coverage * 0.8;
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
}
`;

export class CloudLayer {
    private scene: THREE.Scene;
    private mesh: THREE.Mesh;
    private material: THREE.ShaderMaterial;
    private time: number = 0;

    constructor(scene: THREE.Scene) {
        this.scene = scene;

        this.material = new THREE.ShaderMaterial({
            vertexShader: cloudVertexShader,
            fragmentShader: cloudFragmentShader,
            uniforms: {
                time: { value: 0 },
                coverage: { value: 0 },
                windDir: { value: new THREE.Vector2(1, 0.5).normalize() }
            },
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        // Create a large plane high in the sky
        const geometry = new THREE.PlaneGeometry(10000, 10000);
        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.rotation.x = -Math.PI / 2;
        this.mesh.position.y = 300; // between ground and celestial sphere

        this.scene.add(this.mesh);
    }

    public update(deltaTime: number, cloudCoverage: number, windDirection: THREE.Vector2) {
        this.time += deltaTime;
        this.material.uniforms.time.value = this.time;
        
        // Smoothly interpolate coverage
        const currentCoverage = this.material.uniforms.coverage.value;
        this.material.uniforms.coverage.value = THREE.MathUtils.lerp(currentCoverage, cloudCoverage, deltaTime * 0.1);
        
        this.material.uniforms.windDir.value.copy(windDirection);
    }

    public dispose() {
        this.scene.remove(this.mesh);
        this.mesh.geometry.dispose();
        this.material.dispose();
    }
}
