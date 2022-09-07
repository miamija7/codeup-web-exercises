"use strict";

//VANILLA JS
(function () {
    const Parks = [
        {
            name: "Arches",
            type: "National Park",
            imgSrc: "https://images.unsplash.com/photo-1562742940-e255567c00f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
            state: "Utah",
            rating: "4.8 ★★★★★",
            area: '119.8 mi²',
            visitors: '1.2 million',
            description: "Bordered by the Colorado River in the southeast, it’s known as the site of more than 2,000 natural sandstone arches, such as the massive, red-hued Delicate Arch in the east."
        },
        {
            name: "Grand Canyon",
            type: "National Park",
            imgSrc: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
            state: "Arizona",
            rating: "4.8 ★★★★★",
            area: '1902 mi²',
            visitors: '2.1 million',
            description: "Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history."
        },
        {
            name: "Yellowstone",
            type: "National Park",
            imgSrc: "https://images.unsplash.com/photo-1592490605961-42c3e4ee3a02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
            state: "Wyoming",
            rating: "4.8 ★★★★★",
            area: '3471 mi²',
            visitors: '3.8 million',
            description: "Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope."
        },
        {
            name: "Yosemite",
            type: "National Park",
            imgSrc: "https://images.unsplash.com/photo-1516687401797-25297ff1462c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            state: "California",
            rating: "4.8 ★★★★★",
            area: '1169 mi²',
            visitors: '2.3 million',
            description: "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome."
        },
        {
            name: "Zion",
            type: "National Park",
            imgSrc: "https://images.unsplash.com/photo-1539571711714-62cd2534f96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            state: "Utah",
            rating: "4.8 ★★★★★",
            area: '229 mi²',
            visitors: '3.6 million',
            description: "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden."
        },
    ];

    const frame = document.querySelector('.frame').children;
    const faqs = document.querySelectorAll('.faq');
    const faqsBtn =  document.querySelector('#faqsBtn');
    const faqAnswers = document.querySelectorAll('dd');
    const featuredParks = document.querySelectorAll('.park');
    let isHidden = true;


    // Show/Hide All FAQs button
    faqsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isHidden = !isHidden;
        // Show or Hide all answers
        (isHidden) ?
            faqAnswers.forEach((dd)=> dd.classList.add('invisible')) :
            faqAnswers.forEach((dd)=> dd.classList.remove('invisible'))
        // "Show" or "Hide" button
        faqsBtn.textContent = (isHidden) ? "Show All" : "Hide All"
    })

    // Toggle FAQ answers on click
    faqs.forEach((question)=>{
        question.addEventListener('click', function (e){
            e.preventDefault();
            question.children.item(1).classList.toggle('invisible')
        })
    })

    // Change 'active' on li click
    for (let i = 0; i < featuredParks.length; i++) {
        featuredParks[i].addEventListener('click', function(){
            featuredParks.forEach((li)=> li.classList.remove('active'))
            this.classList.add('active');
            frameDisplay(i);
        })
    }

    // frameDisplay() Function: display active li information
    function frameDisplay(index) {
        let park = Parks[index];
        frame[0].setAttribute('src', park.imgSrc )
        frame[1].children[0].textContent = park.name;
        frame[1].children[1].textContent = park.type;
        frame[2].children[0].textContent = park.state;
        frame[3].children[0].textContent = park.rating;
        frame[4].children[0].textContent = park.area;
        frame[5].children[0].textContent = park.visitors;
        frame[6].textContent = park.description;
    }
})();

// // JQUERY
// $(function () {
//
//     // Show/Hide All FAQs button
//     let faqView = true;
//     $('.toggleView').on('click', function (e) {
//         e.preventDefault();
//         faqView = !faqView;
//         if (!faqView) {
//             $('dd').removeClass('invisible');
//             $(this).text("Hide All");
//         } else {
//             $('dd').addClass('invisible');
//             $(this).text("Show All");
//         }
//     });
//
//     // Toggle FAQ answers on click
//     $('.q-and-a').on('click', function (e) {
//         e.preventDefault();
//         $(this).children("dd").toggleClass('invisible');
//     });
//
//     // Display active class on li click
//     $('li').on('click', function () {
//         $('li').each(function () {
//             $(this).removeClass('active');
//         });
//         $(this).addClass('active');
//
//         // Display active li information
//         let index = Parks.findIndex(park => park.name === $('.active').html());
//         cardDisplay(index);
//     });
//
//
//     // // Attributes & CSS - Exercise #5
//     // $('dt').on('click', function (){
//     //     $(this).toggleClass('highlight');
//     // })
//
//     // // Traversing Methods - Exercise #3
//     // $('.featured').on('click', function(e){
//     //     e.preventDefault();
//     //     $('#national-parks').children('li').last().toggleClass('highlight')
//     //     $('#state-parks-texas').children('li').last().toggleClass('highlight')
//     // })
//
//     // // Traversing Methods - Exercise #4
//     // $('h3').on('click', function () {
//     //     $(this).next('ul').children('li').toggleClass('bold');
//     // })
//
//     // // Traversing Methods - Exercise #5
//     // $('li').on('click', function(){
//     //     $(this).parent('ul').children('li').first().toggleClass('blue');
//     // })
// });