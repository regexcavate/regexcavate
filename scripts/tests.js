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
'use strict';

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
		name:'a number',
		test:'(a|a single|one|1) number',
		replace:'[0-9]'
	 }
	,{
		name:'? numbers',
		test:'([0-9]+) numbers?',
		replace:'[0-9]{$1}'
	 }
	,{
		name:'between ? and ? numbers',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) numbers',
		replace:'[0-9]{$2,$4}'
	 }
	,{
		name:'any amount of numbers',
		test:'any( number of| amount of)? numbers',
		replace:'[0-9]+'
	 }
	,{
		name:'a letter',
		test:'(a|a single|one|1)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letter',
		replace:'[a-zA-Z]'
	 }
	,{
		name:'? letters',
		test:'([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		replace:'[a-zA-Z]{$1}'
	 }
	,{
		name:'between ? and ? letters',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		replace:'[a-zA-Z]{$2,$4}'
	 }
	,{
		name:'any amount of letters',
		test:'any( number of| amount of)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		replace:'[a-zA-Z]+'
	 }
	,{
		name:'a lowercase letter',
		test:'(a|a single|one|1) lowercase letter',
		replace:'[a-z]'
	 }
	,{
		name:'? lowercase letters',
		test:'([0-9]+) lowercase letters',
		replace:'[a-z]{$1}'
	 }
	,{
		name:'between ? and ? lowercase letters',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) lowercase letters',
		replace:'[a-z]{$2,$4}'
	 }
	,{
		name:'any amount of lowercase letters',
		test:'any( number of| amount of)? lowercase letters',
		replace:'[a-z]+'
	 }
	,{
		name:'a uppercase letter',
		test:'(a|a single|one|1) uppercase letter',
		replace:'[A-Z]'
	 }
	,{
		name:'? uppercase letters',
		test:'([0-9]+) uppercase letters',
		replace:'[A-Z]{$1}'
	 }
	,{
		name:'between ? and ? uppercase letters',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) uppercase letters',
		replace:'[A-Z]{$2,$4}'
	 }
	,{
		name:'any amount of uppercase letters',
		test:'any( number of| amount of)? uppercase letters',
		replace:'[A-Z]+'
	 }
	,{
		name:'any amount of numbers and/or letters',
		test:'any( number of| amount of)? numbers( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
		replace:'[a-zA-Z0-9]+'
	 }
	,{
		name:'any amount of numbers and/or lowercase letters',
		test:'any( number of| amount of)? numbers( &| and| or)? lowercase letters',
		replace:'[a-zA-Z0-9]+'
	 }
	,{
		name:'any amount of numbers and/or uppercase letters',
		test:'any( number of| amount of)? numbers( &| and| or)? uppercase letters',
		replace:'[a-zA-Z0-9]+'
	 }
	,{
		name:'a word',
		test:'(a|one|1) word',
		replace:'\\w'
	 }
	,{
		name:'? words',
		test:'([0-9]+) words',
		replace:'\\w{$1}'
	 }
	,{
		name:'between ? and ? words',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) words',
		replace:'\\w{$2,$4}'
	 }
	,{
		name:'a non-word',
		test:'(a|one|1) non-word',
		replace:'\\W'
	 }
	,{
		name:'? non-words',
		test:'([0-9]+) non-words',
		replace:'\\W{$1}'
	 }
	,{
		name:'between ? and ? non-words',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) non-words',
		replace:'\\W{$2,$4}'
	 }
	,{
		name:'a digit',
		test:'(a|one|1) digit',
		replace:'\\d'
	 }
	,{
		name:'? digits',
		test:'([0-9]+) digits',
		replace:'\\d{$1}'
	 }
	,{
		name:'between ? and ? digits',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) digits',
		replace:'\\d{$2,$4}'
	 }
	,{
		name:'a non-digit',
		test:'(a|one|1) non-digit',
		replace:'\\D'
	 }
	,{
		name:'? non-digits',
		test:'([0-9]+) non-digits',
		replace:'\\D{$1}'
	 }
	,{
		name:'between ? and ? non-digits',
		test:'(between|from) ([0-9]+) (and|to) ([0-9]+) non-digits',
		replace:'\\D{$2,$4}'
	 }
];