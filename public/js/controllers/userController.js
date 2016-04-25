angular.module('TripChat')
.controller('userController', ['$scope', '$http', '$stateParams', 'md5', function ($scope, $http, $stateParams, md5) {
  // Gets called when the directive is ready:

  $scope.init = function() {
    console.log('userController init() fired!');
    $scope.getUserProfile();
  };

  // $scope.getUserProfile = function() {
  //   $http.get('/api/users?username=' + $stateParams.username)
  //   .then(function(result) {
  //     $scope.userData = result.data[0];
  //     $http.get('/api/itineraries/?UserId=' + result.data[0].id)
  //     .then(function(itineraries) {
  //       console.log(itineraries.data);
  //       $scope.userItineraries = itineraries.data;
  //       $scope.getUserComments(itineraries.data[0].UserId);
  //     }, function(err) {
  //       console.log(err);
  //     })
  //   }, function(err) {
  //     console.log(err)
  //   });
  // }; // end getUserProfile
  var x = 0;
  $scope.getUserProfile = function() {
    $http.get('/api/users?username=' + $stateParams.username)
    .then(function(user) {
      $scope.userData = user.data[0];
      $http.get('/api/itineraries/?UserId=' + $scope.userData.id)
      .then(function(itineraries) {
        console.log(itineraries.data);
        $scope.userItineraries = itineraries.data;
        console.log($scope.userItineraries);
        $scope.userItineraries.forEach(function(itinerary) {
          console.log(itinerary.Comments);
          x++;
          console.log(x);
          itinerary.Comments.map(function(comment) {
            console.log(comment);
            $http.get('/api/users/' + comment.UserId)
            .then(function(user) {
              comment.username = user.data.username;
              comment.email = user.data.email;
            })
            .then(function() {
              console.log($scope.userItineraries);
            })
          })
        })
      })
    })
  }

  $scope.getUserComments = function(id) {
    console.log(id);
    $http.get('/api/comments?UserId=' + id)
    .then(function(result) {
      $scope.userComments = result.data;
      console.log($scope.userComments);
      console.log($scope.userComments[0].Itinerary.city);
      $scope.numberOfComments = $scope.userComments.length;
    }, function(err) {
      console.log(err);
    });
  }; // end getUserComments

}]);