url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    displayParticipationsChart(data);
  });

function displayParticipationsChart(data) {
    console.log("display participation chart");
    let barData = {
        name: "Total Won",
        type: "scatter",
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    let lineData = {
        name: "Participation",
        type: "scatter",
        yaxis: 'y2',
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_participation))
    };

    let layout = {
        title: 'Total Won vs Participation',
        yaxis: {title: 'Total Won'},
        yaxis2: {
          title: 'Participation',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right'
        }
      };

    Plotly.newPlot("plot", [barData, lineData], layout);
}

