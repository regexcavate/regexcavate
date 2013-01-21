/*
	This file is the meat & potatoes of this site - as it were.
	The intention is for this file to be 100% open source which means that
	adding tests and sending pull requests is absolutely encouraged!

	Having said that, there are a few rules:

	1. Commas at the beginning of the translation. This is to make it easier to
		add new translations as we go along without worry of missing a comma.
	2. Make sure that any translations reflect the following syntax:
		{
			name:'', // Essentially: what this translation matches for in plain old English.
			in:'',   // The regex that determines whether what the user has input has a matching translation.
			out:''   // The regex that the user was after.
		}

	NOTE: There's no need to include any negations. To save duplicating too much stuff below, the negation works
			by checking if the user typed 'no'/'not' before any part of the query and stripping that out. If the
			regex returned by any of the individual translations below is within a range (ie: '[...]'), then `^`
			will automatically be prepended inside.
 */
define({list:[
	 {
		name:'anything',
		in:'anything',
		out:'.*'
	 }
	,{
		name:'start of the line',
		in:'(from the )?(start|beginning) of (the )?line',
		out:'^'
	 }
	,{
		name:'end of the line',
		in:'(to the )?end of (the )?line',
		out:'$'
	 }
	,{
		name:'new line',
		in:'(new( |\-)?line|enter)',
		out:'(\\r)?\\n'
	 }
	,{
		name:'non white space',
		in:'no(n|t)? white ?space',
		out:'\\S'
	 }
	,{
		name:'white space',
		in:'white ?space',
		out:'\\s'
	 }
	,{
		name:'a number',
		in:'(a|a single|one|1) number',
		out:'[0-9]'
	 }
	,{
		name:'? numbers',
		in:'([0-9]+) numbers?',
		out:'[0-9]{$1}'
	 }
	,{
		name:'between ? and ? numbers',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) numbers',
		out:'[0-9]{$2,$4}'
	 }
	,{
		name:'any amount of numbers',
		in:'any( number of| amount of)? numbers',
		out:'[0-9]+'
	 }
	,{
		name:'a letter',
		in:'(a|a single|one|1)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letter',
		out:'[a-zA-Z]'
	 }
	,{
		name:'? letters',
		in:'([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		out:'[a-zA-Z]{$1}'
	 }
	,{
		name:'between ? and ? letters',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		out:'[a-zA-Z]{$2,$4}'
	 }
	,{
		name:'any amount of letters',
		in:'any( number of| amount of)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		out:'[a-zA-Z]+'
	 }
	,{
		name:'a lowercase letter',
		in:'(a|a single|one|1) lowercase letter',
		out:'[a-z]'
	 }
	,{
		name:'? lowercase letters',
		in:'([0-9]+) lowercase letters',
		out:'[a-z]{$1}'
	 }
	,{
		name:'between ? and ? lowercase letters',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) lowercase letters',
		out:'[a-z]{$2,$4}'
	 }
	,{
		name:'any amount of lowercase letters',
		in:'any( number of| amount of)? lowercase letters',
		out:'[a-z]+'
	 }
	,{
		name:'a uppercase letter',
		in:'(a|a single|one|1) uppercase letter',
		out:'[A-Z]'
	 }
	,{
		name:'? uppercase letters',
		in:'([0-9]+) uppercase letters',
		out:'[A-Z]{$1}'
	 }
	,{
		name:'between ? and ? uppercase letters',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) uppercase letters',
		out:'[A-Z]{$2,$4}'
	 }
	,{
		name:'any amount of uppercase letters',
		in:'any( number of| amount of)? uppercase letters',
		out:'[A-Z]+'
	 }
	,{
		name:'any amount of numbers and/or letters',
		in:'any( number of| amount of)? numbers( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		out:'[a-zA-Z0-9]+'
	 }
	,{
		name:'any amount of numbers and/or lowercase letters',
		in:'any( number of| amount of)? numbers( &| and| or)? lowercase letters',
		out:'[a-zA-Z0-9]+'
	 }
	,{
		name:'any amount of numbers and/or uppercase letters',
		in:'any( number of| amount of)? numbers( &| and| or)? uppercase letters',
		out:'[a-zA-Z0-9]+'
	 }
	,{
		name:'a word',
		in:'(a|one|1) word',
		out:'\\w'
	 }
	,{
		name:'? words',
		in:'([0-9]+) words',
		out:'\\w{$1}'
	 }
	,{
		name:'between ? and ? words',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) words',
		out:'\\w{$2,$4}'
	 }
	,{
		name:'a non-word',
		in:'(a|one|1) non-word',
		out:'\\W'
	 }
	,{
		name:'? non-words',
		in:'([0-9]+) non-words',
		out:'\\W{$1}'
	 }
	,{
		name:'between ? and ? non-words',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) non-words',
		out:'\\W{$2,$4}'
	 }
	,{
		name:'a digit',
		in:'(a|one|1) digit',
		out:'\\d'
	 }
	,{
		name:'? digits',
		in:'([0-9]+) digits',
		out:'\\d{$1}'
	 }
	,{
		name:'between ? and ? digits',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) digits',
		out:'\\d{$2,$4}'
	 }
	,{
		name:'a non-digit',
		in:'(a|one|1) non-digit',
		out:'\\D'
	 }
	,{
		name:'? non-digits',
		in:'([0-9]+) non-digits',
		out:'\\D{$1}'
	 }
	,{
		name:'between ? and ? non-digits',
		in:'(between|from) ([0-9]+) (and|to) ([0-9]+) non-digits',
		out:'\\D{$2,$4}'
	 }
]});