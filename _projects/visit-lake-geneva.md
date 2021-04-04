---
title: Visit Lake Geneva
thumbnail: /assets/img/projects/visit-lake-geneva-main.png
skills: WordPress, performance improvements
excerpt: WordPress theme performance improvements.
order: 90
---

Visit Lake Geneva is a chamber located in Lake Geneva, WI. They wanted to improve their website load time, so my aim on this project was to improve site performance. The changes I made increased site speed by ~10 seconds based on a 3G connection.

These were the basic areas I addressed:

* Replaced heavy WordPress plugins (Ubermenu and Revolution Slider) and refactored code to use JavaScript plugins pre-bundled with Foundation (already in use on site)
* Added task runner (Gulp) to minify and concatenate CSS and JavaScript files
* Compressed theme images
* Lazyloaded images and YouTube videos on homepage
* Lazyloaded fonts
* Enqueued page-specific scripts (Lightboxes, etc.) only on pages where used
* Improved post queries by moving some query logic to [pre_get_posts](https://developer.wordpress.org/reference/hooks/pre_get_posts/) to remove duplicate queries

*This project is no longer available to view on the web.*

*Created @ Vector & Ink*
