var express = require('express');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpack = require('webpack');

var app = express();
var config = require('./webpack.config.js');
var compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(5000, function() {
    console.log('The app is listening at 6000');
});