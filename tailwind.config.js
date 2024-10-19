/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          text333333: "#333333",
          text71778E: "#71778E",
          text203459: "#203459",
          bg203459: "#203459",
          bg5CB67C: "#5CB67C",
        },
      },
    },
  },
  plugins: [],
};
