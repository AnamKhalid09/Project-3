url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    data.sort((a, b) => a.total_won < b.total_won ? 1 : -1);
    displayGdpChart(data.slice(0,10));
  });

function displayGdpChart(data) {
    console.log("display gdp chart");
    let barData = {
        name: "Total Won",
        type: "scatter",
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    let lineData = {
        name: "GDP",
        type: "scatter",
        yaxis: 'y2',
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.gdp))
    };

    let layout = {
        title: 'Total Won vs GDP',
        yaxis: {title: 'Total Won'},
        yaxis2: {
          title: 'GDP',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right'
        }
      };
      
    Plotly.newPlot("plot", [barData, lineData], layout);
}

