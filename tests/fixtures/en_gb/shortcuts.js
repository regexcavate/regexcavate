// This should have key value pairs in the form of:
//	"expected regex outcome": ["phrase 1", "phrase 2"] (don't forget to escape slashes.)
window.shortcutTests = {
	 // Word
	 "\\S+": [
		 "word"
		,"a word"
		,"an word" // it's wrong, but people might still do it
		,"any word"
		,"a single word"
		,"an single word"
		,"one word"
		,"1 word"
	 ]
};