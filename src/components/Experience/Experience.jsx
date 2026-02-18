import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    company: 'Impact Capitol DC',
    role: 'Full-Stack Engineer',
    period: 'May 2023 — Present',
    location: 'Washington, DC',
    bullets: [
      'Engineer production features for ALFReD — a real estate AI platform used by enterprise clients to analyze market data, generate reports, and surface AI-driven insights.',
      'Architect and ship scalable React/TypeScript UI components with a focus on performance, accessibility, and maintainability across a large evolving codebase.',
      'Design and implement full-stack features end-to-end: REST APIs, backend services, and PostgreSQL data models coordinated with product and business stakeholders.',
      'Build and integrate a production RAG pipeline using LLMs, vector embeddings, and Pinecone for AI-powered document search and report generation.',
      'Drive performance improvements through query optimization, strategic refactoring, and efficient data handling — reducing load times and improving reliability.',
    ],
    tags: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'Pinecone', 'RAG', 'AWS'],
  },
  {
    company: 'Shopify E-Commerce',
    role: 'Developer (Freelance)',
    period: '2024 — Present',
    location: 'Remote',
    clients: 'freethesheep.com · newharvest.us · kiarasky.com',
    bullets: [
      'Build and maintain multiple live Shopify storefronts for established consumer brands using Liquid, JavaScript, HTML, and CSS.',
      'Develop custom theme components and reusable sections that support marketing campaigns and operational workflows.',
      'Optimize site performance, mobile responsiveness, and conversion flow — working directly with business owners to scope and ship features.',
      'Manage deployments, troubleshoot production issues, and ensure stability across all active stores.',
    ],
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Conversion Optimization'],
  },
  {
    company: 'Code Ninjas',
    role: 'Code Instructor',
    period: 'Sep 2023 — Oct 2024',
    location: 'Los Angeles, CA',
    bullets: [
      'Taught JavaScript, Python, and React to students of all ages through hands-on, project-based instruction.',
      'Designed and delivered curriculum spanning web development fundamentals, AI concepts, and 3D game development.',
      'Guided students through full project lifecycles — from ideation to working software — building strong problem-solving habits.',
    ],
    tags: ['JavaScript', 'Python', 'React', 'Curriculum Design'],
  },
  {
    company: 'Yale Productions',
    role: '3D Developer',
    period: 'Sep 2023 — Jan 2025',
    location: 'Remote',
    bullets: [
      'Created 3D assets and animations using Blender and Cinema 4D — work featured in film and video productions.',
      'Built interactive applications and animated props used as on-screen elements in professional productions.',
      'Optimized rendering pipelines and asset workflows to consistently meet tight production deadlines.',
    ],
    tags: ['Blender', 'Cinema 4D', 'Three.js', '3D Animation'],
  },
];

function ExperienceItem({ role, index }) {
  const [expanded, setExpanded] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div
      ref={itemRef}
      className="group border-b border-border py-8 cursor-pointer select-none"
      onClick={() => setExpanded(!expanded)}
      data-cursor
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-accent tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl text-text group-hover:text-accent transition-colors duration-300">
            {role.company}
          </h3>
        </div>
        <div className="flex flex-col md:items-end gap-1 ml-8 md:ml-0">
          <span className="font-mono text-xs text-muted tracking-wide">{role.role}</span>
          <span className="font-mono text-xs text-muted tracking-wide">{role.period}</span>
        </div>
      </div>

      {/* Clients */}
      {role.clients && (
        <div className="mt-3 ml-8 md:ml-10">
          <span className="font-mono text-xs text-dim tracking-wide">Clients: </span>
          <span className="font-mono text-xs text-accent tracking-wide">{role.clients}</span>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 ml-8 md:ml-10">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs tracking-wide px-2 py-1 border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expandable bullets */}
      <div
        className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96 mt-6' : 'max-h-0'}`}
      >
        <ul className="ml-8 md:ml-10 flex flex-col gap-2 border-l-2 border-accent pl-4">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="font-mono text-xs md:text-sm text-muted leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Expand hint */}
      <div className="ml-8 md:ml-10 mt-3">
        <span className="font-mono text-xs text-dim tracking-widest uppercase">
          {expanded ? '— collapse' : '+ details'}
        </span>
      </div>
    </div>
  );
}

function Experience() {
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
    <section ref={sectionRef} id="experience" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
      <div ref={titleRef} className="mb-12">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Experience</span>
        <h2
          className="font-display font-extrabold text-text leading-none"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        >
          Work
        </h2>
      </div>

      <div>
        {roles.map((role, i) => (
          <ExperienceItem key={role.company} role={role} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
