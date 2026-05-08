import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        lav: {
          50:  '#f7f5ff',
          100: '#ede8fc',
          200: '#d8d0f7',
          300: '#bdb0ed',
          400: '#9d8be0',
          500: '#8066d0',
          600: '#6b4fbb',
          700: '#5a3fa0',
          800: '#4b3484',
          900: '#3d2b6d',
        },
        cream: {
          50:  '#fdfcf9',
          100: '#faf7f2',
          200: '#f5ede0',
          300: '#ecddc8',
          400: '#ddc9aa',
          500: '#c9b08a',
          600: '#b0926b',
          700: '#8f7351',
          800: '#6e5840',
          900: '#4a3a2a',
        },
        ink: '#1a1410',
      },
      animation: {
        'hair-wave': 'hairWave 4s ease-in-out infinite',
        'hair-wave-2': 'hairWave 5s ease-in-out 0.5s infinite',
        'hair-wave-3': 'hairWave 6s ease-in-out 1s infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        hairWave: {
          '0%, 100%': { transform: 'rotate(-2deg) scaleY(1)', transformOrigin: 'top center' },
          '25%': { transform: 'rotate(2deg) scaleY(1.01)', transformOrigin: 'top center' },
          '50%': { transform: 'rotate(-1deg) scaleY(0.99)', transformOrigin: 'top center' },
          '75%': { transform: 'rotate(3deg) scaleY(1.01)', transformOrigin: 'top center' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
