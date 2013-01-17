# Contributing to the "translations" #

"The what?" Well, the `translations.js` file is what's used to take what the user gives us and "translate" that into a usable Regex. This works by testing the user's input using... that's right... Regex!

![That's SO meta](http://i.qkme.me/3slpph.jpg)

I know, right? So all you need to help contribute here is a pre-existing knowledge of Regex, [how to do a pull request](https://help.github.com/articles/using-pull-requests), and to follow a few simple rules:

1. Commas at the beginning of the translation. This is to make it easier to add new translations as we go along without worry of missing a comma.
2. Make sure that any translations reflect the following syntax:
    
        {
            name:'', // Essentially: what this translation matches for in plain old English.
            in:'',   // The regex that determines whether what the user has input has a matching translation.
            out:''   // The regex that the user was after.
        }

... and that's all there is to it. Head on over to the `translate.js` file now to have a gander at what's there already.

## A Note on Negations ##

There's no need to include any negations. To save duplicating too much stuff in the `translations.js` file, the negation works by checking if the user typed 'no'/'not' before any part of the query and stripping that out. If the regex returned by any of the individual translations is within a range (ie: '[...]'), then `^` will automatically be prepended inside.