//-------------- VARIABLES --------------


const queries = [
    {location: [-96.797, 32.777]},
]

//-------------- WEATHER MAP --------------

// Weather Widget
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({
    id: 21,
    cityid: '2643743',
    appid: OPEN_WEATHER_KEY,
    units: 'imperial',
    containerid: 'openweathermap-widget-21',
});

(function () {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
})();


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

marker.on('dragend', (e)=> {
    console.log(e);
    console.log(e.target._lngLat.lng, e.target._lngLat.lat);
    queries.unshift({ location: [e.target._lngLat.lng, e.target._lngLat.lat]});
    getGeoCode(queries[0]);
})

//-------------- FUNCTIONALITY --------------

const getGeoCode = async (query)=>{
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${query.location[1]}&lon=${query.location[0]}&limit=5&appid=bdd7146a61152b7ff3662650d34c0fb7`);
    const data = res.json();
    console.log(data);
}
