"use strict";

// FUNCTION: FETCH JSON (CALLS UPDATE HTML)
// PROTOTYPE: loadJSON()
const loadJSON = async () => {
    try {
        const res = await fetch(`../data/inventory.json`);
        const data = await res.json();
        updateHTML(data, localData);
    } catch (e) {
        console.log("ERROR:", e);
    }
}

// FUNCTION: UPDATE HTML DATA
// PROTOTYPE: updateHTML([array],[array])
const updateHTML = (array1, array2) => {
    // concat arrays
    array1 = array1.concat(array2);

    //clear old data
    insertProducts.innerHTML = "";

    //add new data
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

// FUNCTION: CREATE NEW ITEM
// PROTOTYPE: createItem(itemData)
const createItem = async (itemData) => {
    if (isEmptyInput(itemData)) alert('Please fill out all data fields for new item.');
    else {
        localData.push({
            title: itemData[0].value,
            quantity: itemData[1].value,
            price: itemData[2].value,
            categories: itemData[3].value.split(",").map(element => element.trim()).filter(element => element !== '')
        })
        // CLEAR FORM INPUT FIELDS
        itemData[0].value = itemData[1].value = itemData[2].value = itemData[3].value = ''
        // UPDATE PAGE
        await loadJSON();
    }
}

// FUNCTION: CHECK FORM FOR EMPTY INPUTS
// PROTOTYPE: isEmptyInput(inputs)
const isEmptyInput = (inputs) => {
    return (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "" || inputs[3].value === "")
}

// ONLOAD
(async ()=>{
    await loadJSON();
})();

// VARIABLES
const localData = [];


// SELECTORS
const insertProducts = document.querySelector('#insertProducts');
const refreshBtn = document.querySelector('#refresh');
const addItemBtn = document.querySelector('#add');
const itemData = document.querySelector('#createForm');


//EVENT LISTENERS
refreshBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await loadJSON();
})
addItemBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await createItem(itemData);
})
