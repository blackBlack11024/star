import * as THREE from 'three';

/**
 * Procedural Astrophotography Texture Factory.
 * Generates distinct, scientifically faithful 512x512 canvas textures for every Messier object in the game.
 */
export class DSOTextureFactory {
    private static cache: Map<string, THREE.Texture> = new Map();

    public static getTexture(dsoId: string, type: string): THREE.Texture {
        if (this.cache.has(dsoId)) {
            return this.cache.get(dsoId)!;
        }

        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;

        switch (dsoId) {
            // ==========================================
            // GALAXIES
            // ==========================================
            case 'M31':
                this.drawM31Andromeda(ctx);
                break;
            case 'M51':
                this.drawM51Whirlpool(ctx);
                break;
            case 'M104':
                this.drawM104Sombrero(ctx);
                break;
            case 'M82':
                this.drawM82Cigar(ctx);
                break;
            case 'M81':
                this.drawM81Bode(ctx);
                break;
            case 'M33':
                this.drawM33Triangulum(ctx);
                break;
            case 'M101':
                this.drawM101Pinwheel(ctx);
                break;

            // ==========================================
            // NEBULAE
            // ==========================================
            case 'M42':
                this.drawM42Orion(ctx);
                break;
            case 'M43':
                this.drawM43DeMairan(ctx);
                break;
            case 'M20':
                this.drawM20Trifid(ctx);
                break;
            case 'M8':
                this.drawM8Lagoon(ctx);
                break;
            case 'M16':
                this.drawM16Eagle(ctx);
                break;
            case 'M17':
                this.drawM17Swan(ctx);
                break;
            case 'M78':
                this.drawM78Reflection(ctx);
                break;
            case 'M1':
                this.drawM1Crab(ctx);
                break;

            // ==========================================
            // PLANETARY NEBULAE
            // ==========================================
            case 'M57':
                this.drawM57Ring(ctx);
                break;
            case 'M27':
                this.drawM27Dumbbell(ctx);
                break;
            case 'M97':
                this.drawM97Owl(ctx);
                break;

            // ==========================================
            // STAR CLUSTERS
            // ==========================================
            case 'M45':
                this.drawM45Pleiades(ctx);
                break;
            case 'M44':
                this.drawM44Beehive(ctx);
                break;
            case 'M11':
                this.drawM11WildDuck(ctx);
                break;
            case 'M35':
                this.drawM35OpenCluster(ctx);
                break;
            case 'M13':
                this.drawM13Hercules(ctx);
                break;
            case 'M22':
                this.drawGlobular(ctx, '#ffe0b2', 260, 0.9);
                break;
            case 'M4':
                this.drawGlobular(ctx, '#ffcc80', 240, 0.7);
                break;
            case 'M15':
                this.drawGlobular(ctx, '#e0f2fe', 220, 1.4); // extremely dense core
                break;
            case 'M3':
                this.drawGlobular(ctx, '#fef08a', 230, 1.0);
                break;
            case 'M5':
                this.drawGlobular(ctx, '#f8fafc', 250, 1.1);
                break;

            default:
                if (type === 'galaxy') this.drawGenericGalaxy(ctx);
                else if (type === 'planetary_nebula') this.drawM57Ring(ctx);
                else if (type === 'cluster') this.drawGlobular(ctx, '#ffffff', 200, 1.0);
                else this.drawM42Orion(ctx);
                break;
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        this.cache.set(dsoId, texture);

        // Asynchronously load real NASA / Hubble / ESO observation photo
        const baseUrl = (import.meta as any).env?.BASE_URL || './';
        const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
        const photoUrl = `${cleanBase}textures/dso/${dsoId}.png`;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            texture.image = img;
            texture.needsUpdate = true;
        };
        img.src = photoUrl;

        return texture;
    }

    // -------------------------------------------------------------
    // M31 Andromeda Galaxy (Tilted disk with dust lanes and M32/M110)
    // -------------------------------------------------------------
    private static drawM31Andromeda(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.62); // 35 degree inclination

        // Outer faint halo
        const halo = ctx.createRadialGradient(0, 0, 10, 0, 0, 240);
        halo.addColorStop(0, 'rgba(255, 240, 210, 0.6)');
        halo.addColorStop(0.3, 'rgba(180, 210, 255, 0.35)');
        halo.addColorStop(0.7, 'rgba(100, 150, 230, 0.12)');
        halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.ellipse(0, 0, 240, 85, 0, 0, Math.PI * 2);
        ctx.fill();

        // Intermediate spiral disk
        const disk = ctx.createRadialGradient(0, 0, 0, 0, 0, 160);
        disk.addColorStop(0, 'rgba(255, 248, 220, 0.85)');
        disk.addColorStop(0.4, 'rgba(210, 230, 255, 0.45)');
        disk.addColorStop(0.8, 'rgba(140, 180, 250, 0.2)');
        disk.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = disk;
        ctx.beginPath();
        ctx.ellipse(0, 0, 160, 52, 0, 0, Math.PI * 2);
        ctx.fill();

