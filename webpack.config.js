var path = require('path');

module.exports = {
    entry: "./script.js",
    output: {
        filename: "./bundle.js",
        sourceMapFilename: "./bundle.map"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            {
                loader: 'babel',
                test: /\.js?$/,
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
    }
}