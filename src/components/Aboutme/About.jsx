import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import portrait from '../../assets/DC90F5B1-793E-4326-8061-0384F1A4176E.png';

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 140;
const MOUSE_REPEL_DIST = 100;
const MOUSE_REPEL_FORCE = 0.6;

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function getThemeRgb(cssVar) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  if (raw.startsWith('#')) return hexToRgb(raw);
  // handles "r, g, b" channel format
  const parts = raw.split(/[\s,]+/).map(Number);
  return { r: parts[0] || 0, g: parts[1] || 0, b: parts[2] || 0 };
}


function initParticles(w, h) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.5 + 0.6,
    accent: Math.random() < 0.25,
  }));
}

function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const metaRef = useRef(null);
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    // GSAP entrance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(headlineRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 })
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(metaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
    }, containerRef);

    // Particle canvas
    const canvas = canvasRef.current;
    if (!canvas) return () => ctx.revert();
    const c = canvas.getContext('2d');

    let w = canvas.parentElement.offsetWidth;
    let h = canvas.parentElement.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    let particles = initParticles(w, h);
    let animFrame;

    const onResize = () => {
      w = canvas.parentElement.offsetWidth;
      h = canvas.parentElement.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      particles = initParticles(w, h);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener('resize', onResize);
    canvas.parentElement.addEventListener('mousemove', onMouseMove);
    canvas.parentElement.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      c.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update positions
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST) {
          const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST * MOUSE_REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Dampen velocity
        p.vx *= 0.97;
        p.vy *= 0.97;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Read theme colors on each frame so switching is instant
      const ACCENT = getThemeRgb('--color-accent-rgb');
      const DIM = getThemeRgb('--color-text');

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.2;
            const useAccent = a.accent || b.accent;
            const col = useAccent ? ACCENT : DIM;
            c.beginPath();
            c.moveTo(a.x, a.y);
            c.lineTo(b.x, b.y);
            c.strokeStyle = `rgba(${col.r},${col.g},${col.b},${alpha})`;
            c.lineWidth = useAccent ? 0.8 : 0.5;
            c.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const col = p.accent ? ACCENT : DIM;
        const alpha = p.accent ? 0.65 : 0.35;
        c.beginPath();
        c.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        c.fillStyle = `rgba(${col.r},${col.g},${col.b},${alpha})`;
        c.fill();
      }

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      ctx.revert();
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', onResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', onMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={containerRef} id="top" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Deep radial vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 40% 50%, transparent 30%, rgba(var(--color-bg-rgb), 0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Accent glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(var(--color-accent-rgb),0.09) 0%, transparent 65%)',
          top: '-10%',
          right: '-10%',
          zIndex: 1,
        }}
      />

      {/* Hero main content */}
      <div className="relative flex-1 flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-12" style={{ zIndex: 2 }}>
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Text block */}
          <div className="flex-1 max-w-4xl">
            <div ref={metaRef} className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-accent uppercase">Open to Frontend &amp; Full-Stack roles</span>
              <span className="block w-8" style={{ height: '1px', backgroundColor: 'var(--color-accent)' }} />
              <span className="font-mono text-xs tracking-widest text-muted uppercase">Remote or Washington, DC</span>
            </div>

            <h1
              ref={headlineRef}
              className="font-display font-extrabold leading-none tracking-tight mb-6 text-text"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
            >
              Peyton<br />Touma
            </h1>

            <div ref={subRef} className="flex flex-col gap-4">
              <p className="font-mono text-sm md:text-base text-muted max-w-xl leading-relaxed">
                Frontend Software Engineer — 5+ years building scalable React &amp; TypeScript UIs in production.
                Passionate about clean interfaces and mission-focused software.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-2">
                <a
                  href="https://www.linkedin.com/in/peyton-touma-b666a7281/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="https://github.com/pToum21"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="mailto:peytontouma@gmail.com"
                  className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors"
                >
                  peytontouma@gmail.com
                </a>
                <a
                  href="tel:2404495594"
                  className="font-mono text-xs tracking-widest text-muted uppercase hover:text-text transition-colors"
                >
                  (240) 449-5594
                </a>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <HashLink
                  to="/#portfolio"
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 no-underline transition-all duration-300"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}
                >
                  View Work ↓
                </HashLink>
                <a
                  href="/resume"
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-border text-text hover:border-accent hover:text-accent transition-all duration-300 no-underline"
                >
                  Download Resume →
                </a>
              </div>
            </div>
          </div>

          {/* Portrait — desktop only */}
          <div
            className="hidden lg:block flex-shrink-0 relative"
            style={{ width: '240px', height: '300px' }}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={portrait}
                alt="Peyton Touma"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%)' }}
              />
            </div>
            <div
              className="absolute pointer-events-none"
              style={{ inset: 0, border: '1px solid rgba(var(--color-accent-rgb),0.3)', transform: 'translate(8px, 8px)', zIndex: -1 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={scrollRef} className="relative flex justify-center pb-8" style={{ zIndex: 2 }}>
        <HashLink to="/#about" className="flex flex-col items-center gap-2 text-muted hover:text-text transition-colors no-underline">
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" size="sm" />
        </HashLink>
      </div>

      {/* About bio block */}
      <div id="about" className="relative px-6 md:px-12 lg:px-20 py-16 border-t border-border" style={{ zIndex: 2 }}>
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-6 block">/ About</span>
        <p className="font-display text-lg md:text-xl lg:text-2xl text-text leading-relaxed font-medium max-w-3xl">
          Frontend Software Engineer and{' '}
          <span className="text-accent">creative technologist</span>. I build
          production-grade React &amp; TypeScript applications, integrate AI, develop Shopify stores,
          and have had my{' '}
          <span className="text-accent">3D animations featured in film productions</span>. I bring
          an artist&apos;s eye to every interface, because the best engineers think like designers.
          Based in Washington, DC. Always building something.
        </p>
      </div>
    </section>
  );
}

export default Hero;
