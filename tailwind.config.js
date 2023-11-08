/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: 12,
    },
    fontFamily: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
      numbers: "'Roboto Mono', monospace",
    },

    extend: {
      textSize: {
        tiny: "font-size: 0.1rem/* 12px */;line-height: 1rem/* 16px */;",
      },
      screens: { regular: "900px" },
      animation: {
        slide: "slide 2.5s linear infinite",
        infiniteScrollRight: "infiniteScrollRight 25s linear infinite",
        infiniteScrollLeft: "infiniteScrollLeft 25s linear infinite",
      },
      keyframes: {
        infiniteScrollRight: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        infiniteScrollLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
