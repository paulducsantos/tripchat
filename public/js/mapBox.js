var mymap = L.map('mapid').setView([51.505, -0.09], 13);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltM29jN3BpMDBieTVsa3NjM3hjZTA0cCJ9.YCAm8dNA4jc-M5_AhHZaMA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dpetro07.pi35b4nb',
    accessToken: 'pk.eyJ1IjoiZHBldHJvMDciLCJhIjoiY2ltM29jN3BpMDBieTVsa3NjM3hjZTA0cCJ9.YCAm8dNA4jc-M5_AhHZaMA'
}).addTo(mymap);