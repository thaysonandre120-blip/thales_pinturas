import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './api/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E9E2D8',
          300: '#DCD3C5',
          400: '#C5B9A5',
        },
        deep: {
          900: '#14201C',
          800: '#1D2F29',
          700: '#2A443B',
        },
        clay: {
          DEFAULT: '#BD6B3B',
          dark: '#9E552A',
          light: '#D48658',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
