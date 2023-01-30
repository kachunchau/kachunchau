const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'src/**/*.html',
    'src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      headline: [
        'ClashDisplay',
        ...defaultTheme.fontFamily.sans,
      ],
      sans: [
        'GeneralSans',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        aqua: {
          50: '#E5F7FF',
          100: '#BDEBFF',
        },
        lilac: {
          50: '#F2ECFF',
          100: '#D6C2FF',
        },
        tango: {
          50: '#FFF7F0',
          100: '#FFE5CC',
          200: '#FFC894',
          300: '#FFB066',
          400: '#FF9633',
        },
        'vero-blue': '#2936A3',
        'vero-teal': '#2297F4',
        'vero-green': '#17DA88',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        '2/1': '200%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '11/10': '110%',
        '12/10': '120%',
        '13/10': '130%',
        '14/10': '140%',
        '15/10': '150%',
      },
    },
  },
}