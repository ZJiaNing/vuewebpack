var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 引入基本配置
var config = require('./webpack.config');
config.output.publicPath = '/';
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

// devServer的其他的配置呢，应该怎么用呢？在什么样的场景下使用呢？
// 端口号默认是8080，但是可以通过port去修改端口号
config.devServer = {
  inline: true,
  hot: true,
  port: 9999
}

module.exports = config;
