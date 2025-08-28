import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Plus, Save, Printer } from 'lucide-react';

const SalesReturns = () => {
  const [returnDetails, setReturnDetails] = useState([
    {
      id: 1,
      invoiceNumber: '',
      invoiceDate: '',
      itemNumber: '',
      quantity: '',
      unit: ''
    }
  ]);

  const [itemDetails, setItemDetails] = useState([
    {
      id: 1,
      itemName: '',
      quantity: '',
      unit: '',
      sellingRate: '',
      mrp: ''
    }
  ]);

  const addReturnRow = () => {
    const newReturn = {
      id: returnDetails.length + 1,
      invoiceNumber: '',
      invoiceDate: '',
      itemNumber: '',
      quantity: '',
      unit: ''
    };
    setReturnDetails([...returnDetails, newReturn]);
  };

  const addItemRow = () => {
    const newItem = {
      id: itemDetails.length + 1,
      itemName: '',
      quantity: '',
      unit: '',
      sellingRate: '',
      mrp: ''
    };
    setItemDetails([...itemDetails, newItem]);
  };

  const updateReturnDetail = (id: number, field: string, value: string) => {
    setReturnDetails(returnDetails.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const updateItemDetail = (id: number, field: string, value: string) => {
    setItemDetails(itemDetails.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sales Return:', { returnDetails, itemDetails });
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Sales Return</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>Return Details</Card.Title>
                  <div className="ms-auto">
                    <Button variant="success" size="sm" onClick={addReturnRow}>
                      <Plus size={16} className="me-1" />
                      Add Return
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="table-responsive">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Invoice Number</th>
                          <th>Invoice Date</th>
                          <th>Item Number</th>
                          <th>Quantity</th>
                          <th>Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {returnDetails.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <Form.Control
                                type="text"
                                value={item.invoiceNumber}
                                onChange={(e) => updateReturnDetail(item.id, 'invoiceNumber', e.target.value)}
                                placeholder="INV001"
                                required
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="date"
                                value={item.invoiceDate}
                                onChange={(e) => updateReturnDetail(item.id, 'invoiceDate', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="text"
                                value={item.itemNumber}
                                onChange={(e) => updateReturnDetail(item.id, 'itemNumber', e.target.value)}
                                placeholder="NO001"
                                required
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateReturnDetail(item.id, 'quantity', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Select
                                value={item.unit}
                                onChange={(e) => updateReturnDetail(item.id, 'unit', e.target.value)}
                                required
                              >
                                <option value="">Unit</option>
                                <option value="Litre">Litre</option>
                                <option value="Kg">Kg</option>
                                <option value="Bottle">Bottle</option>
                              </Form.Select>
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

          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>Item Details</Card.Title>
                  <div className="ms-auto">
                    <Button variant="success" size="sm" onClick={addItemRow}>
                      <Plus size={16} className="me-1" />
                      Add Item
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
                        </tr>
                      </thead>
                      <tbody>
                        {itemDetails.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <Form.Select
                                value={item.itemName}
                                onChange={(e) => updateItemDetail(item.id, 'itemName', e.target.value)}
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
                                onChange={(e) => updateItemDetail(item.id, 'quantity', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Select
                                value={item.unit}
                                onChange={(e) => updateItemDetail(item.id, 'unit', e.target.value)}
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
                                onChange={(e) => updateItemDetail(item.id, 'sellingRate', e.target.value)}
                                required
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                step="0.01"
                                value={item.mrp}
                                onChange={(e) => updateItemDetail(item.id, 'mrp', e.target.value)}
                                required
                              />
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

          <Row>
            <Col xl={12}>
              <div className="d-flex justify-content-end gap-2">
                <Button variant="primary" type="submit">
                  <Save size={16} className="me-1" />
                  Save Return
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

export default SalesReturns;