

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
		

		watch: {
			css: {
				files: 'less/style.less',
				tasks: ['less']
			}
		},


	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}