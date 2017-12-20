'use strict';

const path = require('path');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const CWD = process.cwd();
let paths = {
  src: path.resolve(CWD, 'src')
};
module.exports = {
  common: {
    assetsProdRoot: path.resolve(CWD, 'dist'),
    resource: paths.src,
    entries: {
      app: [path.resolve(paths.src, 'main.js')]
    }
  },
  dev: {
    assetsPublicPath: `//${host}:${port}/`,
    proxyTable: [
      {
        context: [],
        target: 'http://localhost:8080'
      }
    ],
    host, // can be overwritten by process.env.HOST
    port, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    devtool: 'eval-source-map', // https://webpack.js.org/configuration/devtool/#development
    cssSourceMap: false
  },
  build: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: false,

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
