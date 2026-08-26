import { gameStore } from './GameStore';
import * as THREE from 'three';
import { Photo, PhotoQuality, TargetType, WeatherState } from '../types';

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

    public capturePhoto(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, targetInfo: any): Photo {
        const state = gameStore.getState();
        
        // Render scene to get imageDataUrl
        renderer.render(scene, camera);
        const imageDataUrl = renderer.domElement.toDataURL('image/jpeg', 0.85);

        // Identify the target ID (use DSO id if available, else use name)
        const targetId = targetInfo?.id || targetInfo?.name || 'star_field';

        // Calculate repeat penalty before incrementing count
        const penaltyFactor = getRepeatPenaltyFactor(targetId);
        targetPhotoCounts[targetId] = (targetPhotoCounts[targetId] || 0) + 1;

        const qualityScore = this.calculateQuality(targetInfo, state);
        const quality = this.getQualityGrade(qualityScore);
        const basePrice = this.calculatePrice(quality, targetInfo?.type || TargetType.StarField);
        const finalPrice = Math.floor(basePrice * penaltyFactor);

        const photo: any = {
            id: `photo_${++this.photoIdCounter}_${Date.now()}`,
            imageDataUrl,
            targetName: targetInfo?.name || '未知星野',
            targetType: targetInfo?.type || TargetType.StarField,
            exposureSeconds: state.exposureDuration || 5,
            telescopeLevel: state.telescopeLevel || 1,
            weatherCondition: state.weather,
            locationId: state.currentLocation?.id || 'hehuanshan',
            score: qualityScore,
            quality: quality as PhotoQuality,
            sellPrice: finalPrice,
            sold: false,
            timestamp: new Date(),
            repeatPenaltyFactor: penaltyFactor,
        };

        state.addPhoto(photo as Photo);

        // Show warning if repeat penalty applied
        if (penaltyFactor < 1.0) {
            const msg = finalPrice === 0
                ? `市場飽和！${photo.targetName} 已無人願購買`
                : `重複拍攝！價值降至 $${finalPrice}（原價 $${basePrice}）`;
            document.dispatchEvent(new CustomEvent('show-notification', { detail: { message: msg, type: 'warning' } }));
        }

        // Dispatch quest progress event
        document.dispatchEvent(new CustomEvent('photo-captured', { detail: { photo, targetInfo } }));

        return photo as Photo;
    }

    public calculateQuality(targetInfo: any, state: any): number {
        let score = 50;

        // Weather multiplier
        let weatherMult = 1.0;
        if (state.weather === WeatherState.PartlyCloudy) weatherMult = 0.6;
        else if (state.weather === WeatherState.Cloudy) weatherMult = 0.2;
        else if (state.weather === WeatherState.Rainy) weatherMult = 0;

        score *= weatherMult;

        // Telescope bonus
        const telLevel = state.telescopeLevel || 1;
        score += telLevel * 8;

        // Exposure bonus (up to 20 points for longer exposure)
        const expSec = state.exposureDuration || 5;
        score += Math.min(20, Math.log2(expSec + 1) * 3);

        // Difficulty bonus
        if (targetInfo?.difficulty) {
            score += targetInfo.difficulty * 5;
        }

        // Light pollution penalty (0 = dark, 1 = heavy)
        const lp = state.currentLocation?.lightPollution ?? 0.05;
        score -= lp * 20;

        return Math.max(10, Math.min(100, Math.round(score)));
    }

    private getQualityGrade(score: number): PhotoQuality {
        if (score >= 90) return PhotoQuality.S;
        if (score >= 75) return PhotoQuality.A;
        if (score >= 55) return PhotoQuality.B;
        if (score >= 35) return PhotoQuality.C;
        return PhotoQuality.D;
    }

    private calculatePrice(grade: PhotoQuality, type: TargetType): number {
        const priceTable: Record<string, Record<PhotoQuality, number>> = {
            [TargetType.StarField]: {
                [PhotoQuality.D]: 5,
                [PhotoQuality.C]: 15,
                [PhotoQuality.B]: 40,
                [PhotoQuality.A]: 80,
                [PhotoQuality.S]: 150
            },
            [TargetType.Planet]: {
                [PhotoQuality.D]: 20,
                [PhotoQuality.C]: 50,
                [PhotoQuality.B]: 120,
                [PhotoQuality.A]: 250,
                [PhotoQuality.S]: 500
            },
            [TargetType.Messier]: {
                [PhotoQuality.D]: 50,
                [PhotoQuality.C]: 120,
                [PhotoQuality.B]: 300,
                [PhotoQuality.A]: 600,
                [PhotoQuality.S]: 1200
            },
            [TargetType.SpecialEvent]: {
                [PhotoQuality.D]: 100,
                [PhotoQuality.C]: 250,
                [PhotoQuality.B]: 600,
                [PhotoQuality.A]: 1200,
                [PhotoQuality.S]: 2500
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


