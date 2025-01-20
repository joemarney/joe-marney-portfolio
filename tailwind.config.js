/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{ts,jsx,js}", "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "1000px",
      lg: "1500px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        theme: {
          background: "#586994",
          background2: "#121212",
          buttons: "black",
          hover: "#586994",
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
