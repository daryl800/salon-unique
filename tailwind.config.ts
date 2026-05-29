import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif']
      },
      colors: {
        accent: {
          DEFAULT: '#D4AF37',
          muted: '#B99224'
        },
        ink: '#0E0E0E',
        pearl: '#F7F5F2'
      },
      boxShadow: {
        luxe: '0 20px 60px rgba(0,0,0,0.25)'
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

export default config;
