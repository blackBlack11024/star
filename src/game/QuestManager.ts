import { QUESTS, Quest, QuestObjective } from '../data/quests';
import { gameStore } from './GameStore';

export class QuestManager {
    constructor() {
        document.addEventListener('photo-captured', (e: any) => {
            this.onPhotoCaptured(e.detail);
        });
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

    private checkQuestCompletion(quest: Quest, detail: { photo: any; targetInfo: any }): boolean {
        const state = gameStore.getState();
        const photos = state.photos || [];

        return quest.objectives.every((obj) => {
            return this.isObjectiveMet(obj, photos, detail);
        });
    }

    private isObjectiveMet(obj: QuestObjective, photos: any[], latest: { photo: any; targetInfo: any }): boolean {
        const ph = latest.photo;
        const ti = latest.targetInfo;

        switch (obj.type) {
            case 'capture_any':
                return true;

            case 'capture_target': {
                const targetName = ti?.name || ti?.commonName || ph?.targetName || '';
                const targetId = ti?.id || '';
                const matchId = targetId === obj.targetId || targetName.includes(obj.targetId || '___');
                if (!matchId) return false;
                if (obj.minQuality) {
                    const grades = ['D', 'C', 'B', 'A', 'S', 'SSS'];
                    return grades.indexOf(ph.quality) >= grades.indexOf(obj.minQuality);
                }
                return true;
            }

            case 'capture_count': {
                const allPhotos = latest.photo ? [...photos, latest.photo] : photos;
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
                return grades.indexOf(ph.quality) >= grades.indexOf(obj.minQuality || 'A');
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
