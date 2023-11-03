/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/App.js",
    "./src/Hero.js",
    "./src/index.js",
    "./src/Header.js",
    "./src/Footer.js",
    "./src/Projects.js",
    "./src/Card.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        "color-navbar": "var(--color-navbar)"
      }
    },
  },
  plugins: [],
}

