const path = require('path');
const outputDir = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(__dirname, 'app/src'),
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: outputDir
    }
};  