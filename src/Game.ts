// ============================================================
// Stargazer Simulator — Main Game Orchestrator
// ============================================================
import * as THREE from 'three';
import { gameStore } from './game/GameStore';
import { GameMode, WeatherState } from './types';

// Systems
import { StarField } from './rendering/StarField';
import { CelestialSphere } from './astronomy/CelestialSphere';
import { Constellations } from './astronomy/Constellations';
import { StarIdentifier } from './astronomy/StarIdentifier';
import { DeepSkyObjects } from './astronomy/DeepSkyObjects';
import { AtmosphereManager } from './environment/AtmosphereManager';
import { TimeManager } from './environment/TimeManager';
import { WeatherSystem } from './environment/WeatherSystem';
import { CloudLayer } from './environment/CloudLayer';
import { RainEffect } from './environment/RainEffect';
import { AudioManager } from './environment/AudioManager';
import { PlayerController } from './controls/PlayerController';
import { Terrain } from './world/Terrain';
import { TelescopeModel } from './world/TelescopeModel';
import { Studio } from './world/Studio';
import { TelescopeOptics } from './telescope/TelescopeOptics';
import { LongExposure } from './telescope/LongExposure';
import { PostProcessing } from './telescope/PostProcessing';
import { PhotoManager } from './game/PhotoManager';
import { EconomySystem } from './game/EconomySystem';
import { HUD } from './ui/HUD';
import { TelescopeHUD } from './ui/TelescopeHUD';
import { StudioUI } from './ui/StudioUI';
import { MenuSystem } from './ui/MenuSystem';
import { getTelescopeConfig } from './data/telescopes';

type ProgressCallback = (pct: number, text: string) => void;

export class Game {
  // ---- Three.js core ----
  public renderer!: THREE.WebGLRenderer;
  public scene!: THREE.Scene;
  public camera!: THREE.PerspectiveCamera;
  private clock = new THREE.Clock(false);

  // ---- Systems ----
  private starField!: StarField;
  private celestialSphere!: CelestialSphere;
  private constellations!: Constellations;
  private starIdentifier!: StarIdentifier;
  private deepSkyObjects!: DeepSkyObjects;

  private atmosphere!: AtmosphereManager;
  private timeManager!: TimeManager;
  private weatherSystem!: WeatherSystem;
  private cloudLayer!: CloudLayer;
  private rainEffect!: RainEffect;
  private audioManager!: AudioManager;

  private playerController!: PlayerController;
  private terrain!: Terrain;
  private telescopeModel!: TelescopeModel;
  private studio!: Studio;

  private telescopeOptics!: TelescopeOptics;
  private longExposure!: LongExposure;
  private postProcessing!: PostProcessing;

  private photoManager!: PhotoManager;
  private economySystem!: EconomySystem;

  // ---- UI ----
  private hud!: HUD;
  private telescopeHUD!: TelescopeHUD;
  private studioUI!: StudioUI;
  private menuSystem!: MenuSystem;

  // ---- State ----
  private isRunning = false;
  private sunElevation = 0;
  private animationFrameId = 0;
  private savedWalkPos = new THREE.Vector3(0, 1.7, 0);
  private savedWalkRot = new THREE.Euler();

  constructor() {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.9;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500000,
    );
    this.camera.position.set(0, 1.7, 0);

