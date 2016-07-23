(function () {
    'use strict';

    angular.module('PokeRadar')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', '$window', 'pokeService', 'googleMapService'];

    function mainController($scope, $window, pokeService, googleMapService) {
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
            //pokeService.getPokemon(lat, long, jobId).then(function (response) {
            //    if (response.data.jobStatus === 'in_progress') {
            //        getPokemon();
            //    } else {
            //        vm.pokemons = response.data.pokemon;
            //    }
            //});

            vm.pokemons = pokeService.getPokemon(lat, long, jobId).pokemon;

            $scope.$apply();
        }

        function getPokemonData() {
            // get pokemon ids
            var pokemonIds = vm.pokemons.map(function (a) { return a.pokemonId; });
            pokeService.getPokemonData(pokemonIds).then(function (response) {
                vm.pokemonData = response.data;
                initMap();
            });
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(setPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function setPosition(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            //getToken();
            getPokemon();
            getPokemonData();
        }

        function initMap() {
            googleMapService.then(function () {
                renderMap();
            }, function () {
                alert("failed to get map. Shit!!!!");
            });
        }

        function renderMap() {
            vm.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: lat, lng: long },
                zoom: 17       
            });

            // plot current location
            var location = new google.maps.LatLng(lat, long);
            new google.maps.Marker({
                position: location,
                map: vm.map,
                title: 'This is you'
            });

            plotPokemon();
        }

        function plotPokemon() {
            var bounds = new google.maps.LatLngBounds();
            angular.forEach(vm.pokemons, function (value, key) {
                
                var location = new google.maps.LatLng(value.latitude, value.longitude);
                bounds.extend(location);
                new google.maps.Marker({
                    position: location,
                    map: vm.map,
                    title: 'This is a pokemon'
                });
            });

            vm.map.fitBounds(bounds);
        }

        function init() {
            getLocation();
        }

        init();
    }

})();
