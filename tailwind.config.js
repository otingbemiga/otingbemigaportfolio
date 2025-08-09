/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#FF5733',
        secondary: '#3498DB',
      },
      
      animation: {
        'pulse-color': 'pulseColor 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseColor: {
          '0%, 50%': { opacity: '1', color: 'rgb(236, 72, 153)' }, // pink-500
          '50%': { opacity: '0.5', color: 'rgb(236, 82, 199)' },    // lightened pink (custom)
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
}