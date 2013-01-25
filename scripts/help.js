jQuery(function($){

	$('.help-tab').on('click', function(){

		$('.help').toggleClass('is-active');
		var helpHeight = $('.help').outerHeight();

		if ( $('.help').is('.is-active') ) {
			$('.help').animate({
				'top' : '-=' +  helpHeight
			});
		} else {
			$('.help').animate({
				'top' : '+=' +  helpHeight
			});
		}
		return false;

	});
});
