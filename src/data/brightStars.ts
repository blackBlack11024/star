import { BrightStar } from '../types';

/**
 * 50 brightest named stars with real astronomical coordinates.
 * Used as inline fallback when stars.bin is not available.
 * RA in decimal hours (0-24), Dec in decimal degrees (-90 to +90).
 */
export const BRIGHT_STARS: BrightStar[] = [
  // ===== Navigation & Iconic Stars =====
  { name: '天狼星 Sirius',       ra: 6.752,  dec: -16.716, mag: -1.46, bv: 0.00,  hip: 32349 },
  { name: '老人星 Canopus',      ra: 6.399,  dec: -52.696, mag: -0.72, bv: 0.15,  hip: 30438 },
  { name: '大角星 Arcturus',     ra: 14.261, dec: 19.182,  mag: -0.05, bv: 1.23,  hip: 69673 },
  { name: '織女星 Vega',         ra: 18.616, dec: 38.784,  mag: 0.03,  bv: 0.00,  hip: 91262 },
  { name: '五車二 Capella',      ra: 5.278,  dec: 45.998,  mag: 0.08,  bv: 0.80,  hip: 24608 },
  { name: '參宿七 Rigel',        ra: 5.242,  dec: -8.202,  mag: 0.18,  bv: -0.03, hip: 24436 },
  { name: '南河三 Procyon',      ra: 7.655,  dec: 5.225,   mag: 0.34,  bv: 0.42,  hip: 37279 },
  { name: '參宿四 Betelgeuse',   ra: 5.920,  dec: 7.407,   mag: 0.42,  bv: 1.85,  hip: 27989 },
  { name: '河鼓二 Altair',       ra: 19.846, dec: 8.868,   mag: 0.76,  bv: 0.22,  hip: 97649 },
  { name: '畢宿五 Aldebaran',    ra: 4.599,  dec: 16.509,  mag: 0.87,  bv: 1.54,  hip: 21421 },
  { name: '心宿二 Antares',      ra: 16.490, dec: -26.432, mag: 1.06,  bv: 1.83,  hip: 80763 },
  { name: '角宿一 Spica',        ra: 13.420, dec: -11.161, mag: 0.98,  bv: -0.24, hip: 65474 },
  { name: '北河三 Pollux',       ra: 7.755,  dec: 28.026,  mag: 1.16,  bv: 1.00,  hip: 37826 },
  { name: '北落師門 Fomalhaut',   ra: 22.961, dec: -29.622, mag: 1.17,  bv: 0.09,  hip: 113368 },
  { name: '天津四 Deneb',        ra: 20.690, dec: 45.280,  mag: 1.25,  bv: 0.09,  hip: 102098 },
  { name: '軒轅十四 Regulus',     ra: 10.140, dec: 11.967,  mag: 1.36,  bv: -0.11, hip: 49669 },
  { name: '北極星 Polaris',      ra: 2.530,  dec: 89.264,  mag: 1.98,  bv: 0.60,  hip: 11767 },

  // ===== Orion =====
  { name: '參宿五 Bellatrix',    ra: 5.419,  dec: 6.350,   mag: 1.64,  bv: -0.22, hip: 25336 },
  { name: '參宿一 Alnilam',      ra: 5.604,  dec: -1.202,  mag: 1.69,  bv: -0.18, hip: 26311 },
  { name: '參宿三 Alnitak',      ra: 5.679,  dec: -1.943,  mag: 1.74,  bv: -0.21, hip: 26727 },
  { name: '參宿二 Mintaka',      ra: 5.533,  dec: -0.299,  mag: 2.25,  bv: -0.18, hip: 25930 },
  { name: '參宿六 Saiph',        ra: 5.796,  dec: -9.670,  mag: 2.07,  bv: -0.18, hip: 27366 },

  // ===== Ursa Major (Big Dipper) =====
  { name: '天樞 Dubhe',          ra: 11.062, dec: 61.751,  mag: 1.81,  bv: 1.07,  hip: 54061 },
  { name: '天璇 Merak',          ra: 11.031, dec: 56.382,  mag: 2.34,  bv: 0.03,  hip: 53910 },
  { name: '玉衡 Alioth',         ra: 12.900, dec: 55.960,  mag: 1.76,  bv: -0.02, hip: 62956 },
  { name: '開陽 Mizar',          ra: 13.399, dec: 54.926,  mag: 2.23,  bv: 0.02,  hip: 65378 },
  { name: '搖光 Alkaid',         ra: 13.792, dec: 49.313,  mag: 1.85,  bv: -0.10, hip: 67301 },
  { name: '天權 Megrez',         ra: 12.257, dec: 57.033,  mag: 3.32,  bv: 0.08,  hip: 59774 },
  { name: '天璣 Phecda',         ra: 11.897, dec: 53.695,  mag: 2.41,  bv: 0.04,  hip: 58001 },

  // ===== Scorpius =====
  { name: '房宿三 Shaula',       ra: 17.560, dec: -37.104, mag: 1.62,  bv: -0.22, hip: 85927 },
  { name: '尾宿八 Sargas',       ra: 17.622, dec: -42.998, mag: 1.86,  bv: 0.40,  hip: 86228 },

  // ===== Crux (Southern Cross) =====
  { name: '十字架二 Acrux',      ra: 12.443, dec: -63.099, mag: 0.77,  bv: -0.24, hip: 60718 },
  { name: '十字架三 Mimosa',     ra: 12.795, dec: -59.689, mag: 1.25,  bv: -0.23, hip: 62434 },
  { name: '十字架一 Gacrux',     ra: 12.519, dec: -57.113, mag: 1.59,  bv: 1.60,  hip: 61084 },

  // ===== Leo =====
  { name: '五帝座一 Denebola',   ra: 11.818, dec: 14.572,  mag: 2.14,  bv: 0.09,  hip: 57632 },

  // ===== Gemini =====
  { name: '北河二 Castor',       ra: 7.577,  dec: 31.888,  mag: 1.58,  bv: 0.03,  hip: 36850 },

  // ===== Cygnus =====
  { name: '天鵝座γ Sadr',       ra: 20.370, dec: 40.257,  mag: 2.23,  bv: 0.68,  hip: 100453 },

  // ===== Centaurus =====
  { name: '南門二 Alpha Centauri', ra: 14.661, dec: -60.835, mag: -0.01, bv: 0.71, hip: 71683 },
  { name: '馬腹一 Hadar',        ra: 14.064, dec: -60.373, mag: 0.61,  bv: -0.23, hip: 68702 },

  // ===== Perseus =====
  { name: '天船三 Mirfak',       ra: 3.405,  dec: 49.861,  mag: 1.79,  bv: 0.48,  hip: 15863 },
  { name: '大陵五 Algol',        ra: 3.136,  dec: 40.957,  mag: 2.09,  bv: -0.05, hip: 14576 },

  // ===== Canis Major =====
  { name: '軍市一 Mirzam',       ra: 6.378,  dec: -17.956, mag: 1.98,  bv: -0.24, hip: 30324 },
  { name: '弧矢一 Adhara',       ra: 6.977,  dec: -28.972, mag: 1.50,  bv: -0.21, hip: 33579 },
  { name: '弧矢七 Wezen',        ra: 7.140,  dec: -26.393, mag: 1.83,  bv: 0.67,  hip: 34444 },

  // ===== Lyra =====
  { name: '漸台二 Sheliak',      ra: 18.835, dec: 33.363,  mag: 3.52,  bv: -0.05, hip: 92420 },

  // ===== Aquila =====
  { name: '河鼓一 Tarazed',      ra: 19.771, dec: 10.613,  mag: 2.72,  bv: 1.52,  hip: 97278 },
  { name: '河鼓三 Alshain',      ra: 19.922, dec: 6.407,   mag: 3.71,  bv: 0.86,  hip: 98036 },

  // ===== Cassiopeia =====
  { name: '策 Schedar',           ra: 0.675,  dec: 56.537,  mag: 2.24,  bv: 1.17,  hip: 3179 },
  { name: '王良一 Caph',          ra: 0.153,  dec: 59.150,  mag: 2.28,  bv: 0.34,  hip: 746 },

  // ===== Taurus =====
  { name: '五車五 Elnath',        ra: 5.438,  dec: 28.608,  mag: 1.65,  bv: -0.13, hip: 25428 },
];

