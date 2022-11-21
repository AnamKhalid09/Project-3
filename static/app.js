console.log("Hello World");
var olympics = "/Resources/olympics_medals_country_wise.csv";

function dataSelect() {
    d3.csv(foo, function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].country);
            console.log(data[i].total_total);
        }
    });
};
dataSelect();