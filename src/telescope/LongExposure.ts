import * as THREE from 'three';

export class LongExposure {
  private renderer: THREE.WebGLRenderer;
  private width: number;
  private height: number;
  
  private rtA: THREE.WebGLRenderTarget;
  private rtB: THREE.WebGLRenderTarget;
  private frameTarget: THREE.WebGLRenderTarget;
  private bufferIdx = 0;
  
  private blendScene: THREE.Scene;
  private blendCamera: THREE.OrthographicCamera;
  private blendMaterial: THREE.ShaderMaterial;
  private quad: THREE.Mesh;
  
  private isExposingFlag = false;
  private startTime = 0;
  private duration = 0;
  private sampleCount = 0;
  
  private resultCanvas: HTMLCanvasElement;

  constructor(renderer: THREE.WebGLRenderer, width: number, height: number) {
    this.renderer = renderer;
    this.width = width;
    this.height = height;
    
    const rtOptions = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
    };
    
    this.rtA = new THREE.WebGLRenderTarget(width, height, rtOptions);
    this.rtB = new THREE.WebGLRenderTarget(width, height, rtOptions);
    this.frameTarget = new THREE.WebGLRenderTarget(width, height, rtOptions);
    
    this.blendScene = new THREE.Scene();
    this.blendCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    this.blendMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uCurrentFrame: { value: null },
        uAccumulatedFrame: { value: null },
        uSampleCount: { value: 1.0 },
        uExposureGain: { value: 1.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uCurrentFrame;
        uniform sampler2D uAccumulatedFrame;
        uniform float uSampleCount;
        uniform float uExposureGain;
        varying vec2 vUv;
        
        void main() {
          vec4 current = texture2D(uCurrentFrame, vUv) * uExposureGain;
          vec4 accumulated = texture2D(uAccumulatedFrame, vUv);
          
          vec4 result = mix(accumulated, current, 1.0 / uSampleCount);
          gl_FragColor = result;
        }
      `
    });
    
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blendMaterial);
    this.blendScene.add(this.quad);
    
    this.resultCanvas = document.createElement('canvas');
  }

  public startExposure(_durationSeconds?: number) {
    this.isExposingFlag = true;
    this.duration = 0;
    this.startTime = performance.now();
    this.sampleCount = 0;
    
    this.renderer.setRenderTarget(this.rtA);
    this.renderer.clear();
    this.renderer.setRenderTarget(this.rtB);
    this.renderer.clear();
    this.renderer.setRenderTarget(null);
    this.bufferIdx = 0;
  }

  public getElapsedSeconds(): number {
    if (!this.isExposingFlag) return 0;
    return (performance.now() - this.startTime) / 1000;
  }

  public getSampleCount(): number {
    return this.sampleCount;
  }

  public accumulate(mainScene: THREE.Scene, mainCamera: THREE.PerspectiveCamera, gain: number = 1.0) {
    if (!this.isExposingFlag) return;
    
    this.sampleCount++;
    
    // 1. Render main scene to frameTarget
    this.renderer.setRenderTarget(this.frameTarget);
    this.renderer.render(mainScene, mainCamera);
    
    // 2. Blend frameTarget into accumulation ping-pong target
    const currentAccumTarget = this.bufferIdx === 0 ? this.rtA : this.rtB;
    const nextAccumTarget = this.bufferIdx === 0 ? this.rtB : this.rtA;
    
    this.blendMaterial.uniforms.uCurrentFrame.value = this.frameTarget.texture;
    this.blendMaterial.uniforms.uAccumulatedFrame.value = currentAccumTarget.texture;
    this.blendMaterial.uniforms.uSampleCount.value = this.sampleCount;
    this.blendMaterial.uniforms.uExposureGain.value = gain;
    
    this.renderer.setRenderTarget(nextAccumTarget);
    this.renderer.render(this.blendScene, this.blendCamera);
    this.renderer.setRenderTarget(null);
    
    this.bufferIdx = 1 - this.bufferIdx;
  }

  public finishExposure(): number {
    const elapsed = this.getElapsedSeconds();
    this.isExposingFlag = false;
    const finalTarget = this.bufferIdx === 0 ? this.rtA : this.rtB;
    
    this.resultCanvas.width = this.width;
    this.resultCanvas.height = this.height;
    const ctx = this.resultCanvas.getContext('2d');
    if (!ctx) return elapsed;
    
    const buffer = new Uint16Array(this.width * this.height * 4);
    this.renderer.readRenderTargetPixels(finalTarget, 0, 0, this.width, this.height, buffer);
    
    const imgData = ctx.createImageData(this.width, this.height);
    for (let i = 0; i < buffer.length; i++) {
        imgData.data[i] = Math.min(255, Math.max(0, THREE.DataUtils.fromHalfFloat(buffer[i]) * 255));
    }
    
    // Flip Y
    const flipped = ctx.createImageData(this.width, this.height);
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            const idx = (y * this.width + x) * 4;
            const fIdx = ((this.height - 1 - y) * this.width + x) * 4;
            flipped.data[fIdx] = imgData.data[idx];
            flipped.data[fIdx + 1] = imgData.data[idx + 1];
            flipped.data[fIdx + 2] = imgData.data[idx + 2];
            flipped.data[fIdx + 3] = imgData.data[idx + 3];
        }
    }
    ctx.putImageData(flipped, 0, 0);
    return elapsed;
  }

  public getResultAsDataUrl(): string {
    return this.resultCanvas.toDataURL('image/jpeg', 0.85);
  }

  public isExposing(): boolean {
    return this.isExposingFlag;
  }

  public getProgress(): number {
    return this.isExposingFlag ? 1 : 0;
  }

  public getAccumulatedTexture(): THREE.Texture {
    const target = this.bufferIdx === 0 ? this.rtA : this.rtB;
    return target.texture;
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.rtA.setSize(width, height);
    this.rtB.setSize(width, height);
    this.frameTarget.setSize(width, height);
  }

  public dispose() {
    this.rtA.dispose();
    this.rtB.dispose();
    this.frameTarget.dispose();
    this.blendMaterial.dispose();
  }
}
