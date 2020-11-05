console.log("Hello")


const url = "/data";

d3.json(url).then(function(data) {
  console.log(data);
});

