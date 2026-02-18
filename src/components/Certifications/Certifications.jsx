import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import uxCert from '../../assets/uxcert.png';
import uclaCert from '../../assets/uclacert.png';
import freeCodeCampCert from '../../assets/freecodecampcert.png';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  {
    id: '01',
    title: 'Full-Stack Web Development',
    issuer: 'UCLA Extension',
    period: 'Aug 2023 — Feb 2024',
    description:
      'Full-stack web development focused on the MERN stack. Hands-on training across HTML, CSS, JavaScript, React, Node.js, and database management.',
    image: uclaCert,
    link: 'https://www.parchment.com/u/award/dc57614ec96bf3333319ac485dd6315c',
    download: '/ucla-web-dev-cert.pdf',
  },
  {
    id: '02',
    title: 'UX/UI Design Certificate',
    issuer: 'Google / Coursera',
    period: 'Feb 2023 — Jul 2024',
    description:
      'Comprehensive UX design training covering user research, wireframing, prototyping, and delivering high-quality user experiences for digital products.',
    image: uxCert,
    link: 'https://www.coursera.org/account/accomplishments/specialization/JK3T3NA4BRM7',
    download: '/ux-design-cert.pdf',
  },
  {
    id: '03',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    period: '2023',
    description:
      'Covers responsive web design fundamentals including HTML5, CSS3, Flexbox, CSS Grid, and accessibility best practices.',
    image: freeCodeCampCert,
    link: 'https://www.freecodecamp.org/certification/fcc9c43abde-5cf0-478f-8359-c75e3bc69031/responsive-web-design',
    download: '/freecodecamp-web-design-cert.pdf',
  },
];

function Certifications() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    const rows = sectionRef.current?.querySelectorAll('.cert-row');
    if (rows) {
      gsap.fromTo(
        rows,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      {/* Page header */}
      <div ref={titleRef} className="max-w-5xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Education &amp; Certifications</span>
        <h1
          className="font-display font-extrabold text-text leading-none"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          Credentials
        </h1>
      </div>

      {/* Education block */}
      <div className="max-w-5xl mx-auto mb-16 border-t border-border">
        <div className="py-8 border-b border-border">
          <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-4">Education</span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="font-display font-bold text-lg md:text-xl text-text">B.S. Business Management</h3>
              <span className="font-mono text-xs text-muted">Aug 2017 — May 2020</span>
            </div>
            <p className="font-mono text-sm text-muted">Penn West University</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-5xl mx-auto">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-8 block">Certifications</span>
        <div className="flex flex-col gap-0">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="cert-row border-b border-border py-8 group"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left: text */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-accent tracking-widest">{cert.id}</span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-text group-hover:text-accent transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="ml-8 flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted tracking-wide">{cert.issuer}</span>
                      <span className="w-4 h-px bg-surface" />
                      <span className="font-mono text-xs text-muted tracking-wide">{cert.period}</span>
                    </div>
                    <p className="font-mono text-sm text-muted leading-relaxed max-w-xl mt-2">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-6 mt-3">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors no-underline"
                      >
                        View Certificate ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: cert image */}
                <div className="flex-shrink-0 w-full lg:w-64">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full border border-border object-cover"
                    style={{ filter: 'grayscale(30%)' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
