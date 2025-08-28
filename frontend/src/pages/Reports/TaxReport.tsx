import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Search, Download, Filter } from 'lucide-react';

const TaxReport = () => {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    taxRate: '',
    transactionType: ''
  });

  const taxData = [
    {
      id: 1,
      taxRate: '5%',
      taxableAmount: '₹10,000',
      taxAmount: '₹500',
      transactions: 5,
      type: 'Sales'
    },
    {
      id: 2,
      taxRate: '12%',
      taxableAmount: '₹8,000',
      taxAmount: '₹960',
      transactions: 3,
      type: 'Sales'
    },
    {
      id: 3,
      taxRate: '5%',
      taxableAmount: '₹15,000',
      taxAmount: '₹750',
      transactions: 4,
      type: 'Purchase'
    }
  ];

  const transactionDetails = [
    {
      id: 1,
      date: '2024-01-15',
      type: 'Sales',
      invoiceNumber: 'INV001',
      party: 'XYZ Retail Store',
      taxableAmount: '₹2,000',
      taxRate: '5%',
      taxAmount: '₹100',
      totalAmount: '₹2,100'
    },
    {
      id: 2,
      date: '2024-01-16',
      type: 'Purchase',
      invoiceNumber: 'PE001',
      party: 'ABC Suppliers',
      taxableAmount: '₹5,000',
      taxRate: '5%',
      taxAmount: '₹250',
      totalAmount: '₹5,250'
    }
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const exportReport = () => {
    console.log('Exporting tax report...');
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Tax Report (GST)</h1>
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
                      <Form.Label>Tax Rate</Form.Label>
                      <Form.Select
                        value={filters.taxRate}
                        onChange={(e) => handleFilterChange('taxRate', e.target.value)}
                      >
                        <option value="">All Tax Rates</option>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Transaction Type</Form.Label>
                      <Form.Select
                        value={filters.transactionType}
                        onChange={(e) => handleFilterChange('transactionType', e.target.value)}
                      >
                        <option value="">All Types</option>
                        <option value="Sales">Sales</option>
                        <option value="Purchase">Purchase</option>
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
                <Card.Title>Tax Summary by Rate</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Tax Rate</th>
                        <th>Taxable Amount</th>
                        <th>Tax Amount</th>
                        <th>Transactions</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {taxData.map((tax) => (
                        <tr key={tax.id}>
                          <td className="fw-bold">{tax.taxRate}</td>
                          <td>{tax.taxableAmount}</td>
                          <td className="fw-bold text-primary">{tax.taxAmount}</td>
                          <td>{tax.transactions}</td>
                          <td>
                            <span className={`badge bg-${tax.type === 'Sales' ? 'success' : 'info'}-transparent`}>
                              {tax.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="table-info">
                        <td className="fw-bold">Total</td>
                        <td className="fw-bold">₹33,000</td>
                        <td className="fw-bold">₹2,210</td>
                        <td className="fw-bold">12</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Transaction Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Invoice/Entry No.</th>
                        <th>Party</th>
                        <th>Taxable Amount</th>
                        <th>Tax Rate</th>
                        <th>Tax Amount</th>
                        <th>Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionDetails.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.date}</td>
                          <td>
                            <span className={`badge bg-${transaction.type === 'Sales' ? 'success' : 'info'}-transparent`}>
                              {transaction.type}
                            </span>
                          </td>
                          <td>{transaction.invoiceNumber}</td>
                          <td>{transaction.party}</td>
                          <td>{transaction.taxableAmount}</td>
                          <td className="fw-bold">{transaction.taxRate}</td>
                          <td className="fw-bold text-primary">{transaction.taxAmount}</td>
                          <td className="fw-bold">{transaction.totalAmount}</td>
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

export default TaxReport;