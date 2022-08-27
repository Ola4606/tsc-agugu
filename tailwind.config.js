/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xsm': '420px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        title: "Inter",
        casual: "Poppins",
      },
    },
  },
  plugins: [],
};
