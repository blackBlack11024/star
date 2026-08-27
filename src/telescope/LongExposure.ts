import * as THREE from 'three';
import { FrameType } from '../types';

export interface ExposureResult {
  elapsedSeconds: number;
  totalDrift: number;
  hasMotionBlur: boolean;
  dataUrl: string;
}

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
  private currentFrameType: FrameType = 'light';
  private startTime = 0;
  private sampleCount = 0;
  
  // Motion blur tracking
  private prevRa: number | null = null;
  private prevDec: number | null = null;
  private totalDrift = 0;
  private maxDriftStep = 0;
  
  private resultCanvas: HTMLCanvasElement;

  constructor(renderer: THREE.WebGLRenderer, width: number, height: number) {
    this.renderer = renderer;
    this.width = width;
    this.height = height;
    
    const rtOptions = {
      type: THREE.UnsignedByteType,
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
        uExposureGain: { value: 1.0 },
        uIntegrationWeight: { value: 0.08 }
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
        uniform float uIntegrationWeight;
        varying vec2 vUv;
        
        void main() {
          vec4 current = texture2D(uCurrentFrame, vUv) * uExposureGain;
          
          if (uSampleCount <= 1.5) {
            gl_FragColor = current;
            return;
          }
          
          vec4 accumulated = texture2D(uAccumulatedFrame, vUv);
          
          // Realistic Astrophotography Star Trail & Long Exposure Integration:
          // Maximum/Lighten blending keeps dark sky velvety black while stars paint streaks when moving.
          // Running average integrates stationary faint deep-sky nebulae smoothly without blowout.
          vec4 peak = max(accumulated, current);
          vec4 smoothAvg = mix(accumulated, current, 1.0 / uSampleCount);
          vec4 result = max(peak * 0.98, smoothAvg);
          
          gl_FragColor = min(result, vec4(1.0, 1.0, 1.0, 1.0));
        }
      `
    });
    
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blendMaterial);
    this.blendScene.add(this.quad);
    
    this.resultCanvas = document.createElement('canvas');
  }

  public startExposure(frameType: FrameType = 'light') {
    this.isExposingFlag = true;
    this.currentFrameType = frameType;
    this.startTime = performance.now();
    this.sampleCount = 0;
    this.totalDrift = 0;
    this.maxDriftStep = 0;
    this.prevRa = null;
    this.prevDec = null;
    
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

  public getFrameType(): FrameType {
    return this.currentFrameType;
  }

  public getTotalDrift(): number {
    return this.totalDrift;
  }

  public accumulate(
    mainScene: THREE.Scene,
    mainCamera: THREE.PerspectiveCamera,
    gain: number = 1.0,
    currentRa?: number,
    currentDec?: number
  ) {
    if (!this.isExposingFlag) return;
    
    this.sampleCount++;
    
    // Track telescope angular motion during exposure
    if (currentRa !== undefined && currentDec !== undefined) {
      if (this.prevRa !== null && this.prevDec !== null) {
        let dRa = (currentRa - this.prevRa) * 15.0; // hours to degrees
        while (dRa > 180) dRa -= 360;
        while (dRa < -180) dRa += 360;
        const dDec = currentDec - this.prevDec;
        const cosDec = Math.cos((currentDec * Math.PI) / 180);
        const step = Math.sqrt(Math.pow(dRa * cosDec, 2) + Math.pow(dDec, 2));
        
        if (step > 0.005) {
          this.totalDrift += step;
          this.maxDriftStep = Math.max(this.maxDriftStep, step);
        }
      }
      this.prevRa = currentRa;
      this.prevDec = currentDec;
    }
    
    // 1. Render to frameTarget
    this.renderer.setRenderTarget(this.frameTarget);
    if (this.currentFrameType === 'dark' || this.currentFrameType === 'bias' || this.currentFrameType === 'flat') {
      // Shutter closed (lens cap on) or flat diffuser active: do not render night sky stars!
      this.renderer.clearColor();
      this.renderer.clear();
    } else {
      this.renderer.render(mainScene, mainCamera);
    }
    
    // 2. Blend frameTarget into accumulation ping-pong target
    const currentAccumTarget = this.bufferIdx === 0 ? this.rtA : this.rtB;
    const nextAccumTarget = this.bufferIdx === 0 ? this.rtB : this.rtA;
    
    // Adjust integration weight based on elapsed time to simulate photographic photon saturation curve
    const elapsed = this.getElapsedSeconds();
    const integrationWeight = Math.max(0.02, 0.12 / Math.sqrt(1.0 + elapsed * 0.5));
    
    this.blendMaterial.uniforms.uCurrentFrame.value = this.frameTarget.texture;
    this.blendMaterial.uniforms.uAccumulatedFrame.value = currentAccumTarget.texture;
    this.blendMaterial.uniforms.uSampleCount.value = this.sampleCount;
    this.blendMaterial.uniforms.uExposureGain.value = gain;
    this.blendMaterial.uniforms.uIntegrationWeight.value = integrationWeight;
    
    this.renderer.setRenderTarget(nextAccumTarget);
    this.renderer.render(this.blendScene, this.blendCamera);
    this.renderer.setRenderTarget(null);
    
    this.bufferIdx = 1 - this.bufferIdx;
  }

  /** Finish exposure and generate realistic astrophotography photo data */
  public finishExposure(): ExposureResult {
    const elapsed = Math.max(0.5, this.getElapsedSeconds());
    this.isExposingFlag = false;
    const frameType = this.currentFrameType;
    const finalTarget = this.bufferIdx === 0 ? this.rtA : this.rtB;
    
    // Target canvas for photography result
    const outW = Math.min(1920, this.width);
    const outH = Math.min(1080, this.height);
    this.resultCanvas.width = outW;
    this.resultCanvas.height = outH;
    const ctx = this.resultCanvas.getContext('2d');
    
    if (!ctx) {
      return {
        elapsedSeconds: elapsed,
        totalDrift: this.totalDrift,
        hasMotionBlur: this.totalDrift > 0.25,
        dataUrl: '',
      };
    }
    
    // -------------------------------------------------------------
    // Case 1: Dark Frame (暗場 - 蓋上鏡頭蓋，拍攝熱噪聲與壞點)
    // -------------------------------------------------------------
    if (frameType === 'dark') {
      this.generateDarkFrame(ctx, outW, outH, elapsed);
      return {
        elapsedSeconds: elapsed,
        totalDrift: 0,
        hasMotionBlur: false,
        dataUrl: this.resultCanvas.toDataURL('image/jpeg', 0.92),
      };
    }
    
    // -------------------------------------------------------------
    // Case 2: Flat Frame (平場 - 均勻光源校準暗角與塵埃斑)
    // -------------------------------------------------------------
    if (frameType === 'flat') {
      this.generateFlatFrame(ctx, outW, outH);
      return {
        elapsedSeconds: elapsed,
        totalDrift: 0,
        hasMotionBlur: false,
        dataUrl: this.resultCanvas.toDataURL('image/jpeg', 0.92),
      };
    }
    
    // -------------------------------------------------------------
    // Case 3: Bias Frame (偏壓 - 極速快門基準讀出噪聲)
    // -------------------------------------------------------------
    if (frameType === 'bias') {
      this.generateBiasFrame(ctx, outW, outH);
      return {
        elapsedSeconds: 0.001,
        totalDrift: 0,
        hasMotionBlur: false,
        dataUrl: this.resultCanvas.toDataURL('image/jpeg', 0.92),
      };
    }
    
    // -------------------------------------------------------------
    // Case 4: Light Frame (亮場 - 真實光子累積 + 晃動拖尾殘影)
    // -------------------------------------------------------------
    const buffer = new Uint8Array(this.width * this.height * 4);
    this.renderer.readRenderTargetPixels(finalTarget, 0, 0, this.width, this.height, buffer);
    
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.width;
    tempCanvas.height = this.height;
    const tempCtx = tempCanvas.getContext('2d')!;
    const imgData = tempCtx.createImageData(this.width, this.height);
    
    const hasMotionBlur = this.totalDrift > 0.25;
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const srcIdx = (y * this.width + x) * 4;
        const dstIdx = ((this.height - 1 - y) * this.width + x) * 4;
        
        imgData.data[dstIdx] = buffer[srcIdx];
        imgData.data[dstIdx + 1] = buffer[srcIdx + 1];
        imgData.data[dstIdx + 2] = buffer[srcIdx + 2];
        imgData.data[dstIdx + 3] = 255;
      }
    }
    
    tempCtx.putImageData(imgData, 0, 0);
    
    // Draw directly onto result canvas
    ctx.drawImage(tempCanvas, 0, 0, outW, outH);
    
    return {
      elapsedSeconds: elapsed,
      totalDrift: this.totalDrift,
      hasMotionBlur,
      dataUrl: this.resultCanvas.toDataURL('image/jpeg', 0.92),
    };
  }

  /** Generate realistic Dark frame: lens cap on, thermal noise + hot pixels */
  private generateDarkFrame(ctx: CanvasRenderingContext2D, w: number, h: number, elapsed: number) {
    const imgData = ctx.createImageData(w, h);
    const noiseLevel = Math.min(25, 4 + elapsed * 0.4);
    
    // 1. CMOS thermal background noise
    for (let i = 0; i < imgData.data.length; i += 4) {
      const n = Math.floor(Math.random() * noiseLevel);
      imgData.data[i] = n;     // R
      imgData.data[i + 1] = n; // G
      imgData.data[i + 2] = n + Math.floor(Math.random() * 3); // B
      imgData.data[i + 3] = 255;
    }
    
    // 2. Hot pixels (常駐熱噪壞點: 隨機幾十個亮紅/綠/白像素)
    const hotPixelCount = Math.floor(35 + elapsed * 2.5);
    for (let k = 0; k < hotPixelCount; k++) {
      const x = Math.floor(Math.random() * w);
      const y = Math.floor(Math.random() * h);
      const idx = (y * w + x) * 4;
      const type = Math.random();
      if (type < 0.4) {
        // Red hot pixel
        imgData.data[idx] = 255;
        imgData.data[idx + 1] = 40;
        imgData.data[idx + 2] = 40;
      } else if (type < 0.7) {
        // Green hot pixel
        imgData.data[idx] = 40;
        imgData.data[idx + 1] = 255;
        imgData.data[idx + 2] = 40;
      } else {
        // White saturated hot pixel
        imgData.data[idx] = 255;
        imgData.data[idx + 1] = 255;
        imgData.data[idx + 2] = 255;
      }
    }
    
    ctx.putImageData(imgData, 0, 0);
  }

  /** Generate realistic Flat frame: even light source with lens vignetting & dust donuts */
  private generateFlatFrame(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.sqrt(cx * cx + cy * cy);
    
    // 1. Base even illuminated field with radial optical vignetting (cos^4 falloff)
    const grad = ctx.createRadialGradient(cx, cy, maxR * 0.1, cx, cy, maxR);
    grad.addColorStop(0, '#e2e8f0');
    grad.addColorStop(0.5, '#cbd5e1');
    grad.addColorStop(0.85, '#94a3b8');
    grad.addColorStop(1.0, '#64748b'); // ~35% vignetting falloff at corners
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    
    // 2. Dust donuts (鏡片光學灰塵斑圈: 圓環形微弱暗斑)
    const dustPositions = [
      { x: cx * 0.65, y: cy * 0.7, r: 18 },
      { x: cx * 1.35, y: cy * 1.25, r: 24 },
      { x: cx * 1.1, y: cy * 0.45, r: 14 }
    ];
    
    for (const d of dustPositions) {
      const dGrad = ctx.createRadialGradient(d.x, d.y, d.r * 0.5, d.x, d.y, d.r);
      dGrad.addColorStop(0, 'rgba(71, 85, 105, 0.25)');
      dGrad.addColorStop(0.8, 'rgba(100, 116, 139, 0.4)');
      dGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = dGrad;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /** Generate realistic Bias frame: sensor readout offset pattern */
  private generateBiasFrame(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const imgData = ctx.createImageData(w, h);
    
    for (let y = 0; y < h; y++) {
      // Subtle horizontal CMOS readout banding
      const band = Math.sin(y * 0.15) * 1.5;
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4;
        const val = Math.max(0, Math.min(255, 12 + band + (Math.random() - 0.5) * 6));
        imgData.data[idx] = val;
        imgData.data[idx + 1] = val;
        imgData.data[idx + 2] = val;
        imgData.data[idx + 3] = 255;
      }
    }
    
    ctx.putImageData(imgData, 0, 0);
  }

  public getResultAsDataUrl(): string {
    return this.resultCanvas.toDataURL('image/jpeg', 0.90);
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
