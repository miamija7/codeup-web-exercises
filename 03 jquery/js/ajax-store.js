(function () {
    "use strict";
    const localUrl = "../data/inventory.json";
    let postCount = 0;
    const refreshJsonBtn = document.querySelector('#refresh')

    // FUNCTION: REFRESH TABLE
    const refreshJSON = function(){
        $.get(localUrl).done(data => {
            // TODO: Take the data from inventory.json and append it to the products table
            // ITERATING THROUGH OBJECTS
            data.forEach(item => {
                postCount++;
                $('#insertProducts').append(
                    `<tr>
                        <td>${item.title}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${item.categories}</td>
                    </tr>`
                )
            })
        })}

    refreshJSON();

    // REFRESH JSON BUTTON
    refreshJsonBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        refreshJSON();
    })

    // FUNCTION: ADD OBJECT TO JSON





})();