const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  {
    id: 'LMC',
    name: 'Large Magellanic Cloud',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Eso1021d.jpg',
    featherStart: 0.65,
    lumMultiplier: 2.5
  },
  {
    id: 'SMC',
    name: 'Small Magellanic Cloud',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Small_Magellanic_Cloud_%28Digitized_Sky_Survey_2%29.jpg',
    featherStart: 0.65,
    lumMultiplier: 2.2
  },
  {
    id: 'NGC3372',
    name: 'Carina Nebula',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Carina_Nebula.jpg',
    featherStart: 0.70,
    lumMultiplier: 2.4
  },
  {
    id: 'NGC5139',
    name: 'Omega Centauri',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Omega_Centauri_by_ESO.jpg',
    featherStart: 0.65,
    lumMultiplier: 3.0
  },
  {
    id: 'NGC4755',
    name: 'Jewel Box Cluster',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Snapshot_of_the_Jewel_Box_cluster_with_the_ESO_VLT.jpg',
    featherStart: 0.68,
    lumMultiplier: 3.2
  },
  {
    id: 'NGC104',
    name: '47 Tucanae',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hubble_finds_evidence_of_multiple_stellar_populations_in_globular_cluster_47_Tucanae.jpg',
    featherStart: 0.65,
    lumMultiplier: 3.0
  }
];

async function processAll() {
  const publicDir = path.resolve('public/textures/dso');
  const distDir = path.resolve('dist/textures/dso');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(distDir, { recursive: true });

  const size = 1024;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.48;

  for (const t of targets) {
    console.log(`\nFetching ${t.name} (${t.id})...`);
    try {
      const res = await fetch(t.url, {
        headers: { 'User-Agent': 'StargazerSim/1.0 (contact@astronomy.game)' }
      });
      if (!res.ok) {
        console.error(`Failed to fetch ${t.id}: HTTP ${res.status}`);
        continue;
      }
      const arrayBuf = await res.arrayBuffer();
      const inputBuffer = Buffer.from(arrayBuf);
      console.log(`Downloaded ${inputBuffer.length} bytes for ${t.id}`);

      const cropped = await sharp(inputBuffer)
        .resize(size, size, { fit: 'cover', position: 'center' })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const raw = cropped.data;

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const idx = (y * size + x) * 4;
          const dx = x - cx;
          const dy = y - cy;
          const r = Math.sqrt(dx * dx + dy * dy);

          let feather = 1.0;
          if (r > maxR * t.featherStart) {
            const progress = (r - maxR * t.featherStart) / (maxR * (1.0 - t.featherStart));
            feather = Math.max(0, Math.cos(Math.min(1.0, progress) * (Math.PI / 2)));
          }

          const lum = (raw[idx] * 0.299 + raw[idx + 1] * 0.587 + raw[idx + 2] * 0.114) / 255;
          const lumAlpha = Math.min(1.0, lum * t.lumMultiplier);

          raw[idx + 3] = Math.floor(raw[idx + 3] * feather * lumAlpha);
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
    } catch (err) {
      console.error(`Error processing ${t.id}:`, err);
    }
  }

  console.log('\nAll Southern Hemisphere DSO photos processed successfully!');
}

processAll();
