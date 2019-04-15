const config = require('./webpack.config.js')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

// const ICON = path.join(__dirname, 'icon.png')
config.plugins.push(new webpack.NamedModulesPlugin())
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new FriendlyErrorsWebpackPlugin({
  compilationSuccessInfo: {
    messages: ['You application is running here http://localhost:7001'],
    // notes: ['我是附加说明']
  },
  clearConsole: true,
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
  contentBase: './build',
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  quiet: true, // 除了初始启动信息外，什么也不会写入控制台。这也意味着来自webpack的错误或警告是不可见的
  port: 7001,
  proxy: {
    "/es": {
      target: "http://localhost:7006",
    },
    "/header": {
      target: "http://localhost:7003",
    },
    "/slider": {
      target: "http://localhost:7004",
    },
    "/cloudServer": {
      target: "http://localhost:7007",
    },
    "/utils": {
      target: "http://localhost:7999",
    },
  }
}

config.mode = 'development'

module.exports = config
