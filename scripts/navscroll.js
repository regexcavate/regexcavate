//*************************
//  	$$ Nav Scroll
//**************************

jQuery(function($){

	$('.main-nav a').on('click', function(){
		var target = $(this).attr('href');
		var position = $(target).offset().top;

		$('html, body').animate({
			scrollTop : position
		}, 500);

		return false;
	});

});

