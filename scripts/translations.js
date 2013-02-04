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
define({
	list:[
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
			in:'(a |a single |one |1 )?number',
			out:'[0-9]'
		 }
		,{
			name:'numbers',
			in:'(one or more )?numbers',
			out:'[0-9]+'
		 }
		,{
			name:'any amount of numbers',
			in:'any( number of| amount of)? numbers',
			out:'[0-9]+'
		 }
		,{
			name:'? numbers',
			in:'([0-9]+ ) numbers?',
			out:'[0-9]{$1}'
		 }
		,{
			name:'between ? and ? numbers',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) numbers',
			out:'[0-9]{$2,$4}'
		 }
		,{
			name:'a letter',
			in:'(a|a single|one|1)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letter',
			out:'[a-zA-Z]'
		 }
		,{
			name:'letters',
			in:'(one or more )?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			out:'[a-zA-Z]+'
		 }
		,{
			name:'any amount of letters',
			in:'any( number of| amount of)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			out:'[a-zA-Z]+'
		 }
		,{
			name:'? letters',
			in:'([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			out:'[a-zA-Z]{$1}'
		 }
		,{
			name:'between ? and ? letters',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+)( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			out:'[a-zA-Z]{$2,$4}'
		 }
		,{
			name:'a lowercase letter',
			in:'(a|a single|one|1) lowercase letter',
			out:'[a-z]'
		 }
		,{
			name:'lowercase letters',
			in:'(one or more )?lowercase letters',
			out:'[a-z]+'
		 }
		,{
			name:'any amount of lowercase letters',
			in:'any( number of| amount of)? lowercase letters',
			out:'[a-z]+'
		 }
		,{
			name:'? lowercase letters',
			in:'([0-9]+) lowercase letters',
			out:'[a-z]{$1}'
		 }
		,{
			name:'between ? and ? lowercase letters',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) lowercase letters',
			out:'[a-z]{$2,$4}'
		 }
		,{
			name:'an uppercase letter',
			in:'(a|an|a single|one|1) uppercase letter',
			out:'[A-Z]'
		 }
		,{
			name:'uppercase letters',
			in:'(one or more )?uppercase letters',
			out:'[A-Z]+'
		 }
		,{
			name:'any amount of uppercase letters',
			in:'any( number of| amount of)? uppercase letters',
			out:'[A-Z]+'
		 }
		,{
			name:'? uppercase letters',
			in:'([0-9]+) uppercase letters',
			out:'[A-Z]{$1}'
		 }
		,{
			name:'between ? and ? uppercase letters',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) uppercase letters',
			out:'[A-Z]{$2,$4}'
		 }
		,{
			name:'a number and/or letter',
			in:'(a )?number( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letter',
			out:'[a-zA-Z0-9]'
		 }
		,{
			name:'numbers and/or letters',
			in:'(one or more )?numbers( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			out:'[a-zA-Z0-9]+'
		 }
		,{
			name:'any amount of numbers and/or letters',
			in:'any( number of| amount of)? numbers( &| and| or)?( uppercase or lowercase| uppercase/lowercase| lowercase or uppercase| lowercase/uppercase)? letters',
			out:'[a-zA-Z0-9]+'
		 }
		,{
			name:'a number and/or lowercase letter',
			in:'(a )?number( &| and| or)? lowercase letter',
			out:'[a-z0-9]'
		 }
		,{
			name:'numbers and/or lowercase letters',
			in:'(one or more )?numbers( &| and| or)? lowercase letters',
			out:'[a-z0-9]+'
		 }
		,{
			name:'any amount of numbers and/or lowercase letters',
			in:'any( number of| amount of)? numbers( &| and| or)? lowercase letters',
			out:'[a-z0-9]+'
		 }
		,{
			name:'a number and/or uppercase letter',
			in:'(a )?number( &| and| or)? uppercase letter',
			out:'[A-Z0-9]'
		 }
		,{
			name:'numbers and/or uppercase letters',
			in:'(one or more )?numbers( &| and| or)? uppercase letters',
			out:'[A-Z0-9]+'
		 }
		,{
			name:'any amount of numbers and/or uppercase letters',
			in:'any( number of| amount of)? numbers( &| and| or)? uppercase letters',
			out:'[a-zA-Z0-9]+'
		 }
		,{
			name:'a (letter|number) and/or (number|letter)',
			in:'(a|one|1) (letter|number)( &| and| or) (number|letter)',
			out:'[a-zA-Z0-9]{2}'
		}
		,{
			name:'? (letters|numbers) and/or (numbers|letters)',
			in:'([0-9]+) (letters|numbers)( &| and| or) (numbers|letters)',
			out:'[a-zA-Z0-9]{$1}'
		}
		,{
			name:'? to ? (letters|numbers) and/or (numbers|letters)',
			in:'([0-9]+) to ([0-9]+) (letters|numbers)( &| and| or) (numbers|letters)',
			out:'[a-zA-Z0-9]{$1,$2}'
		}
		,{
			name:'a word',
			in:'(a|one|1) word',
			out:'\\w'
		 }
		,{
			name:'words',
			in:'(one or more )?words',
			out:'\\w+'
		 }
		,{
			name:'any amount of words',
			in:'any( number of| amount of)? words',
			out:'\\w+'
		 }
		,{
			name:'? words',
			in:'([0-9]+) words',
			out:'\\w{$1}'
		 }
		,{
			name:'between ? and ? words',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) words',
			out:'\\w{$2,$4}'
		 }
		,{
			name:'a non-word',
			in:'(a|one|1) non-?word',
			out:'\\W'
		 }
		,{
			name:'non-words',
			in:'(one or more )?non-?words',
			out:'\\W+'
		 }
		,{
			name:'any amount of non-words',
			in:'any( number of| amount of)? non-?words',
			out:'\\W+'
		 }
		,{
			name:'? non-words',
			in:'([0-9]+) non-?words',
			out:'\\W{$1}'
		 }
		,{
			name:'between ? and ? non-words',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) non-?words',
			out:'\\W{$2,$4}'
		 }
		,{
			name:'a digit',
			in:'(a|one|1) digit',
			out:'\\d'
		 }
		,{
			name:'digits',
			in:'(one or more )?digits',
			out:'\\d+'
		 }
		,{
			name:'any amount of digits',
			in:'any( number of| amount of)? digits',
			out:'\\d+'
		 }
		,{
			name:'? digits',
			in:'([0-9]+) digits',
			out:'\\d{$1}'
		 }
		,{
			name:'between ? and ? digits',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) digits',
			out:'\\d{$2,$4}'
		 }
		,{
			name:'a non-digit',
			in:'(a|one|1) non-?digit',
			out:'\\D'
		 }
		,{
			name:'non-digits',
			in:'(one or more )?non-?digits',
			out:'\\D+'
		 }
		,{
			name:'any amount of non-digits',
			in:'any( number of| amount of)? non-?digits',
			out:'\\D+'
		 }
		,{
			name:'? non-digits',
			in:'([0-9]+) non-?digits',
			out:'\\D{$1}'
		 }
		,{
			name:'between ? and ? non-digits',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) non-?digits',
			out:'\\D{$2,$4}'
		 }
	],
	shortcuts: [
		 {
			name:'email', // modified to include lowercase letters from http://www.regular-expressions.info/email.html
			in:'email',
			out:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
		 }
		,{
		 	name:'uk postcode', // http://regexlib.com/REDetails.aspx?regexp_id=260
		 	in:'(uk|UK) post(al)? ?code',
		 	out:'^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$'
		 }
		,{
			name:'a vowel',
			in:'(a |one |1 )?vowel',
			out:'[aeiou]'
		 }
		,{
			name:'vowels',
			in:'(one or more )?vowels',
			out:'[aeiou]+'
		 }
		,{
			name:'? vowels',
			in:'([0-9]+) vowels',
			out:'[aeiou]{$1}'
		 }
		,{
			name:'between ? and ? vowels',
			in:'(between |from )?([0-9]+) (and|to) ([0-9]+) vowels',
			out:'[aeiou]{$2,$4}'
		 }
		,{
			name:'IP address', // http://regexlib.com/REDetails.aspx?regexp_id=32
			in:'(ip address|IP|^ip$)( address)?',
			out:'^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$'
		 }
		,{
			name:'Phone Number', // http://regexlib.com/REDetails.aspx?regexp_id=73
			in:'([tT]ele)?([pP]hone) num(ber)?',
			out:'^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$'
		 }
		,{
			name:'HTML tag', // http://www.regular-expressions.info/examples.html
			in:'(HTML|html)( tag)?',
			out:'<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>(.*?)</\1>'
		 }
		,{
			name:'Hex colour', // http://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format#1636354
			in:'[hH]ex [cC]olou?r',
			out:'^#(?:[0-9a-fA-F]{3}){1,2}$'
		 }
		,{
			name:'URL', // http://net.tutsplus.com/tutorials/other/8-regular-expressions-you-should-know/
			in:'(url|URL)',
			out:'^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$'
		 }
	]
});
