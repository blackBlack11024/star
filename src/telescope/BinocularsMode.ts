import * as THREE from 'three';
import { gameStore } from '../game/GameStore';
import { GameMode } from '../types';

/**
 * BinocularsMode — Hold Right Mouse Button in Walk mode for smooth optical zoom.
 * Pure magnification (FOV ~10°) with no mask/overlay obstruction.
 * Listens on window so it triggers seamlessly regardless of pointer lock state.
 */
export class BinocularsMode {
    private camera: THREE.PerspectiveCamera;
    private isHoldingRightClick = false;
    private targetFov = 60;
    private readonly BINO_FOV = 10.0;
    private readonly DEFAULT_FOV = 60.0;
    private readonly WIDE_FOV = 98.0;

    constructor(camera: THREE.PerspectiveCamera, _canvas: HTMLCanvasElement) {
        this.camera = camera;
        this.setupEvents();
    }

    private getBaseWalkFov(): number {
        return gameStore.getState().isLyingDown ? this.WIDE_FOV : this.DEFAULT_FOV;
    }

    private setupEvents(): void {
        // Listen on window for reliable right-click hold in any pointer lock state
        window.addEventListener('mousedown', (e) => {
            if (e.button === 2) {
                const mode = gameStore.getState().gameMode;
                if (mode === GameMode.Walk) {
                    this.isHoldingRightClick = true;
                    this.targetFov = this.BINO_FOV;
                }
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 2) {
                if (this.isHoldingRightClick) {
                    this.isHoldingRightClick = false;
                    this.targetFov = this.getBaseWalkFov();
                }
            }
        });

        // Reset or adjust FOV when switching mode or lying down
        gameStore.subscribe((state, prev) => {
            if (state.gameMode !== prev.gameMode || state.isLyingDown !== prev.isLyingDown) {
                if (!this.isHoldingRightClick) {
                    this.targetFov = this.getBaseWalkFov();
                    if (state.gameMode === GameMode.Walk && prev.gameMode !== GameMode.Walk) {
                        this.camera.fov = this.targetFov;
                        this.camera.updateProjectionMatrix();
                    }
                }
            }
        });
    }

    /** Called every frame in Game.update to smoothly lerp FOV. */
    public update(deltaTime: number): void {
        const mode = gameStore.getState().gameMode;
        if (mode !== GameMode.Walk) return;

        if (!this.isHoldingRightClick) {
            this.targetFov = this.getBaseWalkFov();
        }

        if (Math.abs(this.camera.fov - this.targetFov) > 0.05) {
            // Smooth zoom lerp: fast for binoculars, gentle and cinematic for lying down
            const speed = this.isHoldingRightClick ? 14.0 : 5.5;
            this.camera.fov += (this.targetFov - this.camera.fov) * Math.min(1.0, deltaTime * speed);
            this.camera.updateProjectionMatrix();
        } else if (this.camera.fov !== this.targetFov) {
            this.camera.fov = this.targetFov;
            this.camera.updateProjectionMatrix();
        }
    }

    public get active(): boolean {
        return this.isHoldingRightClick;
    }

    public dispose(): void {
        this.isHoldingRightClick = false;
        this.camera.fov = this.DEFAULT_FOV;
        this.camera.updateProjectionMatrix();
    }
}

