"use strict";
(()=> {
    //-------------- MY PIN --------------
    let pinInfo = { id: '4684888', location: [-96.797, 32.777] };
    const appendWidget = document.querySelector('.appendWidget');


//-------------- MAPBOX API --------------

// MAP
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-96.777, 32.777], // starting position [lng, lat]
        zoom: 10, // starting zoom
        projection: 'globe'  // display the map as a 3D globe
    });

// MAP BACKGROUND
    map.on('style.load', () => {
        map.setFog({});
    });

// MAP MARKER
    const marker = new mapboxgl.Marker({
        color: "lightskyblue",
        draggable: true
    }).setLngLat(pinInfo.location).addTo(map);


//-------------- WEATHER MAP API --------------

// FUNCTION: CREATE/REFRESH WEATHER WIDGET
// PROTOTYPE: updateWidget();
    const updateWidget = (pin) => {
        const script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);

        window.myWidgetParam = [];
        appendWidget.innerHTML = `<div id="openweathermap-widget-21"></div>`;
        window.myWidgetParam.push({
            id: 21,
            cityid: pin.id,
            appid: OPEN_WEATHER_KEY,
            units: 'imperial',
            containerid: 'openweathermap-widget-21',
        });
    }

//-------------- MY CUSTOM JS --------------

// EVENT LISTENER: MAP MARKER
    marker.on('dragend', async (e) => {
        try {
            pinInfo.location = [e.target._lngLat.lng, e.target._lngLat.lat];    // reassign pin lat/lon
            await getGeoCode(pinInfo);                                          // reassign pin city id
            await updateWidget(pinInfo);                                        // refresh widget with lat/lon
        } catch (e) {
            console.log(e);
        }
    })

// FUNCTION: GET CITY ID (for widget use)
// PROTOTYPE: getGeoCode(pin);
    const getGeoCode = async (pin) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pin.location[1]}&lon=${pin.location[0]}&appid=${OPEN_WEATHER_KEY}`);
            const data = await res.json();
            pin.id = data.id.toString();
        } catch (e) {
            console.log('ERROR:', e);
        }
    }

})();
