describe("normal", function() {
	for (tRegex in translationTests) {
		it(tRegex, function() {
			for (var i = 0; i < translationTests[tRegex].length; i++) {
				tPhrase = translationTests[tRegex][i];
				expect(strToRegex([tPhrase])[0]).toBe(tRegex);
			}
		});
	}
});

describe("shortcuts", function() {
	for (sRegex in shortcutTests) {
		it(sRegex, function() {
			for (var i = 0; i < shortcutTests[sRegex].length; i++) {
				sPhrase = shortcutTests[sRegex][i];
				expect(strToRegex([sPhrase])[0]).toBe(sRegex);
			}
		});
	}
});
