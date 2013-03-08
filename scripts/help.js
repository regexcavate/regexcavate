jQuery(function($){
	'use strict';

	$('.help-tab').on('click', function(){

		var helpHeight = $('.help').outerHeight();

		if ( $('.help').is('.is-active') ) {
			$('.help').animate({
				'top' : '100%'
			});
			$('.help').removeClass('is-active');
		} else {
			$('.help').animate({
				'top' : '-=' +  helpHeight
			});
			$('.help').addClass('is-active');
		}
		return false;

	}).on('keydown', function(e){
		if ( e.which === 13 ) {
			$('.help-tab').trigger('click');
			return false;
		}
	});
});
