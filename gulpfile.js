let gulp = require("gulp");
let webpack = require('webpack-stream');
let OUT_DIR = './build';
let {
    argv
} = require('yargs');

// always copy the html first to dist folder
let srcHTML = './app/template/index.html';
let srcCSS = './app/template/style.css';
let srcAssets = './app/assets/*';

// setting up the environment to pass to wbpack
if (argv.production) {
    process.env.NODE_ENV = 'production';
}

if (argv.development) {
    process.env.NODE_ENV = 'development';
}

gulp.task('copy:html', () => gulp.src(srcHTML).pipe(gulp.dest(OUT_DIR)));
gulp.task('copy:css', () => gulp.src(srcCSS).pipe(gulp.dest(OUT_DIR)));
gulp.task('copy:assets', () => gulp.src(srcAssets).pipe(gulp.dest(OUT_DIR + '/assets/')));

// run webpack to compile the script into a bundle
gulp.task('webpack', () => {
    return gulp.src('build/')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/'));
});

// default includes all
gulp.task('default', ['copy:html', 'copy:css', 'copy:assets', 'webpack']);