/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-img': "url('../assets/images/illustration-sign-up-mobile.svg')",
        'desktop-img': "url('../assets/images/illustration-sign-up-desktop.svg')"
      },
  },
  plugins: [],
},
}