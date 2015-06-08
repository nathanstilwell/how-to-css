/*global require */

'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./public')
    .pipe(webserver({
      port: 5555
    }));
});

gulp.task('default', ['webserver']);