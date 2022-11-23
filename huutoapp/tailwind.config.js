/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {},
    extend: {
      // main colors to use in app. You can find the whole style
      // guide in the Figma.
      // There are several hues of our main colors for use + black,
      // regular, dark and gray. -- Jyri
      colors: {
        appblue: "#1fe5b6",
        app2ndblue: "#1abf98",
        /*appblue2: "#19b38f",
          appblue3: "#0e6650",*/
        appdarkblue: "#159979",
        applightblue: "#d2faf0",
        appyellow: "#eefc5e",
        appdarkyellow: "#c6d24e",
        applightyellow: "#f6fdae",
        appblack: "#000000",
        appgray: "#808080",
        appdarkgray: "#555555",
        applightgray: "#cccccc",
      },
    },
    // customed font stack -S
    fontFamily: {
      sans: ["Trebuchet MS", "Tahoma", "Arial", "system-ui"],
    },
  },
  plugins: [],
};
