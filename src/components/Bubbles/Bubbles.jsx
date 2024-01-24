import React from 'react';
import './bubbles.css';

function Bubbles() {
    // Check if the screen width is less than a certain breakpoint (e.g., 600px)
    const isSmallScreen = window.innerWidth < 600;

    // Conditionally render the component based on screen size
    return isSmallScreen ? null : (
        <div className='bubble-container'>
            <div className='bubble'>
                <span className='blue'></span>
                <span className='red'></span>
                <span className='yellow'></span>
                <span className='red2'></span>
                <span className='white'></span>
            </div>
            <div className='bubble'>
                <span className='blue'></span>
                <span className='red'></span>
                <span className='yellow'></span>
                <span className='red2'></span>
                <span className='white'></span>
            </div>
            <div className='bubble'>
                <span className='blue'></span>
                <span className='red'></span>
                <span className='yellow'></span>
                <span className='red2'></span>
                <span className='white'></span>
            </div>
        </div>
    );
}

export default Bubbles;
