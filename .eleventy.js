const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Copy assets (CSS will be processed separately)
  eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
  eleventyConfig.addPassthroughCopy({"src/assets/videos": "assets/videos"});
  eleventyConfig.addPassthroughCopy({"src/assets/js": "assets/js"});
  eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Copy the archived site as-is
  eleventyConfig.addPassthroughCopy("v1");

  // Watch for changes during development
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");
  eleventyConfig.addWatchTarget("./src/assets/images/");
  
  // Ignore files from processing
  eleventyConfig.ignores.add("src/assets/**/*.md");
  
  // Image shortcode for optimization
  eleventyConfig.addAsyncShortcode("image", async function(src, alt, sizes = "100vw") {
    if (!alt) {
      throw new Error(`Missing \`alt\` attribute on image shortcode for: ${src}`);
    }
    
    const fullSrc = path.join("./src/assets/images/", src);
    
    let metadata = await Image(fullSrc, {
      widths: [300, 600, 900, 1200],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./dist/assets/images/",
      urlPath: "/assets/images/",
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
  
  // Responsive image shortcode
  eleventyConfig.addAsyncShortcode("respImage", async function(src, alt, className = "") {
    if (!alt) {
      throw new Error(`Missing \`alt\` attribute on respImage shortcode for: ${src}`);
    }
    
    const fullSrc = path.join("./src/assets/images/", src);
    
    let metadata = await Image(fullSrc, {
      widths: [400, 800, 1200],
      formats: ["webp", "jpeg"],
      outputDir: "./dist/assets/images/",
      urlPath: "/assets/images/",
    });

    let imageAttributes = {
      alt,
      class: className,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
  
  // Return configuration object
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
