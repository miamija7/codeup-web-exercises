(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Mia",
        lastName: "Evans"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log(`Hello from ${person.firstName} ${person.lastName}`);
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    let shoppers = [
        {
            name: 'Ryan',
            amount: 250.00
        },
        {
            name: 'Cameron',
            amount: 180.00
        },
        {
            name: 'George',
            amount: 320.00
        }
    ]
    function hebCheckout(line){
        line.forEach(function (customer){
            if (customer.amount > 200){
                console.log(`Name: ${customer.name}\nTotal: $${customer.amount}\nSavings: $${customer.amount * 0.12}\nNew Total: $${customer.amount - (customer.amount * 0.12)}`);
            } else {
                console.log(`Name: ${customer.name}\nTotal: $${customer.amount}`);
            }
        })
    }

    hebCheckout(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "Pride and Prejudice",
            author: {
                firstName: "Jane",
                lastName: "Austen"
            }
        },
        {
            title: "The Diary of Anne Frank",
            author: {
                firstName: "Anne",
                lastName: "Frank"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: "Charlotte's Web",
            author: {
                firstName: "E.B.",
                lastName: "White"
            }
        }
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    let listBooks = () => {
        books.forEach(function(book, index){
            console.log(`Book #${index+1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`)
    });
    }
    listBooks();

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        let name = author.split(" ");
        let newBook = {
            title: title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        }
        return newBook;
    };


    function showBookInfo(book){
        console.log(`Title: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`)
    }

    // createBook() a new book
    let newBook = createBook("The Lion, the Witch, and the Wardrobe", "C.S. Lewis")
    // showBookInfo() the new book you created
    showBookInfo(newBook);
    // add newBook to books!
    books.push(newBook);
    // verify new book added to books
    listBooks();

})();