/* Task manager using grunt.js implementing different tasks. */
module.exports = function(grunt) {
	
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			build: {
				expand: true,
				cwd: "scripts/src/",
				src: ["**/*.js"],
				dest: "scripts/build/",
				ext: ".min.js"
			}
		},
		less: {
			options: {
				yuicompress: true
			},
			src: {
				expand: true,
				cwd: "styles/less/",
				src: ["**/*.less"],
				dest: "styles/css",
				ext: ".css"
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: "styles/css/",
				src: ["**/*.css"],
				dest: "styles/build/",
				ext: ".min.css"
			}
		},
		concat: {
			options: {
				stripBanners: true,
				banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> */\n"
			},
			scripts: {
				src: ["scripts/build/$base/app.min.js", "scripts/build/$base/route.min.js", "scripts/build/factories/page.min.js", "scripts/build/factories/paging.min.js", "scripts/build/services/ajax.min.js", "scripts/build/services/api.min.js", "scripts/build/classes/article.min.js", "scripts/build/controllers/root.min.js", "scripts/build/controllers/home.min.js", "scripts/build/controllers/articles.min.js", "scripts/build/controllers/tags.min.js"],
				dest: "scripts/default.min.js"
			},
			styles: {
				src: "styles/build/*.min.css",
				dest: "styles/default.min.css"
			}
		},
		watch: {
			// options: {
			//	nospawn: true
			// },
			uglify: {
				files: ['scripts/src/**/*.js'],
				tasks: ['uglify']
			},
			less: {
				files: ['styles/less/**/*.less'],
				tasks: ['less']
			},
			cssmin: {
				files: ['styles/css/**/*.css'],
				tasks: ['cssmin']
			},
			concat: {
				files: ['scripts/build/*.min.js', 'styles/build/*.min.css'],
				tasks: ['concat']
			}
		},
		strip_code: {
			/*
			* ref: http://philipwalton.com/articles/how-to-unit-test-private-functions-in-javascript/
			*/
			options: {
				start_comment: "test-code",
				end_comment: "end-test-code"
			},
			your_target: {
				// a list of files you want to strip code from
				src: "scripts/src/**/*.js"
			}
		}
	});

	/* Loading the registered tasks */
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-strip-code");

	/* Registering all task to default so it can be execute using 'grunt default' command */
	grunt.registerTask("default", ['less','cssmin','uglify','concat']);

	grunt.registerTask("deploy", ['less','cssmin','uglify','concat','strip-code']);
};
