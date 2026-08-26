import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';

/**
 * Handles all player input and camera control across game modes.
 */
export class PlayerController {
  private camera: THREE.PerspectiveCamera;
  private canvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private controls: PointerLockControls;

  private moveForward = false;
  private moveBackward = false;
  private moveLeft = false;
  private moveRight = false;
  private isSprinting = false;

  private velocity = new THREE.Vector3();
  private direction = new THREE.Vector3();

  private playerHeight = 1.7;
  private walkSpeed = 5.0;

  private unsubscribe: () => void;
  private crosshair: HTMLElement;
  private telescopeModeOrigin = new THREE.Vector3();

  private exposureCycle = [5, 15, 30, 60, 120, 300];

  constructor(camera: THREE.PerspectiveCamera, canvas: HTMLCanvasElement, scene: THREE.Scene) {
    this.camera = camera;
    this.canvas = canvas;
    this.scene = scene;

    this.controls = new PointerLockControls(this.camera, document.body);
    this.scene.add(this.controls.getObject());
    this.controls.getObject().position.y = this.playerHeight;

    // UI Crosshair
    this.crosshair = document.createElement('div');
    this.crosshair.className = 'crosshair';
    document.getElementById('ui-overlay')?.appendChild(this.crosshair);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onWheel = this.onWheel.bind(this);

    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('wheel', this.onWheel, { passive: false });

    // Prevent browser context menu on right click
    window.addEventListener('contextmenu', (e) => e.preventDefault());

    const isAnyModalActive = () => {
      const codex = document.querySelector('.codex-panel') as HTMLElement | null;
      const lightbox = document.querySelector('.lightbox-overlay') as HTMLElement | null;
      const guide = document.querySelector('.guide-modal') as HTMLElement | null;
      const location = document.querySelector('.location-modal') as HTMLElement | null;
      const timeRev = document.querySelector('.time-reversal-panel') as HTMLElement | null;
      const audio = document.querySelector('.audio-modal') as HTMLElement | null;
      return (
        (codex && codex.style.display !== 'none') ||
        (lightbox && lightbox.style.display !== 'none') ||
        (guide && guide.style.display !== 'none') ||
        (location && location.style.display !== 'none') ||
        (timeRev && timeRev.style.display !== 'none') ||
        (audio && audio.style.display !== 'none')
      );
    };

    // Click to lock pointer in walk or telescope mode (left or right click)
    this.canvas.addEventListener('mousedown', () => {
      if (isAnyModalActive()) return;
      const mode = gameStore.getState().gameMode;
      if ((mode === GameMode.Walk || mode === GameMode.Telescope) && !this.controls.isLocked) {
        this.controls.lock();
      }
    });

    this.unsubscribe = gameStore.subscribe((state, prevState) => {
      if (state.gameMode !== prevState.gameMode) {
        this.handleModeChange(state.gameMode, prevState.gameMode);
      }
    });
  }

  private handleModeChange(newMode: GameMode, oldMode: GameMode) {
    if (newMode === GameMode.Walk) {
      this.crosshair.style.display = 'block';
      if (oldMode === GameMode.Telescope) {
        this.camera.position.copy(this.telescopeModeOrigin);
        this.camera.fov = 60;
        this.camera.updateProjectionMatrix();
      }
    } else if (newMode === GameMode.Telescope) {
      this.crosshair.style.display = 'none';
      this.telescopeModeOrigin.copy(this.camera.position);
      // Auto-lock pointer to hide cursor and enable direct mouse look in telescope view
      setTimeout(() => {
        if (gameStore.getState().gameMode === GameMode.Telescope && !this.controls.isLocked) {
          this.controls.lock();
        }
      }, 50);
    } else if (newMode === GameMode.Studio) {
      this.crosshair.style.display = 'none';
      this.controls.unlock();
    }
  }

