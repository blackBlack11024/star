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

    constructor(camera: THREE.PerspectiveCamera, _canvas: HTMLCanvasElement) {
        this.camera = camera;
        this.setupEvents();
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
                    this.targetFov = this.DEFAULT_FOV;
                }
            }
        });

        // Reset FOV immediately if switching away from Walk mode
        gameStore.subscribe((state, prev) => {
            if (state.gameMode !== prev.gameMode) {
                this.isHoldingRightClick = false;
                this.targetFov = this.DEFAULT_FOV;
                if (state.gameMode === GameMode.Walk) {
                    this.camera.fov = this.DEFAULT_FOV;
                    this.camera.updateProjectionMatrix();
                }
            }
        });
    }

    /** Called every frame in Game.update to smoothly lerp FOV. */
    public update(deltaTime: number): void {
        const mode = gameStore.getState().gameMode;
        if (mode !== GameMode.Walk) return;

        if (Math.abs(this.camera.fov - this.targetFov) > 0.05) {
            // Smooth zoom lerp
            this.camera.fov += (this.targetFov - this.camera.fov) * Math.min(1.0, deltaTime * 14);
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

