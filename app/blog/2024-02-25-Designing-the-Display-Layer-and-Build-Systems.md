---
title: Designing the Display Layer and Build Systems
author: Craig Webb
date: 2024-02-25
tags: ['post', 'featured']
image: assets/images/workout.jpeg
imageAlt: Workout, one-handed push-up.
description: Recent work on build systems and design systems. 
templateEngineOverride: njk,md
---
<blockquote>
<dl>
  <dt><b>Build Systems</b></dt>
  <dd>Build systems are programs that transform source code written by engineers into executable programs that can be read by machines.</dd>
<br>
  <dt><b>Design Systems</b></dt>
  <dd>A design system is a collection of reusable components and clear standards intended to manage design at scale using components and patterns to build any number of applications.</dd>
</dl>
</blockquote>
<br>
Many times I&rsquo;ve written that I am good at design at the display layer. &ldquo;Display layer design&rdquo; does not appear in many job descriptions. What does display layer design mean? 

What I&rsquo;m saying is that I am good at and care about CSS. I understand the CSS cascade. My combined CSS and HTML &ldquo;layers&rdquo; of website design are semantic and well formed.

I&rsquo;ve built a library of component prototypes. I organize my CSS into SASS files so that I can quickly target or grab elements or components.

My semantic, organized code enhances my client website&rsquo;s SEO ranking. Combined with good content, I&rsquo;ve placed client websites on page one of Google. Many for many years.  

I really care about CSS. I spend lots of time on CSS research and development. The last two or five years has seen an incredible surge in new CSS elements, values and declaration patterns. The new CSS properties are exciting. The bottom-line news for hiring managers is that &ldquo;you might not need React for that&rdquo;.

Creative managers recognize the importance of design systems. Design systems control and enhance company brand development and cohesion. Many popular technologies exist to abstract and document design systems. But where the design system rubber really hits the road is at the CSS display layer.

<h2>Build Systems</h2>

Part of programming and design is creating the tools to use while coding. I have many &ldquo;build systems&rdquo;, constructed in Node, that I use or experiment with. To build my code I use various build systems that compile SASS, PostCSS, and JavaScript. I use templates to break HTML pages into components. The components compile with data using JavaScript or PHP.

Recently I updated my OpenProps ShortStack build system. I also installed a CSS design system by Andy Bell called &ldquo;CSS Project Boilerplate&rdquo;.  CSS Project Boilerplate combines CUBE methodology with Tailwind.

<h2>OpenProps Design System</h2>

OpenProps is a design system by Adam Argyle. OpenProps breaks CSS elements and declarations down into elemental custom properties. Custom properties are equivalent to design tokens.

Adam Argyle offers a slew of build systems along with his OpenProps design system library. A variety of build systems are available. Adam&rsquo;s build systems combine OpenProps with React, or Vue, or Vite, or PHP. I happen to like ShortStack, which uses Rollup, because it is simple. I focus mainly on CSS and HTML design.

The ShortStack build on Adam&rsquo;s <a href="https://stackblitz.com/@argyleink" rel="noopener noreferrer nofollow" 
   target="_blank">StackBlitz Collections site</a> is out of date. I fixed the problem. Rollup 3 and the rollup-terser-plugin were breaking the build system. 

Adam Argyle installs his OpenProps build systems using an NPM module with minified CSS. I inserted the un-minified CSS src files from Adam Argyle&rsquo;s OpenProps Github repo into my fork. They are organized by category. That way I am able to read the CSS while I work.

I posted my modified ShortStack OpenProps to my Github page.

Now that I have it working I am exploring the abundance of custom properties that Adam has put together. It is an exhaustive array. 

I will build webpages and prototypes using OpenProps. I plan to learn from Adam&rsquo;s design system. I will incorporate some of it into my own. Some of Adam&rsquo;s custom property names are verbose. I prefer short names.

<h2>Andy Bell&rsquo;s CSS Project Boilerplate</h2>

Andy Bell published an article recently. The article, <a href="https://piccalil.li/blog/a-css-project-boilerplate/" rel="noopener noreferrer nofollow" 
   target="_blank">A CSS project boilerplate</a>, introduces his build system for CSS. Andy Bell, like Adam Argyle, is an important design maven. I am interested in anything he does. I downloaded Andy Bell&rsquo;s boilerplate, installed and tested it.

Some interesting and surprising facts about Andy Bell&rsquo;s CSS Project Boilerplate system:

First, Andy Bell is including a subset of Tailwind. Sacrilege! Andy says that he has built a JavaScript configuration that weeds out most of the Tailwind code. Actually what I see is a rather small amount of CSS with some few custom properties. I may not have the Tailwind portion working yet.

Second, The CSS Project Boilerplate has CSS declaration patterns derived from his CUBE design methodology. The code is well documented with comments.

Andy Bell and Heydon Pickering have co-published a website called <a href="https://every-layout.dev/" rel="noopener noreferrer nofollow" 
   target="_blank">EveryLayout</a>. It consists of a series of CSS and HTML component patterns.

So Andy&rsquo;s CSS Project Boilerplate consists of a subset of Tailwind in service to his CUBE methodology. It is documented with excerpts from Every Layout. Very cool. 

Andy Bell&rsquo;s CSS Project Boilerplate build system only processes CSS. I plan to add NPM module functions to copy and post HTML files to the distribution folder.

I am still exploring Andy Bell&rsquo;s CSS Project Boilerplate. I see the CUBE styles exported but not the Tailwind styles. The Tailwind styles are in JSON. I may need to work on the configuration.

In parallel with working on the CSS Project Boilerplate, I&rsquo;ve happened upon numerous articles about Tailwind. Tailwind, although popular with JavaScript developers, is controversial. I will explore issues with Tailwind in a future article.

Other popular design system libraries include Bootstrap and Material Design. Major companies such as Salesforce and governments including the UK and the US have their own branded design systems.

I am keen to explore and familiarize myself with others while I build and refine my own.