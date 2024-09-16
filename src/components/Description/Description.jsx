import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
                        👋 Hi, I’m Peyton Touma, a Full-Stack Web Developer based in Los Angeles with roots in Olney, Maryland. I'm currently exploring new opportunities while working part-time as a Software Engineer at Impact Capitol DC, where I am developing the front end and UI for ALFReD AI, an advanced tool designed for the real estate industry.
                            I recently completed the UCLA Full-Stack Web Development Bootcamp, where I honed my skills in JavaScript, HTML, CSS, and React to create dynamic and engaging web interfaces. My backend expertise includes Node.js, Express.js, Python, and Flask, with experience in managing databases using MySQL, SQLAlchemy, MongoDB, Sequelize, and Mongoose.
                            In addition to my development skills, my background in graphic design is supported by tools like Blender, Photoshop, Illustrator, and Cinema 4D. I’m proficient in front-end frameworks such as Tailwind, Bootstrap, and Bulma, and I use Webpack for optimized asset bundling. I also work with the Stripe API for e-commerce solutions and rely on GitHub for version control and efficient code management.
                            At Impact Capitol DC, I focus on developing intuitive and efficient user interfaces for ALFReD AI, enhancing its functionality for real estate professionals.
                            If you’re seeking a dedicated and versatile web developer with a passion for innovation and a robust technical background, I’d love to connect!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
