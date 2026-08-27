import { gameStore } from './GameStore';
import * as THREE from 'three';
import { Photo, PhotoQuality, TargetType, WeatherState, FrameType } from '../types';

// Track how many times each target has been photographed this session
const targetPhotoCounts: Record<string, number> = {};

/**
 * Repeat penalty: each subsequent photo of the same target reduces market value.
 *  1st: 100%, 2nd: 60%, 3rd: 25%, 4th+: $0
 */
function getRepeatPenaltyFactor(targetId: string): number {
    const count = targetPhotoCounts[targetId] || 0;
    if (count === 0) return 1.0;
    if (count === 1) return 0.6;
    if (count === 2) return 0.25;
    return 0.0; // market saturated
}

export class PhotoManager {
    private photoIdCounter = 0;

    constructor() {}

    public capturePhoto(
        renderer: THREE.WebGLRenderer,
        scene: THREE.Scene,
        camera: THREE.Camera,
        targetInfo: any,
        actualExposureSeconds?: number,
        customImageDataUrl?: string,
        hasMotionBlur: boolean = false,
        driftAmount: number = 0,
        frameType: FrameType = 'light'
    ): Photo {
        const state = gameStore.getState();
        const expSec = Math.max(0.001, actualExposureSeconds ?? state.exposureDuration ?? 5);
        
        // Use accumulated long exposure image if available, else render fallback
        let imageDataUrl = customImageDataUrl;
        if (!imageDataUrl) {
            renderer.render(scene, camera);
            imageDataUrl = renderer.domElement.toDataURL('image/jpeg', 0.85);
        }

        // Handle Calibration Frames (Dark, Flat, Bias)
        if (frameType !== 'light') {
            const calibNames: Record<string, string> = {
                dark: `暗場校準幀 (Dark Frame · 曝光 ${expSec.toFixed(1)}s)`,
                flat: `平場校準幀 (Flat Frame · 均勻光學校正)`,
                bias: `偏壓校準幀 (Bias Frame · 1/1000s 讀出偏置)`,
            };

            const calibPhoto: Photo = {
                id: `calib_${frameType}_${++this.photoIdCounter}_${Date.now()}`,
                imageDataUrl,
                targetName: calibNames[frameType] || '校準幀',
                targetType: TargetType.StarField,
                exposureSeconds: parseFloat(expSec.toFixed(3)),
                telescopeLevel: state.telescopeLevel || 1,
                weatherCondition: state.weather,
                locationId: state.currentLocation?.id || 'hehuanshan',
                score: 85,
                quality: PhotoQuality.A,
                sellPrice: 0,
                sold: false,
                timestamp: new Date(),
                frameType,
            };

            state.addPhoto(calibPhoto);
            document.dispatchEvent(new CustomEvent('show-notification', {
                detail: {
                    message: `已記錄 ${calibNames[frameType]}！此為疊圖校準專用數據，不可出售。`,
                    type: 'info'
                }
            }));
            document.dispatchEvent(new CustomEvent('photo-captured', { detail: { photo: calibPhoto, targetInfo } }));
            return calibPhoto;
        }

        // Identify the target ID (use DSO id if available, else use name)
        const targetId = targetInfo?.id || targetInfo?.name || 'star_field';

        // Calculate repeat penalty before incrementing count
        const penaltyFactor = getRepeatPenaltyFactor(targetId);
        targetPhotoCounts[targetId] = (targetPhotoCounts[targetId] || 0) + 1;

        // Evaluate owned and equipped accessories
        const accessories = state.accessories || [];
        const hasAcc = (id: string) => accessories.some((a: any) => a.id === id && a.owned && a.equipped !== false);

        const usedEquipmentTags: string[] = [];
        let accessoryScoreBonus = 0;
        let accessoryPriceMultiplier = 1.0;

        // 1. Camera Sensor Upgrades
        if (hasAcc('camera_startrail')) {
            accessoryScoreBonus += 25;
            accessoryPriceMultiplier *= 1.5;
            usedEquipmentTags.push('星軌相機');
        } else if (hasAcc('camera_cmos')) {
            accessoryScoreBonus += 20;
            accessoryPriceMultiplier *= 1.35;
            usedEquipmentTags.push('CMOS相機');
        } else if (hasAcc('camera_cooled')) {
            accessoryScoreBonus += 12;
            accessoryPriceMultiplier *= 1.2;
            usedEquipmentTags.push('製冷CCD');
        }

        // 2. Optical Filters
        const targetName = targetInfo?.name || '';
        const targetType = targetInfo?.type || '';
        const isPlanet = targetType === TargetType.Planet;
        const isNebula = targetType === 'nebula' || targetName.includes('星雲');
        const isPlanetaryNebula = targetType === 'planetary_nebula' || targetName.includes('M57') || targetName.includes('M27');

        if (hasAcc('filter_halpha') && isNebula) {
            accessoryScoreBonus += 22;
            accessoryPriceMultiplier *= 1.5;
            usedEquipmentTags.push('H-alpha濾鏡');
        }
        if (hasAcc('filter_oiii') && isPlanetaryNebula) {
            accessoryScoreBonus += 25;
            accessoryPriceMultiplier *= 1.6;
            usedEquipmentTags.push('OIII濾鏡');
        }
        if (hasAcc('filter_light_pollution')) {
            usedEquipmentTags.push('光害濾鏡');
        }

        // 3. Mounts
        if (hasAcc('mount_goto')) {
            accessoryScoreBonus += 10;
            usedEquipmentTags.push('GoTo導星');
        } else if (hasAcc('mount_eq')) {
            accessoryScoreBonus += 6;
            usedEquipmentTags.push('赤道儀');
        }

        // 4. Eyepieces
        if (hasAcc('eyepiece_barlow') && isPlanet) {
            accessoryScoreBonus += 16;
            accessoryPriceMultiplier *= 1.3;
            usedEquipmentTags.push('巴羅鏡2x');
        } else if (hasAcc('eyepiece_wide') && (targetType === 'cluster' || targetType === TargetType.StarField)) {
            accessoryScoreBonus += 10;
            accessoryPriceMultiplier *= 1.15;
            usedEquipmentTags.push('廣角目鏡');
        }

        // 4. Special Events (ISS & Meteors)
        let finalTargetName = targetInfo?.name || '未知星野';
        let finalTargetType = targetInfo?.type || TargetType.StarField;

        if (targetInfo?.hasMeteor) {
            usedEquipmentTags.push('流星光軌');
            accessoryScoreBonus += 15;
            accessoryPriceMultiplier *= 1.4;
            if (finalTargetName === '未知星野') {
                finalTargetName = '英仙座流星雨 · 璀璨光軌';
                finalTargetType = TargetType.SpecialEvent;
            } else {
                finalTargetName = `${finalTargetName} (伴隨流星光軌)`;
            }
        }

        if (targetInfo?.id === 'iss' || finalTargetName.includes('太空站')) {
            usedEquipmentTags.push('低地軌道特寫');
            accessoryScoreBonus += 18;
            accessoryPriceMultiplier *= 1.5;
            finalTargetType = TargetType.SpecialEvent;
        }

        const isUnknownSky = !targetInfo || !targetInfo.name || targetInfo.name.includes('未知');
        const qualityScore = this.calculateQuality(targetInfo, state, expSec, hasMotionBlur, driftAmount, accessoryScoreBonus);
        const quality = this.getQualityGrade(qualityScore);
        let basePrice = this.calculatePrice(quality, finalTargetType);
        if (isUnknownSky && !targetInfo?.hasMeteor) {
            basePrice = Math.max(5, Math.min(25, Math.floor(basePrice * 0.25)));
        }
        const finalPrice = Math.floor(basePrice * penaltyFactor * accessoryPriceMultiplier);

        const photo: Photo = {
            id: `photo_${++this.photoIdCounter}_${Date.now()}`,
            imageDataUrl,
            targetName: finalTargetName,
            targetType: finalTargetType,
            exposureSeconds: parseFloat(expSec.toFixed(1)),
            telescopeLevel: state.telescopeLevel || 1,
            weatherCondition: state.weather,
            locationId: state.currentLocation?.id || 'hehuanshan',
            score: qualityScore,
            quality,
            sellPrice: finalPrice,
            sold: false,
            timestamp: new Date(),
            frameType: 'light',
            hasMotionBlur,
            driftAmount: parseFloat(driftAmount.toFixed(2)),
            equipmentTags: usedEquipmentTags,
        };

        state.addPhoto(photo);

        // Show warning if telescope drifted or repeat penalty applied
        if (hasMotionBlur) {
            document.dispatchEvent(new CustomEvent('show-notification', {
                detail: {
                    message: `星點拖尾拉線（未配備赤道儀產生場旋或鏡筒晃動）！評級受限於 B 級以下。可至商店購買「赤道儀」或前往「疊圖工坊」修復。`,
                    type: 'warning'
                }
            }));
        } else if (penaltyFactor < 1.0) {
            const msg = finalPrice === 0
                ? `市場飽和！${photo.targetName} 已無人願購買`
                : `重複拍攝！價值降至 $${finalPrice}（原價 $${basePrice}）`;
            document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: msg, type: 'warning' } }));
        }

        // Dispatch quest progress event
        document.dispatchEvent(new CustomEvent('photo-captured', { detail: { photo, targetInfo } }));

        return photo;
    }

    public calculateQuality(
        targetInfo: any,
        state: any,
        expSec: number = 5,
        hasMotionBlur: boolean = false,
        driftAmount: number = 0,
        accessoryScoreBonus: number = 0
    ): number {
        let score = 20; // Balanced base score (down from 45)

        // Weather multiplier
        let weatherMult = 1.0;
        if (state.weather === WeatherState.PartlyCloudy) weatherMult = 0.6;
        else if (state.weather === WeatherState.Cloudy) weatherMult = 0.2;
        else if (state.weather === WeatherState.Rainy) weatherMult = 0;

        score *= weatherMult;

        // Telescope resolving power bonus (Tier 1: +3, Tier 5: +15, down from level * 8)
        const telLevel = state.telescopeLevel || 1;
        score += telLevel * 3;

        // Exposure signal-to-noise ratio curve
        const isPlanet = targetInfo?.type === TargetType.Planet;
        if (isPlanet) {
            // Planets & Moon want short exposures (0.5s - 2.5s)
            if (expSec <= 2.5) {
                score += 20; // Crisp planetary surface features
            } else if (expSec <= 4.0) {
                score += 10;
            } else {
                score -= Math.min(25, (expSec - 2.5) * 5); // Overexposure washing out planetary bands
            }
        } else {
            // Deep Sky Objects need long photon integration
            if (expSec < 3.0) {
                score -= 15; // Underexposed, faint clouds barely visible
            } else if (expSec >= 15.0 && expSec <= 90.0) {
                score += Math.min(25, 12 + Math.log2(expSec + 1) * 2.5); // Rich emission nebula colors
            } else {
                score += 12;
            }
        }

        // Difficulty bonus (scaled: 1 to 5)
        if (targetInfo?.difficulty) {
            score += Math.min(10, targetInfo.difficulty * 2);
        }

        // Motion blur penalty (鏡筒晃動拖尾與場旋殘影懲罰)
        if (hasMotionBlur) {
            const blurPenalty = Math.min(45, Math.max(20, driftAmount * 25));
            score -= blurPenalty;
            // 拖尾或場旋照片在天文攝影中屬於失敗/脫焦影格，評級嚴格受限於 B 級（最高 62 分），不可評為 S 或 SSS 級
            score = Math.min(score, 62);
        }

        // Light pollution penalty (0 = dark, 1 = heavy)
        const hasLpFilter = (state.accessories || []).some((a: any) => a.id === 'filter_light_pollution' && a.owned && a.equipped !== false);
        const lp = state.currentLocation?.lightPollution ?? 0.05;
        score -= hasLpFilter ? (lp * 4) : (lp * 15);

        // Accessory equipment bonus (capped at +12)
        score += Math.min(12, accessoryScoreBonus * 0.5);

        // Target Altitude (Seeing / Atmospheric Turbulance)
        if (targetInfo?.altitude !== undefined) {
            if (targetInfo.altitude < 20) {
                score -= 10; // Low altitude atmospheric turbulence
            } else if (targetInfo.altitude > 60) {
                score += 8; // Zenith high seeing
            }
        }

        // If empty unknown sky background with no identified celestial targets
        const isUnknownSky = !targetInfo || !targetInfo.name || targetInfo.name.includes('未知');
        if (isUnknownSky) {
            score = Math.min(35, Math.round(score * 0.4));
        }

        return Math.max(5, Math.min(100, Math.round(score)));
    }

    private getQualityGrade(score: number): PhotoQuality {
        if (score >= 95) return PhotoQuality.SSS;
        if (score >= 86) return PhotoQuality.S;
        if (score >= 72) return PhotoQuality.A;
        if (score >= 55) return PhotoQuality.B;
        if (score >= 40) return PhotoQuality.C;
        return PhotoQuality.D;
    }

    private calculatePrice(grade: PhotoQuality, type: TargetType): number {
        const priceTable: Record<string, Record<PhotoQuality, number>> = {
            [TargetType.StarField]: {
                [PhotoQuality.D]: 2,
                [PhotoQuality.C]: 5,
                [PhotoQuality.B]: 12,
                [PhotoQuality.A]: 25,
                [PhotoQuality.S]: 45,
                [PhotoQuality.SSS]: 80,
            },
            [TargetType.Planet]: {
                [PhotoQuality.D]: 5,
                [PhotoQuality.C]: 15,
                [PhotoQuality.B]: 35,
                [PhotoQuality.A]: 75,
                [PhotoQuality.S]: 140,
                [PhotoQuality.SSS]: 240,
            },
            [TargetType.Messier]: {
                [PhotoQuality.D]: 10,
                [PhotoQuality.C]: 30,
                [PhotoQuality.B]: 70,
                [PhotoQuality.A]: 150,
                [PhotoQuality.S]: 300,
                [PhotoQuality.SSS]: 520,
            },
            [TargetType.SpecialEvent]: {
                [PhotoQuality.D]: 25,
                [PhotoQuality.C]: 60,
                [PhotoQuality.B]: 140,
                [PhotoQuality.A]: 280,
                [PhotoQuality.S]: 500,
                [PhotoQuality.SSS]: 850,
            }
        };

        const typePrices = priceTable[type] || priceTable[TargetType.StarField];
        return typePrices[grade] || typePrices[PhotoQuality.D];
    }

    public getPhotoStats() {
        const state = gameStore.getState();
        const photos = state.photos || [];
        const totalPhotos = photos.length;
        const totalEarned = photos.filter(p => p.sold).reduce((sum, p) => sum + p.sellPrice, 0);
        const bestQuality = photos.reduce((best, p) => p.score > best ? p.score : best, 0);
        
        return {
            totalPhotos,
            totalEarned,
            bestQuality
        };
    }

    /** Reset repeat counts (e.g., after a new game session) */
    public resetRepeatCounts() {
        Object.keys(targetPhotoCounts).forEach(k => delete targetPhotoCounts[k]);
    }
}


