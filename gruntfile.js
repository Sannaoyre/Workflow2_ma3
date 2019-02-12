

module.exports = function (grunt) {
	grunt.initConfig ({

		pkg: grunt.file.readJSON('package.json'),
		less: {
			dist: {
				files: {
					'dist/css/style.less.css' : 'less/style.less'
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/css/minified/style.min.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		},
		watch: {
			css: {
				files: 'less/style.less',
				tasks: ['less']
			}
		},


	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default', ['browserSync', 'watch']);
}