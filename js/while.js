"use strict";
console.log("========== while.js ===========");


(function () {
    let i = 1;
    while (i < 65536) {
        i *= 2;
        console.log(i);
    }

})();