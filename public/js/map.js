L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

var map = L.map('map', {
	zoomControl: false
}).setView([40 , 0], 4);

map.scrollWheelZoom.disable();
new L.Control.Zoom({ position: 'topright' }).addTo(map);

var baseLayer = L.mapbox.tileLayer('examples.map-20v6611k');
baseLayer.setOpacity(0.8);
baseLayer.addTo(map);


//// Feature Layer
var cityLayer = L.mapbox.featureLayer();

var cambridge = L.marker([42.3783904,-71.1129097], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#4a86e8'
  })
}).addTo(cityLayer);

var sanfran = L.marker([37.7577,-122.4376], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#4a86e8'
  })
}).addTo(cityLayer);

cityLayer.addTo(map);


//// Map Init
map.setView([40.447069, -95.237515], 4);

cityLayer.on('click', function(e) {

	// map.panTo(e.layer.getLatLng());
	map.setView(e.layer.getLatLng(), 13);
	map.removeLayer(cityLayer);

	$('#addButton').css('visibility', 'visible');
	$('.directionBox').css('visibility', 'visible');
});







// // Set Interval for Map Animation
// var intervalId = window.setInterval(animateMap, 100);

// // Intro Map Animation
// var t = 0;

// function animateMap() {
// 	map.setView(L.latLng(
//         Math.cos(t * 0.5) * 50,
//         Math.sin(t) * 50
//         ), 5);

//     t += 0.01;
// }
