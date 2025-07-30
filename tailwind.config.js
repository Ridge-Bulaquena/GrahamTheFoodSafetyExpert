/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light sections
        light: {
          primary: '#fafafa',
          secondary: '#f8f9fa',
          tertiary: '#e9ecef',
          accent: '#dee2e6',
          text: '#495057',
          illustrations: '#adb5bd',
        },
        // Dark sections
        dark: {
          primary: '#1E1E1E',
          secondary: '#2B2B2B',
          tertiary: '#343a40',
          accent: '#495057',
          text: '#EAEAEA',
          illustrations: '#6c757d',
        },
        // Brand accents
        brand: {
          gold: '#E6B800',
          orange: '#FF6B35',
          blue: '#004C70',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
