"use strict";
console.log("========== while.js ===========");

let i = 1;
while (i < 65536) {
    i *= 2;
    console.log(i);
}

let totalCones = Math.floor(Math.random() * 51) + 50

do {
    order();
} while (totalCones > 0)

console.log("Yay! I sold them all!")

/*   ---------------------------------------------------------------
 *  |                   Function: order()                           |
 *  | Description: Customer orders 1 to 5 cones and subtracts       |
 *  | from your totalCones count                                    |
 *   ---------------------------------------------------------------
*/
function order(){
    let cones =  Math.floor(Math.random() * 5) + 1
    if (totalCones >= cones) {
        console.log(`${cones} cones sold...`);
        totalCones -= cones;
    } else {
        console.log(`Cannot sell you ${cones} cones I only have ${totalCones}...`);
    }
}

