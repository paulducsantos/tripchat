angular.module('TripChat')
.controller('mainCtrl', function($scope, userFactory) {

  $scope.users = {};

  $scope.signup = function() {
    userFactory.saveUser($scope.users)
    .then(function(result) {
      console.log(result);
    })
  }

  $scope.showLogout = false;
  $scope.showLogin = true;
  $scope.login = function() {
    console.log($scope.username);
    $http.post('/login', {
      username: $scope.username,
      password: $scope.password
    })
    .then(function(result) {
      console.log(result);
      $scope.showLogout = true;
      $scope.showLogin = false;
    })
  }
  
});