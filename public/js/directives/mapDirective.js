angular.module('TripChat')
.directive('smallMap', function () {
  return {
    restrict: 'A',
    scope: {
      city: '='
    },
    templateUrl: '/views/directives/smallMap.html',
    controller: function($scope, $http) {

      $scope.map = {
        center: {
          latitude: 40.7128,
          longitude: -74.0059
        },
        zoom: 12,
        options: {
          scrollwheel: false,
          draggable: true
        },
        markers: []      
      };


    }
  }
});