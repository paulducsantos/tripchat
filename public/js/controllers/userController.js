angular.module('TripChat')
.controller('userController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // Gets called when the directive is ready:

  $scope.init = function() {
    $scope.getUserProfile();
  };

  $scope.getUserProfile = function() {
    $http.get('/api/users?username=' + $stateParams.username)
    .then(function(result) {
      $scope.userData = result.data[0];
      $http.get('/api/itineraries/?UserId=' + result.data[0].id)
      .then(function(itineraries) {
        $scope.userItineraries = itineraries.data;
        $scope.getUserComments(itineraries.data[0].UserId);
      }, function(err) {
        console.log(err);
      })
    }, function(err) {
      console.log(err)
    });
  }; // end getUserProfile

  $scope.getUserComments = function(id) {
    $http.get('/api/comments?UserId=' + id)
    .then(function(result) {
      $scope.userComments = result.data;
      $scope.numberOfComments = $scope.userComments.length;
    }, function(err) {
      console.log(err);
    });
  }; // end getUserComments

}]);