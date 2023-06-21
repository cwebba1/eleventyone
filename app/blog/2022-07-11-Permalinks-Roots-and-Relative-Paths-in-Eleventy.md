---
title: Permalinks, Roots and Relative Paths in Eleventy
author: Craig Webb
date: 2022-07-11
image: assets/images/Apollo-11-moon-landing_at_Central-Park.jpg
imageAlt: Crowd in Central Park watches Apollo 11 moon landing on large TV screens
description: Documenting what I learned about Permalinks, Roots and Relative Paths in Eleventy while following a tutorial and making additional changes.
tags: ["post", "featured"]
---

## Permalinks, Roots and Relative Paths in Eleventy

[https://github.com/11ty/eleventy/issues/2099](https://github.com/11ty/eleventy/issues/2099)

Hi Peter deHaan,

Thank you for your help. I apologize for the slow response. I worked for three days over the 4th of July on this Eleventy project and I burned out.

I was able to use most of your suggestions. Now the website links are working.

Here is documentation for what I did:

I am following the Kevin Powell's ["Turn static HTML/CSS into a blog with CMS using the JAMStack"](https://www.youtube.com/watch?v=4wD00RT6d-g&t=1209s) tutorial that is posted on YouTube. 

However I am deviating from the tutorial in that I am altering the permalink function so that my Eleventy outputs pages with .html rather than folders containing index.html files.

On May 14th I got a tip from [@brob](https://twitter.com/brob) and [@eleven_ty](https://twitter.com/eleven_ty) how to change the permalink structure to do this.
[https://twitter.com/brob/status/1525521286314840065](https://twitter.com/brob/status/1525521286314840065)

<code>
// This changes resource.md output to write to /resource.html
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });
</code>

Why I landed on this page is that I needed to learn how to define and control relative paths in Eleventy. The navigation links were breaking in my output files.

– I removed pathPrefix as you suggested..
– I wrapped the top navigation links with <code>&#123;&#123; root &#125;&#125;&#123;&#123; '/index.html' | url &#125;&#125;</code> as you suggested. I tested with and without the <code>&#123;&#123; root &#125;&#125;</code> and it is needed. It causes the nav links to add ../index.html to the navigation within the 2nd level blog folder and the same link outputs as index.html at the root folder level.

The <code>&#123;&#123; root &#125;&#125;</code> is not needed on the blog links to articles. <code>&#123;&#123; post.url | url &#125;&#125;</code> is enough.
I searched for <code>&#123;&#123; root &#125;&#125;</code> online and through eleventy and nunjucks documentation and I do not find it. Where did you learn about <code>&#123;&#123; root &#125;&#125;</code>?

The <code>&#123;&#123; post.url | url &#125;&#125;</code> appears in eleventy docs here, [https://www.11ty.dev/docs/filters/url/#url-universal-filter](https://www.11ty.dev/docs/filters/url/#url-universal-filter) but I did not understand it. 

So to make this work I substituted Keven Powell's <code>&#123;&#123;post.url&#125;&#125;</code> for  <code>&#123;&#123; post.url | url &#125;&#125;</code>. 
It must be filtering? I'd like to understand more.

The root variable in ./app/blog/blog.json needed to stay as  
<code>{  
    "layout": "article.njk",  
    "tags": "post",  
    "root": "../"  
}</code>  

Removing the "/" causes the CSS to break.

So thank you for your contribution and kindness. This is about learning how to implement and control relative paths in Eleventy. I am sure there will be more to learn.