---
title: UC Hunting Properties
skills: WordPress, HTML, CSS, PHP, SVG
thumbnail: /assets/img/projects/uchunting-properties-main.png
link: https://www.uchuntingproperties.com/
order: 100
---

Custom WordPress site built for UC Hunting Properties, a realty company in Wisconsin.

This site has extensive customization in the WordPress backend using Advanced Custom Fields. With multiple offices each needing their own login to add and update properties, I focused on making the user interface for editing properties as straight-forward as possible.

There is a lot going on "behind the scenes" on this site. Each office UCH is affiliated with needed an individual login for adding, updating, and managing their own listings. New listings are approved by an administrator before being published.

One pain point from their previous website was keeping track of their city/state/county taxonomy that was used for searching properties on the front end. Editors were able to create new terms (or skip adding them at all) which resulted in duplicate terms, misspelled terms, and some properties with no terms at all. This made some properties impossible to find in the search.

In order to solve this, we connected to the Google Maps Geocoding API to automatically fetch the city/state/county based on latitude and longitude. City/state/county data is still saved in a taxonomy to make querying posts easier, but it's done on post save without editors having to do anything.

Project developed for Vector & Ink.
