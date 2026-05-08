# ☕ Bersejuk QR Café Menu

A premium, mobile-first QR code ordering system for a café/bistro. Customers scan a table QR code to browse the menu, customise items, place orders, and track them live — all from the browser, no app install required.

---

## ✨ Features

### Customer-Facing
- **Scanned Table Session** — Table ID is read from the URL query parameter (`?tableId=T-42`), enabling session-aware ordering.
- **Featured Hero Banner** — Highlights a promoted menu item with a full-bleed image and CTA.
- **Category Browser** — A grid of menu categories; tapping a category reveals the filtered menu grid.
- **Menu Grid** — Compact product cards with name, price, tags (`best-seller`, `new`, `popular`), and availability badges.
- **Product Detail Sheet** — Full-screen animated modal with:
  - Multi-size selection (e.g. Short / Tall / Grande)
  - Add-on groups (milk type, syrup, shots, temperature)
  - Sensory profile radar chart
  - Sommelier notes & provenance info
  - Quantity stepper
- **Persistent Cart** — Cart state persisted to `localStorage` via Zustand middleware. Smart merging: adding the same item+options combination increments quantity instead of duplicating.
- **Floating Cart Button** — Sticky FAB showing live item count and subtotal.
- **Cart Sheet** — Bottom-drawer review of cart items with quantity controls and remove option.
- **Checkout** — Two-column order summary ledger summarising items, subtotal, tax (11%), service charge (5%), and grand total. Accepts a name/notes field.
- **Order Tracking** — Horizontal progress tracker showing live order status: `pending → confirmed → preparing → ready → completed`.
- **Confetti Animation** — Plays when an order is successfully placed.
- **Order History** — List of past orders stored in session state.
- **Roast Gallery** — Dedicated view for coffee roast items.
- **Search Overlay** — Full-screen instant search across all menu items.
- **Support / Help** — FAQ and contact info view.
- **User Profile** — Shows session info and provides an entry point to the admin panel.

### Admin Panel (Legacy)
- **Protected under `ProfileView → Admin`** — Accessible through the profile tab for quick menu overrides.
- **Menu Editor** — Toggle item availability, view SKU codes and pricing.
- **Order Ledger** — A read-only record of all simulated orders.

### Staff & Management Dashboard (New)
- **Dedicated Route** — Accessible via `/cashier` with role-based entry.
- **PIN Authentication** — Secure login via numeric PIN:
  - `1234` → **Cashier**: Full order management (preparing, ready, complete).
  - `4321` → **Owner**: Exclusive analytics and reporting view.
- **Live Order Stream** — Real-time synchronization with customer orders via `BroadcastChannel`.
- **Order Processing** — Multi-stage pipeline: `Pending → Preparing → Ready → Completed`.
- **Store Status Control** — Large, touch-friendly toggle to open/close the cafe globally.
- **Advanced Reporting** (Owner Only):
  - **KPI Dashboard** — At-a-glance revenue, transactions, and average order value.
  - **Sales Trends** — Hourly distribution charts using Recharts.
  - **Inventory Insights** — Stock level monitoring and "Out of Stock" risk analysis.
  - **Data Export** — One-tap PDF and CSV generation for daily business reports.

---

## 🏗 Architecture

