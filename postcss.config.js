/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      screens: {
        'sm': { 'raw': '(min-width: 320px)' },
        'md': { 'raw': '(min-width: 765px)' },
        'lg': { 'raw': '(min-width: 1020px)' },
        'xl': { 'raw': '(min-width: 1280px)' },
        '2xl': { 'raw': '(min-width: 1536px)' },
      }
    }
  },
}
