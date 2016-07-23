(function () {
    'use strict';

    angular.module('PokeRadar')
        .controller('mainController', mainController);

    mainController.$inject = ['pokeService'];

    function mainController(pokeService) {
        /* jshint validthis: true */
        var vm = this;
        var lat = 51.5032510;
        var long = -0.1278950;
        var jobId = null;

        function getToken() {
            pokeService.getToken(lat, long).then(function (response) {
                jobId = response.data.jobId;
                getPokemon();
            });
        }

        function getPokemon() {
            pokeService.getPokemon(lat, long, jobId).then(function (response) {
                if (response.data.jobStatus === 'in_progress') {
                    getPokemon();
                } else {
                    vm.pokemons = response.data.pokemon;
                }
            });

            //vm.pokemon = pokeService.getPokemon(lat, long, jobId).pokemon;
        }

        function init() {
            getToken();
            //getPokemon();
        }

        init();
    }

})();
