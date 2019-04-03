function switchC($scope) {
  var ctrl = this
  ctrl.data = {
    message: '组件',
  }
  console.log('123')
}
angular.module('myApp').component("gSwitch", {
  // template: '<p>hello</p>',
  templateUrl: 'components/switch/index.html',
  controller: ['$scope', switchC],
  bindings: {
    name: '<'
  }
})
