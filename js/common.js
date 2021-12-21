$(document).ready(function() {
  $('.drawer').drawer();
});

$(function() {
    $('.slick01').slick({
      accessibility: false,
      centerMode: true,
      arrows: true,
      fade:true,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 400
    }); 
});
