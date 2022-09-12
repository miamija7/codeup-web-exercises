"use strict";

// FUNCTION: FETCH JSON (& CALL updateHTML())
// PROTOTYPE: loadJSON()
const loadJSON = async () => {
    try {
        const res = await fetch(`../data/inventory.json`);
        const data = await res.json();
        updateHTML(localProducts.reverse(),data.reverse());
        updateCards(localProducts.reverse(),data.reverse());
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
        localProducts.push({
            title: itemData[0].value,
            quantity: Number(itemData[1].value),
            price: Number(itemData[2].value),
            categories: itemData[3].value.split(",").map(element => element.trim()).filter(element => element !== ''),
            imgSrc: `https://source.unsplash.com/random/800x800/?${itemData[0].value.replace(' ', ',').toLowerCase()}`
        })
        // CLEAR FORM INPUT FIELDS
        itemData.forEach(item=>{
            item.value = "";
            item.classList.remove('is-danger');
        })
        // UPDATE PAGE
        await loadJSON();
        closeModal(document.querySelector('.modal'));
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
const localProducts = [];

// SELECTORS
const insertProducts = document.querySelector('#insertProducts');
const addItemBtn = document.querySelector('#add');
const itemData = document.querySelectorAll('input');

//EVENT LISTENERS
addItemBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await createItem(itemData);
})

// SYNC DATA EVERY MINUTE
setInterval(loadJSON, 60000);


//------------> EXTRAS (CARD VIEW & MODAL) <---------------


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
                            <br><span class="card-category" href="#">#${product.categories.join(' #')}</span> 
                        </div>
                    </div>
            </div>`
    })
}


// TOGGLE TABLE VIEW
const toggleTable = document.querySelector('#tableView');
const table = document.querySelector('#products');
let isHidden = toggleTable.classList.contains('hidden');

toggleTable.addEventListener('click', function(e){
    isHidden = !isHidden;
    toggleTable.textContent = (isHidden) ? "Show Table" : "Hide Table";
    table.classList.toggle('hidden');
})


// MODAL
// Functions to open and close a modal
function openModal($el) {
    $el.classList.add('is-active');
}

function closeModal($el) {
    $el.classList.remove('is-active');
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
        openModal($target);
    });
});

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot #cancel') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
        closeModal($target);
    });
});