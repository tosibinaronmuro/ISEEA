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
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      // borderRadius:{
      //   customRadius:  53% 47% 52% 48% 
        
      // },
    },
  },
  plugins: [],
};
