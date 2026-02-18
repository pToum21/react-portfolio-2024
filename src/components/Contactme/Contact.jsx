import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from '@formspree/react';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [state, handleSubmit] = useForm('xpzvworp');
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo(formRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4');
  }, []);

  if (state.succeeded) {
    return (
      <section id="contact" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border min-h-[40vh] flex items-center">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-accent uppercase mb-6 block">/ Contact</span>
          <p className="font-display font-bold text-2xl md:text-3xl text-text">
            Message received. I'll be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border">
      <div ref={titleRef} className="mb-12">
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">/ Contact</span>
        <h2
          className="font-display font-extrabold text-text leading-none mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        >
          Get In Touch
        </h2>
        <a
          href="mailto:peytontouma@gmail.com"
          className="font-display text-xl md:text-2xl text-muted hover:text-accent transition-colors no-underline"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)' }}
        >
          peytontouma@gmail.com
        </a>
      </div>

      <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs tracking-widest text-muted uppercase">Name / Company</label>
            <input
              name="username"
              id="username"
              required
              placeholder="Your name or company"
              className="bg-transparent border-b border-border pb-3 text-text font-mono text-sm outline-none focus:border-accent transition-colors placeholder-[#333] w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs tracking-widest text-muted uppercase">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              className="bg-transparent border-b border-border pb-3 text-text font-mono text-sm outline-none focus:border-accent transition-colors placeholder-[#333] w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs tracking-widest text-muted uppercase">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="bg-transparent border-b border-border pb-3 text-text font-mono text-sm outline-none focus:border-accent transition-colors placeholder-[#333] resize-none w-full"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="self-start font-mono text-xs tracking-widest uppercase px-8 py-3 border border-border text-text hover:border-accent hover:text-accent transition-all duration-300 disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-2">Location</span>
            <p className="font-display text-lg text-text">Washington, DC</p>
          </div>
          <div>
            <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-2">Email</span>
            <a href="mailto:peytontouma@gmail.com" className="font-display text-lg text-text hover:text-accent transition-colors no-underline">
              peytontouma@gmail.com
            </a>
          </div>
          <div>
            <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-2">Phone</span>
            <a href="tel:2404495594" className="font-display text-lg text-text hover:text-accent transition-colors no-underline">
              (240) 449-5594
            </a>
          </div>
          <div>
            <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-3">Social</span>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/peyton-touma-b666a7281/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-muted hover:text-text transition-colors no-underline"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/pToum21"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-muted hover:text-text transition-colors no-underline"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
