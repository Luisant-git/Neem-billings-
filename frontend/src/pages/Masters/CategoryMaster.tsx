import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Plus, Edit, Trash2, Save } from 'lucide-react';

const CategoryMaster = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    description: ''
  });

  const [categories, setCategories] = useState([
    {
      id: 1,
      categoryName: 'Raw Materials',
      description: 'Raw materials for production'
    },
    {
      id: 2,
      categoryName: 'Finished Products',
      description: 'Final products ready for sale'
    },
    {
      id: 3,
      categoryName: 'By-Products',
      description: 'Secondary products from production'
    }
  ]);

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCategories(categories.map(cat => 
        cat.id === editingId 
          ? { ...cat, categoryName: formData.categoryName, description: formData.description }
          : cat
      ));
      setEditingId(null);
    } else {
      const newCategory = {
        id: categories.length + 1,
        categoryName: formData.categoryName,
        description: formData.description
      };
      setCategories([...categories, newCategory]);
    }
    setFormData({ categoryName: '', description: '' });
  };

  const handleEdit = (category: any) => {
    setFormData({
      categoryName: category.categoryName,
      description: category.description
    });
    setEditingId(category.id);
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">Category Master</h1>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>{editingId ? 'Edit Category' : 'Add New Category'}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.categoryName}
                        onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end gap-2">
                  {editingId && (
                    <Button 
                      variant="secondary" 
                      onClick={() => {
                        setEditingId(null);
                        setFormData({ categoryName: '', description: '' });
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button variant="primary" type="submit">
                    <Save size={16} className="me-1" />
                    {editingId ? 'Update' : 'Save'} Category
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>

      <Row className="mt-4">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Categories List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Category Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.categoryName}</td>
                        <td>{category.description}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => handleEdit(category)}
                            >
                              <Edit size={14} />
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDelete(category.id)}
                            >
                              <Trash2 size={14} />
                            </Button>
                          </div>
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

export default CategoryMaster;