import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import Select from 'react-select';

const ItemMaster = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [supplierSearch, setSupplierSearch] = useState('');
  
  const suppliers = [
    { value: 'ABC Suppliers', label: 'ABC Suppliers' },
    { value: 'Natural Products Ltd', label: 'Natural Products Ltd' },
    { value: 'Organic Neem Co', label: 'Organic Neem Co' },
    { value: 'Green Earth Suppliers', label: 'Green Earth Suppliers' },
    { value: 'Pure Nature Industries', label: 'Pure Nature Industries' }
  ];
  
  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.label.toLowerCase().includes(supplierSearch.toLowerCase())
  );

  const [formData, setFormData] = useState({
    itemCode: '',
    hsnCode: '',
    itemName: '',
    category: '',
    supplier: '',
    taxPercent: '',
    openingStock: '',
    purchaseRate: '',
    sellingRate: '',
    mrp: '',
    unit: ''
  });

  const categories = ['Neem Oil', 'Raw Material', 'Packing', 'Others'];
  const units = ['Litre', 'Kg', 'Bottle', 'Piece', 'Box'];

  const sampleItems = [
    {
      id: 1,
      itemCode: 'NO001',
      hsnCode: '15159099',
      itemName: 'Pure Neem Oil',
      category: 'Neem Oil',
      supplier: 'ABC Suppliers',
      taxPercent: '5%',
      openingStock: '100',
      purchaseRate: '₹150',
      sellingRate: '₹200',
      mrp: '₹220',
      unit: 'Litre'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({
      itemCode: '',
      hsnCode: '',
      itemName: '',
      category: '',
      supplier: '',
      taxPercent: '',
      openingStock: '',
      purchaseRate: '',
      sellingRate: '',
      mrp: '',
      unit: ''
    });
  };

  const handleEdit = (item: any) => {
    setFormData(item);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditMode(false);
    setFormData({
      itemCode: '',
      hsnCode: '',
      itemName: '',
      category: '',
      supplier: '',
      taxPercent: '',
      openingStock: '',
      purchaseRate: '',
      sellingRate: '',
      mrp: '',
      unit: ''
    });
    setShowModal(true);
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Item Master</h1>
          <Button variant="primary" onClick={handleAdd}>
            <Plus size={16} className="me-1" />
            Add Item
          </Button>
        </div>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Items List</Card.Title>
                <div className="ms-auto">
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Search items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-primary">
                      <Search size={16} />
                    </Button>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item Code</th>
                        <th>HSN Code</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Tax %</th>
                        <th>Stock</th>
                        <th>Purchase Rate</th>
                        <th>Selling Rate</th>
                        <th>MRP</th>
                        <th>Unit</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.itemCode}</td>
                          <td>{item.hsnCode}</td>
                          <td>{item.itemName}</td>
                          <td>{item.category}</td>
                          <td>{item.supplier}</td>
                          <td>{item.taxPercent}</td>
                          <td>{item.openingStock}</td>
                          <td>{item.purchaseRate}</td>
                          <td>{item.sellingRate}</td>
                          <td>{item.mrp}</td>
                          <td>{item.unit}</td>
                          <td>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              className="me-1"
                              onClick={() => handleEdit(item)}
                            >
                              <Edit size={14} />
                            </Button>
                            <Button variant="outline-danger" size="sm">
                              <Trash2 size={14} />
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

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{editMode ? 'Edit Item' : 'Add New Item'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Item Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.itemCode}
                      onChange={(e) => setFormData({...formData, itemCode: e.target.value})}
                      placeholder="Auto-generated or manual"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>HSN Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.hsnCode}
                      onChange={(e) => setFormData({...formData, hsnCode: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.itemName}
                      onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Supplier</Form.Label>
                    <Select
                      options={suppliers}
                      value={suppliers.find(s => s.value === formData.supplier) || null}
                      onChange={(selectedOption) => setFormData({...formData, supplier: selectedOption?.value || ''})}
                      placeholder="Search and select supplier..."
                      isSearchable
                      isClearable
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tax %</Form.Label>
                    <Form.Select
                      value={formData.taxPercent}
                      onChange={(e) => setFormData({...formData, taxPercent: e.target.value})}
                      required
                    >
                      <option value="">Select Tax %</option>
                      <option value="5">5%</option>
                      <option value="12">12%</option>
                      <option value="18">18%</option>
                      <option value="28">28%</option>
                    </Form.Select>
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
                      {units.map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Opening Stock Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      value={formData.openingStock}
                      onChange={(e) => setFormData({...formData, openingStock: e.target.value})}
                      required
                    />
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
                    <Form.Label>Selling Rate</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      value={formData.sellingRate}
                      onChange={(e) => setFormData({...formData, sellingRate: e.target.value})}
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
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {editMode ? 'Update' : 'Save'} Item
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
    </>
  );
};

export default ItemMaster;