import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faJs, faHtml5, faCss3, faReact, faNode, faBootstrap, faStripe, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './description.css';
import portrait1 from '../../assets/DC90F5B1-793E-4326-8061-0384F1A4176E.png';
import portrait2 from '../../assets/IMG_0073.jpg';
import portrait3 from '../../assets/IMG_2637.jpg';




function Description() {
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

    const portraitImages = [portrait1, portrait2, portrait3];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className="description-container" id="description">
            <Container className="description-content">
                <Row className="align-items-center">
                    <Col xs={12} md={12} lg={6} className='mb-4'>
                        {/* carousel for portrait images */}
                        <Slider {...carouselSettings}>
                            {portraitImages.map((portrait, index) => (
                                <img
                                    key={index}
                                    src={portrait}
                                    alt={`Portrait Image ${index + 1}`}
                                    className="img-fluid description-image"
                                />
                            ))}
                        </Slider>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='texttext'>
                        {/* div containing the animation of the circle */}
                        <animated.div style={wireframeAnimation} className="wireframe-polygon"></animated.div>
                        {/* about me header */}
                        <h4 className='about-me-title'>About Me</h4>
                        {/* about me description header title */}
                        <p className="about-me-text">
                            👋 I'm Peyton Touma, a Full-Stack Web Developer based in Los Angeles, with roots in the small town of Olney, Maryland. Recently certified by the UCLA Full-Stack Web Development Bootcamp, my skill set includes JavaScript for dynamic web pages, HTML, CSS, and React for crafting engaging user interfaces. I work with Node.js, Express.js, Python, and Flask for building scalable server-side applications and manage databases using MySQL, SQLAlchemy, MongoDB, Sequelize, and Mongoose. Additionally, I have a background in graphic design, utilizing tools such as Blender, Photoshop, Illustrator, and Cinema 4D. I am proficient in front-end frameworks like Tailwind, Bootstrap, and Bulma, and use Webpack for optimized asset bundling. Furthermore, I leverage the Stripe API for e-commerce development. GitHub is my go-to for version control, ensuring efficient collaboration and code management.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
