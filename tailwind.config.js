/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Updated from purge to content
  darkMode: 'media', // Set to 'media' or remove it
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
