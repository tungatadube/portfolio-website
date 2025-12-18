/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
        },
        accent: '#06b6d4',
        dark: {
          DEFAULT: '#0f172a',
          darker: '#020617',
          lighter: '#1e293b',
        },
        light: '#f8fafc',
        gray: {
          DEFAULT: '#64748b',
          light: '#cbd5e1',
          dark: '#1e293b',
          darker: '#0f172a',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        'gradient-full': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(59, 130, 246, 0.15)',
        'card-hover': '0 8px 30px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}
