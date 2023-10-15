/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ff86c8",
      },
      fontFamily: {
        josh: ["Jost", "sans"],
      },
    },
  },
  plugins: [],
};
