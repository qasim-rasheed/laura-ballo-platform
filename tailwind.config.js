/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F0518",     // Deepest purple
          primary: "#2D1B4E",  // Rich Royal Purple
          accent: "#764AF1",   // Electric Violet
          glass: "rgba(255, 255, 255, 0.05)", 
          glassBorder: "rgba(255, 255, 255, 0.1)", 
          text: "#F3F4F6",     
          muted: "#9CA3AF",    
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': "radial-gradient(circle at 50% 0%, rgba(118, 74, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(45, 27, 78, 0.2) 0%, transparent 50%)",
      }
    },
  },
  plugins: [],
};