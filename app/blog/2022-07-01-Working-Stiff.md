---
title: Working Stiff
author: C.S. Webb
date: 2022-07-01
image: assets/images/FUXlTbkXoAEnHgN.jpeg
imageAlt: Drive-in Movie
description: These are pain points on my road to embracing Eleventy as a templating editor and jamstack CMS.
tags: ["post", "featured"]
---

This past week I have worked to master a tutorial by Kevin Powell about Eleventy. I've tried to get a working example of an Eleventy blog at least over the last two years. I seem to have a working model. I am testing it now and I need to widen my research into side issues towards deployment.

Kevin Powell's video tutorial is fairly easy to grasp and follow. The main ideas I get. I run into bugs around the work flow.

## Side Issues

The first work flow issues have to do with use of the Visual Studio Code editor. I have avoiding switching from Sublime Text to Visual Studio Code for the last couple of years. I am comfortable with Sublime Text but VS code has lots of features that will be required and expected in a team environment so I am working to embrace it.

One feature of VS code is to use Emmet. Emmet is an extension that auto-types clips of code, speeding development. I cannot get it to work. I need to back-track and explore the VS Code rabbit hole and Emmet in order to embrace this part of the workflow.

A second set VS Code interfaces to embrace are to use the command line and connect directly to Github from within VS Code. These issues take one sentence to write but hours to research, study and discover. The video tutorials do not match what I see or are very quickly glossed over.

I feel a little embarrassed that I don't already know these things. The big kids have used VS Code for years. I'm afraid to ask but I must.

The next roadblock that I am hitting as to do with Nunjucks, a templating language that Kevin uses in his tutorial and many other developers are using. My website is built with Handlebars. The issue probably has to do with a requirement within Eleventy. I am guessing. I do not know.

However, in the tutorial Kevin Powell converts HTML pages into Nunjuck pages (njk files). When I do that Eleventy throws an error and refuses to work. When I convert the file back to HTML Eleventy compiles the files.

Maybe because my main pages are still HTML files, but the nunjuck "reverse" filter on the post for loop does not work. That is a bug.

To fix this bug I need to find out if I need to add something specific to the Eleventy config file, something to VS Code, or both and I don't know what.

## Next Step Issues

The files are compiled, such as they are. The next step is to post the project onto Github, and from there onto Netify. My Git skills are brittle. I have to relearn it every time I work with it because it isn't a daily thing for me.

I logged into Github and created a repository space to put the project but I could not get Git to upload the files using the command line. I had to drag the files from my computer and drop them into the repository. That's lame.

The next thing for that is to change my files and upload changes to Github. When that does not work I will have to stop and trouble shoot the issue.

In the perfect work environment world I would be using the VS Code command line environment to upload to Github. The big kids make it look so easy.

The next step is to link the Github repo to Netlify and make it live on the Internet. I logged into Netlify and uploaded the project but I don't know from there how to go "live". Do I need to have a domain name? Is there a Netlify domain that I can use just to see it working? I need to take time to study Netlify next.

So those are the side issues so far. Watch this space.

