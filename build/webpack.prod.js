const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base');
const config = require('../config');

const prodConfig = merge(baseConfig, {
  output: {
    chunkFilename: 'js/[name].js?v=[chunkhash]',
    filename: 'js/[name].js?v=[chunkhash]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.base.json'),
      name: 'dll_base'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      chunks: baseConfig.entry,
      minChunks: baseConfig.entry.length
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
});

module.exports = prodConfig;
