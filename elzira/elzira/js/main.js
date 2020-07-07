jQuery(document).ready(function(){

   "use strict"
   $(window).scroll(function(){
     var top=$(window).scrollTop();
     if(top>=60){
       $('nav').addClass("sticky");
     }
     else{
  if($('nav').hasClass("sticky")){
       $('nav').removeClass("sticky");
     }
     }
   });



   $('.slider').ripples({
    dropRadius: 13,
    perturbance: 0.01,

  });

  var typed = new Typed('.text', {
    strings: ['<strong>I Love</strong> <strong class="primary">Codings.</strong>', '<strong>And To<strong> <strong class="primary">Share...</strong>'],
    typeSpeed: 80,
    loop: true,

  });



  $('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    }
  // other options
});


 //$('.teams').owlCarousel();
 $('.owl-carousel').owlCarousel({
     loop:false,
     margin:10,
     nav:false,
     dots: true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:3
         },
         1000:{
             items:5
         }
     }
 });





//counter-SECTION
$('.counter').counterUp({
    delay: 10,
    time: 1000
});




//contact form section

 $('.contact-form').ripples({
  dropRadius: 13,
  perturbance: 0.01,

});



//SERVICES ANIMATED EFFECT...
$('.service-dislay').waypoint(function(direction){
  $('.service-display').addClass('animated zoomIn')

},{
  offset: '50%'
});


///////////////////
$('.footer').ripples({
 dropRadius: 13,
 perturbance: 0.01,

});


});
