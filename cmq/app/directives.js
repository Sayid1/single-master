'use strict';

angular
.module('AngularCmq')
.directive('displayCmq', [function() {
  return {
    restrict: 'E',
    templateUrl: './assets/templates/display-cmq.template.html',
  }
}])
