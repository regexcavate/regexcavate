'use strict';

jQuery(function($) {
	$('.verbose').keyup(function(e) {
		// If the user presses enter (13), or types a comma (188)
		if (e.keyCode === 13 || e.keyCode === 188) {
			parseInput.call(this);
		}
	}).change(parseInput);
});

/**
 *	This function receives a string that it parses into a regex Object.
 */
function parseInput() {
	var parts = this.value.split(','),
		regex = strToRegex(parts),
		regexString = '';

	for (var i=regex.length; i > 0; i--) {
		regexString+= '<abbr class="part" title="'+parts[regex.length-i]+'">'+regex[regex.length-i]+'</abbr>';
	}

	$('.result').html('Your regex: '+regexString);
	$('.highlight').html(regexString);
	$('.example').hide();
	$('.visual').show();
}

/**
 *	This function receives a string that it parses into a regex Object.
 *
 *	@param parts An array of the individual bits of the string to parse
 *	@returns regexParts The regex parts representing the regex string passed in. Use by doing `regexParts.join()`
 */
function strToRegex(parts) {
	var regexParts = [];

	for (var i=parts.length; i > 0; i--) {
		var part = parts[parts.length - i],
			partSolved = false;

		for (var j=tests.length; j > 0; j--) {
			var regex = new RegExp('^'+tests[tests.length-j].test+'$');
			
			// If this part (i) matches this test (j), we have a winner.
			if ( regex.test(part) ) {
				regexParts.push(part.replace(regex, tests[tests.length-j].replace));
				partSolved = true;

				break;
			}
		}

		// If none of the tests matched, then just give back the same as was input.
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