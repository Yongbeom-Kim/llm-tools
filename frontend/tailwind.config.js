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
  },
  plugins: [],
}

