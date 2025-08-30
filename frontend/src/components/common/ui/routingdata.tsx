import { lazy } from "react";

// Dashboard
const Dashboard = lazy(() => import("../../../pages/Dashboard/Dashboard"));

// Masters
const ItemMaster = lazy(() => import("../../../pages/Masters/ItemMaster"));
const SupplierMaster = lazy(() => import("../../../pages/Masters/SupplierMaster"));
const CustomerMaster = lazy(() => import("../../../pages/Masters/CustomerMaster"));
const CategoryMaster = lazy(() => import("../../../pages/Masters/CategoryMaster"));
const OpenStock = lazy(() => import("../../../pages/Transactions/OpenStock"));

// Transactions
const Purchases = lazy(() => import("../../../pages/Transactions/Purchases"));
const PurchaseReturns = lazy(() => import("../../../pages/Transactions/PurchaseReturns"));
const Sales = lazy(() => import("../../../pages/Transactions/Sales"));
const SalesReturns = lazy(() => import("../../../pages/Transactions/SalesReturns"));
const PaymentEntry = lazy(() => import("../../../pages/Transactions/PaymentEntry"));
const ReceiptEntry = lazy(() => import("../../../pages/Transactions/ReceiptEntry"));
const Production = lazy(() => import("../../../pages/Transactions/Production"));

// Reports
const StockReport = lazy(() => import("../../../pages/Reports/StockReport"));
const SalesReport = lazy(() => import("../../../pages/Reports/SalesReport"));
const PurchaseReport = lazy(() => import("../../../pages/Reports/PurchaseReport"));
const TaxReport = lazy(() => import("../../../pages/Reports/TaxReport"));
const BalanceView = lazy(() => import("../../../pages/Reports/BalanceView"));

export const Routedata = [
  // Dashboard
  { id: 1, path: `dashboard`, element: <Dashboard /> },
  { id: 2, path: ``, element: <Dashboard /> },
  { id: 15, path: `dashboard/sales`, element: <Dashboard /> },

  // Masters
  { id: 3, path: `masters/item-master`, element: <ItemMaster /> },
  { id: 4, path: `masters/supplier-master`, element: <SupplierMaster /> },
  { id: 5, path: `masters/customer-master`, element: <CustomerMaster /> },
  { id: 19, path: `masters/category-master`, element: <CategoryMaster /> },
  { id: 20, path: `masters/open-stock`, element: <OpenStock /> },

  // Transactions
  { id: 7, path: `transactions/purchases`, element: <Purchases /> },
  { id: 8, path: `transactions/purchase-returns`, element: <PurchaseReturns /> },
  { id: 9, path: `transactions/sales`, element: <Sales /> },
  { id: 10, path: `transactions/sales-returns`, element: <SalesReturns /> },
  { id: 16, path: `transactions/payment-entry`, element: <PaymentEntry /> },
  { id: 17, path: `transactions/receipt-entry`, element: <ReceiptEntry /> },
  { id: 18, path: `transactions/production`, element: <Production /> },

  // Reports
  { id: 11, path: `reports/stock-report`, element: <StockReport /> },
  { id: 12, path: `reports/sales-report`, element: <SalesReport /> },
  { id: 13, path: `reports/purchase-report`, element: <PurchaseReport /> },
  { id: 14, path: `reports/tax-report`, element: <TaxReport /> },
  { id: 15, path: `reports/balance-view`, element: <BalanceView /> },
];