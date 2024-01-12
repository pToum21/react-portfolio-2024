// BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/Aboutme/About.jsx';

import './styles.css';

function App() {
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

      {/* components */}
      <Header />
      <About />
    </>
  )
}

export default App
