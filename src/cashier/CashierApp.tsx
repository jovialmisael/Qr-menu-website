import { useEffect, useState, useMemo } from 'react';
import { useMenuStore } from '../store/menu.store';
import { MOCK_MENU, MOCK_CATEGORIES } from '../mockData';
import { Order } from '../types/menu';
import OrderCard from './OrderCard';
import { formatPrice } from '../utils/formatters';
import { Coffee, ArrowLeft, Lock, BellRing, ReceiptText, Banknote, TrendingUp } from 'lucide-react';

// Shared broadcast channel — same name used in App.tsx
const CHANNEL_NAME = 'bersejuk-order-sync';
const PIN = '1234';

export default function CashierApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'preparing' | 'completed'>('pending');
  const [notification, setNotification] = useState<string | null>(null);
  const { setMenu } = useMenuStore();

  const loadOrders = (isPolling = false) => {
    const data = localStorage.getItem('cafe-order-storage');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed?.state?.orderHistory) {
          setOrders(prev => {
            if (!isPolling && prev.length > 0 && parsed.state.orderHistory.length > prev.length) {
              setNotification('Pesanan baru masuk!');
              setTimeout(() => setNotification(null), 5000);
            }
            return parsed.state.orderHistory;
          });
        }
      } catch (e) {
        console.error('Error parsing orders', e);
      }
    }
  };

  useEffect(() => {
    setMenu(MOCK_MENU, MOCK_CATEGORIES);
    loadOrders();

    // Listen to native storage events (fires when other tabs update localStorage)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cafe-order-storage') {
        loadOrders(false);
      }
    };
    window.addEventListener('storage', handleStorage);

    // Listen for explicit broadcast messages as a fallback
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (e) => {
      if (e.data?.type === 'NEW_ORDER') {
        loadOrders(false);
      }
    };

    return () => {
      window.removeEventListener('storage', handleStorage);
      channel.close();
    };
  }, []); // empty deps — setMenu is stable

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    const data = localStorage.getItem('cafe-order-storage');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed?.state?.orderHistory) {
          parsed.state.orderHistory = parsed.state.orderHistory.map((o: Order) =>
            o.id === orderId ? { ...o, status: newStatus } : o
          );
          if (parsed.state.currentOrder?.id === orderId) {
            parsed.state.currentOrder.status = newStatus;
          }
          localStorage.setItem('cafe-order-storage', JSON.stringify(parsed));
          setOrders(parsed.state.orderHistory);

          // Broadcast status change instantly to customer app
          const channel = new BroadcastChannel(CHANNEL_NAME);
          channel.postMessage({ type: 'STATUS_UPDATE', orderId, status: newStatus });
          setTimeout(() => channel.close(), 100);
        }
      } catch (e) {
        console.error('Error updating order', e);
      }
    }
  };

  // Calculations
  const todayOrders = useMemo(() => {
    const today = new Date().toDateString();
    return orders.filter(o => new Date(o.createdAt).toDateString() === today);
  }, [orders]);

  const totalRevenue = useMemo(() => {
    return todayOrders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
  }, [todayOrders]);

  const totalProfit = useMemo(() => {
    return totalRevenue * 0.45; // Simulated 45% profit margin
  }, [totalRevenue]);

  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      if (activeTab === 'pending') return o.status === 'pending';
      if (activeTab === 'preparing') return o.status === 'confirmed' || o.status === 'preparing';
      if (activeTab === 'completed') return o.status === 'ready' || o.status === 'completed';
      return true;
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [orders, activeTab]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[100dvh] bg-stone-900 flex items-center justify-center font-sans">
        <div className="w-full max-w-sm p-8 bg-white rounded-[2rem] shadow-2xl flex flex-col items-center">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-stone-600" />
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-2">Cashier Access</h2>
          <p className="text-stone-500 text-sm mb-6">Enter PIN to access dashboard</p>
          <input 
            type="password" 
            value={pinInput}
            onChange={(e) => {
              setPinInput(e.target.value);
              if (e.target.value === PIN) setIsAuthenticated(true);
            }}
            className="w-full text-center text-3xl tracking-[0.5em] font-mono border-b-2 border-stone-200 focus:border-stone-800 outline-none py-2 mb-8"
            placeholder="****"
            maxLength={4}
            autoFocus
          />
          <p className="text-xs text-stone-400">Default PIN is 1234</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-[var(--color-surface)] flex justify-center font-body relative">
      <div className="w-full max-w-[480px] h-[100dvh] bg-[var(--color-surface)] relative flex flex-col shadow-xl">
        
        {/* Notification Toast */}
        {notification && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-in slide-in-from-top-4 fade-in">
            <BellRing className="w-4 h-4" />
            <span className="text-sm font-bold">{notification}</span>
          </div>
        )}

        {/* Header */}
        <header className="px-6 py-5 bg-white border-b border-stone-100 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-100">
              <Coffee className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
               <h1 className="font-display font-semibold text-xl text-stone-900 leading-tight">Cashier Dashboard</h1>
               <p className="text-xs text-stone-500 font-label tracking-widest uppercase">Bersejuk QR</p>
            </div>
          </div>
          
          <a
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-50 border border-stone-200 hover:bg-stone-100 hover:text-stone-800 transition-all text-stone-500 active:scale-95 flex-shrink-0"
            title="Kembali ke UI Pelanggan"
          >
            <ArrowLeft className="w-5 h-5" />
          </a>
        </header>

        {/* Summary Widget */}
        <div className="bg-white px-6 py-4 flex gap-3 border-b border-stone-100 overflow-x-auto no-scrollbar">
          <div className="flex-none w-[110px] bg-stone-50 rounded-xl p-3 border border-stone-100 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-blue-600">
              <ReceiptText className="w-3.5 h-3.5" />
              <p className="text-[10px] uppercase font-bold text-stone-500">Orders</p>
            </div>
            <p className="text-sm font-bold text-stone-800">{todayOrders.length}</p>
          </div>
          <div className="flex-none w-[140px] bg-stone-50 rounded-xl p-3 border border-stone-100 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-stone-600">
              <Banknote className="w-3.5 h-3.5" />
              <p className="text-[10px] uppercase font-bold text-stone-500">Gross Rev</p>
            </div>
            <p className="text-sm font-bold text-stone-800">{formatPrice(totalRevenue)}</p>
          </div>
          <div className="flex-none w-[140px] bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5" />
              <p className="text-[10px] uppercase font-bold text-emerald-700">Profit (Est.)</p>
            </div>
            <p className="text-sm font-bold text-emerald-800">{formatPrice(totalProfit)}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white px-4 py-2 border-b border-stone-100 flex gap-2 overflow-x-auto no-scrollbar shadow-sm z-10">
          {(['pending', 'preparing', 'completed'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-[var(--color-primary)] text-white shadow-md' 
                  : 'bg-stone-50 text-stone-500 hover:bg-stone-100 border border-stone-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar bg-stone-50/50">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-32 text-stone-400">
               <p className="font-label uppercase tracking-widest text-xs">Belum ada pesanan</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
               {filteredOrders.map((order) => (
                  <OrderCard key={order.id} order={order} onUpdateStatus={updateOrderStatus} />
               ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

