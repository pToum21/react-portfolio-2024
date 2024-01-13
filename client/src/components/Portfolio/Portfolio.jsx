import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import anyyes from '../../assets/anyyes.png';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const YourComponent = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <img src={anyyes} alt="Your Image" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div className="text-center">
                        <h3>AnyYes</h3>
                        <p>
                            This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: 'white' }}>
                            <h5>Stack Used:</h5>
                            HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                        </div>
                        <div className="d-flex justify-content-center">
                            <a className="social-links" href="https://anyyes-3bf9b8d1cf29.herokuapp.com" style={{ fontSize: '0.8rem', color: 'white', textDecoration: 'none' }}>
                                <p>Deployed Demo:</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-2x mx-1" />
                            </a>
                            <a className="social-links" href="https://github.com/pToum21/anyYes" style={{ fontSize: '0.8rem', color: 'white', textDecoration: 'none' }}>
                                <p>GitHub Repo:</p>
                                <FontAwesomeIcon icon={faGithub} className="fa-2x mx-1" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default YourComponent;
