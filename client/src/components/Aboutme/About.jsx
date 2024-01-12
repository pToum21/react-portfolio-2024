import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import avatar from '../../assets/cartoon_LOAF-ezgif.com-webp-to-jpg-converter.jpg'
import { useEffect } from 'react';

import './about.css'

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
        return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`; // Random RGBA color with 0.5 opacity
    };

    return (
        <>

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
            <div className="container text-center mt-5">
                <h1>Peyton Touma</h1>
                <p>Full-Stack Web Developer and Software Engineer</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque, incidunt possimus placeat sit dolorum praesentium aperiam laudantium unde reprehenderit distinctio dicta nobis dolorem voluptate velit perspiciatis quibusdam iste veritatis!
                </p>

                <div className="mt-3">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-1" />
                    <FontAwesomeIcon icon={faGithub} className="fa-2x mx-1" />
                    <FontAwesomeIcon icon={faDiscord} className="fa-2x mx-1" />
                </div>

                <img src={avatar} alt="avatar image" className="rounded-circle img-fluid mt-3" style={{ width: '200px', height: '200px' }} />
            </div>
        </>

    );
}

export default About;