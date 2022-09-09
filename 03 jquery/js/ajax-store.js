"use strict";

const loadJSON = async () => {
    try {
        const res = await fetch(`../data/inventory.json`);
        const data = await res.json();
        updateHTML(data);
    } catch (e) {
        console.log("ERROR:", e);
    }
}

const updateHTML = (array1, array2) => {
    if (array1 && array2) { array1 = array1.concat(array2); }
    insertProducts.innerHTML = "";
    array1.forEach(product => {
        insertProducts.innerHTML +=
        `<tr>
            <td>${product.title}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td>${product.categories}</td>
        </tr>`
    })
}

// SELECTORS
const insertProducts = document.querySelector('#insertProducts');
const refreshBtn = document.querySelector('#refresh');

//EVENT LISTENERS
refreshBtn.addEventListener('click', async (e)=>{
    e.preventDefault();
    await loadJSON();
})

// updateHTML([{name: "Mia", age: 25}, {name: "Arri", age: 26}], [{ name: "Mikhah", age: 0}]);


// const localUrl = "../data/inventory.json";
// let counter = 0;
//
// // ONLOAD: LOAD JSON
// $.get(localUrl).done(function (data) {
//     data.forEach(item => {
//         counter++;
//         addItem(item);
//     })
// })
//
// // FUNCTION: REFRESH JSON
// const refreshJSON = () => {
//     $.get(localUrl).done(function (data) {
//         if (counter < data.length) {
//             for (let i = counter; i <= data.length; i++) {
//                 counter++;
//                 addItem(data[i]);
//             }
//         } else if (counter < data.length + localData.length) {
//             for (let i = counter - data.length; i < localData.length; i++) {
//                 counter++;
//                 addItem(localData[i]);
//             }
//         }
//     })
// }
//
// // FUNCTION: APPEND ITEM TO TABLE
// function addItem(item) {
//     $('#insertProducts').append(
//         `<tr>
//             <td>${item.title}</td>
//             <td>${item.quantity}</td>
//             <td>${item.price}</td>
//             <td>${item.categories}</td>
//         </tr>`
//     )
// }
//
// // FUNCTION: CREATE A NEW ITEM
// let localData = [];
// const createItem = () => {
//     let newTitle = document.querySelector('#title').value;
//     let newQty = document.querySelector('#qty').value;
//     let newPrice = document.querySelector('#price').value;
//     let newCategories = document.querySelector('#categories').value;
//     let categoryArray = newCategories
//                         .split(",")
//                         .map(element => element.trim())
//                         .filter(element => element !== '');
//
//     if (!newTitle || !newQty || !newPrice || !newCategories) {
//         alert('Please provide all item information.');
//     } else {
//             localData.push({title: newTitle, quantity: newQty, price: newPrice, categories: categoryArray});
//             alert(`Successfully added!\nClick reload JSON button to view new item!`)
//     }
// }
//
//
// // CLICK EVENTS
// $('#refresh').on('click', function (e) {
//     e.preventDefault();
//     refreshJSON();
// })
//
// $('#add').on('click', function (e) {
//     e.preventDefault();
//     createItem();
//     refreshJSON();
// })


