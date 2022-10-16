/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['fzf3', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        gemini: ['Gemini-moon2', 'Gemini-moon'],
        sansJosefin: ['Josefin-sans'],
        virgil: ['Virgil'],
      },

      colors: {
        'primary-black': '#181818',
        'secondary-black': '#202020',
        'primary-green': 'rgba(95,199,145,255)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};
