/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-img': "url('/img/illustration-sign-up-mobile.svg')",
        'desktop-img': "url('/img/illustration-sign-up-desktop.svg')"
      },
  },
  plugins: [],
},
}
