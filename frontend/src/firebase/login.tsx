import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Form, Row } from "react-bootstrap";
import SpkAlert from "../@spk-reusable-components/reusable-uielements/spk-alert";
// import { Concernlookup } from "../api/concern";
// import { getFinancialYears } from "../api/financial";
const Login = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);
  interface FinancialYear {
    financialId: string | number | readonly string[] | undefined;
    HeaderId: number;
    YearId: string;
  }

  const [lookupFinancilaYear, setlookupFinancilaYear] = useState<
    FinancialYear[]
  >([]);
  const navigate = useNavigate();
  interface Concern {
    HeaderId: number;
    Concern_Name: string;
  }

  const [lookUpData, setLookUpData] = useState<Concern[]>([]);
  const [data, setData] = useState<{
    emailOrName: string;
    password: string;
    concernId: number | null;
    financialId: string | number | null;
  }>({
    emailOrName: "",
    password: "",
    concernId: null,
    financialId: null,
  });
  const { emailOrName, password } = data;

  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]:
        name === "concernId" || name === "financialId"
          ? parseInt(value)
          : value,
    });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  };

  const getconcernId = () => {
    // Concernlookup().then((res) => {
    //   console.log(res.data);
    //   setLookUpData(res.data);
    // });

    // getFinancialYears().then((res) => {
    //   console.log(res.data);
    //   setlookupFinancilaYear(res.data);
    // });
  };
  useEffect(() => {
    getconcernId();
  }, []);

  return (
    <Fragment>
      <div className="min-vh-100 d-flex align-items-center" style={{
        background: 'linear-gradient(135deg, #2d5016 0%, #4a7c59 50%, #6b8e23 100%)',
        position: 'relative'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1
        }}></div>
        
        <div className="container">
          <Row className="justify-content-center">
            <Col xxl={4} xl={5} lg={6} md={8} sm={10}>
              {/* Logo Section */}
              <div className="text-center mb-4">
                <div className="d-inline-block p-3 rounded-circle" style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <img 
                    src="https://www.shutterstock.com/image-vector/organic-neem-logo-vector-icon-260nw-2383664659.jpg" 
                    alt="Neem Oil Logo" 
                    style={{width: '80px', height: '80px', borderRadius: '50%'}}
                  />
                </div>
                <h2 className="text-white mt-3 mb-1">Neem Oil Billing</h2>
                <p className="text-white-50">Neem-Oil</p>
              </div>
              
              <Card className="shadow-lg border-0" style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)'
              }}>
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <h4 className="text-success mb-2">Welcome Back!</h4>
                    <p className="text-muted">Sign in to manage your neem oil business</p>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    {err && <SpkAlert variant="danger">{err}</SpkAlert>}
                    
                    <div className="mb-3">
                      <Form.Label className="text-dark fw-medium">
                        <i className="ri-user-line me-2 text-success"></i>Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="emailOrName"
                        id="emailOrName"
                        placeholder="Enter your username"
                        value={emailOrName}
                        onChange={changeHandler}
                        className="form-control-lg"
                        style={{
                          border: '2px solid #e9ecef',
                          borderRadius: '10px',
                          padding: '12px 16px'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <div className="position-relative">
                        <Form.Label className="text-dark fw-medium">
                          <i className="ri-lock-line me-2 text-success"></i>Password
                        </Form.Label>
                        <Form.Control
                          name="password"
                          type={passwordshow1 ? "text" : "password"}
                          value={password}
                          onChange={changeHandler}
                          className="form-control-lg"
                          id="signin-password"
                          placeholder="Enter your password"
                          style={{
                            border: '2px solid #e9ecef',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            paddingRight: '50px'
                          }}
                          required
                        />
                        <button
                          type="button"
                          className="btn position-absolute"
                          style={{
                            right: '10px',
                            top: '35px',
                            border: 'none',
                            background: 'transparent',
                            color: '#6c757d'
                          }}
                          onClick={() => setpasswordshow1(!passwordshow1)}
                        >
                          <i className={passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"}></i>
                        </button>
                      </div>
                    </div>
                    

                    
                    <div className="d-grid mt-4">
                      <button
                        type="submit"
                        className="btn btn-lg"
                        disabled={loading}
                        style={{
                          background: 'linear-gradient(135deg, #4a7c59 0%, #6b8e23 100%)',
                          border: 'none',
                          borderRadius: '10px',
                          color: 'white',
                          padding: '12px',
                          fontWeight: '600',
                          boxShadow: '0 4px 15px rgba(107, 142, 35, 0.3)'
                        }}
                      >
                        {loading ? (
                          <>
                            <i className="ri-loader-4-line me-2"></i>
                            Signing In...
                          </>
                        ) : (
                          <>
                            <i className="ri-login-circle-line me-2"></i>
                            Sign In to Dashboard
                          </>
                        )}
                      </button>
                    </div>
                  </Form>
                  
                  <div className="text-center mt-4">
                    <p className="text-muted small mb-0">
                      Powered by Neem-Oil
                    </p>
                  </div>
                </Card.Body>
              </Card>
              
              {/* Features */}
              <div className="text-center mt-4">
                <Row className="g-3">
                  <Col xs={4}>
                    <div className="text-white-50">
                      <i className="ri-shield-check-line fs-4 d-block mb-1"></i>
                      <small>Secure</small>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="text-white-50">
                      <i className="ri-leaf-line fs-4 d-block mb-1"></i>
                      <small>Organic</small>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="text-white-50">
                      <i className="ri-bar-chart-line fs-4 d-block mb-1"></i>
                      <small>Analytics</small>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;