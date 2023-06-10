---
title: Return to Forever
author: Craig Webb
date: 2023-06-04
tags: ['post', 'featured']
image: assets/images/Trent-Sizemone.jpeg
imageAlt: Trent Sizemone photograph
description: The Once and Future King Returns to Eleventy after a long sojourn and finds the kingdom in pretty good shape. 
templateEngineOverride: njk,md
---

## Return to Forever

*“You must live in the present. There is no other land; there is no other life but this.”
– Henry David Thoreau*

What I do shows what I love.
I've just completed a client project using the new WordPress Block Editing system. The new WordPress Block Editing system is a bear. It is supposed to make it easy for clients to edit thier blogs themselves. It makes it really hard for developers to code.

<figure style="width: 13em; float:left; margin-right:1em;">
<image src="{{root}}assets/images/Rudolf-Koppitz-Austrian_1884-1936.jpeg" alt=" Photograph by Rudolf Koppitz, Austrian,1884-1936" style="(min-width: 30em) 50vw, 100vw; float:left;">
<figcaption>Photograph by Rudolf Koppitz, Austrian,1884-1936</figcaptions>
</figure>

I stumbled onto a YouTube tutorial by Zach Leatherman demonstrating a six-minute build to launch an Eleventy blog and watching it inspired me to give Eleventy a new start.

I sat off by myself at a developer's Meetup and worked though the tutorial. The video is about six munutes long but I needed to start and stop and play-back and see full screen to see the code and follow the steps.

I built the Eleventy build in CWebba_09b.

After getting it going I came home and sat in the back yard with my computer. I reopened the CWebba_09 Eleventy build and performed archeological research to figure out what I had done and the current status from nearly a year ago.

I backed up the documents in GIT first. When I launched Eleventy in the terminal I got NPM signals that node modules needed to be updated. I ended up updating Eleventy itself to the newer 2.0 version.

I thought that where I stopped a year ago that I quit because I was frustrated by the way Eleventy defaults to storing images into folders. I also did not like the way Eleventy creates folders for each blog entry containing an index.html file.

Zach wrote somewhere that it is the way the "cool kids" do it, but I don't want to have zillions of index.html files polluting my computer. I will never be able to find anything that way.

Looking in the Dist folder, I see that I seem to have resolved both issues. This post is an experiment to prove that to myself.

I've run the test. My images are located in the asset/images folder. The markdown file outputs as HTML. Hooray!

Now I am wondering why I gave up on eleventy. It looks like I won the war.