"use strict";

// FUNCTION: FETCH JSON (& CALL updateHTML())
// PROTOTYPE: loadJSON()
const loadJSON = async () => {
    try {
        const res = await fetch(`../data/inventory.json`);
        const data = await res.json();
        updateHTML(data, localData);
        updateCards(data, localData);
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
    if (isEmptyInput(itemData)) {
        itemData.forEach(item=>{
            (item.value === "") ? item.classList.add('is-danger') : item.classList.remove('is-danger');
        })
    }
    else {
        localData.push({
            title: itemData[0].value,
            quantity: Number(itemData[1].value),
            price: Number(itemData[2].value),
            categories: itemData[3].value.split(",").map(element => element.trim()).filter(element => element !== ''),
            imgSrc: `https://source.unsplash.com/random/800x800/?${itemData[0].value.replace(' ', ',')}`
        })
        // CLEAR FORM INPUT FIELDS
        itemData.forEach(item=>{
            item.value = "";
            item.classList.remove('is-danger');
        })
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
const itemData = document.querySelectorAll('input');

//EVENT LISTENERS
refreshBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await loadJSON();
})
addItemBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await createItem(itemData);
})


//------------> EXTRAS (CARDS) <---------------


// DISPLAY CARDS
const insertCards = document.querySelector('#insertCards');

const updateCards = (array1, array2) => {
    array1 = array1.concat(array2);      // concat arrays
    insertCards.innerHTML = "";          // clear old data

    // create new card html
    array1.forEach(product => {
        insertCards.innerHTML += `
            <div class="card">
                <img src="${product.imgSrc}"
                     alt="${product.title}">
                    <div class="card-content">
                        <p class="title is-4">${product.title}</p>
                        <div class="content">
                            Price: $${product.price.toFixed(2)}
                            <br>Inventory: ${product.quantity}
                            <br><a class="card-category" href="#">#${product.categories.join(' #')}</a> 
                        </div>
                    </div>
            </div>`
    })
}


// TOGGLE TABLE VIEW
const toggleTable = document.querySelector('#tableView');
const table = document.querySelector('#products');
let isHidden = true;

toggleTable.addEventListener('click', function(e){
    isHidden = !isHidden;
    toggleTable.textContent = (isHidden) ? "Show Table" : "Collapse Table";
    table.classList.toggle('hidden');
})