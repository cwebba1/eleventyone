---
title: Typographical odyssey – Rabbit holes and gotchas
author: Craig Webb
date: 2024-04-07
tags: ['post', 'featured']
image: assets/images/Variable-Fonts.jpg
imageAlt: Variable Fonts - The future of typography has already begun.
description: My recent deep dive into web typography to replace static fonts with variable fonts, replace my font stack, and other details. 
img01: 1600 / 800
templateEngineOverride: njk,md
---
Last night I completed a complex revision of the typography for my WordPress Blog. Today I posted the new CSS and assets to my server. It worked. Beautiful. I edited an article and published it. Publishing is always a victory. 

## My typographical odyssey begins

Revising my stylesheet took over a month. The project started when I wanted to transfer an article from my Eleventy blog to my WordPress blog. A slight typographical oddity caused me to discover that my source fonts had changed.

I used fonts hosted on Google Fonts. I discovered that the static Open Sans Google font has changed to be a variable font. I needed to update my fonts.

I decided to download the new variable font versions and to host them on my local server.

One reason to host fonts locally is to comply with GDPR privacy laws. GDPR laws protect European users from tracking. Marketers and hackers can track data from fonts loaded on Google's servers.

I've also found that connecting to external assets can cause problems.

Recently I looked at the code of an old client's website. I found that years ago I had connected to a CDN for Twitter Bootstrap version 2.5. Twitter Bootstrap removed the code from the CDN. That broke my client's website.

So I want all assets to be local to protect any website I am working on from any unanticipated outside changes.

My objectives were to:
A. Convert to variable fonts
B. Host fonts locally

Easypeasy. Not so easy. I proceeded to go on an odyssey of many rabbit-holes and gotchas.

## Rabbit hole – Getting variable fonts

<figure class="left huge">
<a href="{{root}}assets/images/Ubuntu-font.jpeg" title="Ubuntu Font"><image src="{{root}}assets/images/Ubuntu-font.jpeg" style="aspect-ratio: {{img01}};" alt="Ubuntu Font" ></a>
<figcaption>Ubuntu Variable Font</figcaptions>
</figure>

I use a second font for my H-tag headlines, Ubuntu font. Google hosts an Ubuntu font that I was using but it is not variable.

Working through typography tutorials I found rumors of an Ubuntu variable font. A developer test demonstrated an Ubuntu variable font example. I downloaded the font from the tutorial but I couldn't get it to work. I didn't know the right name to use to link to the font.

Research showed that Ubuntu is a framework for Linux. The Ubuntu framework homepage includes a page demonstrating the <a href="https://design.ubuntu.com/font">variable Ubuntu font</a>.  

I looked at the Ubuntu page source code and found links to a CDN host. I downloaded the fonts from the CDN. Then I found <a href="https://github.com/canonical/vanilla-framework/blob/main/scss/_base_fontfaces.scss">proper naming for Ubuntu variable fonts on Github</a>.
I was able to download the font, copy Ubuntu's font naming, and successfully load and test the font. Great. 

Meanwhile I had many other details to tackle. I read more tutorials about linking fonts to websites. Previously I linked to Google fonts in the head section of my HTML page. To host locally I need to use @font-face declarations at the top of my CSS.

## Rabbit hole – System fonts and font fallbacks

A popular new typography method is to load system fonts as a backup. The idea of system-ui fonts is to link to fonts that are on any system. However, system fonts do not reflect the font styles I use. I added a list of system fonts to a reset at the top of my cascade. System fonts are generic and dull. I hope I won't need them.

An older method of font fallbacks is to have a "font-stack" of fonts to load if the primary fonts are unavailable. The purpose of choosing fallback fonts is that they will look similar to my font styles.

I selected my font-stack based on what fonts are on computers, based on current software. My old 2016 font stack was out of date. I selected a new series of fonts to match the style of my headline font.

My font-stack list starts with a custom property. Then I include my font in case the custom property does not work. Finally I include a list of similar fonts that potentially are on the user's computers. If none of that works the system-ui fonts will load from the reset.


## Rabbit hole – Code debt and synchronized code bases

Updating fonts required revisions to the stylesheet. My WordPress CSS matches my website more or less. I converted old SASS values to custom properties and removed old proprietary declarations.

## Rabbit hole – Connecting fonts in WordPress

I tried to load the local font paths into my WordPress functions php. I failed. Most WordPress tutorials only show how to link to Google fonts. Few show a clear link to loading local fonts. WordPress tutorials are junk to read. Also, WordPress is changing into a creepy framework. It is not a developer friendly space anymore. I decided to load the new fonts through CSS.

## Rabbit hole – Google Gotcha

While working I discovered that the Open Sans fonts were not loading. Google provides the ability to download variable fonts but the fonts are in .ttf format. Variable fonts need to be in .woff2 format to work. Following a <a href="https://henry.codes/writing/how-to-convert-variable-ttf-font-files-to-woff2/">tip from Henry Desroches</a>, I found an <a href="https://github.com/google/woff2">application on Github</a> to convert fonts. I installed it on my computer and converted the Open Sans font via the terminal.

Now the variable fonts work as expected. I've made a major update to both my WordPress and my website.
