/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'Base': '#FCFFFC',
        'Black': '#12130F',
        'Heavy-Green': '#5B9279',
        'Pink': '#F49097',
        'Mustard': '#F5E960',
        'Soft-Green': '#8fcb9b99',
        'Soft-White': '#fcfffccc',
        'Soft-Black': '#12130f66',
      },
    },
    fontFamily: {
      acorn: ['ACORN', 'san-serif'],
      gt: ['GT', 'san-serif'],
    },
    screens: {
      'x375': '375px',
      'x480': '480px',
      'x640': '640px',
      'x768': '768px',
      'x1024': '1024px',
      'x1280': '1280px',
      'x1536': '1536px',
    }
  },
  plugins: [],
};
