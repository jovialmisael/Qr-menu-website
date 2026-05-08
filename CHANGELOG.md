# 🪵 Changelog: Bersejuk QR Menu

All notable changes to the Bersejuk QR Menu project will be documented here.

## [Unreleased] - 2026-05-07

### ✨ Added
- **Staff & Owner Dashboard (`/cashier`)**:
  - Implemented a dual-purpose dashboard for operational staff and business owners.
  - Added PIN-based authentication (`1234` for Cashier, `4321` for Owner).
  - Integrated `ReportView` with real-time analytics for the Owner role.
- **Reporting System**:
  - Added `useSalesReport` hook for calculating revenue, transactions, and average order value.
  - Added `useStockReport` hook for identifying inventory risks and out-of-stock items.
  - Implemented `ReportExporter` utility using `jspdf` and `jspdf-autotable` for PDF/CSV exports.
- **Real-time Order Sync**:
  - Leveraged `BroadcastChannel` (`bersejuk-order-sync`) to sync order status between customer devices and the cashier dashboard.
  - Added global "Cafe Open/Closed" status management that reflects instantly on customer views.

### 📱 Optimized
- **Mobile-First Cashier UI**:
  - Refactored tab navigation to be full-width and touch-friendly.
  - Enlarged "Status" controls for easier thumb-interaction on mobile devices.
  - Improved `OrderCard` layout for density and clarity on smaller screens.
- **Owner Focus**:
  - Restricted Owner view to analytics-only to reduce operational noise.

### 🛠 Fixed
- **TypeScript Runtime Errors**:
  - Resolved potential crashes in `CheckoutView.tsx` by adding null-checks for `cartItem.options`.
  - Fixed pricing calculation logic for manual brew and milk-based items where options were optional.
- **Initialization Bugs**:
  - Fixed an issue where the `activeTab` didn't default to "reports" for newly logged-in owners.
  - Cleaned up unused imports and dead code in `OrderCard.tsx`.

---
*Last updated: 2026-05-07*
