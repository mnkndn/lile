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
          teal:       '#0497b2',   /* primary */
          'teal-dark':'#0497b2',   /* same as primary — no gradient */
          'teal-bg':  '#0497b2',   /* same as primary — no gradient */
          navy:       '#0f2d3d',   /* hero heading */
          light:      '#eef4f8',   /* light section bg */
          black:      '#111111',   /* buttons / dark text */
          white:      '#ffffff',
          accent:     '#0497b2',   /* "Le" highlight color */
        },
      },

      /* Typography */
      fontFamily: {
        heading: ['"Roboto"', 'system-ui', 'sans-serif'],
        body:    ['"Roboto"', 'system-ui', 'sans-serif'],
        logo:    ['"Roboto"', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'hero':    ['6.5rem',  { lineHeight: '1.05' }],
        'section': ['3.5rem',   { lineHeight: '1.15' }],
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
