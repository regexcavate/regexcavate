/*global module:false*/

module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			version: '1.0.0',
			banner: '/*! /RegEx(cavate)?/ - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* http://regexcavate.com/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
				'Rémy Bach, Guy Routledge, & Rob Miller; Licensed MIT */'+
				';'
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		expandify: {
			dest: 'scripts/dist/',
			files: [
				'scripts/locale/en/translations.json'
			]
		},
		concat: {
			dist: {
				src: [
					'scripts/lib/jquery.js',
					'scripts/lib/base64.js',
					'scripts/lib/konami.js',
					'scripts/lib/prism.js',
					'scripts/examples.js',
					'scripts/help.js',
					'scripts/navscroll.js',
					'scripts/tooltip.js',
					'scripts/translations.js',
					'scripts/main.js'
				],
				dest: 'scripts/dist/main.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint'
		},
		jshint: {
			files: ['scripts/*.js'],
			options: {
				// Enforcing
				curly: true,
				immed: true,
				indent: 4,
				latedef: true,
				newcap: true,
				noarg: true,
				noempty: true,
				strict: true,
				sub: true,
				trailing: true,
				undef: true,
				unused: true,
				
				// Relaxing
				boss: true,
				eqnull: true,
				globalstrict: true,
				iterator: true,
				loopfunc: true,
				smarttabs: true,

				// Environments
				browser: true,
				jquery: true,
				nonstandard: true,
				white: false
			},
			globals: {}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'scripts/dist/main.js': ['<banner:meta.banner>', 'scripts/dist/main.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', 'compass concat uglify'); /* TODO: jshint compass expandify concat uglify */
};