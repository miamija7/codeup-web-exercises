"use strict"

function renderCoffee(coffee) {
    let html = `<div class="coffee my-2" id="${coffee.id}">`;
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p class="ms-2 text-muted">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let htmlS = '';
    for (let i = 0; i < coffees.length; i++) {
        htmlS += renderCoffee(coffees[i]);
    }
    return htmlS;
}

function renderOpt(coffee) {
    return `<option value="${coffee.name}">`;
}

function renderDatalistOpt(coffees) {
    let htmlS = '';
    for (let i = 0; i < coffees.length; i++) {
        htmlS += renderOpt(coffees[i]);
    }
    return htmlS;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the eform, we just want to update the data
    let selectedRoast = roastSelection.value;
    let selectedName = nameSelection.value;
    let filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (selectedRoast === "default") selectedRoast = 'Light, Medium, Dark';

        if (!!selectedName) {
            if (selectedRoast.includes(coffee.roast) && coffee.name.toLowerCase().includes(selectedName.toLowerCase()))
                filteredCoffees.push(coffee);
        } else {
            if (selectedRoast.includes(coffee.roast))
                filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function clearCoffees(e) {
    e.preventDefault();
    document.querySelector('#roast-selection').value = 'default';
    nameSelection.value = "";
    tbody.innerHTML = renderCoffees(coffees);
}

function addCoffee(e) {
    e.preventDefault();
    coffees.push({id: coffees.length+1, name: `${nameCreate.value}`, roast: `${roastCreate.value}`});
    tbody.innerHTML = renderCoffees(coffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    let coffees = [
        {id: 1, name: 'Light City', roast: 'Light'},
        {id: 2, name: 'Half City', roast: 'Light'},
        {id: 3, name: 'Cinnamon', roast: 'Light'},
        {id: 4, name: 'City', roast: 'Medium'},
        {id: 5, name: 'American', roast: 'Medium'},
        {id: 6, name: 'Breakfast', roast: 'Medium'},
        {id: 7, name: 'High', roast: 'Dark'},
        {id: 8, name: 'Continental', roast: 'Dark'},
        {id: 9, name: 'New Orleans', roast: 'Dark'},
        {id: 10, name: 'European', roast: 'Dark'},
        {id: 11, name: 'Espresso', roast: 'Dark'},
        {id: 12, name: 'Viennese', roast: 'Dark'},
        {id: 13, name: 'Italian', roast: 'Dark'},
        {id: 14, name: 'French', roast: 'Dark'},
    ];

    let tbody = document.querySelector('#coffees');
    let clearForm = document.querySelector('#filterCoffeeForm');
    let createForm = document.querySelector('#addCoffeeForm');
    let roastSelection = document.querySelector('#roast-selection');
    let nameSelection = document.querySelector('#name-selection');
    let nameCreate = document.querySelector('#name-create');
    let roastCreate = document.querySelector('#roast-create');
    let datalistOptions = document.querySelector('#datalistOptions');

    tbody.innerHTML = renderCoffees(coffees);
    datalistOptions.innerHTML = renderDatalistOpt(coffees);

    clearForm.addEventListener('submit', clearCoffees);
    createForm.addEventListener('submit', addCoffee);
    roastSelection.addEventListener('change', updateCoffees);
    nameSelection.addEventListener('keyup', updateCoffees);
