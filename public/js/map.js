L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

var map = L.map('map', {
	zoomControl: false
}).setView([40 , 0], 3);

map.scrollWheelZoom.disable();

var baseLayer = L.mapbox.tileLayer('examples.map-20v6611k');
baseLayer.setOpacity(0.6);
baseLayer.addTo(map);

var cityLaer = L.mapbox.featureLayer();