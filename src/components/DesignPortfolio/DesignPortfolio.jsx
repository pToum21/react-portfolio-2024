import React from 'react';
import './design-portfolio.css';

// Import local images
import cutePortals from '../../assets/design-projects/cute-portals/Monster Portals - Google Chrome 8_18_2024 4_14_56 PM.png';
import blickyIo from '../../assets/design-projects/blicky.io/blik.png';
import liber from '../../assets/design-projects/liber/lib.png';
// import projectFour from './assets/images/project-four.jpg';
// import projectFive from './assets/images/project-five.jpg';
// import projectSix from './assets/images/project-six.jpg';
// import projectSeven from './assets/images/project-seven.jpg';
// import projectEight from './assets/images/project-eight.jpg';

const DesignPortfolio = () => {
    const projects = [
        { id: 1, name: 'Cute Portals', imageUrl: cutePortals, link: '/project-one' },
        { id: 2, name: 'Blicky.io', imageUrl: blickyIo, link: '/project-two' },
        { id: 3, name: 'Liber 3D', imageUrl: liber, link: '/project-three' },
        // { id: 4, name: 'Project Four', imageUrl: projectFour, link: '/project-four' },
        // { id: 5, name: 'Project Five', imageUrl: projectFive, link: '/project-five' },
        // { id: 6, name: 'Project Six', imageUrl: projectSix, link: '/project-six' },
        // { id: 7, name: 'Project Seven', imageUrl: projectSeven, link: '/project-seven' },
        // { id: 8, name: 'Project Eight', imageUrl: projectEight, link: '/project-eight' },
    ];

    return (
        <div className="design-portfolio-container">
            <h1 className="design-portfolio-title">Design Portfolio</h1>
            <h2 className='design-portfolio-text'>
                Welcome to my Art Gallery! This collection showcases a mix of my design work and 3D artwork, many of which have been integrated into websites and applications. Feel free to click on any of the images to explore each piece in detail and gain a deeper understanding of my creative process and implementation.
            </h2>
            <div className="design-portfolio-collage">
                {projects.map((project) => (
                    <a href={project.link} key={project.id} className="design-portfolio-project-item">
                        <img src={project.imageUrl} alt={project.name} className="design-portfolio-image" />
                        <div className="design-portfolio-project-overlay">
                            <h2 className="design-portfolio-project-title">{project.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DesignPortfolio;
