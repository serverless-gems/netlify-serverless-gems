/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
 */

module.exports = {
    // Drafts support
    DraftsSupport: (eleventyConfig) => {
        const plugin = require("./drafts.js");
        eleventyConfig.addPlugin(plugin);
    },

    // Official plugins
    RSS: (eleventyConfig) => {
        const plugin = require("@11ty/eleventy-plugin-rss");
        eleventyConfig.addPlugin(plugin);
    },

    SyntaxHighlight: (eleventyConfig) => {
        const plugin = require("@11ty/eleventy-plugin-syntaxhighlight");
        eleventyConfig.addPlugin(plugin, { preAttributes: { tabindex: 0 } });
    },

    EleventyHtmlBase: (eleventyConfig) => {
        const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
        eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    },
};