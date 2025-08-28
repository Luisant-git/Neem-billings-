import { lazy } from "react";

// Dashboard
const Dashboard = lazy(() => import("../../../pages/Dashboard/Dashboard"));

// Masters
const ItemMaster = lazy(() => import("../../../pages/Masters/ItemMaster"));
const SupplierMaster = lazy(() => import("../../../pages/Masters/SupplierMaster"));
const CustomerMaster = lazy(() => import("../../../pages/Masters/CustomerMaster"));

// Transactions
const OpenStock = lazy(() => import("../../../pages/Transactions/OpenStock"));
const Purchases = lazy(() => import("../../../pages/Transactions/Purchases"));
const PurchaseReturns = lazy(() => import("../../../pages/Transactions/PurchaseReturns"));
const Sales = lazy(() => import("../../../pages/Transactions/Sales"));
const SalesReturns = lazy(() => import("../../../pages/Transactions/SalesReturns"));

// Reports
const StockReport = lazy(() => import("../../../pages/Reports/StockReport"));
const SalesReport = lazy(() => import("../../../pages/Reports/SalesReport"));
const PurchaseReport = lazy(() => import("../../../pages/Reports/PurchaseReport"));
const TaxReport = lazy(() => import("../../../pages/Reports/TaxReport"));

export const Routedata = [
  // Dashboard
  { id: 1, path: `dashboard`, element: <Dashboard /> },
  { id: 2, path: ``, element: <Dashboard /> },
  { id: 15, path: `dashboard/sales`, element: <Dashboard /> },

  // Masters
  { id: 3, path: `masters/item-master`, element: <ItemMaster /> },
  { id: 4, path: `masters/supplier-master`, element: <SupplierMaster /> },
  { id: 5, path: `masters/customer-master`, element: <CustomerMaster /> },

  // Transactions
  { id: 6, path: `transactions/open-stock`, element: <OpenStock /> },
  { id: 7, path: `transactions/purchases`, element: <Purchases /> },
  { id: 8, path: `transactions/purchase-returns`, element: <PurchaseReturns /> },
  { id: 9, path: `transactions/sales`, element: <Sales /> },
  { id: 10, path: `transactions/sales-returns`, element: <SalesReturns /> },

  // Reports
  { id: 11, path: `reports/stock-report`, element: <StockReport /> },
  { id: 12, path: `reports/sales-report`, element: <SalesReport /> },
  { id: 13, path: `reports/purchase-report`, element: <PurchaseReport /> },
  { id: 14, path: `reports/tax-report`, element: <TaxReport /> },
];