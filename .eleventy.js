const { DateTime } = require("luxon");
const Image = require('@11ty/eleventy-img');
const path = require('path');
const outdent = require('outdent');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 100vw, 50vw"
  let srcPrefix = `assets/images/`
  // ... so you don't have to enter path info for each ref,
  //     but also means you have to store them there
  //     --- which probably is best (IMHO)
  src = srcPrefix + src
  console.log(`Generating image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`)
  }  
  let metadata = await Image(src, {
    widths: [600, 900, 1500],
    formats: ['webp', 'jpeg'],
    outputDir: 'dist/assets/images',
    urlPath: 'assets/images/',
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    }
  })  
  let lowsrc = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]
  return outdent `<picture>
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`
    }).join("\n")}
    <img
      src="${lowsrc.url}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
  </picture>`
}

module.exports = function(eleventyConfig) {
  // 061123 Navigation Plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
		files: './app/css/**/*.css'
	});
  eleventyConfig.addWatchTarget("./app/scss/");
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
  // Default root variable:
  // eleventyConfig.addGlobalData("root", () => "");
  // This suggestion to slice the '/' off does not work (?)
  const origUrlFilter = eleventyConfig.getFilter("url");
  eleventyConfig.addFilter("url", function (url, pathPrefixOverride) {
    const _url = origUrlFilter(url, pathPrefixOverride);
    if (_url.startsWith("/") && !_url.startsWith("//")) {
      return _url.slice(1);
    }
    return _url;
  });

    // Return your Object options:
    return {
      dir: {
        input: "app",
        output: "dist"
      },
//      pathPrefix: '',
      markdownTemplateEngine: "njk"
    };
  
  }