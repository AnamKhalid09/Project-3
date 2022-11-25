url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    displayPopulationChart(data);
  });


function displayPopulationChart(data) {
    console.log("display population chart");
    let barData = {
        type: "scatter",
        showlegend: false,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.population))
    };

    let lineData = {
        type: "scatter",
        showlegend: false,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    Plotly.newPlot("plot", [barData, lineData]);
}
