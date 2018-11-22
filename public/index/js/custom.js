/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

function dropdown() {
    $(".profile-list").toggle("fade");
}

/* Magnific Popup
-----------------------------------------------*/
$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

});


/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(document).ready(function () {

    /* Hide mobile menu after clicking on a link
      -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /*  smoothscroll
    ----------------------------------------------*/
    $(function () {
        $('#intro a, .custom-navbar a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


    /* Parallax section
       -----------------------------------------------*/
    function initParallax() {
        $('#intro').parallax("100%", 0.1);
        $('#detail').parallax("100%", 0.3);
        $('#feature').parallax("100%", 0.2);
        $('#video').parallax("100%", 0.3);
        $('#team').parallax("100%", 0.1);
        $('#faq').parallax("100%", 0.2);
        $('#pricing').parallax("100%", 0.1);
        // $('#testimonial').parallax("100%", 0.3);
        $('#contact').parallax("100%", 0.1);

    }

    initParallax();


    /* Owl Carousel
    -----------------------------------------------*/
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            autoplayTimeout:2000,
            loop:true,
            items: 5,
            mouseDrag: true,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    stagePadding:15
                },
                450:{
                    items:2,
                    stagePadding:15
                },
                600:{
                    items:3,
                    stagePadding:15
                },
                992:{
                    items:4,
                },
                1190:{
                    items:5,
                }
            }
        });
    });


    /* Owl Carousel
     -----------------------------------------------*/
    $(document).ready(function () {
        $("#owl-testimonial").owlCarousel({
            autoPlay: 6000,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
        });
    });


    /* Back top
    -----------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })


    /* wow
    -------------------------------*/
    new WOW({mobile: false}).init();

});

