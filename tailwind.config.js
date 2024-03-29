/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#388E3B",
        secondar:"#263238",
        primaryTextColor:"#4D4D4D",
        background:"#F5F7FA",
        neutralgrey:"#717171",
        lightgrey:"#89939E",
        lastTextColor:"#263238",
        neutralblack:"#263238",
  
      },
      screens:{
        tablet:"836px"
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        Inter:['Inter', 'san-serif' ]
      },
    },
  },
  plugins: [],
}