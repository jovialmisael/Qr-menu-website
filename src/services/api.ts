import { CartItem, Order } from '../types/menu';
import { MOCK_MENU } from '../mockData';

// Dummy secure backend service
export const api = {
  checkout: async (cartItems: CartItem[], tableId: string, promoCode?: string): Promise<Order> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // SECURE CALCULATION: Recalculate price on the "server" using authoritative MOCK_MENU
    let subtotal = 0;
    cartItems.forEach(item => {
      const product = MOCK_MENU.find(m => m.id === item.menuItemId);
      if (product) {
        let itemPrice = product.basePrice;
        
        // Add size price
        if (item.options?.size && product.meta?.sizes) {
          const sizeObj = product.meta.sizes.find(s => s.label === item.options!.size);
          if (sizeObj) {
            itemPrice = sizeObj.price;
          }
        }

        // Add milk price
        if (item.options?.milk && product.meta?.add_ons) {
          const milkObj = product.meta.add_ons.find(a => a.name === item.options!.milk);
          if (milkObj) {
            itemPrice += milkObj.price;
          }
        }

        // Add extra shots
        if (item.options?.shots && item.options.shots > 1 && product.meta?.add_ons) {
          const shotObj = product.meta.add_ons.find(a => a.name === 'Extra Shot');
          if (shotObj) {
            itemPrice += shotObj.price * (item.options.shots - 1);
          }
        }

        // Add syrups
        if (item.options?.syrup && product.meta?.add_ons) {
          item.options.syrup.forEach(s => {
            const syrupObj = product.meta!.add_ons!.find(a => a.id === s.id);
            if (syrupObj) {
              itemPrice += syrupObj.price * s.pumps;
            }
          });
        }

        subtotal += itemPrice * item.quantity;
      }
    });

    // Gamification & Promo Code Validation
    let discount = 0;
    if (promoCode && promoCode.toUpperCase() === 'BERSEJUK20') {
      discount = subtotal * 0.20; // 20% discount
    }

    const serviceCharge = (subtotal - discount) * 0.05;
    const tax = (subtotal - discount + serviceCharge) * 0.11;
    const totalPrice = subtotal - discount + serviceCharge + tax;

    // Create secure order object
    const newOrder: Order = {
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      tableId,
      items: cartItems,
      subtotal,
      tax,
      serviceCharge,
      discount,
      promoCode: promoCode ? promoCode.toUpperCase() : undefined,
      totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    return newOrder;
  }
};
