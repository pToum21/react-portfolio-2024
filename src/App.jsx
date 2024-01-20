// BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/Aboutme/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Description from './components/Description/Description.jsx';
import Contact from './components/Contactme/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Resume from './components/Resume/Resume.jsx';
import './styles.css';


function App() {
 return (
  <Router>
    <Header />
   <Routes>
    <Route path="/" element={
     <>     
      <About />
      <Description />
      <Portfolio />
      <Contact />    
     </>
    } />
    <Route path="/resume" element={<Resume />} />
   </Routes>
   <Footer />
  </Router>
 )
}

export default App