const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
require('prismjs/components');

module.exports = function(config) {
  config.addPassthroughCopy('assets');
  config.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: 'content',
      output: 'dist',
      includes: '../_includes',
      data: '../_data'
    }
  };
};
