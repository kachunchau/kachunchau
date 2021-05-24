module.exports =  function(eleventyConfig) {
  // Turned off .gitignore to watch for CSS changes in _tmp/
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget('_tmp/styles.css');
  eleventyConfig.addWatchTarget('src/assets/css/plugins/**/*.css');
  eleventyConfig.addPassthroughCopy({ '_tmp/styles.css': 'assets/css/styles.css' });

  // Passthrough file copy paths are relative to the project root and not the input directory
  // Copy static assets to _site/
  eleventyConfig.addPassthroughCopy('favicon.ico');

  // Copy assets/* to _site/
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/css/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/css/plugins');
  eleventyConfig.addPassthroughCopy('src/assets/js');

  return {
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',

      // These values is relative to your input directory.
      layouts: '_layouts'
    }
  }
};