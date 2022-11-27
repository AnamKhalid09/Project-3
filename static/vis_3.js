url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    data.sort((a, b) => a.total_won < b.total_won ? 1 : -1);
    displayPopulationChart(data.slice(0,10));
  });


function displayPopulationChart(data) {
    console.log("display population chart");
    let barData = {
        name: "Total Won",
        type: "scatter",
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };
    let lineData = {
        name: "Population",
        type: "scatter",
        yaxis: 'y2',
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.population))
    };


    let layout = {
        title: 'Total Won vs Population',
        yaxis: {title: 'Total Won'},
        yaxis2: {
          title: 'Population',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right'
        }
      };
      
    Plotly.newPlot("plot", [barData, lineData], layout);
}
