import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faJs, faHtml5, faCss3, faReact, faNode, faBootstrap, faStripe, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './description.css';
import portrait from '../../assets/IMG_2452.jpg';

function Description() {
    return (
        <div className="description-container">
            <Container fluid className="description-content">
                <div className="about-me-text">
                    <div className="mt-3 ">
                        <p className="tech-stack">
                            My Tech Stack:
                            <FontAwesomeIcon icon={faJs} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faHtml5} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faCss3} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faReact} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faDatabase} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faNode} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faBootstrap} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faStripe} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faFigma} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faGithub} className="fa-1x mx-2" />
                        </p>
                    </div>
                </div>
                <Row>
                    <Col md={12} lg={6} className='mb-4'>
                        <img src={portrait} alt="Description Image" className="img-fluid description-image" />
                    </Col>
                    <Col md={12} lg={6}>
                        <h4 className='about-me-title'>About Me</h4>
                        <p className="about-me-text">
                            I'm Peyton Touma, a Full-Stack Web Developer based in Los Angeles, with roots in the small town of Olney, Maryland. Currently enrolled in the UCLA Full-Stack Web Development Bootcamp, I'll be completing the course in February 2024. My skill set includes JavaScript for dynamic web pages, HTML, CSS, and React for crafting engaging user interfaces. I work with Node.js and Express.js for building scalable server-side applications, and manage databases using MySQL, MongoDB, Sequelize, and Mongoose. Additionally, I'm proficient in front-end frameworks like Tailwind, Bootstrap, and Bulma, and use Webpack for optimized asset bundling as well as using the stripe api for e-commerce development. GitHub is my go-to for version control, ensuring efficient collaboration and code management.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
