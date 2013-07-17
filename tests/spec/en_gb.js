describe("normal", function() {
	for (tPhrase in translationTests) {
		it(tPhrase, function() {
			var tOutput = strToRegex([tPhrase])[0],
				tRegex = translationTests[tPhrase];
			expect(tOutput).toBe(tRegex);
		});
	}
});

describe("shortcuts", function() {
	for (sPhrase in shortcutTests) {
		it(sPhrase, function() {
			var sOutput = strToRegex([sPhrase])[0],
				sRegex = shortcutTests[sPhrase];
			expect(sOutput).toBe(sRegex);
		});
	}
});
