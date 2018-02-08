const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {},
    output: {
        filename: '[name].js'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                            plugins: [require('babel-plugin-transform-object-rest-spread')]
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin()
    ]
};