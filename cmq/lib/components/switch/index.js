function switchC($scope) {
  var ctrl = this
  // ctrl.isON = true
  ctrl.change = function(){
    ctrl.ison = !ctrl.ison
  }
}
angular.module('myApp').component("gSwitch", {
  // template: '<p>hello</p>',
  templateUrl: 'components/switch/index.html',
  controller: ['$scope', switchC],
  bindings: {
    ison: '=',
    onChange:'&'
  }
})
