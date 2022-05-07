module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      'slateBlue': '#0C3042',
    }, 
    extend: {
      fontFamily: {
        promixaRegular: ["ProximaNova-Regular", "sans-serif"],
        promixaBold: ["ProximaNova-Bold", "sans-serif"],
      },
    }
  },
  plugins: [],
}
