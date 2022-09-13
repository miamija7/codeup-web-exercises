//-------------- VARIABLES --------------


const queries = [
    {
        id: '4684888',
        location: [-96.797, 32.777]
    },
]

//-------------- WEATHER MAP --------------

// Weather Widget
const updateWidget = (query) => {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];

    window.myWidgetParam.push({
        id: 21,
        cityid: query.id,
        appid: OPEN_WEATHER_KEY,
        units: 'imperial',
        containerid: 'openweathermap-widget-21',
    })
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
}


//-------------- MAPBOX --------------

// Mapbox Map
mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-96.777, 32.777], // starting position [lng, lat]
    zoom: 10, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});

// Mapbox Search
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// Mapbox Markers
const marker = new mapboxgl.Marker({
    color: "lightskyblue",
    draggable: true
}).setLngLat(queries[0].location)
    .addTo(map);

marker.on('dragend', (e) => {
    console.log(e);
    console.log(e.target._lngLat.lng, e.target._lngLat.lat);
    queries.unshift({location: [e.target._lngLat.lng, e.target._lngLat.lat]});
    getGeoCode(queries[0]);
})

//-------------- FUNCTIONALITY --------------

const getGeoCode = async (query) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${query.location[1]}&lon=${query.location[0]}&appid=${OPEN_WEATHER_KEY}`);
        const data = await res.json();
        console.log(data);
        console.log(data.id.toString());
        queries[0].id = data.id.toString();
        updateWidget(queries[0]);
    } catch (e) {
        console.log('ERROR:', e);
    }
}

// `http://api.openweathermap.org/geo/1.0/reverse?lat=${query.location[1]}&lon=${query.location[0]}&limit=5&appid=${OPEN_WEATHER_KEY}`
// `https://api.openweathermap.org/data/2.5/weather?lat=${query.location[1]}&lon=${query.location[0]}&appid=${OPEN_WEATHER_KEY}`
