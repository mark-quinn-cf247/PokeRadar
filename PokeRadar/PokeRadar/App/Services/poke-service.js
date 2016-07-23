(function () {
    'use strict';

    angular
        .module('pokeRadar')
        .service('pokeService', pokeService);

    poke_service.$inject = ['$http'];

    function pokeService($http) {
        var baseUrl = 'www.pokevision.com/map/';
        var serice = {
            getData: getData
        }

        return serice;

        function getToken(lat, long) {
            return $http.get(baseUrl + 'scan/' + lat + '/' + long);
        }

        function getPokemon(lat, long, token) {
            return $http.get(baseUrl + 'map/' + lat + '/' + long + '/' + token);
        }
    }
})();