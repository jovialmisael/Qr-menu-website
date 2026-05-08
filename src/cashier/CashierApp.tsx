import { useEffect, useState, useMemo } from 'react';
import { useMenuStore } from '../store/menu.store';
import { MOCK_MENU, MOCK_CATEGORIES } from '../mockData';
import { Order } from '../types/menu';
import OrderCard from './OrderCard';
import { formatPrice } from '../utils/formatters';
import { Coffee, ArrowLeft, Lock, BellRing, ReceiptText, Banknote, TrendingUp } from 'lucide-react';
import ReportView from './ReportView';
import StockManagement from './StockManagement';
import { useOrderStore } from '../store/order.store';

// Shared broadcast channel — same name used in App.tsx
const CHANNEL_NAME = 'bersejuk-order-sync';

export default function CashierApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<'cashier' | 'owner' | null>(null);
  const [pinInput, setPinInput] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'preparing' | 'completed' | 'reports' | 'stock'>('pending');

  useEffect(() => {
    if (role === 'owner') {
      setActiveTab('reports');
    }
  }, [role]);
  const [notification, setNotification] = useState<string | null>(null);
  const { settings, updateSettings } = useOrderStore();
  const isCafeOpen = settings.isOpen;
  const { setMenu } = useMenuStore();

  const addAuditLog = (action: string, details: any) => {
    try {
      const data = localStorage.getItem('cafe-audit-logs');
      const logs = data ? JSON.parse(data) : [];
      logs.push({
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        user: 'Kasir (PIN)',
        action,
        details
      });
      if (logs.length > 500) logs.shift();
      localStorage.setItem('cafe-audit-logs', JSON.stringify(logs));
    } catch (e) {
      console.error('Audit log failed', e);
    }
  };

  const loadOrders = (isPolling = false) => {
    const data = localStorage.getItem('cafe-order-storage');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed?.state?.settings && !settings) {
          // Sync if local state is empty (initial load)
          updateSettings(parsed.state.settings);
        }
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

  const toggleCafeStatus = () => {
    const newState = !isCafeOpen;
    updateSettings({ isOpen: newState });
    
    addAuditLog('TOGGLE_STORE_STATUS', { status: newState ? 'OPEN' : 'CLOSED' });

    // Broadcast to customer views
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.postMessage({ type: 'STATUS_UPDATE', __secureToken: 'bsjk-secure-v1' });
    setTimeout(() => channel.close(), 100);
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
      if (e.data?.__secureToken !== 'bsjk-secure-v1') return; // Verify origin
      if (e.data?.type === 'NEW_ORDER' || e.data?.type === 'STATUS_UPDATE') {
        loadOrders(false);
      }
    };

    // Cron job for auto-timeout and cleanup
    const cronInterval = setInterval(() => {
      const data = localStorage.getItem('cafe-order-storage');
      if (data) {
        try {
          const parsed = JSON.parse(data);
          let updated = false;
          const now = Date.now();
          if (parsed?.state?.orderHistory) {
            parsed.state.orderHistory = parsed.state.orderHistory.filter((o: Order) => {
              // Cleanup: remove orders older than 24 hours
              if (now - new Date(o.createdAt).getTime() > 24 * 60 * 60 * 1000) {
                updated = true;
                return false; // remove
              }
              // Auto-timeout: cancel pending orders older than 15 mins
              if (o.status === 'pending' && now - new Date(o.createdAt).getTime() > 15 * 60 * 1000) {
                o.status = 'cancelled';
                updated = true;
              }
              return true;
            });
            if (updated) {
              localStorage.setItem('cafe-order-storage', JSON.stringify(parsed));
              loadOrders(true);
            }
          }
        } catch (e) {
          console.error('Cron job error', e);
        }
      }
    }, 60000); // Check every minute

    return () => {
      window.removeEventListener('storage', handleStorage);
      channel.close();
      clearInterval(cronInterval);
    };
  }, []); // empty deps — setMenu is stable

  const updateOrderStatus = (orderId: string, newStatus: Order['status'], newPaymentStatus?: Order['paymentStatus']) => {
    const data = localStorage.getItem('cafe-order-storage');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed?.state?.orderHistory) {
          const oldOrder = parsed.state.orderHistory.find((o: Order) => o.id === orderId);
          parsed.state.orderHistory = parsed.state.orderHistory.map((o: Order) =>
            o.id === orderId ? { ...o, status: newStatus, paymentStatus: newPaymentStatus || o.paymentStatus } : o
          );
          if (parsed.state.currentOrder?.id === orderId) {
            parsed.state.currentOrder.status = newStatus;
            if (newPaymentStatus) parsed.state.currentOrder.paymentStatus = newPaymentStatus;
          }
          localStorage.setItem('cafe-order-storage', JSON.stringify(parsed));
          setOrders(parsed.state.orderHistory);

          addAuditLog('UPDATE_ORDER', { 
            orderId, 
            oldStatus: oldOrder?.status, 
            newStatus, 
            paymentStatus: newPaymentStatus || oldOrder?.paymentStatus 
          });

          // Broadcast status change instantly to customer app
          const channel = new BroadcastChannel(CHANNEL_NAME);
          channel.postMessage({ type: 'STATUS_UPDATE', orderId, status: newStatus, paymentStatus: newPaymentStatus, __secureToken: 'bsjk-secure-v1' });
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
              if (e.target.value === '1234') {
                setIsAuthenticated(true);
                setRole('cashier');
              } else if (e.target.value === '4321') {
                setIsAuthenticated(true);
                setRole('owner');
              }
            }}
            className="w-full text-center text-3xl tracking-[0.5em] font-mono border-b-2 border-stone-200 focus:border-stone-800 outline-none py-2 mb-8"
            placeholder="****"
            maxLength={4}
            autoFocus
          />
          <p className="text-xs text-stone-400">Kasir: 1234 | Owner: 4321</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-[var(--color-surface)] flex justify-center font-body relative">
      <div className="w-full max-w-[480px] h-[100dvh] bg-[var(--color-surface)] relative flex flex-col shadow-xl">
        
        {/* Notification Toast */}
        {notification && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-in slide-in-from-top-4 fade-in">
            <BellRing className="w-4 h-4" />
            <span className="text-sm font-bold">{notification}</span>
          </div>
        )}

        {/* Header */}
        {role === 'owner' ? null : (
          /* ── Cashier: Operational header ── */
          <header className="shrink-0 px-6 py-5 bg-white border-b border-stone-100 flex items-center justify-between sticky top-0 z-20 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-100">
                <Coffee className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                 <h1 className="font-display font-semibold text-xl text-stone-900 leading-tight">Cashier Dashboard</h1>
                 <div className="flex items-center gap-2 mt-0.5">
                   <button
                     onClick={toggleCafeStatus}
                     className={`relative inline-flex h-6 w-12 shrink-0 items-center rounded-full transition-colors ${
                       isCafeOpen ? 'bg-emerald-500' : 'bg-stone-300'
                     }`}
                   >
                     <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow-sm transition-transform ${
                       isCafeOpen ? 'translate-x-6' : 'translate-x-1.5'
                     }`} />
                   </button>
                   <span className={`text-xs font-black uppercase tracking-widest ${
                     isCafeOpen ? 'text-[var(--color-primary)]' : 'text-stone-400'
                   }`}>
                     {isCafeOpen ? 'BUKA' : 'TUTUP'}
                   </span>
                 </div>
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
        )}

        {/* Summary Widget — Cashier only */}
        {role !== 'owner' && (
          <div className="shrink-0 bg-white px-6 py-4 flex gap-3 border-b border-stone-100 overflow-x-auto no-scrollbar">
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
            <div className="flex-none min-w-[140px] bg-[var(--color-primary)]/5 rounded-xl p-3 border border-[var(--color-primary)]/10 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-[var(--color-primary)]">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <p className="text-[10px] uppercase font-bold text-[var(--color-primary)]">Profit (45% Est)</p>
              </div>
              <p className="text-sm font-bold text-stone-800">{formatPrice(totalProfit)}</p>
            </div>
          </div>
        )}

        {/* Tabs — Cashier only */}
        {role !== 'owner' && (
          <div className="shrink-0 bg-white px-4 py-3 border-b border-stone-100 flex gap-2 overflow-x-auto no-scrollbar shadow-sm z-10">
            {(['pending', 'preparing', 'completed'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-[var(--color-primary)] text-white shadow-md' 
                    : 'bg-stone-50 text-stone-500 hover:bg-stone-100 border border-stone-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Tabs — Owner only */}
        {role === 'owner' && (
          <div className="shrink-0 bg-white px-4 py-3 border-b border-stone-100 flex gap-2 shadow-sm z-10">
            {(['reports', 'stock'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-[var(--color-primary)] text-white shadow-md' 
                    : 'bg-stone-50 text-stone-500 hover:bg-stone-100 border border-stone-100'
                }`}
              >
                {tab === 'reports' ? 'Cockpit' : 'Inventory'}
              </button>
            ))}
          </div>
        )}
        
        {/* Main Content */}
        {activeTab === 'reports' ? (
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            <ReportView 
              orders={orders} 
              isCafeOpen={isCafeOpen} 
              onToggleStatus={toggleCafeStatus} 
              onNavigateToStock={() => setActiveTab('stock')} 
            />
          </main>
        ) : activeTab === 'stock' ? (
          <main className="flex-1 overflow-y-auto custom-scrollbar bg-stone-50/50">
            <StockManagement />
          </main>
        ) : (
          <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar bg-stone-50/50">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-32 text-stone-400">
                 <p className="font-label uppercase tracking-widest text-xs">Belum ada pesanan</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                 {filteredOrders.map((order) => (
                    <OrderCard key={order.id} order={order} onUpdateStatus={updateOrderStatus} role={role} />
                 ))}
              </div>
            )}
          </main>
        )}
      </div>
    </div>
  );
}

