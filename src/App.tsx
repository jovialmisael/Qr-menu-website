import { useEffect, useState, useRef } from 'react';
import { useMenuStore } from './store/menu.store';
import { MOCK_MENU, MOCK_CATEGORIES } from './mockData';
import { useCartStore } from './store/cart.store';
import { useOrderStore } from './store/order.store';
import { AnimatePresence, motion } from 'framer-motion';
import { Store } from 'lucide-react';

const ORDER_CHANNEL = 'bersejuk-order-sync';

import CartSheet from './components/CartSheet';
import CategoryList from './components/layout/CategoryList';
import RecommendedHighlights from './components/layout/RecommendedHighlights';
import ProductDetailView from './components/ProductDetailView';
import CheckoutView from './components/CheckoutView';
import OrderTrackingView from './components/OrderTrackingView';
import AdminDashboardView from './components/views/AdminDashboardView';

import Header from './components/layout/Header';
import MenuGrid from './components/layout/MenuGrid';
import Footer from './components/layout/Footer';
import FloatingCart from './components/cart/FloatingCart';
import BottomNav from './components/layout/BottomNav';
import RoastGalleryView from './components/views/RoastGalleryView';
import OrderHistoryView from './components/views/OrderHistoryView';
import SupportView from './components/views/SupportView';
import ProfileView from './components/views/ProfileView';

import { MenuItem } from './types/menu';
import { useMenuFilter } from './hooks/useMenuFilter';

import FeaturedHero from './components/layout/FeaturedHero';

type ViewState = 'menu' | 'roasts' | 'history' | 'help' | 'profile' | 'checkout' | 'tracking' | 'admin';

