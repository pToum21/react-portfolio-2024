import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faNode, faBootstrap, faStripe, faFigma, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TechStackCarousel.css';

const TechStackCarousel = () => {
  const fontAwesomeIcons = [
    faJs, faHtml5, faCss3, faReact, faNode,
    faBootstrap, faStripe, faFigma, faGithub, faPython
  ];

  const devIcons = [
    'devicon-mysql-plain', 'devicon-mongodb-plain', 'devicon-sequelize-plain',
    'devicon-express-original', 'devicon-bash-plain', 'devicon-blender-original',
    'devicon-photoshop-plain', 'devicon-illustrator-plain', 'devicon-flask-original',
    'devicon-sqlalchemy-plain', 'devicon-threejs-original', 'devicon-materialui-plain',
    'devicon-materializecss-plain', 'devicon-tailwindcss-original', 'devicon-bulma-plain',
    'devicon-amazonwebservices-plain-wordmark'
  ];

  const combinedIcons = [...fontAwesomeIcons, ...devIcons];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,

  };

  return (
    <div className="tech-stack-carousel-container mb-4">
      <div className="mt-3">
        <p className="tech-stack-heading"> Tech Stack</p>
        <Slider {...settings}>
          {combinedIcons.map((icon, index) => (
            <div key={index} className="icon-container">
              {typeof icon === 'string' ? (
                <i className={`${icon} fa-3x mx-2 tech-stack-icons`}></i>
              ) : (
                <FontAwesomeIcon icon={icon} className="fa-3x mx-2 tech-stack-icons" />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechStackCarousel;