        // Prominent dark dust lane in foreground
        ctx.strokeStyle = 'rgba(10, 15, 25, 0.55)';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.ellipse(0, 18, 140, 36, 0, Math.PI * 0.15, Math.PI * 0.85);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(15, 20, 30, 0.4)';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.ellipse(0, 28, 175, 48, 0, Math.PI * 0.2, Math.PI * 0.8);
        ctx.stroke();

        // Intense golden core
        const core = ctx.createRadialGradient(0, 0, 0, 0, 0, 35);
        core.addColorStop(0, 'rgba(255, 255, 250, 1.0)');
        core.addColorStop(0.25, 'rgba(255, 235, 180, 0.95)');
        core.addColorStop(0.7, 'rgba(255, 200, 120, 0.4)');
        core.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.ellipse(0, 0, 35, 20, 0, 0, Math.PI * 2);
        ctx.fill();

        // Companion dwarf galaxy M32 (compact near core)
        const m32 = ctx.createRadialGradient(-35, -55, 0, -35, -55, 14);
        m32.addColorStop(0, 'rgba(255, 245, 210, 0.9)');
        m32.addColorStop(0.5, 'rgba(240, 210, 160, 0.4)');
        m32.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = m32;
        ctx.beginPath();
        ctx.arc(-35, -55, 14, 0, Math.PI * 2);
        ctx.fill();

