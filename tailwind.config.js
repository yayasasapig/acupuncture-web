/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chinese-blue': '#1e3a5f',
        'chinese-indigo': '#2d3a6e',
        'chinese-vermilion': '#c94a4a',
        'chinese-amber': '#d4a04a',
        'chinese-jade': '#4a8c7a',
        'chinese-purple': '#6b4c7a',
        'dark-bg': '#0f1419',
        'dark-card': '#1a2332',
        'dark-border': '#2d3a4f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
