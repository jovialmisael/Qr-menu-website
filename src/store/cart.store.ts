import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, MenuItem } from '../types/menu';

interface CartState {
  items: CartItem[];
  addItem: (product: MenuItem, selections: CartItem['selectedAddOns'], quantity: number, options?: any, sku_code?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  calculateTotal: (menuItems: MenuItem[]) => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product: MenuItem, selections: CartItem['selectedAddOns'], quantity: number, options?: any, sku_code?: string) => {
        const existingItem = get().items.find(item =>
          item.menuItemId === product.id &&
          JSON.stringify(item.selectedAddOns) === JSON.stringify(selections) &&
          JSON.stringify(item.options) === JSON.stringify(options)
        );

        if (existingItem) {
          set({
            items: get().items.map(i =>
              i.id === existingItem.id ? { ...i, quantity: i.quantity + quantity } : i
            ).filter(i => i.quantity > 0)
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                menuItemId: product.id,
                quantity,
                selectedAddOns: selections,
                options,
                sku_code
              }
            ].filter(i => i.quantity > 0)
          });
        }
      },
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      updateQuantity: (id, delta) => set({
        items: get().items.map(i =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        ).filter(i => i.quantity > 0)
      }),
      clearCart: () => set({ items: [] }),
      getTotalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      calculateTotal: (menuItems) => {
        return get().items.reduce((total, cartItem) => {
          const product = menuItems.find(i => i.id === cartItem.menuItemId);
          if (!product) return total;

          let itemPrice = product.basePrice;

          if (cartItem.options && product.meta) {
            // POS Strict pricing calc
            const sizeDef = product.meta.sizes?.find(s => s.label === cartItem.options!.size);
            if (sizeDef) itemPrice = sizeDef.price;

            if (cartItem.options.shots && cartItem.options.shots > 1) itemPrice += (cartItem.options.shots - 1) * 8000;
            if (cartItem.options.syrup && (cartItem.options.syrup as any).length > 0) itemPrice += (cartItem.options.syrup as any).length * 6000;
            if (cartItem.options.milk && cartItem.options.milk !== 'Standard Whole Milk') itemPrice += 12000;
          } else {
            // Legacy pricing calc
            cartItem.selectedAddOns.forEach(selection => {
              const group = product.addOnGroups?.find(g => g.id === selection.groupId);
              selection.choiceIds.forEach(cid => {
                const choice = group?.choices.find(c => c.id === cid);
                if (choice) itemPrice += choice.priceDelta;
              });
            });
          }

          return total + (itemPrice * cartItem.quantity);
        }, 0);
      },
    }),
    {
      name: 'cafe-cart-storage',
    }
  )
);
