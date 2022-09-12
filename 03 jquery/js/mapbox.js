// Mapbox API - Exercise 2
mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-96.776, 32.818], // starting position [lng, lat]
    zoom: 10, // starting zoom
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
                        'description': '<strong>Lockhart Smokehouse BBQ</strong><br>Mon-Sun 11AM-9PM<p>Lively counter-serve BBQ joint offering a variety of smoked meats & sausages, plus a full bar.</p>'
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