// ===== B-V Color Index to RGB =====
export function bvToRgb(bv: number): [number, number, number] {
  // Ballesteros formula: B-V → effective temperature (Kelvin)
  let t = 4600 * ((1 / (0.92 * bv + 1.7)) + (1 / (0.92 * bv + 0.62)));
  t = Math.max(1000, Math.min(40000, t));

  // Tanner-Helland algorithm: Kelvin → RGB
  const temp = t / 100;
  let r: number, g: number, b: number;

  // Red
  if (temp <= 66) r = 255;
  else r = 329.698727446 * Math.pow(temp - 60, -0.1332047592);

  // Green
  if (temp <= 66) g = 99.4708025861 * Math.log(temp) - 161.1195681661;
  else g = 288.1221695283 * Math.pow(temp - 60, -0.0755148492);

  // Blue
  if (temp >= 66) b = 255;
  else if (temp <= 19) b = 0;
  else b = 138.5177312231 * Math.log(temp - 10) - 305.0447927307;

  return [
    Math.max(0, Math.min(255, r)) / 255,
    Math.max(0, Math.min(255, g)) / 255,
    Math.max(0, Math.min(255, b)) / 255,
  ];
}

/**
 * Converts Galactic coordinates (l, b) in degrees to Equatorial coordinates (RA, Dec).
 * RA returned in hours [0, 24), Dec in degrees [-90, +90].
 */
