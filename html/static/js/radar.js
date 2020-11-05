 trace =
  {
  type: 'scatterpolar',
  r: [196, 566, 38, 608],
  theta: ['Critically Endangered','Endangered','Extinct', 'Vunerable'],
  fill: 'toself',
  name: 'Plants'
  },
 trace2 = {
  type: 'scatterpolar',
  r: [91, 179, 53, 216],
  theta: ['Critically Endangered','Endangered','Extinct', 'Vunerable'],
  fill: 'toself',
  name: 'Animals'
  }
data = [trace, trace2]
layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 600]
    }
  }
}
Plotly.newPlot("radar", data, layout)
var locationList = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]
 // Populate dropbox with ID Values - ID Values come from Location List
 locationList.forEach((location) => {
    var dropdownMenu = d3.select("#selDataset2");
    var newoption = dropdownMenu.append("option");
    newoption.attr("value", location);
    newoption.text(location);
    selectedState = dropdownMenu.node().value;
 });  
// Create a function to change demographics table and all charts based on selected ID
function radarDropDown(selectedState) {
         radar(selectedState);
};
// Create a function to populate the Bar Chart based on selected State
function radar(selectedState) {
  var dropdownMenu = d3.select("#selDataset2");
   selectedState = dropdownMenu.node().value;
 switch(selectedState){
 case "NSW":
   Animals = [8, 8, 11, 8], 
   plants = [40,96,8,118]; 
  //  console.log(Animals);
 break ;
 case "TAS" : 
    Animals = [6, 17, 4, 18], 
    plants = [32, 34, 3, 19];
 break; 
 case "WA":
  Animals = [18, 28, 5, 18], 
  plants = [67, 230, 10, 100];
  // console.log(Animals);
  case "NT":
    Animals = [3,9,0,16], 
    plants = [2,15,0,8];
  case "QLD":
    Animals = [6,17,0,8], 
    plants = [10,70,14,146];
    break;
  case "SA":
    Animals = [1,11,1,10], 
  plants = [12,34,0,33]; 
    break;
  case "TAS":
    Animals = [6, 17, 4, 18], 
    plants = [32, 34, 3, 19]; 
    break;
  case "VIC":
    Animals = [13,19,5,36], 
    plants = [9,26,3,44];  
    break;
  case "ACT":
      Animals = [0,0,0,2], 
      plants = [2,1,0,1];  
      break;
 }
 (r_animals= Animals);
 (r_plants = plants);
   console.log(r_animals)
  trace =
    {
    type: 'scatterpolar',
    r: plants,
    theta: ['Critically Endangered','Endangered','Extinct', 'Vunerable'],
    fill: 'toself',
    name: 'Plants'
    },
    trace2 = {
    type: 'scatterpolar',
    r: Animals,
    theta: ['Critically Endangered','Endangered','Extinct', 'Vunerable'],
    fill: 'toself',
    name: 'Animals'
    }
  data = [trace, trace2]
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 100]
      }
    }
  }
  Plotly.newPlot("radar", data, layout)
} 