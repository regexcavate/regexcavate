/*global module */

module.exports = function(grunt) {
	'use strict';
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			version: '1.0.0',
			banner: '/*! /RegEx(cavate)?/ - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* http://regexcavate.com/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
				'Rémy Bach, Guy Routledge, & Rob Miller; Licensed MIT */' +
				';'
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					debugInfo: true,
					outputStyle: 'expanded'
				}
			},
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		expandify: {
			dest: 'scripts/dist/',
			files: [
				'scripts/locale/en_gb/shortcuts.json',
				'scripts/locale/en_gb/translations.json'
			]
		},
		// Note that expandify must be run BEFORE concat so that the generated localized content is used.
		concat: {
			// Create a compiled lib file for any non-localized stuff.
			lib: {
				src: [
					'scripts/lib/jquery.js',
					'scripts/lib/base64.js',
					'scripts/lib/konami.js',
					'scripts/lib/prism.js',
					'scripts/help.js',
					'scripts/navscroll.js',
					'scripts/tooltip.js',
					'scripts/main.js'
				],
				// This file will be used in all the localized `main.js` files.
				dest: 'scripts/dist/lib.js'
			},
			en_gb: {
				src: [
					'scripts/locale/en_gb/config.js',
					'scripts/dist/locale/en_gb/shortcuts.js',
					'scripts/dist/locale/en_gb/translations.js',
					'scripts/dist/lib.js'
				],
				dest: 'scripts/dist/locale/en_gb/main.js'
			}
		},
		connect: {
			server: {
				options: {
					keepalive: true,
					port: 8080
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['scripts/*.js', '!scripts/lib/*', 'scripts/locale/**/*.js'],
				tasks: ['jshint', 'expandify', 'concat']
			},
			styles: {
				files: 'sass/*.scss',
				tasks: ['compass:dev']
			}
		},
		jasmine: {
			en_gb: {
				src: ['scripts/dist/locale/en_gb/shortcuts.js', 'scripts/dist/locale/en_gb/translations.js', 'scripts/dist/locale/en_gb/main.js', 'tests/fixtures/en_gb/*.js'],
				options: {
					specs: 'tests/spec/en_gb.js'
				}
			}
		},
		jshint: {
			files: ['scripts/*.js', '!scripts/lib/*', 'scripts/locale/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			en_gb: {
				files: {
					'scripts/dist/locale/en_gb/main.js': ['<banner:meta.banner>', 'scripts/dist/locale/en_gb/main.js']
				}
			}
		}
	});

	// This loads in all the grunt tasks auto-magically.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', ["jshint", "compass:dist", "expandify", "concat", "uglify"]);
	grunt.registerTask('dev', ["jshint", "compass:dev", "expandify", "concat", "connect", "watch"]);
	grunt.registerTask('test', ["jshint", "expandify", "concat", "jasmine"]);
};