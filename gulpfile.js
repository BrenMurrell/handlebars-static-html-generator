var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var filelist = require('gulp-filelist');
var fs = require('fs');

gulp.task("createFileIndex", function(){
		gulp.src(['./src/*.*'])
      .pipe(filelist('filelist.json', { flatten: true, removeExtensions: true }))
      .pipe(gulp.dest("./"));
});

gulp.task("default", function() {
	gulp.watch('src/*.handlebars',{cwd:'./'}, ['createFileIndex'])
	gulp.watch('src/**/*.handlebars',{cwd:'./'}, ['compile'])
	gulp.watch('filelist.json',{cwd:'./'},['compile']);
});

gulp.task('compile', function () {
	var templateList = JSON.parse(fs.readFileSync("./filelist.json", "utf8"));
	var templateData = {
		firstName: 'Bren',
		templates: templateList
	},
	options = {
		ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
		batch : ['./src/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	}
	var doAllTemplates = function() {
		for (var i = 0; i <  templateList.length; i++) {
			compileTemplate(templateList[i]);
		}
	}
	var compileTemplate = function(templateName) {
		return gulp.src('src/' + templateName + '.handlebars')
			.pipe(handlebars(templateData, options))
			.pipe(rename(templateName + '.html'))
			.pipe(gulp.dest('dist'));
	}
	doAllTemplates();
});
