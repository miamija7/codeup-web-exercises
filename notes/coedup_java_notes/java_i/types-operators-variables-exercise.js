//WORKING WITH DATA TYPES, OPERATORS AND VARIABLES

//EXERCISE 1
let a = 1;                  // a=1
let b = a++;                // b=1, a=2
let c = ++a;                // c=3, b=1, a=3

let d = 'hello';    
let e = false;   
d++;                        // NaN  : string type
e++;                        // 1    : bool false = 0

let perplexed;
perplexed + 2;              // NaN  : undefined type

let price = 2.7;
price.toFixed(2);           // 2.70

price = '2.7';
price.toFixed(2);           // TypeError: not a function

isNaN(0);                   // false
isNaN(1);                   // false
isNaN("");                  // false
isNaN("string");            // true
isNaN("0");                 // false
isNaN("1");                 // false
isNaN("3.145");             // false
isNaN(Number.MAX_VALUE);    // false
isNaN(Infinity);            // false
isNaN("true");              // true
isNaN(true);                // false
isNaN("false");             // true
isNaN(false);               // false
NaN == NaN;                 // false

!true                       // false
!false                      // true
!!true                      // true
!!false                     // false
!!0                         // false
!!-0                        // false
!!1                         // true
!!-1                        // true
!!0.1                       // true
!!"hello"                   // true
!!""                        // false
!!''                        // false
!!"false"                   // true
!!"0"                       // true


//EXERCISE 2
let sample = "Hello Codeup";
sample.length;                          // 12
sample.toUpperCase();                   // 'HELLO CODEUP'
sample += " Students";                  // 'Hello Codeup Students'
sample.replace('Students', 'Class');    // 'Hello Codeup Class'
sample.indexOf('c');                    // -1 (not found)
sample.indexOf('C');                    // 6
sample.substring(sample.indexOf('C'), sample.indexOf(' S'));  //'Codeup'


//EXERCISE 3
let rentals = [
    {
        title: "Little Mermaid",
        daysRented: 3
    },
    {
        title: "Brother Bear",
        daysRented: 5
    },
    {
        title: "Hercules",
        daysRented: 1
    }
]
let rate = 3.00;
let bill = 0;
for (let movie of rentals){
    bill += (rate * movie.daysRented)
}
console.log(`$${bill}`);                // $27


let google = 400 * 6;
let amazon = 380 * 4;
let facebook = 350 * 10;          
console.log(`$${google+amazon+facebook}`); // $7420


let isClassFull = false;
let isScheduleConflict = false;
let enroll = (!isClassFull && !isScheduleConflict); // true

 
let cart = 2;
let isOfferExpired = false;
let applyDiscount = (!isOfferExpired && cart >= 2); // true



//EXERCISE 4
let username = 'codeup';
let password = 'notastrongpassword';

let isPwdLong = (password.length >= 5);     // true
let isPwdUniq = (username !== password);    // true
let isUsrLong = (username.length <= 20);     // true      
let isTrimmed = (password === password.trim() && username === username.trim()); // true