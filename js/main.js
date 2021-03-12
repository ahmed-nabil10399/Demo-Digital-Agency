$(document).ready(function () {

  $("#navbar li a").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  });

  // ******************************************
  // ******************************************

  $("#navbar .show-links").click(function () {
    $("#navbar .links").toggleClass("links-media");
  });

  // ******************************************
  // ******************************************

  // btn-event-none
  $('a.btn-event-none').click(function (e) {
    e.preventDefault();
  })

  // ******************************************
  // ******************************************

  // add class active >> #navbar 
  $(window).scroll(function () {
    
    if(this.scrollY > 50) {
      
      $('#navbar').addClass("active");
      
    } else {
      
      $('#navbar').removeClass("active");
    }
  })

    // ******************************************
    // ******************************************
  
  // scrolltop >> up 
  $('.scroll-up').click(function () {
    $('body, html').animate({
        scrollTop:0
    },50)
  });

  // ******************************************
  // ******************************************

  // show || hide btn scroll up
    $(window).scroll(function () {
        if($(window).scrollTop() > 500){
            $('.scroll-up').fadeIn(500);
        } else {
            $('.scroll-up').fadeOut(500)
        }
    });

  // ******************************************
  // ******************************************

  // wow js
//   $(".wow").each(function() {
//     if ($(window).width() > 767) {
//       var wow = new WOW({
//         boxClass: 'wow',
//         animateClass: 'animated',
//         offset: 0,
//         mobile: false,
//         live: true
//       });
//       new WOW().init();
//     }
//   });
  
  new WOW().init();


});
