const config = {
  printWidth: 80,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-jinja-template"],
  overrides: [
    {
      files: ["*.html", "*.njk"],
      options: {
        parser: "jinja-template",
      },
    },
  ],
}

export default config
