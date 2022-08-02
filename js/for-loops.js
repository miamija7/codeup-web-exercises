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
    return Math.floor(Math.random() * 200) + 20;
}

function isEven(number){
    return number % 2 === 0;
}

// Exercise 4




