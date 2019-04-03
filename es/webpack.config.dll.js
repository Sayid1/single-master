const R = require('ramda')
const webpack = require('webpack')
const AssetsWebpcakPlugin = require('assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const pkg = require('./package.json')

const entry = {}

const dependencies = R.keys(pkg.dependencies)
const excludeDll = pkg.excludeDll

const dllJs = R.difference(dependencies, excludeDll) // 取第一个列表中，未包含在第二个列表中的任一元素的集合

R.forEach((js) => { entry[js.replace(/-/g, '')] = [js] })(dllJs)

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'public/dll'),
    filename: '[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'manifest', '[name]-manifest.json'),
    }),
    new AssetsWebpcakPlugin({ filename: 'dlljs-name.json' }),
    new CleanWebpackPlugin(['public/dll', 'manifest'], {
      exclude: ['index.html', 'favicon.ico'],
    }),
  ],
}
