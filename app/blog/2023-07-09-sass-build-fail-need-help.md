---
title: Sass Build Systems fail Sass variables – Help!
author: Craig Webb
date: 2023-07-09
tags: ['post', 'featured']
image: assets/images/Margaret-C-Cook_illustration_1913-Walt-Whitman_Leaves-of-Grass.jpeg
imageAlt: An illustration by Margaret C. Cook for a 1913 edition of Walt Whitman’s Leaves of Grass.
description: My multiple build systems for SASS fail to process Sass variables and mixins. I describe the issue and ask for help.
templateEngineOverride: njk,md
---


I am working on an introduction to CSS Trigonometry tutorial by Kevin Powell. 
https://youtu.be/eO33Rh3GFGk

Everything works until the end of the tutorial where Kevin Powell demonstrates a Sass mixin to automatically process a series of CSS declarations.

I get an error that looks like this:<br>
<pre>
<code>
Error: Undefined variable.
	|
171	|	.circle:nth-of-type(#{$i + 1}) {
	|			      ^^
	|
  src/scss/trig.scss 171:27	root stylesheet
</code>
</pre>

I tracked down a live example of Kevin Powell's code example on Codepen here:
https://codepen.io/kevinpowell/pen/qBMQJVr

The exact same code works on his CodePen file. 
Reading CodePen documentation, I found a Sass testing playground at https://www.sassmeister.com/. Kevin Powell's code also compiles correctly there.

Therefor there must be a defect with my build system(s). I tested three.

I tested two development systems that use Gulp and one build system for Eleventy that does not use Gulp. All three give the same Undefined variable error.

My Sass build systems successfully process Sass partials and compile them to CSS. They are failing to process Sass mixins and variables.

I will list the package.json contents and pertinent portions of the three development systems below. My question is what are the differences between these build systems and CodePen or Sassmeister where Sass mixins and variables fail to process?

<pre>
<code>
 - – - – - – - – - – - – - – - – - – - – - – - – - – - – - – - –

Eleventy Package.json:
 - – - – - – - – - – - – - – - –
{
  "name": "cwebba_09",
  "version": "1.0.0",
  "description": "eleventy test site",
  "main": ".eleventy.js",
  "scripts": {
    "watch:sass": "sass --watch app/scss:app/css",
    "build:sass": "sass app/scss:app/css",
    "watch:eleventy": "eleventy --serve",
    "start": "npm-run-all build:sass --parallel watch:*",
    "build:eleventy": "eleventy",
    "build": "npm-run-all build:*",
    "debug": "DEBUG=* eleventy"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cwebba1/11ty-blog-site.git"
  },
  "bugs": {
    "url": "https://github.com/cwebba1/11ty-blog-site/issues"
  },
  "keywords": [],
  "author": "Craig Webb",
  "email": "cwebba1@gmail.com",
  "license": "MIT",
  "dependencies": {
    "@11ty/eleventy": "^2.0.1",
    "luxon": "^2.5.2",
    "markdown-it": "^13.0.1",
    "markdown-it-anchor": "^8.6.4",
    "nunjucks": "^3.2.3"
  },
  "devDependencies": {
    "@11ty/eleventy-img": "^2.0.1",
    "@11ty/eleventy-navigation": "^0.3.5",
    "npm-run-all": "^4.1.5",
    "outdent": "^0.8.0",
    "sass": "^1.53.0"
  }
}

.eleventy.js Config File:
 - – - – - – - – - – - – - – - –

const { DateTime } = require("luxon");
const Image = require('@11ty/eleventy-img');
const path = require('path');
const outdent = require('outdent');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
. . . 
module.exports = function(eleventyConfig) {
. . .
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
</code>
</pre>

 - – - – - – - – - – - – - – - – - – - – - – - – - – - – - – - –<br>

<pre>
<code>
Parallax Build System:
– Runs on NPM only, no Gulp file

SOURCE:
https://thinkdobecreate.com/articles/minimum-static-site-sass-setup/
Stephanie Eckles
Minimum Static Site Setup with Sass
Feb 19, 2022

Package.json:
 - – - – - – - – - – - – - – - –
{
    "name": "project",
    "version": "0.1.0",
    "description": "SASS compile|autoprefix|minimize and live-reload dev server using Browsersync for static HTML",
    "main": "public/index.html",
    "author": "5t3ph",
    "scripts": {
      "build:sass": "sass  --no-source-map src/sass:public/css",
      "copy:html": "copyfiles -u 1 ./src/*.html public",
      "copy:images": "copyfiles -u 1 ./src/assets/images/**.* public",
      "copy": "npm-run-all --parallel copy:*",
      "watch:html": "onchange 'src/*.html' -- npm run copy:html",
      "watch:images": "onchange 'src/assets/images/**.*' -- npm run copy:images",
      "watch:sass": "sass --watch src/scss:public/css",
      "watch": "npm-run-all --parallel watch:*",
      "serve": "browser-sync start --server public --files public",
      "start": "npm-run-all copy --parallel watch serve",
      "build": "npm-run-all copy:html build:*",
      "postbuild": "postcss public/css/*.css -u autoprefixer cssnano -r --no-map"
    },
    "dependencies": {
      "autoprefixer": "^10.4.2",
      "browser-sync": "^2.27.7",
      "copyfiles": "^2.4.1",
      "cssnano": "^5.0.17",
      "npm-run-all": "^4.1.5",
      "onchange": "^7.1.0",
      "postcss-cli": "^9.1.0",
      "sass": "^1.49.8"
    }
  }
  </code>
</pre>
 - – - – - – - – - – - – - – - – - – - – - – - – - – - – - – - –<br>

<pre>
<code>
Starter-Gulp-SASS-2023
– Created 011323 from Kevin Powell Github Repo ca Jun 26, 2019
– Updated with NPM modules and Gulpfile.js code from Gulp_2022

Package.json:
 - – - – - – - – - – - – - –
{
  "name": "sass-starter-project",
  "version": "1.0.0",
  "description": "2023 Gulp / SASS Build",
  "main": "index.js",
  "scripts": {
    "build": "gulp css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Craig Webb Art",
  "license": "MIT",
  "devDependencies": {
    "autoprefixer": "^10.4.12",
    "browser-sync": "^2.27.10",
    "gulp": "^4.0.2",
    "gulp-postcss": "^9.0.1",
    "gulp-sass": "^5.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "postcss": "^8.4.18",
    "sass": "^1.62.0"
  },
  "dependencies": {
    "postcss-preset-env": "^7.8.2"
  },
  "browserslist": [
    "defaults"
  ]
}

Gulpfile.js
 - – - – - – - – - – - – - –

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require("browser-sync").create();

function browser_sync(){
  browserSync.init({
      watch: true,
      server: "./dist"
  })
  };
  
const sassOptions = {
  outputStyle: "expanded"
};

// compile scss into css

function style() {
  const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };
return src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}
exports.style = style;

function watchTask() {
  browserSync.init({
    server: ".",
    browser: "firefox"
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}
exports.watchTask = watchTask;

exports.default = series( style, watchTask, parallel(browser_sync, watch));
</code>
</pre>










