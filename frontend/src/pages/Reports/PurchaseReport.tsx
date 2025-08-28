import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Search, Download, Filter } from 'lucide-react';

const PurchaseReport = () => {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    supplier: '',
    paymentType: ''
  });

  const purchaseData = [
    {
      id: 1,
      date: '2024-01-10',
      entryNumber: 'PE001',
      supplier: 'ABC Neem Suppliers',
      invoiceNumber: 'SUP001',
      items: 'Pure Neem Oil (20 Litre)',
      amount: '₹3,000',
      paymentType: 'Credit',
      status: 'Received'
    },
    {
      id: 2,
      date: '2024-01-12',
      entryNumber: 'PE002',
      supplier: 'Natural Products Ltd',
      invoiceNumber: 'SUP002',
      items: 'Raw Neem Seeds (50 Kg)',
      amount: '₹2,500',
      paymentType: 'Cash',
      status: 'Received'
    }
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const exportReport = () => {
    console.log('Exporting purchase report...');
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Purchase Report</h1>
          <Button variant="success" onClick={exportReport}>
            <Download size={16} className="me-1" />
            Export Report
          </Button>
        </div>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>
                  <Filter size={18} className="me-2" />
                  Filters
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date From</Form.Label>
                      <Form.Control
                        type="date"
                        value={filters.dateFrom}
                        onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date To</Form.Label>
                      <Form.Control
                        type="date"
                        value={filters.dateTo}
                        onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Supplier</Form.Label>
                      <Form.Select
                        value={filters.supplier}
                        onChange={(e) => handleFilterChange('supplier', e.target.value)}
                      >
                        <option value="">All Suppliers</option>
                        <option value="ABC Neem Suppliers">ABC Neem Suppliers</option>
                        <option value="Natural Products Ltd">Natural Products Ltd</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Payment Type</Form.Label>
                      <Form.Select
                        value={filters.paymentType}
                        onChange={(e) => handleFilterChange('paymentType', e.target.value)}
                      >
                        <option value="">All Types</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit">Credit</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button variant="primary">
                    <Search size={16} className="me-1" />
                    Apply Filters
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Purchase Summary</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-primary">₹5,500</h4>
                      <p className="mb-0">Total Purchases</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-success">₹2,500</h4>
                      <p className="mb-0">Cash Purchases</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-warning">₹3,000</h4>
                      <p className="mb-0">Credit Purchases</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-info">2</h4>
                      <p className="mb-0">Total Transactions</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Purchase Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Entry Number</th>
                        <th>Supplier</th>
                        <th>Invoice Number</th>
                        <th>Items</th>
                        <th>Amount</th>
                        <th>Payment Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchaseData.map((purchase) => (
                        <tr key={purchase.id}>
                          <td>{purchase.date}</td>
                          <td>{purchase.entryNumber}</td>
                          <td>{purchase.supplier}</td>
                          <td>{purchase.invoiceNumber}</td>
                          <td>{purchase.items}</td>
                          <td className="fw-bold">{purchase.amount}</td>
                          <td>
                            <span className={`badge bg-${purchase.paymentType === 'Cash' ? 'success' : 'warning'}-transparent`}>
                              {purchase.paymentType}
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-success-transparent">
                              {purchase.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  );
};

export default PurchaseReport;