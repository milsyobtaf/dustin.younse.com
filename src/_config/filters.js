import util from "util"
import { DateTime } from "luxon"

export default function (eleventyConfig) {
  // Formatting tokens for luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
  // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "dd LLLL yyyy"
    )
  })

  eleventyConfig.addFilter("formatDateUS", (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "LLLL dd, yyyy"
    )
  })

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd")
  })

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return []
    }
    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers)
  })

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "posts", "blogpost"].indexOf(tag) === -1
    )
  })

  eleventyConfig.addFilter("sortAlphabetically", (strings) =>
    (strings || []).sort((b, a) => b.localeCompare(a))
  )

  eleventyConfig.addFilter("sortByOrder", function (values) {
    let vals = [...values]
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
  })

  eleventyConfig.addFilter("countEntries", function (entries) {
    return Object.keys(entries).length
  })

  // dump filter to inspect data in templates
  // from https://www.raresportan.com/eleventy-part-two/
  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj)
  })

  // Return the keys used in an object
  eleventyConfig.addFilter("getKeys", (target) => {
    return Object.keys(target)
  })
}
