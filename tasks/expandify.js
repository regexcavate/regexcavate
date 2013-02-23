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
			var localeMatch = filepath.match(/locale\/([a-z]{2})\/([^\/]+)\.json$/i),
				filename = localeMatch[2],
				locale = localeMatch[1],
				localisedExpansions = 'scripts/locale/'+locale+'/expandify.json',
				list,
				newDest = dest + localeMatch[0],
				out = [],
				src;
			
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
									"name": exp.name.replace(/%/g, translation.name),
									"input": translation.input[expansionIndex].replace(/%/g, exp.input),
									"output": exp.output.replace(/%/g, translation.output)
								});
							});
						}
					});

					// If there wasn't any expansion on this, then just push in the normal translation.
					if (!matchedExpansion) {
						out.push(translation);
					}
				}
			});

			src = "var "+filename+" = "+JSON.stringify(out)+";";

			grunt.file.write(newDest, src);
			grunt.log.writeln('Done expandifying, new file is at: '+newDest);
		});
	});
};