import { Fragment, useState } from "react";
import { Card, Col, Row, Table, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const BalanceView = () => {
  const [activeTab, setActiveTab] = useState('supplier');

  const supplierLedger = [
    {
      id: 1,
      supplierName: 'ABC Neem Suppliers',
      totalPurchases: '₹50,000',
      totalPayments: '₹35,000',
      balancePayable: '₹15,000'
    },
    {
      id: 2,
      supplierName: 'Natural Products Ltd',
      totalPurchases: '₹25,000',
      totalPayments: '₹25,000',
      balancePayable: '₹0'
    }
  ];

  const customerLedger = [
    {
      id: 1,
      customerName: 'XYZ Retail Store',
      totalSales: '₹30,000',
      totalReceipts: '₹20,000',
      balanceReceivable: '₹10,000'
    },
    {
      id: 2,
      customerName: 'ABC Distributors',
      totalSales: '₹45,000',
      totalReceipts: '₹40,000',
      balanceReceivable: '₹5,000'
    }
  ];

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-18 mb-0">Balance View / Ledger</h1>
        </div>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Nav variant="tabs" className="nav-tabs-header">
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'supplier'} 
                    onClick={() => setActiveTab('supplier')}
                    style={{ cursor: 'pointer' }}
                  >
                    Supplier Ledger
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'customer'} 
                    onClick={() => setActiveTab('customer')}
                    style={{ cursor: 'pointer' }}
                  >
                    Customer Ledger
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {activeTab === 'supplier' && (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Supplier Name</th>
                        <th>Total Purchases</th>
                        <th>Total Payments</th>
                        <th>Balance Payable</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplierLedger.map((supplier) => (
                        <tr key={supplier.id}>
                          <td>{supplier.supplierName}</td>
                          <td>{supplier.totalPurchases}</td>
                          <td className="text-success">{supplier.totalPayments}</td>
                          <td className={`fw-bold ${supplier.balancePayable === '₹0' ? 'text-success' : 'text-danger'}`}>
                            {supplier.balancePayable}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="table-info">
                        <td className="fw-bold">Total</td>
                        <td className="fw-bold">₹75,000</td>
                        <td className="fw-bold">₹60,000</td>
                        <td className="fw-bold text-danger">₹15,000</td>
                      </tr>
                    </tfoot>
                  </Table>
                </div>
              )}

              {activeTab === 'customer' && (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Customer Name</th>
                        <th>Total Sales</th>
                        <th>Total Receipts</th>
                        <th>Balance Receivable</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerLedger.map((customer) => (
                        <tr key={customer.id}>
                          <td>{customer.customerName}</td>
                          <td>{customer.totalSales}</td>
                          <td className="text-success">{customer.totalReceipts}</td>
                          <td className={`fw-bold ${customer.balanceReceivable === '₹0' ? 'text-success' : 'text-primary'}`}>
                            {customer.balanceReceivable}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="table-info">
                        <td className="fw-bold">Total</td>
                        <td className="fw-bold">₹75,000</td>
                        <td className="fw-bold">₹60,000</td>
                        <td className="fw-bold text-primary">₹15,000</td>
                      </tr>
                    </tfoot>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default BalanceView;