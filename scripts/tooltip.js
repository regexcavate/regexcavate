//*************************
//  	$$ Tooltip.js
//**************************

jQuery(function($){

	$('.part').live({
		mouseenter: function(){

			var $this = $(this);
			var partWidth = $this.width();
			var partPosition = $this.position().left;

			var tooltipWidth;
			var tooltipText = $this.attr('title');
			var tooltipPosition = partPosition + (partWidth/4) + 'px';

			console.log(partWidth, partPosition, tooltipPosition);

			$('.tooltip').text(tooltipText).css({
				'left'        : tooltipPosition
			}).toggleClass('is-visible');

		},
		mouseleave: function(){ 

			$('.tooltip').toggleClass('is-visible');

		}

	});

});
