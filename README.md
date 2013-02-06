# Contributing to the "translations" #

"The what?" Well, the `translations.js` file is what's used to take what the user gives us and "translate" that into a usable Regex. This works by testing the user's input using... that's right... Regex!

> [Using Regex to get Regex? That's so meta!](http://i.qkme.me/3slpph.jpg)

I know, right? So all you need to help contribute here is a pre-existing knowledge of Regex, [how to do a pull request](https://help.github.com/articles/using-pull-requests), and to follow a few simple rules:

1. MOST IMPORTANTLY: Please check that there isn't a translation that already does what you're trying to accomplish.
2. Note the different sections denoted by comments. If your translation doesn't fit within an existing section, create a new one.
3. Commas at the beginning of the translation. This isn't a popular choice, but a necessary one to make it easier to add new translations as we go along without worry of missing a comma.
4. Make sure that any translations reflect the following syntax:
    
        {
            name:'', // What this translation matches for in plain old English.
            in:'',   // The regex that determines whether what the user has input has a matching translation.
            out:''   // The regex that the user was after.
        }

5. Finally: Remember to think of it as translating English† to Regex so try take into account all the different ways of expressing your translation.

... and that's all there is to it. Head on over to the `translate.js` file now to have a gander at what's there already.

## Shortcuts ##

Shortcuts are included in the translations file, and have the same syntax as mentioned above.

In case you need to know, the user's input will *first* get parsed for the regular translations and only if there's no match will it get parsed for shortcuts.

## A Note on Negation ##

There's no need to include any negation in the translations themselves. To save duplicating too much stuff in the `translations.js` file, the negation works by checking if the user typed 'no'/'not' before any part of the query and stripping that out. If the regex returned by any of the individual translations is within a range (ie: '[...]'), then `^` will automatically be prepended inside.

## † Localisation ##

This is something that is in the works. if you are interested in helping out, get in touch with [@remybach](http://twitter.com/remybach) on twitter.