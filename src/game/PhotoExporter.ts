import { Photo } from '../types';
import { TELESCOPE_CONFIGS } from '../data/telescopes';
import { LOCATIONS } from '../data/locations';

export class PhotoExporter {
  /**
   * Downloads the pristine raw photo directly without any border or overlays.
   */
  public static downloadRawPhoto(photo: Photo): void {
    const filename = this.generateFilename(photo, 'raw');
    const a = document.createElement('a');
    a.href = photo.imageDataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * Generates and downloads a gallery-grade astrophotography exhibition card.
   * Features a clean dark matte exhibition mount and an authentic EXIF nameplate.
   * STRICT RULE: Absolutely NO game ratings (S/A/B/C/D) or scores on the plate.
   */
  public static async downloadExhibitionPlate(photo: Photo): Promise<void> {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('Failed to load image for exhibition plate'));
      img.src = photo.imageDataUrl;
    });

    const srcW = img.naturalWidth || 800;
    const srcH = img.naturalHeight || 600;

    // Outer matte border sizing
    const paddingX = Math.max(36, Math.round(srcW * 0.05));
    const paddingTop = Math.max(36, Math.round(srcW * 0.05));
    const plateHeight = Math.max(120, Math.round(srcH * 0.18));
    const paddingBottom = Math.max(24, Math.round(srcW * 0.03));

    const canvas = document.createElement('canvas');
    canvas.width = srcW + paddingX * 2;
    canvas.height = srcH + paddingTop + plateHeight + paddingBottom;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Deep matte museum dark background
    ctx.fillStyle = '#070b12';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle fine outer border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

    // 2. Soft shadow and inner mount for the photo
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 8;
    ctx.drawImage(img, paddingX, paddingTop, srcW, srcH);
    ctx.restore();

    // 1px crisp hairline border around the photo
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
    ctx.lineWidth = 1;
    ctx.strokeRect(paddingX, paddingTop, srcW, srcH);

    // 3. EXIF Exhibition Nameplate Section
    const plateY = paddingTop + srcH + 24;
    const plateWidth = srcW;
    const leftX = paddingX;
    const rightX = paddingX + plateWidth;

    // Divider hairline between photo and plate
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftX, plateY);
    ctx.lineTo(rightX, plateY);
    ctx.stroke();

    // Metadata lookups
    const teleConfig = TELESCOPE_CONFIGS.find(t => t.level === photo.telescopeLevel) || TELESCOPE_CONFIGS[0];
    const location = LOCATIONS.find(l => l.id === photo.locationId) || LOCATIONS[0];
    const timestamp = photo.timestamp instanceof Date ? photo.timestamp : new Date(photo.timestamp);
    const dateStr = timestamp.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const timeStr = timestamp.toLocaleTimeString('zh-TW', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Weather label
    const weatherMap: Record<string, string> = {
      clear: 'Clear Sky / 晴朗',
      partly_cloudy: 'Partly Cloudy / 部分多雲',
      cloudy: 'Cloudy / 多雲',
      rainy: 'Overcast Rain / 陰雨',
    };
    const weatherText = weatherMap[photo.weatherCondition] || 'Clear';

    // Left Column: Target Title & Category
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(photo.targetName, leftX, plateY + 16);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const isStarTrail = photo.equipmentTags?.includes('星軌相機') || photo.targetName.includes('星軌');
    const categoryText = isStarTrail ? 'CIRCUMPOLAR STAR TRAIL EXPOSURE' : 'DEEP SKY ASTROPHOTOGRAPH';
    ctx.fillText(categoryText, leftX, plateY + 44);

    // Mid/Right Column: Optical & Exposure Metadata
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

    const opticsText = isStarTrail
      ? `Wide-Angle Star Trail Lens · Exp. ${photo.exposureSeconds.toFixed(1)}s`
      : `Optics: ${teleConfig.name} (${teleConfig.apertureMm}mm) · Exp. ${photo.exposureSeconds.toFixed(1)}s`;

    ctx.fillText(opticsText, leftX, plateY + 68);

    ctx.fillStyle = '#64748b';
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`Atmosphere: ${weatherText}`, leftX, plateY + 88);

    // Right Column: Geographic & Astronomical Archive Stamp
    ctx.textAlign = 'right';

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const latStr = `${Math.abs(location.latitude).toFixed(2)}°${location.latitude >= 0 ? 'N' : 'S'}`;
    const lonStr = `${Math.abs(location.longitude).toFixed(2)}°${location.longitude >= 0 ? 'E' : 'W'}`;
    ctx.fillText(`${location.name} (Elev. ${location.altitude}m)`, rightX, plateY + 16);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`Coords: ${latStr}, ${lonStr} · UTC+8`, rightX, plateY + 40);

    ctx.fillStyle = '#64748b';
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`${dateStr} ${timeStr}`, rightX, plateY + 62);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('STARGAZER ASTROPHOTOGRAPHY ARCHIVE', rightX, plateY + 86);

    // Trigger download
    const filename = this.generateFilename(photo, 'exhibition');
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  private static generateFilename(photo: Photo, type: 'raw' | 'exhibition'): string {
    const cleanTarget = photo.targetName
      .replace(/[\/\?<>\\:\*\|":·]/g, '_')
      .replace(/\s+/g, '_')
      .slice(0, 30);
    const date = new Date(photo.timestamp);
    const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}_${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}`;
    return `Stargazer_${cleanTarget}_${type}_${dateStr}.png`;
  }
}
