const gulp = require("gulp");
const webpack = require("webpack");

const tasks = require("./tasks/gulptasks.js");
const { argv } = require("yargs");

// setting up the environment to pass to wbpack
if (argv.production) {
    process.env.NODE_ENV = "production";
}

if (argv.development) {
    process.env.NODE_ENV = "development";
}

const webpackConfig = (process.env.NODE_ENV = "production"
    ? "./webpack.config.prod.js"
    : "./webpack.config.js");

// run webpack to compile the script into a bundle
function compile(done) {
    return new Promise((resolve, reject) => {
        webpack(require(webpackConfig), (err, stats) => {
            if (err) {
                return reject(err);
            }

            if (stats.hasErrors()) {
                return reject(new Error(stats));
            }
            resolve();
        });
    });
}

gulp.task("copy:html", tasks.copyHtml);
gulp.task("copy:css", tasks.copyCss);
gulp.task("copy:assets", tasks.copyAssets);

// default includes all
gulp.task(
    "default",
    gulp.series(tasks.clean, tasks.copyAssets, tasks.copyHtml, tasks.copyCss, compile)
);
