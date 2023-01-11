/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dela-gothic-one': ['var(--font-dela-gothic-one)'],
        'montserrat': ['var(--font-montserrat)']
      },
      colors: {
        'cyan-dark': '#2B788B',
        'cyan-light': '#C3DCE3',
        'cyan-medium': '#5996A5',
        'pink-dark': '#945069',
        'pink-light': '#F2D4DC',
        'grey-light': '#F6F5F4',
        'grey-medium': '#E0E0E0',
        'grey-icon': '#BABABA',
        'grey-dark': '#757575',
        'green-medium': '#639B6D',
        'pink-medium': '#A15993',
        'red-medium': '#A95151',
        'yellow-medium': '#C4A24C'
      }
    },
  },
  plugins: [],
}
