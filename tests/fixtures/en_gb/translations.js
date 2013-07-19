// This should have key value pairs in the form of:
//	"expected regex outcome": ["phrase 1", "phrase 2"] (don't forget to escape slashes.)
window.translationTests = {
	 ".*": [
		 "anything"
		, "ALL THE THINGS"
	 ]
	,"^": [
		 "start"
		,"begin"
		,"beginning"
		,"start of line"
		,"start of string"
		,"start of the line"
		,"start of the string"
		,"start of a line"
		,"start of a string"
		,"beginning of line"
		,"beginning of string"
		,"beginning of the line"
		,"beginning of the string"
		,"beginning of a line"
		,"beginning of a string"
		,"from the start"
		,"from the start of line"
		,"from the start of string"
		,"from the start of the line"
		,"from the start of the string"
		,"from the start of a line"
		,"from the start of a string"
		,"from the beginning"
		,"from the beginning of line"
		,"from the beginning of string"
		,"from the beginning of the line"
		,"from the beginning of the string"
		,"from the beginning of a line"
		,"from the beginning of a string"
		,"at the start"
		,"at the start of line"
		,"at the start of string"
		,"at the start of the line"
		,"at the start of the string"
		,"at the start of a line"
		,"at the start of a string"
		,"at the beginning"
		,"at the beginning of line"
		,"at the beginning of string"
		,"at the beginning of the line"
		,"at the beginning of the string"
		,"at the beginning of a line"
		,"at the beginning of a string"
	 ]
	,"$": [
		 "eol"
		,"end"
		,"end of line"
		,"end of the line"
		,"end of a line"
		,"end of string"
		,"end of the string"
		,"end of a string"
		,"at eol"
		,"at the eol"
		,"at end"
		,"at the end"
		,"at the end of the line"
		,"at the end of the string"
		,"at the end of a line"
		,"at the end of a string"
	 ]

	 // new line
	,"(\\r?\\n)": [
		 "enter"
		,"new line"
		,"newline"
		,"new-line"
		,"a single enter"
		,"a single new line"
		,"a single newline"
		,"a single new-line"
		,"one enter"
		,"one new line"
		,"one newline"
		,"one new-line"
		,"1 enter"
		,"1 new line"
		,"1 newline"
		,"1 new-line"
		,"an enter"
		,"a new line"
		,"a newline"
		,"a new-line"
		,"any enter"
		,"any new line"
		,"any newline"
		,"any new-line"
	 ]
	,"(\\r?\\n)*": [
		 "zero or more enters"
		,"zero or more new lines"
		,"zero or more newlines"
		,"zero or more new-lines"
		,"0 or more enters"
		,"0 or more new lines"
		,"0 or more newlines"
		,"0 or more new-lines"
		,"none or more enters"
		,"none or more new lines"
		,"none or more newlines"
		,"none or more new-lines"
	 ]
	,"(\\r?\\n)+": [
		 "enters"
		,"new lines"
		,"newlines"
		,"new-lines"
		,"one or more enters"
		,"one or more new lines"
		,"one or more newlines"
		,"one or more new-lines"
		,"1 or more enters"
		,"1 or more new lines"
		,"1 or more newlines"
		,"1 or more new-lines"
		,"any enters"
		,"any new lines"
		,"any newlines"
		,"any new-lines"
		,"any number of enters"
		,"any number of new lines"
		,"any number of newlines"
		,"any number of new-lines"
		,"any amount of enters"
		,"any amount of new lines"
		,"any amount of newlines"
		,"any amount of new-lines"
	 ]
	,"(\\r?\\n){14}": [
		 "14 enters"
		,"14 new lines"
		,"14 newlines"
		,"14 new-lines"
	 ]
	,"(\\r?\\n){14,}": [
		 "14 or more enters"
		,"14 or more new lines"
		,"14 or more newlines"
		,"14 or more new-lines"
		,"at least 14 or more enters"
		,"at least 14 or more new lines"
		,"at least 14 or more newlines"
		,"at least 14 or more new-lines"
	 ]
	,"(\\r?\\n){14,20}": [
		 "between 14 and 20 enters"
		,"between 14 and 20 new lines"
		,"between 14 and 20 newlines"
		,"between 14 and 20 new-lines"
		,"from 14 to 20 enters"
		,"from 14 to 20 new lines"
		,"from 14 to 20 newlines"
		,"from 14 to 20 new-lines"
	 ]

	 // White space
	,"\\s": [
		 "whitespace"
		,"white space"
		,"white-space"
		,"whitespace character"
		,"white space character"
		,"white-space character"
		,"a single whitespace"
		,"a single white space"
		,"a single white-space"
		,"a single whitespace character"
		,"a single white space character"
		,"a single white-space character"
		,"one whitespace"
		,"one white space"
		,"one white-space"
		,"one whitespace character"
		,"one white space character"
		,"one white-space character"
		,"1 whitespace"
		,"1 white space"
		,"1 white-space"
		,"1 whitespace character"
		,"1 white space character"
		,"1 white-space character"
		,"a whitespace"
		,"a white space"
		,"a white-space"
		,"a whitespace character"
		,"a white space character"
		,"a white-space character"
		,"any whitespace"
		,"any white space"
		,"any white-space"
		,"any whitespace character"
		,"any white space character"
		,"any white-space character"
	 ]
	,"\\s*": [
		 "zero or more whitespaces"
		,"zero or more white spaces"
		,"zero or more white-spaces"
		,"zero or more whitespace characters"
		,"zero or more white space characters"
		,"zero or more white-space characters"
		,"0 or more whitespaces"
		,"0 or more white spaces"
		,"0 or more white-spaces"
		,"0 or more whitespace characters"
		,"0 or more white space characters"
		,"0 or more white-space characters"
		,"none or more whitespaces"
		,"none or more white spaces"
		,"none or more white-spaces"
		,"none or more whitespace characters"
		,"none or more white space characters"
		,"none or more white-space characters"
	 ]
	,"\\s+": [
		 "one or more whitespaces"
		,"one or more white spaces"
		,"one or more white-spaces"
		,"one or more whitespace characters"
		,"one or more white space characters"
		,"one or more white-space characters"
		,"1 or more whitespaces"
		,"1 or more white spaces"
		,"1 or more white-spaces"
		,"1 or more whitespace characters"
		,"1 or more white space characters"
		,"1 or more white-space characters"
		,"any whitespaces"
		,"any white spaces"
		,"any white-spaces"
		,"any whitespace characters"
		,"any white space characters"
		,"any white-space characters"
		,"any number of whitespaces"
		,"any number of white spaces"
		,"any number of white-spaces"
		,"any number of whitespace characters"
		,"any number of white space characters"
		,"any number of white-space characters"
		,"any amount of whitespaces"
		,"any amount of white spaces"
		,"any amount of white-spaces"
		,"any amount of whitespace characters"
		,"any amount of white space characters"
		,"any amount of white-space characters"
	 ]
	,"\\s{14}": [
		 "14 whitespaces"
		,"14 white spaces"
		,"14 white-spaces"
		,"14 whitespace characters"
		,"14 white space characters"
		,"14 white-space characters"
	 ]
	,"\\s{14,}": [
		 "14 or more whitespaces"
		,"14 or more white spaces"
		,"14 or more white-spaces"
		,"14 or more whitespace characters"
		,"14 or more white space characters"
		,"14 or more white-space characters"
		,"at least 14 or more whitespaces"
		,"at least 14 or more white spaces"
		,"at least 14 or more white-spaces"
		,"at least 14 or more whitespace characters"
		,"at least 14 or more white space characters"
		,"at least 14 or more white-space characters"
	 ]
	,"\\s{14,20}": [
		 "between 14 and 20 whitespaces"
		,"between 14 and 20 white spaces"
		,"between 14 and 20 white-spaces"
		,"between 14 and 20 whitespace characters"
		,"between 14 and 20 white space characters"
		,"between 14 and 20 white-space characters"
		,"from 14 to 20 whitespaces"
		,"from 14 to 20 white spaces"
		,"from 14 to 20 white-spaces"
		,"from 14 to 20 whitespace characters"
		,"from 14 to 20 white space characters"
		,"from 14 to 20 white-space characters"
	 ]

	 // Non white space
	,"\\S": [
		 "non whitespace"
		,"non white space"
		,"non white-space"
		,"non whitespace character"
		,"non white space character"
		,"non white-space character"
		,"not whitespace"
		,"not white space"
		,"not white-space"
		,"not whitespace character"
		,"not white space character"
		,"not white-space character"
		,"a single non whitespace"
		,"a single non white space"
		,"a single non white-space"
		,"a single non whitespace character"
		,"a single non white space character"
		,"a single non white-space character"
		,"one non whitespace"
		,"one non white space"
		,"one non white-space"
		,"one non whitespace character"
		,"one non white space character"
		,"one non white-space character"
		,"1 non whitespace"
		,"1 non white space"
		,"1 non white-space"
		,"1 non whitespace character"
		,"1 non white space character"
		,"1 non white-space character"
		,"a non whitespace"
		,"a non white space"
		,"a non white-space"
		,"a non whitespace character"
		,"a non white space character"
		,"a non white-space character"
		,"any non whitespace"
		,"any non white space"
		,"any non white-space"
		,"any non whitespace character"
		,"any non white space character"
		,"any non white-space character"
	 ]
	,"\\S*": [
		 "zero or more non whitespaces"
		,"zero or more non white spaces"
		,"zero or more non white-spaces"
		,"zero or more non whitespace characters"
		,"zero or more non white space characters"
		,"zero or more non white-space characters"
		,"0 or more non whitespaces"
		,"0 or more non white spaces"
		,"0 or more non white-spaces"
		,"0 or more non whitespace characters"
		,"0 or more non white space characters"
		,"0 or more non white-space characters"
		,"none or more non whitespaces"
		,"none or more non white spaces"
		,"none or more non white-spaces"
		,"none or more non whitespace characters"
		,"none or more non white space characters"
		,"none or more non white-space characters"
	 ]
	,"\\S+": [
		 "one or more non whitespaces"
		,"one or more non white spaces"
		,"one or more non white-spaces"
		,"one or more non whitespace characters"
		,"one or more non white space characters"
		,"one or more non white-space characters"
		,"1 or more non whitespaces"
		,"1 or more non white spaces"
		,"1 or more non white-spaces"
		,"1 or more non whitespace characters"
		,"1 or more non white space characters"
		,"1 or more non white-space characters"
		,"any non whitespaces"
		,"any non white spaces"
		,"any non white-spaces"
		,"any non whitespace characters"
		,"any non white space characters"
		,"any non white-space characters"
	 ]
	,"\\S{14}": [
		 "14 non whitespaces"
		,"14 non white spaces"
		,"14 non white-spaces"
		,"14 non whitespace characters"
		,"14 non white space characters"
		,"14 non white-space characters"
	 ]
	,"\\S{14,}": [
		 "14 or more non whitespaces"
		,"14 or more non white spaces"
		,"14 or more non white-spaces"
		,"14 or more non whitespace characters"
		,"14 or more non white space characters"
		,"14 or more non white-space characters"
		,"at least 14 or more non whitespaces"
		,"at least 14 or more non white spaces"
		,"at least 14 or more non white-spaces"
		,"at least 14 or more non whitespace characters"
		,"at least 14 or more non white space characters"
		,"at least 14 or more non white-space characters"
	 ]
	,"\\S{14,20}": [
		 "between 14 and 20 non whitespaces"
		,"between 14 and 20 non white spaces"
		,"between 14 and 20 non white-spaces"
		,"between 14 and 20 non whitespace characters"
		,"between 14 and 20 non white space characters"
		,"between 14 and 20 non white-space characters"
		,"from 14 to 20 non whitespaces"
		,"from 14 to 20 non white spaces"
		,"from 14 to 20 non white-spaces"
		,"from 14 to 20 non whitespace characters"
		,"from 14 to 20 non white space characters"
		,"from 14 to 20 non white-space characters"
	 ]

	 // Tabs
	,"\\t": [
		 "tab"
		,"tab key"
		,"tab character"
		,"a single tab"
		,"a single tab key"
		,"a single tab character"
		,"one tab"
		,"one tab key"
		,"one tab character"
		,"1 tab"
		,"1 tab key"
		,"1 tab character"
		,"a tab"
		,"a tab key"
		,"a tab character"
		,"any tab"
		,"any tab key"
		,"any tab character"
	 ]
	,"\\t*": [
		 "zero or more tabs"
		,"zero or more tab keys"
		,"zero or more tab characters"
		,"0 or more tabs"
		,"0 or more tab keys"
		,"0 or more tab characters"
		,"none or more tabs"
		,"none or more tab keys"
		,"none or more tab characters"
	 ]
	,"\\t+": [
		 "tabs"
		,"tab keys"
		,"tab characters"
		,"one or more tabs"
		,"one or more tab keys"
		,"one or more tab characters"
		,"1 or more tabs"
		,"1 or more tab keys"
		,"1 or more tab characters"
		,"any tabs"
		,"any tab keys"
		,"any tab characters"
		,"any number of tabs"
		,"any number of tab keys"
		,"any number of tab characters"
		,"any amount of tabs"
		,"any amount of tab keys"
		,"any amount of tab characters"
	 ]
	,"\\t{14}": [
		 "14 tabs"
		,"14 tab keys"
		,"14 tab characters"
	 ]
	,"\\t{14,}": [
		 "14 or more tabs"
		,"14 or more tab keys"
		,"14 or more tab characters"
		,"at least 14 tabs"
		,"at least 14 tab keys"
		,"at least 14 tab characters"
		,"at least 14 or more tabs"
		,"at least 14 or more tab keys"
		,"at least 14 or more tab characters"
	 ]
	,"\\t{14,20}": [
		 "14 to 20 tabs"
		,"14 to 20 tab keys"
		,"14 to 20 tab characters"
		,"from 14 to 20 tabs"
		,"from 14 to 20 tab keys"
		,"from 14 to 20 tab characters"
		,"between 14 and 20 tabs"
		,"between 14 and 20 tab keys"
		,"between 14 and 20 tab characters"
	 ]

	 // Word Boundaries
	,"\\b": [
		 "word boundary"
		,"a single word boundary"
		,"one word boundary"
		,"1 word boundary"
		,"a word boundary"
		,"any word boundary"
	 ]
	,"\\B": [
		 "non-word boundary"
		,"non word boundary"
		,"not word boundary"
		,"a single non-word boundary"
		,"a single non word boundary"
		,"a single not word boundary"
		,"one non-word boundary"
		,"one non word boundary"
		,"one not word boundary"
		,"1 non-word boundary"
		,"1 non word boundary"
		,"1 not word boundary"
		,"a non-word boundary"
		,"a non word boundary"
		,"a not word boundary"
		,"any non-word boundary"
		,"any non word boundary"
		,"any not word boundary"
	 ]

	 // Numbers
	,"[0-9]": [
		 "number"
		,"a single number"
		,"one number"
		,"1 number"
		,"a number"
		,"any number"
	 ]
	,"[0-9]*": [
		 "zero or more numbers"
		,"0 or more numbers"
		,"none or more numbers"
	 ]
	,"[0-9]+": [
		 "numbers"
		,"one or more numbers"
		,"1 or more numbers"
		,"any numbers"
		,"any number of numbers"
		,"any amount of numbers"
	 ]
	,"[0-9]{14}": [
		 "14 numbers"
	 ]
	,"[0-9]{14,}": [
		 "14 or more numbers"
		,"at least 14 numbers"
		,"at least 14 or more numbers"
	 ]
	,"[0-9]{14,20}": [
		 "14 to 20 numbers"
		,"from 14 to 20 numbers"
		,"between 14 and 20 numbers"
	 ]

	  // Word
	 ,"\\S+": [
	 	 "word"
	 	,"a word"
	 	,"any word"
	 	,"a single word"
	 	,"one word"
	 	,"1 word"
	  ]
	 ,"(\\S+\\s??\\b)*": [
	 	 "zero or more words"
	 	,"zero or more of words"
	 	,"0 or more words"
	 	,"0 or more of words"
	 	,"none or more words"
	 	,"none or more of words"
	  ]
	 ,"(\\S+\\s??\\b)+": [
	 	 "one or more words"
	 	,"1 or more words"
	 	,"any words"
	 	,"any number of words"
	 	,"any amount of words"
	  ]
	 ,"(\\S+\\s??\\b){14}": [
	 	 "14 words"
	  ]
	 ,"(\\S+\\s??\\b){14,}": [
	 	 "14 or more words"
	 	,"at least 14 words"
	 	,"at least 14 or more words"
	  ]
	 ,"(\\S+\\s??\\b){14,20}": [
	 	 "between 14 and 20 words"
	 	,"from 14 to 20 words"
	 	,"14 to 20 words"
	  ]

	 // Letters
	,"[a-zA-Z]": [
		 "letter"
		,"uppercase & lowercase letter"
		,"upper-case & lower-case letter"
		,"uppercase and lowercase letter"
		,"upper-case and lower-case letter"
		,"uppercase / lowercase letter"
		,"upper-case / lower-case letter"
		,"uppercase or lowercase letter"
		,"upper-case or lower-case letter"
		,"lowercase & uppercase letter"
		,"lower-case & upper-case letter"
		,"lowercase and uppercase letter"
		,"lower-case and upper-case letter"
		,"lowercase / uppercase letter"
		,"lower-case / upper-case letter"
		,"lowercase or uppercase letter"
		,"lower-case or upper-case letter"
		,"a single letter"
		,"a single uppercase & lowercase letter"
		,"a single upper-case & lower-case letter"
		,"a single uppercase and lowercase letter"
		,"a single upper-case and lower-case letter"
		,"a single uppercase / lowercase letter"
		,"a single upper-case / lower-case letter"
		,"a single uppercase or lowercase letter"
		,"a single upper-case or lower-case letter"
		,"a single lowercase & uppercase letter"
		,"a single lower-case & upper-case letter"
		,"a single lowercase and uppercase letter"
		,"a single lower-case and upper-case letter"
		,"a single lowercase / uppercase letter"
		,"a single lower-case / upper-case letter"
		,"a single lowercase or uppercase letter"
		,"a single lower-case or upper-case letter"
		,"one letter"
		,"one uppercase & lowercase letter"
		,"one upper-case & lower-case letter"
		,"one uppercase and lowercase letter"
		,"one upper-case and lower-case letter"
		,"one uppercase / lowercase letter"
		,"one upper-case / lower-case letter"
		,"one uppercase or lowercase letter"
		,"one upper-case or lower-case letter"
		,"one lowercase & uppercase letter"
		,"one lower-case & upper-case letter"
		,"one lowercase and uppercase letter"
		,"one lower-case and upper-case letter"
		,"one lowercase / uppercase letter"
		,"one lower-case / upper-case letter"
		,"one lowercase or uppercase letter"
		,"one lower-case or upper-case letter"
		,"1 letter"
		,"1 uppercase & lowercase letter"
		,"1 upper-case & lower-case letter"
		,"1 uppercase and lowercase letter"
		,"1 upper-case and lower-case letter"
		,"1 uppercase / lowercase letter"
		,"1 upper-case / lower-case letter"
		,"1 uppercase or lowercase letter"
		,"1 upper-case or lower-case letter"
		,"1 lowercase & uppercase letter"
		,"1 lower-case & upper-case letter"
		,"1 lowercase and uppercase letter"
		,"1 lower-case and upper-case letter"
		,"1 lowercase / uppercase letter"
		,"1 lower-case / upper-case letter"
		,"1 lowercase or uppercase letter"
		,"1 lower-case or upper-case letter"
		,"a letter"
		,"a uppercase & lowercase letter"
		,"a upper-case & lower-case letter"
		,"a uppercase and lowercase letter"
		,"a upper-case and lower-case letter"
		,"a uppercase / lowercase letter"
		,"a upper-case / lower-case letter"
		,"a uppercase or lowercase letter"
		,"a upper-case or lower-case letter"
		,"a lowercase & uppercase letter"
		,"a lower-case & upper-case letter"
		,"a lowercase and uppercase letter"
		,"a lower-case and upper-case letter"
		,"a lowercase / uppercase letter"
		,"a lower-case / upper-case letter"
		,"a lowercase or uppercase letter"
		,"a lower-case or upper-case letter"
		,"any letter"
		,"any uppercase & lowercase letter"
		,"any upper-case & lower-case letter"
		,"any uppercase and lowercase letter"
		,"any upper-case and lower-case letter"
		,"any uppercase / lowercase letter"
		,"any upper-case / lower-case letter"
		,"any uppercase or lowercase letter"
		,"any upper-case or lower-case letter"
		,"any lowercase & uppercase letter"
		,"any lower-case & upper-case letter"
		,"any lowercase and uppercase letter"
		,"any lower-case and upper-case letter"
		,"any lowercase / uppercase letter"
		,"any lower-case / upper-case letter"
		,"any lowercase or uppercase letter"
		,"any lower-case or upper-case letter"
	 ]
	,"[a-zA-Z]*": [
		  "zero or more letters"
		 ,"zero or more uppercase & lowercase letters"
		 ,"zero or more upper-case & lower-case letters"
		 ,"zero or more uppercase and lowercase letters"
		 ,"zero or more upper-case and lower-case letters"
		 ,"zero or more uppercase / lowercase letters"
		 ,"zero or more upper-case / lower-case letters"
		 ,"zero or more uppercase or lowercase letters"
		 ,"zero or more upper-case or lower-case letters"
		 ,"zero or more lowercase & uppercase letters"
		 ,"zero or more lower-case & upper-case letters"
		 ,"zero or more lowercase and uppercase letters"
		 ,"zero or more lower-case and upper-case letters"
		 ,"zero or more lowercase / uppercase letters"
		 ,"zero or more lower-case / upper-case letters"
		 ,"zero or more lowercase or uppercase letters"
		 ,"zero or more lower-case or upper-case letters"
		 ,"0 or more letters"
		 ,"0 or more uppercase & lowercase letters"
		 ,"0 or more upper-case & lower-case letters"
		 ,"0 or more uppercase and lowercase letters"
		 ,"0 or more upper-case and lower-case letters"
		 ,"0 or more uppercase / lowercase letters"
		 ,"0 or more upper-case / lower-case letters"
		 ,"0 or more uppercase or lowercase letters"
		 ,"0 or more upper-case or lower-case letters"
		 ,"0 or more lowercase & uppercase letters"
		 ,"0 or more lower-case & upper-case letters"
		 ,"0 or more lowercase and uppercase letters"
		 ,"0 or more lower-case and upper-case letters"
		 ,"0 or more lowercase / uppercase letters"
		 ,"0 or more lower-case / upper-case letters"
		 ,"0 or more lowercase or uppercase letters"
		 ,"0 or more lower-case or upper-case letters"
		 ,"none or more letters"
		 ,"none or more uppercase & lowercase letters"
		 ,"none or more upper-case & lower-case letters"
		 ,"none or more uppercase and lowercase letters"
		 ,"none or more upper-case and lower-case letters"
		 ,"none or more uppercase / lowercase letters"
		 ,"none or more upper-case / lower-case letters"
		 ,"none or more uppercase or lowercase letters"
		 ,"none or more upper-case or lower-case letters"
		 ,"none or more lowercase & uppercase letters"
		 ,"none or more lower-case & upper-case letters"
		 ,"none or more lowercase and uppercase letters"
		 ,"none or more lower-case and upper-case letters"
		 ,"none or more lowercase / uppercase letters"
		 ,"none or more lower-case / upper-case letters"
		 ,"none or more lowercase or uppercase letters"
		 ,"none or more lower-case or upper-case letters"
	 ]
	,"[a-zA-Z]+": [
		"letters"
		,"uppercase & lowercase letters"
		,"upper-case & lower-case letters"
		,"uppercase and lowercase letters"
		,"upper-case and lower-case letters"
		,"uppercase / lowercase letters"
		,"upper-case / lower-case letters"
		,"uppercase or lowercase letters"
		,"upper-case or lower-case letters"
		,"lowercase & uppercase letters"
		,"lower-case & upper-case letters"
		,"lowercase and uppercase letters"
		,"lower-case and upper-case letters"
		,"lowercase / uppercase letters"
		,"lower-case / upper-case letters"
		,"lowercase or uppercase letters"
		,"lower-case or upper-case letters"
		,"one or more letters"
		,"one or more uppercase & lowercase letters"
		,"one or more upper-case & lower-case letters"
		,"one or more uppercase and lowercase letters"
		,"one or more upper-case and lower-case letters"
		,"one or more uppercase / lowercase letters"
		,"one or more upper-case / lower-case letters"
		,"one or more uppercase or lowercase letters"
		,"one or more upper-case or lower-case letters"
		,"one or more lowercase & uppercase letters"
		,"one or more lower-case & upper-case letters"
		,"one or more lowercase and uppercase letters"
		,"one or more lower-case and upper-case letters"
		,"one or more lowercase / uppercase letters"
		,"one or more lower-case / upper-case letters"
		,"one or more lowercase or uppercase letters"
		,"one or more lower-case or upper-case letters"
		,"1 or more letters"
		,"1 or more uppercase & lowercase letters"
		,"1 or more upper-case & lower-case letters"
		,"1 or more uppercase and lowercase letters"
		,"1 or more upper-case and lower-case letters"
		,"1 or more uppercase / lowercase letters"
		,"1 or more upper-case / lower-case letters"
		,"1 or more uppercase or lowercase letters"
		,"1 or more upper-case or lower-case letters"
		,"1 or more lowercase & uppercase letters"
		,"1 or more lower-case & upper-case letters"
		,"1 or more lowercase and uppercase letters"
		,"1 or more lower-case and upper-case letters"
		,"1 or more lowercase / uppercase letters"
		,"1 or more lower-case / upper-case letters"
		,"1 or more lowercase or uppercase letters"
		,"1 or more lower-case or upper-case letters"
		,"any letters"
		,"any uppercase & lowercase letters"
		,"any upper-case & lower-case letters"
		,"any uppercase and lowercase letters"
		,"any upper-case and lower-case letters"
		,"any uppercase / lowercase letters"
		,"any upper-case / lower-case letters"
		,"any uppercase or lowercase letters"
		,"any upper-case or lower-case letters"
		,"any lowercase & uppercase letters"
		,"any lower-case & upper-case letters"
		,"any lowercase and uppercase letters"
		,"any lower-case and upper-case letters"
		,"any lowercase / uppercase letters"
		,"any lower-case / upper-case letters"
		,"any lowercase or uppercase letters"
		,"any lower-case or upper-case letters"
		,"any number of letters"
		,"any number of uppercase & lowercase letters"
		,"any number of upper-case & lower-case letters"
		,"any number of uppercase and lowercase letters"
		,"any number of upper-case and lower-case letters"
		,"any number of uppercase / lowercase letters"
		,"any number of upper-case / lower-case letters"
		,"any number of uppercase or lowercase letters"
		,"any number of upper-case or lower-case letters"
		,"any number of lowercase & uppercase letters"
		,"any number of lower-case & upper-case letters"
		,"any number of lowercase and uppercase letters"
		,"any number of lower-case and upper-case letters"
		,"any number of lowercase / uppercase letters"
		,"any number of lower-case / upper-case letters"
		,"any number of lowercase or uppercase letters"
		,"any number of lower-case or upper-case letters"
		,"any amount of letters"
		,"any amount of uppercase & lowercase letters"
		,"any amount of upper-case & lower-case letters"
		,"any amount of uppercase and lowercase letters"
		,"any amount of upper-case and lower-case letters"
		,"any amount of uppercase / lowercase letters"
		,"any amount of upper-case / lower-case letters"
		,"any amount of uppercase or lowercase letters"
		,"any amount of upper-case or lower-case letters"
		,"any amount of lowercase & uppercase letters"
		,"any amount of lower-case & upper-case letters"
		,"any amount of lowercase and uppercase letters"
		,"any amount of lower-case and upper-case letters"
		,"any amount of lowercase / uppercase letters"
		,"any amount of lower-case / upper-case letters"
		,"any amount of lowercase or uppercase letters"
		,"any amount of lower-case or upper-case letters"
	 ]
	,"[a-zA-Z]{14}": [
		 "14 letters"
 		,"14 uppercase & lowercase letters"
 		,"14 upper-case & lower-case letters"
 		,"14 uppercase and lowercase letters"
 		,"14 upper-case and lower-case letters"
 		,"14 uppercase / lowercase letters"
 		,"14 upper-case / lower-case letters"
 		,"14 uppercase or lowercase letters"
 		,"14 upper-case or lower-case letters"
 		,"14 lowercase & uppercase letters"
 		,"14 lower-case & upper-case letters"
 		,"14 lowercase and uppercase letters"
 		,"14 lower-case and upper-case letters"
 		,"14 lowercase / uppercase letters"
 		,"14 lower-case / upper-case letters"
 		,"14 lowercase or uppercase letters"
 		,"14 lower-case or upper-case letters"
	 ]
	,"[a-zA-Z]{14,}": [
		 "14 or more letters"
 		,"14 or more uppercase & lowercase letters"
 		,"14 or more upper-case & lower-case letters"
 		,"14 or more uppercase and lowercase letters"
 		,"14 or more upper-case and lower-case letters"
 		,"14 or more uppercase / lowercase letters"
 		,"14 or more upper-case / lower-case letters"
 		,"14 or more uppercase or lowercase letters"
 		,"14 or more upper-case or lower-case letters"
 		,"14 or more lowercase & uppercase letters"
 		,"14 or more lower-case & upper-case letters"
 		,"14 or more lowercase and uppercase letters"
 		,"14 or more lower-case and upper-case letters"
 		,"14 or more lowercase / uppercase letters"
 		,"14 or more lower-case / upper-case letters"
 		,"14 or more lowercase or uppercase letters"
 		,"14 or more lower-case or upper-case letters"
		,"at least 14 letters"
 		,"at least 14 uppercase & lowercase letters"
 		,"at least 14 upper-case & lower-case letters"
 		,"at least 14 uppercase and lowercase letters"
 		,"at least 14 upper-case and lower-case letters"
 		,"at least 14 uppercase / lowercase letters"
 		,"at least 14 upper-case / lower-case letters"
 		,"at least 14 uppercase or lowercase letters"
 		,"at least 14 upper-case or lower-case letters"
 		,"at least 14 lowercase & uppercase letters"
 		,"at least 14 lower-case & upper-case letters"
 		,"at least 14 lowercase and uppercase letters"
 		,"at least 14 lower-case and upper-case letters"
 		,"at least 14 lowercase / uppercase letters"
 		,"at least 14 lower-case / upper-case letters"
 		,"at least 14 lowercase or uppercase letters"
 		,"at least 14 lower-case or upper-case letters"
		,"at least 14 or more letters"
 		,"at least 14 or more uppercase & lowercase letters"
 		,"at least 14 or more upper-case & lower-case letters"
 		,"at least 14 or more uppercase and lowercase letters"
 		,"at least 14 or more upper-case and lower-case letters"
 		,"at least 14 or more uppercase / lowercase letters"
 		,"at least 14 or more upper-case / lower-case letters"
 		,"at least 14 or more uppercase or lowercase letters"
 		,"at least 14 or more upper-case or lower-case letters"
 		,"at least 14 or more lowercase & uppercase letters"
 		,"at least 14 or more lower-case & upper-case letters"
 		,"at least 14 or more lowercase and uppercase letters"
 		,"at least 14 or more lower-case and upper-case letters"
 		,"at least 14 or more lowercase / uppercase letters"
 		,"at least 14 or more lower-case / upper-case letters"
 		,"at least 14 or more lowercase or uppercase letters"
 		,"at least 14 or more lower-case or upper-case letters"
	 ]
	,"[a-zA-Z]{14,20}": [
		 "14 to 20 letters"
		,"14 to 20 uppercase & lowercase letters"
		,"14 to 20 upper-case & lower-case letters"
		,"14 to 20 uppercase and lowercase letters"
		,"14 to 20 upper-case and lower-case letters"
		,"14 to 20 uppercase / lowercase letters"
		,"14 to 20 upper-case / lower-case letters"
		,"14 to 20 uppercase or lowercase letters"
		,"14 to 20 upper-case or lower-case letters"
		,"14 to 20 lowercase & uppercase letters"
		,"14 to 20 lower-case & upper-case letters"
		,"14 to 20 lowercase and uppercase letters"
		,"14 to 20 lower-case and upper-case letters"
		,"14 to 20 lowercase / uppercase letters"
		,"14 to 20 lower-case / upper-case letters"
		,"14 to 20 lowercase or uppercase letters"
		,"14 to 20 lower-case or upper-case letters"
		,"from 14 to 20 letters"
		,"from 14 to 20 uppercase & lowercase letters"
		,"from 14 to 20 upper-case & lower-case letters"
		,"from 14 to 20 uppercase and lowercase letters"
		,"from 14 to 20 upper-case and lower-case letters"
		,"from 14 to 20 uppercase / lowercase letters"
		,"from 14 to 20 upper-case / lower-case letters"
		,"from 14 to 20 uppercase or lowercase letters"
		,"from 14 to 20 upper-case or lower-case letters"
		,"from 14 to 20 lowercase & uppercase letters"
		,"from 14 to 20 lower-case & upper-case letters"
		,"from 14 to 20 lowercase and uppercase letters"
		,"from 14 to 20 lower-case and upper-case letters"
		,"from 14 to 20 lowercase / uppercase letters"
		,"from 14 to 20 lower-case / upper-case letters"
		,"from 14 to 20 lowercase or uppercase letters"
		,"from 14 to 20 lower-case or upper-case letters"
		,"between 14 and 20 letters"
		,"between 14 and 20 uppercase & lowercase letters"
		,"between 14 and 20 upper-case & lower-case letters"
		,"between 14 and 20 uppercase and lowercase letters"
		,"between 14 and 20 upper-case and lower-case letters"
		,"between 14 and 20 uppercase / lowercase letters"
		,"between 14 and 20 upper-case / lower-case letters"
		,"between 14 and 20 uppercase or lowercase letters"
		,"between 14 and 20 upper-case or lower-case letters"
		,"between 14 and 20 lowercase & uppercase letters"
		,"between 14 and 20 lower-case & upper-case letters"
		,"between 14 and 20 lowercase and uppercase letters"
		,"between 14 and 20 lower-case and upper-case letters"
		,"between 14 and 20 lowercase / uppercase letters"
		,"between 14 and 20 lower-case / upper-case letters"
		,"between 14 and 20 lowercase or uppercase letters"
		,"between 14 and 20 lower-case or upper-case letters"
	 ]
	// ,"": [
	// 	 ""
	// 	,""
	// 	,""
	// 	,""
	// 	,""
	// 	,""
	// 	,""
	//  ]
};