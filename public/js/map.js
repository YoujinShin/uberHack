L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

var map = L.map('map', {
	zoomControl: false
}).setView([40 , 0], 4);

map.scrollWheelZoom.disable();

var baseLayer = L.mapbox.tileLayer('examples.map-20v6611k');
baseLayer.setOpacity(0.8);
baseLayer.addTo(map);

var cityLayer = L.mapbox.featureLayer();

// Set Interval for Map Animation
var intervalId = window.setInterval(animateMap, 100);

// Intro Map Animation
var t = 0;

function animateMap() {
	map.setView(L.latLng(
        Math.cos(t * 0.5) * 50,
        Math.sin(t) * 50
        ), 5);

    t += 0.01;
}
