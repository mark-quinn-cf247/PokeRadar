(function () {

    angular.module('PokeRadar')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', '$window', '$filter', '$interval', '$timeout', 'pokeService', 'googleMapService'];

    function mainController($scope, $window, $filter, $interval, $timeout, pokeService, googleMapService) {
        /* jshint validthis: true */
        var vm = this;
        var lat = 51.5032510;
        var long = -0.1278950;
        var jobId = null;
        var refresh = null;
        var alreadyNotified = [];
        var stylesArray = [{ "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#AFFFA0" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "color": "#EAFFE5" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.government", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#e1e454" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#e1e454" }, { "weight": 2.2 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#1A87D6" }] }];
        vm.tableData = [];


        $scope.$on("$destroy", function () {
            $interval.cancel(refresh);
        });

        function getToken() {
            pokeService.getToken(lat, long).then(function (response) {
                if (response.data && response.data.jobId) {
                    jobId = response.data.jobId;
                    getPokemon();
                } else {
                    $timeout(function () {
                        getToken();
                    }, 5000);
                }
            });
        }

        function getPokemon() {
            pokeService.getPokemon(lat, long, jobId).then(function (response) {
                if (response.data && response.data.pokemon) {
                    vm.pokemons = response.data.pokemon;
                    getPokemonData();
                } else {
                    $timeout(function () {
                        getPokemon();
                    }, 5000);
                }
            });
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
                zoom: 17,
                styles: stylesArray
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
            vm.tableData = [];
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

                var expiration = new Date(1970, 0, 1);
                expiration.setSeconds(value.expiration_time);
                expiration = getExpiration(expiration);

                var distance = getDistance(value.latitude, value.longitude);

                if (distance < 50 && $.inArray(value.uid, alreadyNotified) == -1) {
                    playSound();
                    alreadyNotified.push(value.uid);
                }

                var contentString = '<div>' +
                                        '<div><b>' + data.Name + '</b></div>' +
                                        '<div>Distance: ' +distance + 'm</div>' +
                                        '<div>Expiration: ' + expiration.minutes + ':' + expiration.seconds + '</div>' +
                                        '<div>Heigth: ' + data.Height + '</div>' +
                                        '<div>Weight: ' + data.Weight + '</div>' +
                                   ' </div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function () {
                    infowindow.open(vm.map, marker);
                });

                var pokeTable = {
                    name: data.Name,
                    distance: distance,
                    expiration: expiration
                };

                vm.tableData.push(pokeTable);
            });
        }

        function getExpiration(date) {
            var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

            var offset = date.getTimezoneOffset() / 60;
            var hours = date.getHours();

            newDate.setHours(hours - offset);

            var expSecs = newDate.getTime() / 1000;
            var currentSecs = new Date().getTime() / 1000;

            var totalSeconds = expSecs - currentSecs;

            var minutes = Math.floor(totalSeconds / 60);
            var seconds = Math.floor(totalSeconds - minutes * 60);

            minutes = ('00' + minutes).substr(-2);
            seconds = ('00' + seconds).substr(-2);

            return {minutes: minutes, seconds: seconds};
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

        function playSound() {
            var audio = new Audio('http://www.pokezorworld.com/anime/wav/whosthatpokemon.wav');
            audio.play();
        }

        function init() {
            getLocation();

            refresh = $interval(function () {
                getToken();
            }, 60000);
        }

        init();
    }

})();
