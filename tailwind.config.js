/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./Comps/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'myblue':'#4791FF',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}