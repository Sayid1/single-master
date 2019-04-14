const config = require('./webpack.config.js')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const Dotenv = require('dotenv-webpack')

config.plugins.push(new Dotenv({
  path: './dev.env',
  defaults: true
}))

config.plugins.push(new webpack.NamedModulesPlugin()) // 热加载时显示文件名 而不是文件ID
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new FriendlyErrorsWebpackPlugin({
  compilationSuccessInfo: {
    messages: ['[es] is running here http://localhost:7006'],
    // notes: ['我是附加说明']
  },
  onErrors: (severity, errors) => {
    if (severity !== 'error') {
      return
    }
    const error = errors[0]
    notifier.notify({
      title: "Webpack error",
      message: severity + ': ' + error.name,
      subtitle: error.file || '',
      // icon: ICON
    })
  }
}))

config.devServer = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  port: 7006,
  quiet: true,
}

config.mode = 'development'

module.exports = config
