const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './build/build.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: 'node_modules',
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-maps',
};
