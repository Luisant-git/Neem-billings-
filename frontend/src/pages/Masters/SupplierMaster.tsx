import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const SupplierMaster = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    supplierCode: '',
    supplierName: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    gstNumber: '',
    paymentTerms: ''
  });

  const sampleSuppliers = [
    {
      id: 1,
      supplierCode: 'SUP001',
      supplierName: 'ABC Neem Suppliers',
      contactPerson: 'John Doe',
      phone: '9876543210',
      email: 'john@abcsuppliers.com',
      address: '123 Main St, City',
      gstNumber: '29ABCDE1234F1Z5',
      paymentTerms: '30 Days'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({
      supplierCode: '',
      supplierName: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: '',
      gstNumber: '',
      paymentTerms: ''
    });
  };

  const handleEdit = (supplier: any) => {
    setFormData(supplier);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditMode(false);
    setFormData({
      supplierCode: '',
      supplierName: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: '',
      gstNumber: '',
      paymentTerms: ''
    });
    setShowModal(true);
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Supplier Master</h1>
          <Button variant="primary" onClick={handleAdd}>
            <Plus size={16} className="me-1" />
            Add Supplier
          </Button>
        </div>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Suppliers List</Card.Title>
                <div className="ms-auto">
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Search suppliers..."
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
                        <th>Supplier Code</th>
                        <th>Supplier Name</th>
                        <th>Contact Person</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>GST Number</th>
                        <th>Payment Terms</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleSuppliers.map((supplier) => (
                        <tr key={supplier.id}>
                          <td>{supplier.supplierCode}</td>
                          <td>{supplier.supplierName}</td>
                          <td>{supplier.contactPerson}</td>
                          <td>{supplier.phone}</td>
                          <td>{supplier.email}</td>
                          <td>{supplier.gstNumber}</td>
                          <td>{supplier.paymentTerms}</td>
                          <td>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              className="me-1"
                              onClick={() => handleEdit(supplier)}
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
            <Modal.Title>{editMode ? 'Edit Supplier' : 'Add New Supplier'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Supplier Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.supplierCode}
                      onChange={(e) => setFormData({...formData, supplierCode: e.target.value})}
                      placeholder="Auto-generated or manual"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.supplierName}
                      onChange={(e) => setFormData({...formData, supplierName: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Person</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>GST Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.gstNumber}
                      onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Payment Terms</Form.Label>
                    <Form.Select
                      value={formData.paymentTerms}
                      onChange={(e) => setFormData({...formData, paymentTerms: e.target.value})}
                    >
                      <option value="">Select Payment Terms</option>
                      <option value="Cash">Cash</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="45 Days">45 Days</option>
                      <option value="60 Days">60 Days</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {editMode ? 'Update' : 'Save'} Supplier
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
    </>
  );
};

export default SupplierMaster;