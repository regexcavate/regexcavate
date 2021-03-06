/*global base64, config, Prism, Konami, translations, START, END, shortcuts, shortcut_names */
(function() {
	'use strict';

	var debounceInput = false,
		regexParts = [];

	jQuery(function($) {
		var placeholder = '',
			placeholderItems = 2,
			placeholderStart = false,
			maxSeed = translations.length-1;

		// Make sure we don't make this placeholder too long.
		while (placeholderItems > 0) {
			var lastNum = false,
				seeded = '';

			// If this is the first item, randomly choose whether to show "beginning of the line" or not.
			if (placeholderItems === 2 && doIt()) {
				// START will be in the 'expanded' translations file.
				placeholder+= START+', ';
				placeholderStart = true;
				placeholderItems--;
			}

			seeded = translations[randomInterval(0, maxSeed)];

			// Make sure this isn't one of our catchAll translations as they won't make sense as a placeholder.
			if (seeded.catchAll) {
				continue;
			}

			seeded = seeded.name;

			// If the placeholder has any ? symbols, replace these all with random numbers
			while (/\?/.test(seeded)) {
				// Each part will only ever have max 2 numbers
				lastNum = lastNum === false ? randomInterval(2,5) : randomInterval(6,9);
				// Use normal string replace to only replace first instance each time.
				seeded = seeded.replace('?', lastNum);
			}

			placeholder += seeded+', ';
			placeholderItems--;

			// If there's a space left, it's randomly decided that we want to add the "end", and there's no start of line item.
			if (placeholderItems === 1 && doIt() && !placeholderStart) {
				// END will be in the 'expanded' translations file.
				placeholder+= END;
				placeholderItems--;
			}
		}

		// Prepend our configured text to the placeholder (for example: "Try: ")
		placeholder = config.placeHolderPrepend + placeholder.replace(/, $/, '');

		$('.verbose').keydown(function(){
			// hide any visible warning about noticed regex
			if ( $('.noticed-regex').is('.is-visible') ) {
				$('.noticed-regex').removeClass('is-visible');
			}
		}).keyup(function(e) {
			// If the user presses enter (13), or types a comma (188)
			if (e.keyCode === 13 || e.keyCode === 188) {
				parseInput.call(this, this); // Pass this in as an argument to get around a jshint strict issue in the parseInput function
			}
		}).change(function() {
			parseInput.call(this, this);
		}).attr('placeholder', placeholder);

		$('.result, .copy-result').live('click', function() {
			var height = Number($('.result').outerHeight())+Number($('.result > .part').css('padding-bottom').replace('px', ''))+Number($('.result > .part').css('padding-top').replace('px', ''));

			$('.result-container').addClass('busy-copying');
			$('.copy-me').height(height).select();
		});
		$('.copy-me').live('blur', function() {
			$('.result-container').removeClass('busy-copying');
		});
	});

	/**
	 * Dynmaically add the shortcuts to the help panel
	 * on click, add them to the verbose input, trigger change
	 * and hide the help panel. Replace all ? with a random number.
	 */
	(function helpShortcuts(){
		var current,
			i,
			shortcutItem = '',
			shortcutsList = '';

		for (i = 0; i < shortcut_names.length; i++) {
			shortcutsList += '<li><a href="">' + shortcut_names[i] + '</a></li>';
		}

		$('#shortcuts-list').append(shortcutsList);

		$('#shortcuts-list a').on('click', function(e){
			var shortcut = $(this).text();

			current = $.trim($('.verbose').val());

			// If we already have some entered value
			if (current !== '') {
				shortcutItem = current;

				// If it doesn't end in a `,` add one.
				if (/[^,]$/.test(current)) {
					shortcutItem+=',';
				}
			}

			shortcutItem+= shortcut;

			$('.verbose').val(shortcutItem).focus().trigger('change');
			$('.help-tab').trigger('click');

			e.preventDefault();
			return false;
		});

	})();

	/**
	 *	This function receives a string that it parses into a regex Object.
	 */
	function parseInput(input) {
		var parts = input.value.replace(/, /g, ',').split(','),
			regex = strToRegex(parts),
			regexString = '',
			regexStringCopy = '';

		if (!debounceInput) {
			debounceInput = true;

			setTimeout(function() {
				debounceInput = false;
			}, 250);
		} else {
			return false;
		}

		// Hide the help tab if it's visible.
		$('.help.is-active .help-tab').trigger('click');

		// If this looks like a regex,
		// i.e.: It looks like a range [a-z]
		// or it looks like a JS formatted regex
		// or there seems to be one of the character classes you escape in regex (eg: \s)
		if (/([\[\/][^,]+[\]\/]|\\[bdnrstw]|\{[0-9]+,?([0-9]+)?\})/.test(input.value)) {
			$('.noticed-regex').addClass('is-visible');
		} else {
			$('.noticed-regex').removeClass('is-visible');
		}

		for (var i=regex.length; i > 0; i--) {
			regexString+= '<abbr class="part" title="'+parts[regex.length-i]+'">'+htmlEscape(regex[regex.length-i])+'</abbr>';
			regexStringCopy+= regex[regex.length-i];
		}

		// If the regex isn't empty, show the result, otherwise empty
		// the result and hide the container
		if ( regex[0] !== '' ) {
			$('.result').html(regexString);
			$('.copy-me').html(regexStringCopy);
			$('.result-container').slideDown(500, function(){
				// after slide down, set visible overflow to ensure
				// that the tooltips are visible above the container
				$('.result-container').css('overflow', 'visible');
			});

			$('.regexplained').attr('href', 'http://regexplained.co.uk/#' + base64.encode(JSON.stringify({pattern: regexStringCopy})));
		} else {
			$('.result').empty();
			$('.copy-me').empty();
			$('.result-container').slideUp();
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
			var compareParts = [],
				comparisons,
				part = $.trim(parts[parts.length - i]),
				latest = '',
				negation = config.negation.test(part),
				optional = config.optionals.test(part),
				partSolved = false;

			if (optional) {
				part = $.trim(part.replace(config.optionals, ''));
			}
			if (negation) {
				part = $.trim(part.replace(config.negation, ''));
			}

			partSolved = probe(translations, part);

			latest = regexParts[regexParts.length-1];

			// If this part has a regex match AND is a negation AND is a range that doesn't already have a negation in it.
			if (partSolved && negation && /\[[^\^]/.test(regexParts[regexParts.length-1])) {
				// Add the ^ symbol to the start of any range that doesn't already have it.
				regexParts[regexParts.length-1] = latest.replace(/\[/, '[^');
			}
			if (optional && /^(\[|\()([^\]]*)(\]|\))(\+|\*|\{[^\}]*\})?$/.test(latest)) {
				regexParts[regexParts.length-1] = '('+latest+')?';
			}

			// Check for comparisons (i.e.: "foo or bar" = (foo|bar))
			if (!partSolved && config.comparator.test(part)) {
				comparisons = part.split(config.comparator);

				for (var j=comparisons.length; j > 0; j--) {
					// Only compare translations and NOT shortcuts as those are a little too advanced.
					compareParts.push(probe(translations,comparisons[comparisons.length - j], true));
				}

				regexParts.push('('+compareParts.join('|')+')'+(optional ? '?' : ''));
			// If none of the translations matched, and this part isn't a shortcut then just give back the same as was input.
			} else if (!partSolved && !probe(shortcuts, part)) {
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
	 *	@param returnPart Whether or not to rather return the part than automatically add it to regexParts.
	 *	@returns partSolved Either whether this particular part was found (boolean), or the part that was found if returnPart is true.
	 */
	function probe(list, part, returnPart) {
		for (var j=list.length; j > 0; j--) {
			var catchAll,
				newPart,
				regex = new RegExp('^'+list[list.length-j].input+'$');

			// If this part matches this translation, we have a winner.
			if ( regex.test(part.toLowerCase()) ) {
				if (list[list.length-j].catchAll) {
					// Don't lowercase as the user might expect capitals as input
					catchAll = part.replace(regex, list[list.length-j].output);

					// If the catch all doesn't begin with `[` or `(`
					if (!/^\[/.test(catchAll)) {
						catchAll = escapeRegExp(catchAll);
					}

					newPart = catchAll.replace(/\[\-\]/g, '[\\-]');
				} else {
					newPart = part.toLowerCase().replace(regex, list[list.length-j].output);
				}

				if (returnPart) {
					return newPart;
				} else {
					regexParts.push(newPart);
					return true;
				}
			}
		}

		if (returnPart) {
			// Return the unmodified part.
			return part;
		} else {
			return false;
		}
	}

	// This function was modified, but originally found here: http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
	function escapeRegExp(str) {
		return str.replace(/[\-\[\/\{\(\)\*\+\?\.\\\^\$\|\>]/g, "\\$&");
	}

	// This function was found here: http://stackoverflow.com/a/7124052
	function htmlEscape(str) {
	    return String(str)
	            .replace(/&/g, '&amp;')
	            .replace(/"/g, '&quot;')
	            .replace(/'/g, '&#39;')
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;');
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

	/**
	 * No widows in running text
	 */
	$('p').each(function() {
		$(this).html(function(i, html){
			return html.replace(/\s([\S]+)$/,'&nbsp;$1');
		});
	});

	Prism.highlightAll();

	/*===== Just a little bit of fun. =====*/
	var konami = new Konami();
	konami.code = function() {
		if ($('body').hasClass('excavating')) {
			$('body').removeClass('excavating');
		} else {
			$('body').addClass('excavating');
		}
	};
	konami.load();
})();
