"use strict";

$(function (){
    // alert( 'The DOM has finished loading!' );

    let planets = [
        {
            name: 'The Sun',
            table: {
                type: 'Yellow Dwarf',
                age: '~4.5 billion years',
                distance: '93 million miles'
            },
            info: ' is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth.',
            img: 'https://nineplanets.org/wp-content/uploads/2020/03/sun.png'
        },
        {
            name: 'Mercury',
            table: {
                type: 'Planet',
                age: '~4.5 billion years',
                distance: '92.8 million miles'
            },
            info: ' is hot, but not too hot for ice. The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the North Pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
            img: 'https://nineplanets.org/wp-content/uploads/2020/03/mercury.png'
        }
    ]
    
    function dataSwap(i) {
        $('.name').html(`${planets[i].name}`);
        $('.type').html(`${planets[i].table.type}`);
        $('.age').html(`${planets[i].table.age}`);
        $('.distance').html(`${planets[i].table.distance}`);
        $('.info').html(`${planets[i].info}`);
        let em = $("<em></em>").text(`${planets[i].name}`);
        $('.info').prepend(em);
        $('.planet-img').attr('src', `${planets[i].img}`);
        $('cite').html(`- ${planets[i].name}`);
    }


})


/*
Id Selectors

Create content in your HTML file using at least the following elements: h1, p, ul, li, div.

Add several attributes to your elements; you will need both id and class attributes.

Use jQuery to select an element by the id. Alert the contents of the element.

Update the jQuery code to select and alert a different id.

Use the same id on 2 elements. How does this change the jQuery selection?

Remove the duplicate id. Each id should be unique on that page.



Class Selectors

Remove your custom jQuery code from previous exercises.

Update your code so that at least 3 different elements have the same class named codeup.

Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

Remove the class from one of the elements. Refresh and test that the border has been removed.

Give another element an id of codeup. Does this element get a border now?



Element Selectors

Remove your custom jQuery code from previous exercises.

Using jQuery, set the font-size of all li elements to 20px.

Craft selectors that highlight all the h1, p, and li elements.

Create a jQuery statement to alert the contents of your h1 element(s).

Multiple Selectors

Combine your selectors that highlight all the h1, p, and li elements.
*/