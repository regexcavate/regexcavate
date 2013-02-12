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
			input:'',   // The regex that determines whether what the user has input has a matching translation.
			output:''   // The regex that the user was after.
		}

	NOTE: There's no need to include any negations. To save duplicating too much stuff below, the negation works
			by checking if the user typed 'no'/'not' before any part of the query and stripping that out. If the
			regex returned by any of the individual translations below is within a range (ie: '[...]'), then `^`
			will automatically be prepended inside.
 */
define({
	list:[

		/*===== Misc =====*/
		 {
			name:'anything',
			input:'anything',
			output:'.*'
		 }

		/*===== Anchors =====*/
		,{
			name:'start of the line',
			input:'(start|begin(ing)?|(from the )?(start|beginning) of (the )?line)',
			output:'^'
		 }
		,{
			name:'end of the line',
			input:'(end|(to the )?end of (the )?line)',
			output:'$'
		 }

		/*===== Special Characters =====*/
		,{
			name:'new line',
			input:'(new( |\-)?line|enter)',
			output:'(\\r)?\\n'
		 }
		,{
			name:'non white space',
			input:'no(n|t)? white ?space',
			output:'\\S'
		 }
		,{
			name:'white space',
			input:'white ?space',
			output:'\\s'
		 }

		/*===== Numbers =====*/
		,{
			name:'a tab',
			input:'(a |a single |1 )?tab( key| character)?',
			output:'\\t'
		}
		,{
			name:'tabs',
			input:'((one|1) or more )?tabs',
			output:'\\t+'
		}
		,{
			name:'? tabs',
			input:'([0-9]+) tabs',
			output:'\\t{$1}'
		}
		,{
			name:'word boundary',
			input:'(a )?word boundary?',
			output:'\\b'
		}
		,{
			name:'non word boundary',
			input:'(a )?non(-| )?word boundary',
			output:'\\B'
		}
		,{
			name:'a number',
			input:'(a |a single |one |1 )?number',
			output:'[0-9]'
		 }
		,{
			name:'numbers',
			input:'((one|1) or more )?numbers',
			output:'[0-9]+'
		 }
		,{
			name:'any amount of numbers',
			input:'any( number of| amount of)? numbers',
			output:'[0-9]+'
		 }
		,{
			name:'? numbers',
			input:'([0-9]+) numbers?',
			output:'[0-9]{$1}'
		 }
		,{
			name:'? or more numbers',
			input:'([2-9]|[1-9][0-9]+) or more numbers?',
			output:'[0-9]{$1,}'
		 }
		,{
			name:'between ? and ? numbers',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) numbers',
			output:'[0-9]{$2,$4}'
		 }

		/*===== Letters =====*/
		,{
			name:'a letter',
			input:'(a|a single|one|1)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letter',
			output:'[a-zA-Z]'
		 }
		,{
			name:'letters',
			input:'((one |1 )or more )?(uppercase or lowercase |uppercase/lowercase |lowercase or uppercase |lowercase/uppercase )?letters',
			output:'[a-zA-Z]+'
		 }
		,{
			name:'any amount of letters',
			input:'any( number of| amount of)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			output:'[a-zA-Z]+'
		 }
		,{
			name:'? letters',
			input:'([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			output:'[a-zA-Z]{$1}'
		 }
		,{
			name:'? or more letters',
			input:'([0-9]|[0-9][0-9]+) or more( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			output:'[a-zA-Z]{$1,}'
		 }
		,{
			name:'between ? and ? letters',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			output:'[a-zA-Z]{$2,$4}'
		 }
		,{
			name:'a lowercase letter',
			input:'(a|a single|one|1) lowercase letter',
			output:'[a-z]'
		 }
		,{
			name:'lowercase letters',
			input:'(one or more )?lowercase letters',
			output:'[a-z]+'
		 }
		,{
			name:'any amount of lowercase letters',
			input:'any( number of| amount of)? lowercase letters',
			output:'[a-z]+'
		 }
		,{
			name:'? lowercase letters',
			input:'([0-9]+) lowercase letters',
			output:'[a-z]{$1}'
		 }
		,{
			name:'between ? and ? lowercase letters',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) lowercase letters',
			output:'[a-z]{$2,$4}'
		 }
		,{
			name:'an uppercase letter',
			input:'(a|an|a single|one|1) uppercase letter',
			output:'[A-Z]'
		 }
		,{
			name:'uppercase letters',
			input:'(one or more )?uppercase letters',
			output:'[A-Z]+'
		 }
		,{
			name:'any amount of uppercase letters',
			input:'any( number of| amount of)? uppercase letters',
			output:'[A-Z]+'
		 }
		,{
			name:'? uppercase letters',
			input:'([0-9]+) uppercase letters',
			output:'[A-Z]{$1}'
		 }
		,{
			name:'between ? and ? uppercase letters',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) uppercase letters',
			output:'[A-Z]{$2,$4}'
		 }

		/*===== Numbers & Letters =====*/
		,{
			name:'a number and/or letter',
			input:'(a |a single |1 )?number( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letter',
			output:'[a-zA-Z0-9]'
		 }
		,{
			name:'numbers and/or letters',
			input:'(one or more )?numbers( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			output:'[a-zA-Z0-9]+'
		 }
		,{
			name:'any amount of numbers and/or letters',
			input:'any( number of| amount of)? numbers( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			output:'[a-zA-Z0-9]+'
		 }
		,{
			name:'? or more numbers and/or letters',
			input:'([0-9]|[0-9][0-9]+) or more( numbers (and|or))?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters( (and|or) numbers)?',
			output:'[a-zA-Z0-9]{$1,}'
		 }
		,{
			name:'a number and/or lowercase letter',
			input:'(a |1 |a single )?number( &| and| or)? lowercase letter',
			output:'[a-z0-9]'
		 }
		,{
			name:'numbers and/or lowercase letters',
			input:'(one or more )?numbers( &| and| or)? lowercase letters',
			output:'[a-z0-9]+'
		 }
		,{
			name:'any amount of numbers and/or lowercase letters',
			input:'any( number of| amount of)? numbers( &| and| or)? lowercase letters',
			output:'[a-z0-9]+'
		 }
		,{
			name:'a number and/or uppercase letter',
			input:'(a |1 | a single )?number( &| and| or)? uppercase letter',
			output:'[A-Z0-9]'
		 }
		,{
			name:'numbers and/or uppercase letters',
			input:'(one or more )?numbers( &| and| or)? uppercase letters',
			output:'[A-Z0-9]+'
		 }
		,{
			name:'any amount of numbers and/or uppercase letters',
			input:'any( number of| amount of)? numbers( &| and| or)? uppercase letters',
			output:'[a-zA-Z0-9]+'
		 }
		,{
			name:'? numbers and/or lowercase/uppercase letters',
			input:'([0-9]+) numbers( &| and| or) (lowercase|uppercase)( &| and| or) (uppercase|lowercase) letters',
			output:'[a-zA-Z0-9]{$1}'
		}
		,{
			name:'? numbers and/or lowercase letters',
			input:'([0-9]+) numbers( &| and| or) lowercase letters',
			output:'[a-z0-9]{$1}'
		}
		,{
			name:'? numbers and/or uppercase letters',
			input:'([0-9]+) numbers( &| and| or) uppercase letters',
			output:'[A-Z0-9]{$1}'
		}
		,{
			name:'? (letters|numbers) and/or (numbers|letters)',
			input:'([0-9]+) (letters|numbers)( &| and| or) (numbers|letters)',
			output:'[a-zA-Z0-9]{$1}'
		}
		,{
			name:'? to ? (letters|numbers) and/or (numbers|letters)',
			input:'([0-9]+) to ([0-9]+) (letters|numbers)( &| and| or) (numbers|letters)',
			output:'[a-zA-Z0-9]{$1,$2}'
		}

		/*===== Words =====*/
		,{
			name:'a word',
			input:'(a |one |1 )?word',
			output:'\\w'
		 }
		,{
			name:'words',
			input:'(one or more )?words',
			output:'\\w+'
		 }
		,{
			name:'any amount of words',
			input:'any( number of| amount of)? words',
			output:'\\w+'
		 }
		,{
			name:'? words',
			input:'([0-9]+) words',
			output:'\\w{$1}'
		 }
		,{
			name:'between ? and ? words',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) words',
			output:'\\w{$2,$4}'
		 }

		/*===== Non Words =====*/
		,{
			name:'a non-word',
			input:'(a |one |1 )?non[- ]?word',
			output:'\\W'
		 }
		,{
			name:'non-words',
			input:'(one or more )?non[- ]?words',
			output:'\\W+'
		 }
		,{
			name:'any amount of non-words',
			input:'any( number of| amount of)? non[- ]?words',
			output:'\\W+'
		 }
		,{
			name:'? non-words',
			input:'([0-9]+) non[- ]?words',
			output:'\\W{$1}'
		 }
		,{
			name:'between ? and ? non-words',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) non[- ]?words',
			output:'\\W{$2,$4}'
		 }

		/*===== Digits =====*/
		,{
			name:'a digit',
			input:'(a|one|1) digit',
			output:'\\d'
		 }
		,{
			name:'digits',
			input:'(one or more )?digits',
			output:'\\d+'
		 }
		,{
			name:'any amount of digits',
			input:'any( number of| amount of)? digits',
			output:'\\d+'
		 }
		,{
			name:'? digits',
			input:'([0-9]+) digits',
			output:'\\d{$1}'
		 }
		,{
			name:'between ? and ? digits',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) digits',
			output:'\\d{$2,$4}'
		 }

		 /*===== Non Digits =====*/
		,{
			name:'a non-digit',
			input:'(a|one|1) non[- ]?digit',
			output:'\\D'
		 }
		,{
			name:'non-digits',
			input:'(one or more )?non[- ]?digits',
			output:'\\D+'
		 }
		,{
			name:'any amount of non-digits',
			input:'any( number of| amount of)? non[- ]?digits',
			output:'\\D+'
		 }
		,{
			name:'? non-digits',
			input:'([0-9]+) non[- ]?digits',
			output:'\\D{$1}'
		 }
		,{
			name:'between ? and ? non-digits',
			input:'(between |from )?([0-9]+) (and|to) ([0-9]+) non[- ]?digits',
			output:'\\D{$2,$4}'
		 }

		 /*===== Vowels =====*/
		 ,{
		 	name:'a vowel',
		 	input:'(a |one |1 )?vowel',
		 	output:'[aeiou]'
		  }
		 ,{
		 	name:'one or more vowels',
		 	input:'(one or more )?vowels',
		 	output:'[aeiou]+'
		  }
		 ,{
		 	name:'? vowels',
		 	input:'([0-9]+) vowels',
		 	output:'[aeiou]{$1}'
		  }
		 ,{
		 	name:'between 1 and ? vowels',
		 	input:'(between |from )?([0-9]+) (and|to) ([0-9]+) vowels',
		 	output:'[aeiou]{$2,$4}'
		  }
	],

	/*===== Shortcuts =====*/
	/*
	 * Shortcuts are automatically added to the "I'm Confused" panel
	 * using the name property so make sure the name is descriptive
	 */
	shortcuts: [
		 {
			name:'email address', // modified to include lowercase letters from http://www.regular-expressions.info/email.html
			input:'(an )?email( address)?',
			output:'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
		 }
		,{
		 	name:'UK postcode', // http://regexlib.com/REDetails.aspx?regexp_id=260
		 	input:'(uk|UK) post(al)? ?code',
		 	output:'([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)'
		 }
		,{
			name:'IP address', // http://regexlib.com/REDetails.aspx?regexp_id=32
			input:'(an )?(ip address|IP|^ip$)( address)?',
			output:'(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])'
		 }
		,{
			name:'phone number', // http://regexlib.com/REDetails.aspx?regexp_id=73
			input:'(tele)?(phone) num(ber)?',
			output:'(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*'
		 }
		,{
			name:'HTML tag', // http://www.regular-expressions.info/examples.html
			input:'(an? )?(HTML|html)( tag)?',
			output:'<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>(.*?)</\1>'
		 }
		,{
			name:'Hex colour', // http://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format#1636354
			input:'(a )?hex colou?r',
			output:'#(?:[0-9a-fA-F]{3}){1,2}'
		 }
		,{
			name:'a URL', // http://net.tutsplus.com/tutorials/other/8-regular-expressions-you-should-know/
			input:'(a )?(url|URL)',
			output:'(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?'
		 }
		,{
			name:'Visa credit', // http://www.regular-expressions.info/creditcard.html
			input:'(a )?(visa|VISA|Visa)( credit| credit(-| ))?(card)?',
			output:'4[0-9]{12}(?:[0-9]{3})?'
		}
		,{
			name:'Mastercard', // http://www.regular-expressions.info/creditcard.html
			input:'(a )?(mastercard|Mastercard)( credit| credit(-| ))?(card)?',
			output:'5[1-5][0-9]{14}'
		}
		,{
			name:'American Express',
			input:'(a )?(amex|Amex|AmEx|American Express|american express)( credit| credit(-| ))?(card)?',
			output:'3[47][0-9]{13}'
		}
	]
});
