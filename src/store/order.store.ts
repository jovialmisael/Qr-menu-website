import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '../types/menu';

interface OrderSettings {
  isOpen: boolean;
  openingTime: string; // "HH:mm" format
  closingTime: string; // "HH:mm" format
  taxRate: number;
  serviceChargeRate: number;
  cafeName: string;
}

interface OrderState {
  currentOrder: Order | null;
  orderHistory: Order[];
  settings: OrderSettings;
  createOrder: (order: Order) => void;
  updateStatus: (status: Order['status']) => void;
  clearCurrentOrder: () => void;
  updateSettings: (settings: Partial<OrderSettings>) => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      currentOrder: null,
      orderHistory: [],
      settings: {
        isOpen: true,
        openingTime: '08:00',
        closingTime: '12:00',
        taxRate: 0.11, // Standard PPN 11%
        serviceChargeRate: 0.05,
        cafeName: 'Bersejuk Coffee'
      },
      createOrder: (order: Order) => set((state: OrderState) => ({ 
        currentOrder: order, 
        orderHistory: [order, ...state.orderHistory] 
      })),
      updateStatus: (status: Order['status']) => set((state: OrderState) => ({
        currentOrder: state.currentOrder ? { ...state.currentOrder, status } : null,
        orderHistory: state.orderHistory.map(o => 
          o.id === state.currentOrder?.id ? { ...o, status } : o
        ),
      })),
      clearCurrentOrder: () => set({ currentOrder: null }),
      updateSettings: (newSettings: Partial<OrderSettings>) => set((state: OrderState) => ({
        settings: { ...state.settings, ...newSettings }
      })),
    }),
    { name: 'cafe-order-storage' }
  )
);
