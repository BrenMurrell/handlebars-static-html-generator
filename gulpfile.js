var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var filelist = require('gulp-filelist');
var templateList = require('./filelist.json');

gulp.task("createFileIndex", function(){
		gulp.src(['./src/*.*'])
      .pipe(filelist('filelist.json', { flatten: true, removeExtensions: true }))
      .pipe(gulp.dest("./"));
});
gulp.task('default', function () {
	var templateData = {
		firstName: 'Bren',
		templates: templateList
	},
	options = {
		ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
		// partials : {
		// 	footer : '<footer>the end</footer>'
		// },
		batch : ['./src/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	}
	//templates = ['hello', 'goodbye', 'test'];
	//gulp.start('goodbye');

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
