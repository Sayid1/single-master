import "@babel/polyfill"
import SystemJS from 'systemjs'

SystemJS.config({
  sofe: {
    manifest: {
      'utils': 'http://localhost:7999/utils.js',
    }
  }
})

registerDep('sofe', () => require('sofe'))
registerDep('single-spa', () => require('single-spa'))
registerDep('single-spa-vue', () => require('single-spa-vue'))
registerDep('redux-vuex', () => require('redux-vuex'))
registerDep('vue', () => require('vue'))
registerDep('vue-router', () => require('vue-router'))
registerDep('element-ui', () => require('element-ui'))
registerDep('core-js', () => require('core-js'))

function registerDep(name, requirer) {
  SystemJS.registerDynamic(name, [], false, function(_r, _e, _m) {
    _m.exports = requirer()
  })
}
