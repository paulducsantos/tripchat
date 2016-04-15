angular.module("TripChat")
.controller('dashboardCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.init = function() {
    setTimeout(function() {
      $scope.getUserItineraries();
      $scope.getItineraries();
    },100);
  }

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

  $scope.addItinerary = function(){
    $http.post("/api/itineraries", {
      title:$scope.itinerary.title,
      city: $scope.itinerary.city,
      state: $scope.itinerary.state,
      country: $scope.itinerary.country,
      UserId: $scope.user.id
    })
    .then(function (result) {
      $scope.userItineraries.push(result.data);
      $scope.itinerary.title = "";
      $scope.itinerary.city = "";
      $scope.itinerary.state = "";
      $scope.itinerary.country= "";
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

    $http.delete("/api/activities/" + activityId)
    .then(function (result) {
      // $scope.getUserItineraries();

     }), (function(err) {
      console.log(err);
    });
  };


  //FOR SEARCH PARTIAL WHEN COMPLETED
  $scope.getItineraries = function() {

      console.log($scope.user.id);
      $http.get('/api/itineraries')
      .then(function(result) {
        $scope.allItineraries = result.data;
        console.log(result.data);
      }, function(err) {
        console.log(err)
      });
    }
  $scope.getItineraries();

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
}]);
