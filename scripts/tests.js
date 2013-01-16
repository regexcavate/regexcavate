/*
	This file is the meat & potatoes of this site - as it were.
	The intention is for this file to be 100% open source which means that
	adding tests and sending pull requests is absolutely encouraged!

	Having said that, there are a few rules:

	1. Commas at the beginning of the test. This is to make it easier to
		add new tests as we go along without worry of missing a comma.
	2. Make sure that any tests reflect the following syntax:
		 {
			name:'', // The name of this test. This will be used as a tooltip shown on hovering over the generated regex
			test:'', // The regex that determines whether this test is a hit
			replace:'' // The regex that the user was after.
		 }
 */
var tests = [
	 {
	 	name:'start of the line',
	 	test:'(from the )?(start|beginning) of (the )?line',
	 	replace:'^'
	 }
	,{
		name:'end of the line',
		test:'(to the )?end of (the )?line',
		replace:'$'
	 }
	,{
		name:'? numbers',
		test:'([0-9]+) numbers?',
		replace:'[0-9]{$1}'
	 }
	,{
		name:'any amount of numbers',
		test:'any( number of| amount of)? numbers',
		replace:'[0-9]+'
	 }
	,{
		name:'? characters',
		test:'([0-9]+) characters?',
		replace:'[a-zA-Z]{$1}'
	 }
	,{
		name:'any amount of characters',
		test:'any( number of| amount of)? characters',
		replace:'[a-zA-Z]+'
	 }
	,{
		name:'any amount of numbers and/or characters',
		test:'any( number of| amount of)? numbers( &| and| or)? characters',
		replace:'[a-zA-Z0-9]+'
	 }
	,{
		name:'new line',
		test:'(new( |\-)?line|enter)',
		replace:'(\\r)?\\n'
	 }
	,{
		name:'non white space',
		test:'no(n|t)? white ?space',
		replace:'\\S'
	 }
	,{
		name:'white space',
		test:'white ?space',
		replace:'\\s'
	 }
	,{
		name:'? words',
		test:'([0-9]+) words',
		replace:'\\w{$1}'
	 }
	,{
		name:'a word',
		test:'(a|one|1) word',
		replace:'\\w'
	 }
	,{
		name:'? letters',
		test:'([0-9]+) letters',
		replace:'[a-zA-Z]{$1}'
	 }
	,{
		name:'a letter',
		test:'(a|one|1) letter',
		replace:'[a-zA-Z]'
	 }
];