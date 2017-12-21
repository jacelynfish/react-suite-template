const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const config = require('../config');

baseConfig.entry.app.unshift('react-hot-loader/patch');
const devConfig = merge(baseConfig, {
  output: {
    filename: 'js/[name].js'
  },
  devtool: config.dev.devtool,
  devServer: {
    port: config.dev.port,
    contentBase: config.common.assetsProdRoot,
    // proxy: config.dev.proxyTable,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watchOptions: {
      poll: config.dev.poll
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // https://stackoverflow.com/questions/30835213/react-from-npm-cannot-be-used-on-the-client-because-development-is-not-defined
        // 不加上JSON.stringify的话, webpack直接把development变成变量了, 导致报错, not define
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
});

module.exports = devConfig;
