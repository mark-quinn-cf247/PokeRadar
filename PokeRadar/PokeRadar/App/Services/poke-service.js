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
            getPokemon: getPokemon
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
            //return $http.get(baseUrl + 'data/' + lat + '/' + long + '/' + jobId);
            return dummyData;
        }
    }

    var dummyData = {
        "status": "success",
        "pokemon": [
          {
              "id": "106728034",
              "data": "[]",
              "expiration_time": 1469277478,
              "pokemonId": "96",
              "latitude": 51.503644264116,
              "longitude": -0.12947276611178,
              "uid": "487604d0039:96",
              "is_alive": true
          },
          {
              "id": "106759934",
              "data": "[]",
              "expiration_time": 1469277472,
              "pokemonId": "96",
              "latitude": 51.500529031466,
              "longitude": -0.12468285874585,
              "uid": "487604c5d69:118",
              "is_alive": true
          },
          {
              "id": "106815824",
              "data": "[]",
              "expiration_time": 1469277571,
              "pokemonId": "16",
              "latitude": 51.507098452274,
              "longitude": -0.12471220700936,
              "uid": "487604cec43:96",
              "is_alive": true
          },
          {
              "id": "106832567",
              "data": "[]",
              "expiration_time": 1469277591,
              "pokemonId": "21",
              "latitude": 51.511195612607,
              "longitude": -0.1329991900246,
              "uid": "487604d26d1:96",
              "is_alive": true
          },
          {
              "id": "106832586",
              "data": "[]",
              "expiration_time": 1469277474,
              "pokemonId": "16",
              "latitude": 51.50971848337,
              "longitude": -0.13198151314282,
              "uid": "487604d26d1:96",
              "is_alive": true
          },
          {
              "id": "106848578",
              "data": "[]",
              "expiration_time": 1469277588,
              "pokemonId": "19",
              "latitude": 51.501684531321,
              "longitude": -0.11899458725128,
              "uid": "487604c7a39:21",
              "is_alive": true
          },
          {
              "id": "106848611",
              "data": "[]",
              "expiration_time": 1469277591,
              "pokemonId": "96",
              "latitude": 51.502833781008,
              "longitude": -0.11936679972347,
              "uid": "487604c7a39:21",
              "is_alive": true
          },
          {
              "id": "106880823",
              "data": "[]",
              "expiration_time": 1469277619,
              "pokemonId": "19",
              "latitude": 51.507017300853,
              "longitude": -0.12379332780719,
              "uid": "487604cf29d:19",
              "is_alive": true
          },
          {
              "id": "106880918",
              "data": "[]",
              "expiration_time": 1469277578,
              "pokemonId": "98",
              "latitude": 51.505375368777,
              "longitude": -0.12332682116704,
              "uid": "487604cf29d:19",
              "is_alive": true
          },
          {
              "id": "106892781",
              "data": "[]",
              "expiration_time": 1469277640,
              "pokemonId": "41",
              "latitude": 51.507347612586,
              "longitude": -0.12204963880128,
              "uid": "487604c9217:41",
              "is_alive": true
          },
          {
              "id": "106893155",
              "data": "[]",
              "expiration_time": 1469277606,
              "pokemonId": "19",
              "latitude": 51.509649340341,
              "longitude": -0.11985520749939,
              "uid": "487604c9871:124",
              "is_alive": true
          },
          {
              "id": "106893173",
              "data": "[]",
              "expiration_time": 1469277562,
              "pokemonId": "41",
              "latitude": 51.509895902965,
              "longitude": -0.11967256116358,
              "uid": "487604c9871:124",
              "is_alive": true
          },
          {
              "id": "106899655",
              "data": "[]",
              "expiration_time": 1469277620,
              "pokemonId": "41",
              "latitude": 51.508732783571,
              "longitude": -0.13216059665457,
              "uid": "487604d1ff5:19",
              "is_alive": true
          },
          {
              "id": "106899688",
              "data": "[]",
              "expiration_time": 1469277501,
              "pokemonId": "21",
              "latitude": 51.50856853609,
              "longitude": -0.13215981895129,
              "uid": "487604d1ff5:19",
              "is_alive": true
          },
          {
              "id": "106900357",
              "data": "[]",
              "expiration_time": 1469277517,
              "pokemonId": "60",
              "latitude": 51.505955766461,
              "longitude": -0.11791075162642,
              "uid": "487604c8263:120",
              "is_alive": true
          },
          {
              "id": "106912876",
              "data": "[]",
              "expiration_time": 1469277576,
              "pokemonId": "41",
              "latitude": 51.507413990618,
              "longitude": -0.13638046670647,
              "uid": "487604d6f4f:19",
              "is_alive": true
          },
          {
              "id": "106926183",
              "data": "[]",
              "expiration_time": 1469277501,
              "pokemonId": "120",
              "latitude": 51.502328154961,
              "longitude": -0.13148732051301,
              "uid": "487604dae1d:41",
              "is_alive": true
          },
          {
              "id": "106926213",
              "data": "[]",
              "expiration_time": 1469277631,
              "pokemonId": "41",
              "latitude": 51.501836178535,
              "longitude": -0.13084206823215,
              "uid": "487604dae1d:41",
              "is_alive": true
          },
          {
              "id": "106930574",
              "data": "[]",
              "expiration_time": 1469277612,
              "pokemonId": "41",
              "latitude": 51.502074658694,
              "longitude": -0.13773227850791,
              "uid": "487604d9f03:96",
              "is_alive": true
          },
          {
              "id": "106930600",
              "data": "[]",
              "expiration_time": 1469277578,
              "pokemonId": "96",
              "latitude": 51.503637221958,
              "longitude": -0.1357189733287,
              "uid": "487604d9f03:96",
              "is_alive": true
          },
          {
              "id": "106939125",
              "data": "[]",
              "expiration_time": 1469277636,
              "pokemonId": "129",
              "latitude": 51.502973574811,
              "longitude": -0.14141141773164,
              "uid": "48760527dcf:96",
              "is_alive": true
          },
          {
              "id": "106965242",
              "data": "[]",
              "expiration_time": 1469277679,
              "pokemonId": "16",
              "latitude": 51.506286438095,
              "longitude": -0.11570810664218,
              "uid": "487604b6eef:120",
              "is_alive": true
          },
          {
              "id": "106976708",
              "data": "[]",
              "expiration_time": 1469277697,
              "pokemonId": "90",
              "latitude": 51.503574224217,
              "longitude": -0.1179925200633,
              "uid": "487604c7f1b:90",
              "is_alive": true
          },
          {
              "id": "106987439",
              "data": "[]",
              "expiration_time": 1469277753,
              "pokemonId": "96",
              "latitude": 51.507755040109,
              "longitude": -0.12508256197697,
              "uid": "487604ce9ef:96",
              "is_alive": true
          },
          {
              "id": "106998048",
              "data": "[]",
              "expiration_time": 1469277635,
              "pokemonId": "129",
              "latitude": 51.501744575594,
              "longitude": -0.1391085701358,
              "uid": "487604d9ab9:41",
              "is_alive": true
          },
          {
              "id": "106998068",
              "data": "[]",
              "expiration_time": 1469277527,
              "pokemonId": "41",
              "latitude": 51.503221574088,
              "longitude": -0.14003461522408,
              "uid": "487604d9ab9:41",
              "is_alive": true
          },
          {
              "id": "106998085",
              "data": "[]",
              "expiration_time": 1469277706,
              "pokemonId": "32",
              "latitude": 51.50314163051,
              "longitude": -0.13819686880706,
              "uid": "487604d9ab9:41",
              "is_alive": true
          },
          {
              "id": "106998099",
              "data": "[]",
              "expiration_time": 1469277643,
              "pokemonId": "50",
              "latitude": 51.503306187963,
              "longitude": -0.13792208614734,
              "uid": "487604d9ab9:41",
              "is_alive": true
          },
          {
              "id": "107014639",
              "data": "[]",
              "expiration_time": 1469277579,
              "pokemonId": "96",
              "latitude": 51.503824383173,
              "longitude": -0.11413690328873,
              "uid": "487604b7541:92",
              "is_alive": true
          },
          {
              "id": "107037315",
              "data": "[]",
              "expiration_time": 1469277662,
              "pokemonId": "96",
              "latitude": 51.505618412274,
              "longitude": -0.12645073666508,
              "uid": "487604cfb7b:19",
              "is_alive": true
          },
          {
              "id": "107038634",
              "data": "[]",
              "expiration_time": 1469277787,
              "pokemonId": "21",
              "latitude": 51.511608312016,
              "longitude": -0.13116352351014,
              "uid": "487604d26d1:96",
              "is_alive": true
          },
          {
              "id": "107044669",
              "data": "[]",
              "expiration_time": 1469277809,
              "pokemonId": "96",
              "latitude": 51.508001310816,
              "longitude": -0.12517552216889,
              "uid": "487604ce9ef:96",
              "is_alive": true
          },
          {
              "id": "107047258",
              "data": "[]",
              "expiration_time": 1469277783,
              "pokemonId": "96",
              "latitude": 51.5000428051,
              "longitude": -0.11843667951767,
              "uid": "487604b8887:19",
              "is_alive": true
          },
          {
              "id": "107047276",
              "data": "[]",
              "expiration_time": 1469277698,
              "pokemonId": "54",
              "latitude": 51.500206103235,
              "longitude": -0.11935556339062,
              "uid": "487604b8887:19",
              "is_alive": true
          },
          {
              "id": "107047296",
              "data": "[]",
              "expiration_time": 1469277611,
              "pokemonId": "19",
              "latitude": 51.501686922611,
              "longitude": -0.1166072287964,
              "uid": "487604b8887:19",
              "is_alive": true
          },
          {
              "id": "107059538",
              "data": "[]",
              "expiration_time": 1469277758,
              "pokemonId": "41",
              "latitude": 51.510123758288,
              "longitude": -0.13666936347125,
              "uid": "487604d392b:16",
              "is_alive": true
          },
          {
              "id": "107086721",
              "data": "[]",
              "expiration_time": 1469277678,
              "pokemonId": "11",
              "latitude": 51.503886098386,
              "longitude": -0.1335155160929,
              "uid": "487604d0813:79",
              "is_alive": true
          },
          {
              "id": "107086749",
              "data": "[]",
              "expiration_time": 1469277643,
              "pokemonId": "96",
              "latitude": 51.504708940999,
              "longitude": -0.13204968655032,
              "uid": "487604d0813:79",
              "is_alive": true
          },
          {
              "id": "107086790",
              "data": "[]",
              "expiration_time": 1469277676,
              "pokemonId": "79",
              "latitude": 51.504873385017,
              "longitude": -0.13186674588818,
              "uid": "487604d0813:79",
              "is_alive": true
          },
          {
              "id": "107097245",
              "data": "[]",
              "expiration_time": 1469277810,
              "pokemonId": "79",
              "latitude": 51.502731263207,
              "longitude": -0.13801110911176,
              "uid": "487604d9ab9:41",
              "is_alive": true
          },
          {
              "id": "107102524",
              "data": "[]",
              "expiration_time": 1469277854,
              "pokemonId": "54",
              "latitude": 51.511201218186,
              "longitude": -0.12794596798819,
              "uid": "487604cd945:54",
              "is_alive": true
          },
          {
              "id": "107104896",
              "data": "[]",
              "expiration_time": 1469277832,
              "pokemonId": "16",
              "latitude": 51.503074409603,
              "longitude": -0.12487790845206,
              "uid": "487604c5bfd:16",
              "is_alive": true
          },
          {
              "id": "107107318",
              "data": "[]",
              "expiration_time": 1469277734,
              "pokemonId": "43",
              "latitude": 51.496998529458,
              "longitude": -0.12439163212339,
              "uid": "487604c3cf3:120",
              "is_alive": true
          },
          {
              "id": "107107345",
              "data": "[]",
              "expiration_time": 1469277641,
              "pokemonId": "96",
              "latitude": 51.497326188155,
              "longitude": -0.12512765886312,
              "uid": "487604c3cf3:120",
              "is_alive": true
          },
          {
              "id": "107107377",
              "data": "[]",
              "expiration_time": 1469277763,
              "pokemonId": "43",
              "latitude": 51.496751520472,
              "longitude": -0.1250332633523,
              "uid": "487604c3cf3:120",
              "is_alive": true
          },
          {
              "id": "107107770",
              "data": "[]",
              "expiration_time": 1469277829,
              "pokemonId": "41",
              "latitude": 51.50758119003,
              "longitude": -0.13380880672445,
              "uid": "487604d1231:41",
              "is_alive": true
          },
          {
              "id": "107117265",
              "data": "[]",
              "expiration_time": 1469277892,
              "pokemonId": "19",
              "latitude": 51.509395842406,
              "longitude": -0.12665157863713,
              "uid": "487604ce9ef:96",
              "is_alive": true
          },
          {
              "id": "107119411",
              "data": "[]",
              "expiration_time": 1469277857,
              "pokemonId": "96",
              "latitude": 51.510142931909,
              "longitude": -0.11903065225865,
              "uid": "487604ca75b:86",
              "is_alive": true
          },
          {
              "id": "107137480",
              "data": "[]",
              "expiration_time": 1469277800,
              "pokemonId": "79",
              "latitude": 51.503146519929,
              "longitude": -0.13397126372008,
              "uid": "487604da72d:11",
              "is_alive": true
          },
          {
              "id": "107140858",
              "data": "[]",
              "expiration_time": 1469277839,
              "pokemonId": "96",
              "latitude": 51.507011572583,
              "longitude": -0.12912094136186,
              "uid": "487604cfb9b:19",
              "is_alive": true
          },
          {
              "id": "107146073",
              "data": "[]",
              "expiration_time": 1469277893,
              "pokemonId": "118",
              "latitude": 51.502172585105,
              "longitude": -0.12349633942121,
              "uid": "487604c5d69:118",
              "is_alive": true
          },
          {
              "id": "107153373",
              "data": "[]",
              "expiration_time": 1469277815,
              "pokemonId": "32",
              "latitude": 51.500190273387,
              "longitude": -0.13404892361866,
              "uid": "487604da4eb:118",
              "is_alive": true
          },
          {
              "id": "107165603",
              "data": "[]",
              "expiration_time": 1469277888,
              "pokemonId": "86",
              "latitude": 51.505052263404,
              "longitude": -0.11809060158785,
              "uid": "487604c8055:86",
              "is_alive": true
          },
          {
              "id": "107165656",
              "data": "[]",
              "expiration_time": 1469277870,
              "pokemonId": "69",
              "latitude": 51.503244551368,
              "longitude": -0.11918489676337,
              "uid": "487604c8055:86",
              "is_alive": true
          },
          {
              "id": "107195287",
              "data": "[]",
              "expiration_time": 1469277834,
              "pokemonId": "116",
              "latitude": 51.503629736155,
              "longitude": -0.14205785904781,
              "uid": "4876052791d:129",
              "is_alive": true
          },
          {
              "id": "107195332",
              "data": "[]",
              "expiration_time": 1469277924,
              "pokemonId": "96",
              "latitude": 51.503548504229,
              "longitude": -0.14132245755855,
              "uid": "4876052791d:129",
              "is_alive": true
          },
          {
              "id": "107198275",
              "data": "[]",
              "expiration_time": 1469277843,
              "pokemonId": "124",
              "latitude": 51.500839128013,
              "longitude": -0.14094128663726,
              "uid": "487604d8591:79",
              "is_alive": true
          },
          {
              "id": "107198330",
              "data": "[]",
              "expiration_time": 1469277661,
              "pokemonId": "23",
              "latitude": 51.500676434426,
              "longitude": -0.13965440513721,
              "uid": "487604d8591:79",
              "is_alive": true
          },
          {
              "id": "107200533",
              "data": "[]",
              "expiration_time": 1469277933,
              "pokemonId": "100",
              "latitude": 51.510289603074,
              "longitude": -0.13529190421137,
              "uid": "487604d447b:7",
              "is_alive": true
          },
          {
              "id": "107209452",
              "data": "[]",
              "expiration_time": 1469277985,
              "pokemonId": "96",
              "latitude": 51.503820484981,
              "longitude": -0.11808539038568,
              "uid": "487604c8055:86",
              "is_alive": true
          },
          {
              "id": "107216207",
              "data": "[]",
              "expiration_time": 1469277970,
              "pokemonId": "118",
              "latitude": 51.503493389512,
              "longitude": -0.11670660121886,
              "uid": "487604b80e1:118",
              "is_alive": true
          },
          {
              "id": "107216229",
              "data": "[]",
              "expiration_time": 1469277881,
              "pokemonId": "22",
              "latitude": 51.502588729529,
              "longitude": -0.1180801795624,
              "uid": "487604b80e1:118",
              "is_alive": true
          },
          {
              "id": "107222688",
              "data": "[]",
              "expiration_time": 1469277982,
              "pokemonId": "79",
              "latitude": 51.501503783465,
              "longitude": -0.13433078918946,
              "uid": "487604dafaf:120",
              "is_alive": true
          },
          {
              "id": "107237364",
              "data": "[]",
              "expiration_time": 1469277824,
              "pokemonId": "43",
              "latitude": 51.505373721152,
              "longitude": -0.12488819572426,
              "uid": "487604cf4cb:98",
              "is_alive": true
          },
          {
              "id": "107240577",
              "data": "[]",
              "expiration_time": 1469278019,
              "pokemonId": "69",
              "latitude": 51.510453749076,
              "longitude": -0.13538458393486,
              "uid": "487604d3a03:41",
              "is_alive": true
          },
          {
              "id": "107242957",
              "data": "[]",
              "expiration_time": 1469277817,
              "pokemonId": "96",
              "latitude": 51.508745031586,
              "longitude": -0.12076982255416,
              "uid": "487604c9691:41",
              "is_alive": true
          },
          {
              "id": "107242985",
              "data": "[]",
              "expiration_time": 1469277858,
              "pokemonId": "41",
              "latitude": 51.508826303793,
              "longitude": -0.12159683995739,
              "uid": "487604c9691:41",
              "is_alive": true
          },
          {
              "id": "107270638",
              "data": "[]",
              "expiration_time": 1469277955,
              "pokemonId": "19",
              "latitude": 51.510050145968,
              "longitude": -0.12913499873252,
              "uid": "487604cdf8b:19",
              "is_alive": true
          },
          {
              "id": "107276239",
              "data": "[]",
              "expiration_time": 1469277989,
              "pokemonId": "16",
              "latitude": 51.511691358736,
              "longitude": -0.13033699927821,
              "uid": "487604d27b5:21",
              "is_alive": true
          },
          {
              "id": "107289450",
              "data": "[]",
              "expiration_time": 1469278005,
              "pokemonId": "147",
              "latitude": 51.502505035648,
              "longitude": -0.11964087729018,
              "uid": "487604c7c0d:69",
              "is_alive": true
          },
          {
              "id": "107290955",
              "data": "[]",
              "expiration_time": 1469278064,
              "pokemonId": "96",
              "latitude": 51.503144094251,
              "longitude": -0.13608402023609,
              "uid": "487604d9f03:96",
              "is_alive": true
          },
          {
              "id": "107291039",
              "data": "[]",
              "expiration_time": 1469277947,
              "pokemonId": "97",
              "latitude": 51.502814561065,
              "longitude": -0.13700102656309,
              "uid": "487604d9f03:96",
              "is_alive": true
          },
          {
              "id": "107296951",
              "data": "[]",
              "expiration_time": 1469277726,
              "pokemonId": "96",
              "latitude": 51.510552158959,
              "longitude": -0.12041021689029,
              "uid": "487604c9877:19",
              "is_alive": true
          },
          {
              "id": "107322644",
              "data": "[]",
              "expiration_time": 1469277974,
              "pokemonId": "16",
              "latitude": 51.510715467485,
              "longitude": -0.12132949495529,
              "uid": "487604ca389:98",
              "is_alive": true
          },
          {
              "id": "107331274",
              "data": "[]",
              "expiration_time": 1469277931,
              "pokemonId": "72",
              "latitude": 51.50421908932,
              "longitude": -0.12947543245858,
              "uid": "487604d0039:96",
              "is_alive": true
          },
          {
              "id": "107331291",
              "data": "[]",
              "expiration_time": 1469278045,
              "pokemonId": "19",
              "latitude": 51.504465343354,
              "longitude": -0.12956842806658,
              "uid": "487604d0039:96",
              "is_alive": true
          },
          {
              "id": "107335659",
              "data": "[]",
              "expiration_time": 1469278060,
              "pokemonId": "17",
              "latitude": 51.50497323764,
              "longitude": -0.11496803936241,
              "uid": "487604b78fd:96",
              "is_alive": true
          },
          {
              "id": "107335699",
              "data": "[]",
              "expiration_time": 1469277875,
              "pokemonId": "96",
              "latitude": 51.5050549973,
              "longitude": -0.11533568762307,
              "uid": "487604b78fd:96",
              "is_alive": true
          },
          {
              "id": "107370299",
              "data": "[]",
              "expiration_time": 1469277971,
              "pokemonId": "41",
              "latitude": 51.498792996584,
              "longitude": -0.13523619177118,
              "uid": "487604dbf49:96",
              "is_alive": true
          },
          {
              "id": "107370317",
              "data": "[]",
              "expiration_time": 1469277641,
              "pokemonId": "16",
              "latitude": 51.498630767525,
              "longitude": -0.13349038105517,
              "uid": "487604dbf49:96",
              "is_alive": true
          },
          {
              "id": "107370331",
              "data": "[]",
              "expiration_time": 1469277483,
              "pokemonId": "96",
              "latitude": 51.499451676756,
              "longitude": -0.13367799613595,
              "uid": "487604dbf49:96",
              "is_alive": true
          },
          {
              "id": "107370350",
              "data": "[]",
              "expiration_time": 1469277585,
              "pokemonId": "86",
              "latitude": 51.499367673729,
              "longitude": -0.13533082356678,
              "uid": "487604dbf49:96",
              "is_alive": true
          },
          {
              "id": "107370365",
              "data": "[]",
              "expiration_time": 1469278055,
              "pokemonId": "86",
              "latitude": 51.500025522823,
              "longitude": -0.13450737155403,
              "uid": "487604dbf49:96",
              "is_alive": true
          },
          {
              "id": "107374155",
              "data": "[]",
              "expiration_time": 1469278124,
              "pokemonId": "104",
              "latitude": 51.502154935025,
              "longitude": -0.13929434361734,
              "uid": "487604d9cb3:50",
              "is_alive": true
          },
          {
              "id": "107374770",
              "data": "[]",
              "expiration_time": 1469278124,
              "pokemonId": "96",
              "latitude": 51.508821761116,
              "longitude": -0.12591408209906,
              "uid": "487604ce893:96",
              "is_alive": true
          },
          {
              "id": "107377123",
              "data": "[]",
              "expiration_time": 1469278083,
              "pokemonId": "79",
              "latitude": 51.504805165929,
              "longitude": -0.11882422302392,
              "uid": "487604c8055:86",
              "is_alive": true
          },
          {
              "id": "107384062",
              "data": "[]",
              "expiration_time": 1469277616,
              "pokemonId": "19",
              "latitude": 51.511611754128,
              "longitude": -0.12803972379881,
              "uid": "487604ccfd1:10",
              "is_alive": true
          },
          {
              "id": "107384089",
              "data": "[]",
              "expiration_time": 1469277950,
              "pokemonId": "41",
              "latitude": 51.512106900317,
              "longitude": -0.12583703151768,
              "uid": "487604ccfd1:10",
              "is_alive": true
          },
          {
              "id": "107396353",
              "data": "[]",
              "expiration_time": 1469278078,
              "pokemonId": "129",
              "latitude": 51.501519462188,
              "longitude": -0.11982030300769,
              "uid": "487604c7f43:7",
              "is_alive": true
          },
          {
              "id": "107396428",
              "data": "[]",
              "expiration_time": 1469278066,
              "pokemonId": "41",
              "latitude": 51.500945127042,
              "longitude": -0.11935872343309,
              "uid": "487604c7f43:7",
              "is_alive": true
          },
          {
              "id": "107406780",
              "data": "[]",
              "expiration_time": 1469278166,
              "pokemonId": "96",
              "latitude": 51.508654631194,
              "longitude": -0.12857734759981,
              "uid": "487604ce893:96",
              "is_alive": true
          },
          {
              "id": "107407145",
              "data": "[]",
              "expiration_time": 1469277642,
              "pokemonId": "96",
              "latitude": 51.49896393284,
              "longitude": -0.12926738880432,
              "uid": "487604c4c03:114",
              "is_alive": true
          },
          {
              "id": "107407190",
              "data": "[]",
              "expiration_time": 1469277867,
              "pokemonId": "41",
              "latitude": 51.500605174355,
              "longitude": -0.13019340022792,
              "uid": "487604c4c03:114",
              "is_alive": true
          },
          {
              "id": "107407260",
              "data": "[]",
              "expiration_time": 1469277627,
              "pokemonId": "90",
              "latitude": 51.500770213131,
              "longitude": -0.12945943573475,
              "uid": "487604c4c03:114",
              "is_alive": true
          },
          {
              "id": "107435349",
              "data": "[]",
              "expiration_time": 1469278184,
              "pokemonId": "16",
              "latitude": 51.506029013532,
              "longitude": -0.12645259682105,
              "uid": "487604cf9f1:96",
              "is_alive": true
          },
          {
              "id": "107442069",
              "data": "[]",
              "expiration_time": 1469278197,
              "pokemonId": "60",
              "latitude": 51.50332648223,
              "longitude": -0.11936890672992,
              "uid": "487604c7c0d:69",
              "is_alive": true
          },
          {
              "id": "107449664",
              "data": "[]",
              "expiration_time": 1469278164,
              "pokemonId": "79",
              "latitude": 51.502487587071,
              "longitude": -0.13571338365418,
              "uid": "487604d9f03:96",
              "is_alive": true
          },
          {
              "id": "107449730",
              "data": "[]",
              "expiration_time": 1469278218,
              "pokemonId": "92",
              "latitude": 51.502734147578,
              "longitude": -0.13553086389182,
              "uid": "487604d9f03:96",
              "is_alive": true
          },
          {
              "id": "107453027",
              "data": "[]",
              "expiration_time": 1469278210,
              "pokemonId": "23",
              "latitude": 51.500593445738,
              "longitude": -0.14038887499173,
              "uid": "487604d8f5f:129",
              "is_alive": true
          },
          {
              "id": "107460934",
              "data": "[]",
              "expiration_time": 1469278142,
              "pokemonId": "19",
              "latitude": 51.502577952989,
              "longitude": -0.12836566839658,
              "uid": "487604c5747:116",
              "is_alive": true
          },
          {
              "id": "107460975",
              "data": "[]",
              "expiration_time": 1469278157,
              "pokemonId": "116",
              "latitude": 51.503318993618,
              "longitude": -0.12653216395797,
              "uid": "487604c5747:116",
              "is_alive": true
          },
          {
              "id": "107461000",
              "data": "[]",
              "expiration_time": 1469277531,
              "pokemonId": "19",
              "latitude": 51.502415117151,
              "longitude": -0.12707911517912,
              "uid": "487604c5747:116",
              "is_alive": true
          },
          {
              "id": "107473250",
              "data": "[]",
              "expiration_time": 1469277971,
              "pokemonId": "98",
              "latitude": 51.509235876123,
              "longitude": -0.12260902760591,
              "uid": "487604cbe85:41",
              "is_alive": true
          },
          {
              "id": "107473273",
              "data": "[]",
              "expiration_time": 1469277973,
              "pokemonId": "116",
              "latitude": 51.509318478568,
              "longitude": -0.12215011223321,
              "uid": "487604cbe85:41",
              "is_alive": true
          },
          {
              "id": "107480614",
              "data": "[]",
              "expiration_time": 1469277697,
              "pokemonId": "96",
              "latitude": 51.510874103376,
              "longitude": -0.12665828663409,
              "uid": "487604cd975:19",
              "is_alive": true
          },
          {
              "id": "107482111",
              "data": "[]",
              "expiration_time": 1469278161,
              "pokemonId": "116",
              "latitude": 51.498968108969,
              "longitude": -0.12541050074245,
              "uid": "487604c3889:116",
              "is_alive": true
          },
          {
              "id": "107485420",
              "data": "[]",
              "expiration_time": 1469278166,
              "pokemonId": "96",
              "latitude": 51.508414923066,
              "longitude": -0.1223298628684,
              "uid": "487604c9691:41",
              "is_alive": true
          },
          {
              "id": "107485456",
              "data": "[]",
              "expiration_time": 1469278181,
              "pokemonId": "96",
              "latitude": 51.508086429923,
              "longitude": -0.1223284231776,
              "uid": "487604c9691:41",
              "is_alive": true
          },
          {
              "id": "107486489",
              "data": "[]",
              "expiration_time": 1469278017,
              "pokemonId": "124",
              "latitude": 51.503547396665,
              "longitude": -0.14224118875574,
              "uid": "48760527e19:96",
              "is_alive": true
          },
          {
              "id": "107486542",
              "data": "[]",
              "expiration_time": 1469278260,
              "pokemonId": "44",
              "latitude": 51.502233643204,
              "longitude": -0.14214262402944,
              "uid": "48760527e19:96",
              "is_alive": true
          },
          {
              "id": "107489831",
              "data": "[]",
              "expiration_time": 1469277885,
              "pokemonId": "96",
              "latitude": 51.500346115335,
              "longitude": -0.14121438282192,
              "uid": "487604d8f5f:129",
              "is_alive": true
          },
          {
              "id": "107490372",
              "data": "[]",
              "expiration_time": 1469277494,
              "pokemonId": "41",
              "latitude": 51.502084352483,
              "longitude": -0.12918999531251,
              "uid": "487604c53a9:19",
              "is_alive": true
          },
          {
              "id": "107494970",
              "data": "[]",
              "expiration_time": 1469278272,
              "pokemonId": "19",
              "latitude": 51.507180671531,
              "longitude": -0.12462072138287,
              "uid": "487604cf29d:19",
              "is_alive": true
          },
          {
              "id": "107494999",
              "data": "[]",
              "expiration_time": 1469277975,
              "pokemonId": "97",
              "latitude": 51.506688233336,
              "longitude": -0.12434296973258,
              "uid": "487604cf29d:19",
              "is_alive": true
          },
          {
              "id": "107497307",
              "data": "[]",
              "expiration_time": 1469278257,
              "pokemonId": "96",
              "latitude": 51.507589912892,
              "longitude": -0.1259085251708,
              "uid": "487604ce893:96",
              "is_alive": true
          },
          {
              "id": "107504839",
              "data": "[]",
              "expiration_time": 1469277692,
              "pokemonId": "72",
              "latitude": 51.495679141849,
              "longitude": -0.12961947555493,
              "uid": "487604c3253:96",
              "is_alive": true
          },
          {
              "id": "107504870",
              "data": "[]",
              "expiration_time": 1469277893,
              "pokemonId": "54",
              "latitude": 51.495432819437,
              "longitude": -0.12961833177915,
              "uid": "487604c3253:96",
              "is_alive": true
          },
          {
              "id": "107504887",
              "data": "[]",
              "expiration_time": 1469277619,
              "pokemonId": "96",
              "latitude": 51.495927175355,
              "longitude": -0.12805961907333,
              "uid": "487604c3253:96",
              "is_alive": true
          },
          {
              "id": "107504913",
              "data": "[]",
              "expiration_time": 1469278183,
              "pokemonId": "96",
              "latitude": 51.497568048515,
              "longitude": -0.12926092474033,
              "uid": "487604c3253:96",
              "is_alive": true
          },
          {
              "id": "107504934",
              "data": "[]",
              "expiration_time": 1469278138,
              "pokemonId": "96",
              "latitude": 51.497158605797,
              "longitude": -0.12824892199349,
              "uid": "487604c3253:96",
              "is_alive": true
          },
          {
              "id": "107520157",
              "data": "[]",
              "expiration_time": 1469278251,
              "pokemonId": "20",
              "latitude": 51.508569667307,
              "longitude": -0.131149244803,
              "uid": "487604cdfd3:96",
              "is_alive": true
          },
          {
              "id": "107546912",
              "data": "[]",
              "expiration_time": 1469278111,
              "pokemonId": "96",
              "latitude": 51.507675911286,
              "longitude": -0.12223477395694,
              "uid": "487604c9217:41",
              "is_alive": true
          },
          {
              "id": "107550494",
              "data": "[]",
              "expiration_time": 1469278304,
              "pokemonId": "16",
              "latitude": 51.507590011192,
              "longitude": -0.12581666900445,
              "uid": "487604ce893:96",
              "is_alive": true
          },
          {
              "id": "107553226",
              "data": "[]",
              "expiration_time": 1469278277,
              "pokemonId": "96",
              "latitude": 51.504069752502,
              "longitude": -0.11514796701298,
              "uid": "487604b9d21:96",
              "is_alive": true
          },
          {
              "id": "107553241",
              "data": "[]",
              "expiration_time": 1469278234,
              "pokemonId": "124",
              "latitude": 51.503494387494,
              "longitude": -0.11569653309477,
              "uid": "487604b9d21:96",
              "is_alive": true
          },
          {
              "id": "107561140",
              "data": "[]",
              "expiration_time": 1469278277,
              "pokemonId": "98",
              "latitude": 51.500042527378,
              "longitude": -0.11871213218776,
              "uid": "487604b8887:19",
              "is_alive": true
          },
          {
              "id": "107561189",
              "data": "[]",
              "expiration_time": 1469278202,
              "pokemonId": "21",
              "latitude": 51.50004243466,
              "longitude": -0.11880395009264,
              "uid": "487604b8887:19",
              "is_alive": true
          },
          {
              "id": "107566742",
              "data": "[]",
              "expiration_time": 1469278007,
              "pokemonId": "118",
              "latitude": 51.498234290255,
              "longitude": -0.12044890695193,
              "uid": "487604c7477:21",
              "is_alive": true
          },
          {
              "id": "107566828",
              "data": "[]",
              "expiration_time": 1469278114,
              "pokemonId": "118",
              "latitude": 51.499712583737,
              "longitude": -0.12017982542682,
              "uid": "487604c7477:21",
              "is_alive": true
          },
          {
              "id": "107569513",
              "data": "[]",
              "expiration_time": 1469277947,
              "pokemonId": "96",
              "latitude": 51.502164333574,
              "longitude": -0.13111915213399,
              "uid": "487604dae1d:41",
              "is_alive": true
          }
        ]
    };
})();