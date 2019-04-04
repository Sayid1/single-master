const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    singleSpaEntry: 'src/singleSpaEntry.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'release'),
    libraryTarget: 'umd',
    library: 'app3'
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    "extensions": [
      ".js"
    ],
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  devtool: 'none',
  externals: [],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }
};