const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./app/css");
	//eleventyConfig.addWatchTarget("app/css");
    eleventyConfig.addPassthroughCopy("./app/assets");
	//eleventyConfig.addWatchTarget("app/assets");
  // eleventyConfig Format date
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  // This changes resource.md output to write to /resource.html
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });
    // Return your Object options:
    return {
      dir: {
        input: "app",
        output: "dist"
      },
      pathPrefix: '../blog/'
    };
  }