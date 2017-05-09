const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/client.js",
    output: {
        path: path.resolve(__dirname, 'build', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'env']
            }
        },{
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new ExtractTextPlugin('style.css')
    ]
};