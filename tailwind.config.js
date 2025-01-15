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
      tab: {
        defaultProps: {
          className: "",
          activeClassName: "",
          disabled: false,
        },
        styles: {
          base: {
            tab: {
              initial: {
                display: "flex",
                alignItems: "items-center",
                justifyContent: "justify-center",
                textAlign: "text-center",
                width: "w-full",
                height: "h-full",
                position: "relative",
                bg: "bg-transparent", // Customize initial background
                py: "py-1",
                px: "px-2",
                color: "text-theme-words2", // Customize text color
                fontSmoothing: "antialiased",
                fontFamily: "font-sans",
                fontSize: "text-base",
                fontWeight: "font-normal",
                lineHeight: "leading-relaxed",
                userSelect: "select-none",
                cursor: "cursor-pointer",
              },
              disabled: {
                opacity: "opacity-50",
                cursor: "cursor-not-allowed",
                pointerEvents: "pointer-events-none",
                userSelect: "select-none",
              },
            },
            indicator: {
              position: "absolute",
              inset: "inset-0",
              zIndex: "z-10",
              height: "h-full",
              bg: "black",
              borderRadius: "rounded-md",
              boxShadow: "shadow",
            },
          },
        },
      },
    },
  },
  plugins: [],
});
