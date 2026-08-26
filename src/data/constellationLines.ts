import { ConstellationData } from '../types';

/**
 * Constellation line data — each entry is [ra1_hours, dec1_degrees, ra2_hours, dec2_degrees].
 * Covers the 25 most recognizable constellations.
 */
export const CONSTELLATIONS: ConstellationData[] = [
  {
    name: 'Orion', nameZh: '獵戶座',
    lines: [
      [5.920,7.407, 5.419,6.350],   // Betelgeuse → Bellatrix
      [5.242,-8.202, 5.796,-9.670], // Rigel → Saiph
      [5.533,-0.299, 5.604,-1.202], // Mintaka → Alnilam
      [5.604,-1.202, 5.679,-1.943], // Alnilam → Alnitak
      [5.920,7.407, 5.604,-1.202],  // Betelgeuse → Alnilam (approx belt connection)
      [5.419,6.350, 5.533,-0.299],  // Bellatrix → Mintaka
      [5.679,-1.943, 5.796,-9.670], // Alnitak → Saiph
      [5.533,-0.299, 5.242,-8.202], // Mintaka → Rigel
    ],
  },
  {
    name: 'Ursa Major', nameZh: '大熊座（北斗七星）',
    lines: [
      [11.062,61.751, 11.031,56.382], // Dubhe → Merak
      [11.031,56.382, 11.897,53.695], // Merak → Phecda
      [11.897,53.695, 12.257,57.033], // Phecda → Megrez
      [12.257,57.033, 12.900,55.960], // Megrez → Alioth
      [12.900,55.960, 13.399,54.926], // Alioth → Mizar
      [13.399,54.926, 13.792,49.313], // Mizar → Alkaid
      [11.062,61.751, 12.257,57.033], // Dubhe → Megrez (bowl diagonal)
    ],
  },
  {
    name: 'Cassiopeia', nameZh: '仙后座',
    lines: [
      [0.153,59.150, 0.675,56.537],  // Caph → Schedar
      [0.675,56.537, 0.945,60.717],  // Schedar → Gamma Cas
      [0.945,60.717, 1.430,60.235],  // Gamma → Delta Cas
      [1.430,60.235, 1.907,63.670],  // Delta → Epsilon Cas
    ],
  },
  {
    name: 'Scorpius', nameZh: '天蠍座',
    lines: [
      [16.005,-22.622, 16.090,-20.669], // Dschubba → Acrab
      [16.090,-20.669, 16.353,-25.593], // Acrab → Pi Sco
      [16.005,-22.622, 16.490,-26.432], // Dschubba → Antares
      [16.490,-26.432, 16.836,-34.293], // Antares → Tau Sco
      [16.836,-34.293, 17.203,-43.239], // Toward tail
      [17.203,-43.239, 17.560,-37.104], // → Shaula
      [17.560,-37.104, 17.622,-42.998], // Shaula → Sargas
    ],
  },
  {
    name: 'Leo', nameZh: '獅子座',
    lines: [
      [10.140,11.967, 10.333,19.842], // Regulus → Eta Leo
      [10.333,19.842, 10.278,23.417], // → Gamma Leo (Algieba)
      [10.278,23.417, 9.879,26.007],  // → Zeta Leo
      [9.879,26.007, 9.764,23.774],   // → Mu Leo
      [10.278,23.417, 11.237,20.524], // Algieba → Theta Leo
      [11.237,20.524, 11.818,14.572], // → Denebola
      [10.140,11.967, 11.237,20.524], // Regulus → Theta Leo
    ],
  },
  {
    name: 'Cygnus', nameZh: '天鵝座',
    lines: [
      [20.690,45.280, 20.370,40.257], // Deneb → Sadr
      [20.370,40.257, 19.749,45.131], // Sadr → Delta Cyg
      [20.370,40.257, 20.770,33.970], // Sadr → Gienah
      [20.370,40.257, 19.512,27.960], // Sadr → Albireo
    ],
  },
  {
    name: 'Lyra', nameZh: '天琴座',
    lines: [
      [18.616,38.784, 18.835,33.363], // Vega → Sheliak
      [18.835,33.363, 18.982,32.690], // Sheliak → Sulafat
      [18.982,32.690, 18.746,37.605], // Sulafat → Delta Lyr
      [18.746,37.605, 18.616,38.784], // → back to Vega
    ],
  },
  {
    name: 'Aquila', nameZh: '天鷹座',
    lines: [
      [19.771,10.613, 19.846,8.868],  // Tarazed → Altair
      [19.846,8.868, 19.922,6.407],   // Altair → Alshain
    ],
  },
  {
    name: 'Gemini', nameZh: '雙子座',
    lines: [
      [7.577,31.888, 7.755,28.026],   // Castor → Pollux
      [7.577,31.888, 6.629,25.131],   // Castor → Mu Gem
      [7.755,28.026, 7.068,20.570],   // Pollux → toward feet
      [6.629,25.131, 6.382,22.514],   // Mu Gem → Eta Gem
      [6.382,22.514, 6.248,22.507],   // Eta Gem → Tejat
    ],
  },
  {
    name: 'Canis Major', nameZh: '大犬座',
    lines: [
      [6.752,-16.716, 6.378,-17.956], // Sirius → Mirzam
      [6.752,-16.716, 6.977,-28.972], // Sirius → Adhara
      [6.977,-28.972, 7.140,-26.393], // Adhara → Wezen
      [7.140,-26.393, 7.029,-23.833], // Wezen → Aludra (approx)
    ],
  },
  {
    name: 'Taurus', nameZh: '金牛座',
    lines: [
      [4.599,16.509, 4.477,15.962],   // Aldebaran → Theta Tau
      [4.477,15.962, 4.330,15.628],   // → Gamma Tau
      [4.330,15.628, 4.382,17.543],   // → Delta Tau
      [4.382,17.543, 4.477,15.962],   // → Theta Tau (Hyades V)
      [4.599,16.509, 5.438,28.608],   // Aldebaran → Elnath
      [4.599,16.509, 5.627,21.143],   // Aldebaran → Zeta Tau
    ],
  },
  {
    name: 'Perseus', nameZh: '英仙座',
    lines: [
      [3.405,49.861, 3.136,40.957],   // Mirfak → Algol
      [3.405,49.861, 3.715,47.788],   // Mirfak → Delta Per
      [3.715,47.788, 3.964,40.010],   // Delta → Epsilon Per
      [3.136,40.957, 2.844,38.319],   // Algol → Rho Per
    ],
  },
  {
    name: 'Crux', nameZh: '南十字座',
    lines: [
      [12.443,-63.099, 12.519,-57.113], // Acrux → Gacrux
      [12.795,-59.689, 12.252,-58.749], // Mimosa → Delta Cru
    ],
  },
  {
    name: 'Centaurus', nameZh: '半人馬座',
    lines: [
      [14.661,-60.835, 14.064,-60.373], // Alpha Cen → Hadar
    ],
  },
  {
    name: 'Bootes', nameZh: '牧夫座',
    lines: [
      [14.261,19.182, 14.535,30.371],  // Arcturus → Izar
      [14.535,30.371, 15.032,40.390],  // Izar → Nekkar
      [15.032,40.390, 14.686,38.308],  // Nekkar → Delta Boo
      [14.686,38.308, 14.261,19.182],  // Delta Boo → Arcturus
    ],
  },
  {
    name: 'Ursa Minor', nameZh: '小熊座',
    lines: [
      [2.530,89.264, 17.537,86.586],  // Polaris → UMi delta
      [17.537,86.586, 16.292,75.755], // → Kochab
      [16.292,75.755, 15.734,77.795], // → Pherkad
    ],
  },
  {
    name: 'Virgo', nameZh: '室女座',
    lines: [
      [13.420,-11.161, 13.036,-5.539],  // Spica → Gamma Vir
      [13.036,-5.539, 12.694,-1.449],   // → Zeta Vir
      [12.694,-1.449, 12.332,-0.667],   // → Eta Vir
      [13.036,-5.539, 12.927,3.397],    // → Epsilon Vir (Vindemiatrix)
    ],
  },
  {
    name: 'Pegasus', nameZh: '飛馬座',
    lines: [
      [0.220,15.184, 23.063,28.083],   // Alpheratz → Markab area
      [23.063,28.083, 23.079,15.205],  // Markab → Algenib
      [23.079,15.205, 0.220,15.184],   // Algenib → Alpheratz
      [23.063,28.083, 22.717,30.221],  // Markab → Scheat
      [22.717,30.221, 0.220,15.184],   // Scheat → Alpheratz (square)
    ],
  },
  {
    name: 'Sagittarius', nameZh: '人馬座',
    lines: [
      [18.921,-26.297, 19.043,-29.880], // Kaus Media → Kaus Australis
      [18.350,-29.828, 18.921,-26.297], // Ascella → Kaus Media
      [18.350,-29.828, 18.466,-25.422], // Ascella → Nunki
      [18.466,-25.422, 18.921,-26.297], // Nunki → Kaus Media
      [19.043,-29.880, 18.350,-29.828], // Kaus Australis → Ascella
    ],
  },
  {
    name: 'Andromeda', nameZh: '仙女座',
    lines: [
      [0.220,15.184, 0.656,29.091],   // Alpheratz → Delta And
      [0.656,29.091, 1.163,35.621],   // → Mirach
      [1.163,35.621, 2.065,42.330],   // → Almach
    ],
  },
];
