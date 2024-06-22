/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        title: "#eff2f6",
        darker: "#9fa6bc",
        lighter: "rgb(159, 166, 188)",
        purple: {
          custom: "rgb(198, 115, 255)",
        },
      },
    },
  },
  plugins: [],
};
