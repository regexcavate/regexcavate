describe("normal", function() {
	for (tRegex in translationTests) {
		addTest(translationTests, tRegex);
	}
});

describe("shortcuts", function() {
	for (sRegex in shortcutTests) {
		addTest(shortcutTests, sRegex);
	}
});

function addTest(testArr, regex) {
	it(regex, function() {
		for (var i = 0; i < testArr[regex].length; i++) {
			phrase = testArr[regex][i];
			expect(strToRegex([phrase])[0]).toBe(regex);
		}
	});
}