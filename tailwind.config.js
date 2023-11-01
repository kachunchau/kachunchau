const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'src/**/*.html',
    'src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'CabinetGrotesk-Variable',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
    },
  },
}