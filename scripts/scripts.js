'use strict';

if (/debug=true/.test(location.href)) {
	// Use this for development/debugging. Chrome (for example) caches XHRed scripts super aggressively.
	require.config({
		urlArgs: "cache_bust=" +  (new Date()).getTime()
	});
}

require(["jquery", "translations"], function(jQuery, translations) {
	var regexParts = [],
		shortcuts = translations.shortcuts;

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

		if (regexString.length > 0) {
			$('.result').html(regexString);
			$('.result-copy').val(regexStringCopy);
			$('.result-container, .visual').show();
		} else {
			$('.result').html('');
			$('.result-copy').val('');
			$('.result-container, .visual').hide();
		}
	}

	/**
	 *	This function receives a string that it parses into a regex Object.
	 *
	 *	@param parts An array of the individual bits of the string to parse
	 *	@returns regexParts The regex parts representing the regex string passed in. Use by doing `regexParts.join()`
	 */
	function strToRegex(parts) {
		// Reset the array.
		regexParts.length = 0;

		for (var i=parts.length; i > 0; i--) {
			var negation = false,
				part = parts[parts.length - i],
				partSolved = false;

			// If this part starts with not/no, trim it out and remember that this is a negation for later.
			if (/^(not|no)/.test(part)) {
				part = part.replace(/^(not|no) /, '');
				negation = true;
			}

			partSolved = probe(translations, part);

			// If this part has a regex match AND is a negation AND is a range that doesn't already have a negation in it.
			if (partSolved && negation && /\[[^\^]/.test(regexParts[regexParts.length-1])) {
				// Add the ^ symbol to the start of any range that doesn't already have it.
				regexParts[regexParts.length-1] = regexParts[regexParts.length-1].replace(/\[/, '[^');
			}

			// If none of the translations matched, and this part isn't a shortcut then just give back the same as was input.
			if (!partSolved && !probe(shortcuts, part)) {
				regexParts.push(escapeRegExp(part));
			}
		}

		return regexParts;
	}

	/**
	 *	This function probes the given list for the given part.
	 *
	 *	@param list The array of translations/shortcuts we're probing.
	 *	@param part The particular string we're probing for.
	 *	@returns partSolved Whether this particular part was found.
	 */
	function probe(list, part) {
		for (var j=list.length; j > 0; j--) {
			var regex = new RegExp('^'+list[list.length-j].in+'$');
			
			// If this part matches this translation, we have a winner.
			if ( regex.test(part) ) {
				regexParts.push(part.replace(regex, list[list.length-j].out));

				return true;
			}

		}

		return false;
	}

	// This function was found here: http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
	function escapeRegExp(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
});