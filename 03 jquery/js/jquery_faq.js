"use strict";

$(function () {

    let faqView = true;
    $('.toggleView').on('click', function (e) {
        e.preventDefault();
        faqView = !faqView;
        if (!faqView) {
            $('dd').removeClass('invisible');
            $(this).text("Hide All");
        } else {
            $('dd').addClass('invisible');
            $(this).text("View All");
        }
    })

    // // HIGHLIGHT ON CLICK
    // $('dt').on('click', function (){
    //     $(this).toggleClass('highlight');
    // })


    $('.q-and-a').on('click', function (e) {
        e.preventDefault();
        $(this).children("dd").toggleClass('invisible');
    })

    $('#national-parks').children().on('click', function () {
        $(this).toggleClass('bold');
    })

    const parks = [
        { name: "Arches National Park", state: "Utah", rating: 4.8, area: 119.8, visitors: 1238000, description: "Bordered by the Colorado River in the southeast, it’s known as the site of more than 2,000 natural sandstone arches, such as the massive, red-hued Delicate Arch in the east." },
        { name: "Grand Canyon National Park", state: "Arizona", rating: 4.8, area: 1902, visitors: 2189000, description: "Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history." },
        { name: "Yellowstone National Park", state: "Wyoming", area: 3471, visitors: 3806000, description: "Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope." },
        { name: "Yosemite National Park", state: "California", area: 1169, visitors: 2268000, description: "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome." },
        { name: "Zion National Park", state: "Utah", area: 229, visitors: 3591000, description: "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden."}
    ]

});