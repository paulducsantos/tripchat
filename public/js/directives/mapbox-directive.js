angular.module('TripChat')
.directive('mapbox', [
    function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                callback: "="
            },
            template: '<div></div>',
            link: function (scope, element, attributes) {
                L.mapbox.accessToken = 'pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg';
                var map = L.mapbox.map(element[0], 'dpetro07.pi35b4nb');
                scope.callback(map);
            }
        };
    }
]);