module.exports = {
  purge: {
    content: [
      '_site/**/*.html',
      '_site/**/*.js',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      headline: [
        'ClashDisplay',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      sans: [
        'Satoshi',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
    },
    extend: {
      colors: {
        lilac: {
          50: '#F2ECFF',
          100: '#CFB8FF',
        },
        tango: {
          50: '#FFF7F0',
          100: '#FFE5CC',
          200: '#FFC894',
          300: '#FFB066',
          400: '#FF9633',
        },
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
  variants: {
    extend: {},
  },
}