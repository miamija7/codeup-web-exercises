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
        if (counter < data.length) {
            for (let i = counter; i <= data.length; i++) {
                counter++;
                addItem(data[i]);
            }
        }
        else if (counter < data.length + localData.length) {
            for (let i = counter - data.length; i < localData.length; i++) {
                counter++;
                addItem(localData[i]);
            }
        }
    })
}

// FUNCTION: APPEND ITEM TO TABLE
function addItem(item) {
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
let localData = [];
const createItem = () => {
    let newTitle = document.querySelector('#title').value;
    let newQty = document.querySelector('#qty').value;
    let newPrice = document.querySelector('#price').value;
    let newCategories = document.querySelector('#categories').value
        .split(",")
        .map(element => element.trim())
        .filter(element => element !== '');

    if (!newTitle || !newQty || !newPrice || !newCategories) {
        alert('Please provide all item information.');
    } else {
        {
            localData.push({title: newTitle, quantity: newQty, price: newPrice, categories: newCategories});
            alert(`Successfully created ${newTitle} item!\nRefresh JSON!`);
            newTitle = newQty = newPrice = newCategories = "";
        }
    }
}


// CLICK EVENTS
$('#refresh').on('click', function (e) {
    e.preventDefault();
    refreshJSON();
})

$('#add').on('click', function (e) {
    e.preventDefault();
    createItem();
})


