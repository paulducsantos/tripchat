angular.module('TripChat')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'rootController',
      templateUrl: 'views/partials/home-partial.html'
    })
    // .state('dashboard', {
    //   url: '/dashboard',
    //   templateUrl: 'views/partials/dashboard.html'
    // })

  $locationProvider.html5Mode(true);
}]);