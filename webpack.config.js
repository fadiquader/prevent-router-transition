const path = require('path');
module.exports = {
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname),
            exclude: /(node_modules|build)/,
            use: {
                loader: 'babel-loader'
            },
        }],
    },
    externals: {
        react: 'commonjs react',
    },
};