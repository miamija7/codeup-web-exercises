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


});