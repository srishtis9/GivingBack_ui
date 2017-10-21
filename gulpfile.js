var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;

gulp.task('default',function(){
	
	gulp.src(["./src/test/javascript/specs/*_spec.js"])
    .pipe(protractor({
        configFile: "./src/test/javascript/confs/conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e })
});