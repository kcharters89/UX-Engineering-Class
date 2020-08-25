module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    return {
      passthroughFileCopy: true
    }
   /*
   What eleventyConfig.addPassthroughCopy('css') does is tells 11ty to look for a folder named 
   css and copy it through to the output folder. 
   The passthroughFileCopy: true is needed in order to use the addPassthroughCopy function.
   */
  }
  module.exports = {
    templateFormats: [
      "md",
      "css"
    ],
    passthroughFileCopy: true
  };