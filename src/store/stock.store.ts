import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const DAILY_STOCK_LIMIT = 50;

export interface StockLogEntry {
  id: string;
  itemId: string;
  itemName: string;
  type: 'deduct' | 'restock' | 'set' | 'reset';
  quantity: number;
  previousStock: number;
  newStock: number;
  timestamp: string;
  actor: string; // 'customer' | 'cashier' | 'owner' | 'system'
}

interface StockState {
  remaining: Record<string, number>;
  dailyLimits: Record<string, number>;
  lastResetDate: string; // 'YYYY-MM-DD'
  stockLog: StockLogEntry[];

  getStock: (itemId: string) => number;
  deductStock: (itemId: string, qty: number, itemName?: string, actor?: string) => boolean;
  setStock: (itemId: string, qty: number, itemName?: string, actor?: string) => void;
  addStock: (itemId: string, qty: number, itemName?: string, actor?: string) => void;
  setDailyLimit: (itemId: string, limit: number) => void;
  resetIfNewDay: () => void;
  clearOldLogs: () => void;
}

const todayStr = () => new Date().toISOString().slice(0, 10);

const createLogEntry = (
  itemId: string,
  itemName: string,
  type: StockLogEntry['type'],
  quantity: number,
  previousStock: number,
  newStock: number,
  actor: string
): StockLogEntry => ({
  id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
  itemId,
  itemName: itemName || itemId,
  type,
  quantity,
  previousStock,
  newStock,
  timestamp: new Date().toISOString(),
  actor
});

export const useStockStore = create<StockState>()(
  persist(
    (set, get) => ({
      remaining: {},
      dailyLimits: {},
      lastResetDate: todayStr(),
      stockLog: [],

      getStock: (itemId: string) => {
        get().resetIfNewDay();
        const r = get().remaining[itemId];
        const limit = get().dailyLimits[itemId] ?? DAILY_STOCK_LIMIT;
        return r === undefined ? limit : r;
      },

      deductStock: (itemId: string, qty: number, itemName = 'Unknown Item', actor = 'customer') => {
        get().resetIfNewDay();
        const current = get().getStock(itemId);
        if (current < qty) return false;
        
        const newStock = current - qty;
        const logEntry = createLogEntry(itemId, itemName, 'deduct', qty, current, newStock, actor);

        set(state => ({
          remaining: { ...state.remaining, [itemId]: newStock },
          stockLog: [logEntry, ...state.stockLog]
        }));
        get().clearOldLogs();
        return true;
      },

      setStock: (itemId: string, qty: number, itemName = 'Unknown Item', actor = 'owner') => {
        get().resetIfNewDay();
        const current = get().getStock(itemId);
        const newStock = Math.max(0, qty);
        
        const logEntry = createLogEntry(itemId, itemName, 'set', Math.abs(newStock - current), current, newStock, actor);

        set(state => ({
          remaining: { ...state.remaining, [itemId]: newStock },
          stockLog: [logEntry, ...state.stockLog]
        }));
        get().clearOldLogs();
      },

      addStock: (itemId: string, qty: number, itemName = 'Unknown Item', actor = 'owner') => {
        if (qty <= 0) return;
        get().resetIfNewDay();
        const current = get().getStock(itemId);
        const newStock = current + qty;
        
        const logEntry = createLogEntry(itemId, itemName, 'restock', qty, current, newStock, actor);

        set(state => ({
          remaining: { ...state.remaining, [itemId]: newStock },
          stockLog: [logEntry, ...state.stockLog]
        }));
        get().clearOldLogs();
      },

      setDailyLimit: (itemId: string, limit: number) => {
        set(state => ({
          dailyLimits: { ...state.dailyLimits, [itemId]: Math.max(0, limit) }
        }));
      },

      resetIfNewDay: () => {
        const today = todayStr();
        if (get().lastResetDate !== today) {
          const limits = get().dailyLimits;
          const oldRemaining = get().remaining;
          const newRemaining: Record<string, number> = {};
          const newLogs: StockLogEntry[] = [];
          
          Object.keys(oldRemaining).forEach(itemId => {
             const prev = oldRemaining[itemId];
             const limit = limits[itemId] ?? DAILY_STOCK_LIMIT;
             newRemaining[itemId] = limit;
             
             if (prev !== limit) {
                newLogs.push(createLogEntry(itemId, itemId, 'reset', Math.abs(limit - prev), prev, limit, 'system'));
             }
          });

          set(state => ({ 
            remaining: newRemaining, 
            lastResetDate: today,
            stockLog: [...newLogs, ...state.stockLog]
          }));
          get().clearOldLogs();
        }
      },

      clearOldLogs: () => {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        set(state => ({
          stockLog: state.stockLog.filter(log => new Date(log.timestamp) >= sevenDaysAgo)
        }));
      }
    }),
    { name: 'cafe-stock-storage' }
  )
);

export { DAILY_STOCK_LIMIT };
