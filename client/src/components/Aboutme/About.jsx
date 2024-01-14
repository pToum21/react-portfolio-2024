import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import avatar from '../../assets/cartoon_LOAF-ezgif.com-webp-to-jpg-converter.jpg';
import { useEffect } from 'react';
import './about.css';

function About() {
    // this is for the animation in the background
    useEffect(() => {
        const keyframes = `
          @keyframes flow {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) translateX(100vw) rotate(720deg);
            }
          }
        `;

        const styleTag = document.createElement('style');
        styleTag.innerHTML = keyframes;
        document.head.appendChild(styleTag);

        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    // this sets random colors to each dots
    const getRandomColor = () => {
        return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    };

    return (
        <div className="about-container">
            <div className="dot-container">
                {/* sets random colors for each cycle */}
                {Array.from({ length: 200 }, (_, index) => {
                    const dotStyle = {
                        backgroundColor: getRandomColor(),
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `-${Math.random() * 20}s`,
                    };
                    return <div className="dot" style={dotStyle} key={index}></div>;
                })}
            </div>
            <div className="container text-center mt-3">
                <h1 className='first-name'>Peyton Touma</h1>
                <p className='personal-title'>Full-Stack Web Developer and Software Engineer</p>
                <p className='about-me'>
                    I'm a passionate full-stack web developer based in Los Angeles, California. 📍
                </p>

                <div className="mt-3 ">
                    <a className="social-links" href="https://www.linkedin.com/in/peyton-touma-b666a7281/">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-4" />
                    </a>
                    <a className="social-links" href="https://github.com/pToum21">
                        <FontAwesomeIcon icon={faGithub} className="fa-2x mx-4" />
                    </a>
                    <a className="social-links" href="https://discordapp.com/users/775148641014775808">
                        <FontAwesomeIcon icon={faDiscord} className="fa-2x mx-4" />
                    </a>
                </div>

                <img src={avatar} alt="avatar image" className="rounded-circle img-fluid mt-4" style={{ width: '300px', height: '300px', marginRight: '20px' }} />
            </div>
        </div>
    );
}

export default About;
