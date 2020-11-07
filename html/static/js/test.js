console.log("Hello")


d3.json("/data", (data) => {
    console.log(data)
    for (var i = 0; i < 10; i++){
        console.log(data[i])
    }
    });



// d3.json("/data", (data) => {
//     console.log(data)
//     Object.values(data).forEach((element) => {
//     console.log(element)
//     });
// });