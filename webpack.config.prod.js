const path = require("path");
const outputDir = path.resolve(__dirname, "build");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "app/src"),
    output: {
        path: outputDir,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: 4,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};
