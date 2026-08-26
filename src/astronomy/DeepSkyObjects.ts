import * as THREE from 'three';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { DeepSkyObjectData } from '../types';

export class DeepSkyObjects {
    private group: THREE.Group;
    private sprites: { sprite: THREE.Sprite, dso: DeepSkyObjectData, baseScale: number }[] = [];
    private materials: THREE.SpriteMaterial[] = [];
    private textures: THREE.Texture[] = [];

    constructor(celestialGroup: THREE.Group) {
        this.group = new THREE.Group();
        celestialGroup.add(this.group);
        this.init();
    }

    /** 512x512 High-definition Galaxy with spiral arms, dust lanes, and star-forming regions */
    private createGalaxyTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        const cx = 256, cy = 256;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 6);
        ctx.scale(1.2, 0.55);

        // 1. Outer diffuse halo
        const halo = ctx.createRadialGradient(0, 0, 10, 0, 0, 240);
        halo.addColorStop(0, 'rgba(230, 240, 255, 0.4)');
        halo.addColorStop(0.3, 'rgba(150, 190, 255, 0.2)');
        halo.addColorStop(0.7, 'rgba(80, 120, 220, 0.08)');
        halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(0, 0, 240, 0, Math.PI * 2);
        ctx.fill();

        // 2. Spiral arms (logarithmic spirals with particle clouds)
        const armColors = [
            'rgba(140, 190, 255, 0.15)',
            'rgba(190, 220, 255, 0.18)',
            'rgba(255, 220, 200, 0.12)'
        ];

        for (let arm = 0; arm < 2; arm++) {
            const armOffset = arm * Math.PI;
            for (let t = 0.5; t < 4.2; t += 0.03) {
                const r = 22 * Math.exp(0.42 * t);
                if (r > 220) break;
                const theta = t + armOffset;
                const px = r * Math.cos(theta);
                const py = r * Math.sin(theta);
                
                // Arm gas cloud
                const blobGrad = ctx.createRadialGradient(px, py, 0, px, py, 18 + t * 4);
                const col = armColors[Math.floor(Math.random() * armColors.length)];
                blobGrad.addColorStop(0, col);
                blobGrad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = blobGrad;
                ctx.beginPath();
                ctx.arc(px, py, 18 + t * 4, 0, Math.PI * 2);
                ctx.fill();

                // H-II star-forming emission knots
                if (Math.random() < 0.25) {
                    ctx.fillStyle = 'rgba(255, 110, 140, 0.45)';
                    ctx.beginPath();
                    ctx.arc(px + (Math.random() - 0.5) * 8, py + (Math.random() - 0.5) * 8, Math.random() * 3 + 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        // 3. Dense central bulge & supermassive nucleus
        const bulge = ctx.createRadialGradient(0, 0, 0, 0, 0, 70);
        bulge.addColorStop(0, 'rgba(255, 255, 245, 0.98)');
        bulge.addColorStop(0.15, 'rgba(255, 240, 210, 0.85)');
        bulge.addColorStop(0.45, 'rgba(230, 200, 160, 0.45)');
        bulge.addColorStop(0.8, 'rgba(180, 160, 190, 0.15)');
        bulge.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bulge;
        ctx.beginPath();
        ctx.arc(0, 0, 70, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    /** 512x512 Emission Nebula (H-Alpha rich, filamentary clouds) */
    private createEmissionNebulaTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        const cx = 256, cy = 256;

        // Base red-pink H-alpha gas gradient
        const base = ctx.createRadialGradient(cx, cy, 10, cx, cy, 230);
        base.addColorStop(0, 'rgba(255, 240, 245, 0.9)');
        base.addColorStop(0.15, 'rgba(255, 80, 120, 0.7)');
        base.addColorStop(0.4, 'rgba(210, 40, 90, 0.4)');
        base.addColorStop(0.7, 'rgba(120, 20, 70, 0.15)');
        base.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = base;
        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.fill();

        // Turbulent filamentary gas clumps
        for (let i = 0; i < 70; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.pow(Math.random(), 0.7) * 180;
            const gx = cx + Math.cos(angle) * dist;
            const gy = cy + Math.sin(angle) * dist;
            const rad = Math.random() * 45 + 15;

            const gGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, rad);
            const isOxygen = Math.random() < 0.25; // O-III turquoise ionized gas
            if (isOxygen) {
                gGrad.addColorStop(0, 'rgba(80, 220, 230, 0.35)');
            } else {
                gGrad.addColorStop(0, 'rgba(255, 90, 130, 0.3)');
            }
            gGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gGrad;
            ctx.beginPath();
            ctx.arc(gx, gy, rad, 0, Math.PI * 2);
            ctx.fill();
        }

        // Embedded Trapezium / Young star cluster
        for (let i = 0; i < 15; i++) {
            const sx = cx + (Math.random() - 0.5) * 40;
            const sy = cy + (Math.random() - 0.5) * 40;
            const starGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 6);
            starGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            starGrad.addColorStop(0.4, 'rgba(200, 230, 255, 0.8)');
            starGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = starGrad;
            ctx.beginPath();
            ctx.arc(sx, sy, 6, 0, Math.PI * 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    /** 512x512 Reflection Nebula (M78 / Pleiades style blue cosmic dust) */
    private createReflectionNebulaTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        const cx = 256, cy = 256;

        const base = ctx.createRadialGradient(cx, cy, 10, cx, cy, 220);
        base.addColorStop(0, 'rgba(240, 250, 255, 0.95)');
        base.addColorStop(0.2, 'rgba(100, 170, 255, 0.65)');
        base.addColorStop(0.5, 'rgba(50, 100, 220, 0.3)');
        base.addColorStop(0.8, 'rgba(20, 40, 120, 0.08)');
        base.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = base;
        ctx.beginPath();
        ctx.arc(cx, cy, 220, 0, Math.PI * 2);
        ctx.fill();

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    /** 512x512 Planetary Nebula (M57 Ring / M27 Dumbbell with central white dwarf) */
    private createPlanetaryNebulaTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        const cx = 256, cy = 256;

        // Outer O-III green/blue & H-alpha ring
        const ring = ctx.createRadialGradient(cx, cy, 60, cx, cy, 190);
        ring.addColorStop(0, 'rgba(20, 30, 50, 0.1)');
        ring.addColorStop(0.5, 'rgba(60, 230, 190, 0.7)');
        ring.addColorStop(0.8, 'rgba(255, 80, 100, 0.55)');
        ring.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ring;
        ctx.beginPath();
        ctx.arc(cx, cy, 190, 0, Math.PI * 2);
        ctx.fill();

        // Central white dwarf
        const star = ctx.createRadialGradient(cx, cy, 0, cx, cy, 10);
        star.addColorStop(0, 'rgba(255, 255, 255, 1)');
        star.addColorStop(0.3, 'rgba(180, 220, 255, 0.8)');
        star.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = star;
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fill();

        const tex = new THREE.CanvasTexture(canvas);
        this.textures.push(tex);
        return tex;
    }

    /** 512x512 Dense Star Cluster (M13 Hercules Globular / M45 Pleiades) */
    private createClusterTexture(): THREE.Texture {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        const cx = 256, cy = 256;

        // Background unresolved starlight glow
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 210);
        glow.addColorStop(0, 'rgba(255, 245, 220, 0.55)');
        glow.addColorStop(0.3, 'rgba(200, 220, 255, 0.25)');
        glow.addColorStop(0.7, 'rgba(120, 160, 240, 0.06)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, 210, 0, Math.PI * 2);
        ctx.fill();

        // 180 individual cluster stars with radial concentration
        for (let i = 0; i < 180; i++) {
            const rad = Math.pow(Math.random(), 1.6) * 190;
            const angle = Math.random() * Math.PI * 2;
            const x = cx + Math.cos(angle) * rad;
            const y = cy + Math.sin(angle) * rad;
            const r = Math.random() * 2.2 + 0.6;
            const alpha = Math.random() * 0.7 + 0.3;

            const isWarm = Math.random() < 0.35;
            const col = isWarm ? `rgba(255, 220, 170, ${alpha})` : `rgba(210, 235, 255, ${alpha})`;
            
            ctx.fillStyle = col;
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
        const emissionTex = this.createEmissionNebulaTexture();
        const reflectionTex = this.createReflectionNebulaTexture();
        const planetaryTex = this.createPlanetaryNebulaTexture();
        const clusterTex = this.createClusterTexture();

        const R = 998;

        for (const dso of DEEP_SKY_OBJECTS) {
            let tex: THREE.Texture;
            switch(dso.type) {
                case 'galaxy': tex = galaxyTex; break;
                case 'nebula': tex = emissionTex; break;
                case 'cluster': tex = clusterTex; break;
                case 'planetary_nebula': tex = planetaryTex; break;
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

            const baseScale = Math.max(4.0, (dso.sizeArcmin || 15) * 0.22);
            sprite.scale.set(baseScale, baseScale, 1);

            this.group.add(sprite);
            this.sprites.push({ sprite, dso, baseScale });
        }
    }

    private tempWorldPos = new THREE.Vector3();

    public update(cameraFov: number, isTelescope: boolean, limitingMagnitude: number) {
        // DSOs are ONLY visible when in Telescope mode OR when actively zoomed in with binoculars (FOV < 35 deg).
        // In normal naked-eye Walk mode (FOV >= 35 deg), all DSO sprites are completely hidden (visible = false).
        const isOpticsActive = isTelescope || cameraFov < 35.0;

        if (!isOpticsActive) {
            for (const { sprite } of this.sprites) {
                sprite.visible = false;
            }
            return;
        }

        const fov = isTelescope ? Math.max(0.5, cameraFov) : cameraFov;
        const zoomFactor = isTelescope ? 1.0 : Math.min(1.0, (35.0 - fov) / 20.0);
        
        // Stellarium-like dynamic magnification: as FOV decreases, DSO scales up smoothly and reveals HD details
        const zoomMagnification = Math.min(7.0, Math.pow(60.0 / fov, 0.8));

        for (const { sprite, dso, baseScale } of this.sprites) {
            sprite.getWorldPosition(this.tempWorldPos);
            
            // Hide DSO if below horizon or too faint for current optics
            if (this.tempWorldPos.y < 0.0 || dso.magnitude > limitingMagnitude) {
                sprite.visible = false;
            } else {
                sprite.visible = true;
                const dynamicScale = baseScale * zoomMagnification;
                sprite.scale.set(dynamicScale, dynamicScale, 1);

                const brightness = Math.max(0.15, (limitingMagnitude - dso.magnitude) * 0.22);
                const zoomAlpha = Math.min(0.95, brightness * (0.4 + zoomMagnification * 0.12) * zoomFactor);
                (sprite.material as THREE.SpriteMaterial).opacity = zoomAlpha;
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



