import "@babel/polyfill"
import SystemJS from 'systemjs'

SystemJS.config({
  sofe: {
    manifest: {
      'parcelUtils': 'http://localhost:7999/parcelUtils.js',
    }
  }
})

registerDep('sofe', () => require('sofe'))
registerDep('single-spa', () => require('single-spa'))

function registerDep(name, requirer) {
  SystemJS.registerDynamic(name, [], false, function(_r, _e, _m) {
    _m.exports = requirer()
  })
}
