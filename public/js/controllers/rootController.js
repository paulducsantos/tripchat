angular.module('TripChat')
.controller('rootController', ['$scope', '$http', function ($scope, $http) {
  // Gets called when the directive is ready:


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
