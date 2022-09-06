"use strict";

$(function (){
    // // INTRO:
    // alert( 'The DOM has finished loading!' );

    // // SELECTORS:
    // alert($('#main-header').html());
    // alert($('#nav').html());
    // $('.codeup').css({'border': '1px solid red'});
    // $('li').css({'font-size':'20px'});
    // $('h1, p, li').css({'background-color': 'yellow'});


    // // EVENTS:
    $('h1').click(function() {
        $(this).css({'background-color':'teal'})
    })

    $('p').dblclick(function(){
        $(this).css({'font-size':'18px'})
    })

    $('li').hover(function(){
        $(this).css({'color':'red'})
    }, function(){
        $(this).css({'color':'black'})
    })

})