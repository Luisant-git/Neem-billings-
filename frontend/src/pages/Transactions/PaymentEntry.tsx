import { Fragment, useState } from "react";
import { Card, Col, Row, Form, Button, Table } from "react-bootstrap";
import { Plus, Save } from 'lucide-react';
import { Link } from "react-router-dom";

const PaymentEntry = () => {
  const [formData, setFormData] = useState({
    paymentId: 'PAY001',
    supplierName: '',
    linkedInvoices: [],
    paymentAmount: '',
    paymentMode: 'Cash',
    referenceNumber: '',
    paymentDate: new Date().toISOString().split('T')[0],
    status: 'Cleared',
    notes: ''
  });

  const [payments, setPayments] = useState([
    {
      id: 1,
      paymentId: 'PAY001',
      supplier: 'ABC Neem Suppliers',
      invoiceNo: 'INV001, INV002',
      amount: '₹5,000',
      mode: 'Cash',
      refNo: 'CASH001',
      date: '2024-01-15',
      status: 'Cleared',
      balanceAfter: '₹15,000'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPayment = {
      id: payments.length + 1,
      paymentId: `PAY${String(payments.length + 1).padStart(3, '0')}`,
      supplier: formData.supplierName,
      invoiceNo: formData.linkedInvoices.join(', '),
      amount: `₹${formData.paymentAmount}`,
      mode: formData.paymentMode,
      refNo: formData.referenceNumber,
      date: formData.paymentDate,
      status: formData.status,
      balanceAfter: '₹0'
    };
    setPayments([...payments, newPayment]);
    setFormData({
      paymentId: `PAY${String(payments.length + 2).padStart(3, '0')}`,
      supplierName: '',
      linkedInvoices: [],
      paymentAmount: '',
      paymentMode: 'Cash',
      referenceNumber: '',
      paymentDate: new Date().toISOString().split('T')[0],
      status: 'Cleared',
      notes: ''
    });
  };

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-18 mb-0">Payment Entry</h1>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Payment Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Payment ID</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.paymentId}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Supplier Name</Form.Label>
                      <Form.Select
                        value={formData.supplierName}
                        onChange={(e) => setFormData({...formData, supplierName: e.target.value})}
                        required
                      >
                        <option value="">Select Supplier</option>
                        <option value="ABC Neem Suppliers">ABC Neem Suppliers</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Linked Invoice(s)</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.linkedInvoices.join(', ')}
                        onChange={(e) => setFormData({...formData, linkedInvoices: e.target.value.split(', ').filter(Boolean)})}
                        placeholder="INV001, INV002 (optional)"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Payment Amount</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.01"
                        value={formData.paymentAmount}
                        onChange={(e) => setFormData({...formData, paymentAmount: e.target.value})}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Payment Mode</Form.Label>
                      <Form.Select
                        value={formData.paymentMode}
                        onChange={(e) => setFormData({...formData, paymentMode: e.target.value})}
                      >
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Account Transfer">Account Transfer</option>
                        <option value="UPI">UPI</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Reference Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.referenceNumber}
                        onChange={(e) => setFormData({...formData, referenceNumber: e.target.value})}
                        placeholder="Cheque No / UTR / Transaction ID"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Payment Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={formData.paymentDate}
                        onChange={(e) => setFormData({...formData, paymentDate: e.target.value})}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                      >
                        <option value="Cleared">Cleared</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Notes / Remarks</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button variant="primary" type="submit">
                    <Save size={16} className="me-1" />
                    Save Payment
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Payment History</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Payment ID</th>
                        <th>Supplier</th>
                        <th>Invoice No</th>
                        <th>Amount</th>
                        <th>Mode</th>
                        <th>Ref No</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Balance After Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment) => (
                        <tr key={payment.id}>
                          <td>{payment.paymentId}</td>
                          <td>{payment.supplier}</td>
                          <td>{payment.invoiceNo}</td>
                          <td>{payment.amount}</td>
                          <td>{payment.mode}</td>
                          <td>{payment.refNo}</td>
                          <td>{payment.date}</td>
                          <td>
                            <span className={`badge bg-${payment.status === 'Cleared' ? 'success' : payment.status === 'Pending' ? 'warning' : 'danger'}-transparent`}>
                              {payment.status}
                            </span>
                          </td>
                          <td>{payment.balanceAfter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default PaymentEntry;