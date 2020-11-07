console.log("Hello")


d3.json("/data", (data) => {
    console.log(data);
    Object.values(data).forEach
        ((element) => {
            console.log(element);
    });
});



