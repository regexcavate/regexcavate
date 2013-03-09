jQuery(function($){
	'use strict';

	$('.help-tab, .help-tab-trigger').on('click', function(){

		var helpHeight = $('.help').outerHeight();

		if ( $('.help').is('.is-active') ) {
			$('.help').animate({
				'top' : '100%'
			});
			$('.help').removeClass('is-active');
		} else {
			$('.help').animate({
				'top' : '-=' +  helpHeight
			}, focusHelp);
			$('.help').addClass('is-active');
		}

		return false;

	}).on('keydown', function(e){
		if ( e.which === 13 ) {
			$('.help-tab').trigger('click');
			return false;
		}
	});

	function focusHelp() {
		$('html, body').animate({
			scrollTop : $('.app').height() - $(window).height()
		}, 500);
	}
});