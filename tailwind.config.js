/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Roboto Slab", "serif"],
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
