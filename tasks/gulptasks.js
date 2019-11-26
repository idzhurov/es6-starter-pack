const del = require("del");
const gulp = require("gulp");
const OUT_DIR = "./build";

// always copy the html first to dist folder
const srcHTML = "./app/template/index.html";
const srcCSS = "./app/template/style.css";
const srcAssets = "./app/assets/*";

function clean(done) {
    // Clean the dist folder
    del.sync([OUT_DIR]);

    // Signal completion
    return done();
}

function copyHtml(done) {
    gulp.src(srcHTML).pipe(gulp.dest(OUT_DIR));
    done();
}

function copyCss(done) {
    gulp.src(srcCSS).pipe(gulp.dest(OUT_DIR));
    done();
}

function copyAssets(done) {
    gulp.src(srcAssets).pipe(gulp.dest(OUT_DIR + "/assets/"));
    done();
}

exports.clean = clean;
exports.copyHtml = copyHtml;
exports.copyCss = copyCss;
exports.copyAssets = copyAssets;
