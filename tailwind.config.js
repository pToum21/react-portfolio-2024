/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        border:  'var(--color-border)',
        text:    'var(--color-text)',
        muted:   'var(--color-muted)',
        accent:  'var(--color-accent)',
        dim:     'var(--color-dim)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
