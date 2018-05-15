---
layout: project
title: Visit Lake Geneva
thumbnail: /assets/img/projects/visit-lake-geneva-main.png
skills: Performance improvements
link: https://www.visitlakegeneva.com/
order: 100
---

My aim on this project was to improve site performance. The changes I made increased site speed by an average of ~10s, based on a 3G connection.

These were the basic things I addressed:

* Replaced WordPress plugins (Ubermenu and Revolution Slider) with plugins pre-bundled with Foundation (which the site was already using)
* Added task runner (gulp) to minify and concatenate CSS and JavaScript files
* Compressed all theme images
* Lazyloaded images and YouTube videos on homepage
* Lazyloaded fonts
* Enqueued page-specific scripts (Lightboxes, etc.) only on pages where they're used and not across the entire site
* Improved post queries and moved some query logic to [pre_get_posts](https://codex.wordpress.org/Plugin_API/Action_Reference/pre_get_posts) to remove duplicate queries

Project developed for Vector & Ink.
