"use strict";

$(function () {

    let view = true;
    $('.toggleView').on('click', function (e) {
        e.preventDefault();
        view = !view;
        if (!view) {
            $('dd').removeClass('invisible');
            $(this).text("Hide All");
        } else {
            $('dd').addClass('invisible');
            $(this).text("View All");
        }
    })

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