import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cutePortals from '../../assets/design-projects/cute-portals/Monster Portals - Google Chrome 8_18_2024 4_14_56 PM.png';
import blickyIo from '../../assets/design-projects/blicky.io/blik.png';
import liber from '../../assets/design-projects/liber/lib.png';
import Certain from '../../assets/design-projects/4Certain/4certain.png';
import gutsSword from '../../assets/design-projects/guts-sword/guts-sword-rotation.mp4';
import helloKitty from '../../assets/design-projects/hello-kitty/hello-kity-1.png';
import teddyHippo from '../../assets/design-projects/hippo/teddy-hippo-1.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, name: 'Cute Portals', category: '3D / Interactive', imageUrl: cutePortals, type: 'image' },
  { id: 2, name: 'Blicky.io', category: '3D / Game Art', imageUrl: blickyIo, type: 'image' },
  { id: 3, name: 'Liber 3D', category: '3D / UI', imageUrl: liber, type: 'image' },
  { id: 4, name: '3D Face Scan', category: '3D / Scanning', imageUrl: Certain, type: 'image' },
  { id: 5, name: 'Guts Sword', category: '3D Animation', videoUrl: gutsSword, type: 'video' },
  { id: 6, name: 'Chubby Hello Kitty', category: '3D / Character', imageUrl: helloKitty, type: 'image' },
  { id: 7, name: 'Hippo Plushy', category: '3D / Character', imageUrl: teddyHippo, type: 'image' },
];

function DesignPortfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    const items = gridRef.current?.querySelectorAll('.design-item');
    if (items) {
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      {/* Page header */}
      <div ref={titleRef} className="max-w-6xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Design &amp; 3D</span>
        <h1
          className="font-display font-extrabold text-text leading-none mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          Design Portfolio
        </h1>
        <p className="font-mono text-sm text-muted max-w-xl leading-relaxed">
          3D assets, animations, and interactive visuals — many integrated directly into web applications and productions.
        </p>
      </div>

      {/* Grid */}
      <div ref={gridRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="design-item group relative overflow-hidden border border-border hover:border-accent transition-colors duration-300"
            style={{ aspectRatio: '4/3' }}
          >
            {project.type === 'image' ? (
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(20%)' }}
              />
            ) : (
              <video
                src={project.videoUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4" style={{ backgroundColor: 'rgba(var(--color-bg-rgb), 0.65)' }}>
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-text text-lg">{project.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignPortfolio;
