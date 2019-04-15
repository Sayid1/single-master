const config = require('./webpack.config.js')
const Dotenv = require('dotenv-webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')

config.output.chunkFilename = '[name].[hash].js'
config.plugins.push(new Dotenv({
  path: './prod.env',
  defaults: true
}))
config.plugins.push(new CleanWebpackPlugin())

module.exports = config