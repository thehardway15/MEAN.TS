var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

var paths = {
    appJavascript: ['**/*.ts', '!node_modules/**/*.*']
}
var tsProject = ts.createProject(path.resolve('./tsconfig.json'));

gulp.task('ts', function () {
    return tsProject.src(paths.appJavascript)
      .pipe(ts(tsProject))
      .js
      .pipe(gulp.dest(''));
});

gulp.task('watch', ['ts'], function(){
   gulp.watch(paths.appJavascript, ['ts']); 
});

gulp.task('develop', function() {
  livereload.listen();
  nodemon({script: './bin/www', ext: 'js', legacyWatch: true}).on('restart', function () {
        setTimeout(function () {
            livereload.changed();
        }, 2000); // wait for the server to finish loading before restarting the browsers
    });
});

gulp.task('default', ['ts', 'watch', 'develop']);