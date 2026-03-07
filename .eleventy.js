import { feedPlugin } from "@11ty/eleventy-plugin-rss"
import pluginFilters from "./src/_config/filters.js"

export default function (eleventyConfig) {

  eleventyConfig
    .addPassthroughCopy({ public: "./" })
    .addPassthroughCopy({ "src/content/feed": "./feed" })

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  })

  // Filters
  eleventyConfig.addPlugin(pluginFilters)

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed/feed.xml",
    stylesheet: "/feed/pretty-atom-feed.xsl",
    templateData: {
      eleventyNavigation: {
        key: "Feed",
        order: 4,
      },
    },
    collection: {
      name: "blogpost",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "A personal web-log",
      subtitle: "Personal publishing is community minded democracy",
      base: "https://dustin.younse.com/",
      author: {
        name: "Dustin Younse",
      },
    },
  })

  eleventyConfig.addCollection("resumeEducation", function (collection) {
    return collection.getFilteredByTags("resume", "education")
  })

  eleventyConfig.addCollection("resumeRecentExperience", function (collection) {
    return collection
      .getFilteredByGlob("_data/_resume/experience/recent/*.md")
      .reverse()
  })

  eleventyConfig.addCollection("resumePriorExperience", function (collection) {
    return collection
      .getFilteredByGlob("_data/_resume/experience/prior/*.md")
      .reverse()
  })

  eleventyConfig.addCollection("resumeSkills", function (collection) {
    return collection.getFilteredByTags("resume", "skills")
  })

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
