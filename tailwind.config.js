/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Glyphic: ["Faculty Glyphic", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        grey: "#B0B0B0",
      },
    },
  },
};
