const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    vendor: ['react', 'react-dom'],
  },

  output: {
    library: '[name]_[chunkhash]',
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: '[name].[chunkhash].dll.js',
  },

  mode: 'production',

  devtool: false,

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../lib', 'manifest.json'),
      name: '[name]_[chunkhash]',
    }),
    new webpack.BannerPlugin(`This file is created by 川淇, Last update: ${new Date().toString()}`),
  ],
};

module.exports = webpackConfig;
