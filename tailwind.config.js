module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C50533",
        "red-1": "#970024",
        grey: "#FBFBFB",
      },
      fontSize: {},
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
