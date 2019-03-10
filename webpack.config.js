const path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    devServer: {
        publicPath: path.resolve('/dist'),
    },
    output: {
        path: path.resolve('/dist'),
        filename: 'bundle.js'
    }
};