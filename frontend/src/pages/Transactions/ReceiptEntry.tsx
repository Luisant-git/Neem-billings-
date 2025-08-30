import { Fragment, useState } from "react";
import { Card, Col, Row, Form, Button, Table } from "react-bootstrap";
import { Plus, Save } from 'lucide-react';
import { Link } from "react-router-dom";
import Select from 'react-select';

const ReceiptEntry = () => {
  const customers = [
    { value: 'XYZ Retail Store', label: 'XYZ Retail Store' },
    { value: 'ABC Distributors', label: 'ABC Distributors' },
    { value: 'Green Market Co', label: 'Green Market Co' },
    { value: 'Organic Traders', label: 'Organic Traders' },
    { value: 'Natural Products Hub', label: 'Natural Products Hub' }
  ];

  const [formData, setFormData] = useState({
    receiptId: 'REC001',
    customerName: '',
    linkedInvoices: [],
    receiptAmount: '',
    paymentMode: 'Cash',
    referenceNumber: '',
    receiptDate: new Date().toISOString().split('T')[0],
    status: 'Cleared',
    notes: ''
  });

  const [receipts, setReceipts] = useState([
    {
      id: 1,
      receiptId: 'REC001',
      customer: 'XYZ Retail Store',
      invoiceNo: 'INV001, INV003',
      amount: '₹3,000',
      mode: 'UPI',
      refNo: 'UPI123456',
      date: '2024-01-16',
      status: 'Cleared',
      balanceAfter: '₹7,000'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReceipt = {
      id: receipts.length + 1,
      receiptId: `REC${String(receipts.length + 1).padStart(3, '0')}`,
      customer: formData.customerName,
      invoiceNo: formData.linkedInvoices.join(', '),
      amount: `₹${formData.receiptAmount}`,
      mode: formData.paymentMode,
      refNo: formData.referenceNumber,
      date: formData.receiptDate,
      status: formData.status,
      balanceAfter: '₹0'
    };
    setReceipts([...receipts, newReceipt]);
    setFormData({
      receiptId: `REC${String(receipts.length + 2).padStart(3, '0')}`,
      customerName: '',
      linkedInvoices: [],
      receiptAmount: '',
      paymentMode: 'Cash',
      referenceNumber: '',
      receiptDate: new Date().toISOString().split('T')[0],
      status: 'Cleared',
      notes: ''
    });
  };

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-18 mb-0">Receipt Entry</h1>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Receipt Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Receipt ID</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.receiptId}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Customer Name</Form.Label>
                      <Select
                        options={customers}
                        value={customers.find(c => c.value === formData.customerName) || null}
                        onChange={(selectedOption) => setFormData({...formData, customerName: selectedOption?.value || ''})}
                        placeholder="Search and select customer..."
                        isSearchable
                        isClearable
                        required
                      />
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
                      <Form.Label>Receipt Amount</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.01"
                        value={formData.receiptAmount}
                        onChange={(e) => setFormData({...formData, receiptAmount: e.target.value})}
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
                        placeholder="Cheque No / UPI ID / Transaction ID"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Receipt Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={formData.receiptDate}
                        onChange={(e) => setFormData({...formData, receiptDate: e.target.value})}
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
                    Save Receipt
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
                <Card.Title>Receipt History</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Receipt ID</th>
                        <th>Customer</th>
                        <th>Invoice No</th>
                        <th>Amount</th>
                        <th>Mode</th>
                        <th>Ref No</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Balance After Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {receipts.map((receipt) => (
                        <tr key={receipt.id}>
                          <td>{receipt.receiptId}</td>
                          <td>{receipt.customer}</td>
                          <td>{receipt.invoiceNo}</td>
                          <td>{receipt.amount}</td>
                          <td>{receipt.mode}</td>
                          <td>{receipt.refNo}</td>
                          <td>{receipt.date}</td>
                          <td>
                            <span className={`badge bg-${receipt.status === 'Cleared' ? 'success' : receipt.status === 'Pending' ? 'warning' : 'danger'}-transparent`}>
                              {receipt.status}
                            </span>
                          </td>
                          <td>{receipt.balanceAfter}</td>
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

export default ReceiptEntry;