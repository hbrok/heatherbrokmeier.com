---
title: Visit Lake Geneva
thumbnail: /assets/img/projects/visit-lake-geneva-main.png
skills: WordPress, Performance improvements
excerpt: WordPress theme performance improvements.
order: 90
---

My aim on this project was to improve site performance. The changes I made increased site speed by an average of ~10s, based on a 3G connection.

These were the basic things I addressed:

* Replaced heavy WordPress plugins (Ubermenu and Revolution Slider) with JS plugins pre-bundled with Foundation (already in use on the site)
* Added task runner (Gulp) to minify and concatenate CSS and JavaScript files
* Compressed theme images
* Lazyloaded images and YouTube videos on homepage
* Lazyloaded fonts
* Enqueued page-specific scripts (Lightboxes, etc.) only on pages where used
* Improved post queries by moving some query logic to [pre_get_posts](https://codex.wordpress.org/Plugin_API/Action_Reference/pre_get_posts) to remove duplicate queries

*Created @ Vector & Ink*
