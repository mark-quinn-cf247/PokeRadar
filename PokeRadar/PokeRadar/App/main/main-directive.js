(function () {
    'use strict';

    angular
        .module('PokeRadar')
        .directive('mainDirective', mainDirective);

    mainDirective.$inject = [];

    function mainDirective() {
        // Usage:
        //     <main-directive></main-directive>
        // Creates:
        // 
        var directive = {
            restrict: 'E',
            templateUrl: '/App/main/main.html',
            scope: {
            },
            controller: 'mainController',
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }

})();