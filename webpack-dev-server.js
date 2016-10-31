var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var path = require('path')
var webpackConfig = require('./webpack.config.js')

var server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    quiet: false,
    noInfo: false,
})

server.listen(4444, 'localhost', function(err){
    if(err) {
        console.log(err)
    }
})