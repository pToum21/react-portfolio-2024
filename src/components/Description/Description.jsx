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
                            👋 Hi, I’m Peyton Touma, a Full-Stack Web Developer based in Los Angeles with roots in Olney, Maryland. I’m currently on the lookout for new opportunities, but in the meantime, I’m working part-time at Code Ninjas as a Code Instructor.

                            I recently completed the UCLA Full-Stack Web Development Bootcamp, where I gained expertise in JavaScript, HTML, CSS, and React for dynamic and engaging web interfaces. My backend skills include Node.js, Express.js, Python, and Flask, and I’m adept at managing databases with MySQL, SQLAlchemy, MongoDB, Sequelize, and Mongoose.

                            My background in graphic design is well-supported by tools such as Blender, Photoshop, Illustrator, and Cinema 4D. I’m also skilled in front-end frameworks like Tailwind, Bootstrap, and Bulma, and I use Webpack for optimized asset bundling. Additionally, I work with the Stripe API for e-commerce solutions and rely on GitHub for version control and efficient code management.

                            At Code Ninjas, I teach students HTML, CSS, and JavaScript, covering both foundational and advanced topics. I also lead a 3D design course using Cinema 4D and Blender, mentoring students through the creation of detailed 3D models and helping them develop their projects.

                            If you’re looking for a dedicated and versatile web developer with a passion for teaching and a solid technical background, I’d love to connect!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
