'use strict';

if (/debug=true/.test(location.href)) {
	// Use this for development/debugging. Chrome (for example) caches XHRed scripts super aggressively.
	require.config({
		urlArgs: "cache_bust=" +  (new Date()).getTime()
	});
}

require(["jquery", "translations"], function(jQuery, translations) {
	translations = translations.list;

	jQuery(function($) {
		$('.verbose').keyup(function(e) {
			// If the user presses enter (13), or types a comma (188)
			if (e.keyCode === 13 || e.keyCode === 188) {
				parseInput.call(this);
			}
		}).change(parseInput);
		$('.result').click(function() {
			$(this).hide();
			$('.result-copy').css({
				display:'inline',
				width:$(this).width()
			}).select();
		});
		$('.result-copy').blur(function() {
			$(this).hide();
			$('.result').show();
		});
	});

	/**
	 *	This function receives a string that it parses into a regex Object.
	 */
	function parseInput() {
		var parts = this.value.split(','),
			regex = strToRegex(parts),
			regexString = '',
			regexStringCopy = '';

		for (var i=regex.length; i > 0; i--) {
			regexString+= '<abbr class="part" title="'+parts[regex.length-i]+'">'+regex[regex.length-i]+'</abbr>';
			regexStringCopy+= regex[regex.length-i];
		}

		$('.result').html(regexString);
		$('.result-copy').val(regexStringCopy);
		$('.example').hide();
		$('.result-container, .visual').show();
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
			var negation = false,
				part = parts[parts.length - i],
				partSolved = false;

			// If this part starts with not/no, trim it out and remember that this is a negation for later.
			if (/^(not|no)/.test(part)) {
				part = part.replace(/^(not|no) /, '');
				negation = true;
			}

			for (var j=translations.length; j > 0; j--) {
				var regex = new RegExp('^'+translations[translations.length-j].in+'$');
				
				// If this part (i) matches this test (j), we have a winner.
				if ( regex.test(part) ) {
					regexParts.push(part.replace(regex, translations[translations.length-j].out));
					partSolved = true;

					break;
				}
			}

			// If this part has a regex match AND is a negation AND is a range that doesn't already have a negation in it.
			if (partSolved && negation && /\[[^\^]/.test(regexParts[regexParts.length-1])) {
				// Add the ^ symbol to the start of any range that doesn't already have it.
				regexParts[regexParts.length-1] = regexParts[regexParts.length-1].replace(/\[/, '[^');
			}

			// If none of the translations matched, then just give back the same as was input.
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
});