/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "highlight-primary": "#e46643",
        "highlight-secondary": "#f39765",
      },
      backgroundColor: {
        "main-dark": "#151619",
        "main-gray": "#ced4da",
        modal: "rgba(124, 129, 135, 0.4)",
        secondary: "#343a40",
        tertiary: "#212529",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
};
