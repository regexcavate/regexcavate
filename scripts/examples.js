define({
	list:[
		'anything',
		'new line',
		'non whitespace',
		'whitespace',
		// Prepend with : to denote being able to do: a/a single/one/1 number, one or more/?/? to ?/any number of/any amount of/ numbers.
		// Wherever ?s is indicates possible plurality.
		':number?s',
		':letter?s',
		':uppercase or lowercase letter?s',
		':uppercase/lowercase letter?s',
		':lowercase or uppercase letter?s',
		':lowercase/uppercase letter?s',
		':lowercase letter?s',
		':uppercase letter?s',
		':number?s and letter?s',
		':number?s and uppercase or lowercase letter?s',
		':number?s and uppercase/lowercase letter?s',
		':number?s and lowercase or uppercase letter?s',
		':number?s and lowercase/uppercase letter?s',
		':number?s and lowercase letter?s',
		':number?s and uppercase letter?s',
		':number?s & letter?s',
		':number?s & uppercase or lowercase letter?s',
		':number?s & uppercase/lowercase letter?s',
		':number?s & lowercase or uppercase letter?s',
		':number?s & lowercase/uppercase letter?s',
		':number?s & lowercase letter?s',
		':number?s & uppercase letter?s',
		':number?s or letter?s',
		':number?s or uppercase or lowercase letter?s',
		':number?s or uppercase/lowercase letter?s',
		':number?s or lowercase or uppercase letter?s',
		':number?s or lowercase/uppercase letter?s',
		':number?s or lowercase letter?s',
		':number?s or uppercase letter?s',
		':word?s',
		':non-word?s',
		':digit?s',
		':non-digit?s'
	],
	prepend: [
		 [ // Singular
		 	'a ',
		 	'a single ',
		 	'one ',
		 	'1 '
		 ],
		 [ // Plural
		 	'one or more ',
		 	'? ',
		 	'? to ? ',
		 	'any number of ',
		 	'any amount of '
		 ]
	]
});