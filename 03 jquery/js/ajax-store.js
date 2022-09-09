"use strict";

const localUrl = "../data/inventory.json";
let counter = 0;

// LOAD JSON TO PAGE
$.get(localUrl).done(function (data) {
    data.forEach(item => {
        counter++;
        addItem(item);
    })
})

// ADD AN ITEM
function addItem(item){
    $('#insertProducts').append(
        `<tr>
            <td>${item.title}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.categories}</td>
        </tr>`
    )
}

// REFRESH JSON DATA
const refreshJSON = () => {
    $.get(localUrl).done(function (data) {
        for (let i = counter; i <= data.length; i++){
            counter++;
            addItem(data[i]);
        }
    })
}

// REFRESH BUTTON
$('#refresh').on('click', function (e) {
    e.preventDefault();
    refreshJSON();
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
