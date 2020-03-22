const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    devtool: false,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
        library: 'ReactModal',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types',
            umd: 'prop-types',
        },
    },
};