export function galacticToEquatorial(lDeg: number, bDeg: number): { ra: number; dec: number } {
  const rad = Math.PI / 180;
  const l = lDeg * rad;
  const b = bDeg * rad;

  // Galactic North Pole: RA = 192.85948 deg (12.8573 h), Dec = 27.12825 deg
  const raGP = 192.85948 * rad;
  const decGP = 27.12825 * rad;
  const l0 = 32.93192 * rad;

  const sinDec = Math.sin(decGP) * Math.sin(b) + Math.cos(decGP) * Math.cos(b) * Math.cos(l - l0);
  const dec = Math.asin(Math.max(-1, Math.min(1, sinDec)));

  const y = Math.cos(b) * Math.sin(l - l0);
  const x = Math.cos(decGP) * Math.sin(b) - Math.sin(decGP) * Math.cos(b) * Math.cos(l - l0);
  let ra = (raGP + Math.atan2(y, x)) / rad;
  if (ra < 0) ra += 360;
  if (ra >= 360) ra -= 360;

  return {
    ra: ra / 15, // Convert degrees to hours (0-24)
    dec: dec / rad,
  };
}

/**
 * Generate a rich, realistic star catalog (120,000+ stars) spanning visual magnitudes from -1.5 up to 16.0,
 * with dense Milky Way galactic band, galactic center bulge, and telescopic background stars.
 */
export function generateFillerStars(count: number = 120000, seed: number = 42): BrightStar[] {
  const stars: BrightStar[] = [];
  let s = seed;
  const rand = (): number => {
    s |= 0;
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // Standard Box-Muller normal distribution generator
  const randNorm = (): number => {
    const u1 = Math.max(1e-7, rand());
    const u2 = rand();
    return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  };

  // 1. Milky Way Galactic Plane & Bulge (~72% of stars)
  const galacticCount = Math.floor(count * 0.72);
  for (let i = 0; i < galacticCount; i++) {
    let l: number;
    let b: number;
    const r = rand();

    if (r < 0.42) {
      // Galactic Center & Bulge (Sagittarius / Scorpius region)
      l = (randNorm() * 26 + 360) % 360;
      b = randNorm() * 4.8;
    } else if (r < 0.65) {
      // Cygnus & Summer Triangle Star Stream
      l = (randNorm() * 20 + 78 + 360) % 360;
      b = randNorm() * 6.0;
    } else if (r < 0.84) {
      // Winter Milky Way (Auriga, Gemini, Orion, Monoceros)
      l = (randNorm() * 28 + 195 + 360) % 360;
      b = randNorm() * 7.0;
    } else {
      // Continuous Galactic Disk
      l = rand() * 360;
      b = randNorm() * (rand() < 0.65 ? 4.2 : 10.5);
    }

    const eq = galacticToEquatorial(l, b);

    // Realistic stellar luminosity function (power-law distribution towards faint telescopic magnitudes)
    const mag = 4.0 + Math.pow(rand(), 0.5) * 11.8; // mag 4.0 up to 15.8
    const bv = -0.25 + rand() * 1.9;

    stars.push({ name: '', ra: eq.ra, dec: eq.dec, mag, bv });
  }

  // 2. Uniform All-Sky Field Stars (~28% of stars)
  const fieldCount = count - galacticCount;
  for (let i = 0; i < fieldCount; i++) {
    const ra = rand() * 24;
    const dec = Math.asin(2 * rand() - 1) * (180 / Math.PI);
    const mag = 2.0 + Math.pow(rand(), 0.6) * 13.5; // mag 2.0 up to 15.5
    const bv = -0.3 + rand() * 2.1;

    stars.push({ name: '', ra, dec, mag, bv });
  }

  return stars;
}
