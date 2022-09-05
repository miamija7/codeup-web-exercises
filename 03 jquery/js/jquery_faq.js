$(function (){
    // $('.toggle').on('click', function(e){
    //     e.preventDefault();
    //     console.log('toggle button clicked');
    //     $('dd').toggleClass('invisible');
    //     $('hr').toggleClass('invisible');
    // })
    //
    // $('dt').on('click', function (){
    //     $(this).toggleClass('highlight');
    // })

    $('.q-and-a').on('click', function(e){
        e.preventDefault();
        $(this).children("dd").toggleClass('invisible');
    })

});