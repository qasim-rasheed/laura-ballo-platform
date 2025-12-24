/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#0F0518", // Deep Purple/Black
          primary: "#764AF1", // Electric Violet (Core Brand)
          secondary: "#EF4444", // Red (Accent/Callouts)
          surface: "#FFFFFF", // Pure White
          glass: "rgba(255, 255, 255, 0.7)",
          glassBorder: "rgba(255, 255, 255, 0.5)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        blob: "blob 10s infinite",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
