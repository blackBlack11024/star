import * as THREE from 'three';
import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';

/**
 * BinocularsMode — Hold Right Mouse Button in Walk mode to look through
 * simulated 8x42 binoculars.  Narrows the camera FOV to ~7 deg and renders
 * an SVG vignette overlay that mimics two eyepieces.
 */
export class BinocularsMode {
    private camera: THREE.PerspectiveCamera;
    private canvas: HTMLCanvasElement;
    private overlay: HTMLElement;
    private isActive = false;
    private originalFov = 60;
    private readonly BINO_FOV = 7.0; // 8x42 binoculars field of view

    constructor(camera: THREE.PerspectiveCamera, canvas: HTMLCanvasElement) {
        this.camera = camera;
        this.canvas = canvas;
        this.overlay = this.createOverlay();
        this.setupEvents();
    }

    private createOverlay(): HTMLElement {
        const el = document.createElement('div');
        el.className = 'binoculars-overlay';
        el.style.display = 'none';
        el.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="bino-mask">
              <rect width="100" height="100" fill="white"/>
              <!-- Two circular holes for binocular vision -->
              <circle cx="30" cy="50" r="22" fill="black"/>
              <circle cx="70" cy="50" r="22" fill="black"/>
            </mask>
          </defs>
          <rect width="100" height="100" fill="rgba(0,0,0,0.97)" mask="url(#bino-mask)"/>
          <!-- Subtle vignette inside each eyepiece -->
          <circle cx="30" cy="50" r="22" fill="none" stroke="rgba(0,0,0,0.5)" stroke-width="3"/>
          <circle cx="70" cy="50" r="22" fill="none" stroke="rgba(0,0,0,0.5)" stroke-width="3"/>
          <!-- Center divider bar (bridge) -->
          <rect x="47" y="38" width="6" height="24" fill="rgba(0,0,0,0.9)"/>
        </svg>
        <div class="bino-info">8x42 雙筒望遠鏡 &bull; FOV 7&deg; &bull; 放大倍率 8x</div>
        `;
        document.getElementById('ui-overlay')?.appendChild(el);
        return el;
    }

    private setupEvents(): void {
        // Activate on right mousedown when in Walk mode
        this.canvas.addEventListener('mousedown', (e) => {
            if (e.button === 2 && gameStore.getState().gameMode === GameMode.Walk) {
                this.activate();
            }
        });

        // Deactivate on right mouseup (listen on window to catch releases outside canvas)
        window.addEventListener('mouseup', (e) => {
            if (e.button === 2 && this.isActive) {
                this.deactivate();
            }
        });

        // Deactivate immediately if the game mode changes away from Walk
        gameStore.subscribe((state, prev) => {
            if (state.gameMode !== prev.gameMode && this.isActive) {
                this.deactivate();
            }
        });
    }

    private activate(): void {
        if (this.isActive) return;
        this.isActive = true;
        this.originalFov = this.camera.fov;
        this.camera.fov = this.BINO_FOV;
        this.camera.updateProjectionMatrix();
        this.overlay.style.display = 'block';
    }

    private deactivate(): void {
        if (!this.isActive) return;
        this.isActive = false;
        this.camera.fov = this.originalFov;
        this.camera.updateProjectionMatrix();
        this.overlay.style.display = 'none';
    }

    /** Whether binoculars are currently active. */
    public get active(): boolean {
        return this.isActive;
    }

    public dispose(): void {
        this.overlay.remove();
    }
}
