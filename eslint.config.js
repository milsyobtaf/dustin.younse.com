import globals from "globals"
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import { defineConfig } from "eslint/config"
import cspellPlugin from "@cspell/eslint-plugin"

export default defineConfig(
  [
    {
      files: ["**/*.{js,mjs,cjs}"],
      languageOptions: { globals: globals.browser },
    },
    { files: ["**/*.json"], plugins: { json }, language: "json/json" },
    { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm" },
  ],
  {
    plugins: { "@cspell": cspellPlugin },
    rules: {
      "@cspell/spellchecker": [
        "warn",
        {
          autoFix: false,
          cspell: {
            dictionaries: ["known-words"],
            dictionaryDefinitions: [
              {
                name: "known-words",
                path: "./dictionaries/known-words.txt",
              },
            ],
          },
        },
      ],
    },
  }
)
