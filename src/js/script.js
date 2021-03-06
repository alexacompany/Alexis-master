/*
	jQuery
*/
//= ../vendor/jquery/dist/jquery.js

//каталог блюд
$(".catalogLink, .popUpIcon").click(function () {
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

//__________menu fix
$('#head').removeClass('default');
$(window).scroll(function(){
  if($(this).scrollTop() > 20) {
    $('#head').addClass('default').fadeIn('slow');
  } else {
    $('#head').removeClass('default').fadeIn('slow');
  }
})
//__________menu toggle
$(".burger-menu").click(function () {
  $('.wrapHead__nav').slideToggle(700);
  });
$(window).resize(function() {
  if ($(window).width() > 1200) {
    $('.wrapHead__nav').removeAttr('style');
  }
});
