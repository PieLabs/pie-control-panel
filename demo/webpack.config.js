const path = require('path');

module.exports = {
    entry: {
        demo: './entry.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
};

