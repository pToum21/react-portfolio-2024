import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
        {/* Left */}
        <div className="flex flex-col gap-1">
          <span className="font-display font-bold text-sm text-text tracking-widest uppercase">
            Peyton Touma
          </span>
          <span className="font-mono text-xs text-muted tracking-wide">
            Frontend Software Engineer
          </span>
          <span className="font-mono text-xs text-dim tracking-wide">
            © {year} — All rights reserved
          </span>
        </div>

        {/* Center: nav links */}
        <div className="hidden md:flex items-center gap-8">
          <HashLink to="/#about" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline">About</HashLink>
          <HashLink to="/#experience" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline">Experience</HashLink>
          <HashLink to="/#portfolio" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline">Projects</HashLink>
          <HashLink to="/#skills" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline">Skills</HashLink>
          <HashLink to="/#contact" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline">Contact</HashLink>
          <RouterLink to="/certifications" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline">Certifications</RouterLink>
        </div>

        {/* Right: socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/peyton-touma-b666a7281/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/pToum21"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline"
          >
            GitHub ↗
          </a>
          <RouterLink
            to="/resume"
            className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors no-underline"
          >
            Resume ↗
          </RouterLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
