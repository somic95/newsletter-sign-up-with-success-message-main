/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-img': "url('./illustration-sign-up-mobile.svg')",
        'desktop-img': "url('./illustration-sign-up-desktop.svg')"
      },
  },
  plugins: [],
},
}