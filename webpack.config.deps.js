const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: './src/common-deps.js',
  output: {
    filename: 'common-deps.js',
    path: path.resolve(__dirname, 'build/common'),
    chunkFilename: '[name].js',
  },
  mode: 'production',
  node: {
    fs: 'empty',
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
  devtool: 'sourcemap',
  plugins: [
    new CleanWebpackPlugin('./build/common'),
    new CompressionPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader'},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  }
}
