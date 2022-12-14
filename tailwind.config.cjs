/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      white: "#fffdfa",
      "light-grey": "#c5c6ce",
      grey: "#334155",
      "yellow-orange": "#f2ac4a",
      "purple-blue": "#5d5f79",
      "red-orange": "#f15e50",
      "navy-blue": "#00001a",
    },
    fontSize: {
      sm: "0.85rem",
      "sm-md": "1rem",
      xl: "1.1rem",
      "2xl": "1.23rem",
      "3xl": "2rem",
      "3xl-md": "3rem",
      "4xl": "2.5rem",
      "4xl-md": "3.8rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".33em",
    },
    extend: {
      maxWidth: {
        "118px": "118px",
      },
      screens: {
        md: "1172px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
