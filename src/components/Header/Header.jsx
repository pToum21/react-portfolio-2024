import { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { gsap } from 'gsap';
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isHome = location.pathname === '/';

  const navLinkClass = "font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline";

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? `rgba(var(--color-bg-rgb), 0.92)` : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      }}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo */}
        {isHome ? (
          <HashLink to="/#top" className="font-display font-bold text-sm tracking-widest text-text uppercase no-underline">
            Peyton Touma
          </HashLink>
        ) : (
          <RouterLink to="/" className="font-display font-bold text-sm tracking-widest text-text uppercase no-underline">
            Peyton Touma
          </RouterLink>
        )}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <HashLink to="/#about" className={navLinkClass}>About</HashLink>
              <HashLink to="/#experience" className={navLinkClass}>Experience</HashLink>
              <HashLink to="/#portfolio" className={navLinkClass}>Projects</HashLink>
              <HashLink to="/#skills" className={navLinkClass}>Skills</HashLink>
              <HashLink to="/#contact" className={navLinkClass}>Contact</HashLink>
            </>
          ) : (
            <RouterLink to="/" className={navLinkClass}>Home</RouterLink>
          )}
          <RouterLink to="/design-portfolio" className={navLinkClass}>Designs</RouterLink>
          <RouterLink to="/certifications" className={navLinkClass}>Certs</RouterLink>

          <RouterLink
            to="/resume"
            className="font-mono text-xs tracking-widest uppercase px-4 py-2 no-underline transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text)'; }}
          >
            Resume
          </RouterLink>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none' }}
          >
            <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} style={{ backgroundColor: 'var(--color-text)' }} />
            <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--color-text)' }} />
            <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} style={{ backgroundColor: 'var(--color-text)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{
          backgroundColor: `rgba(var(--color-bg-rgb), 0.98)`,
          borderTop: menuOpen ? '1px solid var(--color-border)' : 'none',
        }}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {isHome ? (
            <>
              <HashLink to="/#about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</HashLink>
              <HashLink to="/#experience" className={navLinkClass} onClick={() => setMenuOpen(false)}>Experience</HashLink>
              <HashLink to="/#portfolio" className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</HashLink>
              <HashLink to="/#skills" className={navLinkClass} onClick={() => setMenuOpen(false)}>Skills</HashLink>
              <HashLink to="/#contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</HashLink>
            </>
          ) : (
            <RouterLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</RouterLink>
          )}
          <RouterLink to="/design-portfolio" className={navLinkClass} onClick={() => setMenuOpen(false)}>Designs</RouterLink>
          <RouterLink to="/certifications" className={navLinkClass} onClick={() => setMenuOpen(false)}>Certifications</RouterLink>
          <RouterLink to="/resume" className={navLinkClass} onClick={() => setMenuOpen(false)}>Resume</RouterLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
