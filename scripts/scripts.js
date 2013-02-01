'use strict';

if (/debug=true/.test(location.href)) {
	// Use this for development/debugging. Chrome (for example) caches XHRed scripts super aggressively.
	require.config({
		urlArgs: "cache_bust=" +  (new Date()).getTime()
	});
}

require(["jquery", "translations", "examples", "help", "navscroll", "tooltip"], function(jQuery, translations, examples, help, navscroll, tooltip) {
	var prepend = examples.prepend,
		examples = examples.list,
		regexParts = [],
		shortcuts = translations.shortcuts;

	translations = translations.list;

	jQuery(function($) {
		var placeholder = '',
			maxSeed = examples.length-1,
			seeded,
			prependSeed;

		// Make sure we don't make this placeholder too long.
		while (placeholder.length < 35) {
			var lastNum = false;

			seeded = examples[randomInterval(0, maxSeed)];

			// If this is the first item, randomly choose whether to show "beginning of the line" or not.
			if (placeholder.length === 0 && doIt()) {
				placeholder+= 'beginning of line,';
			}

			// If the seeded item starts with a :, use a randomly chosen prepend string.
			if (/^:/.test(seeded)) {
				prependSeed = randomInterval(0, 1);

				seeded = seeded.replace(/^:/, prepend[prependSeed][randomInterval(0, prepend[prependSeed].length-1)])
							   .replace(/\?s/g, (prependSeed === 0 ? '' : 's'));
			}

			seeded += ',';

			// If the placeholder has any ? symbols, replace these all with random numbers
			while (/\?/.test(seeded)) {
				// Each part will only ever have max 2 numbers
				lastNum = lastNum === false ? randomInterval(2,5) : randomInterval(6,9);
				// Use normal string replace to only replace first instance each time.
				seeded = seeded.replace('?', lastNum);
			}

			// If this added to the placeholder isn't too long, add it.
			if ((placeholder+seeded).length < 50) {
				placeholder+= seeded;
			}
		}

		// Now that we're done, randomly choose whether to show $ (end of line) or not.
		if (doIt()) {
			placeholder+= 'end of line';
		} else {
			// If not, there's a trailing comma we must remove.
			placeholder = placeholder.slice(0,placeholder.length-1);
		}

		$('.verbose').keyup(function(e) {
			// If the user presses enter (13), or types a comma (188)
			if (e.keyCode === 13 || e.keyCode === 188) {
				parseInput.call(this);
			}
		}).change(parseInput).attr('placeholder', placeholder);
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
		var parts = this.value.replace(/, /, ',').split(','),
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
		return str.replace(/[\-\[\/\{\(\)\*\+\?\.\\\^\$\|\<\>]/g, "\\$&");
	}

	/**
	 *	Simple function that picks a random number between the given range.
	 *
	 *	@param from The beginning of the range.
	 *	@param to The end of the range.
	 *	@returns A number between `from` and `to`.
	 */
	function randomInterval(from,to) {
	    return Math.floor(Math.random()*(to-from+1)+from);
	}

	/**
	 *	This function simply makes a binary decision and returns true/false as required.
	 *
	 *	@returns boolean
	 */
	function doIt() {
		return randomInterval(0, 1) === 1;
	}
});
