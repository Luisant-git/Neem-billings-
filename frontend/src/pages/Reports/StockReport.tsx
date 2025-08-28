import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Search, Download, Filter } from 'lucide-react';

const StockReport = () => {
  const [filters, setFilters] = useState({
    itemName: '',
    category: '',
    dateFrom: '',
    dateTo: ''
  });

  const stockData = [
    {
      id: 1,
      itemCode: 'NO001',
      itemName: 'Pure Neem Oil',
      category: 'Neem Oil',
      openingStock: 100,
      purchases: 50,
      sales: 30,
      returns: 2,
      currentStock: 122,
      unit: 'Litre',
      value: '₹18,300'
    },
    {
      id: 2,
      itemCode: 'RM001',
      itemName: 'Raw Neem Seeds',
      category: 'Raw Material',
      openingStock: 500,
      purchases: 200,
      sales: 150,
      returns: 5,
      currentStock: 555,
      unit: 'Kg',
      value: '₹27,750'
    }
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const exportReport = () => {
    console.log('Exporting stock report...');
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Stock Report</h1>
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
                      <Form.Label>Item Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Search by item name"
                        value={filters.itemName}
                        onChange={(e) => handleFilterChange('itemName', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                      >
                        <option value="">All Categories</option>
                        <option value="Neem Oil">Neem Oil</option>
                        <option value="Raw Material">Raw Material</option>
                        <option value="Packing">Packing</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
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
                <Card.Title>Item-wise Stock Report</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Opening Stock</th>
                        <th>Purchases</th>
                        <th>Sales</th>
                        <th>Returns</th>
                        <th>Current Stock</th>
                        <th>Unit</th>
                        <th>Stock Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.itemCode}</td>
                          <td>{item.itemName}</td>
                          <td>{item.category}</td>
                          <td>{item.openingStock}</td>
                          <td className="text-success">+{item.purchases}</td>
                          <td className="text-danger">-{item.sales}</td>
                          <td className="text-warning">+{item.returns}</td>
                          <td className="fw-bold">{item.currentStock}</td>
                          <td>{item.unit}</td>
                          <td className="fw-bold">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="table-info">
                        <td colSpan={9} className="text-end fw-bold">Total Stock Value:</td>
                        <td className="fw-bold">₹46,050</td>
                      </tr>
                    </tfoot>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  );
};

export default StockReport;