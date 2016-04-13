angular.module("TripChat")
.controller('dashboardCtrl', ['$scope', '$http', function($scope, $http) {


  $scope.getUserItineraries = function() {
    $http.get('/api/itineraries?UserId=' + $scope.user.id)
    .then(function(result) {
      $scope.userItineraries = result.data;
      for(var i = 0; i < $scope.userItineraries.length; i++) {
        $scope.userItineraries[i].newActivity = {};
        // console.log($scope.userItineraries[i]);
      }
    }, function(err) {
      console.log(err)
    });
  };
  $scope.getUserItineraries();

  $scope.addItinerary = function(){
    $http.post("/api/itineraries", {
      title:$scope.itinerary.title,
      location: $scope.itinerary.location,
      UserId: $scope.user.id
    })
    .then(function (result) {
      $scope.userItineraries.push(result.data);
      $scope.itinerary_name = "";
      $scope.location = "";
     },function(err) {
      console.log(err)
    });
  };

  $scope.deleteItinerary = function(itineraryId){
    $http.delete("/api/itineraries/" + itineraryId)
    .then(function (result) {
      $scope.getUserItineraries();
     }), (function(err) {
      console.log(err);
    });
  };



  $scope.editItinerary = function(itinerary) {
    $http.put('/api/itineraries/' + itinerary.id, {
      title: itinerary.title,
      location:itinerary.location
    });
  };


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

  //  $scope.getItineraryActivities = function(){
  //   $http.get("/api/activites?ItineraryId=" + $scope.itinerary.id, {
  //     $scope.activity_name,
  //     $scope.activity_address,

  //   })
  //   .then(function (result) {
  //     $scope.getItineraryActivities = response.data;
  //    }), (function(err) {
  //     console.log(err);
  //   });
  //   $scope.getItineraryActivities();
  // };

  $scope.addActivity = function(itineraryId, newActivity){
    newActivity.ItineraryId = itineraryId;
    $http.post("/api/activities", newActivity)
    .then(function (result) {
      $scope.getUserItineraries();
     }), (function(err) {
      console.log(err);
    });
  };


  $scope.deleteActivity = function(activityId){
    console.log(activityId);
    debugger;
    $http.delete("/api/activities/" + activityId)
    .then(function (result) {
      $scope.getUserItineraries();

     }), (function(err) {
      console.log(err);
    });

  };

}]);
