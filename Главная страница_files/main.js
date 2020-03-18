$(document).ready(function(){
    $('.owl-carousel.carousel_header').owlCarousel({
        margin:0,
        autoplay:true,
        items: 1,
        autoplayTimeout:10000,
        dots: false,
        touchDrag  : false,
        mouseDrag  : false,
        navText: ['<img src="/img/left.png" alt="">', '<img src="/img/right.png" alt="">'],
        responsive: {
            0: {
                nav:false,
                items:1
            },

            1800: {
                nav:true,
            },
        }
    });
    $('.owl-carousel.carousel_certificates').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:10000,
        items: 4,
        dots: false,
        navText: ['<img src="/img/left_cert.png" alt="">', '<img src="/img/right_cert.png" alt="">'],
        responsive: {
            0: {
                nav:false,
                items:1
            },
            1800: {

                nav:true,
            }
        }
    });


    $('body').on('click', 'input[type="checkbox"]', function(){
        if($(this).prop('checked')){
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });

    $('.nav_column_left_examination li.active').addClass('open');

    $('body').on('click', 'div.menu-arrow', function(e){
        e.preventDefault();
        if($(this).parent().parent().hasClass('open')){
            $(this).parent().parent().removeClass('open');
        } else {
            $(this).parent().parent().addClass('open');
        }
    });

    $('body').on('click', 'div.menu-mini-arrow', function(e){
        e.preventDefault();
        if($(this).parent().parent().hasClass('open')){
            $(this).parent().parent().removeClass('open');
        } else {
            $(this).parent().parent().addClass('open');
        }
    });

    $('body').on('click', 'button.burger', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.mobile_menu').removeClass('open');
        } else {
            $(this).addClass('open');
            $('.mobile_menu').addClass('open');
        }
    });

    $('body').on('click', 'a.close_menu', function(e){
        e.preventDefault();
        if($('button.burger').hasClass('open')){
            $('button.burger').removeClass('open');
            $('.mobile_menu').removeClass('open');
        } else {
            $('button.burger').addClass('open');
            $('.mobile_menu').addClass('open');
        }
    });


    $(window).on('scroll', function() {
        if($('html, body').scrollTop() > 200) {
            $('header').addClass('fixed');
            $('body').addClass('padding_body');
        } else {
            $('header').removeClass('fixed');
            $('body').removeClass('padding_body');
        }
    });
});