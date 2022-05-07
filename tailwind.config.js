module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      'slateBlue': '#0C3042',
    }, 
    extend: {
      fontFamily: {
        proximaNovaRegular: ["ProximaNova-Regular", "sans-serif"],
        proximaNovaBold: ["ProximaNova-Bold", "sans-serif"],
      },
    }
  },
  plugins: [],
}
