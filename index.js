"use strict";

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");

const defaultOptions = {
  devtool: "cheap-module-eval-source-map"
};

module.exports = function modify(
  baseConfig,
  { target, dev },
  webpack,
  userOptions = {}
) {
  const config = Object.assign({}, baseConfig);
  const options = Object.assign({}, defaultOptions, userOptions);
  const isProduction = dev === false;
  const isDevelopment = dev === true;
  const isWeb = target === "web";

  config.devtool = isDevelopment ? options.devtool : false;

  if (isWeb && isProduction) {
    config.optimization.minimizer.pop();
    config.optimization.minimizer.push(
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: false
        }
      })
    );
  }

  return config;
};
