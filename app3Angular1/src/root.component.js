import angular from 'angular';
import template from './root.html'

angular
    .module('app')
    .component('root', {
        template,
        controllerAs: 'vm',
        controller($timeout) {
            // alert(1)
            const vm = this;
        }
    });
