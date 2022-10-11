/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['fzf3', 'Josefin-sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        gemini: ['Gemini-moon2', 'Gemini-moon'],
        fzf: ['fzf'],
        fzf2: ['fzf2'],
        fzf3: ['fzf3'],
      },

      colors: {
        'primary-black': '#181818',
        'secondary-black': '#202020',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};
