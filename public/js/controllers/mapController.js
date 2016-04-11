angular.module("TripChat")
.controller("mapController", function($scope, $http, $interval) {
  $scope.map = {
    center: {
      latitude: 42.702289,
      longitude: -73.963819
    },
    zoom: 8,

    markers: []        
  };

  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: 'jersey city'}, function (result, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        // bingo!
        console.log('lat: ' + result[0].geometry.location.lat());
    }
  });


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

});