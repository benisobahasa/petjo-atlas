// Sample data for linguistic atlas
const linguisticAtlasData = [
    { region: 'Jakarta', lexicalDensity: 0.8, latitude: -6.2088, longitude: 106.8456 },
    { region: 'Bandung', lexicalDensity: 0.7, latitude: -6.9175, longitude: 107.6191 },
    { region: 'Surabaya', lexicalDensity: 0.6, latitude: -7.2575, longitude: 112.7521 },
    { region: 'Semarang', lexicalDensity: 0.65, latitude: -6.9932, longitude: 110.4203 },
    { region: 'Surakarta', lexicalDensity: 0.75, latitude: -7.5566, longitude: 110.8311 }
    // Add more data as needed
];

// Function to create linguistic atlas plot
function createLinguisticAtlasPlot(data) {
    const regionNames = data.map(entry => entry.region);
    const lexicalDensityValues = data.map(entry => entry.lexicalDensity);

    const trace = {
        x: regionNames,
        y: lexicalDensityValues,
        type: 'bar',
        marker: {
            color: 'rgb(158,202,225)',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const layout = {
        title: 'Linguistic Atlas',
        xaxis: { title: 'Region' },
        yaxis: { title: 'Lexical Density' }
    };

    Plotly.newPlot('atlas-plot', [trace], layout);
}

// Function to create map plot
function createMapPlot(data) {
    const latitudes = data.map(entry => entry.latitude);
    const longitudes = data.map(entry => entry.longitude);
    const text = data.map(entry => entry.region);

    const trace = {
        type: 'scattermapbox',
        lat: latitudes,
        lon: longitudes,
        mode: 'markers',
        marker: {
            size: 10,
            color: 'rgb(255,0,0)'
        },
        text: text,
        hoverinfo: 'text'
    };

    const layout = {
        title: 'Geographic Distribution',
        mapbox: { 
            style: 'open-street-map',
            zoom: 5,
            center: { lat: -6.2088, lon: 106.8456 }
        },
        showlegend: false
    };

    Plotly.newPlot('map-plot', [trace], layout);
}

// Call functions to create plots
createLinguisticAtlasPlot(linguisticAtlasData);
createMapPlot(linguisticAtlasData); // Use the same data for the map plot
