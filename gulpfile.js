var gulp = require("gulp");

var path = require('path');
var UPLOAD = './upload';
var SRC = path.join(UPLOAD, '_src');
var DEST = path.join(UPLOAD);
var THEME = 'default';
var config = require('./config.json');

var paths = {
    admin: path.join(UPLOAD, 'admin'),
    catalog: path.join(UPLOAD, 'catalog')
};

var js = {
    catalog: path.join(paths.catalog, 'view', 'javascript', '**', '*.js')
};

var css = {
    catalog: path.join(paths.catalog, 'view', 'theme', THEME, 'stylesheet', '**', '*.css')
};

gulp.task('styles', function() {
    return gulp.src('./src/**/*.css')
        .pipe(less())
        .pipe(gulp.dest('./build'));
});

gulp.task('debug', function () {
    console.log(js.catalog);
});