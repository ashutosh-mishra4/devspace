module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'background': '#1F1D36',
      'white': '#ffffff',
      'wheat': '#f5deb3',
      'dark-background': '#18191a'
    },
    extend: {
      fontFamily: {
        play: ['Play'],
        cursive: ['Monoton']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
