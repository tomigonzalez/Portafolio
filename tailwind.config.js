// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#15181D",
        secondary: "#2D313D",
        tertiary: "#494F5B",
        hov: "#2d313d",
        celeste: "#2c96ea",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  darkMode: "class",
  // eslint-disable-next-line no-undef
  plugins: [nextui(), require("tailwindcss-animated")],
};
