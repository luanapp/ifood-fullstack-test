const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
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
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
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
    ],
    devServer: {
        open: true,
        port: 4000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization"
        }
    }
};