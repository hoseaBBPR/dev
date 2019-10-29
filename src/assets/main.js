(function ($) {
  "use strict";
$(document).ready(function() {
  $(document).on("scroll", onScroll);

  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
    }
  }

  // ========================================================================= //
  //  Carousel Indicator hover override
  // ========================================================================= //
  $('.home .carousel-indicators  li').on('mouseover',function(){
      $(this).trigger('click');
  })


  // ========================================================================= //
  //  NAVBAR
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100 ) {
      $("#fullpage-nav").addClass('nav-scrolled');
    } else {
      $("#fullpage-nav").removeClass('nav-scrolled');
    }
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  $('.teamToggle').parent('.team-member').hover(
    function() {
      $(this).children('.collapse').collapse('show');
    }, function() {
      $(this).children('.collapse').collapse('hide');
    }
  );

});

// Sidebar toggle behavior
 $('#sidebarCollapse').on('click', function() {
   $('#sidebar, #content').toggleClass('active');
 });
})(jQuery);
