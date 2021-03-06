// Map Setup

// Create the tile layer(s) that will be the chosen background of our map
var streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY,
  }
)

var ausCentre = [-23.6980, 133.8807];
var mapZoomLevel = 5;

// Create map object and set default layers
var myMap = L.map("mapid", {
  center: ausCentre,
  zoom: mapZoomLevel,
});

streets.addTo(myMap);

// Create a baseMaps object to hold base map options - only one can be shown at a time
// var baseMaps = {
//   "Street Map": streets,
// };

// Create an overlayMaps object to hold other layers
// var overlayMaps = {
//   "Earthquakes": earthquakeLayer,
//   "Techtonic Plates": plateLayer,
// };


// Pass our map layers into our layer control
// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
// L.control
//   .layers(streets, satellite, {
//     collapsed: false,
//   })
//   .addTo(myMap);




// Load in geojson data for earthquakes
// var url =
//   "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grab data with d3
// d3.json(url, (response) => {
  // console.log(response);

  // var earthquakes = response.features;

  // Each earthquake
  // console.log(earthquakes);

  // // Coordinates of each earthquake
  // console.log(earthquakes[0].geometry.coordinates);

  // // Longitude
  // console.log(earthquakes[0].geometry.coordinates[0]);

  // // Latitude
  // console.log(earthquakes[0].geometry.coordinates[1]);

  // // Depth
  // console.log(earthquakes[0].geometry.coordinates[2]);

  // Loop through each feature and create one marker for each earthquake object
  // earthquakes.forEach((earthquake) => {
  //   var longitude = earthquake.geometry.coordinates[0];
  //   var latitude = earthquake.geometry.coordinates[1];
  //   var depth = earthquake.geometry.coordinates[2];
  //   var magnitude = earthquake.properties.mag;

    // console.log(latitude);
    // console.log(longitude);
    // console.log(depth);
    // console.log(magnitude);

//     var earthquakeMarker = L.circle([latitude, longitude], {
//       fillOpacity: 0.75,
//       color: "black",
//       weight: 1,
//       fillColor: depthColor(depth),
//       radius: markerSize(magnitude),
//     })
//       .bindPopup(
//         "<h3>" +
//           earthquake.properties.place +
//           "</h3><hr><h4>Magnitude: " +
//           magnitude +
//           "<h4>Depth: " +
//           depth
//       )
//       .addTo(earthquakeLayer);
//   });

//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function (myMap) {
//     var div = L.DomUtil.create("div", "info legend");
//     div.innerHTML += "<h4>Earthquake Depth</h4>";
//     div.innerHTML +=
//       '<i style="background: #99FF33"></i><span> -10 to 10</span><br>';
//     div.innerHTML +=
//       '<i style="background: #CCFF66"></i><span>10 to 30</span><br>';
//     div.innerHTML +=
//       '<i style="background: #FFCC33"></i><span>30 to 50</span><br>';
//     div.innerHTML +=
//       '<i style="background: #FF9900"></i><span>50 to 70</span><br>';
//     div.innerHTML +=
//       '<i style="background: #FF6600"></i><span>70 to 90</span><br>';
//     div.innerHTML += '<i style="background: #FF0000"></i><span>90 +</span><br>';

//     return div;
//   };

//   legend.addTo(myMap);
// });

// Add in techtonic plates
// Link to json file for techtonic plates
// var link = "static/data/PB2002_plates.json";

// Grabbing our JSON data..
// d3.json(link, function (data) {
  // Creating a geoJSON layer with the retrieved data
//   techtonicplates = L.geoJson(data, {
//     style: function (feature) {
//       return {
//         color: "#FF8C00",
//         weight: 2.5,
//         fillOpacity: 0,
//       };
//     },
//   }).addTo(plateLayer);
// });
