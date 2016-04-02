angular.module("TripChat",  [])
.controller('dashboardCtrl', ['$scope','$http', function($scope, $http){

  $scope.showIntinaries = function(){
    $http.get("/intineraries").then(function (response) {
      $scope.intineraries = response.data
     });
  };

  $scope.userItinaries = function(){
    $http.get("/users/" + user.id + "/itineraries").then(function (response) {
      $scope.itineraries = response.data
     });
  };

  $scope.addItinerary = function(){
    $http.post("/api/itineraries", {title:$scope.itinerary_name, location: $scope.location}).then(function (response) {
      $scope.intineraries = response.data;
     });
  };

  $scope.editItinerary = function(){
    $http.put("/itineraries/" + itineraryId).then(function (response) {
      $scope.itineraries = response.data
    });
  };

  $scope.deleteItinerary = function(){
    $http.delete("/itineraries/" + itineraryId).then(function (response) {
      $scope.intineraries = response.data
    });
  };

  $scope.addActvitity = function(){
    $http.post("/itineraries/" + itineraryId + "/activities").then(function (response) {
      $scope./* */ = response.data
     });
  };

  $scope.deleteActvitity = function(activityId){
    $http.delete("/activities/" + activityId).then(function (response) {
      $scope./**/ = response.data
    });
  };

}]);
