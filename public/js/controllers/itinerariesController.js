angular.module('TripChat')
.controller('itinerariesController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // Gets called when the directive is ready:
  
  $scope.init = function() {
    $scope.getCurrentItinerary();
    $scope.getComments();
  }

  $scope.getItineraries = function() {
    $http.get('/api/itineraries')
    .then(function(result) {
      $scope.allItineraries = result.data;
      console.log($scope.allItineraries);
      // $scope.getComments($scope.latestItinerary.id);
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getCurrentItinerary = function() {
    $http.get('/api/itineraries/' + $stateParams.id)
    .then(function(result) {
      $scope.currentItinerary = result.data;
      console.log($scope.currentItinerary);
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getComments = function() {
    console.log('yoyoyoyo');
    $http.get('/api/comments?ItineraryId=' + $stateParams.id)
    .then(function(results) {
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

}]);
