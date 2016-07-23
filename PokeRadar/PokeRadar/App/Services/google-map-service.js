(function () {
    'use strict';

    angular
        .module('PokeRadar')
        .service('googleMapService', googleMapService);

    googleMapService.$inject = ['$window', '$q'];

    function googleMapService($window, $q) {
        var deferred = $q.defer();

        // Load Google map API script
        function loadScript() {
            // Use global document since Angular's $document is weak
            var script = document.createElement('script');
            script.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyC-ZTl50UuFb1HyP-nyBomG8zI1tPf4pPU&callback=initMap';

            document.body.appendChild(script);
        }

        // Script loaded callback, send resolve
        $window.initMap = function () {
            deferred.resolve();
        }

        loadScript();

        return deferred.promise;
    }

})();