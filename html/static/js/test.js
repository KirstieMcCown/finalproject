// Set the external datasource for the charts (JSON file from my Flask App (API)) 
// chart.dataSource.url = "/data/myData.php";



function firstplot() {
    d3.json("/yearcount").then(data => {
        console.log(data);
        data.forEach((element) => {
            // console.log(element.year)
            year = element.year;
            count = element.count;
            year_percent = element.year_percent; 
            average_age = element.average_age;
            console.log(year)  
        });
    
    });
};
firstplot();