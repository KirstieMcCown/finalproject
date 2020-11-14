
// Create base layers

// Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Create separate layer groups: for each year
var year2010layer = L.layerGroup(year2010);
var year2011layer = L.layerGroup(year2011);
var year2012layer = L.layerGroup(year2012);
var year2013layer = L.layerGroup(year2013);
var year2014layer = L.layerGroup(year2014);
var year2015layer = L.layerGroup(year2015);
var year2016layer = L.layerGroup(year2016);
var year2017layer = L.layerGroup(year2017);
var year2018layer = L.layerGroup(year2018);


// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  // "State Population": states,
  // "City Population": cities,
  "2010": year2010layer,
  "2011": year2011layer,
  "2012": year2012layer,
  "2013": year2013layer,
  "2014": year2014layer,
  "2015": year2015layer,
  "2016": year2016layer,
  "2017": year2017layer,
  "2018": year2018layer

};

var ausCentre = [-23.6980, 133.8807];
var mapZoomLevel = 4.2;

// Define a map object
var myMap = L.map("map", {
  center: ausCentre,
  zoom: mapZoomLevel,
  layers: [streetmap, year2010layer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


// Function to determine marker size based on number of Babies each year
function markerSize(count) {
  return count * 2;
}


var data;
var state;
var year2010;
var year2011;
var year2012;
var year2013;
var year2014;
var year2015;
var year2016;
var year2017;
var year2018;



// Load in data
d3.csv("static/js/babiesbirthstate.csv").then(function(data) {
  // console.log(data);
  data = data
  state = data[0].topic_disaggregation
  // console.log(state)

  var circlemarkers = [];
  var lat;
  var long;
  var latlong

  

  for (var i = 0; i < data.length; i++) {


    count = data[i].count;
    year = data[i].year;
    state = data[i].topic_disaggregation;
    lat = data[i].lat;
    long = data[i].long;
    latlong = L.latLng(lat, long);
    

    if (year == "2010") {

      var year2010 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#58D68D",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2010layer);
    };
  

    if (year == "2011") {

      var year2011 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#DC7633",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2011layer);
    };

    if (year == "2012") {

      var year2012 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#C39BD3",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2012layer);
    };


    if (year == "2013") {

      var year2013 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#566573",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2013layer);
    };


    if (year == "2014") {

      var year2014 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#83ACAD",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2014layer);
    };
  

    if (year == "2015") {

      var year2015 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#F4D03F",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2015layer);
    };

    if (year == "2016") {

      var year2016 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#512E5F",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2016layer);
    };


    if (year == "2017") {

      var year2017 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#EE02E3",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2017layer);
    };

    if (year == "2018") {

      var year2018 = L.circle(latlong, {
        fillOpacity: 0.75,
        color: "black",
        fillColor: "#6302EE",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i].count)
      }).bindPopup("<h1>" + state + "</h1> <hr> <p>Year: " + year + "</p><p>Number of Babies: " + count + "</p>")
        .addTo(year2018layer);
    };


    
  };
  });


