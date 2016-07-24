(function () {

    angular.module('PokeRadar')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', '$window', '$filter', 'pokeService', 'googleMapService'];

    function mainController($scope, $window, $filter, pokeService, googleMapService) {
        /* jshint validthis: true */
        var vm = this;
        var lat = 51.5032510;
        var long = -0.1278950;
        var jobId = null;
        
        vm.tableData = [];

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
                    getPokemonData();
                }
            });

            //vm.pokemons = pokeService.getPokemon(lat, long, jobId).pokemon;

            //$scope.$apply();
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
            getToken();
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
            angular.forEach(vm.pokemons, function (value, key) {
                var data = $filter('filter')(vm.pokemonData, { Number: value.pokemonId })[0]
                var location = new google.maps.LatLng(value.latitude, value.longitude);

                var icon = {
                    url: '/Content/icons/' + ('000' + data.Number).substr(-3) + '.ico', // url
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };

                var marker = new google.maps.Marker({
                    position: location,
                    map: vm.map,
                    title: data.Name,
                    icon: icon
                });

                var contentString = '<div>' +
                                        '<div><b>' + data.Name + '</b></div>' +
                                        '<div>Heigth: ' + data.Height + '</div>' +
                                        '<div>Weight: ' + data.Weight + '</div>' +
                                        //'<div>Type I: ' + data.TypeI[0] + '</div>' +
                                        //'<div>Type II: ' + data.TypeII[0] + '</div>' +
                                   ' </div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function () {
                    infowindow.open(vm.map, marker);
                });

                var pokeTable = {
                    name: data.Name,
                    distance: getDistance(value.latitude, value.longitude),
                    expiration: value.expiration_time / 10000000
                };

                vm.tableData.push(pokeTable);
            });
        }

        function getDistance(pokeLat, pokeLong) {
            var currentLat = lat;
            var currentLong = long;

            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(pokeLat-currentLat);  // deg2rad below
            var dLon = deg2rad(pokeLong-currentLong); 
            var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(deg2rad(currentLat)) * Math.cos(deg2rad(pokeLat)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c * 1000; // Distance in m
            return Math.floor(d);
        }

        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }

        function init() {
            getLocation();
        }

        init();
    }

})();
