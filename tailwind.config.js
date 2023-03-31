/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '300px',
      'md': '900px',
      'lg': '1500px',
      'xl': '1600px',
      // '2xl': '1536px',
    },
    extend: {
      
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
      strategy: "class"
    })
  ],
  colors: {
    purple: "#8B5CF6",
    black: "black",
    white: "white",
    light: "#F5F3FF"
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
}
