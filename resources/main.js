$('figcaption').hover(function () {
    $(this).toggleClass("fig-n-display");
});

$('#hamburger').on('click', function () {
    $('#hamburger>ul').toggleClass("visible");
});

$(".link1").click(function () {
    $('html, body').animate({
        scrollTop: $("#who").offset().top
    }, 1500);
});

$(".link2").click(function () {
    $('html, body').animate({
        scrollTop: $("#port").offset().top
    }, 1500);
});

$(".link3").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

$(document).on('scroll', function () {

    // scroll position
    const scroll = $(this).scrollTop();
    // window height for proper measurements
    const windowHeight = $(window).height();

    // parts of DOM
    const $anim1 = $('.anim1');
    const $anim2 = $('.anim2');
    const $anim3 = $('.anim3');

    // DOM from top
    const anim1fromTop = $anim1.offset().top;
    const anim2fromTop = $anim2.offset().top;
    const anim3fromTop = $anim3.offset().top;

    // objects height
    const anim1Height = $anim1.outerHeight();
    const anim2Height = $anim2.outerHeight();
    const anim3Height = $anim3.outerHeight();

    // showing elements
    if (scroll > anim1fromTop + anim1Height - windowHeight) {
        $anim1.addClass('active');
        $anim2.addClass('active');
    }

    if (scroll > anim3fromTop + anim3Height / 4 - windowHeight) {
        $anim3.addClass('active');
    }

});