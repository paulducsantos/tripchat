var mymap = L.map('mapid').setView([40.5232920,-74.4405990], 13);


var marker = L.marker([40.5232920, -74.4405990]).addTo(mymap);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dpetro07.pi35b4nb',
    accessToken: 'pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltY2h2YTRrMDAwN3R6a2tiNnR6aHNwbSJ9.T-iEjm3PuzkfRhhsx-PHFg'
}).addTo(mymap);

marker.bindPopup("<b>Rutgers Business School</b><br>Hey, we have class here!");