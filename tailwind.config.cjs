/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.85rem",
      xl: "1.1rem",
      "2xl": "1.23rem",
      "3xl": "2rem",
      "4xl": "2.4rem",
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
    },
  },
  plugins: [],
};
