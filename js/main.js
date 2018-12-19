
//start wow js
new WOW().init();

//start fixed nav
$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= 200) {
            navbar.addClass('scrolled');
            navbar.addClass('navbar-fixed-top');
        } else {
            navbar.removeClass('scrolled');
            navbar.removeClass('navbar-fixed-top');
        }
    });

});

//smoth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    offset: 60,
    ignore: '[data-scroll-ignore]'
});

//start mexitup

$('#container').mixItUp();
$(document).ready(function(){
    "use strict";

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 600) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

    });
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});
// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();
//     $('section').each(function(i) {
//         if ($(this).position().top <= scrollDistance -100) {
//             $('.navbar-nav a.active').removeClass('active');
//             $('.navbar-nav a').eq(i).addClass('active');
//         }
//     });
// }).scroll();

//back to top
$('#back-to-top').tooltip('show');
$(".gear-check").click(function()
{
    $(".color-option").fadeToggle();
});


$(document).ready(function () {
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true,
        auto:true,
        speed:1000,
        pause:2500,
        slideMove: 1,
        item: 5,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 4,
                    slideMove: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
});

$('.nav a').on('click', function(){
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});