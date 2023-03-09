/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#004643",
        paragraph: "#abd1c6",
        headline: "#fffffe",
        highlight: "#f9bc60",
        main: "#e8e4e6",
        main_headline: "#001e1d",
        secondary: "#abd1c6",
        tertiary: "#e16162",
      },
    },
  },
  plugins: [],
};