    window.addEventListener('resize', this.onResize.bind(this));
  }

  /** Initialize all game systems. */
  async init(progress: ProgressCallback): Promise<void> {
    // ---- Star rendering ----
    progress(0, '正在載入星表數據...');
    this.starField = new StarField(this.scene);
    await this.starField.loadStars();

    // ---- Celestial sphere ----
    progress(0.15, '正在建構天球...');
    this.celestialSphere = new CelestialSphere(this.scene);
    // Add star group into celestial sphere so it rotates together
    this.celestialSphere.group.add(this.starField.getStarGroup());

    // ---- Constellations ----
    progress(0.2, '正在繪製星座...');
    this.constellations = new Constellations(this.celestialSphere.group);

    // ---- Deep sky objects ----
    progress(0.25, '正在放置深空天體...');
    this.deepSkyObjects = new DeepSkyObjects(this.celestialSphere.group);

    // ---- Star identifier ----
    this.starIdentifier = new StarIdentifier();

    // ---- Atmosphere ----
    progress(0.3, '正在初始化大氣...');
    this.atmosphere = new AtmosphereManager(this.scene);

    // ---- Time ----
    this.timeManager = new TimeManager();

    // ---- Weather ----
    progress(0.4, '正在初始化天氣系統...');
    this.weatherSystem = new WeatherSystem();
    this.cloudLayer = new CloudLayer(this.scene);
    this.rainEffect = new RainEffect(this.scene);

    // ---- Audio ----
    progress(0.5, '正在初始化音效系統...');
    this.audioManager = new AudioManager();

    // ---- World ----
    progress(0.55, '正在建構觀測場景...');
    this.terrain = new Terrain(this.scene);
    this.telescopeModel = new TelescopeModel(this.scene);
    this.studio = new Studio(this.scene);

    // ---- Controls ----
    progress(0.65, '正在初始化控制器...');
    this.playerController = new PlayerController(this.camera, this.renderer.domElement, this.scene);

    // ---- Telescope optics ----
    progress(0.7, '正在校準望遠鏡光學...');
    this.telescopeOptics = new TelescopeOptics();
    this.longExposure = new LongExposure(
      this.renderer,
      window.innerWidth,
      window.innerHeight,
    );
    this.postProcessing = new PostProcessing(this.renderer, this.scene, this.camera);

    // ---- Game systems ----
    progress(0.8, '正在載入遊戲系統...');
    this.photoManager = new PhotoManager();
    this.economySystem = new EconomySystem();

    // ---- UI ----
    progress(0.85, '正在建立介面...');
    this.hud = new HUD();
    this.telescopeHUD = new TelescopeHUD();
    this.studioUI = new StudioUI();
    this.menuSystem = new MenuSystem();

    // ---- Wire up interactions ----
    this.setupInteractions();

    progress(1.0, '初始化完成！');
  }

  /** Start the game loop. */
  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();

    // Initialize audio on first user gesture
    const initAudio = () => {
      this.audioManager.init();
      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
    };
    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);

    this.animate();
  }

  /** Main animation loop. */
  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    const deltaTime = Math.min(this.clock.getDelta(), 0.1);
    const elapsedTime = this.clock.getElapsedTime();
    this.update(deltaTime, elapsedTime);
    this.render();
  };

  /** Update all systems. */
  private update(deltaTime: number, elapsedTime: number): void {
    const state = gameStore.getState();

    // ---- Time ----
    this.timeManager.update(deltaTime);
    const gameTime = state.currentTime;
    const loc = state.currentLocation;

    // ---- Weather ----
    this.weatherSystem.update(deltaTime * state.timeScale);
    const cloudCoverage = this.weatherSystem.getCloudCoverage();

    // ---- Atmosphere (sun/moon) ----
    this.sunElevation = this.atmosphere.update(gameTime, loc.latitude, loc.longitude);
    this.timeManager.setSunElevation(this.sunElevation);

    // ---- Celestial sphere rotation ----
    this.celestialSphere.updateOrientation(loc.latitude, loc.longitude, gameTime);

    // ---- Star rendering ----
    this.starField.update(elapsedTime, state.currentFov, this.sunElevation);

    // ---- Deep sky objects ----
    const telescopeConfig = getTelescopeConfig(state.telescopeLevel);
    this.deepSkyObjects.update(state.currentFov, telescopeConfig.limitingMagnitude);

    // ---- Constellations ----
    this.constellations.update(this.sunElevation);
    if (!state.showConstellations || state.gameMode === GameMode.Studio) {
      this.constellations.setVisible(false);
    }

    // ---- Cloud layer ----
    this.cloudLayer.update(deltaTime, cloudCoverage, new THREE.Vector2(1, 0.5));

    // ---- Rain ----
    const isRaining = state.weather === WeatherState.Rainy;
    this.rainEffect.setVisible(isRaining);
    if (isRaining) {
      this.rainEffect.update(deltaTime, this.camera.position, 1.0);
    }

    // ---- Audio ----
    const sunPhase = this.timeManager.getSunPhase();
    this.audioManager.setAmbientForPhase(sunPhase);
    this.audioManager.setWeatherAudio(state.weather, cloudCoverage);

    // ---- World objects ----
    this.telescopeModel.update(this.camera.position);

    // ---- Player controller ----
    this.playerController.update(deltaTime);

    // ---- Telescope mode logic ----
    if (state.gameMode === GameMode.Telescope) {
      // Position camera at center and point directly at the sky coordinates
      this.camera.position.set(0, 0, 0);
      const skyTarget = this.celestialSphere.getRaDecToVector(state.telescopeRa, state.telescopeDec);
      skyTarget.applyMatrix4(this.celestialSphere.group.matrixWorld);
      this.camera.lookAt(skyTarget);
      this.camera.fov = state.currentFov;
      this.camera.updateProjectionMatrix();

      // Star identification
      const identified = this.starIdentifier.identify(
        state.telescopeRa, state.telescopeDec, state.currentFov,
      );

      // Long exposure accumulation
      if (state.isExposing) {
        // Render scene to offscreen target and accumulate
        this.longExposure.accumulate(this.scene, this.camera, 1.0);
        const progress = this.longExposure.getProgress();
        state.updateExposureProgress(progress);

        // Auto-finish when done
        if (progress >= 1.0) {
          this.finishExposure(identified);
        }
      }

      // Update telescope HUD
      this.telescopeHUD.update(
        identified,
        state.exposureProgress,
        state.isExposing,
        state.currentFov,
        60 / state.currentFov,
        state.telescopeRa,
        state.telescopeDec,
      );
    }

    // ---- Interaction prompts ----
    if (state.gameMode === GameMode.Walk) {
      if (this.telescopeModel.isPlayerNear(this.camera.position)) {
        this.hud.showInteractPrompt('按 E 使用望遠鏡');
      } else if (this.studio.isPlayerNear(this.camera.position)) {
        this.hud.showInteractPrompt('按 F 進入工作室');
      } else {
        this.hud.hideInteractPrompt();
      }
    } else {
      this.hud.hideInteractPrompt();
    }

    // ---- UI & 3D Waypoints ----
    this.hud.update(state);
    this.hud.updateWaypoints(this.camera, this.telescopeModel.getPosition(), this.studio.getPosition());
  }

  /** Render the scene. */
  private render(): void {
    const state = gameStore.getState();
    if (state.gameMode === GameMode.Telescope) {
      const chrAb = this.telescopeOptics.getChromaticAberration();
      this.postProcessing.setTelescopeMode(true, chrAb, this.sunElevation);
    } else {
      this.postProcessing.setTelescopeMode(false, 0, this.sunElevation);
    }
    this.postProcessing.render();
  }

  /** Wire up cross-system interactions. */
  private setupInteractions(): void {
    // Listen for mode changes & audio settings
    gameStore.subscribe((state, prevState) => {
      if (state.gameMode !== prevState.gameMode) {
        this.onModeChange(prevState.gameMode, state.gameMode);
      }
      if (state.masterVolume !== prevState.masterVolume || state.isMuted !== prevState.isMuted) {
        this.audioManager.setMasterVolume(state.isMuted ? 0 : state.masterVolume);
      }
      if (state.ambientVolume !== prevState.ambientVolume) {
        this.audioManager.setCategory('ambient', state.ambientVolume);
      }
      if (state.machineVolume !== prevState.machineVolume) {
        this.audioManager.setCategory('machine', state.machineVolume);
      }
      if (state.weatherVolume !== prevState.weatherVolume) {
        this.audioManager.setCategory('weather', state.weatherVolume);
      }
      if (state.sfxVolume !== prevState.sfxVolume) {
        this.audioManager.setCategory('sfx', state.sfxVolume);
      }
    });

    // Photo capture event
    document.addEventListener('capture-photo', () => {
      const state = gameStore.getState();
      if (state.gameMode !== GameMode.Telescope) return;

      if (!state.isExposing) {
        this.longExposure.startExposure(state.exposureDuration);
        state.startExposure(state.exposureDuration);
        this.audioManager.playShutter();
      } else {
        const identified = this.starIdentifier.identify(
          state.telescopeRa, state.telescopeDec, state.currentFov,
        );
        this.finishExposure(identified);
      }
    });

    // Telescope motor sound on slew
    document.addEventListener('telescope-slew', () => {
      this.audioManager.playMotor(0.5);
    });
  }

  /** Handle game mode transitions. */
  private onModeChange(from: GameMode, to: GameMode): void {
    if (to === GameMode.Telescope) {
      this.savedWalkPos.copy(this.camera.position);
      this.savedWalkRot.copy(this.camera.rotation);
      this.telescopeModel.setVisible(false);
      this.terrain.setVisible(false);
      this.studio.setVisible(false);
      this.telescopeHUD.show();
    } else if (from === GameMode.Telescope) {
      this.telescopeModel.setVisible(true);
      this.terrain.setVisible(true);
      this.studio.setVisible(true);
      this.camera.position.copy(this.savedWalkPos);
      this.camera.rotation.copy(this.savedWalkRot);
      this.camera.fov = 60;
      this.camera.updateProjectionMatrix();
      this.telescopeHUD.hide();
    }

    if (to === GameMode.Studio) {
      this.studioUI.show();
    } else if (from === GameMode.Studio) {
      this.studioUI.hide();
    }
  }

  /** Complete a long exposure and save the photo. */
  private finishExposure(identified: { name: string; type: any; magnitude: number } | null): void {
    const state = gameStore.getState();

    this.longExposure.finishExposure();
    const dataUrl = this.longExposure.getResultAsDataUrl();
    state.stopExposure();

    // Determine target info
    const targetName = identified?.name || '未知星野';
    const targetType = identified?.type || 'star_field';

    // Capture and score the photo
    this.photoManager.capturePhoto(
      this.renderer, this.scene, this.camera,
      { name: targetName, type: targetType, difficulty: 1 },
    );

    this.audioManager.playShutter();
    this.hud.showNotification(`照片已儲存: ${targetName}`, 'success');
  }

  /** Handle window resize. */
  private onResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.postProcessing.resize(width, height);
    this.longExposure.resize(width, height);
  }

  /** Clean up all resources. */
  dispose(): void {
    this.isRunning = false;
    cancelAnimationFrame(this.animationFrameId);
    this.starField.dispose();
    this.deepSkyObjects.dispose();
    this.atmosphere.dispose();
    this.cloudLayer.dispose();
    this.rainEffect.dispose();
    this.audioManager.dispose();
    this.terrain.dispose();
    this.telescopeModel.dispose();
    this.studio.dispose();
    this.playerController.dispose();
    this.longExposure.dispose();
    this.postProcessing.dispose();
    this.hud.dispose();
    this.telescopeHUD.dispose();
    this.studioUI.dispose();
    this.menuSystem.dispose();
    this.renderer.dispose();
  }
}
