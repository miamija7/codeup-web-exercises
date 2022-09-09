"use strict";

// ADD JSON DATA TO PAGE
const localUrl = "../data/inventory.json";
let counter = 0;

const loadJSON = () => {
    $.get(localUrl).done(function (data) {
        if (counter < data.length) {
            data.forEach(item => {
                counter++;
                $('#insertProducts').append(
                    `<tr>
                    <td>${item.title}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.categories}</td>
                    </tr>`
                )
            })
        }
    })
};

$('#refresh').on('click', function (e) {
    e.preventDefault();
    loadJSON();
})



// PUSH NEW ITEM TO LOCAL ARRAY
let localData = [];
localData.push(
    {
        title: "Camera",
        quantity: 7,
        price: 170.00,
        categories: [
            "technology",
            "tools",]
    },
);

// APPEND ARRAY DATA TO TABLE
const refreshJsonBtn = document.querySelector('#refresh');
