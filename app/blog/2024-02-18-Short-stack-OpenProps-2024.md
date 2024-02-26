---
title: Short-stack OpenProps 2024
author: Craig Webb
date: 2024-02-18
tags: ['post', 'featured']
image: assets/images/conference.jpeg
imageAlt: Developer conference, standing room only
description: I first installed Short-stack OpenProps in 2022. The development build had problems with Terser and Rollup 3.0. This year I fixed it. 
templateEngineOverride: njk,md
---
<blockquote>
    <h4>ready to rat-tat rock & roll.</h4>
      <small><a href="https://www.youtube.com/watch?v=qjobBx2P6C0" rel="noopener noreferrer nofollow" target="_blank">Rip It Up / Ready Teddy</a></small>
</blockquote>
    <h3>Re-installing Short-Stack OpenProps in 2024</h3>

    I revisited Shortstack OpenProps hoping to get a clean installation. I want to explore the OpenProps custom property library as a potential portion of my design system.

    <p>I found that dependency problems dating from 2022 persist. Shortstack OpenProps stopped working properly when Rollup 3.0 was released. Rollup 3.0 had a peer dependency conflict with Rollup-plugin-terser.</p>
    
    <p>The latest Terser was released three days ago. It is not the same as Rollup-plugin-terser. I hoped that the Rollup 3.0 / Rollup-plugin-terser conflict would be resolved by now.</p>

<h2>Dependencies</h2>
    <p>Browsersync seems to be working. I had to update caniuse.lite. That update conflicted with the Terser / Rollup peer dependency problem. My programming skills are intermediate. I do not relish the idea of fixing this two-years-old issue. I hope someone has fixed the dependency issues and has written a tutorial/blog report on it.</p>

    <p>Adam Argyle sent a note to me in 2022 suggesting that I try using Vite OpenProps instead of ShortStack OpenProps. I plan to try that also.</p>

    <h2>Solution Found:</h2>
    <p>Before hanging up the project I did a search for &ldquo;Terser, Rollup-plugin-terser, and Rollup 3.0 dependency conflict&rdquo; and found a solution here: <a href="https://wilcovanes.ch/articles/peer-dependency-conflict-from-the-rollup-plugin-terser-package/" rel="noopener noreferrer nofollow" 
   target="_blank">Peer dependency conflict from the rollup-plugin-terser package, Feb 4, 2023</a></p>
    <p>I followed directions and fixed the rollup/terser issue. I made detailed notes for myself.</p>

    <h2>Back to square one</h2>
    <p>I find myself referring back to my 2022 version of shortstack OpenProps to retread previously burned ground.</p>

    <p>Now that it&rsquo;s working I start by wrangling the layout on the index.html file. The layout is a grid layout in columns. The header on the left, beside that is the body, and next the footer.</p>
    <p>This layout is within an @media query landscape declaration. Why anyone would want to put that type of layout &ndash; or ANY type of layout in a landscape media query is beyond me.</p>

    <p> I looked for a cheet sheet for the OpenProps Custom Properties. I may make my own. OpenProps is released as a minified, unreadable CSS within a NPM module. In order to get an unminified CSS it is necessary to go to the OpenProps Github repo, download the repo and extract the source CSS files.</p>

    <p>I did that and I&rsquo;ve added my own CSS file at the bottom of the index.css file. It will serve as my new pair of glasses. I will want to undo certain opinionated property declarations.</p>

    <p>Now that I have that installed I don&rsquo;t need the NPM module. I will have to occasionally go to the Github repo and download updates.</p>
    
    <h2>Custom Property Libraries</h2>
    <p>I want to try other custom property libraries.</p>

    <p>I&rsquo;m looking for the custom property library that I want to follow. I am most interested in how custom properties are named.</p>
    
    <p>I study a variety of tutorials by Kevin Powell and make CSS and layout patterns. I notice how he names lists of custom properties.</p>

    <p>This week I read a blog post by Andy Bell about his <a href="https://piccalil.li/blog/a-css-project-boilerplate/" rel="noopener noreferrer nofollow" 
   target="_blank">CSS project boilerplate</a>, which he says is derived from Tailwind. I&rsquo;m going to download it from his repo and see how it works. Andy Bell says his boilerplate eliminates some of the Tailwind cruft.</p>
    <p>I also have a file full of basic old fashioned CSS stylesheets that I want to test.</p>
    <p>There is so much work to do. Even the tiniest things. It amazes me that after all these years I do not have a solid pattern for a button.</p>

