(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myApp')
        .component('regionSelectComponent', {
            templateUrl: '../lib/components/region-select-component/regionSelect.component.html',
            controller: RegionSelectController,
            controllerAs: '$ctrl',
            bindings: {
                region: '<',
                type: '<',
                product: '<',
                onSelect: '&'
            },
        });

    RegionSelectController.$inject = ['$scope', 'BaseService'];
    function RegionSelectController($scope, BaseService) {
        var $ctrl = this;

        //select区域事件
        $ctrl.select = function(regionv1, regionv2, regionName) {
            $ctrl.regionName = regionName;
            localStorage.setItem('regionv2', regionv2);
            localStorage.setItem('regionv1', regionv1);
            $ctrl.onSelect({region: $ctrl.type === 'v1' ? regionv1 : regionv2});
        };
        
        $ctrl.$onInit = function () {
            BaseService.$$request('pub/zoneAll', {
                product: $ctrl.product
            }, function (arr) {
                // 返回的数据源  需要已经过滤好的数据源
                // console.log(arr);
                $ctrl.cityArr = arr;
                angular.forEach(arr, function(val) {
                    if($ctrl.region === val.regionCode || $ctrl.region === val.Region) {
                        $ctrl.regionName = val.lable;
                    }
                });
            }, function (err) {
                alert(err.message);
            }, 'data');
        };
        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestroy = function () { };
    }
})();