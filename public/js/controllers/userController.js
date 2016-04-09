angular.module('TripChat')
.controller('userController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // Gets called when the directive is ready:

  $scope.getUsers = function() {

    $http.get('/api/users?username=' + $stateParams.username)
    .then(function(result) {
      $http.get('/api/itineraries/' + result.data[0].id)
      .then(function(itineraries) {
        $scope.userItineraries = itineraries.data;
        console.log($scope.userItineraries);
      }, function(err) {
        console.log(err);
      })
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