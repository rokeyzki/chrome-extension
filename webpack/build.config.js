const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const manifest = require('../lib/manifest.json');

console.log('webpack: production mode');

const webpackConfig = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    bundle: './app',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].min.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  mode: 'production',

  devtool: false,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ],
        }),
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1&modules&localIdentName=[local]__[name]-[hash:base64:8]',
            'resolve-url-loader',
            'sass-loader',
          ],
        }),
      },

      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader?javascriptEnabled=true',
          ],
        }),
      },
    ],
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest,
    }),
    new HtmlWebpackPlugin({
      chunks: ['bundle'],
      chunksSortMode: 'manual',
      template: 'index.ejs',
      favicon: './favicon.ico',
      hash: true,
      title: 'react component demo',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new AddAssetHtmlWebpackPlugin([{
      typeOfAsset: 'js',
      includeSourcemap: false,
      filepath: path.resolve(__dirname, '../lib/**/*.dll.js'),
      publicPath: '/js',
      outputPath: './js',
    }]),
    new ExtractTextPlugin('css/[name].min.css'),
    new webpack.BannerPlugin(`This file is created by 川淇, Last update: ${new Date().toString()}`),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

module.exports = webpackConfig;
