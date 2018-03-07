/*
	jQuery
*/
//= ../vendor/jquery/dist/jquery.js

//$('.burger').click (function() {
  //$('.menu').slideToggle(700);
//});
//$(window).resize(function() {
  //if ($(window).width() > 640) {
    //$('.menu').removeAttr('style')
  //}
//});

$(".burger-menu").click(function () {
  $(this).toggleClass("menu-on");
  $('.menu').slideToggle(700);
  $('.menu a').addClass('animated bounceInDown')
  });
$(window).resize(function() {
  if ($(window).width() > 640) {
    $('.menu').removeAttr('style')
  }
});







$(".itemContent").not(":first").hide();
  $(".items .item").click(function () {
    $(".items .item").removeClass("active").eq($(this).index()).addClass("active");
    $(".itemContent").hide().eq($(this).index()).fadeIn() }).eq(0).addClass("active");
$(document).click(function(event) {
  if ($(event.target).closest(".items .item").length || $(event.target).closest(".itemContent").length ) return;
  $('.itemContent').fadeOut(700);
  event.stopPropagation();
});

  



//$(document).click(function(event) {
//  if ($(event.target).closest(".portfolio__items").length || $(event.target).closest(".portfolio__modal").length ) return;
//  $('.portfolio__modal').fadeOut(700);
//  event.stopPropagation();
//});


$( document ).ready(function() {
    $(".play").on("click", function () {
      $("#video")[0].play();
      $(this).css({"opacity": 0, "z-index":99});
      $(".pause").css({"opacity": 0.15, "z-index":100});
      $(".text").css("opacity", 0);
      $(".title").css("opacity", 0);

  });
  $(".pause").on("click", function () {
      $("#video")[0].pause();
      $(this).css({"opacity": 0, "z-index":99});
      $(".play").css({"opacity": 1, "z-index":100});
      $(".text").css("opacity", 1);
      $(".title").css("opacity", 1);

  });
});

