import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import avatar from '../../assets/cartoon_LOAF-ezgif.com-webp-to-jpg-converter.jpg';
import './about.css';

function About() {
    const [showTextBox, setShowTextBox] = useState(false);
    const [randomText, setRandomText] = useState('');

    // Array of different texts
    const textOptions = [
        'Hi Nice To Meet You',
        'Ow that hurt a little',
        'okay i get it you like to hit me',
        'please just scroll down',
    ];

    useEffect(() => {
        // Handle random text generation when the text box is rendered
        if (showTextBox) {
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            setRandomText(textOptions[randomIndex]);
        }
    }, [showTextBox]);

    const handleImageClick = () => {
        setShowTextBox(!showTextBox);
    };

    useEffect(() => {
        // Display "Hi Nice To Meet You" on the first click
        if (showTextBox && randomText === '' && textOptions.length > 0) {
            setRandomText('Hi Nice To Meet You');
        }
    }, [showTextBox, randomText, textOptions]);

    return (
        <div className="about-container" id="about-me">
            <div className="dot-container">
                {/* sets random colors for each cycle */}
                {Array.from({ length: 200 }, (_, index) => {
                    const dotStyle = {
                        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `-${Math.random() * 20}s`,
                    };
                    return <div className="dot" style={dotStyle} key={index}></div>;
                })}
            </div>
            {/* actual about me component */}
            <div className="container text-center mt-3">
                <h1 className='first-name'>Peyton Touma</h1>
                <p className='personal-title'>Full-Stack Web Developer and Software Engineer</p>
                <p className='about-me'>
                    I'm a passionate full-stack web developer based in Los Angeles, California. 📍
                </p>

                <div className="mt-3 social-links-container">
                    <a className="social-links" href="https://www.linkedin.com/in/peyton-touma-b666a7281/">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://github.com/pToum21">
                        <FontAwesomeIcon icon={faGithub} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://discordapp.com/users/775148641014775808">
                        <FontAwesomeIcon icon={faDiscord} className="fa-1x socail-icons" />
                    </a>
                </div>

                {/* Avatar image with click event */}
                <img
                    src={avatar}
                    alt="avatar image"
                    className="rounded-circle img-fluid mt-5"
                    style={{ width: '300px', height: '300px', cursor: 'pointer' }}
                    onClick={handleImageClick}
                />

                {/* Render text box conditionally */}
                {showTextBox && (
                    <div className="text-box cartoon-bubble">
                        <p>{randomText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
