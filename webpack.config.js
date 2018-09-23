const path = require('path');
const outputDir = path.resolve(__dirname, 'build');
const env = process.env.NODE_ENV || 'development';

module.exports = {
    mode: env,
    entry: path.resolve(__dirname, 'app/src'),
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
};