const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  {
    id: 'LMC',
    name: 'Large Magellanic Cloud',
    url: 'https://cdn.eso.org/images/publicationjpg/eso1021a.jpg',
    bgThresholdPercentile: 0.12,
    featherStart: 0.65
  },
  {
    id: 'SMC',
    name: 'Small Magellanic Cloud',
    url: 'https://cdn.eso.org/images/publicationjpg/eso1340a.jpg',
    bgThresholdPercentile: 0.10,
    featherStart: 0.65
  },
  {
    id: 'NGC3372',
    name: 'Carina Nebula',
    url: 'https://cdn.eso.org/images/publicationjpg/eso0905a.jpg',
    bgThresholdPercentile: 0.08,
    featherStart: 0.70
  },
  {
    id: 'NGC5139',
    name: 'Omega Centauri',
    url: 'https://cdn.eso.org/images/publicationjpg/eso1122a.jpg',
    bgThresholdPercentile: 0.15,
    featherStart: 0.65
  },
  {
    id: 'NGC4755',
    name: 'Jewel Box Cluster',
    url: 'https://cdn.eso.org/images/publicationjpg/eso0940b.jpg',
    bgThresholdPercentile: 0.15,
    featherStart: 0.68
  },
  {
    id: 'NGC104',
    name: '47 Tucanae',
    url: 'https://cdn.eso.org/images/publicationjpg/eso1302a.jpg',
    bgThresholdPercentile: 0.12,
    featherStart: 0.65
  }
];

async function processDSO() {
  const publicDir = path.resolve('public/textures/dso');
  const distDir = path.resolve('dist/textures/dso');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(distDir, { recursive: true });

  const size = 1024;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.48;

  for (const t of targets) {
    console.log(`\n=== Processing ${t.name} (${t.id}) ===`);
    console.log(`Fetching from ${t.url}...`);
    const res = await fetch(t.url, {
      headers: { 'User-Agent': 'StargazerSim/1.0 (contact@astronomy.game)' }
    });
    if (!res.ok) {
      console.error(`Failed to fetch ${t.id}: HTTP ${res.status}`);
      continue;
    }
    const arrayBuf = await res.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuf);
    console.log(`Downloaded ${inputBuffer.length} bytes`);

    const cropped = await sharp(inputBuffer)
      .resize(size, size, { fit: 'cover', position: 'center' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const raw = cropped.data;

    // Sample outer border to determine background sky noise level
    const bgSamples = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const d = Math.hypot(x - cx, y - cy);
        if (d > maxR * 0.75 && d < maxR * 0.98) {
          const idx = (y * size + x) * 4;
          const lum = (raw[idx] * 0.299 + raw[idx + 1] * 0.587 + raw[idx + 2] * 0.114);
          bgSamples.push(lum);
        }
      }
    }
    bgSamples.sort((a, b) => a - b);
    const bgLevel = bgSamples[Math.floor(bgSamples.length * t.bgThresholdPercentile)] || 15;
    console.log(`Computed background sky level for ${t.id}: ${bgLevel.toFixed(1)}`);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const idx = (y * size + x) * 4;
        const dx = x - cx;
        const dy = y - cy;
        const r = Math.sqrt(dx * dx + dy * dy);

        let cr = Math.max(0, raw[idx] - bgLevel);
        let cg = Math.max(0, raw[idx + 1] - bgLevel);
        let cb = Math.max(0, raw[idx + 2] - bgLevel);

        const scale = 255 / Math.max(1, 255 - bgLevel);
        cr = Math.min(255, cr * scale);
        cg = Math.min(255, cg * scale);
        cb = Math.min(255, cb * scale);

        let feather = 1.0;
        if (r > maxR * t.featherStart) {
          const progress = Math.min(1.0, (r - maxR * t.featherStart) / (maxR * (1.0 - t.featherStart)));
          feather = Math.max(0, Math.cos(progress * (Math.PI / 2)));
        }

        const lum = (cr * 0.299 + cg * 0.587 + cb * 0.114) / 255;
        const lumAlpha = Math.min(1.0, Math.pow(lum, 0.75) * 2.2);

        const finalAlpha = Math.floor(255 * feather * lumAlpha);

        raw[idx] = Math.floor(cr);
        raw[idx + 1] = Math.floor(cg);
        raw[idx + 2] = Math.floor(cb);
        raw[idx + 3] = finalAlpha;
      }
    }

    const outBuf = await sharp(raw, { raw: { width: size, height: size, channels: 4 } })
      .png({ compressionLevel: 8 })
      .toBuffer();

    const pubPath = path.join(publicDir, `${t.id}.png`);
    const distPath = path.join(distDir, `${t.id}.png`);
    fs.writeFileSync(pubPath, outBuf);
    fs.writeFileSync(distPath, outBuf);
    console.log(`Saved ${t.id}.png (${outBuf.length} bytes) to public & dist`);
  }

  console.log('\nAll Southern Hemisphere DSO photos updated with clean ESO originals!');
}

processDSO().catch(console.error);
