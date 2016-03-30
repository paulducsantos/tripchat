angular.module('TripChat')
.controller('userSignup', function($scope, $http) {

  $scope.signup = function() {
    $http.post('/signup', {
      username: $scope.username,
      password: $scope.password,
      email: $scope.email,
      fname: $scope.fname,
      lname: $scope.lname
    })
    .then(function(result) {
      console.log(result);
    })
  }

  
});