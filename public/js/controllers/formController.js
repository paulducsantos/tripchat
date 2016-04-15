angular.module('TripChat')
.controller('AppCtrl', function($scope, $rootScope, $http, $state) {

  $scope.signup = function() {
    $http.post('/signup', {
      username: $scope.username,
      password: $scope.password,
      email: $scope.email,
      fname: $scope.fname,
      lname: $scope.lname
    })
    .then(function(result) {
    })
  } // end sign up

  $scope.getLogin = function() {
    $http.get('/loginInfo')
    .then(function(result) {
      $rootScope.user = result.data;
    })
  }

  $scope.login = function() {
    $http.post('/login', {
      username: $scope.username,
      password: $scope.password
    })
    .then(function(result) {
      $scope.getLogin();
      $state.go('dashboard');
    })
  }; // end login

  $scope.logout = function() {
    $http.get('/logout').then(function() {
      $rootScope.user = '';
      $state.go('home');
    }, function(err) {
      console.log(err);
    })
  }; // end logout
  $scope.getLogin();
});
