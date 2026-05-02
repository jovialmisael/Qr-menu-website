import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const DAILY_STOCK_LIMIT = 50;

interface StockState {
  // { [itemId]: remainingStock }
  remaining: Record<string, number>;
  lastResetDate: string; // 'YYYY-MM-DD'

  // Get remaining stock for an item (auto-initialises to 50 if not tracked yet)
  getStock: (itemId: string) => number;

  // Deduct qty from an item's stock. Returns false if insufficient stock.
  deductStock: (itemId: string, qty: number) => boolean;

  // Call on app startup — resets all stock if it's a new day
  resetIfNewDay: () => void;
}

const todayStr = () => new Date().toISOString().slice(0, 10);

export const useStockStore = create<StockState>()(
  persist(
    (set, get) => ({
      remaining: {},
      lastResetDate: todayStr(),

      getStock: (itemId: string) => {
        get().resetIfNewDay();
        const r = get().remaining[itemId];
        return r === undefined ? DAILY_STOCK_LIMIT : r;
      },

      deductStock: (itemId: string, qty: number) => {
        get().resetIfNewDay();
        const current = get().getStock(itemId);
        if (current < qty) return false;
        set(state => ({
          remaining: { ...state.remaining, [itemId]: current - qty },
        }));
        return true;
      },

      resetIfNewDay: () => {
        const today = todayStr();
        if (get().lastResetDate !== today) {
          set({ remaining: {}, lastResetDate: today });
        }
      },
    }),
    { name: 'cafe-stock-storage' }
  )
);

export { DAILY_STOCK_LIMIT };
