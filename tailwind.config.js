/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B0F0",
      },
      fontFamily: {
        main: ["Roboto Slab", "serif"],
        
      },
      zIndex:{
        '100':'100',
        '101':'101',
        '102':'102',
        '103':'103',
        '104':'104',
        '105':'105'
      },
    },
  },
  plugins: [],
}
