/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#041D33',
          mid:  '#0B3562',
          accent: '#002E53',
          dark: '#011B72',
        },
        primary: '#0153A7',
        cyan: '#7BCFF3',
        'text-primary':   '#E8ECF5',
        'text-secondary': '#9FB3DB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
