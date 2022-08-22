"use strict";
console.log("========== break_and_continue.js ===========");

let usrInputNumber;

(function () {

    do {
        usrInputNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
    }while(isNaN(usrInputNumber) || !usrInputNumber || usrInputNumber % 2 === 0 || (usrInputNumber < 1 || usrInputNumber > 50 ));


    for (let i = 1; i < 50; i += 2){
        if (i === usrInputNumber){
            console.log(`Yikes! Skipping number: ${i}`);
            continue;
        } else {
            console.log(`Here is an odd number: ${i}`);
        }
    }

})();


