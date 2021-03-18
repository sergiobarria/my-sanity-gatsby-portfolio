/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      orange: colors.orange,
      lightBlue: colors.lightBlue,
    },
    extend: {
      typography: {
        xl: {
          css: {
            h2: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            h3: {
              letterSpacing: '0',
            },
            p: {
              fontSize: '1.25rem',
              marginTop: '0',
              marginBottom: '0',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            blockquote: {
              fontSize: '1.5rem',
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: '#A855F7',
            },
            p: {
              marginTop: '0',
              marginBottom: '0',
            },
            h1: {
              marginBottom: '1rem',
            },
            blockquote: {
              fontFamily: 'Caveat',
              fontSize: '1.5rem',
              borderLeftColor: '#A855F7',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Titillium Web', ...defaultTheme.fontFamily.sans],
        title: ['Acme', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
