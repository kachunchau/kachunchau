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
        'ClashGrotesk',
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
        '"Avenir Next W01"',
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
      mono: [
        // 'ui-monospace',
        // 'SFMono-Regular',
        // 'Menlo',
        // 'Monaco',
        // 'Consolas',
        // '"Liberation Mono"',
        // '"Courier New"',
        // 'monospace',
      ],
    },
    extend: {
      colors: {
        'teal': '#01B2D0',
        'navy': '#1B2E5B',
        primary: {
          50: '#F6F7FB',
          100: '#EEEFF8',
          200: '#D4D7ED',
          300: '#7F86C8',
          400: '#2936A3',
          500: '#253193',
          600: '#1D2672',
        },
        secondary: {
          200: '#D3EAFD',
          300: '#7AC1F9',
          400: '#2297F4',
          500: '#1E88DC',
          600: '#186AAB',
        },
        tertiary: {
          300: '#74E9B8',
          400: '#17DA88',
          500: '#14C47A',
          600: '#10985F',
        },
        lime: {
          400: '#6FD350',
        },
        slate: {
          200: '#D0D1DB',
          300: '#A2A3B7',
          400: '#16184B',
          500: '#0F1135',
        },
      },
      borderRadius: {
        '4xl': '2rem'
      },
      inset: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
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