angular.module('TripChat')
.controller('AppCtrl', function($scope, $http) {

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

  $scope.userLoggedIn = false;
  $scope.userNotLoggedIn = true;
  $scope.login = function() {
    console.log($scope.username);
    $http.post('/login', {
      username: $scope.username,
      password: $scope.password
    })
    .then(function(result) {
      console.log(result);
      $scope.userLoggedIn = true;
      $scope.userNotLoggedIn = false;
    })
  };
  
});