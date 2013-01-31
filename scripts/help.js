jQuery(function($){

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

	});
});
