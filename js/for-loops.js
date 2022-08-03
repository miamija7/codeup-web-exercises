"use strict";

console.log("========== for-loops.js ===========")

// Exercise 2
function showMultiplicationTable(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${number} x ${i} = ${number*i}`);
    }
}


// Exercise 3

for (let i = 0; i < 10; i++) {
    let num = newRandom();
    if (isEven(num)){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}

function newRandom() {
    return Math.floor(Math.random() * 181) + 20;    //random number from 20-200
}

function isEven(number){
    return number % 2 === 0;
}


// Exercise 4

for (let i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

// for (let i = 1; i < 10; i++){
//     let myString = ""
//     for(let j = 0; j < i; j++){
//         myString += i;
//     }
//     console.log(myString);
// }


//Exercise 5

for (let i = 100; i > 0 ; i -= 5){
    console.log(i);
}
