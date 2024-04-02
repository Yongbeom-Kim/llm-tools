import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 72px))',
        '8': 'repeat(8, minmax(0, 72px))',
        '4': 'repeat(4, minmax(0, 72px))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'very-light-primary': '#BFA5EC',
      'light-primary': '#886FB4',
      'primary': '#482E74',
      'dark-primary': '#1A0936',
      'very-dark-primary': '#06010E',
      '-very-light-complement': '#FFF5AB',
      '-light-complement': '#FFF294',
      'complement': '#AA9D39',
      '-dark-complement': '#4F4607',
      '-very-dark-complement': '#141200',
    }
  },
  plugins: [],
}

