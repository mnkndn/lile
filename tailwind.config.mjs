/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /* ───────────────────────────────────────────
         DESIGN TOKENS — edit here to re-theme
         ─────────────────────────────────────────── */

      /* Colors */
      colors: {
        brand: {
          teal:       '#0097b2',   /* primary — from design mockup */
          'teal-dark':'#007a91',   /* darker teal for alternating / hover */
          'teal-bg':  '#00aecb',   /* lighter teal for backgrounds */
          navy:       '#0f2d3d',   /* hero heading */
          light:      '#eef4f8',   /* light section bg */
          black:      '#111111',   /* buttons / dark text */
          white:      '#ffffff',
          accent:     '#00c4d6',   /* "Le" highlight color */
        },
      },

      /* Typography */
      fontFamily: {
        heading: ['"Comic Relief"', 'system-ui', 'sans-serif'],
        body:    ['"Comic Relief"', 'system-ui', 'sans-serif'],
        logo:    ['"Comic Relief"', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'hero':    ['6.5rem',  { lineHeight: '1.05', fontWeight: '700' }],
        'section': ['3.5rem',   { lineHeight: '1.15', fontWeight: '700' }],
        'sub':     ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
      },

      /* Spacing */
      spacing: {
        'section-y': '0',       /* sections are 100vh, no extra padding needed */
        'container-x': '5vw',
      },

      /* Border radius */
      borderRadius: {
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
    },
  },
  plugins: [],
};
