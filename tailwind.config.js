/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#14b8a6',
      },
      screens: {
        'sm': '375px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
