import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Search, Download, Filter } from 'lucide-react';

const SalesReport = () => {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    customer: '',
    paymentType: ''
  });

  const salesData = [
    {
      id: 1,
      date: '2024-01-15',
      invoiceNumber: 'INV001',
      customer: 'XYZ Retail Store',
      items: 'Pure Neem Oil (5 Litre)',
      amount: '₹1,000',
      paymentType: 'Cash',
      status: 'Completed'
    },
    {
      id: 2,
      date: '2024-01-16',
      invoiceNumber: 'INV002',
      customer: 'ABC Distributors',
      items: 'Raw Neem Seeds (10 Kg)',
      amount: '₹2,500',
      paymentType: 'Credit',
      status: 'Pending'
    }
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const exportReport = () => {
    console.log('Exporting sales report...');
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Sales Report</h1>
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
                      <Form.Label>Customer</Form.Label>
                      <Form.Select
                        value={filters.customer}
                        onChange={(e) => handleFilterChange('customer', e.target.value)}
                      >
                        <option value="">All Customers</option>
                        <option value="XYZ Retail Store">XYZ Retail Store</option>
                        <option value="ABC Distributors">ABC Distributors</option>
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
                <Card.Title>Sales Summary</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-primary">₹3,500</h4>
                      <p className="mb-0">Total Sales</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-success">₹1,000</h4>
                      <p className="mb-0">Cash Sales</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-warning">₹2,500</h4>
                      <p className="mb-0">Credit Sales</p>
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
                <Card.Title>Sales Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Invoice Number</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Amount</th>
                        <th>Payment Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((sale) => (
                        <tr key={sale.id}>
                          <td>{sale.date}</td>
                          <td>{sale.invoiceNumber}</td>
                          <td>{sale.customer}</td>
                          <td>{sale.items}</td>
                          <td className="fw-bold">{sale.amount}</td>
                          <td>
                            <span className={`badge bg-${sale.paymentType === 'Cash' ? 'success' : 'warning'}-transparent`}>
                              {sale.paymentType}
                            </span>
                          </td>
                          <td>
                            <span className={`badge bg-${sale.status === 'Completed' ? 'success' : 'warning'}-transparent`}>
                              {sale.status}
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

export default SalesReport;