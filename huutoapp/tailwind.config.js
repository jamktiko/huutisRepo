/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      // TODO: Check and change these screen sizes to 
      // approriate, these are default templates. 
      // Also not 100% sure if we need to use these yet. --Jyri
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // main colors to use in app
      colors: {
        appblue: "#1fe5b6",
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
