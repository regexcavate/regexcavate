/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		meta: {
			version: '1.0.0',
			banner: '/*! /RegEx(cavate)?/ - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* http://regexcavate.com/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
				'Rémy Bach, Guy Routledge, & Rob Miller; Licensed MIT */'
		},
		lint: {
			files: ['scripts/*.js']
		},
		concat: {
			dist: {
				src: [
					'<banner:meta.banner>',
					'<file_strip_banner:scripts/lib/jquery.js>',
					'<file_strip_banner:scripts/lib/base64.js>',
					'<file_strip_banner:scripts/lib/konami.js>',
					'<file_strip_banner:scripts/lib/prism.js>',
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
		min: {
			dist: {
				src: ['<banner:meta.banner>', 'scripts/dist/main.js'],
				dest: 'scripts/dist/main.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint'
		},
		jshint: {
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
		uglify: {}
	});

	// Default task.
	grunt.registerTask('default', 'lint concat min');
};
