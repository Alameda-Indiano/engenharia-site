/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./public/**/*.js",
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9F9F9",
        secondary: "#215179",
        background: "#EEEFF1",
        details: "#398ED3",
        header: {
          primary: "#F9F9F9",
        },
        text: {
          primary: "#2E3749",
          secondary: "#F9F9F9",
          default: "#818181",
          details: "#63B7FC",
          medium: "#457AA5",
        },
        gradient: {
          buttom: {
            one: "#417095",
            two: "#64B9FF",
          },
          lines: {
            one: "#5FAFF1",
            two: "#40C1DD",
          },
          banner: {
            one: "#70BBF9",
            two: "#1260A1",
          },
        },
        shadow: {
          default: "#EAECF0",
          secondary: "#183a5248",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
