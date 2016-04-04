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
      // console.log(result);
    })
  }

  $scope.userLoggedIn = false;
  $scope.userNotLoggedIn = true;
  $scope.login = function() {
    $http.post('/login', {
      username: $scope.username,
      password: $scope.password
    })
    .then(function(result) {
      console.log(result);
      $rootScope.user = result.data;
      $scope.userLoggedIn = true;
      $scope.userNotLoggedIn = false;
      $state.go('dashboard');
      console.log($rootScope.user.id);
    })
  }; // end login

  $scope.logout = function() {
    $http.get('/logout').then(function() {
      $scope.userLoggedIn = false;
      $scope.userNotLoggedIn = true;
      $state.go('home');
    }, function(err) {
      console.log(err);
    })
  }; // end logout

});
