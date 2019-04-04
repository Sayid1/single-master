var app = angular.module('AngularCmq', [])
app.controller('DemoController', ['$scope', function ($scope) {

    $scope.regionList = [{
        region: 'gz',
        regionCode: 'ap-guangzhou',
        regionName: '广州'
    },{
        region: 'sh',
        regionCode: 'ap-shanghai',
        regionName: '上海'
    }]
    
  }])