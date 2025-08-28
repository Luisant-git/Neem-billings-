# Neem Oil Billing System

A complete billing system designed specifically for Neem oil business operations.

## Features

### 🏠 Dashboard
- Quick summary cards showing Total Stock, Today's Purchases, Today's Sales, and Pending Returns
- Quick action buttons for common operations
- Clean and intuitive interface

### 📋 Masters
- **Item Master**: Manage items with HSN codes, categories, suppliers, tax rates, and pricing
- **Supplier Master**: Maintain supplier information with contact details and payment terms
- **Customer Master**: Customer database with credit limits and GST details

### 💼 Transactions
- **Open Stock**: Initial stock entry with purchase and sale rates
- **Purchases**: Complete purchase entry with supplier details and item grids
- **Purchase Returns**: Handle purchase returns with dual grid system
- **Sales**: Sales entry with customer information and automatic calculations
- **Sales Returns**: Process sales returns efficiently

### 📊 Reports
- **Stock Report**: Item-wise stock analysis with filters
- **Sales Report**: Comprehensive sales reporting with summaries
- **Purchase Report**: Purchase analysis with supplier-wise breakdowns
- **Tax Report**: GST-wise tax reporting for compliance

## Technical Stack
- React 18 with TypeScript
- React Bootstrap for UI components
- React Router for navigation
- Lucide React for icons
- Responsive design

## Key Features
- Auto-calculation of totals and taxes
- Editable grids for item entry
- Search and filter functionality
- Export capabilities for reports
- Print functionality for invoices
- Mobile-responsive design

## Navigation Structure
```
Dashboard
├── Masters
│   ├── Item Master
│   ├── Supplier Master
│   └── Customer Master
├── Transactions
│   ├── Open Stock
│   ├── Purchases
│   ├── Purchase Returns
│   ├── Sales
│   └── Sales Returns
└── Reports
    ├── Stock Report
    ├── Sales Report
    ├── Purchase Report
    └── Tax Report
```

## Getting Started
1. Navigate to the dashboard to see the overview
2. Set up masters (Items, Suppliers, Customers) first
3. Enter opening stock for existing inventory
4. Start recording transactions (Purchases and Sales)
5. Generate reports for analysis

This system is specifically designed for Neem oil businesses with features tailored for their unique requirements including proper categorization, unit management, and tax handling.