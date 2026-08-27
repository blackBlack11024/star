import fs from 'fs';
import sharp from 'sharp';

async function projectMoon() {
  console.log('Reading public/textures/moon_map.jpg...');
  const inputBuffer = fs.readFileSync('public/textures/moon_map.jpg');
  const { data: srcData, info } = await sharp(inputBuffer)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const srcW = info.width;
  const srcH = info.height;
  const channels = info.channels;
  console.log(`Source map: ${srcW}x${srcH}, ${channels} channels`);

  const dstSize = 1024;
  const dstBuf = Buffer.alloc(dstSize * dstSize * 4, 0);

  const cx = dstSize / 2;
  const cy = dstSize / 2;
  const R = dstSize * 0.46; // radius ~471px

  // Spherical Orthographic Projection (Sub-Earth point: lon=0, lat=0)
  for (let py = 0; py < dstSize; py++) {
    const v = (cy - py) / R;
    const v2 = v * v;
    if (v2 > 1.0) continue;

    const rowOffset = py * dstSize * 4;

    for (let px = 0; px < dstSize; px++) {
      const u = (px - cx) / R;
      const r2 = u * u + v2;
      if (r2 > 1.0) continue; // Outside disc

      const z = Math.sqrt(1.0 - r2);
      const phi = Math.asin(v);
      const lambda = Math.atan2(u, z);

      // Equirectangular mapping
      let mapX = Math.floor(((lambda / (2 * Math.PI) + 0.5) % 1.0) * srcW);
      let mapY = Math.floor((0.5 - phi / Math.PI) * srcH);

      mapX = Math.max(0, Math.min(srcW - 1, mapX));
      mapY = Math.max(0, Math.min(srcH - 1, mapY));

      const srcIdx = (mapY * srcW + mapX) * channels;
      const dstIdx = rowOffset + px * 4;

      // Realistic lunar regolith limb falloff (Lommel-Seeliger scattering)
      const cosIncidence = z;
      const limb = 0.72 + 0.28 * Math.pow(cosIncidence, 0.6);

      const r = srcData[srcIdx];
      const g = channels >= 3 ? srcData[srcIdx + 1] : r;
      const b = channels >= 3 ? srcData[srcIdx + 2] : r;

      // Soft edge anti-aliasing
      const edgeDist = 1.0 - Math.sqrt(r2);
      const alpha = Math.min(1.0, edgeDist * 30.0);

      dstBuf[dstIdx] = Math.min(255, Math.floor(r * limb));
      dstBuf[dstIdx + 1] = Math.min(255, Math.floor(g * limb));
      dstBuf[dstIdx + 2] = Math.min(255, Math.floor(b * limb));
      dstBuf[dstIdx + 3] = Math.floor(alpha * 255);
    }
  }

  fs.mkdirSync('public/textures/planets', { recursive: true });
  await sharp(dstBuf, {
    raw: { width: dstSize, height: dstSize, channels: 4 }
  })
    .png()
    .toFile('public/textures/planets/moon.png');

  console.log('Successfully generated public/textures/planets/moon.png!');
}

projectMoon().catch(console.error);
