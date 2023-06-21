---
title: Eleventy Image Shortcode Test
author: Craig Webb
date: 2022-07-23
tags: ['post', 'featured']
image: assets/images/The-Day-1900_Hodler.jpeg
imageAlt: The day, 1900 Hodler
description: Eleventy is a tjavascript-based templating system gaining tracktion in the web development comunity. It is facile, fast and flexible. 
templateEngineOverride: njk,md
---

## This is a test of the image plugin.

William Gale Gedney.1932-1989. Porch Light. Leatherwood Kentucky,1964  


As of right now – 072422 – This test is failing. At the end of the 072322 session I pulled code for the Eleventy Image Plugin out of .eleventy.js and the image shortcode that belongs on this page.

<figure style="width: 12em; float:left; margin-right:1em;">
<image src="{{root}}assets/images/Edward-Bainbridge-Copnall_1934.png" alt="Edward Bainbridge Copnall" style="(min-width: 30em) 50vw, 100vw; float:left;">
<figcaption>Edward Bainbridge Copnall (British, 1903-1973), Architectural Aspiration, 1934</figcaptions>
</figure>

I have two code examples, one each from two developers with published tutorials about installing the Image Plugin.

The Debugging warning at the end of session was:  

`Template render error` was thrown  
[11ty] > ENOENT: no such file or directory, stat '/ assets/images//assets/images/Porch-Light.jpeg'  

The '/' at the front of the image path tells me that I am again dealing with path issues. I am left wondering if I will need to do the same path correction as I did with the index.html and blog.html. It sure looks like it.

I wonder if I need to create a factory function to correct the path every time I install any Eleventy pluging or interface?

In mho Eleventy's /path/post/index.html default settup is an opinionated program.

## My plan for today:

Today I am backing up what progress that I have made so that I can safely re-test and break the program. I believe that I need to review the changes that I made during the last path deep-dive and guess what I might insert into the .eleventy.js to correct the path to images.

After that I can work on modifying whatever comes out.
I would like images to insert within a figure with a figcaption. No one is doing that. I need it.
