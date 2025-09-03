export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "./" })
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
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
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit)
  })
  eleventyConfig.addFilter("sortByOrder", function (values) {
    let vals = [...values]
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
  })
  eleventyConfig.addFilter("countEntries", function (entries) {
    return Object.keys(entries).length
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
