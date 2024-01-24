// Bubbles.jsx
import React from 'react';
import './bubbles.css';

function Bubbles() {
    return (
        <div>
            {/* Top left bubbles */}
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

            {/* Bottom right bubbles */}
            <div className='bubble-container bottom-right'>
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
        </div>
    );
}

export default Bubbles;


