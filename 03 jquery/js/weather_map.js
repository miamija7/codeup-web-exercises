// WEATHER MAP B&W WIDGET

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({
    id: 22,
    cityid: '4684904',
    appid: 'bdd7146a61152b7ff3662650d34c0fb7',
    units: 'imperial',
    containerid: 'openweathermap-widget-22',
});
(function () {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
})();
