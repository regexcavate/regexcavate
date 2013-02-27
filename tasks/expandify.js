'use strict';

module.exports = function(grunt) {
	grunt.registerTask('expandify', 'Expands translations to their full form.', function() {
		var dest,
			files = this.filesSrc,
			prepend = [
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
			];

		// Fail task if we don't know which file/s to expandify or where to put them
		grunt.config.requires('expandify.dest');
		grunt.config.requires('expandify.files');

		dest = grunt.config('expandify.dest').replace(/\/$/g, '')+'/';
		files = grunt.config('expandify.files');

		files.forEach(function(filepath) {
			var localeMatch = filepath.match(/locale\/([a-z_]{2,5})\/([^\/]+)\.json$/i),
				filename = localeMatch[2],
				locale = localeMatch[1],
				localisedExpansions = 'scripts/locale/'+locale+'/expandify.json',
				list,
				newDest = dest + localeMatch[0],
				out = [],
				src = '';
			
			newDest = newDest.replace('.json', '.js');
			
			// Warn on and remove invalid source files (if nonull was set).
			if (!grunt.file.exists(filepath)) {
				grunt.log.warn('Source file not found at "' + filepath + '"');
				return false;
			}
			// Make sure we have a localised expansions file
			if (!grunt.file.exists(localisedExpansions)) {
				grunt.log.warn('Localised expansions file not found at "'+localisedExpansions+'"');
				return false;
			}

			grunt.log.writeln('Expandifying: '+filepath);

			list = grunt.file.readJSON(filepath).list;
			localisedExpansions = grunt.file.readJSON(localisedExpansions);

			list.forEach(function(translation) {
				var input,
					matchedExpansion,
					output;

				// Make sure this is a proper translation object (ie: not a string or other data type).
				if (typeof translation === typeof {}) {
					// http://stackoverflow.com/questions/7440001/iterate-over-object-keys-in-node-js
					Object.keys(localisedExpansions).forEach(function(key) {
						var expansions = localisedExpansions[key],
							expansionIndex = translation.expansions ? translation.expansions.indexOf(key) : -1;

						// If this translation requires this expansion
						if (expansionIndex !== -1) {
							expansions.forEach(function(exp) {
								matchedExpansion = true;

								out.push({
									"name": translation.name[expansionIndex].replace(/%/g, exp.name),
									"input": translation.input[expansionIndex].replace(/%/g, exp.input),
									"output": exp.output.replace(/%/g, translation.output)
								});
							});
						} else if (translation.catchAll) {
							expansions.forEach(function(exp) {
								var newInput = translation.input.replace(/%/g, exp.input.replace(/^([\(\[].*[\)\]])\?$/, '$1')),
									tmpInput = newInput,
									bracesBeforeCatch = 0;

								/* This is a hacky way to find out how many groups there are in this
									regex *BEFORE* the occurrence of the catch all so that in the `output`
									we grab the correct occurrence. */
								while (tmpInput.indexOf('.') != 0) {
									tmpInput = tmpInput.slice(tmpInput.indexOf('(')+1, tmpInput.length);
									bracesBeforeCatch++;
								}

								matchedExpansion = true;

								out.push({
									"catchAll": true,
									"name": translation.name.replace(/%/g, exp.name),
									"input": newInput,
									"output": exp.output.replace(/%/g, (key !== "single" ? '[' : '') + '$'+bracesBeforeCatch+(key !== "single" ? ']' : ''))
								});
							});
						}
					});

					// If there wasn't any expansion on this, then just push in the normal translation.
					if (!matchedExpansion) {
						out.push(translation);
					}

					// If this is the start, or begin, we need to get the localized copy for use in the placeholder.
					if (translation.start) {
						src+= 'window.START = "'+translation.name+'";';
					}
					if (translation.end) {
						src+= 'window.END = "'+translation.name+'";';
					}
				}
			});

			// Dump out a LOCALE constant so that in main.js we know which to use.
			src+= 'window.LOCALE = "'+locale+'"; var '+filename+' = '+JSON.stringify(out)+';';

			grunt.file.write(newDest, src);
			grunt.log.writeln('Done expandifying, new file is at: '+newDest);
		});
	});
};