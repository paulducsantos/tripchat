angular.module('TripChat')
.controller('userController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // Gets called when the directive is ready:

  $scope.init = function() {
    console.log('userController init() fired!');
    $scope.getUserProfile();
  };

  $scope.getUserProfile = function() {
    // console.log($stateParams.username);
    $http.get('/api/users?username=' + $stateParams.username)
    .then(function(result) {
      // console.log(result);
      $scope.userData = result.data[0];
      // console.log($scope.userData);
      $http.get('/api/itineraries/?UserId=' + result.data[0].id)
      .then(function(itineraries) {
        console.log(itineraries.data);
        $scope.userItineraries = itineraries.data;
        // console.log($scope.userItineraries);
        $scope.getUserComments(itineraries.data[0].UserId);
      }, function(err) {
        console.log(err);
      })
    }, function(err) {
      console.log(err)
    });
  }; // end getUserProfile

  $scope.getUserComments = function(id) {
    console.log(id);
    $http.get('/api/comments?UserId=' + id)
    .then(function(result) {
      $scope.userComments = result.data;
      console.log($scope.userComments);
      console.log($scope.userComments[0].text);
      $scope.numberOfComments = $scope.userComments.length;
    }, function(err) {
      console.log(err);
    });
  }; // end getUserComments

}]);