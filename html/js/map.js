// Creating map object
var myMap = L.map("map", {
  center: [-28, 137],
  zoom: 4.5
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
// Load in geojson data
// var geoData = "static/data/IBRA7_regions_26sep2015.geojson";
// var geojson;
// // Add all the earthquakeMarkers to a new layer group.
// // Now we can handle them as one group instead of referencing each individually
// var endangered = L.layerGroup(endangeredLayer);
// // // Add all the techtonic plate shapes to a new layer group.
// // // Now we can handle them as one group instead of referencing each individually
// var vulnerable = L.layerGroup(vulnerableLayer);
// var critically = L.layerGroup(criticalLayer);
// // Grab data with d3
// var endangeredLayer = d3.json(geoData, function(data) {
//   // Create a new choropleth layer
//   geojson = L.choropleth(data, {
//     // Define what  property in the features to use
//     valueProperty: "ENDANGERED",
//     // Set color scale
//     scale: ["#F7FBFF", "#08306B"],
//     // Number of breaks in step range
//     steps: 10,
//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     },
//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.ENDANGERED + " Endangered Animals:<br>" );
//     }
//   }).addTo(myMap);
//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];
//     // Add min & max
//     var legendInfo = "<h1>Endangered Animals</h1>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";
//     div.innerHTML = legendInfo;
//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });
//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };
//   // Adding legend to the map
//   legend.addTo(myMap);
// });
// // Grab data with d3
// var vulnerableLayer = d3.json(geoData, function(data) {
//   // Create a new choropleth layer
//   geojson = L.choropleth(data, {
//     // Define what  property in the features to use
//     valueProperty: "VULNERABLE",
//     // Set color scale
//     scale: ["#F7FBFF", "#67000D"],
//     // Number of breaks in step range
//     steps: 10,
//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     },
//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.VULNERABLE + " Vulnerable Animals:<br>" );
//     }
//   }).addTo(vulnerable);
//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];
//     // Add min & max
//     var legendInfo = "<h1>Vulnerable Animals</h1>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";
//     div.innerHTML = legendInfo;
//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });
//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };
//   // Adding legend to the mapmyMap
//   legend.addTo(myMap);
// });
// // Grab data with d3
// var criticalLayer = d3.json(geoData, function(data) {
//   // Create a new choropleth layer
//   geojson = L.choropleth(data, {
//     // Define what  property in the features to use
//     valueProperty: "CRITICALLY",
//     // Set color scale
//     scale: ["#F7FBFF", "#000000"],
//     // Number of breaks in step range
//     steps: 10,
//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     },
//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.CRITICALLY + " Critical Animals:<br>" );
//     }
//   }).addTo(critically);
//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];
//     // Add min & max
//     var legendInfo = "<h2>Critically Endangered Animals</h2>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";
//     div.innerHTML = legendInfo;
//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });
//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };
//   // Adding legend to the mapmyMap
//   legend.addTo(myMap);
// });
// // L.control.tagFilterButton({
// //   data: ['small', 'red', 'sweet']
// // }).addTo(myMap);
// // A control to switch GeoJSON layers:
// L.control.layers({
//   'Endangered': endangered,
//   'Vulnerable': vulnerable,
//   'Critical' : critically
// })
// .addTo(myMap);