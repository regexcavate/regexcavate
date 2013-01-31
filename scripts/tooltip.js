//*************************
//  	$$ Tooltip.js
//**************************

jQuery(function($){

	$('.part').live({
		mouseenter: function(){
			var $this = $(this);
			var partWidth = $this.width();
			var partPosition = $this.position().left;
			var tooltipText = $this.attr('title') || $this.data('title');

			// Remove the title so that we're not showing the native "tooltip" along with our fancy one.
			$this.data('title', tooltipText).attr('title','');

			setText(tooltipText, partWidth, partPosition);
		},
		mouseleave: function(){
			$('.tooltip').toggleClass('is-visible');
		}
	});
	function setText(text, width, position){
		$('.tooltip').text(text);
		positionTooltip(width, position);
	}
	function positionTooltip(partWidth, partPosition){
		var tooltipWidth = $('.tooltip').outerWidth();
		var tooltipPosition = partPosition + (partWidth/2) - (tooltipWidth/2);

		$('.tooltip').css({ 'left' : tooltipPosition }).toggleClass('is-visible');
	}

});
