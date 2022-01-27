const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,md,njk,svg}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Milligram-Bold',
          src: "url('webFonts/MilligramBold/font.woff2') format('woff2'), url('webFonts/MilligramBold/font.woff') format('woff')",
        },
      })
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Milligram-HeavyItalic',
          src: "url('webFonts/MilligramHeavyItalic/font.woff2') format('woff2'), url('webFonts/MilligramHeavyItalic/font.woff') format('woff')",
        },
      })
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {},
  },
}
