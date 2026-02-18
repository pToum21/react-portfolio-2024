import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: 'power2.out' });
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseEnterLink = () => {
      gsap.to(ring, { scale: 1.8, borderColor: getCSSVar('--color-accent'), duration: 0.25 });
      gsap.to(dot, { scale: 0, duration: 0.25 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: getCSSVar('--color-text'), duration: 0.25 });
      gsap.to(dot, { scale: 1, duration: 0.25 });
    };

    window.addEventListener('mousemove', onMouseMove);
    animateRing();

    const attachListeners = () => {
      const interactables = document.querySelectorAll('a, button, [data-cursor]');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
      return interactables;
    };

    const interactables = attachListeners();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        data-cursor-dot
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--color-text)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'background-color 0.3s ease',
        }}
      />
      <div
        ref={ringRef}
        data-cursor-ring
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1px solid var(--color-text)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'border-color 0.3s ease',
        }}
      />
    </>
  );
}

export default Cursor;
