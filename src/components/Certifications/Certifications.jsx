import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import './certifications.css'; // Importing the CSS file

const Certifications = () => {
    return (
        <div id="certifications">
            <h1 className="certifications-title">Certifications</h1>
            <h2 className="certifications-header">Coming Soon!</h2>
            <Container style={{ marginTop: '50px' }}>
                {/* Placeholder for certifications */}
                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder">
                            <FontAwesomeIcon icon={faCertificate} size="4x" />
                            <p className="placeholder-text">Certification Placeholder</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">Certification Name</h3>
                            <p className="certification-description">
                                Description of the certification goes here. This section will showcase your credentials in a professional manner.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="#" className="btn btn-primary mx-2">View Details</a>
                                <a href="#" className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="certification-item">
                <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">Certification Name</h3>
                            <p className="certification-description">
                                Description of the certification goes here. This section will showcase your credentials in a professional manner.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="#" className="btn btn-primary mx-2">View Details</a>
                                <a href="#" className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder">
                            <FontAwesomeIcon icon={faCertificate} size="4x" />
                            <p className="placeholder-text">Certification Placeholder</p>
                        </div>
                    </Col>
                    
                </Row>
                
            </Container>
        </div>
    );
};

export default Certifications;
