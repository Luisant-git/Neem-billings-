import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { TrendingUp, Package, ShoppingCart, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const summaryCards = [
    {
      title: 'Total Stock',
      value: '2,450',
      unit: 'Items',
      redText: 'PENDING CUSTOMER PAYMENT',
      icon: <Package size={24} />,
      color: 'primary'
    },
    {
      title: "Today's Purchases",
      value: '₹15,240',
      unit: 'Amount',
      redText: 'TOTAL PURCHASES',
      icon: <ShoppingCart size={24} />,
      color: 'success'
    },
    {
      title: "Today's Sales",
      value: '₹28,560',
      unit: 'Amount',
      redText: 'TOTAL SALES',
      icon: <TrendingUp size={24} />,
      color: 'info'
    },
    {
      title: 'Pending Returns',
      value: '12',
      unit: 'Items',
      redText: 'PENDING SUPPLIER PAYMENT',
      icon: <RotateCcw size={24} />,
      color: 'warning'
    }
  ];

  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">Dashboard</h1>
      </div>

        <Row>
          {summaryCards.map((card, index) => (
            <Col xl={3} lg={6} md={6} sm={12} key={index}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="d-flex align-items-start justify-content-between">
                    <div>
                      <span className="d-block mb-1">{card.title}</span>
                      <h4 className="fw-semibold mb-1">{card.value}</h4>
                      <span className={`badge bg-${card.color}-transparent`}>
                        {card.unit}
                      </span>
                      <div className="mt-2">
                        <span className="text-danger fw-bold" style={{fontSize: '12px'}}>{card.redText}</span>
                      </div>
                    </div>
                    <div className={`p-2 bg-${card.color}-transparent rounded`}>
                      {card.icon}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Quick Actions</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={() => navigate('/transactions/purchases')}>New Purchase</button>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="d-grid">
                      <button className="btn btn-success" onClick={() => navigate('/transactions/sales')}>New Sale</button>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="d-grid">
                      <button className="btn btn-info" onClick={() => navigate('/masters/item-master')}>Add Item</button>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="d-grid">
                      <button className="btn btn-warning" onClick={() => navigate('/reports/stock-report')}>Stock Report</button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  );
};

export default Dashboard;