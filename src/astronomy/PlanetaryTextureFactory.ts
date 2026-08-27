import * as THREE from 'three';

/**
 * Astrophotography-Grade Planetary Texture Factory.
 * Generates photorealistic, high-resolution (1024x1024) planetary textures with
 * authentic scientific albedo features, oblate spheroids, atmospheric dynamics,
 * and true spherical orthographic projections.
 */
export class PlanetaryTextureFactory {
  private static cache: Map<string, THREE.Texture> = new Map();

  public static getPlanetTexture(planetId: string): THREE.Texture {
    if (this.cache.has(planetId)) {
      return this.cache.get(planetId)!;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    switch (planetId) {
      case 'saturn':
        this.drawSaturn(ctx);
        break;
      case 'jupiter':
        this.drawJupiter(ctx);
        break;
      case 'mars':
        this.drawMars(ctx);
        break;
      case 'venus':
        this.drawVenus(ctx);
        break;
      case 'mercury':
        this.drawMercury(ctx);
        break;
      case 'uranus':
        this.drawUranus(ctx);
        break;
      case 'neptune':
        this.drawNeptune(ctx);
        break;
      default:
        this.drawJupiter(ctx);
        break;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.cache.set(planetId, texture);

    // Asynchronously upgrade with authentic NASA/ESA observation photo
    const baseUrl = (import.meta as any).env?.BASE_URL || './';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const photoUrl = `${cleanBase}textures/planets/${planetId}.png`;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      texture.image = img;
      texture.needsUpdate = true;
    };
    img.src = photoUrl;

    return texture;
  }

  // =========================================================================
  // SATURN: Oblate Golden Globe with Photorealistic Multi-Ring System
  // =========================================================================
  private static drawSaturn(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512;
    const globeEqR = 140; // Equatorial radius
    const globePolR = 126; // Polar radius (10% oblateness)

    // Outer soft planetary glow
    const glow = ctx.createRadialGradient(cx, cy, 100, cx, cy, 480);
    glow.addColorStop(0, 'rgba(254, 240, 138, 0.25)');
    glow.addColorStop(0.5, 'rgba(217, 119, 6, 0.06)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.48); // ~27 degree axial tilt

    // 1. Back half of rings (rendered behind the globe)
    ctx.save();
    ctx.beginPath();
    ctx.rect(-500, -500, 1000, 500); // Upper half behind globe
    ctx.clip();
    this.renderSaturnRingBands(ctx);
    ctx.restore();

    // 2. The Globe: Oblate Spheroid with subtle cloud banding
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(0, 0, globeEqR, globePolR, 0, 0, Math.PI * 2);
    ctx.clip();

    // Base butterscotch/honey gradient
    const globeBase = ctx.createRadialGradient(-35, -35, 10, 0, 0, globeEqR);
    globeBase.addColorStop(0, '#fef9c3');
    globeBase.addColorStop(0.25, '#fef08a');
    globeBase.addColorStop(0.55, '#eab308');
    globeBase.addColorStop(0.82, '#ca8a04');
    globeBase.addColorStop(1.0, '#713f12');
    ctx.fillStyle = globeBase;
    ctx.fill();

    // Detailed horizontal cloud belts (temperate, equatorial, tropical)
    const belts = [
      { y: -105, h: 18, color: 'rgba(161, 98, 7, 0.35)' },
      { y: -75, h: 22, color: 'rgba(254, 240, 138, 0.45)' },
      { y: -45, h: 16, color: 'rgba(202, 138, 4, 0.4)' },
      { y: -15, h: 32, color: 'rgba(254, 249, 195, 0.65)' }, // Bright Equatorial Zone
      { y: 22, h: 20, color: 'rgba(180, 83, 9, 0.42)' },
      { y: 55, h: 18, color: 'rgba(234, 179, 8, 0.35)' },
      { y: 85, h: 24, color: 'rgba(161, 98, 7, 0.38)' },
    ];
    belts.forEach(b => {
      ctx.fillStyle = b.color;
      ctx.fillRect(-globeEqR, b.y, globeEqR * 2, b.h);
    });

    // North Polar Hexagon (bluish-green polar cap)
    const polarCap = ctx.createRadialGradient(0, -globePolR + 15, 0, 0, -globePolR + 15, 36);
    polarCap.addColorStop(0, 'rgba(125, 211, 252, 0.6)');
    polarCap.addColorStop(0.6, 'rgba(56, 189, 248, 0.25)');
    polarCap.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = polarCap;
    ctx.beginPath();
    ctx.arc(0, -globePolR + 15, 36, 0, Math.PI * 2);
    ctx.fill();

    // 3D Spherical Limb Darkening on the globe
    const limb = ctx.createRadialGradient(0, 0, globePolR * 0.6, 0, 0, globeEqR);
    limb.addColorStop(0, 'rgba(0, 0, 0, 0)');
    limb.addColorStop(0.75, 'rgba(0, 0, 0, 0.2)');
    limb.addColorStop(1.0, 'rgba(20, 10, 0, 0.7)');
    ctx.fillStyle = limb;
    ctx.fill();

    ctx.restore();

    // 3. Globe Shadow cast onto the back rings
    ctx.save();
    ctx.beginPath();
    ctx.rect(-500, -500, 1000, 500); // Back ring area
    ctx.clip();
    const globeShadow = ctx.createLinearGradient(0, 0, -140, -180);
    globeShadow.addColorStop(0, 'rgba(6, 4, 10, 0.95)');
    globeShadow.addColorStop(0.7, 'rgba(6, 4, 10, 0.8)');
    globeShadow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = globeShadow;
    ctx.beginPath();
    ctx.ellipse(35, -45, 110, 160, 0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 4. Front half of rings (rendered in front of the globe)
    ctx.save();
    ctx.beginPath();
    ctx.rect(-500, 0, 1000, 500); // Lower half in front of globe
    ctx.clip();
    this.renderSaturnRingBands(ctx);
    ctx.restore();

    // 5. Ring Shadow cast onto the front of the globe
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(0, 0, globeEqR, globePolR, 0, 0, Math.PI * 2);
    ctx.clip();

    ctx.strokeStyle = 'rgba(10, 6, 2, 0.88)';
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.ellipse(0, 12, globeEqR * 1.05, 34, 0, 0, Math.PI);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(10, 6, 2, 0.45)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.ellipse(0, 24, globeEqR * 1.05, 38, 0, 0, Math.PI);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
  }

  private static renderSaturnRingBands(ctx: CanvasRenderingContext2D) {
    // Photorealistic Saturnian Ring Structure:
    // C Ring (Crepe): r = 160..215 (translucent amber)
    // B Ring (Main dense): r = 220..315 (brightest, golden cream with density grooves)
    // Cassini Division: r = 315..330 (pitch-black void gap)
    // A Ring: r = 330..420 (medium bright with Encke gap)

    // Ring C (Crepe ring)
    for (let r = 160; r <= 215; r += 4) {
      const alpha = 0.25 + (r - 160) / 200;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.05, r * 0.28, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(180, 83, 9, ${alpha * 0.4})`;
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    // Ring B (Brightest, dense icy ring with fine micro-bands)
    for (let r = 220; r <= 315; r += 3) {
      const rel = (r - 220) / 95;
      const brightness = 0.75 + Math.sin(rel * 14) * 0.15;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.05, r * 0.28, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(254, 240, 138, ${brightness})`;
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    // Cassini Division (Sharp, jet black void gap)
    ctx.beginPath();
    ctx.ellipse(0, 0, 322 * 1.05, 322 * 0.28, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.98)';
    ctx.lineWidth = 14;
    ctx.stroke();

    // Ring A (Outer ring with Encke division at r ~ 395)
    for (let r = 332; r <= 425; r += 3) {
      const isEncke = Math.abs(r - 395) <= 2;
      const alpha = isEncke ? 0.05 : 0.55 + Math.sin(r * 0.1) * 0.08;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.05, r * 0.28, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(226, 232, 240, ${alpha})`;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  }

  // =========================================================================
  // JUPITER: Oblate Spheroid with Great Red Spot, Turbulent Festoons & Belts
  // =========================================================================
  private static drawJupiter(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512;
    const eqR = 340;  // Equatorial radius
    const polR = 318; // Polar radius (rapid rotation oblateness ~1:1.07)

    // Outer warm atmospheric glow
    const glow = ctx.createRadialGradient(cx, cy, 220, cx, cy, 480);
    glow.addColorStop(0, 'rgba(254, 215, 170, 0.35)');
    glow.addColorStop(0.6, 'rgba(194, 65, 12, 0.08)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, eqR, polR, 0, 0, Math.PI * 2);
    ctx.clip();

    // Base creamy atmosphere gradient
    const base = ctx.createLinearGradient(cx, cy - polR, cx, cy + polR);
    base.addColorStop(0, '#78716c');    // North polar hood (slate gray)
    base.addColorStop(0.18, '#fed7aa'); // North temperate zone
    base.addColorStop(0.32, '#c2410c'); // North Equatorial Belt (NEB)
    base.addColorStop(0.5, '#fff7ed');  // Equatorial Zone (EZ)
    base.addColorStop(0.68, '#9a3412'); // South Equatorial Belt (SEB)
    base.addColorStop(0.85, '#fed7aa'); // South temperate zone
    base.addColorStop(1.0, '#78716c');  // South polar hood
    ctx.fillStyle = base;
    ctx.fillRect(cx - eqR, cy - polR, eqR * 2, polR * 2);

    // Multi-layered cloud bands with turbulent wave patterns
    const bands = [
      { y: -240, h: 32, color: 'rgba(120, 113, 108, 0.55)' },
      { y: -190, h: 28, color: 'rgba(180, 83, 9, 0.65)' },    // NTB
      { y: -145, h: 42, color: 'rgba(255, 237, 213, 0.85)' }, // NTrZ
      { y: -95,  h: 56, color: 'rgba(154, 52, 18, 0.85)' },   // NEB (Rich Reddish-Brown)
      { y: -30,  h: 50, color: 'rgba(255, 247, 237, 0.95)' }, // EZ (Creamy White)
      { y: 35,   h: 62, color: 'rgba(194, 65, 12, 0.85)' },   // SEB (Double-track)
      { y: 110,  h: 42, color: 'rgba(254, 215, 170, 0.85)' }, // STrZ
      { y: 165,  h: 30, color: 'rgba(180, 83, 9, 0.6)' },     // STB
      { y: 215,  h: 35, color: 'rgba(120, 113, 108, 0.55)' },
    ];

    bands.forEach(b => {
      ctx.fillStyle = b.color;
      // Wavy sinusoidal perturbation along the belt edges
      ctx.beginPath();
      ctx.moveTo(cx - eqR, cy + b.y);
      for (let x = cx - eqR; x <= cx + eqR; x += 16) {
        const wave = Math.sin((x - cx) * 0.025 + b.y * 0.1) * 4.5;
        ctx.lineTo(x, cy + b.y + wave);
      }
      ctx.lineTo(cx + eqR, cy + b.y + b.h);
      for (let x = cx + eqR; x >= cx - eqR; x -= 16) {
        const wave = Math.cos((x - cx) * 0.03 + b.y * 0.08) * 4.0;
        ctx.lineTo(x, cy + b.y + b.h + wave);
      }
      ctx.closePath();
      ctx.fill();
    });

    // Equatorial Blue Festoons (cyan plumes curling into Equatorial Zone)
    for (let f = 0; f < 6; f++) {
      const fx = cx - eqR + 80 + f * 110;
      const fy = cy - 40;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(fx, fy - 10);
      ctx.quadraticCurveTo(fx + 25, fy + 22, fx + 50, fy + 12);
      ctx.stroke();
    }

    // THE GREAT RED SPOT (大紅斑 in Southern Hemisphere)
    const grsX = cx + 85;
    const grsY = cy + 62;
    const grsW = 68;
    const grsH = 42;

    // GRS Hollow (white bay in the SEB around the Red Spot)
    ctx.fillStyle = 'rgba(255, 245, 235, 0.9)';
    ctx.beginPath();
    ctx.ellipse(grsX, grsY, grsW + 16, grsH + 12, -0.08, 0, Math.PI * 2);
    ctx.fill();

    // GRS Outer Collar (terracotta)
    const grsGrad = ctx.createRadialGradient(grsX, grsY, 6, grsX, grsY, grsW);
    grsGrad.addColorStop(0, '#f87171');
    grsGrad.addColorStop(0.4, '#dc2626');
    grsGrad.addColorStop(0.75, '#991b1b');
    grsGrad.addColorStop(1.0, 'rgba(127, 29, 29, 0.7)');
    ctx.fillStyle = grsGrad;
    ctx.beginPath();
    ctx.ellipse(grsX, grsY, grsW, grsH, -0.08, 0, Math.PI * 2);
    ctx.fill();

    // GRS Inner High-Velocity Swirling Eye
    ctx.fillStyle = 'rgba(254, 226, 226, 0.75)';
    ctx.beginPath();
    ctx.ellipse(grsX - 4, grsY - 2, 22, 12, -0.15, 0, Math.PI * 2);
    ctx.fill();

    // GRS Trailing Turbulent Wake (downwind eddies)
    for (let w = 0; w < 4; w++) {
      const wx = grsX + grsW + 15 + w * 28;
      const wy = grsY + (w % 2 === 0 ? 8 : -8);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(wx, wy, 4 + w, 0, Math.PI * 2);
      ctx.fill();
    }

    // White Oval Storms in South Temperate Belt (Oval BA)
    for (let o = 0; o < 3; o++) {
      const ox = cx - 180 + o * 140;
      const oy = cy + 165;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.beginPath();
      ctx.ellipse(ox, oy, 16, 9, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3D Spherical Limb Darkening (strong Rayleigh atmospheric extinction)
    const limb = ctx.createRadialGradient(cx - 50, cy - 30, polR * 0.4, cx, cy, eqR);
    limb.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    limb.addColorStop(0.65, 'rgba(0, 0, 0, 0)');
    limb.addColorStop(0.88, 'rgba(0, 0, 0, 0.35)');
    limb.addColorStop(1.0, 'rgba(15, 10, 5, 0.82)');
    ctx.fillStyle = limb;
    ctx.beginPath();
    ctx.ellipse(cx, cy, eqR, polR, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // =========================================================================
  // MARS: Detailed Albedo Features (Syrtis Major, Hellas, North Polar Cap)
  // =========================================================================
  private static drawMars(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512, R = 330;

    // Atmospheric warm red halo
    const halo = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 1.35);
    halo.addColorStop(0, 'rgba(239, 68, 68, 0.3)');
    halo.addColorStop(0.6, 'rgba(185, 28, 28, 0.08)');
    halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // Red-orange desert surface base
    const surface = ctx.createRadialGradient(cx - 60, cy - 60, 30, cx, cy, R);
    surface.addColorStop(0, '#fca5a5'); // Bright Ochre Highlands
    surface.addColorStop(0.3, '#f87171');
    surface.addColorStop(0.65, '#dc2626');
    surface.addColorStop(0.9, '#991b1b');
    surface.addColorStop(1.0, '#450a0a');
    ctx.fillStyle = surface;
    ctx.fill();

    // Iconic Martian Albedo Dark Markings (Basaltic volcanic plains)
    ctx.fillStyle = 'rgba(55, 12, 12, 0.75)';

    // 1. Syrtis Major Planum (Iconic dark triangular shield volcano plateau)
    ctx.beginPath();
    ctx.moveTo(cx + 40, cy - 90);
    ctx.lineTo(cx + 140, cy + 30);
    ctx.lineTo(cx + 20, cy + 85);
    ctx.closePath();
    ctx.fill();

    // 2. Sinus Sabaeus & Sinus Meridiani (Dark equatorial strip)
    ctx.beginPath();
    ctx.ellipse(cx - 80, cy + 25, 120, 38, -0.15, 0, Math.PI * 2);
    ctx.fill();

    // 3. Mare Tyrrhenum & Mare Cimmerium (Southern dark belt)
    ctx.beginPath();
    ctx.ellipse(cx + 60, cy + 120, 150, 45, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 4. Valles Marineris (Great Rift Canyon network)
    ctx.strokeStyle = 'rgba(35, 6, 6, 0.8)';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx - 190, cy - 20);
    ctx.quadraticCurveTo(cx - 100, cy - 10, cx - 20, cy - 35);
    ctx.stroke();

    // Hellas Planitia (Bright golden-pink circular impact basin)
    const hellas = ctx.createRadialGradient(cx + 125, cy + 145, 10, cx + 125, cy + 145, 65);
    hellas.addColorStop(0, 'rgba(254, 215, 170, 0.85)');
    hellas.addColorStop(0.6, 'rgba(251, 146, 60, 0.45)');
    hellas.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = hellas;
    ctx.beginPath();
    ctx.arc(cx + 125, cy + 145, 65, 0, Math.PI * 2);
    ctx.fill();

    // North Polar Ice Cap (Brilliant White Water-Ice & CO2 Frost)
    const polarCap = ctx.createRadialGradient(cx, cy - R + 35, 5, cx, cy - R + 35, 80);
    polarCap.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    polarCap.addColorStop(0.4, 'rgba(241, 245, 249, 0.95)');
    polarCap.addColorStop(0.85, 'rgba(203, 213, 225, 0.5)');
    polarCap.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = polarCap;
    ctx.beginPath();
    ctx.ellipse(cx, cy - R + 28, 95, 42, 0, 0, Math.PI * 2);
    ctx.fill();

    // Dark dune collar around polar cap (Olympia Undae)
    ctx.strokeStyle = 'rgba(45, 8, 8, 0.7)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.ellipse(cx, cy - R + 52, 98, 22, 0, 0, Math.PI);
    ctx.stroke();

    // 3D Spherical Limb Darkening + Thin Blue Atmospheric Rayleigh Haze
    const haze = ctx.createRadialGradient(cx, cy, R * 0.78, cx, cy, R);
    haze.addColorStop(0, 'rgba(0, 0, 0, 0)');
    haze.addColorStop(0.85, 'rgba(14, 116, 144, 0.25)'); // Cyan limb haze
    haze.addColorStop(1.0, 'rgba(56, 189, 248, 0.65)');  // Edge atmosphere glow
    ctx.fillStyle = haze;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // =========================================================================
  // VENUS: Luminous Sulfuric Acid Veil with Crescent/Gibbous Phase & UV Clouds
  // =========================================================================
  private static drawVenus(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512, R = 330;

    // Intense diamond optical bloom
    const bloom = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.5);
    bloom.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    bloom.addColorStop(0.3, 'rgba(254, 240, 138, 0.35)');
    bloom.addColorStop(0.7, 'rgba(56, 189, 248, 0.1)');
    bloom.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = bloom;
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.save();
    // Beautiful telescopic gibbous phase (72% illuminated)
    ctx.beginPath();
    ctx.arc(cx, cy, R, -Math.PI * 0.5, Math.PI * 0.5, false);
    ctx.ellipse(cx, cy, R * 0.42, R, 0, Math.PI * 0.5, -Math.PI * 0.5, true);
    ctx.closePath();
    ctx.clip();

    // Creamy pearl-white atmosphere
    const pearl = ctx.createRadialGradient(cx + 80, cy, 30, cx, cy, R);
    pearl.addColorStop(0, '#ffffff');
    pearl.addColorStop(0.3, '#fef9c3');
    pearl.addColorStop(0.65, '#fef08a');
    pearl.addColorStop(0.9, '#eab308');
    pearl.addColorStop(1.0, '#a16207');
    ctx.fillStyle = pearl;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // Subtle Ultraviolet Chevron (V-shaped cloud patterns in sulfuric acid veil)
    ctx.strokeStyle = 'rgba(202, 138, 4, 0.18)';
    ctx.lineWidth = 24;
    ctx.lineCap = 'round';
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + 40, cy + i * 65);
      ctx.lineTo(cx + 160, cy + i * 65 - 45);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 40, cy + i * 65);
      ctx.lineTo(cx + 160, cy + i * 65 + 45);
      ctx.stroke();
    }

    // Atmospheric limb darkening along the terminator
    const term = ctx.createLinearGradient(cx - R * 0.5, cy, cx + R, cy);
    term.addColorStop(0, 'rgba(30, 20, 10, 0.75)');
    term.addColorStop(0.4, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = term;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // =========================================================================
  // MERCURY: Airless Craters, Bright Ejecta Rays & Caloris Basin
  // =========================================================================
  private static drawMercury(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512, R = 320;

    ctx.save();
    // Telescopic crescent phase (55% illumination)
    ctx.beginPath();
    ctx.arc(cx, cy, R, -Math.PI * 0.5, Math.PI * 0.5, false);
    ctx.ellipse(cx, cy, R * 0.15, R, 0, Math.PI * 0.5, -Math.PI * 0.5, true);
    ctx.closePath();
    ctx.clip();

    // Gray basaltic crust
    const base = ctx.createRadialGradient(cx + 60, cy, 30, cx, cy, R);
    base.addColorStop(0, '#e2e8f0');
    base.addColorStop(0.35, '#94a3b8');
    base.addColorStop(0.7, '#475569');
    base.addColorStop(1.0, '#1e293b');
    ctx.fillStyle = base;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // Caloris Basin (giant ancient impact structure)
    const caloris = ctx.createRadialGradient(cx + 90, cy - 60, 20, cx + 90, cy - 60, 130);
    caloris.addColorStop(0, 'rgba(30, 41, 59, 0.85)');
    caloris.addColorStop(0.6, 'rgba(51, 65, 85, 0.5)');
    caloris.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = caloris;
    ctx.beginPath();
    ctx.arc(cx + 90, cy - 60, 130, 0, Math.PI * 2);
    ctx.fill();

    // Distinct bright-rayed craters (Kuiper / Degas) with radiating spider ejecta
    const rayedCraters = [
      { x: cx + 110, y: cy + 70, r: 12 },
      { x: cx + 45, y: cy - 120, r: 10 },
      { x: cx + 160, y: cy - 40, r: 8 },
    ];

    rayedCraters.forEach(c => {
      // Radiating ejecta rays
      for (let a = 0; a < 10; a++) {
        const angle = (a / 10) * Math.PI * 2;
        ctx.strokeStyle = 'rgba(248, 250, 252, 0.45)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x + Math.cos(angle) * 95, c.y + Math.sin(angle) * 95);
        ctx.stroke();
      }

      // Bright crater center
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Dark crater shadows along the terminator
    ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
    for (let i = 0; i < 45; i++) {
      const rx = cx + (Math.sin(i * 17) * R * 0.35);
      const ry = cy + (Math.cos(i * 23) * R * 0.8);
      ctx.beginPath();
      ctx.arc(rx, ry, (i % 6) + 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  // =========================================================================
  // URANUS: Aquamarine Gas Giant with Soft Pale Polar Hood
  // =========================================================================
  private static drawUranus(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512, R = 320;

    // Atmospheric cyan bloom
    const glow = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.35);
    glow.addColorStop(0, 'rgba(125, 211, 252, 0.55)');
    glow.addColorStop(0.5, 'rgba(56, 189, 248, 0.15)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // Aquamarine gas disk
    const disk = ctx.createRadialGradient(cx - 40, cy - 40, 20, cx, cy, R);
    disk.addColorStop(0, '#f0fdf4'); // Pale Cyan-White
    disk.addColorStop(0.3, '#bae6fd');
    disk.addColorStop(0.65, '#38bdf8');
    disk.addColorStop(0.9, '#0284c7');
    disk.addColorStop(1.0, '#0369a1');
    ctx.fillStyle = disk;
    ctx.fill();

    // Pale White Polar Hood (Uranus polar region currently tilted toward Sun)
    const polarHood = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
    polarHood.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    polarHood.addColorStop(0.6, 'rgba(240, 249, 255, 0.2)');
    polarHood.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = polarHood;
    ctx.beginPath();
    ctx.arc(cx, cy, 180, 0, Math.PI * 2);
    ctx.fill();

    // Methane absorption limb darkening
    const limb = ctx.createRadialGradient(cx, cy, R * 0.75, cx, cy, R);
    limb.addColorStop(0, 'rgba(0, 0, 0, 0)');
    limb.addColorStop(1.0, 'rgba(7, 89, 133, 0.65)');
    ctx.fillStyle = limb;
    ctx.fill();

    ctx.restore();
  }

  // =========================================================================
  // NEPTUNE: Deep Azure Cobalt with White Methane Storm Cirrus & Great Dark Spot
  // =========================================================================
  private static drawNeptune(ctx: CanvasRenderingContext2D) {
    const cx = 512, cy = 512, R = 320;

    // Deep blue bloom
    const glow = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.35);
    glow.addColorStop(0, 'rgba(96, 165, 250, 0.5)');
    glow.addColorStop(0.5, 'rgba(37, 99, 235, 0.15)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // Azure cobalt blue atmosphere
    const disk = ctx.createRadialGradient(cx - 50, cy - 40, 20, cx, cy, R);
    disk.addColorStop(0, '#bfdbfe');
    disk.addColorStop(0.3, '#3b82f6');
    disk.addColorStop(0.65, '#1d4ed8');
    disk.addColorStop(0.9, '#1e3a8a');
    disk.addColorStop(1.0, '#172554');
    ctx.fillStyle = disk;
    ctx.fill();

    // The Great Dark Spot (GDS-89 in Southern Hemisphere)
    const gds = ctx.createRadialGradient(cx + 45, cy + 60, 5, cx + 45, cy + 60, 55);
    gds.addColorStop(0, 'rgba(15, 23, 42, 0.85)');
    gds.addColorStop(0.6, 'rgba(30, 58, 138, 0.6)');
    gds.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gds;
    ctx.beginPath();
    ctx.ellipse(cx + 45, cy + 60, 55, 32, 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Brilliant White Methane Cirrus Cloud Streaks ("Scooter" storm)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx - 120, cy + 85);
    ctx.lineTo(cx + 35, cy + 88);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx + 70, cy + 42);
    ctx.lineTo(cx + 150, cy + 40);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(cx - 80, cy - 95);
    ctx.lineTo(cx + 100, cy - 90);
    ctx.stroke();

    // Limb darkening
    const limb = ctx.createRadialGradient(cx, cy, R * 0.72, cx, cy, R);
    limb.addColorStop(0, 'rgba(0, 0, 0, 0)');
    limb.addColorStop(1.0, 'rgba(10, 15, 45, 0.75)');
    ctx.fillStyle = limb;
    ctx.fill();

    ctx.restore();
  }
}
