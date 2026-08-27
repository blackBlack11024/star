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

        // Evaluate owned accessories
        const accessories = state.accessories || [];
        const hasAcc = (id: string) => accessories.some((a: any) => a.id === id && a.owned);

        const usedEquipmentTags: string[] = [];
        let accessoryScoreBonus = 0;
        let accessoryPriceMultiplier = 1.0;

        // 1. Camera Sensor Upgrades
        if (hasAcc('camera_cmos')) {
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

        const isUnknownSky = !targetInfo || !targetInfo.name || targetInfo.name.includes('未知');
        const qualityScore = this.calculateQuality(targetInfo, state, expSec, hasMotionBlur, driftAmount, accessoryScoreBonus);
        const quality = this.getQualityGrade(qualityScore);
        let basePrice = this.calculatePrice(quality, targetInfo?.type || TargetType.StarField);
        if (isUnknownSky) {
            basePrice = Math.max(5, Math.min(25, Math.floor(basePrice * 0.25)));
        }
        const finalPrice = Math.floor(basePrice * penaltyFactor * accessoryPriceMultiplier);

        const photo: Photo = {
            id: `photo_${++this.photoIdCounter}_${Date.now()}`,
            imageDataUrl,
            targetName: targetInfo?.name || '未知星野',
            targetType: targetInfo?.type || TargetType.StarField,
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
                    message: `鏡筒在曝光中移動！星點產生拖尾殘影，清晰度下降（可至工作室「疊圖工坊」修復）`,
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
        let score = 45;

        // Weather multiplier
        let weatherMult = 1.0;
        if (state.weather === WeatherState.PartlyCloudy) weatherMult = 0.6;
        else if (state.weather === WeatherState.Cloudy) weatherMult = 0.2;
        else if (state.weather === WeatherState.Rainy) weatherMult = 0;

        score *= weatherMult;

        // Telescope bonus
        const telLevel = state.telescopeLevel || 1;
        score += telLevel * 8;

        // Exposure signal-to-noise ratio curve
        const isPlanet = targetInfo?.type === TargetType.Planet;
        if (isPlanet) {
            // Planets & Moon want short exposures (0.5s - 3s)
            if (expSec <= 3.5) {
                score += 20; // Crisp planetary surface features
            } else {
                score -= Math.min(30, (expSec - 3.5) * 4); // Overexposure washing out planetary bands
            }
        } else {
            // Deep Sky Objects need long photon integration
            if (expSec < 3.0) {
                score -= 22; // Underexposed, faint clouds barely visible
            } else if (expSec >= 15.0 && expSec <= 90.0) {
                score += Math.min(28, Math.log2(expSec + 1) * 5.0); // Rich emission nebula colors
            } else {
                score += 15;
            }
        }

        // Difficulty bonus
        if (targetInfo?.difficulty) {
            score += targetInfo.difficulty * 5;
        }

        // Motion blur penalty (鏡筒晃動拖尾殘影懲罰)
        if (hasMotionBlur) {
            const blurPenalty = Math.min(45, Math.max(15, driftAmount * 28));
            score -= blurPenalty;
        }

        // Light pollution penalty (0 = dark, 1 = heavy)
        const hasLpFilter = (state.accessories || []).some((a: any) => a.id === 'filter_light_pollution' && a.owned);
        const lp = state.currentLocation?.lightPollution ?? 0.05;
        score -= hasLpFilter ? (lp * 5) : (lp * 20); // 75% light pollution filtered out!

        // Accessory equipment bonus
        score += accessoryScoreBonus;

        // If empty unknown sky background with no identified celestial targets
        const isUnknownSky = !targetInfo || !targetInfo.name || targetInfo.name.includes('未知');
        if (isUnknownSky) {
            score = Math.min(38, Math.round(score * 0.5));
        }

        return Math.max(10, Math.min(100, Math.round(score)));
    }

    private getQualityGrade(score: number): PhotoQuality {
        if (score >= 95) return PhotoQuality.SSS;
        if (score >= 88) return PhotoQuality.S;
        if (score >= 72) return PhotoQuality.A;
        if (score >= 50) return PhotoQuality.B;
        if (score >= 32) return PhotoQuality.C;
        return PhotoQuality.D;
    }

    private calculatePrice(grade: PhotoQuality, type: TargetType): number {
        const priceTable: Record<string, Record<PhotoQuality, number>> = {
            [TargetType.StarField]: {
                [PhotoQuality.D]: 5,
                [PhotoQuality.C]: 15,
                [PhotoQuality.B]: 40,
                [PhotoQuality.A]: 80,
                [PhotoQuality.S]: 150,
                [PhotoQuality.SSS]: 300,
            },
            [TargetType.Planet]: {
                [PhotoQuality.D]: 20,
                [PhotoQuality.C]: 50,
                [PhotoQuality.B]: 120,
                [PhotoQuality.A]: 250,
                [PhotoQuality.S]: 500,
                [PhotoQuality.SSS]: 1000,
            },
            [TargetType.Messier]: {
                [PhotoQuality.D]: 50,
                [PhotoQuality.C]: 120,
                [PhotoQuality.B]: 300,
                [PhotoQuality.A]: 600,
                [PhotoQuality.S]: 1200,
                [PhotoQuality.SSS]: 2500,
            },
            [TargetType.SpecialEvent]: {
                [PhotoQuality.D]: 100,
                [PhotoQuality.C]: 250,
                [PhotoQuality.B]: 600,
                [PhotoQuality.A]: 1200,
                [PhotoQuality.S]: 2500,
                [PhotoQuality.SSS]: 5000,
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


