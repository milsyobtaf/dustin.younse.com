export default function (config) {
  config.addPassthroughCopy({ public: "./" })
  config.addShortcode("year", () => `${new Date().getFullYear()}`)
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  })
  config.addCollection("resumeEducation", function (collection) {
    return collection.getFilteredByTags("resume", "education")
  })
  config.addCollection("resumeRecentExperience", function (collection) {
    return collection
      .getFilteredByGlob("_data/_resume/experience/recent/*.md")
      .reverse()
  })
  config.addCollection("resumePriorExperience", function (collection) {
    return collection
      .getFilteredByGlob("_data/_resume/experience/prior/*.md")
      .reverse()
  })
  config.addCollection("resumeSkills", function (collection) {
    return collection.getFilteredByTags("resume", "skills")
  })
  config.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit)
  })
  config.addFilter("sortByOrder", function (values) {
    let vals = [...values]
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
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