        // Companion dwarf galaxy M110 (elongated dwarf)
        const m110 = ctx.createRadialGradient(85, 95, 0, 85, 95, 28);
        m110.addColorStop(0, 'rgba(230, 240, 255, 0.45)');
        m110.addColorStop(0.5, 'rgba(180, 200, 240, 0.2)');
        m110.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = m110;
        ctx.beginPath();
        ctx.ellipse(85, 95, 28, 14, 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    // -------------------------------------------------------------
    // M51 Whirlpool Galaxy (Face-on dual arms with NGC 5195 companion)
    // -------------------------------------------------------------
    private static drawM51Whirlpool(ctx: CanvasRenderingContext2D) {
        const cx = 230, cy = 270;

        // Background halo
        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
        bg.addColorStop(0, 'rgba(255, 245, 220, 0.4)');
        bg.addColorStop(0.5, 'rgba(140, 180, 255, 0.18)');
        bg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(cx, cy, 180, 0, Math.PI * 2);
        ctx.fill();

        // Spiral arms drawn as logarithmic swirls with dust lanes
        ctx.save();
        ctx.translate(cx, cy);

        for (let arm = 0; arm < 2; arm++) {
            const rot = arm * Math.PI;
            ctx.rotate(rot);

            // Blue luminous star-forming arm
            ctx.strokeStyle = 'rgba(120, 180, 255, 0.45)';
            ctx.lineWidth = 16;
            ctx.beginPath();
            for (let t = 0.5; t < 3.2; t += 0.05) {
                const r = 24 * Math.exp(0.48 * t);
                const a = t * 2.2;
                const x = r * Math.cos(a);
                const y = r * Math.sin(a);
                if (t === 0.5) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Inner dark dust lane hugging the arm
            ctx.strokeStyle = 'rgba(8, 12, 20, 0.6)';
            ctx.lineWidth = 5;
            ctx.beginPath();
            for (let t = 0.6; t < 3.0; t += 0.05) {
                const r = 21 * Math.exp(0.48 * t);
                const a = t * 2.2 + 0.15;
                const x = r * Math.cos(a);
                const y = r * Math.sin(a);
                if (t === 0.6) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // H-II pink starburst clusters along arms
            for (let i = 0; i < 14; i++) {
                const t = 1.0 + Math.random() * 2.0;
                const r = 24 * Math.exp(0.48 * t) + (Math.random() - 0.5) * 8;
                const a = t * 2.2 + (Math.random() - 0.5) * 0.2;
                ctx.fillStyle = `rgba(255, ${80 + Math.random() * 40}, 140, 0.75)`;
                ctx.beginPath();
                ctx.arc(r * Math.cos(a), r * Math.sin(a), 2.0 + Math.random() * 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();

        // Tidal bridge leading to companion NGC 5195 at top right
        ctx.strokeStyle = 'rgba(210, 200, 230, 0.35)';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(cx + 60, cy - 80);
        ctx.quadraticCurveTo(cx + 100, cy - 130, 360, 130);
        ctx.stroke();

        // Companion galaxy NGC 5195
        const ngc = ctx.createRadialGradient(360, 130, 0, 360, 130, 48);
        ngc.addColorStop(0, 'rgba(255, 235, 180, 0.95)');
        ngc.addColorStop(0.3, 'rgba(220, 180, 140, 0.6)');
        ngc.addColorStop(0.7, 'rgba(150, 120, 100, 0.2)');
        ngc.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ngc;
        ctx.beginPath();
        ctx.arc(360, 130, 48, 0, Math.PI * 2);
        ctx.fill();

        // Dust lane cutting into NGC 5195
        ctx.strokeStyle = 'rgba(12, 10, 15, 0.65)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(360, 130, 22, Math.PI * 0.8, Math.PI * 1.5);
        ctx.stroke();

        // Main core of M51
        const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
        core.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        core.addColorStop(0.3, 'rgba(255, 240, 190, 0.9)');
        core.addColorStop(0.7, 'rgba(255, 200, 120, 0.35)');
        core.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(cx, cy, 32, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M104 Sombrero Galaxy (Giant bright bulge with razor sharp dust lane)
    // -------------------------------------------------------------
    private static drawM104Sombrero(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.1);

        // Huge spherical halo
        const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, 200);
        halo.addColorStop(0, 'rgba(255, 245, 220, 0.65)');
        halo.addColorStop(0.25, 'rgba(240, 220, 180, 0.35)');
        halo.addColorStop(0.6, 'rgba(160, 150, 170, 0.12)');
        halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(0, 0, 200, 0, Math.PI * 2);
        ctx.fill();

        // Brilliant central core
        const core = ctx.createRadialGradient(0, -6, 0, 0, -6, 60);
        core.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        core.addColorStop(0.3, 'rgba(255, 245, 200, 0.9)');
        core.addColorStop(0.7, 'rgba(255, 210, 140, 0.4)');
        core.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.ellipse(0, -6, 60, 48, 0, 0, Math.PI * 2);
        ctx.fill();

        // Upper luminous disk
        const upDisk = ctx.createRadialGradient(0, 0, 0, 0, 0, 230);
        upDisk.addColorStop(0, 'rgba(255, 250, 230, 0.8)');
        upDisk.addColorStop(0.4, 'rgba(220, 210, 190, 0.45)');
        upDisk.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = upDisk;
        ctx.beginPath();
        ctx.ellipse(0, 0, 230, 28, 0, 0, Math.PI * 2);
        ctx.fill();

        // Iconic pitch-black equatorial dust lane
        ctx.strokeStyle = 'rgba(6, 6, 10, 0.96)';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.ellipse(0, 4, 230, 24, 0, 0, Math.PI);
        ctx.stroke();

        // Lower rim of disk peeking below the dust band
        ctx.strokeStyle = 'rgba(220, 200, 170, 0.55)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.ellipse(0, 11, 210, 20, 0, 0, Math.PI);
        ctx.stroke();

        ctx.restore();
    }

    // -------------------------------------------------------------
    // M82 Cigar Galaxy (Edge-on with vertical red hydrogen starburst jets)
    // -------------------------------------------------------------
    private static drawM82Cigar(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(0.35); // diagonal tilt

        // Vertical crimson starburst outflow plumes
        for (let j = 0; j < 35; j++) {
            const x = (Math.random() - 0.5) * 60;
            const h = 50 + Math.random() * 90;
            const dir = Math.random() < 0.5 ? 1 : -1;
            const y = dir * h;

            const plume = ctx.createLinearGradient(x, 0, x, y);
            plume.addColorStop(0, 'rgba(255, 80, 100, 0.8)');
            plume.addColorStop(0.5, 'rgba(220, 40, 80, 0.45)');
            plume.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = plume;
            ctx.beginPath();
            ctx.ellipse(x, y * 0.6, 6 + Math.random() * 10, h * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Edge-on stellar disk
        const disk = ctx.createRadialGradient(0, 0, 0, 0, 0, 190);
        disk.addColorStop(0, 'rgba(255, 255, 240, 0.95)');
        disk.addColorStop(0.3, 'rgba(220, 230, 255, 0.6)');
        disk.addColorStop(0.7, 'rgba(160, 180, 220, 0.2)');
        disk.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = disk;
        ctx.beginPath();
        ctx.ellipse(0, 0, 190, 28, 0, 0, Math.PI * 2);
        ctx.fill();

        // Irregular dark dust rifts cutting across the cigar disk
        ctx.fillStyle = 'rgba(12, 12, 16, 0.75)';
        for (let k = 0; k < 7; k++) {
            const dx = (k - 3) * 24 + (Math.random() - 0.5) * 8;
            ctx.beginPath();
            ctx.ellipse(dx, 0, 6 + Math.random() * 6, 26, 0.1, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // -------------------------------------------------------------
    // M81 Bode's Galaxy (Smooth grand-design spiral with golden core)
    // -------------------------------------------------------------
    private static drawM81Bode(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.4);

        // Sweeping graceful spiral arms
        ctx.strokeStyle = 'rgba(150, 190, 255, 0.35)';
        ctx.lineWidth = 22;
        ctx.beginPath();
        ctx.ellipse(0, 0, 180, 95, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(200, 220, 255, 0.5)';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.ellipse(0, 0, 130, 68, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Warm golden core
        const core = ctx.createRadialGradient(0, 0, 0, 0, 0, 80);
        core.addColorStop(0, 'rgba(255, 255, 250, 1.0)');
        core.addColorStop(0.3, 'rgba(255, 230, 170, 0.85)');
        core.addColorStop(0.7, 'rgba(230, 180, 110, 0.35)');
        core.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.ellipse(0, 0, 80, 52, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    // -------------------------------------------------------------
    // M33 Triangulum Galaxy (Diffuse face-on spiral with pink knots)
    // -------------------------------------------------------------
    private static drawM33Triangulum(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 210);
        bg.addColorStop(0, 'rgba(230, 240, 255, 0.55)');
        bg.addColorStop(0.4, 'rgba(160, 200, 255, 0.25)');
        bg.addColorStop(0.8, 'rgba(100, 150, 220, 0.08)');
        bg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(cx, cy, 210, 0, Math.PI * 2);
        ctx.fill();

        // Patchy H-II emission knots (including huge NGC 604)
        const knots = [
            { x: 320, y: 190, r: 8, color: 'rgba(255, 70, 120, 0.85)' }, // NGC 604
            { x: 210, y: 310, r: 6, color: 'rgba(255, 90, 140, 0.7)' },
            { x: 180, y: 200, r: 5, color: 'rgba(255, 80, 130, 0.65)' },
            { x: 300, y: 300, r: 5, color: 'rgba(255, 100, 150, 0.6)' },
            { x: 250, y: 150, r: 6, color: 'rgba(255, 90, 130, 0.7)' },
        ];
        knots.forEach(k => {
            ctx.fillStyle = k.color;
            ctx.beginPath();
            ctx.arc(k.x, k.y, k.r, 0, Math.PI * 2);
            ctx.fill();
        });

        // Small modest core
        const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
        core.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        core.addColorStop(0.6, 'rgba(255, 230, 180, 0.5)');
        core.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(cx, cy, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M101 Pinwheel Galaxy (Giant face-on asymmetrical spiral)
    // -------------------------------------------------------------
    private static drawM101Pinwheel(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        ctx.save();
        ctx.translate(cx, cy);

        // 5 multi-branching swirling arms
        for (let a = 0; a < 5; a++) {
            ctx.strokeStyle = 'rgba(120, 180, 255, 0.35)';
            ctx.lineWidth = 14;
            ctx.beginPath();
            for (let t = 0.4; t < 2.8; t += 0.05) {
                const r = 20 * Math.exp(0.55 * t);
                const angle = t * 1.8 + a * (Math.PI * 2 / 5);
                const x = r * Math.cos(angle);
                const y = r * Math.sin(angle);
                if (t === 0.4) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        // Brilliant compact nucleus
        const core = ctx.createRadialGradient(0, 0, 0, 0, 0, 25);
        core.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        core.addColorStop(0.4, 'rgba(255, 240, 180, 0.85)');
        core.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(0, 0, 25, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    // -------------------------------------------------------------
    // M42 Orion Nebula (Giant wings, Trapezium cluster, dark bay)
    // -------------------------------------------------------------
    private static drawM42Orion(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 240;

        // Outer vast H-alpha red wings
        const outer = ctx.createRadialGradient(cx, cy, 20, cx, cy, 240);
        outer.addColorStop(0, 'rgba(255, 70, 120, 0.8)');
        outer.addColorStop(0.4, 'rgba(210, 40, 90, 0.55)');
        outer.addColorStop(0.7, 'rgba(140, 25, 60, 0.25)');
        outer.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = outer;
        ctx.beginPath();
        ctx.moveTo(cx - 210, cy + 80);
        ctx.quadraticCurveTo(cx - 160, cy - 130, cx, cy - 70);
        ctx.quadraticCurveTo(cx + 160, cy - 130, cx + 210, cy + 80);
        ctx.quadraticCurveTo(cx, cy + 180, cx - 210, cy + 80);
        ctx.fill();

        // Inner glowing teal/emerald O-III gas core
        const coreO3 = ctx.createRadialGradient(cx, cy - 15, 0, cx, cy - 15, 95);
        coreO3.addColorStop(0, 'rgba(240, 255, 250, 0.95)');
        coreO3.addColorStop(0.3, 'rgba(70, 230, 200, 0.7)');
        coreO3.addColorStop(0.7, 'rgba(40, 160, 160, 0.3)');
        coreO3.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = coreO3;
        ctx.beginPath();
        ctx.arc(cx, cy - 15, 95, 0, Math.PI * 2);
        ctx.fill();

        // Dark Fish's Mouth (Sinus Magnus) dust bay
        ctx.fillStyle = 'rgba(8, 6, 12, 0.85)';
        ctx.beginPath();
        ctx.moveTo(cx - 80, cy - 110);
        ctx.quadraticCurveTo(cx - 20, cy - 35, cx - 5, cy - 10);
        ctx.quadraticCurveTo(cx - 50, cy - 10, cx - 110, cy - 50);
        ctx.fill();

        // Trapezium Cluster
        const trapStars = [
            { x: cx, y: cy - 15 },
            { x: cx + 7, y: cy - 20 },
            { x: cx + 11, y: cy - 10 },
            { x: cx - 4, y: cy - 7 },
        ];
        trapStars.forEach(s => {
            const sg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 12);
            sg.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
            sg.addColorStop(0.4, 'rgba(180, 240, 255, 0.8)');
            sg.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = sg;
            ctx.beginPath();
            ctx.arc(s.x, s.y, 12, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // -------------------------------------------------------------
    // M43 De Mairan's Nebula (Comma shape wrapped around central star)
    // -------------------------------------------------------------
    private static drawM43DeMairan(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        const g = ctx.createRadialGradient(cx + 10, cy - 10, 5, cx, cy, 140);
        g.addColorStop(0, 'rgba(255, 120, 160, 0.85)');
        g.addColorStop(0.5, 'rgba(210, 50, 90, 0.45)');
        g.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 110, 75, -0.4, 0, Math.PI * 2);
        ctx.fill();

        const star = ctx.createRadialGradient(cx + 15, cy - 10, 0, cx + 15, cy - 10, 16);
        star.addColorStop(0, 'rgba(255, 255, 255, 1)');
        star.addColorStop(0.4, 'rgba(190, 220, 255, 0.8)');
        star.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = star;
        ctx.beginPath();
        ctx.arc(cx + 15, cy - 10, 16, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M20 Trifid Nebula (Three-lobed pink emission + azure reflection)
    // -------------------------------------------------------------
    private static drawM20Trifid(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        // Top half: Azure blue reflection nebula
        const blueNeb = ctx.createRadialGradient(cx, cy - 90, 10, cx, cy - 90, 110);
        blueNeb.addColorStop(0, 'rgba(180, 230, 255, 0.9)');
        blueNeb.addColorStop(0.4, 'rgba(70, 150, 255, 0.55)');
        blueNeb.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = blueNeb;
        ctx.beginPath();
        ctx.arc(cx, cy - 90, 110, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(cx - 15, cy - 90, 3, 0, Math.PI * 2);
        ctx.arc(cx + 20, cy - 80, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Bottom half: Pink/red emission nebula
        const redNeb = ctx.createRadialGradient(cx, cy + 65, 10, cx, cy + 65, 130);
        redNeb.addColorStop(0, 'rgba(255, 240, 240, 0.95)');
        redNeb.addColorStop(0.3, 'rgba(255, 60, 110, 0.8)');
        redNeb.addColorStop(0.7, 'rgba(210, 30, 80, 0.35)');
        redNeb.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = redNeb;
        ctx.beginPath();
        ctx.arc(cx, cy + 65, 130, 0, Math.PI * 2);
        ctx.fill();

        // The 3 dark dust lanes
        ctx.save();
        ctx.translate(cx, cy + 65);
        ctx.strokeStyle = 'rgba(6, 6, 12, 0.92)';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(-10, -120);
        ctx.moveTo(0, 0); ctx.lineTo(-95, 80);
        ctx.moveTo(0, 0); ctx.lineTo(95, 75);
        ctx.stroke();
        ctx.restore();

        const ts = ctx.createRadialGradient(cx, cy + 65, 0, cx, cy + 65, 14);
        ts.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        ts.addColorStop(0.5, 'rgba(255, 220, 180, 0.7)');
        ts.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ts;
        ctx.beginPath();
        ctx.arc(cx, cy + 65, 14, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M8 Lagoon Nebula (Hourglass dark lane with open cluster NGC 6530)
    // -------------------------------------------------------------
    private static drawM8Lagoon(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const cloud = ctx.createRadialGradient(cx, cy, 20, cx, cy, 220);
        cloud.addColorStop(0, 'rgba(255, 100, 140, 0.85)');
        cloud.addColorStop(0.4, 'rgba(220, 40, 80, 0.6)');
        cloud.addColorStop(0.8, 'rgba(150, 20, 50, 0.2)');
        cloud.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = cloud;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 220, 140, 0.2, 0, Math.PI * 2);
        ctx.fill();

        // Dark lagoon lane
        ctx.fillStyle = 'rgba(8, 6, 12, 0.88)';
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy - 140);
        ctx.quadraticCurveTo(cx - 5, cy, cx - 40, cy + 140);
        ctx.lineTo(cx + 10, cy + 140);
        ctx.quadraticCurveTo(cx + 35, cy, cx + 15, cy - 140);
        ctx.fill();

        // Hourglass core
        const hg = ctx.createRadialGradient(cx + 65, cy + 10, 0, cx + 65, cy + 10, 36);
        hg.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        hg.addColorStop(0.3, 'rgba(255, 200, 220, 0.85)');
        hg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(cx + 65, cy + 10, 36, 0, Math.PI * 2);
        ctx.fill();

        // Cluster NGC 6530 stars
        for (let i = 0; i < 25; i++) {
            const sx = cx - 110 + (Math.random() - 0.5) * 90;
            const sy = cy + (Math.random() - 0.5) * 80;
            ctx.fillStyle = `rgba(200, 230, 255, ${0.6 + Math.random() * 0.4})`;
            ctx.beginPath();
            ctx.arc(sx, sy, 1.0 + Math.random() * 2.2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // -------------------------------------------------------------
    // M16 Eagle Nebula (Pillars of Creation silhouettes in center)
    // -------------------------------------------------------------
    private static drawM16Eagle(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const g = ctx.createRadialGradient(cx, cy, 20, cx, cy, 200);
        g.addColorStop(0, 'rgba(255, 120, 140, 0.85)');
        g.addColorStop(0.5, 'rgba(210, 40, 70, 0.5)');
        g.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, 200, 0, Math.PI * 2);
        ctx.fill();

        // The Pillars of Creation
        ctx.fillStyle = 'rgba(10, 8, 14, 0.92)';
        ctx.beginPath();
        ctx.moveTo(cx - 35, cy + 90);
        ctx.lineTo(cx - 30, cy - 35);
        ctx.arc(cx - 26, cy - 35, 6, Math.PI, 0);
        ctx.lineTo(cx - 18, cy + 90);

        ctx.moveTo(cx - 12, cy + 90);
        ctx.lineTo(cx - 8, cy - 10);
        ctx.arc(cx - 4, cy - 10, 5, Math.PI, 0);
        ctx.lineTo(cx + 2, cy + 90);

        ctx.moveTo(cx + 8, cy + 90);
        ctx.lineTo(cx + 12, cy + 15);
        ctx.arc(cx + 16, cy + 15, 5, Math.PI, 0);
        ctx.lineTo(cx + 24, cy + 90);
        ctx.fill();

        for (let i = 0; i < 30; i++) {
            const sx = cx + (Math.random() - 0.5) * 260;
            const sy = cy + (Math.random() - 0.5) * 260;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(sx, sy, 1.2 + Math.random() * 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // -------------------------------------------------------------
    // M17 Swan / Omega Nebula (Curved swan neck profile)
    // -------------------------------------------------------------
    private static drawM17Swan(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const bar = ctx.createLinearGradient(cx - 180, cy + 20, cx + 180, cy + 20);
        bar.addColorStop(0, 'rgba(0,0,0,0)');
        bar.addColorStop(0.3, 'rgba(255, 80, 110, 0.75)');
        bar.addColorStop(0.7, 'rgba(255, 120, 150, 0.85)');
        bar.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = bar;
        ctx.fillRect(cx - 180, cy + 5, 360, 35);

        ctx.strokeStyle = 'rgba(255, 160, 180, 0.85)';
        ctx.lineWidth = 26;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 60, cy + 15);
        ctx.quadraticCurveTo(cx - 90, cy - 80, cx - 10, cy - 70);
        ctx.quadraticCurveTo(cx + 40, cy - 65, cx + 20, cy - 20);
        ctx.stroke();

        const glow = ctx.createRadialGradient(cx, cy, 30, cx, cy, 200);
        glow.addColorStop(0, 'rgba(255, 60, 90, 0.45)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, 200, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M78 Reflection Nebula in Orion (Ghostly azure cloud with dark cut)
    // -------------------------------------------------------------
    private static drawM78Reflection(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 150);
        g.addColorStop(0, 'rgba(210, 240, 255, 0.9)');
        g.addColorStop(0.4, 'rgba(100, 180, 255, 0.55)');
        g.addColorStop(0.8, 'rgba(50, 120, 220, 0.2)');
        g.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 140, 100, 0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(6, 8, 14, 0.85)';
        ctx.beginPath();
        ctx.arc(cx - 80, cy + 30, 80, 0, Math.PI * 2);
        ctx.fill();

        const stars = [{ x: cx - 12, y: cy - 8 }, { x: cx + 18, y: cy + 12 }];
        stars.forEach(s => {
            const sg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 14);
            sg.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
            sg.addColorStop(0.5, 'rgba(200, 230, 255, 0.8)');
            sg.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = sg;
            ctx.beginPath();
            ctx.arc(s.x, s.y, 14, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // -------------------------------------------------------------
    // M1 Crab Nebula (Supernova remnant filamentary spider-web)
    // -------------------------------------------------------------
    private static drawM1Crab(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const synch = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
        synch.addColorStop(0, 'rgba(180, 255, 240, 0.7)');
        synch.addColorStop(0.4, 'rgba(60, 200, 190, 0.4)');
        synch.addColorStop(0.8, 'rgba(30, 110, 140, 0.15)');
        synch.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = synch;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 140, 95, 0.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(0.35);

        for (let i = 0; i < 45; i++) {
            const angle = (i / 45) * Math.PI * 2;
            const len = 100 + Math.random() * 45;
            const x1 = Math.cos(angle) * 35;
            const y1 = Math.sin(angle) * 25;
            const x2 = Math.cos(angle) * len;
            const y2 = Math.sin(angle) * (len * 0.68);

            ctx.strokeStyle = `rgba(255, ${70 + Math.random() * 80}, 50, ${0.45 + Math.random() * 0.4})`;
            ctx.lineWidth = 2.0 + Math.random() * 2.5;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            const cx1 = (x1 + x2) * 0.5 + (Math.random() - 0.5) * 20;
            const cy1 = (y1 + y2) * 0.5 + (Math.random() - 0.5) * 20;
            ctx.quadraticCurveTo(cx1, cy1, x2, y2);
            ctx.stroke();
        }
        ctx.restore();

        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M57 Ring Nebula (Classic smoke ring with O-III core and red rim)
    // -------------------------------------------------------------
    private static drawM57Ring(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const ring = ctx.createRadialGradient(cx, cy, 40, cx, cy, 220);
        ring.addColorStop(0, 'rgba(10, 20, 35, 0.02)');
        ring.addColorStop(0.25, 'rgba(20, 60, 70, 0.15)');
        ring.addColorStop(0.45, 'rgba(50, 220, 180, 0.65)');
        ring.addColorStop(0.65, 'rgba(240, 70, 90, 0.5)');
        ring.addColorStop(0.82, 'rgba(180, 40, 60, 0.15)');
        ring.addColorStop(0.95, 'rgba(100, 20, 40, 0.03)');
        ring.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ring;
        ctx.beginPath();
        ctx.arc(cx, cy, 220, 0, Math.PI * 2);
        ctx.fill();

        const star = ctx.createRadialGradient(cx, cy, 0, cx, cy, 10);
        star.addColorStop(0, 'rgba(255, 255, 255, 1)');
        star.addColorStop(0.4, 'rgba(190, 230, 255, 0.8)');
        star.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = star;
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M27 Dumbbell Nebula (Two-lobed hourglass / apple-core in Vulpecula)
    // -------------------------------------------------------------
    private static drawM27Dumbbell(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(0.2);

        const redWings = ctx.createRadialGradient(0, 0, 20, 0, 0, 210);
        redWings.addColorStop(0, 'rgba(255, 60, 80, 0.35)');
        redWings.addColorStop(0.6, 'rgba(220, 40, 60, 0.2)');
        redWings.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = redWings;
        ctx.beginPath();
        ctx.ellipse(0, 0, 210, 150, 0, 0, Math.PI * 2);
        ctx.fill();

        const tealCore = ctx.createRadialGradient(0, 0, 10, 0, 0, 140);
        tealCore.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        tealCore.addColorStop(0.3, 'rgba(60, 230, 190, 0.85)');
        tealCore.addColorStop(0.7, 'rgba(30, 160, 140, 0.45)');
        tealCore.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = tealCore;
        ctx.beginPath();
        ctx.moveTo(-110, -110);
        ctx.quadraticCurveTo(-45, 0, -110, 110);
        ctx.lineTo(110, 110);
        ctx.quadraticCurveTo(45, 0, 110, -110);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    // -------------------------------------------------------------
    // M97 Owl Nebula (Greenish sphere with two dark eyes)
    // -------------------------------------------------------------
    private static drawM97Owl(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const bubble = ctx.createRadialGradient(cx, cy, 30, cx, cy, 180);
        bubble.addColorStop(0, 'rgba(80, 230, 180, 0.7)');
        bubble.addColorStop(0.5, 'rgba(50, 180, 150, 0.5)');
        bubble.addColorStop(0.85, 'rgba(30, 120, 100, 0.2)');
        bubble.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bubble;
        ctx.beginPath();
        ctx.arc(cx, cy, 180, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(6, 12, 16, 0.75)';
        ctx.beginPath();
        ctx.arc(cx - 50, cy - 25, 38, 0, Math.PI * 2);
        ctx.arc(cx + 50, cy - 25, 38, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(240, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(cx, cy + 10, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // -------------------------------------------------------------
    // M45 Pleiades (The Seven Sisters wrapped in radiant blue dust)
    // -------------------------------------------------------------
    private static drawM45Pleiades(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;

        const neb = ctx.createRadialGradient(cx, cy, 40, cx, cy, 230);
        neb.addColorStop(0, 'rgba(180, 220, 255, 0.6)');
        neb.addColorStop(0.4, 'rgba(90, 170, 255, 0.35)');
        neb.addColorStop(0.8, 'rgba(40, 100, 200, 0.12)');
        neb.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = neb;
        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(160, 210, 255, 0.2)';
        ctx.lineWidth = 8;
        for (let i = 0; i < 12; i++) {
            ctx.beginPath();
            const y = 80 + i * 28;
            ctx.moveTo(70, y);
            ctx.lineTo(440, y + 35);
            ctx.stroke();
        }

        const stars = [
            { x: cx + 25, y: cy + 15, mag: 2.8 },
            { x: cx - 60, y: cy - 45, mag: 3.8 },
            { x: cx - 110, y: cy - 25, mag: 3.7 },
            { x: cx - 45, y: cy + 65, mag: 4.1 },
            { x: cx - 120, y: cy - 75, mag: 4.3 },
            { x: cx - 95, y: cy - 60, mag: 5.4 },
            { x: cx + 110, y: cy - 35, mag: 3.6 },
            { x: cx + 115, y: cy - 55, mag: 5.0 },
        ];

        stars.forEach(s => {
            const r = 8 - s.mag * 0.9;
            const sg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 5);
            sg.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
            sg.addColorStop(0.2, 'rgba(210, 240, 255, 0.9)');
            sg.addColorStop(0.6, 'rgba(120, 180, 255, 0.4)');
            sg.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = sg;
            ctx.beginPath();
            ctx.arc(s.x, s.y, r * 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(s.x - r * 6, s.y); ctx.lineTo(s.x + r * 6, s.y);
            ctx.moveTo(s.x, s.y - r * 6); ctx.lineTo(s.x, s.y + r * 6);
            ctx.stroke();
        });
    }

    // -------------------------------------------------------------
    // M44 Beehive Cluster / Praesepe in Cancer
    // -------------------------------------------------------------
    private static drawM44Beehive(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        for (let i = 0; i < 75; i++) {
            const rad = Math.pow(Math.random(), 0.8) * 190;
            const angle = Math.random() * Math.PI * 2;
            const x = cx + Math.cos(angle) * rad;
            const y = cy + Math.sin(angle) * rad;
            const isWarm = Math.random() < 0.35;
            const col = isWarm ? '#fed7aa' : '#e0f2fe';

            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.arc(x, y, 1.0 + Math.random() * 2.6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // -------------------------------------------------------------
    // M11 Wild Duck Cluster (V-shaped compact cluster)
    // -------------------------------------------------------------
    private static drawM11WildDuck(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
        bg.addColorStop(0, 'rgba(255, 240, 210, 0.5)');
        bg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(cx, cy, 140, 0, Math.PI * 2);
        ctx.fill();

        for (let i = 0; i < 180; i++) {
            const t = Math.random();
            const spread = t * 110;
            const x = cx + (Math.random() - 0.5) * spread;
            const y = cy - 80 + t * 170 + (Math.random() - 0.5) * 20;

            ctx.fillStyle = `rgba(255, ${210 + Math.random() * 45}, ${160 + Math.random() * 95}, ${0.5 + Math.random() * 0.5})`;
            ctx.beginPath();
            ctx.arc(x, y, 0.8 + Math.random() * 2.0, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // -------------------------------------------------------------
    // M35 Open Cluster in Gemini
    // -------------------------------------------------------------
    private static drawM35OpenCluster(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        for (let i = 0; i < 120; i++) {
            const rad = Math.pow(Math.random(), 0.9) * 200;
            const angle = Math.random() * Math.PI * 2;
            ctx.fillStyle = `rgba(210, 235, 255, ${0.4 + Math.random() * 0.6})`;
            ctx.beginPath();
            ctx.arc(cx + Math.cos(angle) * rad, cy + Math.sin(angle) * rad, 1.0 + Math.random() * 2.0, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // -------------------------------------------------------------
    // M13 Great Hercules Globular Cluster (Dense 300,000 star swarm)
    // -------------------------------------------------------------
    private static drawM13Hercules(ctx: CanvasRenderingContext2D) {
        this.drawGlobular(ctx, '#f0f9ff', 240, 1.25);
    }

    // Helper for Globular Clusters
    private static drawGlobular(ctx: CanvasRenderingContext2D, baseHue: string, radius: number, densityMult: number) {
        const cx = 256, cy = 256;

        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        bg.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        bg.addColorStop(0.18, 'rgba(255, 245, 210, 0.8)');
        bg.addColorStop(0.45, 'rgba(210, 225, 255, 0.35)');
        bg.addColorStop(0.8, 'rgba(120, 160, 240, 0.08)');
        bg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        const numStars = Math.floor(350 * densityMult);
        for (let i = 0; i < numStars; i++) {
            const rad = Math.pow(Math.random(), 2.8) * radius;
            const angle = Math.random() * Math.PI * 2;
            const x = cx + Math.cos(angle) * rad;
            const y = cy + Math.sin(angle) * rad;
            const alpha = 0.4 + Math.random() * 0.6;

            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, 0.6 + Math.random() * 1.8, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Generic Galaxy Fallback
    private static drawGenericGalaxy(ctx: CanvasRenderingContext2D) {
        const cx = 256, cy = 256;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
        g.addColorStop(0, 'rgba(255, 250, 230, 0.9)');
        g.addColorStop(0.3, 'rgba(210, 230, 255, 0.5)');
        g.addColorStop(0.7, 'rgba(120, 160, 240, 0.15)');
        g.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 180, 90, 0.4, 0, Math.PI * 2);
        ctx.fill();
    }
}
