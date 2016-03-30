// Scripts for Angular To Do List App
$(document).ready(function() {



  // Triggers modal launch
  $('.modal-trigger').leanModal();

  // Activate side-nav for mobile
  $(".button-collapse").sideNav();

}); //end of doc.ready



var mymap = L.map('mapid').setView([51.505, -0.09], 13);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dpetro07.pi35b4nb',
    accessToken: 'pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg'
}).addTo(mymap);