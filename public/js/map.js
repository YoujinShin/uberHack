L.mapbox.accessToken = 'pk.eyJ1Ijoic2Vuc2VhYmxlIiwiYSI6ImxSNC1wc28ifQ.hst-boAjFCngpjzrbXrShw';

var map = L.map('map', {
	zoomControl: false
}).setView([40 , 0], 4);

map.scrollWheelZoom.disable();
new L.Control.Zoom({ position: 'topright' }).addTo(map);

var baseLayer = L.mapbox.tileLayer('examples.map-20v6611k');
baseLayer.setOpacity(0.8);
baseLayer.setZIndex(0);
baseLayer.addTo(map);


//// City Layer
var cityLayer = L.mapbox.featureLayer();


var cambridge = L.marker([42.3783904,-71.1129097], {
  icon: L.mapbox.marker.icon({ 'marker-color': '#4a86e8' })
}).addTo(cityLayer);

var sanfran = L.marker([37.7577,-122.4376], {
  icon: L.mapbox.marker.icon({ 'marker-color': '#4a86e8' })
}).addTo(cityLayer);

cityLayer.addTo(map);


//// Pin Layer
var pinLayer = L.mapbox.featureLayer();

var pin_start = L.marker([42.3783904,-71.1129097], {
  icon: L.mapbox.marker.icon({ 
  	'marker-size': 'large',
  	'marker-color': '#fdf733' 
  }),
  // icon: icon_start,
  draggable: true,
  riseOnHover: true,
  riseOffset: 500
}).addTo(pinLayer);


var pin_end = L.marker([42.3783904,-71.1129097], {
  icon: L.mapbox.marker.icon({ 
  	'marker-size': 'large',
  	'marker-color': '#4a86e8' 
  }),
  draggable: true,
  riseOnHover: true,
  riseOffset: 500
}).addTo(pinLayer);


var polyline_options = {
    // color: '#4a86e8',
    color: '#000',
    weight: 2,
    opacity: 0.4
};

var route = L.polyline([[-77, 37.9], [-233.9, 36.5]], 
				polyline_options
			).addTo(pinLayer);


//// Map Init
map.setView([40.447069, -95.237515], 4);

//// City Selected
cityLayer.on('click', function(e) {

	var lat = e.latlng.lat;
	var lng = e.latlng.lng;

	if(lat == 42.3783904) { $('#cityname').text('| CAMBRIDGE'); }
	else if(lat == 37.7577) { $('#cityname').text('| SAN FRANCISCO'); }

	map.setView(e.layer.getLatLng(), 14);
	// baseLayer.setOpacity(0.5);

	start_lat = map.containerPointToLatLng([150,300]).lat;
	start_lng = map.containerPointToLatLng([150,300]).lng
	end_lat = map.containerPointToLatLng([150,500]).lat;
	end_lng = map.containerPointToLatLng([150,500]).lng

	pin_start.setLatLng( [start_lat, start_lng] );  //140
	pin_end.setLatLng( [end_lat, end_lng] );
	route.setLatLngs( [[start_lat, start_lng], [end_lat, end_lng]] );

	map.removeLayer(cityLayer);
	
	pinLayer.addTo(map);

	$('#addButton').css('visibility', 'visible');
	$('.directionBox').css('visibility', 'visible');
	$('#cityname').css('visibility', 'visible');
	$('#dashboard').css('visibility', 'visible');
});


//// Move Pins
pin_start.on('drag', function(e) {

	start_lat = e.target._latlng.lat;
	start_lng = e.target._latlng.lng;
	route.setLatLngs( [[start_lat, start_lng], [end_lat, end_lng]] );

	// Tooltip
	mid_lat = (start_lat + end_lat)/2;
	mid_lng = (start_lng + end_lng)/2;

	mid_x = map.latLngToContainerPoint([mid_lat, mid_lng]).x;
	mid_y = map.latLngToContainerPoint([mid_lat, mid_lng]).y;

	tooltip.style("top", mid_y+"px").style("left",mid_x+"px");
});


pin_end.on('drag', function(e) {

	end_lat = e.target._latlng.lat;
	end_lng = e.target._latlng.lng;
	route.setLatLngs( [[start_lat, start_lng], [end_lat, end_lng]] );

	// Tooltip
	mid_lat = (start_lat + end_lat)/2;
	mid_lng = (start_lng + end_lng)/2;

	mid_x = map.latLngToContainerPoint([mid_lat, mid_lng]).x;
	mid_y = map.latLngToContainerPoint([mid_lat, mid_lng]).y;

	tooltip.style("top", mid_y+"px").style("left",mid_x+"px");
});



//// Place Pins
pin_start.on('dragend', function(e) {

	mid_lat = (start_lat + end_lat)/2;
	mid_lng = (start_lng + end_lng)/2;

	mid_x = map.latLngToContainerPoint([mid_lat, mid_lng]).x;
	mid_y = map.latLngToContainerPoint([mid_lat, mid_lng]).y;

	tooltip.text("$" + 20+", " + 40 + "min");
	tooltip.style("top", mid_y+"px").style("left",mid_x+"px");
	tooltip.style("visibility", "visible");
});


pin_end.on('dragend', function(e) {

	mid_lat = (start_lat + end_lat)/2;
	mid_lng = (start_lng + end_lng)/2;

	mid_x = map.latLngToContainerPoint([mid_lat, mid_lng]).x;
	mid_y = map.latLngToContainerPoint([mid_lat, mid_lng]).y;

	tooltip.text("$" + 20+", " + 40 + "min");
	tooltip.style("top", mid_y+"px").style("left",mid_x+"px");
	tooltip.style("visibility", "visible");
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
