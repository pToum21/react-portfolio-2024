// BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import About from './components/Aboutme/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Description from './components/Description/Description.jsx';
import Contact from './components/Contactme/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

import './styles.css';


function App() {
  return (
    <>
      {/* components */}
      <Header />
      <About />
      <Description />
      <Portfolio />
      <Contact />
      <Footer />    
    </>
  )
}

export default App
