import * as THREE from 'three';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { DeepSkyObjectData } from '../types';

export class DeepSkyObjects {
    private group: THREE.Group;
    private sprites: { sprite: THREE.Sprite, dso: DeepSkyObjectData }[] = [];
    private materials: THREE.SpriteMaterial[] = [];
    private textures: THREE.Texture[] = [];

    constructor(celestialGroup: THREE.Group) {
        this.group = new THREE.Group();
        celestialGroup.add(this.group);
        this.init();
    }

    private createGalaxyTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d')!;
        
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
        gradient.addColorStop(0, 'rgba(255, 255, 240, 0.95)');
        gradient.addColorStop(0.2, 'rgba(200, 220, 255, 0.6)');
        gradient.addColorStop(0.5, 'rgba(120, 150, 220, 0.25)');
        gradient.addColorStop(0.85, 'rgba(60, 80, 150, 0.08)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.save();
        ctx.translate(64, 64);
        ctx.rotate(Math.PI / 4);
        ctx.scale(1.0, 0.5);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    private createNebulaTexture(colorHex: string): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d')!;
        
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
        gradient.addColorStop(0, `${colorHex}0.8)`);
        gradient.addColorStop(0.35, `${colorHex}0.4)`);
        gradient.addColorStop(0.7, `${colorHex}0.12)`);
        gradient.addColorStop(1, `${colorHex}0.0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(64, 64, 60, 0, Math.PI * 2);
        ctx.fill();

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    private createClusterTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d')!;
        
        // Soft background glow
        const glow = ctx.createRadialGradient(64, 64, 0, 64, 64, 55);
        glow.addColorStop(0, 'rgba(200, 220, 255, 0.3)');
        glow.addColorStop(0.6, 'rgba(150, 180, 240, 0.08)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(64, 64, 55, 0, Math.PI * 2);
        ctx.fill();

        // Dense star cluster dots
        for (let i = 0; i < 45; i++) {
            const rad = Math.pow(Math.random(), 1.8) * 45;
            const angle = Math.random() * Math.PI * 2;
            const x = 64 + Math.cos(angle) * rad;
            const y = 64 + Math.sin(angle) * rad;
            const r = Math.random() * 1.5 + 0.5;
            const alpha = Math.random() * 0.6 + 0.4;
            
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    private init() {
        const galaxyTex = this.createGalaxyTexture();
        const emissionTex = this.createNebulaTexture('rgba(255, 90, 110, ');
        const reflectionTex = this.createNebulaTexture('rgba(90, 160, 255, ');
        const clusterTex = this.createClusterTexture();

        const R = 998;

        for (const dso of DEEP_SKY_OBJECTS) {
            let tex: THREE.Texture;
            switch(dso.type) {
                case 'galaxy': tex = galaxyTex; break;
                case 'nebula': tex = emissionTex; break;
                case 'cluster': tex = clusterTex; break;
                case 'planetary_nebula': tex = reflectionTex; break;
                default: tex = galaxyTex; break;
            }

            const material = new THREE.SpriteMaterial({
                map: tex,
                color: 0xffffff,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                opacity: 0.0
            });
            this.materials.push(material);

            const sprite = new THREE.Sprite(material);

            const ra_rad = dso.ra * Math.PI / 12;
            const dec_rad = dso.dec * Math.PI / 180;

            sprite.position.x = R * Math.cos(dec_rad) * Math.cos(ra_rad);
            sprite.position.y = R * Math.sin(dec_rad);
            sprite.position.z = R * Math.cos(dec_rad) * Math.sin(ra_rad);

            // Realistic apparent size
            const size = Math.max(3.0, (dso.sizeArcmin || 15) * 0.15);
            sprite.scale.set(size, size, 1);

            this.group.add(sprite);
            this.sprites.push({ sprite, dso });
        }
    }

    private tempWorldPos = new THREE.Vector3();

    public update(fov: number, limitingMagnitude: number) {
        // Deep sky objects only become clearly visible under magnification or bright telescope limiting mag
        const isZoomed = fov < 45.0;
        for (const { sprite, dso } of this.sprites) {
            sprite.getWorldPosition(this.tempWorldPos);
            // Hide DSO immediately if below the horizon or too faint
            if (this.tempWorldPos.y < 0.0 || dso.magnitude > limitingMagnitude) {
                sprite.visible = false;
            } else {
                sprite.visible = true;
                const zoomFactor = Math.min(1.0, Math.pow(45.0 / Math.max(0.5, fov), 0.7) * 0.35);
                const brightness = Math.max(0.05, (limitingMagnitude - dso.magnitude) * 0.15);
                (sprite.material as THREE.SpriteMaterial).opacity = isZoomed ? Math.min(0.85, brightness * zoomFactor) : 0.05;
            }
        }
    }

    public dispose() {
        for (const tex of this.textures) tex.dispose();
        for (const mat of this.materials) mat.dispose();
        if (this.group.parent) {
            this.group.parent.remove(this.group);
        }
    }
}
