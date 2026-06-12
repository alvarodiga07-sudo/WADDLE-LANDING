/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Branding Waddle
        primary: '#eab308',        // amarillo Waddle
        'primary-dark': '#ca8a04',
        accent: '#f0c030',
        cream: '#fafaf5',          // fondo base (igual que la app)
        'cream-deep': '#f4f1ea',
        ink: '#0f1117',            // negro elegante
        'ink-soft': '#1a1d27',
        passport: '#5c3d11',       // marrón pasaporte
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
};
