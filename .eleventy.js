export default function (config) {
  config.addPassthroughCopy({ public: "./" })
  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  })
  config.addCollection("resumeEducation", function (collection) {
    return collection.getFilteredByTags("resume", "education")
  })
  config.addCollection("resumeRecentExperience", function (collection) {
    return collection.getFilteredByTags("resume", "recent_experience")
  })
  config.addCollection("resumePriorExperience", function (collection) {
    return collection.getFilteredByTags("resume", "prior_experience")
  })
  config.addCollection("resumeSkills", function (collection) {
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
