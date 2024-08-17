import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './certifications.css';

// Import images for certifications
import uxCert from '../../assets/uxcert.png'
import uclaCert from '../../assets/uclacert.png'
import freeCodeCampCert from '../../assets/freecodecampcert.png'

const Certifications = () => {
    return (
        <div id="certifications">
            <h1 className="certifications-title">Certifications</h1>
            <Container style={{ marginTop: '50px' }}>
                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder">
                            <img src={uclaCert} alt="ucla-cert" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">Full-Stack Web Development (UCLA)</h3>
                            <p className="certification-description">
                            The UCLA Extension Coding Bootcamp certification focuses on full-stack web development, particularly the MERN stack (MongoDB, Express.js, React, Node.js). It provides hands-on training in both front-end and back-end technologies, including HTML, CSS, JavaScript, jQuery, React, and Node.js, equipping students with the skills needed for modern web development.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="https://www.parchment.com/u/award/dc57614ec96bf3333319ac485dd6315c" className="btn btn-primary mx-2">View Details</a>
                                <a href="/ucla-web-dev-cert.pdf" download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">UX Design (Google)</h3>
                            <p className="certification-description">
                            The Google UX Design Professional Certificate program is designed to prepare you for an entry-level role in UX design. You learn how to conduct user research and design high-quality user experiences for a variety of digital products. The program is a collaboration between Google and the UX design experts at the Google UX Community.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="https://www.coursera.org/account/accomplishments/specialization/JK3T3NA4BRM7" className="btn btn-primary mx-2">View Details</a>
                                <a href="/ux-design-cert.pdf" download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder">
                            <img src={uxCert} alt="ux-cert" />
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder">
                            <img src={freeCodeCampCert} alt="freeCodecamp-cert" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">Responsive Web Design (FreeCodeCamp)</h3>
                            <p className="certification-description">
                                Description of the certification goes here. This section will showcase your credentials in a professional manner.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="https://www.freecodecamp.org/certification/fcc9c43abde-5cf0-478f-8359-c75e3bc69031/responsive-web-design" className="btn btn-primary mx-2">View Details</a>
                                <a href="/freecodecamp-web-design-cert.pdf" download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Certifications;
