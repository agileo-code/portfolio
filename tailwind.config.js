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
        },
        red: {
          100: '#FFF5F5',
          200: '#FFD7D7',
          300: '#FFB2B2',
          400: '#FF8181',
          500: '#FF6565',
          600: '#FF3E3E',
          700: '#FF3030',
          800: '#FF2C2C',
          900: '#FF2A2A'
        },
        blue: {
          100: '#CAF0F8',
          200: '#ADE8F4',
          300: '#90E0EF',
          400: '#48CAE4',
          500: '#00B4D8',
          600: '#0096C7',
          700: '#0077B6',
          800: '#023E8A',
          900: '#03045E'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
