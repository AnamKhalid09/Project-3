let olympics_file = "/Resources/olympics_medals_country_wise.csv";

let dataset = []

function dataSelect() {
    d3.csv("/Resources/olympics_medals_country_wise.csv").then(data=> {
        console.log(data);
        dataset = data;

        init();
    });
};

function init() {
    // Display countries dropdown
        d3.select("#selDataset")
        .selectAll("option")
        .data(dataset.filter(d => d.country))
        .enter()
        .append("option")
        .attr("value", function (d) { return d.country; })
        .text(function (d) { return d.country; });

        displayParticipationsChart(dataset.slice(0,-1));

        displayGdpChart(dataset.slice(0,-1));
    
        displayPopulationChart(dataset.slice(0,-1));
}

function displayParticipationsChart(data) {
    console.log("display participation chart");
    let barData = {
        type: "bar",
        showlegend: false,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_participation))
    };

    let lineData = {
        type: "scatter",
        showlegend: false,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    Plotly.newPlot("chart-medals", [barData, lineData]);
}

function displayGdpChart(data) {
    console.log("display gdp chart");
    
}

function displayPopulationChart(data) {
    console.log("display population chart");
   
}

function optionChanged(country) {
    console.log("country changed");
    console.log(country);


    displayParticipationsChart(dataset.slice(0,-1));

    displayGdpChart(dataset.slice(0,-1));

    displayPopulationChart(dataset.slice(0,-1));
}


dataSelect();