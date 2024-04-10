/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       
        wsLight: '#f5f5f5',
        wsDark: '#d39d61',
        wsDarker: '#b98531',
        greenDark: '#38C172',
        grayShade:'#9c9b9a',
        grayShadeLight:'#DFDFDF',
        para: '#213547',
        cardText:'#7C7C7C',
        yellowShade:'#F8DDB1'
      }
    },
  },
  plugins: [],
}

