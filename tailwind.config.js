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
          fontFamily: 'MilligramText-Bold',
          src: "url('webFonts/MilligramTextBold/font.woff2') format('woff2'), url('webFonts/MilligramTextBold/font.woff') format('woff')",
        },
      })
    }),
      plugin(function ({ addBase }) {
        addBase({
          '@font-face': {
            fontFamily: 'MilligramText-BoldItalic',
            src: "url('webFonts/MilligramTextBoldItalic/font.woff2') format('woff2'), url('webFonts/MilligramTextBoldItalic/font.woff') format('woff')",
          },
        })
      }),
      plugin(function ({ addBase }) {
        addBase({
          '@font-face': {
            fontFamily: 'Milligram-Heavy',
            src: "url('webFonts/MilligramHeavy/font.woff2') format('woff2'), url('webFonts/MilligramHeavy/font.woff') format('woff')",
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
