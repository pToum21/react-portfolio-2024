import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import anyyes from '../../assets/anyyes.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './porfilio.css'

const YourComponent = () => {
    return (
        // container holding all projects and descs
        <Container style={{ height: '80vh', marginTop: '50px' }}>
            {/* project 1 */}
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <img src={anyyes} alt="Your Image" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div className="text-center">
                        <h3 className='proj-title'>AnyYes</h3>
                        <p className='proj-text'>
                            This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: 'white' }}>
                            <h5 className='used-stack'>Stack Used:</h5>
                            HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="social-links mr-3">
                                <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                            </div>
                            <div className="social-links">
                                <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:</p>
                                <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* prroject 2 */}
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div className="text-center">
                        <h3 className='proj-title'>AnyYes</h3>
                        <p className='proj-text'>
                            This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: 'white' }}>
                            <h5 className='used-stack'>Stack Used:</h5>
                            HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="social-links mr-3">
                                <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                            </div>
                            <div className="social-links">
                                <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:</p>
                                <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <img src={anyyes} alt="Your Image" className="img-fluid" />
                </Col>
            </Row>
            {/* project 3 */}
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <img src={anyyes} alt="Your Image" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div className="text-center">
                        <h3 className='proj-title'>AnyYes</h3>
                        <p className='proj-text'>
                            This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: 'white' }}>
                            <h5 className='used-stack'>Stack Used:</h5>
                            HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="social-links mr-3">
                                <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                            </div>
                            <div className="social-links">
                                <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:</p>
                                <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default YourComponent;

