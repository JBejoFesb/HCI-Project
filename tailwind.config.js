/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-marine' : '#222B3A',
        'dark-marine' : '#1B1D2A',
        'dirty-white' : '#ECECEC',
        'bright-text' : '#484848',
        'dark-text' : '#1A1A1A',
      },
    },
  },
  plugins: [],
}