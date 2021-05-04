// Add all scripts to the JS folder
// JavaScript to build Leaflet Map

// initialize the map on the "map" div with a given centre and zoom
var mymap = L.map('mapid', {
    center: [51, -121.46],
	zoom: 6,
	doubleRightClickZoom: true
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


// create a variable for parks and trails icon
var myIcon1 = new
    L.icon({
    iconUrl: '../img/trail_24.png',
    });


// // Parks and Trails Data
// L.geoJSON(ParkAndTrail, {
// 	onEachFeature: function (feature, layer) {
// 	layer.bindPopup("<h3>Parks & Trails</h3>" + "<b>Name: </b>" + layer.feature.properties.name + "<br>" + "<b>Website: " + "<a href=" + layer.feature.properties.url + "> Click Here</a>");
// 	layer.setIcon(myIcon1);
// 	}
// }).addTo(mymap);

// Parks and Trails Data, add target="_blank"
L.geoJSON(ParkAndTrail, {
	onEachFeature: function (feature, layer) {
	layer.bindPopup("<h3>Parks & Trails</h3>" + "<b>Name: </b>" + layer.feature.properties.name + "<br>" + "<b>Website: " + "<a href=" + layer.feature.properties.url + " target=_blank> Click Here</a>");
	layer.setIcon(myIcon1);
	}
}).addTo(mymap);


// // Old_Version(for reference)
// L.geoJSON(ParkAndTrail, {
// 	onEachFeature: function (feature, layer) {
// 	layer.bindPopup("<b>Name: </b>" + layer.feature.properties.name + "<br>" + "<b>Website: </b>" + "<a href=" + layer.feature.properties.url + ">Click Here</a>");
// 	layer.setIcon(myIcon1);
// 	}
// }).addTo(mymap);



//
// create variable for stop of interest signs icon
var myIcon = new
    L.icon({
    iconUrl: '../img/poi32_3.png',
    });

var geojson = L.geoJSON(signs, {
	onEachFeature: function (feature, layer) {
	layer.bindPopup("<h3>Stop of Interest Signs</h3>" + "<img src=" + layer.feature.properties.Photo_URL + "width='100' height='100'>" + "<br>" + "<b>Name: </b>" + layer.feature.properties.Sign_Name + "<br>" + "<b>Location:</b> " + layer.feature.properties.Specific_L);
	layer.setIcon(myIcon) + "</p1>";
	}
});

// // No Error(keep for reference)
// var geojson = L.geoJSON(signs, {
// 	onEachFeature: function (feature, layer) {
// 	layer.bindPopup("<h3>Stop of Interest Signs</h3>" + "<b>Photo:</b> <img src=" + layer.feature.properties.Photo_URL + "width='100' height='100'>" + "<br>" + "<b>Name: </b>" + layer.feature.properties.Sign_Name + "<br>" + "<b>Location:</b> " + layer.feature.properties.Specific_L);
// 	layer.setIcon(myIcon) + "</p1>";
// 	}
// });



var markers = L.markerClusterGroup();
		markers.addLayer(geojson);
		mymap.addLayer(markers)


// .addTo(mymap);
L.control.betterscale({
    position: "bottomleft",
    imperial: false,
    metric: true,
    maxWidth: 150
}).addTo(mymap);


mymap.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'View Fullscreen',
        'true': 'Exit Fullscreen'
    }
}));

// L.control.coordinates master

L.control.coordinates({
	position:"bottomright",
	useDMS:true,
	labelTemplateLat:"N {y}",
	labelTemplateLng:"E {x}",
	useLatLngOrder:true
}).addTo(mymap);
