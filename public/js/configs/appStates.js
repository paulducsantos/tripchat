angular.module('TripChat')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/partials/dashboard.html'
    })

  $locationProvider.html5Mode(true);
