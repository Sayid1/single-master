/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  entry: {
    header: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'header',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].[hash].js'
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
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'app-header__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer'),
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
    new CleanWebpackPlugin(['build/header']),
  ],
  devtool: 'source-map',
  externals: [
    /^.+!sofe$/,
  ],
};

