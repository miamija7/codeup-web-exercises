"use strict";

// CREATE A LOCAL COPY OF JSON ARRAY DATA
const localUrl = "../data/inventory.json";
let localData = [];

$.get(localUrl).done(function(data) {
    for (let i = 0; i < data.length; i++){
        localData.push(
            {
                title: data[i].title,
                quantity: data[i].quantity,
                price: data[i].price,
                categories: data[i].categories
            },);
    }
});

console.log(localData);

// APPEND ARRAY DATA TO TABLE
const refreshJsonBtn = document.querySelector('#refresh');
const insertProducts = document.querySelector('#insertProducts');

localData.push(
    {
        title: "Camera",
        quantity: 7,
        price: 170.00,
        categories: [
            "technology",
            "tools",
        ]
    },);
//
// // FUNCTION: REFRESH TABLE
// const loadJSON = function () {
//     $.get(localUrl).done(data => {
//         // TODO: Take the data from inventory.json and append it to the products table
//         // ITERATING THROUGH OBJECTS
//         data.forEach(item => {
//             postCount++;
//             $('#insertProducts').append(
//                 `<tr>
//                     <td>${item.title}</td>
//                     <td>${item.quantity}</td>
//                     <td>${item.price}</td>
//                     <td>${item.categories}</td>
//                 </tr>`
//             )
//         })
//     })
// }
//
// loadJSON();
//
// // REFRESH JSON BUTTON
//
//
// // FUNCTION: ADD OBJECT TO JSON
// const data = {
//     title: "Camera",
//     quantity: 3,
//     price : 170,
//     categories : [
//         "technology",
//         "digital",
//         "tools"
//     ]
// }
// $("#addProduct").on('click', function(e){
//     e.preventDefault();
//     $.post(localUrl, data,
//         function(data, status){
//             alert("Data: " + data + "\nStatus: " + status);
//         });
// });

