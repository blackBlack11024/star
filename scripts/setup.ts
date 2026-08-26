// ============================================================
// Stargazer Simulator — Data Setup Script
// Downloads HYG star catalog and packs into binary format
// Run with: npm run setup (requires tsx)
// ============================================================

const HYG_CSV_URL = 'https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/v3/hyg_v3.csv';
const OUTPUT_PATH = './public/stars.bin';

// B-V Color Index → RGB (Ballesteros formula + Planckian locus)
function bvToRgb(bv: number): [number, number, number] {
  let t = 4600 * ((1 / (0.92 * bv + 1.7)) + (1 / (0.92 * bv + 0.62)));
  t = Math.max(1000, Math.min(40000, t));
  const temp = t / 100;
  let r: number, g: number, b: number;

  if (temp <= 66) r = 255;
  else r = 329.698727446 * Math.pow(temp - 60, -0.1332047592);

  if (temp <= 66) g = 99.4708025861 * Math.log(temp) - 161.1195681661;
  else g = 288.1221695283 * Math.pow(temp - 60, -0.0755148492);

  if (temp >= 66) b = 255;
  else if (temp <= 19) b = 0;
  else b = 138.5177312231 * Math.log(temp - 10) - 305.0447927307;

  return [
    Math.max(0, Math.min(255, r)) / 255,
    Math.max(0, Math.min(255, g)) / 255,
    Math.max(0, Math.min(255, b)) / 255,
  ];
}

interface StarRecord {
  ra: string; dec: string; mag: string; ci: string; hip: string;
}

function parseCSV(text: string): StarRecord[] {
  const lines = text.split('\n');
  const headers = lines[0].split(',');
  const raIdx = headers.indexOf('ra');
  const decIdx = headers.indexOf('dec');
  const magIdx = headers.indexOf('mag');
  const ciIdx = headers.indexOf('ci');
  const hipIdx = headers.indexOf('hip');

  const records: StarRecord[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < Math.max(raIdx, decIdx, magIdx) + 1) continue;
    const mag = parseFloat(cols[magIdx]);
    if (isNaN(mag) || mag > 8.5) continue; // Filter to visible stars
    records.push({
      ra: cols[raIdx],
      dec: cols[decIdx],
      mag: cols[magIdx],
      ci: cols[ciIdx] || '0.65',
      hip: cols[hipIdx] || '0',
    });
  }
  return records;
}

async function main() {
  const fs = await import('fs');
  const path = await import('path');

  console.log('🔭 Stargazer Simulator — Star Data Setup');
  console.log('=========================================\n');

  // Ensure public directory exists
  const publicDir = path.resolve('./public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Check if stars.bin already exists
  const outputPath = path.resolve(OUTPUT_PATH);
  if (fs.existsSync(outputPath)) {
    const stats = fs.statSync(outputPath);
    console.log(`✅ stars.bin already exists (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    console.log('   Delete it and re-run to regenerate.\n');
    return;
  }

  // Download HYG CSV
  console.log('📥 Downloading HYG Star Database v3...');
  console.log(`   URL: ${HYG_CSV_URL}`);

  let csvText: string;
  try {
    const response = await fetch(HYG_CSV_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    csvText = await response.text();
    console.log(`   Downloaded ${(csvText.length / 1024 / 1024).toFixed(2)} MB\n`);
  } catch (err) {
    console.error('❌ Failed to download HYG database:', err);
    console.log('\n💡 The game will still work with the built-in bright stars fallback.');
    console.log('   You can try again later or check your internet connection.\n');
    return;
  }

  // Parse CSV
  console.log('📊 Parsing star catalog...');
  const records = parseCSV(csvText);
  console.log(`   Found ${records.length} stars with magnitude ≤ 8.5\n`);

  // Pack into binary: 8 Float32 per star [x, y, z, r, g, b, mag, hip]
  console.log('📦 Packing into binary format...');
  const R = 1000.0;
  const buffer = new Float32Array(records.length * 8);

  let packed = 0;
  for (const star of records) {
    const ra = parseFloat(star.ra);
    const dec = parseFloat(star.dec);
    const mag = parseFloat(star.mag);
    const ci = parseFloat(star.ci) || 0.65;
    const hip = parseInt(star.hip) || 0;

    if (isNaN(ra) || isNaN(dec) || isNaN(mag)) continue;

    const alpha = ra * (Math.PI / 12.0);
    const delta = dec * (Math.PI / 180.0);

    const x = R * Math.cos(delta) * Math.cos(alpha);
    const y = R * Math.sin(delta);
    const z = R * Math.cos(delta) * Math.sin(alpha);

    const [r, g, b] = bvToRgb(ci);

    const offset = packed * 8;
    buffer[offset + 0] = x;
    buffer[offset + 1] = y;
    buffer[offset + 2] = z;
    buffer[offset + 3] = r;
    buffer[offset + 4] = g;
    buffer[offset + 5] = b;
    buffer[offset + 6] = mag;
    buffer[offset + 7] = hip;
    packed++;
  }

  // Trim buffer to actual packed count
  const trimmed = new Float32Array(buffer.buffer, 0, packed * 8);

  // Write binary file
  fs.writeFileSync(outputPath, Buffer.from(trimmed.buffer, trimmed.byteOffset, trimmed.byteLength));

  const sizeMB = (trimmed.byteLength / 1024 / 1024).toFixed(2);
  console.log(`\n✅ Successfully packed ${packed} stars into stars.bin (${sizeMB} MB)`);
  console.log(`   Output: ${outputPath}\n`);
  console.log('🚀 You can now run `npm run dev` to start the game!\n');
}

main().catch(console.error);
