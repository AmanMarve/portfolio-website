/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#000',
        customPurple: 'rgb(20, 2, 33)',
      },
      backgroundImage: {
        'custom-gradient-light': 'linear-gradient(90deg, #000, rgb(20, 2, 33), #000)',
        'custom-gradient-dark': 'linear-gradient(90deg, #1a1a1a, rgb(10, 10, 20), #1a1a1a)',
      },
    },
  },
  plugins: [],
  darkMode:'class'
}