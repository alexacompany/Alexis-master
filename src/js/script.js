/*
	jQuery
*/
//= ../vendor/jquery/dist/jquery.js

//каталог блюд
$(".catalogLink").click(function () {
  $('.catalogContent').slideToggle(400);
});

//поиск
$('.searchWrap .searchLink').on('click', function() {
  $('.searchWrap > .searchLink').not(this).parent().removeClass('active');
  $(this).parent().toggleClass('active');
  $('.search input[type="text"]').focus();
});
//Hide the dropdown when clicked off
$(document).on('click touchstart', function(event) {
  if (!$(event.target).closest('.searchWrap').length) {
    // Hide the menus.
    $('.searchWrap.active').removeClass('active');
  }
});

//Плавный скролл по якорям
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			offset = 0,
			bl_top = $(target).offset().top - offset - 10;
			bl_top_correct = $(target).offset().top - offset - 40;
			bl_top_correct2 = $(target).offset().top - offset - 10;
		$('.nav-burger__checkbox').click();
		$('body, html').animate({scrollTop: bl_top}, 800);
		$('body, html').animate({scrollTop: bl_top_correct}, 200);
		$('body, html').animate({scrollTop: bl_top_correct2}, 300);
		return false;
	});
});

//__________menu toggle
$(".burger-menu").click(function () {
  $('.wrapHead__nav').slideToggle(700);
  });
$(window).resize(function() {
  if ($(window).width() > 768) {
    $('.wrapHead__nav').removeAttr('style');
  }
});

//_________price more
$(".moreBtn").click(function () {
    $('.display').slideToggle(700);
    $(this).css("visibility", "hidden");
});
