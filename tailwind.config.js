module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        corporative: {
          slideDark: 'black',
          slideLight: '#2d2d2d',
          color: 'white'
        },
        gray: {
          100: '#f7f7f7',
          200: '#ededed',
          300: '#e2e2e2',
          400: '#cbcbcb',
          500: '#a0a0a0',
          600: '#717171',
          700: '#4a4a4a',
          800: '#2d2d2d',
          900: '#1a1a1a'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
};
