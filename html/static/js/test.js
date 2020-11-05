console.log("Hello")


const url = "/data";

// d3.json(url).then(function(data) {
//   console.log(data);
// });

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
