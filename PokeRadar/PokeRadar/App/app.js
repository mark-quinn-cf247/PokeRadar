(function () {
    'use strict';

    angular.module('PokeRadar', [
        // Angular modules
        'ngAnimate',
        'ngRoute'

        // Custom modules

        // 3rd Party Modules
        
    ]);

    angular.module('PokeRadar').filter('secondsToDateTime', [function () {
        return function (seconds) {
            return new Date(1970, 0, 1).setSeconds(seconds);
        };
    }])
})();
