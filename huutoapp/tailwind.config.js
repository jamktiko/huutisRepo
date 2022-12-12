/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    screens: {},
    extend: {
      // few extra colors to use, other colors are from tailwind and can be found inline coded -S
      colors: {
        appgreen: "#159979",
        appdarkgreen: "#138a6d",
        appyellow: "#eefc5e",
        applightyellow: "#f1fc79",
      },
    },
    // customed font stack -S
    fontFamily: {
      sans: ["Trebuchet MS", "Tahoma", "Arial", "system-ui"],
    },
  },
  plugins: [],
};
