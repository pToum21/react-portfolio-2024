import React from 'react';
import './design-portfolio.css'; // Import the CSS file

const DesignPortfolio = () => {
    // Sample data for your projects
    const projects = [
        { id: 1, name: 'Project One', imageUrl: 'path-to-image1.jpg', link: '/project-one' },
        { id: 2, name: 'Project Two', imageUrl: 'path-to-image2.jpg', link: '/project-two' },
        { id: 3, name: 'Project Three', imageUrl: 'path-to-image3.jpg', link: '/project-three' },
        // Add more projects as needed
    ];

    return (
        <div className="design-portfolio-container">
            <h1 className="design-portfolio-title">Design Portfolio</h1>
            <div className="design-portfolio-gallery-grid">
                {projects.map((project) => (
                    <a href={project.link} key={project.id} className="design-portfolio-project-item">
                        <img src={project.imageUrl} alt={project.name} />
                        <div className="design-portfolio-project-overlay">
                            <h2>{project.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DesignPortfolio;
