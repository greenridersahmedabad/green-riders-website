/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#ebffe3',
          100: '#d1fcb7',
          200: '#76c700',
          300: '#52ae01',
          400: '#3e8701',
          500: '#0a4108',
        }
      }
    },
  },
  plugins: [],
};