  private onKeyDown(event: KeyboardEvent) {
    const state = gameStore.getState();
    const mode = state.gameMode;

    if (mode === GameMode.Walk) {
      switch (event.code) {
        case 'KeyW': this.moveForward = true; break;
        case 'KeyA': this.moveLeft = true; break;
        case 'KeyS': this.moveBackward = true; break;
        case 'KeyD': this.moveRight = true; break;
        case 'ShiftLeft':
        case 'ShiftRight': this.isSprinting = true; break;
        case 'KeyE':
          state.setGameMode(GameMode.Telescope);
          break;
        case 'KeyF':
          state.setGameMode(GameMode.Studio);
          break;
      }
    } else if (mode === GameMode.Telescope) {
      switch (event.code) {
        case 'Escape':
          state.setGameMode(GameMode.Walk);
          break;
        case 'Space':
          document.dispatchEvent(new CustomEvent('capture-photo'));
          break;
        case 'KeyE': {
          const idx = this.exposureCycle.indexOf(state.exposureDuration);
          const next = this.exposureCycle[(idx + 1) % this.exposureCycle.length];
          gameStore.setState({ exposureDuration: next });
          break;
        }
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          this.handleTelescopeSlew(event.code);
          document.dispatchEvent(new CustomEvent('telescope-slew'));
          break;
      }
    } else if (mode === GameMode.Studio) {
      if (event.code === 'Escape') {
        state.setGameMode(GameMode.Walk);
      }
    }

    // ---- Global shortcuts ----
    switch (event.code) {
      case 'Digit1': state.setTimeScale(1); break;
      case 'Digit2': state.setTimeScale(10); break;
      case 'Digit3': state.setTimeScale(60); break;
      case 'Digit4': state.setTimeScale(300); break;
      case 'Digit5': state.setTimeScale(1000); break;
      case 'KeyP': state.toggleTimePause(); break;
      case 'KeyC': state.toggleConstellations(); break;
      case 'KeyN': state.toggleStarNames(); break;
      case 'KeyM': state.toggleMute(); break;
      case 'KeyU':
      case 'KeyH': state.toggleUIVisibility(); break;
    }
  }

  private handleTelescopeSlew(key: string) {
    const state = gameStore.getState();
    const fovFactor = state.currentFov / 60;
    const delta = 0.5 * fovFactor;
    let ra = state.telescopeRa;
    let dec = state.telescopeDec;

    if (key === 'ArrowUp') dec += delta;
    if (key === 'ArrowDown') dec -= delta;
    if (key === 'ArrowLeft') ra -= delta / 15; // RA is in hours
    if (key === 'ArrowRight') ra += delta / 15;

    dec = Math.max(-90, Math.min(90, dec));
    if (ra < 0) ra += 24;
    if (ra >= 24) ra -= 24;

    state.setTelescopePointing(ra, dec);
  }

  private onKeyUp(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyW': this.moveForward = false; break;
      case 'KeyA': this.moveLeft = false; break;
      case 'KeyS': this.moveBackward = false; break;
      case 'KeyD': this.moveRight = false; break;
      case 'ShiftLeft':
      case 'ShiftRight': this.isSprinting = false; break;
    }
  }

  private onMouseMove(event: MouseEvent) {
    const mode = gameStore.getState().gameMode;
    if (mode === GameMode.Telescope) {
      // Slew if pointer is locked or user is dragging mouse
      if (this.controls.isLocked || event.buttons > 0) {
        const state = gameStore.getState();
        const fovFactor = state.currentFov / 60;
        
        // Right-click: Micro precision slew (0.25x); Normal: 1.0x
        const speedMultiplier = event.buttons === 2 ? 0.25 : 1.0;
        
        let ra = state.telescopeRa;
        let dec = state.telescopeDec;

        ra -= event.movementX * 0.0018 * fovFactor * speedMultiplier;
        dec += event.movementY * 0.025 * fovFactor * speedMultiplier;

        dec = Math.max(-90, Math.min(90, dec));
        if (ra < 0) ra += 24;
        if (ra >= 24) ra -= 24;

        state.setTelescopePointing(ra, dec);
        if (Math.abs(event.movementX) > 2 || Math.abs(event.movementY) > 2) {
          document.dispatchEvent(new CustomEvent('telescope-slew'));
        }
      }
    }
  }

  private onWheel(event: WheelEvent) {
    const state = gameStore.getState();
    if (state.gameMode === GameMode.Telescope) {
      event.preventDefault();
      let fov = state.currentFov;
      fov *= event.deltaY > 0 ? 1.1 : 0.9;
      fov = Math.max(0.2, Math.min(60, fov));
      state.setFov(fov);
    }
  }

  public update(deltaTime: number) {
    const mode = gameStore.getState().gameMode;
    if (mode === GameMode.Walk && this.controls.isLocked) {
      this.velocity.x -= this.velocity.x * 10.0 * deltaTime;
      this.velocity.z -= this.velocity.z * 10.0 * deltaTime;

      this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
      this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
      this.direction.normalize();

      const speed = this.isSprinting ? this.walkSpeed * 2 : this.walkSpeed;

      if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * speed * 10.0 * deltaTime;
      if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * speed * 10.0 * deltaTime;

      this.controls.moveRight(-this.velocity.x * deltaTime);
      this.controls.moveForward(-this.velocity.z * deltaTime);

      this.controls.getObject().position.y = this.playerHeight;
    }
  }

  public dispose() {
    this.unsubscribe();
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('wheel', this.onWheel);
    this.controls.disconnect();
    this.crosshair.remove();
  }
}
