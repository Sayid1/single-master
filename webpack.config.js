/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/config.js',
  output: {
    filename: 'config.js',
    library: 'config',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ];
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '"format amd";',
      raw: true,
    }),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/index.html')},
      {from: path.resolve(__dirname, 'src/styles.css')},
    ]),
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  externals: [
    /^single-spa$/,
  ],
};
