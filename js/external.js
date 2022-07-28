console.log("Hello from external JavaScript");

//EXERCISE 1
alert("Welcome to my Website");

//EXERCISE 2
let usrFavColor = prompt("What's your favorite color?");
alert(`Great, ${usrFavColor} is my favorite color too!`);


//EXERCISE 3

/*
 *  Function: movies()
 *  Description: Insert the days per rental to get your bill!
*/

let rentals = [
    {
        title: "Little Mermaid",
        daysRented: 0,
        rentalPrice: 0
    },
    {
        title: "Brother Bear",
        daysRented: 0,
        rentalPrice: 0
    },
    {
        title: "Hercules",
        daysRented: 0,
        rentalPrice: 0
    }
]

const movies = (e) => {
    let bill = 0;
    let rate = 3.00;

    for (let movie of rentals){
        movie.daysRented = parseInt(prompt(`How many days are you renting ${movie.title}?`));
        movie.rentalPrice = (movie.daysRented * rate);
        bill += movie.rentalPrice;
    }

    alert(`Your total movie bill is $${bill.toFixed(2)}`);
}




/*
 *  Function: payday()
 *  Description: Clock your hours and see what your paycheck will be!
*/

let myJobs = [
    {
        company: "Google",
        wage: 400.00,
        hours: 0
    },
    {
        company: "Amazon",
        wage: 380.00,
        hours: 0
    },
    {
        company: "Facebook",
        wage: 350.00,
        hours: 0
    }
]

const payday = (e) => {
    let paycheck = 0;
    myJobs.forEach((e) => {
        e.hours = parseInt(prompt(`How many hours did you work at ${e.company}?`));
        paycheck += (e.hours * e.wage);
    })
    alert(`Your paycheck will be $${paycheck.toFixed(2)}`);
}





/*
 *  Function: enroll()
 *  Description: Enroll a new student into the Full Stack Web Development Course.
*/

const course = {
        name: "Full Stack Web Development",
        startTime: 830,
        endTime: 1700,
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        seatsAvailable: 2,
        students: []
    }

const enroll = (e) => {
    let newStudent = {};
    while(!newStudent.firstName){
        newStudent.firstName = prompt("Enter First Name:");
    }
    while(!newStudent.lastName){
        newStudent.lastName = prompt("Enter Last Name:");
    }
    newStudent.fullName = `${newStudent.firstName} ${newStudent.lastName}`;

    if (course.seatsAvailable <= 0) {
        alert('Unsuccessful enrollment, class is full.');
    } else {
        let isGoodSchedule = confirm(`${course.name} is from ${course.startTime} - ${course.endTime} on ${course.days}.\n\nThere are ${course.seatsAvailable} seats left.\n\nDo you agree with this schedule?`)
        if (!isGoodSchedule) {
            alert('Unsuccessful enrollment due to schedule conflict.')
        } else {
            alert(`Successfully enrolled ${newStudent.fullName} in ${course.name}!`)
            --course.seatsAvailable;
            course.students.push(newStudent);
        }
    }
}




/*
*  Function: checkout()
*  Description: See if you're getting a discount at checkout!
*/

const cart = {
    isMember: false,
    tacos: 0,
    price: 3.00
}

const offer = {
    discount: 0.5,
    isExpired: false
};

const checkout = () => {
    cart.isMember = confirm("Are you a Premium Member?");
    cart.tacos = parseInt(prompt("How many $3 tacos would you like to buy?"));
    let total = (cart.tacos * cart.price);

    if (offer.isExpired) {
        alert(`Sorry, our ${offer.discount * 100}% offer is expired.\nCheckout Total: $${total.toFixed(2)}`);
    } else if (cart.isMember) {
        alert(`Your membership qualifies for ${offer.discount * 100}% off!\nCheckout Total: $${(total * offer.discount).toFixed(2)}`);
    } else if (cart.tacos > 2){
        alert(`Your cart qualifies for ${offer.discount * 100}% off!\nCheckout Total: $${(total * offer.discount).toFixed(2)}`);
    } else {
        alert(`You do not qualify for our ${offer.discount * 100}% off offer.\nCheckout Total: $${total.toFixed(2)}`)
    }
}








//STYLIZE BUTTONS
let buttons = document.querySelectorAll('button');
for (let btn of buttons){
    btn.style.padding = '10px';
    btn.style.margin = '20px';
    btn.style.backgroundColor = '#8ecae6';
    btn.style.borderRadius = '15px';
}


//ADD CLICK EVENTS
document.querySelector('#movies').addEventListener('click', event => {
    event.preventDefault();
    movies()
});
document.querySelector('#enroll').addEventListener('click', event => {
    event.preventDefault();
    enroll();
});
document.querySelector('#payday').addEventListener('click', event => {
    event.preventDefault();
    payday();
});
document.querySelector('#checkout').addEventListener('click', event => {
    event.preventDefault();
    checkout();
});

