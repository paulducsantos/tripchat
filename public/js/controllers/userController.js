angular.module('TripChat')
.controller('userController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // Gets called when the directive is ready:

  // $scope.init = function() {
  //   console.log('userController init() fired!');
  //   $scope.goToUserProfile();
  // };

  $scope.getUserProfile = function() {
    console.log($stateParams.username);
    $http.get('/api/users?username=' + $stateParams.username)
    .then(function(result) {
      console.log(result);
      $scope.userData = result.data[0];
      console.log($scope.userData);
      $http.get('/api/itineraries/?UserId=' + result.data[0].id)
      .then(function(itineraries) {
        console.log(itineraries.data);
        $scope.userItineraries = itineraries.data;
        console.log($scope.userItineraries);
      }, function(err) {
        console.log(err);
      })
    }, function(err) {
      console.log(err)
    });
  }; // end getUserProfile

  $scope.goToUserProfile = function() {
    console.log('goToUserProfile() fired');
    $http.get('/api/itineraries')
    .then(function(result) {
      $scope.allUsers = result.data;
      console.log($scope.allUsers);
      // $scope.getComments($scope.latestItinerary.id);
    }, function(err) {
      console.log(err)
    });
  }

  // $scope.addComment = function(itineraryId) {
  //   $http.post('/api/comments', {
  //     text: $scope.newComment,
  //     ItineraryId: itineraryId,
  //     UserId: $scope.user.id
  //   })
  //   .then(function(results) {
  //     console.log(results.data);
  //     $scope.newComment = '';
  //     $scope.comments.push(results.data);
  //   }, function(err) {
  //     console.log(err);
  //   });
  // }

}]);