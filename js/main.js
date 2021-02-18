 AOS.init({
     duration: 800,
     easing: 'slide',
     once: true
 });

 jQuery(document).ready(function($) {

     "use strict";



     var siteMenuClone = function() {

         $('.js-clone-nav').each(function() {
             var $this = $(this);
             $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
         });


         setTimeout(function() {

             var counter = 0;
             $('.site-mobile-menu .has-children').each(function() {
                 var $this = $(this);

                 $this.prepend('<span class="arrow-collapse collapsed">');

                 $this.find('.arrow-collapse').attr({
                     'data-toggle': 'collapse',
                     'data-target': '#collapseItem' + counter,
                 });

                 $this.find('> ul').attr({
                     'class': 'collapse',
                     'id': 'collapseItem' + counter,
                 });

                 counter++;

             });

         }, 1000);

         $('body').on('click', '.arrow-collapse', function(e) {
             var $this = $(this);
             if ($this.closest('li').find('.collapse').hasClass('show')) {
                 $this.removeClass('active');
             } else {
                 $this.addClass('active');
             }
             e.preventDefault();

         });

         $(window).resize(function() {
             var $this = $(this),
                 w = $this.width();

             if (w > 768) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         })

         $('body').on('click', '.js-menu-toggle', function(e) {
             var $this = $(this);
             e.preventDefault();

             if ($('body').hasClass('offcanvas-menu')) {
                 $('body').removeClass('offcanvas-menu');
                 $this.removeClass('active');
             } else {
                 $('body').addClass('offcanvas-menu');
                 $this.addClass('active');
             }
         })

         // click outisde offcanvas
         $(document).mouseup(function(e) {
             var container = $(".site-mobile-menu");
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         });
     };
     siteMenuClone();


     var sitePlusMinus = function() {
         $('.js-btn-minus').on('click', function(e) {
             e.preventDefault();
             if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                 $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
             } else {
                 $(this).closest('.input-group').find('.form-control').val(parseInt(0));
             }
         });
         $('.js-btn-plus').on('click', function(e) {
             e.preventDefault();
             $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
         });
     };
     // sitePlusMinus();


     var siteSliderRange = function() {
         $("#slider-range").slider({
             range: true,
             min: 0,
             max: 500,
             values: [75, 300],
             slide: function(event, ui) {
                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
             }
         });
         $("#amount").val("$" + $("#slider-range").slider("values", 0) +
             " - $" + $("#slider-range").slider("values", 1));
     };
     // siteSliderRange();


     var siteMagnificPopup = function() {
         $('.image-popup').magnificPopup({
             type: 'image',
             closeOnContentClick: true,
             closeBtnInside: false,
             fixedContentPos: true,
             mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
             gallery: {
                 enabled: true,
                 navigateByImgClick: true,
                 preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
             },
             image: {
                 verticalFit: true
             },
             zoom: {
                 enabled: true,
                 duration: 300 // don't foget to change the duration also in CSS
             }
         });

         $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
             disableOn: 700,
             type: 'iframe',
             mainClass: 'mfp-fade',
             removalDelay: 160,
             preloader: false,

             fixedContentPos: false
         });
     };
     siteMagnificPopup();


     var siteCarousel = function() {
         if ($('.nonloop-block-13').length > 0) {
             $('.nonloop-block-13').owlCarousel({
                 center: false,
                 items: 1,
                 loop: false,
                 stagePadding: 0,
                 margin: 20,
                 nav: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 20,
                         items: 2
                     },
                     1000: {
                         margin: 20,
                         stagePadding: 0,
                         items: 2
                     },
                     1200: {
                         margin: 20,
                         stagePadding: 0,
                         items: 3
                     }
                 }
             });
         }

         $('.slide-one-item').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             autoplay: true,
             pauseOnHover: false,
             nav: true,
             navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
         });
     };
     siteCarousel();

     var siteStellar = function() {
         $(window).stellar({
             responsive: false,
             parallaxBackgrounds: true,
             parallaxElements: true,
             horizontalScrolling: false,
             hideDistantElements: false,
             scrollProperty: 'scroll'
         });
     };
     siteStellar();

     var siteCountDown = function() {

         $('#date-countdown').countdown('2020/10/10', function(event) {
             var $this = $(this).html(event.strftime('' +
                 '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
                 '<span class="countdown-block"><span class="label">%d</span> days </span>' +
                 '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
                 '<span class="countdown-block"><span class="label">%M</span> min </span>' +
                 '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
         });

     };
     siteCountDown();

     var siteDatePicker = function() {

         if ($('.datepicker').length > 0) {
             $('.datepicker').datepicker();
         }

     };
     siteDatePicker();

     var swiperSetting = function() {
         var mySwiper = new Swiper('.swiper-container', {
             // Optional parameters
             // direction: 'horizontal',
             // loop: true,

             // If we need pagination
             pagination: {
                 el: '.swiper-pagination',
             },

             // Navigation arrows
             navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             },
             mousewheel: {
                 invert: false,
                 forceToAxis: true,
                 releaseOnEdges: true,
             },

             // direction: 'vertical',
             freeMode: true,
             // slidesPerView: 'auto',
             spaceBetween: 30,
             mousewheel: true,
             pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
             },

             // And if we need scrollbar
             // scrollbar: {
             //   el: '.swiper-scrollbar',
             // },

             slidesPerView: 3,
             breakpoints: {
                 668: {
                     slidesPerView: 1
                 },
                 1024: {
                     slidesPerView: 2
                 }
             },
             // paginationClickable: false,
             spaceBetween: 20,
             // freeMode: true,
             // grabCursor: true,
             // mousewheelControl: true

         })
     }
     swiperSetting();
 });

 $(document).ready(function() {
     menu();
     footer();
 });

 function footer() {
     let year = new Date().getFullYear();
     $(".footer").append('<div class="container-fluid text-center"> <p>' +
         'Todos los derechos reservados © ' + year + ' | by <a href = "https://aplicacionesinfinitas.com"' +
         'target ="_blank"> Aplicaciones Infinitas </a>' +
         '</p>' +
         '</div>');
 }

 function menu() {
     $('#header').append('<div class="container-fluid">' +
         '<div class="row align-items-center">' +

         '<div class="col-6 col-xl-2" data-aos="fade-down">' +
         '<a href="index.html" class="text-black h2 mb-0"><img src="images/logof.png" alt=""></a>' +
         '</div>' +
         '<div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">' +
         '<nav class="site-navigation position-relative text-right text-lg-center" role="navigation">' +

         '<ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">' +
         '<li class="has-children">' +
         '<a href="single.html">Productos</a>' +
         '<ul class="dropdown">' +
         '<li><a href="#">Textiles</a></li>' +
         '<li><a href="#">Ceramica</a></li>' +
         '<li><a href="#">Vidrio</a></li>' +
         '<li><a href="#">Metales</a></li>' +
         '<li><a href="#">Accesorios</a></li>' +
         '</ul>' +
         '</li>' +
         '<li class="has-children">' +
         '<a href="services.html">Servicios</a>' +
         '<ul class="dropdown">' +
         '<li><a href="#">Sublimación</a></li>' +
         '<li><a href="#">Banners</a></li>' +
         '<li><a href="#">Carnetización</a></li>' +
         '<li><a href="#">Troquelado</a></li>' +
         '</ul>' +
         '</li>' +
         '<li><a href="about.html">Nosotros</a></li>' +
         '<li><a href="contact.html">Contactanos</a></li>' +
         '</ul>' +
         '</nav>' +
         '</div>' +

         '<div class="col-6 col-xl-2 text-right" data-aos="fade-down">' +
         '<div class="d-none d-xl-inline-block">' +
         '<ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">' +
         '<li>' +
         '<a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>' +
         '</li>' +
         '<li>' +
         '<a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>' +
         '</li>' +
         '<li>' +
         '<a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>' +
         '</li>' +
         '<li>' +
         '<a href="#" class="pl-3 pr-3"><span class="icon-youtube-play"></span></a>' +
         '</li>' +
         '</ul>' +
         '</div>' +

         '<div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>' +
         '</div>' +
         '</div>' +
         '</div>')
 };