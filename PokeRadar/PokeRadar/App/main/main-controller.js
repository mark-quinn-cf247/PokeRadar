(function () {
    'use strict';

    angular.module('pokeRadar')
        .controller('mainController', mainController);

    mainController.$inject = ['pokeService'];

    function mainController(pokeService) {
        /* jshint validthis: true */
        var vm = this;
        

        function init() {
            
        }

        init();
    }

})();
