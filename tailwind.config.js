/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx,html}", "./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      colors: {
        "purple-primary": "#55198B",
        "purple-light": "#AAA5FF",
        "bg-secondary": "#171c28",
      },
    },
  },
  plugins: [],
};
