"use strict";

// ADD JSON DATA TO PAGE
const localUrl = "../data/inventory.json";
const insertProducts = document.querySelector('#insertProducts');

const loadJSON = ()=> {
    $.get(localUrl).done(function (data) {
        data.forEach(item => {
            $('#insertProducts').append(
                `<tr>
                    <td>${item.title}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.categories}</td>
                </tr>`
            )
        })
    })
};
loadJSON();


const addItem = (name, qty, price, catArray)=> {

}



// PUSH NEW ITEM TO LOCAL ARRAY
// localData.push(
//     {
//         title: "Camera",
//         quantity: 7,
//         price: 170.00,
//         categories: [
//             "technology",
//             "tools",]
//     },
// );

// APPEND ARRAY DATA TO TABLE
const refreshJsonBtn = document.querySelector('#refresh');
