/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      /* two very badly named screen sizes to scale down the roomcode font in the header when device screen size shrinks -S */
      xxs: "353px",
      xs: "377px",
    },
    extend: {
      // main colors to use in app
      colors: {
        appblue: "#1fe5b6",
        app2ndblue: "#1abf98",
        appyellow: "#eefc5e",
        appblack: "#000000",
      },
    },
    // customed font stack -S
    fontFamily: {
      sans: ["Trebuchet MS", "Tahoma", "Arial", "system-ui"],
    },
  },
  plugins: [],
};
