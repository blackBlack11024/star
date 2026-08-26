import { DeepSkyObjectData } from '../types';

/** Messier catalog deep-sky objects with real coordinates. */
export const DEEP_SKY_OBJECTS: DeepSkyObjectData[] = [
  // --- Galaxies ---
  { id: 'M31', name: 'M31', commonName: '仙女座星系 Andromeda Galaxy', ra: 0.712, dec: 41.269, magnitude: 3.4, type: 'galaxy', sizeArcmin: 178, difficulty: 1, basePrice: 200 },
  { id: 'M33', name: 'M33', commonName: '三角座星系 Triangulum Galaxy', ra: 1.564, dec: 30.660, magnitude: 5.7, type: 'galaxy', sizeArcmin: 73, difficulty: 3, basePrice: 300 },
  { id: 'M51', name: 'M51', commonName: '渦狀星系 Whirlpool Galaxy', ra: 13.500, dec: 47.195, magnitude: 8.4, type: 'galaxy', sizeArcmin: 11, difficulty: 3, basePrice: 350 },
  { id: 'M81', name: 'M81', commonName: '波德星系 Bode\'s Galaxy', ra: 9.926, dec: 69.065, magnitude: 6.9, type: 'galaxy', sizeArcmin: 27, difficulty: 2, basePrice: 250 },
  { id: 'M82', name: 'M82', commonName: '雪茄星系 Cigar Galaxy', ra: 9.932, dec: 69.680, magnitude: 8.4, type: 'galaxy', sizeArcmin: 11, difficulty: 3, basePrice: 300 },
  { id: 'M104', name: 'M104', commonName: '草帽星系 Sombrero Galaxy', ra: 12.667, dec: -11.623, magnitude: 8.0, type: 'galaxy', sizeArcmin: 9, difficulty: 4, basePrice: 400 },
  { id: 'M101', name: 'M101', commonName: '風車星系 Pinwheel Galaxy', ra: 14.054, dec: 54.349, magnitude: 7.9, type: 'galaxy', sizeArcmin: 29, difficulty: 4, basePrice: 350 },

  // --- Emission / Reflection Nebulae ---
  { id: 'M42', name: 'M42', commonName: '獵戶座大星雲 Orion Nebula', ra: 5.588, dec: -5.391, magnitude: 4.0, type: 'nebula', sizeArcmin: 85, difficulty: 1, basePrice: 180 },
  { id: 'M43', name: 'M43', commonName: '獵戶座星雲 (北部) De Mairan\'s Nebula', ra: 5.593, dec: -5.268, magnitude: 9.0, type: 'nebula', sizeArcmin: 20, difficulty: 2, basePrice: 150 },
  { id: 'M78', name: 'M78', commonName: '獵戶座反射星雲', ra: 5.779, dec: 0.081, magnitude: 8.3, type: 'nebula', sizeArcmin: 8, difficulty: 3, basePrice: 250 },
  { id: 'M8', name: 'M8', commonName: '礁湖星雲 Lagoon Nebula', ra: 18.063, dec: -24.384, magnitude: 6.0, type: 'nebula', sizeArcmin: 90, difficulty: 1, basePrice: 200 },
  { id: 'M17', name: 'M17', commonName: '天鵝星雲 Omega Nebula', ra: 18.346, dec: -16.175, magnitude: 6.0, type: 'nebula', sizeArcmin: 46, difficulty: 2, basePrice: 220 },
  { id: 'M20', name: 'M20', commonName: '三裂星雲 Trifid Nebula', ra: 18.043, dec: -23.028, magnitude: 6.3, type: 'nebula', sizeArcmin: 28, difficulty: 2, basePrice: 250 },
  { id: 'M16', name: 'M16', commonName: '鷹星雲 Eagle Nebula', ra: 18.314, dec: -13.793, magnitude: 6.0, type: 'nebula', sizeArcmin: 35, difficulty: 2, basePrice: 280 },
  { id: 'M1', name: 'M1', commonName: '蟹狀星雲 Crab Nebula', ra: 5.576, dec: 22.015, magnitude: 8.4, type: 'nebula', sizeArcmin: 7, difficulty: 3, basePrice: 350 },

  // --- Planetary Nebulae ---
  { id: 'M57', name: 'M57', commonName: '環狀星雲 Ring Nebula', ra: 18.893, dec: 33.029, magnitude: 8.8, type: 'planetary_nebula', sizeArcmin: 1.4, difficulty: 2, basePrice: 300 },
  { id: 'M27', name: 'M27', commonName: '啞鈴星雲 Dumbbell Nebula', ra: 19.993, dec: 22.721, magnitude: 7.5, type: 'planetary_nebula', sizeArcmin: 8, difficulty: 2, basePrice: 280 },
  { id: 'M97', name: 'M97', commonName: '貓頭鷹星雲 Owl Nebula', ra: 11.248, dec: 55.019, magnitude: 9.9, type: 'planetary_nebula', sizeArcmin: 3.4, difficulty: 4, basePrice: 400 },

  // --- Star Clusters (Open) ---
  { id: 'M45', name: 'M45', commonName: '昴宿星團 Pleiades', ra: 3.791, dec: 24.105, magnitude: 1.6, type: 'cluster', sizeArcmin: 110, difficulty: 1, basePrice: 150 },
  { id: 'M44', name: 'M44', commonName: '蜂巢星團 Beehive Cluster', ra: 8.667, dec: 19.669, magnitude: 3.7, type: 'cluster', sizeArcmin: 95, difficulty: 1, basePrice: 120 },
  { id: 'M35', name: 'M35', commonName: '雙子座疏散星團', ra: 6.148, dec: 24.333, magnitude: 5.3, type: 'cluster', sizeArcmin: 28, difficulty: 2, basePrice: 130 },
  { id: 'M11', name: 'M11', commonName: '野鴨星團 Wild Duck Cluster', ra: 18.851, dec: -6.267, magnitude: 6.3, type: 'cluster', sizeArcmin: 14, difficulty: 2, basePrice: 160 },

  // --- Globular Clusters ---
  { id: 'M13', name: 'M13', commonName: '武仙座球狀星團 Great Hercules Cluster', ra: 16.695, dec: 36.462, magnitude: 5.8, type: 'cluster', sizeArcmin: 20, difficulty: 1, basePrice: 180 },
  { id: 'M3', name: 'M3', commonName: '獵犬座球狀星團', ra: 13.703, dec: 28.377, magnitude: 6.2, type: 'cluster', sizeArcmin: 18, difficulty: 2, basePrice: 170 },
  { id: 'M5', name: 'M5', commonName: '巨蛇座球狀星團', ra: 15.310, dec: 2.083, magnitude: 5.7, type: 'cluster', sizeArcmin: 23, difficulty: 2, basePrice: 170 },
  { id: 'M15', name: 'M15', commonName: '飛馬座球狀星團', ra: 21.500, dec: 12.167, magnitude: 6.2, type: 'cluster', sizeArcmin: 18, difficulty: 2, basePrice: 165 },
  { id: 'M22', name: 'M22', commonName: '人馬座球狀星團', ra: 18.607, dec: -23.905, magnitude: 5.1, type: 'cluster', sizeArcmin: 32, difficulty: 1, basePrice: 160 },
  { id: 'M4', name: 'M4', commonName: '天蠍座球狀星團', ra: 16.394, dec: -26.526, magnitude: 5.6, type: 'cluster', sizeArcmin: 36, difficulty: 1, basePrice: 150 },
];
