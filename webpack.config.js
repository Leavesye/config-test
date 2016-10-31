var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var Webpack = require('webpack')

var webpackConfig = {
    devtool: ['source-map'],
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:4444/',
            'webpack/hot/dev-server',
            path.resolve(__dirname,'./index')
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:4444/',
        filename: '[name].js',
    },
    // entry:{
    //     bundle: './index.js'
    // },
    // output:{
    //     path: 'dist',
    //     filename:'bundle.js'
    // },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                 test: /\.less$/,
                 loader: 'style!css!autoprefixer!less',
            }
        ],
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'my app',
            template: 'template/index.html',
            inject: 'body',
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            antd: path.resolve(__dirname, './node_modules/antd')
        }
    }
}

module.exports = webpackConfig