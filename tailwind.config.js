/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "bounce 1s ease-in-out 5 ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
