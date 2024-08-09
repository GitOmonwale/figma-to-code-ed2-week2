/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['archivo', 'sans-serif'],
        chillax: ['chillax', 'sans-serif'],
      },
      colors: {
        black: '#1D1D1D',
        gray: {
          '100':'#E5E5E5',
          '200': '#C3C3C3',
          '300': '#7E7E7E',
        },
        purple: '#393158',
        turquoise: '#2A5259',
        brown: '#706947',
        green: '#2D5C43',
      }
    },
  },
  plugins: [],
}


