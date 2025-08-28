import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Plus, Save } from 'lucide-react';

const OpenStock = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
    unit: '',
    purchaseRate: '',
    saleRate: '',
    mrp: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [stockEntries, setStockEntries] = useState([
    {
      id: 1,
      itemName: 'Pure Neem Oil',
      quantity: '100',
      unit: 'Litre',
      purchaseRate: '150.00',
      saleRate: '200.00',
      mrp: '220.00',
      date: '2024-01-01'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: stockEntries.length + 1,
      ...formData
    };
    setStockEntries([...stockEntries, newEntry]);
    setFormData({
      itemName: '',
      quantity: '',
      unit: '',
      purchaseRate: '',
      saleRate: '',
      mrp: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Open Stock Entry</h1>
        </div>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Add Stock Entry</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Select
                          value={formData.itemName}
                          onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                          required
                        >
                          <option value="">Select Item</option>
                          <option value="Pure Neem Oil">Pure Neem Oil</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          type="number"
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Unit</Form.Label>
                        <Form.Select
                          value={formData.unit}
                          onChange={(e) => setFormData({...formData, unit: e.target.value})}
                          required
                        >
                          <option value="">Select Unit</option>
                          <option value="Litre">Litre</option>
                          <option value="Kg">Kg</option>
                          <option value="Bottle">Bottle</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Purchase Rate</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          value={formData.purchaseRate}
                          onChange={(e) => setFormData({...formData, purchaseRate: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Sale Rate</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          value={formData.saleRate}
                          onChange={(e) => setFormData({...formData, saleRate: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>MRP</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          value={formData.mrp}
                          onChange={(e) => setFormData({...formData, mrp: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                      <Save size={16} className="me-1" />
                      Add Entry
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Stock Entries History</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Purchase Rate</th>
                        <th>Sale Rate</th>
                        <th>MRP</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockEntries.map((entry) => (
                        <tr key={entry.id}>
                          <td>{entry.itemName}</td>
                          <td>{entry.quantity}</td>
                          <td>{entry.unit}</td>
                          <td>₹{entry.purchaseRate}</td>
                          <td>₹{entry.saleRate}</td>
                          <td>₹{entry.mrp}</td>
                          <td>{entry.date}</td>
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

export default OpenStock;