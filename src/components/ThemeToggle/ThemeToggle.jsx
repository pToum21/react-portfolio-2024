import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme.js';

const THEME_OPTIONS = [
  { id: 'dark',    label: 'Dark',    icon: '◗' },
  { id: 'light',   label: 'Light',   icon: '◎' },
  { id: 'fallout', label: 'Fallout', icon: '☢' },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Dot stays until the user actually tries Fallout
  const [showDot, setShowDot] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (theme === 'fallout') setShowDot(false);
  }, [theme]);

  const isFalloutActive = theme === 'fallout';

  return (
    <div
      aria-label="Theme switcher"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9500,
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '5px 6px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Label */}
      <span
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '9px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-dim)',
          paddingRight: '6px',
          borderRight: '1px solid var(--color-border)',
          marginRight: '4px',
          userSelect: 'none',
        }}
      >
        Theme
      </span>

      {THEME_OPTIONS.map((option) => {
        const isActive = theme === option.id;
        const isFallout = option.id === 'fallout';

        return (
          <button
            key={option.id}
            onClick={() => setTheme(option.id)}
            aria-label={`${option.label} theme`}
            title={isFallout ? '☢ Try Fallout mode' : `${option.label} mode`}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: isFallout ? '6px 12px' : '5px 10px',
              background: isActive
                ? 'var(--color-accent)'
                : isFallout
                  ? 'rgba(92, 255, 92, 0.06)'
                  : 'transparent',
              border: isFallout && !isActive
                ? '1px solid rgba(92, 255, 92, 0.35)'
                : isFallout && isActive
                  ? 'none'
                  : '1px solid transparent',
              cursor: 'pointer',
              transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
              color: isActive
                ? 'var(--color-bg)'
                : isFallout
                  ? '#5cff5c'
                  : 'var(--color-dim)',
              boxShadow: isActive
                ? '0 0 12px rgba(var(--color-accent-rgb), 0.35)'
                : isFallout
                  ? '0 0 0 0 rgba(92,255,92,0)'
                  : 'none',
              animation: isFallout && !isActive ? 'fallout-btn-pulse 2.5s ease-in-out infinite' : 'none',
            }}
          >
            {/* Rotating radiation icon for Fallout button */}
            <span
              style={{
                fontSize: isFallout ? '13px' : '11px',
                lineHeight: 1,
                display: 'inline-block',
                animation: isFallout && !isActive ? 'fallout-spin 8s linear infinite' : 'none',
                color: isFallout && !isActive ? '#5cff5c' : 'inherit',
                filter: isFallout && !isActive ? 'drop-shadow(0 0 4px rgba(92,255,92,0.8))' : 'none',
              }}
            >
              {option.icon}
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: isFallout ? 600 : isActive ? 500 : 400,
              }}
            >
              {option.label}
            </span>

            {/* Persistent notification dot — disappears only when user clicks Fallout */}
            {isFallout && showDot && !isActive && (
              <span
                style={{
                  position: 'absolute',
                  top: '3px',
                  right: '3px',
                  width: '8px',
                  height: '8px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    backgroundColor: '#f97316',
                    animation: 'notify-ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    backgroundColor: '#f97316',
                    animation: 'notify-dot 1.4s ease infinite',
                  }}
                />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;
