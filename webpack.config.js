/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/config.js',
  output: {
    filename: 'config.js',
    library: 'config',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          'css-loader'
        ],
      },
      { 
        test: /\.(eot|svg|ttf|woff|woff2)$/, 
        loader: 'file-loader',
        options: {
          name: 'css/[name].[ext]'
        }
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
    alias: {
      systemjs: path.resolve(__dirname, 'node_modules/systemjs/dist/system.js'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: '"format amd";',
      raw: true,
    }),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/index.html')},
      {from: path.resolve(__dirname, 'src/styles.css')},
    ]),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: 'source-map',
  externals: [
    /^single-spa$/,
    /\!sofe$/,
  ],
}
