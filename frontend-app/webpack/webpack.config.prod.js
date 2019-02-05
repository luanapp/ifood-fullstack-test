const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader', options: { minimize: true } }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: { loader: 'url?limit=10000!img?progressive=true' }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: { loader: 'url?limit=10000&mimetype=image/svg+xml' }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([{
            from: './public/favicon.ico',
            to: './public'
        }]),
        new CopyWebpackPlugin([{
            from: './public/manifest.json',
            to: './public'
        }]),
        new Dotenv({
            path: '.env'
        })
    ]
};