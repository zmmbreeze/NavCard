var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var mustache = require('gulp-mustache');
var config = require('../config').markup

gulp.task('markup', function() {
    var partials = {};
    return gulp.src(config.src)
        .pipe(mustache(config.data, {
            extension: '.html'
        }, partials))
        .pipe(gulp.dest(config.dest));
});

