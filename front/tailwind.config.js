module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}
