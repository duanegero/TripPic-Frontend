/* filepath: /Users/duane/TripPic-Frontend/trippic-app/tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        swanky: ["Swanky and Moo Moo", "sans-serif"],
        sigmar: ["Sigmar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
