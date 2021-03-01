module.exports = function(eleventyConfig) {
  let markdownIt = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
  });
  
  eleventyConfig.setLibrary('md', markdownIt.use(require('markdown-it-attrs')));

  // Copy anything in the assets/ & /files folders verbatim
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('files');

  // Add 'sort' filter -- sorts a set of pages by `order` data
  eleventyConfig.addFilter('sort', function(collectionObjects) {
    return collectionObjects.sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  // Don't watch .gitignore
  // git ignores compiled CSS, but lets 11ty recompile on changes to CSS file
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes'
    }
  }
};