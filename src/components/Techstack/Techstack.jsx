import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Component Architecture', 'State Management', 'Performance Optimization'],
  },
  {
    category: 'Full-Stack',
    skills: ['Node.js', 'Express', 'Python', 'REST API Design', 'API Integration', 'PostgreSQL', 'SQL', 'MongoDB', 'GraphQL', 'Prisma'],
  },
  {
    category: 'Shopify',
    skills: ['Shopify Theme Dev', 'Liquid', 'Store Customization', 'App Integration', 'Conversion Optimization'],
  },
  {
    category: 'AI',
    skills: ['LLM Integration', 'Retrieval-Augmented Generation', 'Pinecone', 'Vector Databases', 'Embeddings', 'Prompt Engineering'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Docker', 'AWS', 'Git', 'GitHub', 'CI/CD', 'Vercel'],
  },
  {
    category: 'Design & 3D',
    skills: ['Figma', 'Adobe Creative Suite', 'Blender', 'Cinema 4D', 'Three.js', 'WebGL'],
  },
];

function SkillGroup({ group, delay }) {
  const groupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      groupRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        delay: delay * 0.1,
        scrollTrigger: {
          trigger: groupRef.current,
          start: 'top 88%',
        },
      }
    );
  }, [delay]);

  return (
    <div ref={groupRef} className="border border-border p-6 hover:border-accent transition-colors duration-300 group">
      <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-4">
        {group.category}
      </span>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs tracking-wide text-muted group-hover:text-text transition-colors duration-300 border border-border px-2 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechStack() {
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
    <section ref={sectionRef} id="skills" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
      <div ref={titleRef} className="mb-12">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Skills</span>
        <h2
          className="font-display font-extrabold text-text leading-none"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        >
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.category} group={group} delay={i} />
        ))}
      </div>
    </section>
  );
}

export default TechStack;
