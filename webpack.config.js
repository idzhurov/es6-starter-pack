const path = require("path");
const outputDir = path.resolve(__dirname, "build");

module.exports = {
    mode: "development",
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
    }
};
