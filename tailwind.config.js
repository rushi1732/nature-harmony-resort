/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0F1A10',
          900: '#182719', // Primary Deep Forest Green
          800: '#233724',
          700: '#2E482F',
          600: '#3D5E3E',
        },
        moss: {
          DEFAULT: '#465A3D',
          light: '#5B7450',
          dark: '#34432D',
        },
        ivory: {
          DEFAULT: '#F7F0E5', // Warm Ivory
          light: '#FCF9F4',
          dark: '#ECE2D1',
        },
        sand: {
          DEFAULT: '#E7D6BB', // Natural Sand
          light: '#F2E7D5',
          dark: '#D4BE9B',
        },
        gold: {
          DEFAULT: '#C9A66B', // Muted Gold
          light: '#D9BC8B',
          dark: '#B08B4E',
        },
        terracotta: {
          DEFAULT: '#A85D3B', // Terracotta Accent
          light: '#BD704D',
          dark: '#8E4828',
        },
        charcoal: {
          DEFAULT: '#24251F',
          light: '#373830',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'DM Sans', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'organic': '2rem 0.75rem 2rem 0.75rem',
        'organic-reverse': '0.75rem 2rem 0.75rem 2rem',
        'leaf': '2.5rem 0.5rem 2.5rem 0.5rem',
      },
      boxShadow: {
        'warm': '0 20px 40px -15px rgba(24, 39, 25, 0.12)',
        'elevated': '0 25px 50px -12px rgba(24, 39, 25, 0.25)',
        'polaroid': '0 12px 30px -8px rgba(0, 0, 0, 0.18), 0 4px 10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
