const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    cloudServer: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'cloudServer',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: 'cloudServer/[name].[hash].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                js: 'babel-loader'
            }
        }
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
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
              localIdentName: 'cloud-server__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ]
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'cloud-server-[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ]
              },
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]?[hash]',
            // publicPath: '/appVue/',
        }
      },
    ]
  },
  resolve: {
    extensions: [
      ".js", ".vue"
    ],
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devtool: 'source-map',
  externals: [
    /^sing-spa-vue$/,
    /\!sofe$/,
    // /.*element-ui.*$/
  ]
}