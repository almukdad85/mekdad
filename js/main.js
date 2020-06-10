$(function(){
    'use strict';
    var winh = $(window).height(),
    upperh = $('.upper-bar').innerHeight(),
    navh = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winh - (upperh + navh));

   

$('.Featured ul li').on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
   
   
   
    if($(this).data('class') === 'all'){
        $('.s-images .col-md').css('opacity', 1);
    }
    else{
        $('.s-images .col-md').css('opacity', '0.08');
        $($(this).data('class')).parent().css('opacity', 1);
    }
   
});

});

