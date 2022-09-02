$(function (){
    $('.toggle').on('click', function(event){
        event.preventDefault();
        console.log('toggle button clicked');
        $('dd').toggleClass('invisible');
    })

    $('dt').on('click', function (){
        $(this).toggleClass('highlight');
    })


});