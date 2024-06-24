/** @type {import('tailwindcss').Config} */

const { transform } = require('typescript');

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}", // include scss files
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        }
      },
      backgroundImage: {
        'world-map': "url('./src/images/Map.png')",
      }
    },
  },
  plugins: [],
};
