// Mapbox API - Exercise 2
mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-96.776, 32.818], // starting position [lng, lat]
    zoom: 4, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

// Mapbox API - Exercise 3
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// Mapbox API - Exercise 5
// const marker = new mapboxgl.Marker({
//     zoom: 7,
// }).setLngLat([-96.789, 32.778])
//     .addTo(map);


// Mapbox API - Exercise 6
map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Dallas Farmers Market</strong><br>Mon-Sun 10AM-7PM<p>Located at 1010 S. Pearl Expressway in downtown Dallas, the Dallas Farmers Market features: produce dealers, wholesale dealers and local farmers.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-96.789, 32.778]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<img src="data:image/png;base64,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" alt="Lockhart Image">' +
                            '<strong>Lockhart Smokehouse BBQ</strong>' +
                            '<br>Mon-Sun 11AM-9PM' +
                            '<p>Lively counter-serve BBQ joint offering a variety of smoked meats & sausages, plus a full bar.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -96.8285753673907, 32.74946367211865]
                    }
                },
            ]
        }
    });
// Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
            'circle-color': 'pink',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

// Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
// Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

// Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

// Populate the popup and set its coordinates
// based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});