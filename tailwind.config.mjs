/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#3D3D3D',
          100: '#2C2C2C',
          200: '#262626',
          300: '#202020',
          400: '#1A1A1A',
          500: '#171717',
          600: '#141414',
          700: '#111111',
          800: '#0E0E0E',
          900: '#0B0B0B',
        },
      },
    },
  },
  plugins: [],
} 