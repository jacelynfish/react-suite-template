const webpack = require('webpack');
const path = require('path');

const buildPath = path.resolve(process.cwd(), 'public/js');

const vendors = ['react', 'react-dom', 'react-router', 'redux', 'react-redux'];

module.exports = {
  output: {
    path: buildPath,
    filename: '[name].js?v=[hash]',
    library: '[name]'
  },
  entry: {
    dll_base: vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('./build/manifest.base.json'),
      name: '[name]',
      context: __dirname
    })
  ]
};
