/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
