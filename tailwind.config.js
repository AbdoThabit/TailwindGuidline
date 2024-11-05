const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,ts}"], // Make sure this includes all relevant file types
  theme: {
    extend: {
      colors: {
        myColor: "#fef09e",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".firstPlugin": {
          backgroundColor: "#000", // or 'black'
        },
      });
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".roundedBlueCircle": {
          backgroundColor: "#60a5fa", // or 'violet'
          borderRadius: "50%",
        },
      });
    }),
  ],
};
