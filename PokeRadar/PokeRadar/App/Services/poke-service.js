(function () {
    'use strict';

    angular
        .module('PokeRadar')
        .service('pokeService', pokeService);

    pokeService.$inject = ['$http'];

    function pokeService($http) {
        var baseUrl = 'http://www.pokevision.com/map/';
        var service = {
            getToken: getToken,
            getPokemon: getPokemon,
            getPokemonData: getPokemonData
        }

        return service;

        function getToken(lat, long) {
            return $http.get(baseUrl + 'scan/' + lat + '/' + long);
            //return {
            //    respone: {
            //        data: {
            //            jobId: "blah"
            //        }
            //    }
            //}
        }

        function getPokemon(lat, long, jobId) {
            return $http.get(baseUrl + 'data/' + lat + '/' + long + '/' + jobId);
            //return dummyData;
        }

        function getPokemonData(pokemonIds) {
            return $http.post('api/pokemon', pokemonIds);
        }
    }

    var dummyData = {
        "status": "success",
        "pokemon": [
          {
              "id": "118694339",
              "data": "[]",
              "expiration_time": 1469288397,
              "pokemonId": "96",
              "latitude": 53.482388829783,
              "longitude": -2.2407790516826,
              "uid": "487bb1bf5f1:21",
              "is_alive": true
          },
        {
            "id": "118723529",
            "data": "[]",
            "expiration_time": 1469288397,
            "pokemonId": "21",
            "latitude": 53.480386852411,
            "longitude": -2.2348671679937,
            "uid": "487bb1be55b:21",
            "is_alive": true
        },
        {
            "id": "118734330",
            "data": "[]",
            "expiration_time": 1469288388,
            "pokemonId": "19",
            "latitude": 53.483652426854,
            "longitude": -2.2364681442689,
            "uid": "487bb1b8ea7:98",
            "is_alive": true
        },
        {
            "id": "118807632",
            "data": "[]",
            "expiration_time": 1469288501,
            "pokemonId": "92",
            "latitude": 53.482386853069,
            "longitude": -2.2363647983766,
            "uid": "487bb1b8d47:74",
            "is_alive": true
        },
        {
            "id": "118851620",
            "data": "[]",
            "expiration_time": 1469288538,
            "pokemonId": "19",
            "latitude": 53.482260348543,
            "longitude": -2.2386127853877,
            "uid": "487bb1c0a77:19",
            "is_alive": true
        },
        {
            "id": "118851681",
            "data": "[]",
            "expiration_time": 1469288512,
            "pokemonId": "129",
            "latitude": 53.481318863354,
            "longitude": -2.2392543815596,
            "uid": "487bb1c0a77:19",
            "is_alive": true
        },
        {
            "id": "118880523",
            "data": "[]",
            "expiration_time": 1469288544,
            "pokemonId": "19",
            "latitude": 53.482059019889,
            "longitude": -2.2403414439728,
            "uid": "487bb1c0a77:19",
            "is_alive": true
        },
        {
            "id": "118887827",
            "data": "[]",
            "expiration_time": 1469288463,
            "pokemonId": "120",
            "latitude": 53.474605360127,
            "longitude": -2.2277257425903,
            "uid": "487bb196e1f:60",
            "is_alive": true
        },
        {
            "id": "118905182",
            "data": "[]",
            "expiration_time": 1469288446,
            "pokemonId": "29",
            "latitude": 53.478753905186,
            "longitude": -2.2227272047947,
            "uid": "487bb1a2901:29",
            "is_alive": true
        },
        {
            "id": "118909433",
            "data": "[]",
            "expiration_time": 1469288566,
            "pokemonId": "19",
            "latitude": 53.487345571297,
            "longitude": -2.2332791699322,
            "uid": "487bb1b9ed5:19",
            "is_alive": true
        }
        ]
    };
})();