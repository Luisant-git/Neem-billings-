import { Fragment, useState } from "react";
import { Card, Col, Row, Form, Button, Table } from "react-bootstrap";
import { Plus, Minus, Save } from 'lucide-react';
import { Link } from "react-router-dom";

const Production = () => {
  const [formData, setFormData] = useState({
    productionId: 'PROD001',
    productionDate: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const [rawMaterials, setRawMaterials] = useState([
    {
      id: 1,
      itemName: '',
      unit: '',
      quantity: ''
    }
  ]);

  const [finishedGoods, setFinishedGoods] = useState([
    {
      id: 1,
      itemName: '',
      category: '',
      unit: '',
      quantity: '',
      purchaseCost: '',
      mrp: '',
      salesCost: ''
    }
  ]);

  const [productionHistory] = useState([
    {
      id: 1,
      productionId: 'PROD001',
      date: '2024-01-15',
      rawMaterials: 'Neem Seeds (20 Kg)',
      finishedGoods: 'Neem Oil (10 Litre)',
      totalCost: '₹4,000',
      notes: 'First batch production'
    }
  ]);

  const addRawMaterial = () => {
    setRawMaterials([...rawMaterials, {
      id: rawMaterials.length + 1,
      itemName: '',
      unit: '',
      quantity: ''
    }]);
  };

  const removeRawMaterial = (id: number) => {
    if (rawMaterials.length > 1) {
      setRawMaterials(rawMaterials.filter(item => item.id !== id));
    }
  };

  const updateRawMaterial = (id: number, field: string, value: string) => {
    setRawMaterials(rawMaterials.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addFinishedGood = () => {
    setFinishedGoods([...finishedGoods, {
      id: finishedGoods.length + 1,
      itemName: '',
      category: '',
      unit: '',
      quantity: '',
      purchaseCost: '',
      mrp: '',
      salesCost: ''
    }]);
  };

  const removeFinishedGood = (id: number) => {
    if (finishedGoods.length > 1) {
      setFinishedGoods(finishedGoods.filter(item => item.id !== id));
    }
  };

  const updateFinishedGood = (id: number, field: string, value: string) => {
    setFinishedGoods(finishedGoods.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateTotalInputQuantity = () => {
    return rawMaterials.reduce((total, item) => total + (parseFloat(item.quantity) || 0), 0);
  };

  const calculateTotalOutputQuantity = () => {
    return finishedGoods.reduce((total, item) => total + (parseFloat(item.quantity) || 0), 0);
  };

  const calculateProductionCost = () => {
    return finishedGoods.reduce((total, item) => {
      const cost = parseFloat(item.purchaseCost) || 0;
      const qty = parseFloat(item.quantity) || 0;
      return total + (cost * qty);
    }, 0).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Production Entry:', { formData, rawMaterials, finishedGoods });
  };

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-18 mb-0">Production Entry</h1>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Production Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Production ID</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.productionId}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Production Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={formData.productionDate}
                        onChange={(e) => setFormData({...formData, productionDate: e.target.value})}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Notes / Remarks</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      />
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
                <Card.Title>Raw Materials (Inputs)</Card.Title>
                <div className="ms-auto">
                  <Button variant="success" size="sm" onClick={addRawMaterial}>
                    <Plus size={16} className="me-1" />
                    Add Raw Material
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rawMaterials.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <Form.Select
                              value={item.itemName}
                              onChange={(e) => updateRawMaterial(item.id, 'itemName', e.target.value)}
                              required
                            >
                              <option value="">Select Item</option>
                              <option value="Neem Seeds">Neem Seeds</option>
                              <option value="Raw Neem Oil">Raw Neem Oil</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Select
                              value={item.unit}
                              onChange={(e) => updateRawMaterial(item.id, 'unit', e.target.value)}
                              required
                            >
                              <option value="">Unit</option>
                              <option value="Kg">Kg</option>
                              <option value="Litre">Litre</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Control
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateRawMaterial(item.id, 'quantity', e.target.value)}
                              required
                            />
                          </td>
                          <td>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeRawMaterial(item.id)}
                              disabled={rawMaterials.length === 1}
                            >
                              <Minus size={14} />
                            </Button>
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
                <Card.Title>Finished Goods (Outputs)</Card.Title>
                <div className="ms-auto">
                  <Button variant="success" size="sm" onClick={addFinishedGood}>
                    <Plus size={16} className="me-1" />
                    Add Finished Good
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Purchase Cost</th>
                        <th>MRP</th>
                        <th>Sales Cost</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {finishedGoods.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <Form.Select
                              value={item.itemName}
                              onChange={(e) => updateFinishedGood(item.id, 'itemName', e.target.value)}
                              required
                            >
                              <option value="">Select Item</option>
                              <option value="Pure Neem Oil">Pure Neem Oil</option>
                              <option value="Neem Cake">Neem Cake</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Select
                              value={item.category}
                              onChange={(e) => updateFinishedGood(item.id, 'category', e.target.value)}
                              required
                            >
                              <option value="">Category</option>
                              <option value="Product">Product</option>
                              <option value="By-Product">By-Product</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Select
                              value={item.unit}
                              onChange={(e) => updateFinishedGood(item.id, 'unit', e.target.value)}
                              required
                            >
                              <option value="">Unit</option>
                              <option value="Litre">Litre</option>
                              <option value="Kg">Kg</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Control
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateFinishedGood(item.id, 'quantity', e.target.value)}
                              required
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="number"
                              step="0.01"
                              value={item.purchaseCost}
                              onChange={(e) => updateFinishedGood(item.id, 'purchaseCost', e.target.value)}
                              required
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="number"
                              step="0.01"
                              value={item.mrp}
                              onChange={(e) => updateFinishedGood(item.id, 'mrp', e.target.value)}
                              required
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="number"
                              step="0.01"
                              value={item.salesCost}
                              onChange={(e) => updateFinishedGood(item.id, 'salesCost', e.target.value)}
                              required
                            />
                          </td>
                          <td>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeFinishedGood(item.id)}
                              disabled={finishedGoods.length === 1}
                            >
                              <Minus size={14} />
                            </Button>
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
                <Card.Title>Production Summary</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-primary">{calculateTotalInputQuantity()}</h4>
                      <p className="mb-0">Total Input Quantity</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-success">{calculateTotalOutputQuantity()}</h4>
                      <p className="mb-0">Total Output Quantity</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <h4 className="text-warning">₹{calculateProductionCost()}</h4>
                      <p className="mb-0">Production Cost</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="text-center p-3 border rounded">
                      <Form.Control
                        type="number"
                        step="0.01"
                        placeholder="Expected Profit %"
                        className="text-center"
                      />
                      <p className="mb-0 mt-1">Expected Profit Margin</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                <Save size={16} className="me-1" />
                Save Production
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      <Row className="mt-4">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Production History</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Production ID</th>
                      <th>Date</th>
                      <th>Raw Materials Used</th>
                      <th>Finished Goods Produced</th>
                      <th>Total Cost</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionHistory.map((production) => (
                      <tr key={production.id}>
                        <td>{production.productionId}</td>
                        <td>{production.date}</td>
                        <td>{production.rawMaterials}</td>
                        <td>{production.finishedGoods}</td>
                        <td>{production.totalCost}</td>
                        <td>{production.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Production;