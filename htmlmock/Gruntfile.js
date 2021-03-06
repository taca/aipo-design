module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'./themes/default/css/aui-min.css': ['themes/default/css/aui.css']
				}
			}
		},
		watch: {
			files: ['themes/default/sass/*.scss'],
			tasks: ['compass']
		}
		/*
		esteWatch: {
			options: {
				dirs:['themes/default/sass/*.scss','haml/*.haml'],
				livereload: {
					enabled: false
				}
			},
			compass: function(filepath) {
				var files = [{

				}]
			}
		}
		*/
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	//grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-este-watch');

	//var taskName;
	//for (taskName in pkg.devDependencies) {
	//	if (taskName.substring(0, 6) == 'grunt-') {
	//		grunt.loadNpmTasks(taskName);
	//	}
	//}
	grunt.registerTask('default', ['watch']);
};