'use strict';

const juice = require('juice');

function HtmlWebpackInlinerPlugin(options) {
    // Initialize
}

HtmlWebpackInlinerPlugin.prototype.apply = compiler => {
    (compiler.hooks
        ? compiler.hooks.compilation.tap.bind(compiler.hooks.compilation, 'html-webpack-inline-style-plugin')
        : compiler.plugin.bind(compiler, 'compilation'))(compilation => {

        (compilation.hooks
            ? compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync.bind(compilation.hooks.htmlWebpackPluginAfterHtmlProcessing, 'html-webpack-inline-style-plugin')
            : compilation.plugin.bind(compilation, 'html-webpack-plugin-after-html-processing'))((htmlPluginData, callback) => {
            htmlPluginData.html = juice(htmlPluginData.html);
            callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlWebpackInlinerPlugin;
