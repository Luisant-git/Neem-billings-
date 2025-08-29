import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Plus, Minus, Save, Printer } from 'lucide-react';

const Sales = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerNumber: '',
    entryDate: new Date().toISOString().split('T')[0],
    invoiceNumber: 'INV001',
    billNumber: '',
    paymentType: 'Cash'
  });

  const [items, setItems] = useState([
    {
      id: 1,
      itemName: '',
      quantity: '',
      unit: '',
      sellingRate: '',
      mrp: '',
      discountPercent: '',
      discountAmount: '',
      totalAmount: ''
    }
  ]);

  const addRow = () => {
    const newItem = {
      id: items.length + 1,
      itemName: '',
      quantity: '',
      unit: '',
      sellingRate: '',
      mrp: '',
      discountPercent: '',
      discountAmount: '',
      totalAmount: ''
    };
    setItems([...items, newItem]);
  };

  const removeRow = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: string, value: string) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        
        // Auto calculate total amount
        if (field === 'quantity' || field === 'sellingRate' || field === 'discountPercent') {
          const qty = parseFloat(updatedItem.quantity) || 0;
          const rate = parseFloat(updatedItem.sellingRate) || 0;
          const discount = parseFloat(updatedItem.discountPercent) || 0;
          
          const subtotal = qty * rate;
          const discountAmount = (subtotal * discount) / 100;
          const total = subtotal - discountAmount;
          
          updatedItem.discountAmount = discountAmount.toFixed(2);
          updatedItem.totalAmount = total.toFixed(2);
        }
        
        return updatedItem;
      }
      return item;
    }));
  };

  const calculateGrandTotal = () => {
    return items.reduce((total, item) => {
      return total + (parseFloat(item.totalAmount) || 0);
    }, 0).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sales Entry:', { formData, items });
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Sales Entry</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>Sales Details</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Select
                          value={formData.customerName}
                          onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                          required
                        >
                          <option value="">Select Customer</option>
                          <option value="XYZ Retail Store">XYZ Retail Store</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Customer Number</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.customerNumber}
                          onChange={(e) => setFormData({...formData, customerNumber: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Entry Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={formData.entryDate}
                          onChange={(e) => setFormData({...formData, entryDate: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Invoice Number</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.invoiceNumber}
                          onChange={(e) => setFormData({...formData, invoiceNumber: e.target.value})}
                          readOnly
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Payment Type</Form.Label>
                        <Form.Select
                          value={formData.paymentType}
                          onChange={(e) => setFormData({...formData, paymentType: e.target.value})}
                        >
                          <option value="Cash">Cash</option>
                          <option value="Credit">Credit</option>
                        </Form.Select>
                      </Form.Group>
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
                  <Card.Title>Items</Card.Title>
                  <div className="ms-auto">
                    <Button variant="success" size="sm" onClick={addRow}>
                      <Plus size={16} className="me-1" />
                      Add Row
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="table-responsive">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Item Name</th>
                          <th>Quantity</th>
                          <th>Unit</th>
                          <th>Selling Rate</th>
                          <th>MRP</th>
                          <th>Discount %</th>
                          <th>Discount Amount</th>
                          <th>Total Amount</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <Form.Select
                                value={item.itemName}
                                onChange={(e) => updateItem(item.id, 'itemName', e.target.value)}
                                required
                              >
                                <option value="">Select Item</option>
                                <option value="Pure Neem Oil">Pure Neem Oil</option>
                              </Form.Select>
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Select
                                value={item.unit}
                                onChange={(e) => updateItem(item.id, 'unit', e.target.value)}
                                required
                              >
                                <option value="">Unit</option>
                                <option value="Litre">Litre</option>
                                <option value="Kg">Kg</option>
                                <option value="Bottle">Bottle</option>
                              </Form.Select>
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                step="0.01"
                                value={item.sellingRate}
                                onChange={(e) => updateItem(item.id, 'sellingRate', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                step="0.01"
                                value={item.mrp}
                                onChange={(e) => updateItem(item.id, 'mrp', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                step="0.01"
                                value={item.discountPercent}
                                onChange={(e) => updateItem(item.id, 'discountPercent', e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                step="0.01"
                                value={item.discountAmount}
                                readOnly
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                step="0.01"
                                value={item.totalAmount}
                                readOnly
                              />
                            </td>
                            <td>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeRow(item.id)}
                                disabled={items.length === 1}
                              >
                                <Minus size={14} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={7} className="text-end fw-bold">Grand Total:</td>
                          <td className="fw-bold">₹{calculateGrandTotal()}</td>
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
              <div className="d-flex justify-content-end gap-2">
                <Button variant="primary" type="submit">
                  <Save size={16} className="me-1" />
                  Save Entry
                </Button>
                <Button variant="outline-primary">
                  <Printer size={16} className="me-1" />
                  Print
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
    </>
  );
};

export default Sales;