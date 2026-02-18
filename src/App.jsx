import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Hero from './components/Aboutme/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import TechStack from './components/Techstack/Techstack.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contactme/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Resume from './components/Resume/Resume.jsx';
import DesignPortfolio from './components/DesignPortfolio/DesignPortfolio.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import CutePortals from './components/DesignPortfolio/CutePortals/CutePortals.jsx';
import Cursor from './components/Cursor/Cursor.jsx';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';
import CRTEffect from './components/CRTEffect/CRTEffect.jsx';
import Loader from './components/Loader/Loader.jsx';
import { useTheme } from './hooks/useTheme.js';
import './styles.css';

function AppContent() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Cursor />
      <ThemeToggle />
      {theme === 'fallout' && <CRTEffect />}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Experience />
              <Portfolio />
              <Testimonials />
              <TechStack />
              <Contact />
            </main>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/design-portfolio" element={<DesignPortfolio />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/cute-portals" element={<CutePortals />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function App() {
  return <AppContent />;
}

export default App;
