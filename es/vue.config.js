const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

const MANIFESTJSON_DIR = './manifest'
const DLLJS_NAME = './dlljs-name.json'

const resolve = name => path.resolve(__dirname, name)

const manifest = resolve(MANIFESTJSON_DIR)
const dlljs = resolve(DLLJS_NAME)

if (fs.existsSync(manifest) && fs.existsSync(dlljs)) {
  const manifestJson = fs.readdirSync(manifest)

  const dllReferencePlugins = manifestJson.reduce((arr, json) => {
    arr.push(new webpack.DllReferencePlugin({
      manifest: require(`./${MANIFESTJSON_DIR}/${json}`), //eslint-disable-line
    }))
    return arr
  }, [])

  const dlljs = require(DLLJS_NAME) //eslint-disable-line
  const scripts = Object.values(dlljs).reduce((a, b) => { a.push(`dll/${b.js}`); return a }, [])

  module.exports = {
    configureWebpack: {
      plugins:
        [
          ...dllReferencePlugins,
          new HtmlWebpackIncludeAssetsPlugin({
            assets: scripts,
            append: false,
          }),
        ],
    },
    publicPath: './',
    assetsDir: './',
  }
} else {
  console.log(chalk.red('error '), `${MANIFESTJSON_DIR}目录或${DLLJS_NAME}文件不存在！\r\n run yarn dll \r\n or \r\n npm run dll`)
  process.exit(1)
}
