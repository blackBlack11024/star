import { QUESTS, Quest, QuestObjective } from '../data/quests';
import { DEEP_SKY_OBJECTS } from '../data/deepSkyObjects';
import { gameStore } from './GameStore';

export class QuestManager {
    constructor() {
        document.addEventListener('photo-captured', (e: any) => {
            this.onPhotoCaptured(e.detail);
        });

        // Check if any existing photos in album satisfy active or unlocked quests on startup
        setTimeout(() => this.checkAllQuests(), 300);
    }

    public checkAllQuests() {
        const state = gameStore.getState();
        const completedIds: string[] = state.completedQuestIds || [];

        for (const quest of QUESTS) {
            if (completedIds.includes(quest.id)) continue;
            if (quest.prerequisiteQuestId && !completedIds.includes(quest.prerequisiteQuestId)) continue;

            if (this.checkQuestCompletion(quest)) {
                this.completeQuest(quest);
            }
        }
    }

    private onPhotoCaptured(detail: { photo: any; targetInfo: any }) {
        const state = gameStore.getState();
        const completedIds: string[] = state.completedQuestIds || [];

        for (const quest of QUESTS) {
            if (completedIds.includes(quest.id)) continue;
            if (quest.prerequisiteQuestId && !completedIds.includes(quest.prerequisiteQuestId)) continue;

            if (this.checkQuestCompletion(quest, detail)) {
                this.completeQuest(quest);
            }
        }
    }

    public isObjectiveCompleted(obj: QuestObjective, photos: any[]): boolean {
        return this.isObjectiveMet(obj, photos);
    }

    private checkQuestCompletion(quest: Quest, detail?: { photo: any; targetInfo: any }): boolean {
        const state = gameStore.getState();
        const photos = state.photos || [];

        return quest.objectives.every((obj) => {
            return this.isObjectiveMet(obj, photos, detail);
        });
    }

    private isObjectiveMet(obj: QuestObjective, photos: any[], latest?: { photo: any; targetInfo: any }): boolean {
        const allPhotos = latest?.photo ? [...photos, latest.photo] : photos;

        switch (obj.type) {
            case 'capture_any':
                return allPhotos.length > 0;

            case 'capture_target': {
                const targetId = (obj.targetId || '').toLowerCase();
                const dso = DEEP_SKY_OBJECTS.find(d => d.id.toLowerCase() === targetId || d.name.toLowerCase() === targetId);

                const matchPhoto = (ph: any, ti?: any) => {
                    if (!ph) return false;
                    const targetName = (ti?.name || ti?.commonName || ph?.targetName || '').toLowerCase();
                    const tid = (ti?.id || '').toLowerCase();

                    let matched = tid === targetId || targetName.includes(targetId);
                    if (!matched && dso) {
                        matched = targetName.includes(dso.commonName.toLowerCase()) || targetName.includes(dso.name.toLowerCase());
                    }
                    if (!matched) return false;

                    if (obj.minQuality) {
                        const grades = ['D', 'C', 'B', 'A', 'S', 'SSS'];
                        return grades.indexOf(ph.quality) >= grades.indexOf(obj.minQuality);
                    }
                    return true;
                };

                // Check latest capture
                if (latest && matchPhoto(latest.photo, latest.targetInfo)) {
                    return true;
                }

                // Check entire album history
                return allPhotos.some(p => matchPhoto(p));
            }

            case 'capture_count': {
                const unique = new Set<string>();
                for (const p of allPhotos) {
                    if (!obj.targetType || p.targetType === obj.targetType) {
                        unique.add(p.targetName);
                    }
                }
                return unique.size >= (obj.count || 1);
            }

            case 'quality_min': {
                const grades = ['D', 'C', 'B', 'A', 'S', 'SSS'];
                return allPhotos.some((p: any) => grades.indexOf(p.quality) >= grades.indexOf(obj.minQuality || 'A'));
            }
        }
        return false;
    }

    private completeQuest(quest: Quest) {
        const state = gameStore.getState();
        const completedIds = [...(state.completedQuestIds || []), quest.id];
        
        if (quest.rewards.money) {
            state.addMoney(quest.rewards.money);
        }

        gameStore.setState({ completedQuestIds: completedIds } as any);

        document.dispatchEvent(new CustomEvent('quest-completed', { detail: { quest } }));
    }

    public getActiveQuests(): Quest[] {
        const state = gameStore.getState();
        const completedIds: string[] = state.completedQuestIds || [];
        return QUESTS.filter(q => {
            if (completedIds.includes(q.id)) return false;
            if (q.prerequisiteQuestId && !completedIds.includes(q.prerequisiteQuestId)) return false;
            return true;
        }).slice(0, 3);
    }

    public getNextQuest(): Quest | null {
        return this.getActiveQuests()[0] || null;
    }

    public isCompleted(questId: string): boolean {
        const state = gameStore.getState();
        return (state.completedQuestIds || []).includes(questId);
    }
}
