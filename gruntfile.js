

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
		cssmin: {
			minify: {
				src: 'dist/css/style.less.css',
				dest: 'dist/css/minified/style.min.css'
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
				tasks: ['less', 'cssmin']
			}
		},
		imagemin: {
					dynamic: {
						files: [{
							expand: true,
							cwd: 'images/',
							src: ['**/*.{png,jpg,gif,jpeg}'],
							dest: 'images/'
						}]
				  }
		}


	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['browserSync', 'watch']);
}