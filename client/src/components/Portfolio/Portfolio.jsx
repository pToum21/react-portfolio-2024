import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './porfilio.css';
import anyyes from '../../assets/anyyes.png';
import viewacar from '../../assets/View a Car - Google Chrome 1_13_2024 4_44_11 PM.png';
import techblog from '../../assets/techBlog.png'
import weatherapp from '../../assets/weatherApp.png'

const Portfolio = () => {
    return (
        <>
            <h1 className='portfolio-title'>Portfolio</h1>
            <h2 className='port-header'>Each Project is a unique piece of Web Development <span className='emoji'>🧩</span></h2>
            {/* container holding all projects and descs */}
            <Container style={{ marginTop: '50px' }}>
                {/* project 1 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={anyyes}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{ width: '100%'}}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>AnyYes <span className='emoji'>🎮</span></h3>
                            <p className='proj-text'>
                                This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://github.com/pToum21/anyYes" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* project 2 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>TechBlog <span className='emoji'>🖥️</span></h3>
                            <p className='proj-text'>
                                This is a full-stack technology blog that empowers users to seamlessly execute all CRUD operations. Additionally, users can engage in insightful discussions through comments on posts and have the capability to modify their personalized dashboards for an enhanced and tailored experience.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS (BootStrap), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, bcrypt (for password hashing), dotenv.
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://tech-blogger-the-full-exp-603c6ae302d3.herokuapp.com/" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://github.com/pToum21/full-stack-tech-blog" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={techblog}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{width: '100%'}}
                        />
                    </Col>
                </Row>
                {/* project 3 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={viewacar}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{width: '100%'}}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>View A Car <span className='emoji'>🚗</span></h3>
                            <p className='proj-text'>
                                A blog-style website dedicated to providing users with comprehensive insights into automobiles, encompassing not only detailed views of cars but also additional knowledge and historical context surrounding each vehicle.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                React, HTML, CSS, bootstrap and bootstrap-react, JavaScript
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://github.com/pToum21/view-a-car" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* project 4 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Whats The Weather <span className='emoji'>☔</span></h3>
                            <p className='proj-text'>
                                Retrieve weather data for any city, providing access to current weather conditions, a five-day forecast, and the present date. Seamlessly toggle between metric and imperial units, accompanied by a persistent search history feature.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS, JavaScript, bootstrap, weatherApi
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://ptoum21.github.io/weatherapp-2/" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://github.com/pToum21/weatherapp-2" style={{ fontSize: '0.8rem', color: 'white', marginBottom: 0 }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={weatherapp}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{width: '100%'}}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Portfolio;
