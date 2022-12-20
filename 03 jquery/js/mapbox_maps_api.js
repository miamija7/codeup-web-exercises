// Mapbox API - Exercise 2
mapboxgl.accessToken = pk.eyJ1IjoibWlhbWlqYTciLCJhIjoiY2w3ejBmazd2MTFqMTNycDdpanFxb2RycCJ9.vdXYFQybqjp0FrkRw5Zfkw;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-96.777, 32.777], // starting position [lng, lat]
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
                            '<img src="https://cdn.vox-cdn.com/thumbor/V9lWCBiFFsbu09hfqYNxBeu4FP8=/0x0:750x600/1200x900/filters:focal(315x240:435x360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65219478/Dallas_Farmers_Market_Allen_Sheffield.0.jpg" alt="Dallas Farmers Market"><strong>Dallas Farmers Market</strong><br>Hours: Mon-Sun 10AM-7PM<p>Located at 1010 S. Pearl Expressway in downtown Dallas, the Dallas Farmers Market features: produce dealers, wholesale dealers and local farmers.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-96.789, 32.778]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<img src="https://bbqrevolt.com/wp-content/uploads/2021/04/Lockhart-Smokehouse.jpg.webp" alt="Lockhart BBQ"><strong>Lockhart Smokehouse BBQ</strong><br>Hours: Mon-Sun 11AM-9PM<p>Lively counter-serve BBQ joint offering a variety of smoked meats & sausages, plus a full bar.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -96.8285753673907, 32.74946367211865]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<img src="https://duyt4h9nfnj50.cloudfront.net/resized/21556b19c8ef7b7e32f076e8f8f8b0d2-w2880-ac.jpg" alt="Roti Grill"><strong>Roti Grill</strong><br>Hours: Mon-Sun 11AM-10PM<p>Tasty Indian comfort food in a relaxed setting! How good does it get? The restaurant is clean and service friendly. The food tastes fresh and you can watch the cooks work in the kitchen that opens onto the dining room.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -96.7884116378177, 32.82067779426571 ]
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
            'circle-color': getRandomColor(),
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

const getRandomColor = ()=>{
    let colors = ["#a9def9", "#ede7b1", "#f694c1", "#e4c1f9", "#d3f8e2"]
    return colors[Math.floor(Math.random() * 5)];
}

