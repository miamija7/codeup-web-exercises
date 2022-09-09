"use strict";

const localUrl = "../data/inventory.json";
let counter = 0;

// ONLOAD: LOAD JSON
$.get(localUrl).done(function (data) {
    data.forEach(item => {
        counter++;
        addItem(item);
    })
})

// FUNCTION: REFRESH JSON
const refreshJSON = () => {
    $.get(localUrl).done(function (data) {
        for (let i = counter; i <= data.length; i++){
            counter++;
            addItem(data[i]);
        }
    })
}

// FUNCTION: APPEND ITEM TO TABLE
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

// FUNCTION: CREATE A NEW ITEM
let newTitle = document.querySelector('#title').textContent;
let newQty = document.querySelector('#qty').textContent;
let newPrice = document.querySelector('#price').textContent;
let newCategories = document.querySelector('#categories').textContent;

let localData = [];
const createItem = {
    return : `{ title: ${newTitle}, quantity: ${newQty}, price: ${newPrice}, categories: ${newCategories} }`
}



const refreshJsonBtn = document.querySelector('#refresh');

// EVENTS
$('#refresh').on('click', function (e) {
    e.preventDefault();
    refreshJSON();
})
