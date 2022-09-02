$(function (){
    $('.toggle').on('click', function(){
        console.log('toggle button clicked')
        $('dd').toggleClass('invisible');
    })

});