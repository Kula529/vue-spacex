// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      './src/plugins/vue-tailwind.js',
      'node_modules/vue-tailwind/dist/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '2160px',
        '4xl': '2880px',
      },
      colors: {
        // Theme colors
        primary: '#3F51B5',
        secondary: '#ACACAC',
        black: '#161616',
        light_blue: '#EAECF7',
        light: '#F5F5F5',
        orange: '#FFBF51',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
};
