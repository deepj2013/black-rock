/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blueShade:'#008FD7',
        grayShade:'#515151',
        cardText:'#7C7C7C',
        yellowShade:'#F8DDB1'
      }
    },
  },
  plugins: [],
}

