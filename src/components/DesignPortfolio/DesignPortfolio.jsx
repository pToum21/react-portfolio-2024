import React from 'react';
import './design-portfolio.css'; // Import the CSS file

const DesignPortfolio = () => {
    return (
        <div>
            {/* Overlay for "Coming Soon" */}
            <div className="overlay">
                <div>
                    <h1>Under Construction</h1>
                    <p>Our design portfolio page is currently being updated. Please check back later!</p>
                </div>
            </div>

            <h1>Design Portfolio</h1>
        </div>
    );
};

export default DesignPortfolio;
