import React from 'react';
import './design-portfolio.css';

const DesignPortfolio = () => {
    const projects = [
        { id: 1, name: 'Project One', imageUrl: 'https://via.placeholder.com/300x300', link: '/project-one' },
        { id: 2, name: 'Project Two', imageUrl: 'https://via.placeholder.com/300x400', link: '/project-two' },
        { id: 3, name: 'Project Three', imageUrl: 'https://via.placeholder.com/400x300', link: '/project-three' },
        { id: 4, name: 'Project Four', imageUrl: 'https://via.placeholder.com/200x300', link: '/project-four' },
        { id: 5, name: 'Project Five', imageUrl: 'https://via.placeholder.com/300x200', link: '/project-five' },
        { id: 6, name: 'Project Six', imageUrl: 'https://via.placeholder.com/350x350', link: '/project-six' },
        { id: 7, name: 'Project Seven', imageUrl: 'https://via.placeholder.com/300x400', link: '/project-seven' },
        { id: 8, name: 'Project Eight', imageUrl: 'https://via.placeholder.com/250x250', link: '/project-eight' },
    ];

    return (
        <div className="design-portfolio-container">
            <h1 className="design-portfolio-title">Design Portfolio</h1>
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
