angular.module('TripChat')
.controller('itinerariesController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // Gets called when the directive is ready:
  
  $scope.init = function() {
    // $scope.getCurrentItinerary();
    // $scope.getComments();
    $scope.getItineraries();
    $scope.makeMarkers();
    $scope.getGeo();
  }

  $scope.location = $stateParams.location;

  $scope.getItineraries = function() {
    $http.get('/api/itineraries')
    .then(function(result) {
      $scope.allItineraries = result.data;
      console.log($scope.allItineraries);
      // $scope.getComments($scope.latestItinerary.id);
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getCurrentItinerary = function() {
    $http.get('/api/itineraries/' + $stateParams.id)
    .then(function(result) {
      $scope.currentItinerary = result.data;
      console.log($scope.currentItinerary);
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getComments = function() {
    console.log('yoyoyoyo');
    $http.get('/api/comments?ItineraryId=' + $stateParams.id)
    .then(function(results) {
      $scope.comments = results.data;
    }, function(err) {
      console.log(err);
    });
  }

  $scope.addComment = function(itineraryId) {
    $http.post('/api/comments', {
      text: $scope.newComment,
      ItineraryId: itineraryId,
      UserId: $scope.user.id,
    })
    .then(function(results) {
      console.log(results.data);
      $scope.newComment = '';
      $scope.comments.push(results.data);
    }, function(err) {
      console.log(err);
    });
  }


 

/* ============================================================
  MAP STUFF
==================================================*/

  $scope.map = {
      center: {
        latitude: 40.7128,
        longitude: 74.0059
      },
      zoom: 12,
      options: {
        scrollwheel: false,
        draggable: true,
        zoomControl: true,
        fullscreenControl: true
      },
      markers: []      
    };
    
  geocoder = new google.maps.Geocoder();

  $scope.getGeo = function() {

    if($stateParams.location) {
      geocoder.geocode({ address: $stateParams.location}, function (result, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          $scope.map.center = {
            latitude: result[0].geometry.location.lat(),
            longitude: result[0].geometry.location.lng()
          }
          console.log($scope.map.center);
        }
      });
    } else {
      $scope.map.center = {
        latitude: 40.7128,
        longitude: -74.0059
      }
    }
  }

  $scope.filterGeo = function() {
    geocoder.geocode({ address: $scope.location}, function (result, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        $scope.map.center = {
          latitude: result[0].geometry.location.lat(),
          longitude: result[0].geometry.location.lng()
        }
        console.log($scope.map.center);
        $scope.newMarkers();
      }
    });
  }

  $scope.makeMarkers = function() {
    $scope.map.markers = [];
    $http.get('/api/comments?location=' + $stateParams.location)
      .then(function(result) {
        console.log(result);
        var markers = [];
        result.data.forEach(function(element, index) {
          var marker = {
            coords: {
              latitude: element.latitude, 
              longitude: element.longitude
            },
            id: element.id,
            title: element.text,
            address: element.address,
            options: {
              animation: google.maps.Animation.DROP
            }
          }
          $scope.map.markers.push(marker);
        });
      }, function(err) {
        console.log(err);
    });
  }

  $scope.newMarkers = function() {
    $scope.map.markers = [];
    $http.get('/api/comments?location=' + $scope.location)
      .then(function(result) {
        console.log(result);
        var markers = [];
        result.data.forEach(function(element, index) {
          var marker = {
            coords: {
              latitude: element.latitude, 
              longitude: element.longitude
            },
            id: element.id,
            title: element.text,
            address: element.address,
            options: {
              animation: google.maps.Animation.DROP
            }
          }
          $scope.map.markers.push(marker);
          
        });
      }, function(err) {
        console.log(err);
    });
  }

  $scope.hoverGeo = function(city) {
    geocoder.geocode({ address: city}, function (result, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        $scope.map.center = {
          latitude: result[0].geometry.location.lat(),
          longitude: result[0].geometry.location.lng()
        }
        console.log($scope.map.center);
        $scope.hoverMarkers(city);
      }
    });
  }

  $scope.hoverMarkers = function(city) {
    $scope.map.markers = [];
    $http.get('/api/comments?location=' + city)
      .then(function(result) {
        console.log(result);
        var markers = [];
        result.data.forEach(function(element, index) {
          var marker = {
            coords: {
              latitude: element.latitude, 
              longitude: element.longitude
            },
            id: element.id,
            title: element.text,
            address: element.address,
            options: {
              animation: google.maps.Animation.DROP
            }
          }
          $scope.map.markers.push(marker);
          
        });
      }, function(err) {
        console.log(err);
    });
  }

  $scope.onClick = function(marker, eventName, model) {
      console.log("Clicked!");
      model.show = !model.show;
  };
  // $scope.$watch($scope.search.location, _.debounce(function () {
  //   $scope.newMarkers();
  // }, 2000));
    
    


    // console.log($rootScope.redLobsters);
    // $scope.filterMale = function(maleFemale) {
    //   $http.get('http://localhost:3000/markers')
    //     .then(function(result) {
    //       console.log(result);
    //       var markers = [];
    //       result.data.forEach(function(element, index) {
    //         // if(element.Gender === "M") {
    //           markers.push({
    //             coords: {
    //               latitude: element.Latitude, 
    //               longitude: element.Longitude
    //             },
    //             id: index
    //           });
    //         // }
            
    //       });
    //       $scope.map.markers = markers;
    //     }, function(err) {
    //       console.log(err);
    //     });
    // }
    // // $scope.filterMale();

    // $scope.filterFemale = function() {
    //   $http.get('http://localhost:3000/markers')
    //     .then(function(result) {
    //       console.log(result);
    //       var markers = [];
    //       result.data.forEach(function(element, index) {
    //         if(element.Gender === "M") {
    //           markers.push({
    //             coords: {
    //               latitude: element.Latitude, 
    //               longitude: element.Longitude
    //             },
    //             id: index
    //           });
    //         }
            
    //       });
    //       $scope.map.markers = markers;
    //     }, function(err) {
    //       console.log(err);
    //     });
    // }

}]);
