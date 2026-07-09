/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackboard: {
          DEFAULT: "#000000",
          header: "#161616",
          light: "#1e1e1e",
        },
        sticky: {
          purple: "#B388FF",
          green: "#CCFF90",
          red: "#FF8A80",
          yellow: "#FFFF8D",
          blue: "#A0AFFF",
        },
        chalk: {
          DEFAULT: "#CFCFCF",
          dim: "#707070",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        sticky:
          "0px 4px 4px rgba(0,0,0,0.25), 0px 8px 8px rgba(0,0,0,0.04), 0px 8px 16px rgba(0,0,0,0.08)",
        board: "0 8px 32px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
