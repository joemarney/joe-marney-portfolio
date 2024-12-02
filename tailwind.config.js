/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        theme: {
          background: "#172554",
          darkest: "#1e3a8a",
          dark: "#1d4ed8",
          light: "#3b82f6",
          lighter: "#93c5fd",
          accents: "#bfdbfe",
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
