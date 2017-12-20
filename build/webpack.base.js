const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: config.common.entries,
  output: {
    path: config.common.assetsProdRoot,
    publicPath:
      process.env.NODE_ENV == 'development'
        ? config.dev.assetsPublicPath
        : config.build.assetsPublicPath
  },
  resolve: {
    alias: {
      '@assets': path.resolve(config.common.resource, 'assets'),
      '@reducers': path.resolve(config.common.resource, 'store/reducers'),
      '@actions': path.resolve(config.common.resource, 'store/actions'),
      '@components': path.resolve(config.common.resource, 'components'),
      '@utils': path.resolve(config.common.resource, 'utils'),
      '@': config.common.resource
    },
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: config.common.resource,
        options: {
          presets: ['env', 'react'],
          plugins: ['transform-runtime', 'preval']
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.resolve(
            config.common.assetsProdRoot,
            'img/[name].[hash:7].[ext]'
          )
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.resolve(
            config.common.assetsProdRoot,
            'media/[name].[hash:7].[ext]'
          )
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.resolve(
            config.common.assetsProdRoot,
            'fonts/[name].[hash:7].[ext]'
          )
        }
      }
    ]
  },
  externals: {},
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'index.html'),
      inject: false,
      chunksSortMode: 'dependency',
      environment: process.env.NODE_ENV
    })
  ]
};

module.exports = webpackConfig;
