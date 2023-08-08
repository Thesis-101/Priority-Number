/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('./assets/react.svg')",
        // 'footer-texture': "url('./assets/react.svg')",
      }
    },
  },
  plugins: [],
}
