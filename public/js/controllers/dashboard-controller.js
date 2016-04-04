angular.module("TripChat")
.controller('dashboardCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.getUserItineraries = function() {
    $http.get('/api/itineraries?UserId=' + $scope.user.id)
    .then(function(result) {
      $scope.userItineraries = result.data;
      $scope.itinerary_name = "";
      $scope.location = "";
    }, function(err) {
      console.log(err)
    });
  }
  $scope.getUserItineraries();


  // $scope.editItinerary = function(itineraryId) {
  //   console.log($scope.user.id);
  //   $http.put('/api/itineraries/' + itineraryId, {
  //     title:$scope.itinerary_name,
  //     location: $scope.location
  //   })
  //   .then(function(result) {
  //     $scope.userItineraries = result.data;
  //     console.log(result.data);
  //   }, function(err) {
  //     console.log(err)
  //   });
  // }


//FOR SEARCH PARTIAL WHEN COMPLETED
  // $scope.getItineraries = function() {

  //     console.log($scope.user.id);
  //     $http.get('/api/itineraries')
  //     .then(function(result) {
  //       $scope.allItineraries = result.data;
  //       console.log(result.data);
  //     }, function(err) {
  //       console.log(err)
  //     });
  //   }
  // $scope.getItineraries();


  $scope.addItinerary = function(){
    $http.post("/api/itineraries", {
      title:$scope.itinerary_name,
      location: $scope.location,
      UserId: $scope.user.id
    })
    .success(function (response) {
      $scope.getUserItineraries = response.data;
     })
    .error(function(err) {
      console.log(err);
    });
    $scope.getUserItineraries();

  };


  // $scope.editItinerary = function(){
  //   $http.put("/itineraries/" + itineraryId).then(function (response) {
  //     $scope.itineraries = response.data
  //   });
  // };

  // $scope.deleteItinerary = function(){
  //   $http.delete("/itineraries/" + itineraryId).then(function (response) {
  //     // $scope.intineraries = response.data
  //   });
  // };

  // $scope.addActvitity = function(){
  //   $http.post("/itineraries/" + itineraryId + "/activities").then(function (response) {
  //     // $scope./* */ = response.data
  //    });
  // };

  // $scope.deleteActvitity = function(activityId){
  //   $http.delete("/activities/" + activityId).then(function (response) {
  //     // $scope./**/ = response.data
  //   });
  // };

}]);
