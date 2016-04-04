angular.module('TripChat')
.controller('rootController', ['$scope', '$http', function ($scope, $http) {
  // Gets called when the directive is ready:
  $scope.callback = function (map) {
      // Map is available here to use:
      // map.setView([40.5232920,-74.4405990], 13)
      var mymap = L.map('mapid').setView([40.5201060,-74.5516470], 12);

      var marker = L.marker([40.5232920, -74.4405990]).addTo(mymap);


      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'dpetro07.pi35b4nb',
          accessToken: 'pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg'
      }).addTo(mymap);

      marker.bindPopup("<b>Rutgers Business School</b><br>Hey, we have class here!");;
    };


  $scope.getLatestItinerary = function() {
    $http.get('/api/itineraries?sort=-createdAt')
    .then(function(result) {
      $scope.latestItinerary = result.data[0];
      console.log($scope.latestItinerary);
      $scope.getComments($scope.latestItinerary.id);
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getComments = function(itineraryId) {
    $http.get('/api/comments?ItineraryId=' + itineraryId)
    .then(function(results) {
      console.log(results.data);
      $scope.comments = results.data;
    }, function(err) {
      console.log(err);
    });
  }

  $scope.addComment = function(itineraryId) {
    $http.post('/api/comments', {
      text: $scope.newComment,
      ItineraryId: itineraryId,
      UserId: $scope.user.id
    })
    .then(function(results) {
      console.log(results.data);
      $scope.newComment = '';
      $scope.comments.push(results.data);
    }, function(err) {
      console.log(err);
    });
  }

  $scope.getLatestItinerary();
}]);