(function($) {
    "use strict";

    /* Category menu */
    // function catMenu(){
    //     var primaryTigger = $('.category-title h6'),
    //         navSelector = $('.product-category nav'),
    //         extraMenuTigger = $('.more-cat span'),
    //         extraMenuSelector = $('.extra_menu'),
    //         classOpen = 'open',
    //         openText = 'More Categories',
    //         closeText = 'Close Menu';

    //     primaryTigger.on('click', function (){
    //         navSelector.slideToggle(300);
    //     });   
    //     extraMenuTigger.on('click', function (){
    //         extraMenuSelector.slideToggle(300);
    //         if (extraMenuTigger.hasClass(classOpen)) {
    //             extraMenuTigger.removeClass(classOpen);
    //             extraMenuTigger.text(openText);
    //         } else {
    //             extraMenuTigger.addClass(classOpen);
    //             extraMenuTigger.text(closeText);
    //         }    
    //     });
    // }
    // catMenu();

    // mini cart
    function minicart(){
        var miniCartTigger = $(".cart-tigger > a"),
            minicartSelector = $(".cart-tigger .mini-cart"),
            minicartCloseTigger = $(".minicart-close"),
            addActiveClass = 'active';

        miniCartTigger.on('click', function(e){
            e.preventDefault();
            minicartSelector.toggleClass(addActiveClass);
        });
        minicartCloseTigger.on('click', function(){
            minicartSelector.removeClass(addActiveClass);
        });
    }
    minicart();

    // Korando Countdown
    function korandoCountdown() {
        $('[data-countdown]').each(function() {
          var $this = $(this),
          finalDate = $this.data('countdown');
          $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p>'));
          });
        });       
    }
    korandoCountdown(); 



    /* jQuery MeanMenu */
    $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
        meanMenuClose: "<i class='material-icons'>clear</i>",
        meanMenuOpen: "<i class='material-icons'>menu</i>",
        meanExpand: '<i class="material-icons">keyboard_arrow_right</i>',
        meanContract: '<i class="material-icons">keyboard_arrow_down</i>'
    });
    

    /*====== Cart Plus Minus Button ======*/
    function korandoCartQuantity(){
        $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
            $(".qtybutton").on("click", function() {
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();
                if ($button.text() == "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                   // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find("input").val(newVal);
        });
    }
    korandoCartQuantity();
  

    /* slider active */
    function korandoSliderActive(){
        $('.slider-active').owlCarousel({
            loop: true,
            nav: false,
            dots:true,
            autoplay: false,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            item: 1,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });   
        // slider carousel dot in add class container
        var addContainerClass = 'container',
        classSelector = $('.slider-area .owl-dots');
        classSelector.addClass(addContainerClass);
    }
    korandoSliderActive();    

    /* checkout page toggle function  */   
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });

    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });

    $('#cbox').on('click', function() {
        $('#cbox-info').slideToggle(900);
    });

    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });    

    
    /* Nice Select */
    function ActiveNiceSelecct(){
        jQuery('.nice-select').niceSelect(); 
    }
    ActiveNiceSelecct();

    /* Hot deal product */
    $('.hot-deal-slider').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2,
                margin:30
            },
            1170: {
                items: 2,
                 margin:30
            },
            1200: {
                items: 1
            }
        }
    });
    /* Home 3 Hot deal product */
    $('.home3-hot-deal-slider').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin:30
            },
            992: {
                items: 1,
                margin:0
            },
            1170: {
                items: 1,
                 margin:0
            },
            1200: {
                items: 1
            }
        }
    });

    /* Home 4 Hot deal product */
    $('.home4-hot-deal-slider').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        margin:30,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 4,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    /* Brand carousel */
    $('.brand-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 5,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    /* testimonial carousel */
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        margin:30,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 3,
        responsive: {
            300: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* partner carousel */
    $('.partner-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        margin:0,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 5,
        responsive: {
            300: {
                items: 2
            },
            480: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
    /* home latest blog carousel */
    $('.home-latest-blog').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: false,
        margin:30,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 3,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* home 4 latest blog carousel */
    $('.home4-latest-blog').owlCarousel({
        loop: true,
        nav: false,
        dots:false,
        autoplay: false,
        margin:30,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 4,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    /* sidebar latest blog carousel */
    $('.sidebar-blog').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: false,
        margin:30,
        autoplayTimeout: 5000,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
        item: 3,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // best seller slider
    $('.best-seller').slick({
        infinite: true,
        slidesToShow: 1,
        rows: 3,
        vertical: true,
        slidesToScroll: 1,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>'
        
    });
    // home3 recent product
    $('.home3-recent-product').slick({
        infinite: true,
        slidesToShow: 2,
        rows: 2,
        vertical: false,
        slidesToScroll: 1,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
          ]           
        
    });
    // home2-tab-style2-carousel
    $('.home2-tab-style2-carousel, .home2-tab-style2-carousel2, .home2-tab-style2-carouse3').slick({
        infinite: true,
        slidesToShow: 3,
        rows: 2,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
              }
            }
          ]           
    });

    // home tab carousel
    $('.home-tab-carousel, .home-tab-carousel2, .home-tab-carousel3').slick({
        infinite: true,
        slidesToShow: 4,
        rows: 2,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]        
    });
    // home 2 tab carousel
    $('.home2-tab-carousel, .home2-tab-carousel2, .home2-tab-carousel3').slick({
        infinite: true,
        slidesToShow: 3,
        rows: 2,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]          
    });

    // home carousel product
    $('.carousel-product').slick({
        infinite: true,
        slidesToShow: 4,
        rows: 1,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1171,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]        
    });
    // home 4 carousel product
    $('.home4-carousel-product').slick({
        infinite: true,
        slidesToShow: 4,
        rows: 2,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            }
          ]        
    });
    // home product category slider
    $('.cat-slider1, .cat-slider2').slick({
        infinite: true,
        slidesToShow: 3,
        rows: 1,
        prevArrow: '<i class="material-icons bs-arrow-left">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons bs-arrow-right">keyboard_arrow_right</i>',
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1366,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]           
    });


    /* slider active */
    $('.new-collection-slider').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*------ Product details page gallery ----*/
    function ActiveFotorama() {
        jQuery('.fotorama').fotorama({
            thumbwidth:109,
            thumbheight:109,
            thumbmargin:7,
            thumbborderwidth:1,
            // thumbfit:'cover',
            transition:'dissolve',
            allowfullscreen: true,
            nav: 'thumbs'
        });
    }
    ActiveFotorama();

    /*------ Product details page gallery ----*/
    function QuickViewActiveFotorama() {
        jQuery('.quickview-fotorama').fotorama({
            thumbwidth:109,
            thumbheight:109,
            thumbmargin:7,
            thumbborderwidth:1,
            // thumbfit:'cover',
            transition:'dissolve',
            allowfullscreen: true,
            nav: 'thumbs'
        });
    }
    QuickViewActiveFotorama();

    
    /*--------------------------
     ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="material-icons">keyboard_arrow_up</i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


})(jQuery);

