import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Loader({ onComplete }) {
  const overlayRef = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const rulerRef   = useRef(null);
  const tagRef     = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl
      // "PEYTON" slides up from below
      .fromTo(line1Ref.current,
        { y: 60, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.75 }
      )
      // "TOUMA" follows slightly behind
      .fromTo(line2Ref.current,
        { y: 60, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.75 },
        '-=0.55'
      )
      // Accent line draws left → right
      .fromTo(rulerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: 'power2.inOut', transformOrigin: 'left center' },
        '-=0.4'
      )
      // Subtitle fades in
      .fromTo(tagRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      )
      // Hold so the user can read it
      .to({}, { duration: 0.9 })
      // Slide entire overlay UP off screen
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power3.inOut',
        onComplete: () => { if (onComplete) onComplete(); },
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Name */}
      <div style={{ overflow: 'hidden', lineHeight: 0.92 }}>
        <div
          ref={line1Ref}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 10vw, 8.5rem)',
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
            lineHeight: 0.92,
          }}
        >
          PEYTON
        </div>
      </div>

      <div style={{ overflow: 'hidden', lineHeight: 0.92 }}>
        <div
          ref={line2Ref}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 10vw, 8.5rem)',
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
            lineHeight: 0.92,
          }}
        >
          TOUMA
        </div>
      </div>

      {/* Accent rule */}
      <div
        ref={rulerRef}
        style={{
          width: 'clamp(180px, 38vw, 480px)',
          height: '2px',
          backgroundColor: 'var(--color-accent)',
          marginTop: '20px',
        }}
      />

      {/* Subtitle */}
      <span
        ref={tagRef}
        style={{
          marginTop: '14px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 'clamp(9px, 1.1vw, 12px)',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
          opacity: 0,
        }}
      >
        Frontend Engineer · Portfolio
      </span>
    </div>
  );
}

export default Loader;
