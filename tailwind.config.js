/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{ts,jsx,js}", "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        theme: {
          background: "#586994",
          background2: "#121212",
          boxes: "lightgrey",
          borders: "black",
          buttons: "black",
          hover: "#586994",
          focus: "blue",
          active: "blue",
          accents: "black",
          words: "#EAEAEA",
          words2: "black",
        },
      },
      important: true,
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          "3xl": "950px",
        },
      },
      boxShadow: {
        "4xl": "rgba(0, 0, 0, 1) 0px 30px 50px 0px",
      },
    },
  },
  plugins: [],
});
