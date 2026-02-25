import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// ALFReD
import alfredHome from '../../assets/port-proj-images/alfred-ui-images/{2B973A6F-BD62-4DD7-B86F-79EBB0553DE3}.png';
import alfredChart from '../../assets/port-proj-images/alfred-ui-images/{4B472F48-779F-4BB9-8523-045CAC11E2EF}.png';
import alfredChat from '../../assets/port-proj-images/alfred-ui-images/{491324EF-034E-4E24-9A9C-AC45C0CBE0E4}.png';
// Free The Sheep
import sheepProduct from '../../assets/port-proj-images/freethesheep-ui-images/{4900EE0E-9898-49D4-AE8F-7E866F2F86FF}.png';
import sheepGrid from '../../assets/port-proj-images/freethesheep-ui-images/{828A441A-0ADC-42A7-A57C-4F1852C109F7}.png';
import sheepLineup from '../../assets/port-proj-images/freethesheep-ui-images/{5D380678-1F77-4AB9-AEBE-0A0E53506DC8}.png';
// Blicky
import blickyGame from '../../assets/port-proj-images/blicky-ui-images/{2BBAA8E5-5148-4EB8-B9BF-05A6CA03016A}.png';
import blickyLobby from '../../assets/port-proj-images/blicky-ui-images/{7E4C73A5-5D11-4104-B1C8-E11E5E012F49}.png';
import blickyInvite from '../../assets/port-proj-images/blicky-ui-images/{EA8669C6-4A65-4E13-9B89-4F80E9158996}.png';
// New Harvest
import harvestSmoke from '../../assets/port-proj-images/new-harvest-ui-images/{41B5083D-992D-45EF-8400-E0ECACC00E09}.png';
import harvestShop from '../../assets/port-proj-images/new-harvest-ui-images/{4D62251B-E4B8-41F0-BABC-2E8607AAE04F}.png';
import harvestProduct from '../../assets/port-proj-images/new-harvest-ui-images/{FBA712A3-0B97-4A7D-B2A7-7FC81F3E37D3}.png';
// Liber
import liberForest from '../../assets/port-proj-images/liber-ui-images/{5A545218-B3A0-4596-A542-736F7606A62B}.png';
import liberRead from '../../assets/port-proj-images/liber-ui-images/{8DC2A2B0-1555-47F2-8A4C-A2C08869F683}.png';
import liberBooks from '../../assets/port-proj-images/liber-ui-images/{95590C79-AC6F-483D-B88B-FF91435B7214}.png';
// Kiara Sky
import kiaraHero from '../../assets/port-proj-images/kiara-sky-ui-images/{42564273-817D-4016-BD3C-533299C6130D}.png';
import kiaraSocial from '../../assets/port-proj-images/kiara-sky-ui-images/{320BB740-B4FF-4B85-81E6-F996B5A9528B}.png';
import kiaraProducts from '../../assets/port-proj-images/kiara-sky-ui-images/{97FA470E-36F1-4232-A4D3-D6341F03C336}.png';
// Vantage
import vantageHero from '../../assets/port-proj-images/vantage-ui-images/vantage-hero.png';
import vantageFeatures from '../../assets/port-proj-images/vantage-ui-images/vantage-features.png';
import vantageAnalytics from '../../assets/port-proj-images/vantage-ui-images/vantage-analytics.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    name: 'ALFReD',
    type: 'Enterprise Platform',
    year: '2023 — 2026',
    description:
      'A real estate intelligence platform built for enterprise companies — delivering AI-driven property data and insights. Built with a RAG pipeline, vector search via Pinecone, and a high-performance React/TypeScript frontend.',
    stack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Pinecone', 'AWS', 'Prisma'],
    images: [alfredHome, alfredChart, alfredChat],
    demo: 'https://chat-cn.prod.app.impactcapitoldc.com/home',
    github: null,
  },
  {
    id: '02',
    name: 'Vantage',
    type: 'SaaS Demo · Frontend',
    year: '2026',
    description:
      'A polished SaaS marketing site and live dashboard demo for an operations intelligence platform. Features animated UI, interactive pricing, testimonial carousel, and a fully functional mock dashboard — built to showcase modern SaaS product design.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Next.js'],
    images: [vantageHero, vantageFeatures, vantageAnalytics],
    demo: 'https://sass-sale-demo.vercel.app/',
    github: 'https://github.com/pToum21/sass-sale-demo',
  },
  {
    id: '03',
    name: 'Free The Sheep',
    type: 'Shopify Development',
    year: '2026',
    description:
      'Built and maintain a live Shopify storefront for a sustainability-focused brand. Custom theme development, performance optimization, mobile responsiveness, and ongoing feature work.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Theme Dev'],
    images: [sheepProduct, sheepGrid, sheepLineup],
    demo: 'https://freethesheep.com/',
    github: null,
  },
  {
    id: '04',
    name: 'Blicky.io',
    type: '3D Multiplayer Game',
    year: '2024',
    description:
      'Online 3D multiplayer third-person shooter built with React and Three.js. Real-time multiplayer via PlayroomKit with Rapier physics — fully playable in the browser.',
    stack: ['React', 'Three.js', 'React-Three-Fiber', 'PlayroomKit', 'Rapier', 'Tailwind'],
    images: [blickyGame, blickyLobby, blickyInvite],
    demo: 'https://blicky.netlify.app/',
    github: 'https://github.com/pToum21/multiplayer-shooter',
  },
  {
    id: '05',
    name: 'New Harvest',
    type: 'Shopify Development',
    year: '2025',
    description:
      'Shopify development for New Harvest — built and maintain custom store components, optimized conversion flow, and manage ongoing deployments and stability.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Theme Dev'],
    images: [harvestSmoke, harvestShop, harvestProduct],
    demo: 'https://newharvest.us/',
    github: null,
  },
  {
    id: '06',
    name: 'Liber',
    type: 'Full-Stack Web App',
    year: '2023',
    description:
      'Interactive e-reader with book-saving and social features — think Kindle, GoodReads, and a personal library combined. Built with a GraphQL API and 3D book visualizations using Three.js.',
    stack: ['React', 'Material UI', 'MongoDB', 'GraphQL', 'Three.js', 'Node.js'],
    images: [liberForest, liberRead, liberBooks],
    demo: 'https://liber-3-25f01cbf7764.herokuapp.com/',
    github: 'https://github.com/pToum21/liber',
  },
  {
    id: '07',
    name: 'Kiara Sky',
    type: 'Shopify Development',
    year: '2025',
    description:
      'Development and maintenance for Kiara Sky\'s Shopify store — custom theme components, app integrations, and conversion-focused UX improvements across a high-traffic product catalog.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'App Integration'],
    images: [kiaraHero, kiaraSocial, kiaraProducts],
    demo: 'https://kiarasky.com/',
    github: null,
  },
];

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rowRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 88%',
        },
      }
    );
  }, []);

  return (
    <div
      ref={rowRef}
      className="relative group border-b border-border py-6 md:py-8 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover background fill */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out pointer-events-none"
        style={{
          backgroundColor: 'var(--color-surface)',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
        {/* Left: number + name */}
        <div className="flex items-baseline gap-4 md:gap-6 flex-1 min-w-0">
          <span className="font-mono text-xs text-accent tracking-widest flex-shrink-0">{project.id}</span>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-lg md:text-2xl text-text group-hover:text-accent transition-colors duration-300 truncate">
              {project.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted tracking-wide">{project.type}</span>
              <span className="font-mono text-xs text-dim tracking-wide">/ {project.year}</span>
            </div>
          </div>
        </div>

        {/* Middle: stack tags (hidden on mobile) */}
        <div className="hidden lg:flex flex-wrap gap-2 flex-1 justify-center">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="font-mono text-xs tracking-wide px-2 py-1 border border-border text-muted group-hover:border-border transition-colors">
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="font-mono text-xs tracking-wide px-2 py-1 border border-border text-dim">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Right: links */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-text transition-colors"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Live demo"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
          {!project.demo && !project.github && (
            <span className="font-mono text-xs text-dim tracking-widest uppercase">Private</span>
          )}
        </div>
      </div>

      {/* Expanded description on hover */}
      <div
        className="relative z-10 overflow-hidden transition-all duration-400"
        style={{ maxHeight: hovered ? '200px' : '0', marginTop: hovered ? '16px' : '0' }}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <p className="font-mono text-xs md:text-sm text-muted leading-relaxed flex-1 max-w-2xl">
            {project.description}
          </p>
          {/* 3-card fan */}
          {project.images && project.images.length > 0 && (
            <div className="flex-shrink-0 hidden md:block relative" style={{ width: '290px', height: '165px' }}>
              {/* Back card — top-right, most rotated */}
              {project.images[2] && (
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '148px', height: '93px',
                    top: '0', right: '0',
                    transform: 'rotate(5deg)',
                    border: '1px solid var(--color-border)',
                    zIndex: 0,
                  }}
                >
                  <img
                    src={project.images[2]}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'saturate(0.6) brightness(1.5) contrast(1.0)' }}
                  />
                </div>
              )}
              {/* Middle card */}
              {project.images[1] && (
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '165px', height: '103px',
                    top: '14px', left: '50px',
                    transform: 'rotate(2deg)',
                    border: '1px solid var(--color-border)',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={project.images[1]}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'saturate(0.75) brightness(1.4) contrast(1.0)' }}
                  />
                </div>
              )}
              {/* Front card — bottom-left, main image */}
              <div
                className="absolute overflow-hidden"
                style={{
                  width: '185px', height: '116px',
                  bottom: '0', left: '0',
                  transform: 'rotate(-2deg)',
                  border: '1px solid var(--color-border)',
                  zIndex: 2,
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'saturate(0.9) contrast(1.05)' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile stack tags */}
        <div className="flex flex-wrap gap-2 mt-3 lg:hidden">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-xs tracking-wide px-2 py-1 border border-border text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
      <div ref={titleRef} className="mb-12">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Projects</span>
        <h2
          className="font-display font-extrabold text-text leading-none"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        >
          Selected Projects
        </h2>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
