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
      "transperent": "rgba(255,255,255,0)",
      "White": "#FFFFFF",
      "Black": {
        100: "#E2E4E6",
        200: "#D9D9D9",
        300: "#F0F2F5",
        900: "#000000",
      },
      "Blue": {
        100: "#1890FF",
        900: "#001529",
      }
    },
    spacing: {},
    padding: {},
    borderRadius: {},
    backgroundImage: {
      download: "url('/svg/Download.svg')",
      redo: "url('/svg/Redo.svg')",
    },
    backgroundSize: {},
    keyframes: {
      "show": {
        "0%": {
          transform: "translateY(120px)",
        }, "100%": {
          transform: "translateY(0px)",
        }
      },
      "hidden": {
        "0%": {
          opacity: "1",
        }, "100%": {
          opacity: "0",
        }
      },
      "ping": {
        "0%": {
          opacity: "1",
        }, "100%": {
          opacity: "0.5",
        }
      },
    },
    animation: {
      "show": "show var(--time) linear forwards",
      "hidden": "hidden var(--time) linear forwards",
      "ping": "ping var(--time) ease infinite alternate",
    },
    extend: {},
  },
  plugins: [],
}