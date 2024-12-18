/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        theme: {
          background: "white",
          boxes: "lightgrey",
          borders: "black",
          buttons: "black",
          hover: "lightblue",
          focus: "blue",
          active: "blue",
          accents: "black",
          words: "black",
        },
      },
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
};
