import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';
import { TelescopeOptics } from '../telescope/TelescopeOptics';

/**
 * Handles all player input and camera control across game modes.
 */
export class PlayerController {
  private camera: THREE.PerspectiveCamera;
  private canvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private controls: PointerLockControls;
  private optics?: TelescopeOptics;

  private moveForward = false;
  private moveBackward = false;
  private moveLeft = false;
  private moveRight = false;
  private isSprinting = false;
  private isAltHeld = false;

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

    // Reset Alt state when window loses focus
    window.addEventListener('blur', () => {
      this.isAltHeld = false;
    });

    // Click to lock pointer in walk or telescope mode (left click)
    const handleViewportLock = (e: MouseEvent) => {
      if (e.button !== 0) return; // Only left click locks pointer
      if (this.isAltHeld) return; // While holding Alt, clicks are for UI interaction
      if (this.isAnyModalActive()) return;
      const target = e.target as HTMLElement;
      if (target && target.closest('.hud-panel, .studio-panel, button, input, select, .guide-badge, .money-badge, .weather-badge, .audio-badge, .story-box, .codex-panel, .finder-panel, .lightbox-content')) {
        return;
      }
      const mode = gameStore.getState().gameMode;
      if ((mode === GameMode.Walk || mode === GameMode.Telescope) && !this.controls.isLocked) {
        this.controls.lock();
      }
    };

    this.canvas.addEventListener('mousedown', handleViewportLock);
    window.addEventListener('click', handleViewportLock);

    this.unsubscribe = gameStore.subscribe((state, prevState) => {
      if (state.gameMode !== prevState.gameMode) {
        this.handleModeChange(state.gameMode, prevState.gameMode);
      }
    });
  }

  private isAnyModalActive(): boolean {
    const modalSelectors = [
      '.finder-panel',
      '.codex-panel',
      '.lightbox-overlay',
      '#codex-ref-modal',
      '.guide-modal',
      '.location-modal',
      '.time-reversal-panel',
      '.audio-modal',
      '.story-modal'
    ];
    for (const sel of modalSelectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el && el.style.display !== 'none' && getComputedStyle(el).display !== 'none') {
        return true;
      }
    }
    return false;
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
    // If typing in input/textarea, do NOT trigger any game controls
    const activeTag = (document.activeElement?.tagName || '').toLowerCase();
    if (activeTag === 'input' || activeTag === 'textarea') {
      if (event.code === 'Escape') {
        (document.activeElement as HTMLElement).blur();
      }
      return;
    }

    const state = gameStore.getState();
    const mode = state.gameMode;

    // In Telescope mode, pressing F toggles the FinderUI
    if (mode === GameMode.Telescope && (event.code === 'KeyF' || event.key.toLowerCase() === 'f')) {
      document.dispatchEvent(new CustomEvent('toggle-finder-ui'));
      return;
    }

    // Alt key: Hold Alt to free mouse cursor for UI interaction
    if (event.key === 'Alt' || event.code === 'AltLeft' || event.code === 'AltRight') {
      event.preventDefault();
      if (!this.isAltHeld) {
        this.isAltHeld = true;
        this.controls.unlock();
      }
      return;
    }

    // ESC key: Universal return/back handler
    if (event.code === 'Escape') {
      if (this.isAnyModalActive()) {
        return; // Open modals will close themselves first on ESC
      }
      if (mode === GameMode.Telescope || mode === GameMode.Studio) {
        state.setGameMode(GameMode.Walk);
        return;
      }
    }

    // If any modal (Finder, Codex, Lightbox, etc.) is active, ignore all other game/telescope shortcuts!
    if (this.isAnyModalActive()) {
      return;
    }

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
        case 'Space':
        case 'KeyE':
          document.dispatchEvent(new CustomEvent('capture-photo'));
          return;
        case 'Digit1':
          state.setFrameType('light');
          document.dispatchEvent(new CustomEvent('frame-type-changed', { detail: 'light' }));
          return;
        case 'Digit2':
          state.setFrameType('dark');
          document.dispatchEvent(new CustomEvent('frame-type-changed', { detail: 'dark' }));
          return;
        case 'Digit3':
          state.setFrameType('flat');
          document.dispatchEvent(new CustomEvent('frame-type-changed', { detail: 'flat' }));
          return;
        case 'Digit4':
          state.setFrameType('bias');
          document.dispatchEvent(new CustomEvent('frame-type-changed', { detail: 'bias' }));
          return;
        case 'KeyV': {
          const types: ('light' | 'dark' | 'flat' | 'bias')[] = ['light', 'dark', 'flat', 'bias'];
          const nextIdx = (types.indexOf(state.currentFrameType) + 1) % types.length;
          state.setFrameType(types[nextIdx]);
          document.dispatchEvent(new CustomEvent('frame-type-changed', { detail: types[nextIdx] }));
          return;
        }
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          this.handleTelescopeSlew(event.code);
          document.dispatchEvent(new CustomEvent('telescope-slew'));
          break;
      }
    }

    // ---- Global shortcuts (Walk & Studio) ----
    switch (event.code) {
      case 'Digit1': if (mode !== GameMode.Telescope) state.setTimeScale(1); break;
      case 'Digit2': if (mode !== GameMode.Telescope) state.setTimeScale(10); break;
      case 'Digit3': if (mode !== GameMode.Telescope) state.setTimeScale(60); break;
      case 'Digit4': if (mode !== GameMode.Telescope) state.setTimeScale(300); break;
      case 'Digit5': if (mode !== GameMode.Telescope) state.setTimeScale(1000); break;
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

    dec = Math.max(-89.5, Math.min(89.5, dec));
    if (ra < 0) ra += 24;
    if (ra >= 24) ra -= 24;

    state.setTelescopePointing(ra, dec);
  }

  private onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Alt' || event.code === 'AltLeft' || event.code === 'AltRight') {
      event.preventDefault();
      this.isAltHeld = false;
      const state = gameStore.getState();
      const mode = state.gameMode;
      if ((mode === GameMode.Walk || mode === GameMode.Telescope) && !this.isAnyModalActive() && !this.controls.isLocked) {
        this.controls.lock();
      }
      return;
    }

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
    if (this.isAnyModalActive()) return;
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

        // Natural camera look: move mouse up -> look up (increase dec)
        ra -= event.movementX * 0.0018 * fovFactor * speedMultiplier;
        dec -= event.movementY * 0.025 * fovFactor * speedMultiplier;

        dec = Math.max(-89.5, Math.min(89.5, dec));
        if (ra < 0) ra += 24;
        if (ra >= 24) ra -= 24;

        state.setTelescopePointing(ra, dec);
        if (Math.abs(event.movementX) > 2 || Math.abs(event.movementY) > 2) {
          document.dispatchEvent(new CustomEvent('telescope-slew'));
        }
      }
    }
  }

  public setOptics(optics: TelescopeOptics) {
    this.optics = optics;
  }

  private onWheel(event: WheelEvent) {
    if (this.isAnyModalActive()) return;
    const state = gameStore.getState();
    if (state.gameMode === GameMode.Telescope) {
      event.preventDefault();
      let fov = state.currentFov;
      fov *= event.deltaY > 0 ? 1.1 : 0.9;
      const [minFov, maxFov] = this.optics ? this.optics.getEffectiveFovRange() : [0.2, 60];
      fov = Math.max(minFov, Math.min(maxFov, fov));
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
