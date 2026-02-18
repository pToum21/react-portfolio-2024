import { useEffect, useRef } from 'react';

/* Renders the physical Pip-Boy / Fallout overlays on top of everything:
   - Static scanlines
   - Moving bright sweep line
   - Corner vignette
   - Occasional screen-wide glitch flash
   Only mounts when [data-theme="fallout"] is active. */

function CRTEffect() {
  const sweepRef = useRef(null);
  const flashRef = useRef(null);

  useEffect(() => {
    let animFrame;
    let sweepY = -120;
    let lastFlash = 0;

    function loop(timestamp) {
      sweepY += 1.8;
      if (sweepY > window.innerHeight + 120) sweepY = -120;

      if (sweepRef.current) {
        sweepRef.current.style.transform = `translateY(${sweepY}px)`;
      }

      // Random screen-wide glitch flash every ~8-15s
      if (timestamp - lastFlash > 8000 + Math.random() * 7000) {
        lastFlash = timestamp;
        if (flashRef.current) {
          flashRef.current.style.opacity = '0.06';
          setTimeout(() => {
            if (flashRef.current) flashRef.current.style.opacity = '0';
          }, 60 + Math.random() * 80);
        }
      }

      animFrame = requestAnimationFrame(loop);
    }

    animFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.22) 2px, rgba(0,0,0,0.22) 4px)',
        }}
      />

      {/* Moving sweep line */}
      <div
        ref={sweepRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '120px',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(92, 255, 92, 0.06) 40%, rgba(92, 255, 92, 0.11) 50%, rgba(92, 255, 92, 0.06) 60%, transparent 100%)',
          willChange: 'transform',
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Corner curvature darkening */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 70%, rgba(0,10,0,0.5) 100%)',
          borderRadius: '0',
        }}
      />

      {/* Random glitch flash */}
      <div
        ref={flashRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#5cff5c',
          opacity: 0,
          transition: 'opacity 0.05s ease',
        }}
      />
    </div>
  );
}

export default CRTEffect;
