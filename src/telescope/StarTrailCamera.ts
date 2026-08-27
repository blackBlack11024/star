import * as THREE from 'three';
import { gameStore } from '../game/GameStore';
import { GameMode, Photo, PhotoQuality, TargetType } from '../types';

export const StarTrailShader = {
  uniforms: {
    tDiffuse: { value: null },
    tAccum: { value: null },
    uActive: { value: 0.0 },
    uFirstFrame: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform sampler2D tAccum;
    uniform float uActive;
    uniform float uFirstFrame;
    varying vec2 vUv;

    void main() {
      vec4 curr = texture2D(tDiffuse, vUv);
      if (uActive < 0.5 || uFirstFrame > 0.5) {
        gl_FragColor = curr;
        return;
      }
      vec4 acc = texture2D(tAccum, vUv);
      // Max-Hold: preserves pure dark night sky, traces bright star arcs
      gl_FragColor = max(curr, acc);
    }
  `
};

export class StarTrailCamera {
  private renderer: THREE.WebGLRenderer;
  private width: number;
  private height: number;

  private accumTargetA: THREE.WebGLRenderTarget;
  private accumTargetB: THREE.WebGLRenderTarget;
  private bufferIdx = 0;

  private copyScene: THREE.Scene;
  private copyCamera: THREE.OrthographicCamera;
  private copyMaterial: THREE.MeshBasicMaterial;
  private copyQuad: THREE.Mesh;

  private isExposing = false;
  private isFirstFrame = true;
  private startTime = 0;
  private sampleCount = 0;

  // Key tracking
  private isHoldingT = false;
  private isHoldingR = false;
  private currentTimeScale = 60;
  private savedTimeScale = 1;

  // UI Viewfinder
  private overlay: HTMLElement | null = null;
  private speedLabel: HTMLElement | null = null;
  private timeLabel: HTMLElement | null = null;

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

    this.accumTargetA = new THREE.WebGLRenderTarget(width, height, rtOptions);
    this.accumTargetB = new THREE.WebGLRenderTarget(width, height, rtOptions);

    this.copyScene = new THREE.Scene();
    this.copyCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.copyMaterial = new THREE.MeshBasicMaterial({ depthTest: false, depthWrite: false });
    this.copyQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.copyMaterial);
    this.copyScene.add(this.copyQuad);

    this.createViewfinderUI();
  }

  private createViewfinderUI() {
    const parent = document.getElementById('ui-overlay');
    if (!parent) return;

    this.overlay = document.createElement('div');
    this.overlay.className = 'star-trail-viewfinder';
    this.overlay.style.display = 'none';

    this.overlay.innerHTML = `
      <div class="st-corners">
        <span class="st-corner tl"></span>
        <span class="st-corner tr"></span>
        <span class="st-corner bl"></span>
        <span class="st-corner br"></span>
      </div>
      <div class="st-header">
        <span class="st-rec-dot"></span>
        <span class="st-title">星軌專用相機 · 曝光累積中</span>
      </div>
      <div class="st-bottom">
        <div class="st-speed" id="st-speed-text">時間流速: 60x</div>
        <div class="st-exposure" id="st-time-text">曝光累積: 0.0s</div>
        <div class="st-hints">按住 [T] 持續加速 · 按住 [R] 減速 · 放開自動存入照片庫</div>
      </div>
    `;

    parent.appendChild(this.overlay);
    this.speedLabel = this.overlay.querySelector('#st-speed-text');
    this.timeLabel = this.overlay.querySelector('#st-time-text');
  }

  public isEquipped(): boolean {
    const state = gameStore.getState();
    const completedIds: string[] = state.completedQuestIds || [];

    // If player has completed the quest, automatically unlock and equip
    if (completedIds.includes('ch5_all_planets') || completedIds.includes('ch6_southern_wonders') || completedIds.includes('ch5_mount_laser')) {
      const acc = (state.accessories || []).find((a: any) => a.id === 'camera_startrail');
      if (acc && (!acc.owned || acc.equipped === false)) {
        state.unlockAccessory('camera_startrail');
      }
      return true;
    }

    return (state.accessories || []).some(
      (a: any) => a.id === 'camera_startrail' && a.owned && a.equipped !== false
    );
  }

  public get active(): boolean {
    return this.isExposing;
  }

  public onKeyDown(key: 'T' | 'R') {
    if (!this.isEquipped()) return;
    const state = gameStore.getState();
    if (state.gameMode !== GameMode.Walk) return;

    if (key === 'T') this.isHoldingT = true;
    if (key === 'R') this.isHoldingR = true;

    if (!this.isExposing) {
      this.startExposure();
    }
  }

  public onKeyUp(key: 'T' | 'R') {
    if (key === 'T') this.isHoldingT = false;
    if (key === 'R') this.isHoldingR = false;

    // When both T and R are released, automatically finish and save to gallery!
    if (this.isExposing && !this.isHoldingT && !this.isHoldingR) {
      this.finishExposure();
    }
  }

  private startExposure() {
    this.isExposing = true;
    this.isFirstFrame = true;
    this.startTime = performance.now();
    this.sampleCount = 0;
    this.savedTimeScale = gameStore.getState().timeScale || 1;
    this.currentTimeScale = 60;

    // Reset render targets
    this.renderer.setRenderTarget(this.accumTargetA);
    this.renderer.clear();
    this.renderer.setRenderTarget(this.accumTargetB);
    this.renderer.clear();
    this.renderer.setRenderTarget(null);
    this.bufferIdx = 0;

    if (this.overlay) this.overlay.style.display = 'block';
    gameStore.getState().setTimeScale(this.currentTimeScale);
  }

  public update(deltaTime: number) {
    if (!this.isExposing) return;

    this.sampleCount++;

    // Accelerate smoothly while holding T (up to 7200x)
    if (this.isHoldingT) {
      const growthRate = 2.5;
      this.currentTimeScale = Math.min(7200, this.currentTimeScale * Math.pow(growthRate, deltaTime));
    }
    // Decelerate smoothly while holding R (down to 1x)
    if (this.isHoldingR) {
      const decayRate = 0.3;
      this.currentTimeScale = Math.max(1, this.currentTimeScale * Math.pow(decayRate, deltaTime));
    }

    gameStore.getState().setTimeScale(Math.round(this.currentTimeScale));

    const elapsed = (performance.now() - this.startTime) / 1000;
    if (this.speedLabel) {
      this.speedLabel.textContent = `時間流速: ${Math.round(this.currentTimeScale)}x`;
    }
    if (this.timeLabel) {
      const simMinutes = (elapsed * this.currentTimeScale) / 60;
      this.timeLabel.textContent = `曝光時間: ${elapsed.toFixed(1)}s (天球自轉約 ${simMinutes >= 60 ? (simMinutes / 60).toFixed(1) + ' 小時' : simMinutes.toFixed(0) + ' 分鐘'})`;
    }
  }

  public beforeRenderPass(starTrailPass: any) {
    if (!starTrailPass) return;
    const currentAccum = this.bufferIdx === 0 ? this.accumTargetA : this.accumTargetB;

    starTrailPass.uniforms.uActive.value = this.isExposing ? 1.0 : 0.0;
    starTrailPass.uniforms.uFirstFrame.value = this.isFirstFrame ? 1.0 : 0.0;
    starTrailPass.uniforms.tAccum.value = currentAccum.texture;
  }

  public afterRenderPass(composerTexture: THREE.Texture) {
    if (!this.isExposing) return;

    const nextAccum = this.bufferIdx === 0 ? this.accumTargetB : this.accumTargetA;
    this.copyMaterial.map = composerTexture;
    this.copyMaterial.needsUpdate = true;

    const prevTarget = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(nextAccum);
    this.renderer.render(this.copyScene, this.copyCamera);
    this.renderer.setRenderTarget(prevTarget);

    this.bufferIdx = 1 - this.bufferIdx;
    this.isFirstFrame = false;
  }

  private finishExposure() {
    if (!this.isExposing) return;
    this.isExposing = false;

    if (this.overlay) this.overlay.style.display = 'none';

    // Trigger visual shutter flash
    this.triggerShutterFlash();

    // Play camera shutter sound
    document.dispatchEvent(new CustomEvent('play-shutter-sound'));

    // Export accumulated photo
    const state = gameStore.getState();
    const finalTarget = this.bufferIdx === 0 ? this.accumTargetA : this.accumTargetB;
    const buffer = new Uint8Array(this.width * this.height * 4);
    this.renderer.readRenderTargetPixels(finalTarget, 0, 0, this.width, this.height, buffer);

    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d');

    if (ctx && this.sampleCount > 3) {
      const imgData = ctx.createImageData(this.width, this.height);
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
      ctx.putImageData(imgData, 0, 0);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      const locName = state.currentLocation?.name || '合歡山';
      const elapsed = (performance.now() - this.startTime) / 1000;

      const photo: Photo = {
        id: `photo_startrail_${Date.now()}`,
        imageDataUrl: dataUrl,
        timestamp: new Date(),
        locationId: state.currentLocation?.id || 'hehuanshan',
        targetName: `${locName} · 璀璨同心圓星軌光跡`,
        targetType: TargetType.SpecialEvent,
        exposureSeconds: parseFloat(elapsed.toFixed(1)),
        telescopeLevel: state.telescopeLevel || 1,
        weatherCondition: state.weather,
        quality: PhotoQuality.S,
        score: 96,
        sellPrice: 2400,
        sold: false,
        frameType: 'light',
        hasMotionBlur: false,
        equipmentTags: ['星軌相機', '戶外廣角', '同心圓星軌'],
      };

      state.addPhoto(photo);

      document.dispatchEvent(
        new CustomEvent('show-notification', {
          detail: {
            message: `星軌攝影完成！已自動存入照片庫 (S級「${photo.targetName}」· 售價 $${photo.sellPrice})`,
            type: 'success',
          },
        })
      );
    }

    // Restore original normal time
    state.setTimeScale(this.savedTimeScale || 1);
  }

  private triggerShutterFlash() {
    const flash = document.createElement('div');
    flash.className = 'st-flash-effect';
    document.body.appendChild(flash);
    setTimeout(() => {
      flash.classList.add('fade');
      setTimeout(() => flash.remove(), 250);
    }, 20);
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.accumTargetA.setSize(width, height);
    this.accumTargetB.setSize(width, height);
  }

  public dispose() {
    if (this.overlay) this.overlay.remove();
    this.accumTargetA.dispose();
    this.accumTargetB.dispose();
    this.copyQuad.geometry.dispose();
    this.copyMaterial.dispose();
  }
}
