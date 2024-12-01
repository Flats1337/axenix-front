/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/*.{jsx,js}", 
    "./src/pages/**/*.{jsx,js}",
    "./src/components/**/*.{jsx,js}",
  ],
  theme: {
    fontFamily: {
      "Roboto": ["Roboto", "sans-serif"]
    },
    colors: {
      "White": "#FFFFFF",
      "Black": {

      },
    },
    spacing: {},
    padding: {},
    borderRadius: {},
    backgroundImage: {},
    backgroundSize: {},
    keyframes: {
      "show": {
        "0%": {
          opacity: "0",
        }, "100%": {
          opacity: "1",
        }
      },
      "hidden": {
        "0%": {
          opacity: "1",
        }, "100%": {
          opacity: "0",
        }
      },
    },
    animation: {
      "show": "show var(--time) linear forwards",
      "hidden": "hidden var(--time) linear forwards",
    },
    extend: {},
  },
  plugins: [],
}