
    "use strict";
    const localUrl = "../data/inventory.json";
    const refreshJsonBtn = document.querySelector('#refresh');
    let localData;

    $.ajax({
        url:localUrl,
        type:"GET",
        success:function(data){
            localData = data;
        },
        dataType:"json"
    });

    console.log(localData);

    // // FUNCTION: REFRESH TABLE
    // const loadJSON = function () {
    //     $.get(localUrl).done(data => {
    //         // TODO: Take the data from inventory.json and append it to the products table
    //         // ITERATING THROUGH OBJECTS
    //         data.forEach(item => {
    //             postCount++;
    //             $('#insertProducts').append(
    //                 `<tr>
    //                     <td>${item.title}</td>
    //                     <td>${item.quantity}</td>
    //                     <td>${item.price}</td>
    //                     <td>${item.categories}</td>
    //                 </tr>`
    //             )
    //         })
    //     })
    // }
    //
    // loadJSON();
    //
    // // REFRESH JSON BUTTON
    //
    //
    // // FUNCTION: ADD OBJECT TO JSON
    // const data = {
    //     title: "Camera",
    //     quantity: 3,
    //     price : 170,
    //     categories : [
    //         "technology",
    //         "digital",
    //         "tools"
    //     ]
    // }
    // $("#addProduct").on('click', function(e){
    //     e.preventDefault();
    //     $.post(localUrl, data,
    //         function(data, status){
    //             alert("Data: " + data + "\nStatus: " + status);
    //         });
    // });

