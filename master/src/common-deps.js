import SystemJS from 'systemjs'

SystemJS.config(window.sofeManifest)

registerDep('sofe', () => require('sofe'))

registerDep('single-spa', () => require('single-spa'))
registerDep('react', () => require('react'))
registerDep('vue', () => require('vue'))
registerDep('react-dom', () => require('react-dom'))

function registerDep(name, requirer) {
  SystemJS.registerDynamic(name, [], false, function(_r, _e, _m) {
    _m.exports = requirer()
  })
}
