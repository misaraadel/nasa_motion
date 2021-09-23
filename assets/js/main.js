$(document).ready(function () {
    /*start the loading page */
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".scroll-top-btn").addClass('active');
        } else {
            $(".scroll-top-btn").removeClass('active');
        }
    });
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.nav-toggler').click(function(){
        $('.nav-toggler').toggleClass('active');
        $('.navbar-nav').toggleClass('active');
        $('body').toggleClass('overflowNone')
    });
    //owl-who slider
    $('.owl-who').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                touchDrag:true,
                mouseDrag: true,
                dots: true,
            },
            600:{
                items:1,
                touchDrag:true,
                mouseDrag:true,
                dots: true,
            },
            1000:{
                items:3,
                touchDrag:false,
                mouseDrag:false,
                dots: false,
            }
        }
    });
    //people-say slider
    $('.owl-people-say').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:true,
        dots: false,
        touchDrag:true,
        mouseDrag:true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4
            }
        }
    });
    //clients slider 
    $('.owl-clients').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        touchDrag:true,
        mouseDrag:true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    });
    //why slider 
    $('.owl-why').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
                touchDrag:true,
                mouseDrag: true,
                dots: true,
            },
            600:{
                items:2,
                touchDrag:true,
                mouseDrag:true,
                dots: true,
            },
            1000:{
                items:5,
                touchDrag:false,
                mouseDrag:false,
                dots: false,
            }
        }
    });
});