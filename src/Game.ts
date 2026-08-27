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
import { PlanetarySystem } from './astronomy/PlanetarySystem';
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
import { BinocularsMode } from './telescope/BinocularsMode';
import { PhotoManager } from './game/PhotoManager';
import { QuestManager } from './game/QuestManager';
import { EconomySystem } from './game/EconomySystem';
import { HUD } from './ui/HUD';
import { TelescopeHUD } from './ui/TelescopeHUD';
import { StudioUI } from './ui/StudioUI';
import { CodexUI } from './ui/CodexUI';
import { PhotoLightbox } from './ui/PhotoLightbox';
import { StoryDialogue } from './ui/StoryDialogue';
import { MenuSystem } from './ui/MenuSystem';
import { FinderUI } from './ui/FinderUI';
import { getTelescopeConfig } from './data/telescopes';
import { LaserPointer } from './astronomy/LaserPointer';
import { SpaceStation } from './astronomy/SpaceStation';
import { MeteorSystem } from './environment/MeteorSystem';

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
  private planetarySystem!: PlanetarySystem;
  private spaceStation!: SpaceStation;
  private meteorSystem!: MeteorSystem;
  private laserPointer!: LaserPointer;

  private atmosphere!: AtmosphereManager;
  private timeManager!: TimeManager;
  private weatherSystem!: WeatherSystem;
  private cloudLayer!: CloudLayer;
  private rainEffect!: RainEffect;
  private audioManager!: AudioManager;

  private playerController!: PlayerController;
  private binocularsMode!: BinocularsMode;
  private terrain!: Terrain;
  private telescopeModel!: TelescopeModel;
  private studio!: Studio;

  private telescopeOptics!: TelescopeOptics;
  private longExposure!: LongExposure;
  private postProcessing!: PostProcessing;

  private photoManager!: PhotoManager;
  private questManager!: QuestManager;
  private economySystem!: EconomySystem;

  // ---- UI ----
  private hud!: HUD;
  private telescopeHUD!: TelescopeHUD;
  private studioUI!: StudioUI;
  private codexUI!: CodexUI;
  private photoLightbox!: PhotoLightbox;
  private storyDialogue!: StoryDialogue;
  private menuSystem!: MenuSystem;
  private finderUI!: FinderUI;

  // GoTo auto-slew animation state
  private isGoToSlewing = false;
  private goToStartRa = 0;
  private goToStartDec = 0;
  private goToTargetRa = 0;
  private goToTargetDec = 0;
  private goToStartTime = 0;
  private goToDuration = 1800; // ms
  private goToTargetName = '';

  // ---- State ----
  private isRunning = false;
  private sunElevation = 0;
  private animationFrameId = 0;
  private savedWalkPos = new THREE.Vector3(0, 1.7, 0);
  private savedWalkRot = new THREE.Euler();
  private savedTelescopeFov = 20.0;
  private lastIdentifiedTarget: any = null;

  constructor() {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

    // ---- Solar System Planets & Moon ----
    progress(0.28, '正在計算太陽系行星與月球軌道...');
    this.planetarySystem = new PlanetarySystem(this.celestialSphere.group);

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
    progress(0.65, '正在初始化控制器與雙筒望遠鏡...');
    this.playerController = new PlayerController(this.camera, this.renderer.domElement, this.scene);
    this.binocularsMode = new BinocularsMode(this.camera, this.renderer.domElement);

    // ---- Space Station, Meteors & Laser Pointer ----
    this.spaceStation = new SpaceStation(this.scene);
    this.meteorSystem = new MeteorSystem(this.scene);
    this.laserPointer = new LaserPointer(
      this.scene,
      this.camera,
      this.starIdentifier,
      () => this.planetarySystem.getPlanets(),
      this.celestialSphere,
      () => this.telescopeModel.getPosition(),
      () => this.telescopeModel.getOpticalDirection()
    );

    // ---- Telescope optics ----
    progress(0.7, '正在校準望遠鏡光學...');
    this.telescopeOptics = new TelescopeOptics();
    this.playerController.setOptics(this.telescopeOptics);
    this.longExposure = new LongExposure(
      this.renderer,
      window.innerWidth,
      window.innerHeight,
    );
    this.postProcessing = new PostProcessing(this.renderer, this.scene, this.camera);

    // ---- Game systems ----
    progress(0.8, '正在載入遊戲與任務系統...');
    this.photoManager = new PhotoManager();
    this.questManager = new QuestManager();
    this.economySystem = new EconomySystem();

    // ---- UI ----
    progress(0.85, '正在建立介面與圖鑑...');
    this.hud = new HUD();
    this.telescopeHUD = new TelescopeHUD();
    this.studioUI = new StudioUI();
    this.codexUI = new CodexUI();
    this.photoLightbox = new PhotoLightbox();
    this.storyDialogue = new StoryDialogue();
    this.menuSystem = new MenuSystem();
    this.finderUI = new FinderUI();

    // ---- Wire up interactions ----
    this.setupInteractions();
    this.savedTelescopeFov = gameStore.getState().currentFov || 20.0;

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

    // If first time playing, show Chapter 0 intro dialogue
    const firstQuest = this.questManager.getNextQuest();
    if (firstQuest && (gameStore.getState().completedQuestIds || []).length === 0 && (gameStore.getState().photos || []).length === 0) {
      setTimeout(() => {
        this.storyDialogue.playIntroDialogue(firstQuest);
      }, 1500);
    }

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

    // ---- Star rendering & Optics-dependent limiting magnitude ----
    const telescopeConfig = getTelescopeConfig(state.telescopeLevel);
    const isTelescope = state.gameMode === GameMode.Telescope;
    const currentCameraFov = isTelescope ? state.currentFov : this.camera.fov;
    const lightPollution = loc.lightPollution || 0;

    let effectiveLimitingMag = 4.85;
    if (isTelescope) {
      // Telescope Mode (Level 1: 10.0, Level 2: 11.5, Level 3: 12.8, Level 4: 13.5, Level 5: 14.8)
      effectiveLimitingMag = telescopeConfig.limitingMagnitude - lightPollution * 1.2;
    } else if (currentCameraFov < 35.0) {
      // 8x42 Binoculars Mode (Hold Right Click): ~8.8 mag (resolves deep sky field)
      effectiveLimitingMag = 8.8 - lightPollution * 1.2;
    } else {
      // Rich Natural Mountain Night Sky Mode (~4.85 mag, ~1,000 sparkling stars, natural constellation canvas)
      effectiveLimitingMag = Math.max(3.8, 4.85 - lightPollution * 1.2);
    }

    this.starField.update(elapsedTime, currentCameraFov, this.sunElevation, effectiveLimitingMag);

    // ---- Deep sky objects & Planetary System ----
    this.deepSkyObjects.update(currentCameraFov, isTelescope, effectiveLimitingMag);
    this.planetarySystem.update(gameTime, currentCameraFov, loc.latitude, loc.longitude);
    const planets = this.planetarySystem.getPlanets();

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
    const skyVec = this.celestialSphere.getRaDecToVector(state.telescopeRa, state.telescopeDec);
    skyVec.applyMatrix4(this.celestialSphere.group.matrixWorld);
    this.telescopeModel.updatePointing(skyVec);

    // ---- Player controller & Binoculars smooth zoom ----
    this.playerController.update(deltaTime);
    this.binocularsMode.update(deltaTime);

    // ---- Space Station, Meteors & Laser Pointer ----
    this.spaceStation.update(deltaTime, state.currentFov, loc.latitude, this.sunElevation);
    this.meteorSystem.update(deltaTime, this.camera, this.sunElevation);
    this.laserPointer.update();

    // ---- GoTo Auto-Slewing Interpolation ----
    if (this.isGoToSlewing) {
      const elapsed = performance.now() - this.goToStartTime;
      const progress = Math.min(1.0, elapsed / this.goToDuration);
      // Smooth cosine easing
      const t = (1 - Math.cos(progress * Math.PI)) / 2;
      
      let dRa = this.goToTargetRa - this.goToStartRa;
      while (dRa > 12) dRa -= 24;
      while (dRa < -12) dRa += 24;
      
      let curRa = (this.goToStartRa + dRa * t) % 24;
      if (curRa < 0) curRa += 24;
      const curDec = Math.max(-89.5, Math.min(89.5, this.goToStartDec + (this.goToTargetDec - this.goToStartDec) * t));
      
      gameStore.getState().setTelescopePointing(curRa, curDec);

      if (progress >= 1.0) {
        this.isGoToSlewing = false;
        this.hud.showNotification(`GoTo 就緒：已對準 ${this.goToTargetName}`, 'success');
      }
    }

    // ---- Telescope mode logic ----
    if (state.gameMode === GameMode.Telescope) {
      // Position camera at optical center
      this.camera.position.set(0, 0.2, 0);

      const raRad = state.telescopeRa * Math.PI / 12;
      const decRad = state.telescopeDec * Math.PI / 180;
      const cosDec = Math.cos(decRad);
      const sinDec = Math.sin(decRad);
      const cosRa = Math.cos(raRad);
      const sinRa = Math.sin(raRad);

      // Local celestial orthonormal basis:
      // Forward: direction pointing at (RA, Dec)
      const uForward = new THREE.Vector3(cosDec * cosRa, sinDec, cosDec * sinRa);
      // Right: Eastward along celestial equator
      const uRight = new THREE.Vector3(-sinRa, 0, cosRa);
      // Up: Northward along celestial meridian towards North Celestial Pole
      const uUp = new THREE.Vector3(-sinDec * cosRa, cosDec, -sinDec * sinRa);

      // Transform celestial basis to world space
      const cMatrix = this.celestialSphere.group.matrixWorld;
      const wForward = uForward.clone().transformDirection(cMatrix).normalize();
      const wRight = uRight.clone().transformDirection(cMatrix).normalize();
      const wUp = uUp.clone().transformDirection(cMatrix).normalize();

      const hasEquatorialMount = this.telescopeOptics.hasAccessory('mount_eq') || this.telescopeOptics.hasAccessory('mount_goto');

      const camBasisMatrix = new THREE.Matrix4();
      // Eyepiece aligns with telescope optical axes (RA horizontal, Dec vertical)
      // Perfectly smooth rotation across all angles without gimbal lock or polar snap
      camBasisMatrix.makeBasis(wRight, wUp, wForward.clone().negate());

      this.camera.quaternion.setFromRotationMatrix(camBasisMatrix);
      this.camera.fov = state.currentFov;
      this.camera.updateProjectionMatrix();
      this.camera.updateMatrixWorld(true);

      // Star, Planet & Space Station identification (filtered by horizon)
      const identified = this.starIdentifier.identify(
        state.telescopeRa, state.telescopeDec, state.currentFov, this.celestialSphere, planets, this.spaceStation.getCurrentPassData()
      );
      this.lastIdentifiedTarget = identified;

      // Long exposure accumulation
      if (state.isExposing) {
        // Render scene to offscreen target and accumulate with telescope drift tracking
        const expGain = this.telescopeOptics.getExposureGain();
        const driftMitigation = this.telescopeOptics.getMountDriftMitigation();
        const timeScale = state.timeScale || 1.0;
        this.longExposure.accumulate(
          this.scene,
          this.camera,
          expGain,
          state.telescopeRa,
          state.telescopeDec,
          driftMitigation,
          hasEquatorialMount,
          timeScale,
          state.currentFov
        );
        const elapsed = this.longExposure.getElapsedSeconds();
        state.updateExposureElapsed(elapsed);
      }

      // Update telescope HUD
      this.telescopeHUD.update(
        identified,
        state.isExposing,
        this.longExposure.getElapsedSeconds(),
        this.longExposure.getSampleCount(),
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

    // ---- UI & 3D Waypoints & Quest Tracker ----
    this.hud.update(state);
    this.hud.updateWaypoints(this.camera, this.telescopeModel.getPosition(), this.studio.getPosition());
    this.hud.updateQuestTracker(this.questManager.getNextQuest());
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

    // Quest completion event with story dialogue
    document.addEventListener('quest-completed', (e: any) => {
      const quest = e.detail.quest;
      this.hud.showNotification(`任務完成：${quest.title}！獲得 $${quest.rewards.money || 0}`, 'success');
      this.hud.updateQuestTracker(this.questManager.getNextQuest());

      // Trigger character dialogue
      this.storyDialogue.playCompleteDialogue(quest, () => {
        const nextQuest = this.questManager.getNextQuest();
        if (nextQuest) {
          setTimeout(() => {
            this.storyDialogue.playIntroDialogue(nextQuest);
          }, 800);
        }
      });
    });

    // Replay story dialogue event from Codex
    document.addEventListener('play-story-dialogue', (e: any) => {
      const { quest, mode } = e.detail;
      if (mode === 'complete') {
        this.storyDialogue.playCompleteDialogue(quest);
      } else {
        this.storyDialogue.playIntroDialogue(quest);
      }
    });

    // Custom notification event
    document.addEventListener('show-notification', (e: any) => {
      this.hud.showNotification(e.detail.message, e.detail.type || 'info');
    });

    // Photo lightbox event
    document.addEventListener('open-lightbox', (e: any) => {
      const photos = [...(gameStore.getState().photos || [])]
        .filter((p: any) => !p.frameType || p.frameType === 'light')
        .sort((a: any, b: any) => {
          const tA = a.timestamp instanceof Date ? a.timestamp.getTime() : new Date(a.timestamp).getTime();
          const tB = b.timestamp instanceof Date ? b.timestamp.getTime() : new Date(b.timestamp).getTime();
          return tB - tA;
        });
      const idx = photos.findIndex((p: any) => p.id === e.detail.photoId);
      this.photoLightbox.open(photos, Math.max(0, idx));
    });

    // Photo capture event (Manual Start / Stop Exposure)
    document.addEventListener('capture-photo', () => {
      const state = gameStore.getState();
      if (state.gameMode !== GameMode.Telescope) return;

      if (!state.isExposing) {
        this.longExposure.startExposure(state.currentFrameType || 'light');
        state.startExposure();
        this.audioManager.playShutter();
      } else {
        const planets = this.planetarySystem.getPlanets();
        const hudTarget = this.telescopeHUD.getCurrentIdentifiedTarget();
        const identified = hudTarget || this.lastIdentifiedTarget || this.starIdentifier.identify(
          state.telescopeRa, state.telescopeDec, state.currentFov, this.celestialSphere, planets, this.spaceStation.getCurrentPassData()
        );
        this.finishExposure(identified);
      }
    });

    // Telescope motor sound on slew
    document.addEventListener('telescope-slew', () => {
      this.audioManager.playMotor(0.5);
    });

    // Electronic Finder UI events
    document.addEventListener('toggle-finder-ui', () => {
      this.finderUI.toggle();
    });

    document.addEventListener('goto-target', (e: any) => {
      const { ra, dec, targetName } = e.detail;
      this.startGoToSlew(ra, dec, targetName);
    });
  }

  /** Slew telescope smoothly to target coordinates with motor sound */
  private startGoToSlew(targetRa: number, targetDec: number, targetName: string) {
    const state = gameStore.getState();
    if (state.gameMode !== GameMode.Telescope) {
      state.setGameMode(GameMode.Telescope);
    }
    state.setCustomTrackedDso(targetName);
    this.goToStartRa = state.telescopeRa;
    this.goToStartDec = state.telescopeDec;
    this.goToTargetRa = targetRa;
    this.goToTargetDec = targetDec;
    this.goToTargetName = targetName;
    this.goToStartTime = performance.now();
    this.goToDuration = 1800;
    this.isGoToSlewing = true;
    this.audioManager.playMotor(2.0);
    this.hud.showNotification(`GoTo 自動導星轉向中：正在對準 ${targetName}...`, 'info');
  }

  /** Handle game mode transitions. */
  private onModeChange(from: GameMode, to: GameMode): void {
    if (to === GameMode.Telescope) {
      this.savedWalkPos.copy(this.camera.position);
      this.savedWalkRot.copy(this.camera.rotation);
      this.telescopeModel.setVisible(false);
      this.terrain.setVisible(true);
      this.studio.setVisible(false);

      // Preserve telescope magnification / FOV
      const targetFov = this.savedTelescopeFov || gameStore.getState().currentFov || 20.0;
      gameStore.getState().setFov(targetFov);
      this.camera.fov = targetFov;
      this.camera.updateProjectionMatrix();

      this.telescopeHUD.show();
    } else if (from === GameMode.Telescope) {
      // Remember current telescope magnification before exiting
      this.savedTelescopeFov = gameStore.getState().currentFov;
      this.camera.position.copy(this.savedWalkPos);
      this.camera.rotation.copy(this.savedWalkRot);

      // Restore camera FOV for Walk mode (98° wide-angle if lying down, else 60°)
      this.camera.fov = gameStore.getState().isLyingDown ? 98 : 60;
      this.camera.updateProjectionMatrix();

      // Keep telescope's saved magnification in store and savedTelescopeFov (do NOT call setFov(60))
      this.telescopeModel.setVisible(true);
      this.terrain.setVisible(true);
      this.studio.setVisible(true);
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
    const result = this.longExposure.finishExposure();
    state.stopExposure();

    // Determine target info
    const targetName = identified?.name || '未知星野';
    const targetType = identified?.type || 'star_field';

    const hasMeteor = this.meteorSystem.wasMeteorCaptured();
    const targetPayload = identified
      ? { ...identified, difficulty: (identified as any).difficulty || 1, hasMeteor }
      : { name: targetName, type: targetType, difficulty: 1, hasMeteor };

    // Capture and score the photo with true accumulated data URL and drift metrics
    const photo = this.photoManager.capturePhoto(
      this.renderer, this.scene, this.camera,
      targetPayload,
      result.elapsedSeconds,
      result.dataUrl,
      result.hasMotionBlur,
      result.totalDrift,
      state.currentFrameType || 'light'
    );

    this.audioManager.playShutter();
    const typeNames: Record<string, string> = {
      dark: '暗場校準底片',
      flat: '平場校準底片',
      bias: '偏壓校準底片',
      light: '天文照片',
    };
    const label = typeNames[state.currentFrameType || 'light'] || '照片';
    this.hud.showNotification(`${label}已儲存: ${photo.targetName}（曝光 ${result.elapsedSeconds.toFixed(1)} 秒 · ${photo.quality}級）`, 'success');
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
    this.planetarySystem.dispose();
    this.atmosphere.dispose();
    this.cloudLayer.dispose();
    this.rainEffect.dispose();
    this.audioManager.dispose();
    this.terrain.dispose();
    this.telescopeModel.dispose();
    this.studio.dispose();
    this.playerController.dispose();
    this.binocularsMode.dispose();
    this.longExposure.dispose();
    this.postProcessing.dispose();
    this.hud.dispose();
    this.telescopeHUD.dispose();
    this.studioUI.dispose();
    this.codexUI.dispose();
    this.photoLightbox.dispose();
    this.storyDialogue.dispose();
    this.menuSystem.dispose();
    this.finderUI.dispose();
    this.renderer.dispose();
  }
}
