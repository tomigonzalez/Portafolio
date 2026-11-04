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
        // Paleta principal — "dossier nocturno"
        ink: "#080B0F",
        surface: "#10151B",
        "surface-2": "#161D25",
        "surface-3": "#1D2630",
        line: "#26313C",
        "line-strong": "#34414F",
        fg: "#E9EEF5",
        muted: "#98A6B5",
        faint: "#7F8D9C",
        accent: "#7CC4FF",
        "accent-strong": "#2C96EA",

        // Tokens legacy (se mantienen para no romper clases existentes)
        primary: "#080B0F",
        secondary: "#10151B",
        tertiary: "#1D2630",
        hov: "#161D25",
        celeste: "#7CC4FF",
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "Cambria", "serif"],
      },
      boxShadow: {
        card: "0 40px 100px -50px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.02)",
        glow: "0 0 0 1px rgba(124, 196, 255, 0.18), 0 14px 40px -18px rgba(44, 150, 234, 0.45)",
        "glow-soft": "0 10px 30px -18px rgba(44, 150, 234, 0.35)",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  darkMode: "class",
  // eslint-disable-next-line no-undef
  plugins: [nextui(), require("tailwindcss-animated")],
};
