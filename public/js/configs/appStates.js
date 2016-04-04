angular.module('TripChat')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'rootController',
      templateUrl: 'views/partials/home-partial.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      controller: 'dashboardCtrl',
      templateUrl: 'views/partials/dashboard-partial.html'
    })

  $locationProvider.html5Mode(true);
}]);
