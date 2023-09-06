/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      white: "#fff",
      darkBlue: "#2b3945",
      darkBlueBg: "#202c37",
      darkGray: "#858585",
      lightGray: "#fafafa",
    },
  },
  plugins: [],
};
