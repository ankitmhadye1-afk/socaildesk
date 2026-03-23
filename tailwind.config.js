/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e6f1fb",
          100: "#b5d4f4",
          200: "#85b7eb",
          400: "#378add",
          600: "#185fa5",
          800: "#0c447c",
          900: "#042c53",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        display: ["'Syne'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
