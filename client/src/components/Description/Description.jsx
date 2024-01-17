import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { faJs, faHtml5, faCss3, faReact, faNode, faBootstrap, faStripe, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './description.css';
import portrait from '../../assets/DC90F5B1-793E-4326-8061-0384F1A4176E.png';

function Description() {
    // for spining real me circle animation
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const wireframeAnimation = useSpring({
        transform: `rotate(${scrollY / 5}deg)`,
    });

    // actual return for the description component
    return (
        <div className="description-container" id="description">
            <Container fluid className="description-content">
                <div className="about-me-text">
                    <div className="mt-3 ">
                        {/* tech stack icons */}
                        <p className="tech-stack"> Tech Stack:
                            <FontAwesomeIcon icon={faJs} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faHtml5} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faCss3} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faReact} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faNode} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faBootstrap} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faStripe} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faFigma} className="fa-1x mx-2" />
                            <FontAwesomeIcon icon={faGithub} className="fa-1x mx-2" />
                            <i className="devicon-mysql-plain fa-1x mx-2"></i>
                            <i className="devicon-mongodb-plain fa-1x mx-2"></i>
                            <i className="devicon-sequelize-plain fa-1x mx-2"></i>
                            <i className="devicon-express-original fa-1x mx-2"></i>
                            <i className="devicon-bash-plain fa-1x mx-2"></i>
                            <i className="devicon-blender-original fa-1x mx-2"></i>
                            <i className="devicon-photoshop-plain fa-1x mx-2"></i>
                            <i className="devicon-illustrator-plain fa-1x mx-2"></i>
                        </p>
                    </div>
                </div>
                <Row className="align-items-center">
                    <Col xs={12} md={12} lg={6} className='mb-4'>
                        {/* real me image */}
                        <img src={portrait} alt="Description Image" className="img-fluid description-image" />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        {/* div containing the animation of the circle */}
                        <animated.div style={wireframeAnimation} className="wireframe-polygon"></animated.div>
                        {/* about me header */}
                        <h4 className='about-me-title'>About Me</h4>
                        {/* about me description header title */}
                        <p className="about-me-text">
                            👋 I'm Peyton Touma, a Full-Stack Web Developer based in Los Angeles, with roots in the small town of Olney, Maryland. Currently enrolled in the UCLA Full-Stack Web Development Bootcamp, I'll be completing the course in February 2024. My skill set includes JavaScript for dynamic web pages, HTML, CSS, and React for crafting engaging user interfaces. I work with Node.js and Express.js for building scalable server-side applications and manage databases using MySQL, MongoDB, Sequelize, and Mongoose. Additionally, I have a background in graphic design, utilizing tools such as Blender, Photoshop, Illustrator, and Cinema 4D. I am proficient in front-end frameworks like Tailwind, Bootstrap, and Bulma, and use Webpack for optimized asset bundling. Furthermore, I leverage the Stripe API for e-commerce development. GitHub is my go-to for version control, ensuring efficient collaboration and code management.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
