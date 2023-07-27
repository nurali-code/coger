$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $('.btn-menu, body, .header-right').toggleClass('active');
    })


    /*---------------------------------------------------end*/

    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 40, }, 300,)
    // })


    /*---------------------------------------------------end*/

    $('.bay-slider').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        slidesToShow: 1,
        touchThreshold: 9,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '20px',
                    centerMode: true,
                }
            }
        ]
    });


});

