var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));

gulp.task('ts_server', function () {
    return tsProject.src('server/**/*.ts')
      .pipe(ts(tsProject))
      .js
      .pipe(gulp.dest('server'));
});

var tsProjectClient = ts.createProject(path.resolve('./public/app/tsconfig.json'));

gulp.task('ts_client', function () {
   return tsProjectClient.src('public/app/**/*.ts')
     .pipe(ts(tsProjectClient))
     .js
     .pipe(gulp.dest('public/app/')); 
});

gulp.task('watch', ['ts_server', 'ts_client'], function(){
   gulp.watch(paths.appJavascript, ['ts_server', 'ts_client']); 
});

gulp.task('copy_angular', function() {
   gulp.src([
      '../node_modules/es6-shim/es6-shim.min.js',
      '../node_modules/systemjs/dist/system-polyfills.js',
      '../node_modules/systemjs/dist/system.src.js',
      '../node_modules/rxjs/bundles/Rx.js',
      '../node_modules/angular2/'
    ])
    .pipe(gulp.dest('public/vendor/dist'))
    gulp.src(['../node_modules/angular2/**/*'])
    .pipe(gulp.dest('public/vendor/dist/angular2'))
});

gulp.task('develop', function() {
  livereload.listen();
  nodemon({script: './bin/www', ext: 'js', legacyWatch: true}).on('restart', function () {
        setTimeout(function () {
            livereload.changed();
        }, 2000); // wait for the server to finish loading before restarting the browsers
    });
});

gulp.task('default', ['ts_server', 'ts_client', 'watch', 'develop']);