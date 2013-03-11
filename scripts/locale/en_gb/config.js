window.config = {
	comparator: / or /gi,
	// A regex used to negate all existing translations.
	negation: /^(not |no |non )/gi,
	optionals: /(maybe|optional(ly)?|perhaps):? /gi,
	// The text to prepend to the placeholder.
	placeHolderPrepend: 'Try: '
};