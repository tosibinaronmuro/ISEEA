const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      crimson: ["Crimson Text", "serif"],
      garmond: ["EB Garamond", "serif"],
      nanum: ["Nanum Myeongjo", "serif"],
      Poiret: ["Poiret One", "sans"],
      rock3d: ["Rock 3D", "serif"],
    },
    // screens: {
    //   'xs': '320px',
    //   ...defaultTheme.screens,
    // },
    extend: {
      colors: {
        primary: "#FCC200",
        secondary: "#E5E5E5",
        tertiary: "#14213D",
        whiteRgba: "rgba(255,255,255, 0.9)",
      },
    },
  },
  plugins: [],
};
