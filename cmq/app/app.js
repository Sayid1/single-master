var app = angular.module('app', ['ui.router', 'ngTable', 'oc.lazyLoad', 'frapontillo.bootstrap-switch', 'daterangepicker', 'chart.js', 'ui.router.state.events'])
app.controller('DemoController', ['$scope', '$rootScope',"$http","serverUrl","uuidService",function ($scope, $rootScope,$http,serverUrl,uuidService) {
   // 避免新进页面时触发监听
   var vm=this;
    vm.pageState = false;
    setTimeout(function(){
        vm.pageState = true;
    },1000);

    $scope.regionList = [{
        region: 'gz',
        regionCode: 'ap-guangzhou',
        regionName: '广州'
    },{
        region: 'sh',
        regionCode: 'ap-shanghai',
        regionName: '上海'
    }]
// 监听浏览器后退事件
$scope.$on("$locationChangeStart", function(ev){
    if(vm.pageState){
        $('.modal-backdrop').remove();
      }
  });
    
  }])