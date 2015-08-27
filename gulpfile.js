var gulp = require("gulp");
var gutil = require('gulp-util');
var gftp = require('gulp-ftp');
var config = require('./config');
var ftp = gftp(config.ftp);
var path = require('path');
var UPLOAD = config.paths.upload;
var SRC = path.join(UPLOAD, '_src');
var DEST = path.join(UPLOAD);
var THEME = 'default';
var allFiles = path.join(UPLOAD, '/**');

var paths = {
    admin: path.join(UPLOAD, 'admin'),
    catalog: path.join(UPLOAD, 'catalog')
};

var js = {
    catalog: path.join(paths.catalog, 'view/javascript/**/*.js')
};

var css = {
    catalog: path.join(paths.catalog, 'view/theme', THEME, 'stylesheet/**/*.css')
};

gulp.task('styles', function() {
    return gulp.src('./src/**/*.css')
        .pipe(less())
        .pipe(gulp.dest('./build'));
});

gulp.task('ftp', function() {

    return gulp.src(allFiles)
        .pipe(ftp)
        .pipe(gutil.noop());
});

gulp.task('watch', function () {
    gulp.watch(allFiles, ['ftp']);
});

gulp.task('debug', function () {
    console.log(js.catalog);
});