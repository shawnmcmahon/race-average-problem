module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      'blueSlate': '#0C3042',
      'black': '#000000',
      'blue': '#2A5BD7', 
      'grayBorder': '#E5E7E8',
      'grayDarker': '#888A8C',
      'grayDark': '#F6F7F7',
      'grayLight': '#F5F6F7',
      'orange': '#EB5821',
      'white': '#FFFFFF'
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
