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

  $scope.search = {};

  $scope.location = $stateParams.location;

  $scope.getItineraries = function() {
    $http.get('/api/itineraries')
    .then(function(result) {
      $scope.allItineraries = result.data;
      console.log($scope.allItineraries);
      console.log($scope.allItineraries.length);
      // $scope.getComments($scope.latestItinerary.id);
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getCurrentItinerary = function() {
    $http.get('/api/itineraries/' + $stateParams.id)
    .then(function(result) {
      $scope.currentItinerary = result.data;
      $scope.currentItineraryGeo($scope.currentItinerary.city)
      $scope.getComments();
    }, function(err) {
      console.log(err)
    });
  }

  $scope.getComments = function() {
    $http.get('/api/comments?ItineraryId=' + $stateParams.id)
    .then(function(results) {
      $scope.currentItinerary.comments = results.data;
      console.log($scope.currentItinerary.comments)
      console.log($scope.comments);
    }, function(err) {
      console.log(err);
    });
  }

  geocoder = new google.maps.Geocoder();

  $scope.addComment = function(itineraryId, city) {
    var lng;
    var lat;
    console.log(itineraryId);
    geocoder.geocode({ address: $scope.comment.address}, function (result, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        lat = result[0].geometry.location.lat();
        lng = result[0].geometry.location.lng();
        console.log(lat);
        console.log(lng);
        $http.post('/api/comments', {
          text: $scope.comment.text,
          ItineraryId: itineraryId,
          UserId: $scope.user.id,
          address: $scope.comment.address,
          city: city,
          longitude: lng,
          latitude: lat,
          link: $scope.comment.link
        })
        .then(function(results) {
          $scope.newComment = ''; // What is this for??
          $scope.comment.text = "";
          $scope.comment.address = "";
          $scope.comment.link = "";
          $scope.comments.push(results.data);

          console.log(results.data);
        }, function(err) {
          console.log(err);
        });
      }
       $scope.getCurrentItinerary();
    });

  }



  $scope.goToUsernameProfile = function() {
    console.log('goToUsernameProfile() fired');
  };


/* ============================================================
  MAP STUFF
==================================================*/

  $scope.map = {
      center: {
        latitude: 40.7128,
        longitude: -74.0059
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

  console.log($stateParams.location);

  $scope.getGeo = function() {

    if($stateParams.location) {
      geocoder.geocode({ address: $stateParams.location}, function (result, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          $scope.map.center = {
            latitude: result[0].geometry.location.lat(),
            longitude: result[0].geometry.location.lng()
          }
          console.log($scope.map.center);
          $scope.search.city = $stateParams.location;
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
    geocoder.geocode({ address: $scope.search.city}, function (result, status) {
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
              animation: google.maps.Animation.BOUNCE
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
    $http.get('/api/comments?location=' + $scope.search.city)
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
              animation: google.maps.Animation.BOUNCE
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
              animation: google.maps.Animation.BOUNCE
            }
          }
          $scope.map.markers.push(marker);

        });
      }, function(err) {
        console.log(err);
    });
  }

/* ================================================================
  CURRENT ITINERARY
  =================================================================*/

  $scope.currentItineraryGeo = function(city) {
    geocoder.geocode({ address: city}, function (result, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        $scope.map.center = {
          latitude: result[0].geometry.location.lat(),
          longitude: result[0].geometry.location.lng()
        }
        console.log($scope.map.center);
        $scope.currentItineraryMarkers();
      }
    });
  }

  $scope.currentItineraryMarkers = function() {
    $scope.map.markers = [];
    $http.get('/api/comments?ItineraryId=' + $stateParams.id)
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
