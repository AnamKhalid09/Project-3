url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    displayParticipationsChart(data);
  });

function displayParticipationsChart(data) {
    console.log("display participation chart");
    let barData = {
        type: "bar",
        name: "Total Participation",
        showlegend: true,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_participation))
    };

    let barData1 = {
        type: "bar",
        name: "Total Medals",
        showlegend: true,
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    Plotly.newPlot("plot", [barData, barData1]);
}

