import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../assets/cartoon_LOAF-ezgif.com-webp-to-jpg-converter.jpg';
import avatar2 from '../../assets/IMG_0113.jpg';
import './about.css';

function About() {
    const [showTextBox, setShowTextBox] = useState(false);
    const [randomText, setRandomText] = useState('');
    const [currentImage, setCurrentImage] = useState(avatar1);

    // Array of different texts
    const textOptions = [
        'okay that hurt a little but its okay',
        'ow, um hi?',
        'yea i get it you like to hit me lets move on now',
        'please dont get stuck here',
        'omg there is more to this portfolio then punching the dev in the face',
        'this is getting to be annoying',
        'help!!!!'
    ];

    useEffect(() => {
        // Handle random text generation when the text box is rendered
        if (showTextBox) {
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            setRandomText(textOptions[randomIndex]);
        }
    }, [showTextBox]);

    const handleImageClick = () => {
        // Toggle text box visibility
        setShowTextBox(!showTextBox);

        // Change the image with a swipe animation
        setCurrentImage(currentImage === avatar1 ? avatar2 : avatar1);
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
            <div className="container text-center mt-5">
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
                    src={currentImage}
                    alt="avatar image"
                    className="rounded-circle img-fluid mt-5 swipe-image"
                    style={{
                        width: '300px',
                        height: '300px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '5px solid transparent',
                        position: 'relative',
                        animation: 'innerBorderAnimation 4s infinite alternate, outerRingAnimation 6s infinite linear',
                    }}
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
