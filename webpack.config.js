const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

const rules = [{
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
},{
    test: /\.jpg/,
    loader: 'file-loader'
}];

const plugins = [
    new webpack.ProvidePlugin({
        React: 'react'
    }),
    new ExtractTextPlugin('style.css')
];

module.exports = [{
    name: 'browser',
    entry: "./src/client.entry.js",
    output: {
        path: distDir,
        filename: 'bundle.js'
    },
    module: {
        rules
    },
    plugins
},{
    name: 'server',
    entry: './src/server.entry.js',
    target: 'node',
    output: {
        path: distDir,
        filename: "server.bundle.js",
        libraryTarget: "commonjs"
    },
    module: {
        rules
    },
    plugins
}];