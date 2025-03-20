
const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto',
            },
        ],
    },
    resolve: {
        alias: {
            'json': path.resolve(__dirname, 'Products.json'),
        },
    },
};

