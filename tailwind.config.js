const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'src/**/*.html',
    'src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      // headline: [
      //   'ClashDisplay',
      //   ...defaultTheme.fontFamily.sans,
      // ],
      sans: [
        'ClashDisplay',
        'GeneralSans',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        'vero-blue': '#2936A3',
        'vero-teal': '#2297F4',
        'vero-green': '#17DA88',
      },
    },
  },
}