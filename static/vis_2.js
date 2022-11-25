url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    displayGdpChart(data);
  });

function displayGdpChart(data) {
    console.log("display gdp chart");
    let barData = {
        type: "line",
        showlegend: false,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.gdp))
    };

    let lineData = {
        type: "line",
        showlegend: false,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    Plotly.newPlot("plot", [barData, lineData]);
}

