import SystemJs from 'systemjs'

registerDep('sofe', () => require('sofe'))
registerDep('single-spa', () => require('single-spa'))
registerDep('react', () => require('react'))
registerDep('react-dom', () => require('react-dom'))

function registerDep(name, requirer) {
  SystemJS.registerDynamic(name, [], false, function(_r, _e, _m) {
    _m.exports = requirer()
  })
}