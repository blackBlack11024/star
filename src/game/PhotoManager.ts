import { gameStore } from './GameStore';
import * as THREE from 'three';
import { Photo, PhotoQuality, TargetType, WeatherState } from '../types';

export class PhotoManager {
    private photoIdCounter = 0;

    constructor() {}

    public capturePhoto(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, targetInfo: any): Photo {
        const state = gameStore.getState();
        
        // Render scene to get imageDataUrl
        renderer.render(scene, camera);
        const imageDataUrl = renderer.domElement.toDataURL('image/jpeg', 0.85);

        const qualityScore = this.calculateQuality(targetInfo, state);
        const quality = this.getQualityGrade(qualityScore);
        const price = this.calculatePrice(quality, targetInfo?.type || TargetType.StarField);

        const photo: Photo = {
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
            sellPrice: price,
            sold: false,
            timestamp: new Date(),
        };

        state.addPhoto(photo);
        return photo;
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
}
