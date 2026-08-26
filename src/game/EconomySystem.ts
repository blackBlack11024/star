import { gameStore } from './GameStore';

export class EconomySystem {
    constructor() {}

    public getLocationUnlockCost(locationId: string): number {
        const state = gameStore.getState() as any;
        const unlockedCount = state.unlockedLocations?.length || 1;
        return 500 + (unlockedCount - 1) * 200; // Base 500, increases by 200 per unlock
    }

    public unlockLocation(locationId: string): boolean {
        const state = gameStore.getState() as any;
        const cost = this.getLocationUnlockCost(locationId);
        
        if (this.canAfford(cost)) {
            if (state.spendMoney && state.unlockLocationId) {
                state.spendMoney(cost);
                state.unlockLocationId(locationId);
                return true;
            }
        }
        return false;
    }

    public canAfford(amount: number): boolean {
        const state = gameStore.getState() as any;
        return (state.money || 0) >= amount;
    }

    public getStats() {
        const state = gameStore.getState() as any;
        return {
            totalEarned: state.totalMoneyEarned || 0,
            totalSpent: state.totalMoneySpent || 0,
            currentBalance: state.money || 0
        };
    }
}