function App() {
  const { setMenu, items, categories, isLoading } = useMenuStore();
  const { addItem } = useCartStore();
  // Order state is accessed directly via useOrderStore.getState() in the event listener
  const [tableId, setTableId] = useState<string | null>(null);

  // App Navigation
  const [currentView, setCurrentView] = useState<ViewState>('menu');
  const [isCafeOpen, setIsCafeOpen] = useState(true);

  // Filtering & Search Hook
  const {
    selectedCategoryId,
    setSelectedCategoryId,
    filteredItems
  } = useMenuFilter();

  // Modals/Sheets
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const mainRef = useRef<HTMLElement>(null);

  // Auto scroll to top when changing views or categories
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [currentView, selectedCategoryId]);

  // ── Real-time sync: listen for cashier status updates via BroadcastChannel ──
  useEffect(() => {
    const checkCafeStatus = () => {
      const data = localStorage.getItem('cafe-order-storage');
      if (data) {
        try {
          const parsed = JSON.parse(data);
          if (parsed?.state?.settings) {
            setIsCafeOpen(parsed.state.settings.isOpen ?? true);
          }
        } catch (e) {}
      }
    };
    checkCafeStatus();

    const channel = new BroadcastChannel(ORDER_CHANNEL);
    channel.onmessage = (e) => {
      if (e.data?.__secureToken !== 'bsjk-secure-v1') return; // Security Check
      if (e.data?.type === 'STATUS_UPDATE') {
        checkCafeStatus();
        const state = useOrderStore.getState();
        if (state.currentOrder && state.currentOrder.id === e.data.orderId && e.data.status) {
          state.updateStatus(e.data.status);
        }
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cafe-order-storage') checkCafeStatus();
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      channel.close();
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  useEffect(() => {
    // ── localStorage migration: remove stale cart data from order key ──
    // Previously cart.store used 'cafe-order-storage', now it uses 'cafe-cart-storage'.
    // If the old key has cart items but no valid orderHistory, clean it up.
    try {
      const oldRaw = localStorage.getItem('cafe-order-storage');
      if (oldRaw) {
        const oldParsed = JSON.parse(oldRaw);
        // If this looks like a cart store (has 'items' key), it's the old cart data — remove it
        if (oldParsed?.state?.items && !oldParsed?.state?.orderHistory) {
          localStorage.removeItem('cafe-order-storage');
        }
      }
    } catch (_) { /* silent */ }

    const params = new URLSearchParams(window.location.search);
    const tid = params.get('tableId') || 'T-42';
    setTableId(tid);

    const timer = setTimeout(() => {
      setMenu(MOCK_MENU, MOCK_CATEGORIES);
    }, 1200);

    return () => clearTimeout(timer);
  }, [setMenu]);

  const handleOpenDetail = (product: MenuItem) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleAddToCart = (product: MenuItem, selections: Record<string, string[]>, quantity: number, options?: any, sku_code?: string) => {
    const formattedSelections = Object.entries(selections).map(([groupId, choiceIds]) => ({
      groupId,
      choiceIds
    }));
    addItem(product, formattedSelections, quantity, options, sku_code);
    setIsDetailOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] bg-stone-200/50 flex justify-center font-body">
        <div className="w-full max-w-[480px] h-[100dvh] bg-[var(--color-surface)] relative overflow-hidden flex flex-col shadow-2xl p-6">
          <div className="animate-pulse space-y-8 mt-10">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center mb-10">
              <div className="h-8 bg-stone-200 rounded w-1/3"></div>
              <div className="h-10 bg-stone-200 rounded-full w-24"></div>
            </div>
            {/* Hero Skeleton */}
            <div className="w-full h-72 bg-stone-200 rounded-3xl mb-8"></div>
            {/* Categories Skeleton */}
            <div className="flex gap-4 mb-8">
              <div className="h-10 bg-stone-200 rounded-full w-20"></div>
              <div className="h-10 bg-stone-200 rounded-full w-24"></div>
              <div className="h-10 bg-stone-200 rounded-full w-20"></div>
            </div>
            {/* Items Skeleton */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-stone-200 rounded-2xl flex-shrink-0"></div>
                <div className="flex-1 space-y-2 py-2">
                  <div className="h-4 bg-stone-200 rounded w-3/4"></div>
                  <div className="h-3 bg-stone-200 rounded w-1/2"></div>
                  <div className="h-4 bg-stone-200 rounded w-1/4 mt-4"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-stone-200 rounded-2xl flex-shrink-0"></div>
                <div className="flex-1 space-y-2 py-2">
                  <div className="h-4 bg-stone-200 rounded w-2/3"></div>
                  <div className="h-3 bg-stone-200 rounded w-1/2"></div>
                  <div className="h-4 bg-stone-200 rounded w-1/4 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // "category" is treated as a separate page — not part of the main shell scroll
  const isCategoryPage = currentView === 'menu' && selectedCategoryId !== null;
  const isMainShellView = ['menu', 'roasts', 'history', 'help', 'profile'].includes(currentView) && !isCategoryPage;
  const showBottomNav = ['menu', 'roasts', 'history', 'help', 'profile'].includes(currentView);
  const showFloatingCart = currentView !== 'checkout' && currentView !== 'tracking' && currentView !== 'admin';

  return (
    <div className="min-h-[100dvh] bg-stone-200/50 flex justify-center font-body">
      <div className="w-full max-w-[480px] h-[100dvh] bg-[var(--color-surface)] relative overflow-hidden flex flex-col shadow-2xl">

        {/* Closed Overlay */}
        {!isCafeOpen && currentView !== 'admin' && (
          <div className="absolute inset-0 z-50 bg-stone-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
             <div className="w-20 h-20 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Store className="w-10 h-10 text-stone-400" />
             </div>
             <h2 className="text-2xl font-display font-bold text-white mb-3">Kafe Sedang Tutup</h2>
             <p className="text-stone-400 mb-8 max-w-xs">Maaf, kami sedang tidak menerima pesanan saat ini. Silakan kembali lagi nanti pada jam operasional kami.</p>
             <button onClick={() => setCurrentView('admin')} className="text-xs text-stone-600 uppercase tracking-widest font-bold">Admin Login</button>
          </div>
        )}

        {/* ─── MAIN SHELL (menu home, roasts, history, help, profile) ─── */}
        {isMainShellView && (
          <div className="flex-1 overflow-hidden">
            <main ref={mainRef} className="pb-24 overflow-y-auto h-full custom-scrollbar relative bg-[var(--color-surface)]">
              <Header tableId={tableId} />

              {currentView === 'menu' && (
                <>
                  <FeaturedHero
                    item={items[0]}
                    onExplore={handleOpenDetail}
                  />
                  <RecommendedHighlights
                    items={items}
                    onSelectItem={handleOpenDetail}
                  />
                  <CategoryList
                    categories={categories}
                    allItems={items}
                    onSelectCategory={setSelectedCategoryId}
                  />
                </>
              )}

              {currentView === 'roasts' && (
                <RoastGalleryView items={items} onSelectItem={handleOpenDetail} />
              )}

              {currentView === 'history' && (
                <OrderHistoryView
                  onBackToMenu={() => setCurrentView('menu')}
                  onTrackOrder={() => setCurrentView('tracking')}
                />
              )}

              {currentView === 'help' && <SupportView />}

              {currentView === 'profile' && (
                <ProfileView
                  onViewHistory={() => setCurrentView('history')}
                  onViewAdmin={() => setCurrentView('admin')}
                />
              )}

              <Footer />
            </main>
          </div>
        )}

        {/* ─── CATEGORY PAGE (separate scroll container, slides in from right) ─── */}
        <AnimatePresence>
          {isCategoryPage && (
            <motion.div
              key={selectedCategoryId}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="absolute inset-0 z-20 flex flex-col bg-[var(--color-surface)]"
            >
              <div className="flex-1 overflow-y-auto pb-24 custom-scrollbar">
                <MenuGrid
                  items={filteredItems}
                  categories={categories}
                  selectedCategoryId={selectedCategoryId}
                  isLoading={isLoading}
                  onSelectItem={handleOpenDetail}
                  onBack={() => setSelectedCategoryId(null)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── CHECKOUT ─── */}
        {currentView === 'checkout' && (
          <div className="h-full overflow-y-auto">
            <CheckoutView
              onBack={() => setCurrentView('menu')}
              onSuccess={() => setCurrentView('tracking')}
            />
          </div>
        )}

        {/* ─── ORDER TRACKING ─── */}
        {currentView === 'tracking' && (
          <div className="h-full overflow-y-auto">
            <OrderTrackingView
              onBackToMenu={() => setCurrentView('menu')}
            />
          </div>
        )}

        {/* ─── ADMIN (inside main shell but pushed via profile nav) ─── */}
        {currentView === 'admin' && (
          <div className="flex-1 overflow-y-auto">
            <AdminDashboardView onBack={() => setCurrentView('profile')} />
          </div>
        )}

        {/* ─── FLOATING CART (sits above BottomNav) ─── */}
        {showFloatingCart && (
          <FloatingCart
            onOpenCart={() => setIsCartOpen(true)}
            onCheckout={() => setCurrentView('checkout')}
          />
        )}

        {/* ─── BOTTOM NAV ─── */}
        {showBottomNav && (
          <BottomNav
            activeView={currentView}
            onViewChange={(view) => {
              setSelectedCategoryId(null);
              setCurrentView(view);
            }}
          />
        )}

        <CartSheet
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => {
            setIsCartOpen(false);
            setCurrentView('checkout');
          }}
        />

        <AnimatePresence>
          {isDetailOpen && selectedProduct && (
            <ProductDetailView
              key={selectedProduct.id}
              item={selectedProduct}
              onClose={() => setIsDetailOpen(false)}
              onAddToCart={handleAddToCart}
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default App;
