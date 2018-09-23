var gulp = require("gulp");
var webpack = require('webpack-stream');
var OUT_DIR = './build';

// always copy the html first to dist folder
var srcHTML = './app/template/index.html';
var srcCSS = './app/template/style.css';

// if you have any, this will copy any asset files to build/img
var srcAssets = './app/assets/*';

gulp.task('copy:html', function() {
	gulp.src(srcHTML).pipe(gulp.dest(OUT_DIR));
});

gulp.task('copy:css', function() {
    gulp.src(srcCSS).pipe(gulp.dest(OUT_DIR));
});

gulp.task('copy:assets', function() {
    gulp.src(srcAssets).pipe(gulp.dest(OUT_DIR + '/assets/'));
});

// run webpack to compile the script into a bundle
gulp.task('webpack', function() {
	return gulp.src('build/')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('build/'));
});

// default includes all
gulp.task('default', ['copy:html', 'copy:css', 'copy:assets', 'webpack']);