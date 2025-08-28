import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const CustomerMaster = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    customerCode: '',
    customerName: '',
    customerNumber: '',
    phone: '',
    email: '',
    address: '',
    gstNumber: '',
    creditLimit: ''
  });

  const sampleCustomers = [
    {
      id: 1,
      customerCode: 'CUST001',
      customerName: 'XYZ Retail Store',
      customerNumber: 'C001',
      phone: '9876543210',
      email: 'xyz@retail.com',
      address: '456 Market St, City',
      gstNumber: '29XYZAB1234C1Z5',
      creditLimit: '₹50,000'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({
      customerCode: '',
      customerName: '',
      customerNumber: '',
      phone: '',
      email: '',
      address: '',
      gstNumber: '',
      creditLimit: ''
    });
  };

  const handleEdit = (customer: any) => {
    setFormData(customer);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditMode(false);
    setFormData({
      customerCode: '',
      customerName: '',
      customerNumber: '',
      phone: '',
      email: '',
      address: '',
      gstNumber: '',
      creditLimit: ''
    });
    setShowModal(true);
  };

  return (
    <>
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">Customer Master</h1>
          <Button variant="primary" onClick={handleAdd}>
            <Plus size={16} className="me-1" />
            Add Customer
          </Button>
        </div>

        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Customers List</Card.Title>
                <div className="ms-auto">
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Search customers..."
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
                        <th>Customer Code</th>
                        <th>Customer Name</th>
                        <th>Customer Number</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>GST Number</th>
                        <th>Credit Limit</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleCustomers.map((customer) => (
                        <tr key={customer.id}>
                          <td>{customer.customerCode}</td>
                          <td>{customer.customerName}</td>
                          <td>{customer.customerNumber}</td>
                          <td>{customer.phone}</td>
                          <td>{customer.email}</td>
                          <td>{customer.gstNumber}</td>
                          <td>{customer.creditLimit}</td>
                          <td>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              className="me-1"
                              onClick={() => handleEdit(customer)}
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
            <Modal.Title>{editMode ? 'Edit Customer' : 'Add New Customer'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.customerCode}
                      onChange={(e) => setFormData({...formData, customerCode: e.target.value})}
                      placeholder="Auto-generated or manual"
                    />
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
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => setFormData({...formData, customerName: e.target.value})}
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
                    <Form.Label>GST Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.gstNumber}
                      onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Credit Limit</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      value={formData.creditLimit}
                      onChange={(e) => setFormData({...formData, creditLimit: e.target.value})}
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
                {editMode ? 'Update' : 'Save'} Customer
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
    </>
  );
};

export default CustomerMaster;