// 仔细思考一下开发环境和生产环境的区别——这个问题是你先要考虑清楚，然后你才能更好的去配置这些配置
// 文件，以及知道应该怎么配置

// 生产环境——这个应该就是线上环境的意思吧
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 将css单独打包
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
// 引入基本配置
var config = require('./webpack.config');

// 下面的这段代码肯定是有深意的，你要研究一下看看，这个功能，我猜测是将.vue文件中的css提取到一份文件里面
// config.vue = {
//     loaders: {
//         css: ExtractTextPlugin.extract("css")
//     }
// };

// definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
// config.plugins = [
//     new webpack.DefinePlugin({
//         'process.env': {
//             NODE_ENV: '"production"'
//         }
//     }),
//     // 压缩代码
//     new webpack.optimize.UglifyJsPlugin({
//         compress: {
//             warnings: false
//         }
//     }),
//     // new webpack.optimize.OccurrenceOrderPlugin(),
//     // 提取css为单文件
//     // new ExtractTextPlugin("../[name].[contenthash].css"),
//     new ExtractTextPlugin('css/[name].css'),
//     new HtmlWebpackPlugin({
//         filename: '../index.html',
//         template: path.resolve(__dirname, '../app/index/index.html'),
//         inject: true
//     })
// ];

var prodConfig = merge(config, {
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // 提取css为单文件
    // new ExtractTextPlugin("../[name].[contenthash].css"),
    new ExtractTextPlugin('css/app.css'),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
  ]
});

module.exports = prodConfig;
