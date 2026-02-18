import { useState, useEffect } from 'react';

const THEMES = ['dark', 'light', 'fallout'];

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    // migrate old 'crt' key
    if (saved === 'crt') return 'fallout';
    if (saved && THEMES.includes(saved)) return saved;
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggle = () => setThemeState(t => {
    const idx = THEMES.indexOf(t);
    return THEMES[(idx + 1) % THEMES.length];
  });

  const setTheme = (t) => {
    if (THEMES.includes(t)) setThemeState(t);
  };

  return { theme, toggle, setTheme };
}
