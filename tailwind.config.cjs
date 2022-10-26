/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin Sans",
        satisfy: "Satisfy",
      },
      colors: {
        title: "#4B9A77",
        secondary: "#C5D0DD",
        "custom-yellow": "#FCF894",
        "custom-red": "#DF030E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
