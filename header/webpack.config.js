const webpack = require('webpack')
const path = require('path')
const ClearWepackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'header.js',
    library: 'header',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: [path.resolve(__dirname, 'node_modules'), /\.krem.css$/],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            // css模块化默认名字是[hash:base64]
            localldentName: '[path][name]_[local]'
          }
        },
        {
          loader: 'postcss-loader',
          optioins: {
            plugins() {
              return [
                require('autoprefixer')
              ]
            }
          }
        }
      ]
    }, {
      test: /\.css$/,
      include: [path.resolve(__dirname, 'node_modules')],
      exclude: [/\.krem.css$/],
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.krem.css/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      use: [{
        loader: 'kremling-loader',
        options: {
          namespace: 'app-header',
          postcss: {
            plugins: {
              'autoprefixer': {}
            }
          }
        }
      }]
    }]
  },
  resolve: {
    module: [
      __dirname,
      'node_modules'
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '"format amd";',
      raw: true
    }),
    new ClearWepackPlugin(['build'])
  ],
  devtool: 'source-map',
  externals: [
    /^single-spa$/,
    'react',
    /^react\/lib.*/,
    'react-dom',
    /.*react-dom.*/
  ]
}
