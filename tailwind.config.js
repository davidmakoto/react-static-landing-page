/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-grey-bg': '#312f2f',
        'faded-lighter-grey-title': '#3c3c3c',
        'white': '#ffffff',
        'light-grey': '#f5f5f5',
      },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")]
}

