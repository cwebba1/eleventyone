---
title: Exploring modern CSS and color prototypes
author: Craig Webb
date: 2024-04-21
tags: ['post', 'featured']
image: assets/images/monochrome-color-swatches.png
imageAlt: A monochrome swatch of interpolated colors using the CSS relative color property.
description: Digging into modern CSS to define and control color for themes. 
templateEngineOverride: njk,md
---
<style>
      @layer support, demo;

/* The @property declaration is outside the :root (?) */
  @property 
  --brand {
  syntax: "<color>";
  inherits: false;
  initial-value: orangered;
}

  /* The demo layer holds the guts of the prototype. It has priority because of the @layer statement above. */
@layer demo {
  /* definition */
:root, * { 
/*  --brand: hotpink;*/
  --brand-highlight: color-mix(in oklab, var(--brand), white);
  --brand-shadow: color-mix(in oklab, var(--brand), black);
  --brand-gradient: linear-gradient(in oklab,
    var(--brand-highlight),
    var(--brand)
  );
}
/* usage */
  .example {
    background: var(--brand-gradient);
    border: 5px solid var(--brand-highlight);
    text-shadow: 0 1px 0 var(--brand-shadow);    
    padding: 1rem 2rem;
    font-size: 3vw;
    color:black!important;
    place:center;
    margin:auto;
  }
}

@layer support {
span {margin:auto; display:flex;}

code { font-size:0.9875rem;}

.columns {
  list-style: none;
  list-style-position: outside;
}

.info {
border:1px solid #771b33;
padding:0;
padding:0.5rem 1rem 0 1rem;
margin:0;
margin-bottom:0.5rem;  
}

@media screen and (min-width: 720px) {

.columns {
  columns:2;
  gap: 0.5rem;
  margin:0;
  margin: 0.5em 0 0.5em -2.5rem;
}
.twin {
  width:calc(50% - 1rem);
  display:inline-block;
vertical-align:top;
    }
  }
}
 </style> 

This weekend I studied CSS and JavaScript and made new prototypes. 

## Typed Custom properties
I studied using the @property in CSS to add type declarations to custom properties.



the @property declaration can be used to harden custom property values. The idea is to harden custom properties by declaring a syntax and initial-values. If a mistake is made later in the cascade, then the declaration will fall back to the initial value.

<section class="info">
<div class="twin">
<h4>Valid CSS Property Types</h4>
<ul class="columns">
<li>&#60;length&#62;</li>
<li>&#60;length-percentage&#62;</li>
  <li>&#60;number&#62;</li>
  <li>&#60;percentage&#62;</li>
  <li>&#60;color&#62;</li>
  <li>&#60;image&#62;</li>
  <li>&#60;url&#62;</li>
  <li>&#60;integer&#62;</li>
  <li>&#60;angle&#62;</li>
  <li>&#60;time&#62;</li>
  <li>&#60;resolution&#62;</li>
  <li>&#60;transform-list&#62;</li>
  <li>&#60;transform-function&#62;</li>
  <li>&#60;custom&#62;</li>
</ul>
</div>
<div class="twin">
<h4>@property Syntax:</h4>
<p> The CSS Property Type is defined using Syntax.</p>
<code><pre>
@property --brand {
  syntax: "&#60;color&#62;";
  inherits: false;
  initial-value: hotpink;
  }</pre></code>

</div>
</section>
The @property CSS prototype also included using the @layer property. I studied the @scope property but I did not need to use it for this project.

<span><button class="example">
  @property
    </button></span>

Another little thing in the @property CSS prototype is that it uses a combined <code>:root, * { }</code> declaration. 

I studied the differences between placing custom properties inside :root{}, HTML{} and *{}. I am not certain but I think the <code>:root, * { }</code> combo overrides the custom property <a href="https://css-tricks.com/the-big-gotcha-with-custom-properties/">&ldquo;gotcha&rdquo;</a> that Chris Coyer writes about in CSS-Tricks. Maybe it needs to be contained within a @scope property. I am testing.

While working on the @property prototype I also studied the CSS Color-mix property and the CSS Relative-color property.

## MSN tools
While studying the CSS Relative-color property I reviewed tutorials on developer.mozilla.org and found some useful tools.

Using the CSS Relative-color property, I created a Color palette generator that includes settings for Complementary, Triadic, Tetradic, and Monochrome interpolated colors. 

I also copied and built a &ldquo;Live-UI-color-scheme-updater&rdquo;. The color-scheme uses CSS Relative-color properties to add color to a layout. The Live-UI-color-scheme-updater includes a slider to adjust the hue. That will be useful when I create my color/chroma triangle, to change colors.

## Color.js

Next I experimented with Color.js. Color.js is a JavaScript library to manipulate color using modern color-level 5 color spaces. 

Using Color.js and JavaScript I was able to display colors and color names. I created gradients.

I studied JavaScript to set values as text and display colored boxes. I am able to set a color background in a box and label it with the color declaration.

I tried to interpolate sets of colors and display the set with text. I was unable to figure out the JavaScript to display an array of objects and set properties with the time available.

## Other stuff

I began to look for ways to place objects using absolute positioning. I read about SASS mixins looking for ways to automate outputting CSS objects to a placed target.

My goals are to create a color palette for my websites that I can control and modify. I also want to create the color/chroma triangle with labeled swatches that I can select and copy.

The pieces are there for what I want to build. I need to automate the code so I can create it without a ton of manual labor.

#### Color.js tools:
<a href="https://colorjs.io/apps/picker/hsl">https://colorjs.io/apps/picker/hsl</a><br>
<a href="https://colorjs.io/apps/gradients/">https://colorjs.io/apps/gradients/</a><br>
<a href="https://colorjs.io/apps/named/">https://colorjs.io/apps/named/</a><br>

#### @property lecture:
<a href="https://epic-web-2024-at-property.netlify.app/01-first-var/">slide lecture by Adam Argyle for the Epic Web Conference.</a>
