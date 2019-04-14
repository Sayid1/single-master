const config = require('./webpack.config.js')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

config.plugins.push(new webpack.NamedModulesPlugin())
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new FriendlyErrorsWebpackPlugin({
  compilationSuccessInfo: {
    messages: ['[cs] is running here http://localhost:7007'],
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
  port: 7007,
  quiet: true,
}

config.mode = 'development'

module.exports = config
