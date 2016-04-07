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
    .state('itineraries', {
      url: '/itineraries',
      controller: 'itinerariesController',
      templateUrl: 'views/partials/itineraries-partial.html'
    })
    .state('itineraries.details', {
      url: '/:id',
      controller: 'detailsController',
      templateUrl: 'views/partials/itineraries-partial.details.html'
    })
    .state('user', {
      url: '/:username',
      controller: 'userController',
      templateUrl: 'views/partials/user-partial.html'
    })

  $locationProvider.html5Mode(true);
}]);
