/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
  }
}
