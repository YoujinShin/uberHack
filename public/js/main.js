// function showAddress() {
// 	var address = $("#address").val();
// 	var geocoder = new google.maps.Geocoder();

// 	geocoder.geocode( { 'address': address}, function(results, status) {
// 		if (status == google.maps.GeocoderStatus.OK) {
// 		  	if (map.getZoom() < 16){
// 		  		map.setZoom(16);
// 		  	}

// 		  	map.panTo(results[0].geometry.location);
// 		  	var marker = new google.maps.Marker({
// 			    position: results[0].geometry.location,
// 			    map: map
// 			});

// 		  	$("#lat").val( results[0].geometry.location.lat() );
//     		$("#lon").val( results[0].geometry.location.lng() );
// 	 	} else {
// 	  		alert("Geocode was not successful for the following reason: " + status);
// 	 	}
// 	});
// }

function showAddress() {
	var address = $("#address").val();
	map.setView([42.3783904,-71.11290], 13);
	
	// finish map animation
	window.clearInterval(intervalId);

	$('#intro_content').css('visibility', 'hidden');
	$("#intro2_content").css('visibility', 'visible');
}

function addTrip() {
	$("#intro2_content").css('visibility', 'hidden');
}