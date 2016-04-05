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

  // $scope.userLoggedIn = false;
  // $scope.userNotLoggedIn = true;

  $scope.getLogin = function() {
    $http.get('/loginInfo')
    .then(function(result) {
      console.log(result.data);
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
      // $scope.userLoggedIn = true;
      // $scope.userNotLoggedIn = false;
      $state.go('dashboard');
    })
  }; // end login

  $scope.logout = function() {
    $http.get('/logout').then(function() {
      $rootScope.user = '';
      // $scope.userLoggedIn = false;
      // $scope.userNotLoggedIn = true;
      $state.go('home');
    }, function(err) {
      console.log(err);
    })
  }; // end logout
  $scope.getLogin();
});
