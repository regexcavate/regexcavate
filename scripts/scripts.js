var PARSE; 

jQuery(function($) {
	var debounce = false;

	$.get('scripts/tests', function(data, textStatus, jqXHR) {
		// TODO: Do some checking to make sure the data isn't corrupted here.
		PARSE = eval(data);
	});
  
	$('.verbose').keyup(function() {
		/*if (!debounce) {
			debounce = new Date().getTime();
		}
		
		if (new Date().getTime() - debounce > 200) {
			
		}*/
	}).change(function() {
		var regex = strToRegex(this.value);
		var regexString = '';
		var parts = $('.verbose').val().split(',');
		
		for (i=0; i < regex.length; i++) {
			regexString+= '<abbr class="part" title="'+parts[i]+'">'+regex[i]+'</abbr>';
		}
		
		$('.result').html('Your regex: '+regexString);
		$('.highlight').html(regexString);
	});
});

/**
 *	This function receives a string that it parses into a regex Object.
 *	
 *	@param str The string to parse
 *	@returns regexParts The regex parts representing the regex string passed in. Use by doing `regexParts.join()`
 *	@author: Remy Bach
 */
function strToRegex(str) {
	var parts = str.split(','),
        regexParts = [];
  	
	for (i=0; i < parts.length; i++) {
		var part = parts[i],
			partSolved = false;
		
		for (j=0; j < PARSE.length; j++) {
			var regex = new RegExp('^'+PARSE[j].test+'$');
			if(window.console&&window.console.log)console.log(PARSE[j]);
			if ( regex.test(part) ) {
				regexParts.push(part.replace(regex, PARSE[j].replace));
				partSolved = true;
				
				break;
			}
		}
		
		if (!partSolved) {
			regexParts.push(escapeRegExp(part));
		}
	}
	
	return regexParts;
}

// This function was found here: http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}