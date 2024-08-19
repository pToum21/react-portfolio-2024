import React from 'react';
import './design-portfolio.css';

// Import local images and videos
import cutePortals from '../../assets/design-projects/cute-portals/Monster Portals - Google Chrome 8_18_2024 4_14_56 PM.png';
import blickyIo from '../../assets/design-projects/blicky.io/blik.png';
import liber from '../../assets/design-projects/liber/lib.png';
import Certain from '../../assets/design-projects/4Certain/4certain.png';
import gutsSword from '../../assets/design-projects/guts-sword/guts-sword-rotation.mp4';
import helloKitty from '../../assets/design-projects/hello-kitty/hello-kity-1.png'
import teddyHippo from '../../assets/design-projects/hippo/teddy-hippo-1.png'


const DesignPortfolio = () => {
    const projects = [
        { id: 1, name: 'Cute Portals', imageUrl: cutePortals, link: '/project-one', type: 'image' },
        { id: 2, name: 'Blicky.io', imageUrl: blickyIo, link: '/project-two', type: 'image' },
        { id: 3, name: 'Liber 3D', imageUrl: liber, link: '/project-three', type: 'image' },
        { id: 4, name: '3D Face Scan', imageUrl: Certain, link: '/project-four', type: 'image' },
        { id: 5, name: 'Guts Sword', videoUrl: gutsSword, link: '/project-five', type: 'video' },
        { id: 6, name: 'Chubby Hello Kitty', imageUrl: helloKitty, link: '/project-six', type: 'image' },
        { id: 7, name: 'Hippo Plushy', imageUrl: teddyHippo, link: '/project-seven', type: 'image' },
    ];

    return (
        <div className="design-portfolio-container">
            <h1 className="design-portfolio-title">Design Portfolio</h1>
            <h2 className="design-portfolio-text">
                Welcome to my Art Gallery! This collection showcases a mix of my design work and 3D artwork, many of which have been integrated into websites and applications. Feel free to click on any of the images to explore each piece in detail and gain a deeper understanding of my creative process and implementation.
            </h2>
            <div className="design-portfolio-collage">
                {projects.map((project) => (
                    <a href={project.link} key={project.id} className="design-portfolio-project-item">
                        {project.type === 'image' ? (
                            <img src={project.imageUrl} alt={project.name} className="design-portfolio-image" />
                        ) : (
                            <video src={project.videoUrl} className="design-portfolio-video" autoPlay loop muted />
                        )}
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
