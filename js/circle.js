(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * Math.pow(this.radius, 2);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = circle.getArea()
            if (doRounding === true) {
                area = Math.round(area);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            // logInfo(false);   ->   Area of a circle with radius: 3, is: 28.274333882308138
            // logInfo(true);    ->   Area of a circle with radius: 3, is: 28


            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();