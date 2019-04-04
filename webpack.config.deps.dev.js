const config = require('./webpack.config.deps')
const webpack = require('webpack')

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.mode = 'development'

module.exports = config