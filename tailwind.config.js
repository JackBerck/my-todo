/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#1a202c",
        "white-base": "#f7fafc",
        "purple-base": "#6b46c1",
      },
      fontFamily: {
        sans: "Poppins",
      },
    },
  },
  plugins: [],
};
