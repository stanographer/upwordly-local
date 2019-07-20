const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

require('dotenv').config();

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});
