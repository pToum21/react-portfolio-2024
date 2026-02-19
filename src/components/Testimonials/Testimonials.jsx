import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "As Founder & CEO of Impact Capitol, I had the pleasure of working closely with Peyton on ALFReD, our production real estate intelligence platform. He was instrumental in building and scaling our front-end architecture in TypeScript and React, while also contributing to AI-powered features leveraging Python, Postgres, and vector databases like Pinecone. Great attitude. I mean it — great \"can do\" attitude. Peyton thinks beyond shipping features, prioritizing performance, maintainability, and long-term product impact. He brought strong ownership, attention to detail, and a talent for translating complex systems into intuitive user experiences. Any organization looking for a thoughtful, technically strong Software Engineer with real production experience would be hard pressed to do better.",
    name: 'Tim Rood',
    role: 'Founder & CEO · Impact Capitol',
    date: 'February 2026',
  },
  {
    quote:
      "Peyton's blend of diligence, creativity, and sheer determination sets him apart. His relentless pursuit of excellence in problem-solving — it's not just about getting it 'done'; it's about understanding the 'why', 'how', and 'could it be better?' His mastery of 3D modeling has elevated his user interfaces to a level I rarely see, even among seasoned professionals. I wholeheartedly recommend him to any team in search of a developer who not only delivers outstanding work but also enriches the working environment with positivity and skill.",
    name: 'Diarmuid Murphy',
    role: 'Full Stack E-Commerce Developer (Shopify) · UCLA Instructor',
    date: 'March 2024',
  },
  // Add the New Harvest client quote when ready:
  // {
  //   quote: '',
  //   name: '',
  //   role: 'Founder · New Harvest',
  // },
];

function TestimonialCard({ testimonial, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col justify-between p-8 border border-border"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Accent quote mark */}
      <span
        className="font-display font-extrabold leading-none select-none mb-4 block"
        style={{ fontSize: '4rem', lineHeight: 1, color: 'var(--color-accent)', opacity: 0.4 }}
        aria-hidden="true"
      >
        "
      </span>

      <p className="font-display text-base md:text-lg text-text leading-relaxed flex-1 mb-8">
        {testimonial.quote}
      </p>

      <div className="border-t border-border pt-4">
        <p className="font-display font-bold text-sm text-text">{testimonial.name}</p>
        <p className="font-mono text-xs text-muted tracking-wide mt-1">{testimonial.role}</p>
        {testimonial.date && (
          <p className="font-mono text-xs tracking-wide mt-1" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>{testimonial.date}</p>
        )}
      </div>
    </div>
  );
}

function Testimonials() {
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
    <section ref={sectionRef} id="testimonials" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
      <div ref={titleRef} className="mb-12">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Testimonials</span>
        <h2
          className="font-display font-extrabold text-text leading-none"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        >
          What People Say
        </h2>
      </div>

      <div className={`grid grid-cols-1 gap-6 ${testimonials.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl'}`}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
