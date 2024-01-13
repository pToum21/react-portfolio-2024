import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import anyyes from '../../assets/anyyes.png';


const YourComponent = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <img src={anyyes} alt="Your Image" className="img-fluid" />
                </Col>
                <Col xs={12} md={6}>
                    <h3>AnyYes</h3>
                    <p>
                        This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                    </p>
                    <div style={{ fontSize: '0.8rem', color: 'white' }}>
                        <h5>Stack Used:</h5>
                        HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                    </div>
                    <div>
                        <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/">Deployed Demo</a>
                        <a href="https://github.com/pToum21/anyYes">GitHub Link</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default YourComponent;
