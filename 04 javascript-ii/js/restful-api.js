"use strict";

(() => {
    console.log("============ Exercise: RESTFUL APIs ============")

    const reviewObj = {
        restaurant_id: 1,
        name: 'Codey',
        rating: 5,
        comments: "This is a really good place for coding and eating"
    };
    const url = 'https://codeup-restful-example.glitch.me/reviews';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewObj),
    };
    fetch(url, options)
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
})();