```
src/
├── App.tsx                  # Root: view-state router, modal/sheet orchestration
├── main.tsx                 # React DOM entry point
├── index.css                # Global design tokens (CSS variables), Tailwind base
├── mockData.ts              # All mock MenuItem + Category data (replaces backend)
│
├── types/
│   └── menu.ts              # Core TypeScript interfaces: MenuItem, CartItem, Order, etc.
│
├── store/                   # Zustand global state (no Redux, no Context)
│   ├── menu.store.ts        # Menu items + categories, isLoading flag
│   ├── cart.store.ts        # Cart CRUD, total calc, persisted to localStorage
│   ├── order.store.ts       # Active order + status simulation
│   ├── stock.store.ts       # Per-item stock level overrides (admin)
│   ├── auth.store.ts        # Admin auth flag
│   └── report.store.ts      # (Mock) Sales and inventory history data
│
├── cashier/                 # Staff & Owner specific UI
│   ├── CashierApp.tsx       # Entry point for /cashier route
│   ├── OrderCard.tsx        # Individual order workflow manager
│   └── ReportView.tsx       # Analytics & Data visualization dashboard
│
├── hooks/
│   ├── useMenuFilter.ts     # Derived state: selectedCategoryId + filtered items
│   ├── useSalesReport.ts    # Analytics: revenue & transaction calculations
│   └── useStockReport.ts    # Analytics: inventory health checks
│
├── utils/
│   ├── ReportExporter.ts    # PDF/CSV generation logic (jspdf)
│   └── formatters.ts        # Currency and date utility functions
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Top bar with table ID badge
│   │   ├── BottomNav.tsx          # 5-tab nav: Menu / Roasts / History / Help / Profile
│   │   ├── CategoryList.tsx       # Category grid (home view)
│   │   ├── CategoryBar.tsx        # Horizontal sticky category pill bar
│   │   ├── CategoryListOverlay.tsx# Full-screen category picker overlay
│   │   ├── FeaturedHero.tsx       # Promoted item hero banner
│   │   ├── HeroSection.tsx        # Alternative hero variant
│   │   ├── MenuGrid.tsx           # Product card grid with back navigation
│   │   ├── ProductCard.tsx        # Individual menu item card
│   │   ├── EmptyState.tsx         # Empty search/category state UI
│   │   ├── Sidebar.tsx            # Drawer sidebar (alternative nav pattern)
│   │   └── Footer.tsx             # App footer with branding
│   │
│   ├── cart/
│   │   └── FloatingCart.tsx       # Sticky FAB cart button
│   │
│   ├── admin/
│   │   ├── MenuEditor.tsx         # Admin: toggle item availability
│   │   └── OrderLedger.tsx        # Admin: order history table
│   │
│   ├── views/
│   │   ├── AdminDashboardView.tsx # Admin hub with tab routing
│   │   ├── OrderHistoryView.tsx   # Customer order history list
│   │   ├── ProfileView.tsx        # User profile + admin entry
│   │   ├── RoastGalleryView.tsx   # Filtered view for coffee roasts
│   │   └── SupportView.tsx        # FAQ / help centre
│   │
│   ├── CartSheet.tsx              # Bottom-sheet cart drawer
│   ├── CheckoutView.tsx           # Order summary + placement form
│   ├── OrderTrackingView.tsx      # Live status tracker with progress bar
│   ├── ProductDetailView.tsx      # Full-screen item detail & add-to-cart
│   ├── SearchOverlay.tsx          # Real-time search modal
│   ├── SkeletonLoader.tsx         # Shimmer placeholder cards
│   ├── Confetti.tsx               # Canvas confetti on order success
│   └── SensoryGraph.tsx           # Radar chart for sensory profiles
```

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) + [Vite 5](https://vitejs.dev) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + CSS custom properties (design tokens) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| State Management | [Zustand 4](https://zustand-demo.pmnd.rs/) (with `persist` middleware) |
| Visualization | [Recharts](https://recharts.org) |
| PDF Export | [jspdf](https://github.com/parallax/jsPDF) + [autotable](https://github.com/simonbengtsson/jspdf-autotable) |
| Icons | [Lucide React](https://lucide.dev) |
| Utilities | `clsx`, `tailwind-merge` |

---

## 🎨 Design System

Design tokens are defined as CSS custom properties in `index.css`:

```css
--color-primary     /* Brand accent (coffee brown) */
--color-surface     /* Page background */
--color-text        /* Body text */
--font-display      /* Primary serif (Noto Serif) */
--font-body         /* UI sans-serif (Manrope) */
--font-label        /* Uppercase tracking label font */
```

The aesthetic is a **"Modern Corporate Menu"** — a clean, professional, native-app inspired interface featuring solid white category sections, light gray backgrounds, and precise structural spacing. It targets a mobile viewport capped at `max-w-[480px]` centered on larger screens.

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Simulate a Table Scan

Append a `tableId` query param to the URL:

```
http://localhost:5173/?tableId=T-07
```

If omitted, it defaults to `T-42`.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` directory.

---

## 📦 State Management Notes

All global state lives in **Zustand stores** — no React Context, no prop drilling beyond one level.

- **`cart.store`** uses Zustand's `persist` middleware → cart survives page refreshes (stored under key `cafe-order-storage` in `localStorage`).
- **`menu.store`** simulates an async load with a 1.2 s `setTimeout` on app mount, hydrating from `mockData.ts`.
- **`order.store`** holds the active order and auto-advances status on a timer to simulate backend webhooks.
- **`stock.store`** allows the admin to override item availability without mutating the menu store.

---

## 🗂 Pricing Logic

Two pricing paths exist in `cart.store.ts → calculateTotal`:

1. **POS Strict** (used when `cartItem.options` and `product.meta` are both set):
   - Price is driven by `meta.sizes[].price` for the selected size label.
   - Extra shots: +Rp 8,000 each beyond the first.
   - Syrups: +Rp 6,000 each.
   - Non-standard milk: +Rp 12,000.

2. **Legacy** (fallback — add-on groups with `priceDelta`):
   - Sums `choice.priceDelta` for each selected choice across all add-on groups.

---

## ⚠️ Known Warnings

| File | Warning | Notes |
|---|---|---|
| `index.css` | `@tailwind` / `@apply` unknown at-rules | IDE CSS linter doesn't understand Tailwind directives. Safe to ignore; Vite + PostCSS handles them correctly. |
| `AdminDashboardView.tsx` | `LayoutGrid` imported but unused | Cleaned up — import removed. |

---

## 📁 Mock Data

`src/mockData.ts` contains the full simulated menu: categories (Espresso, Milk-Based, Manual Brew, Teas, Food, etc.) and items with rich `meta` payloads (barista recipes, sensory profiles, allergens, recommended pairings). Replace this file with a real API call when integrating a backend.

---

*Built with ☕ — Bersejuk QR Menu, 2026.*
