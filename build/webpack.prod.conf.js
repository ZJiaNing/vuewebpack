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
// 引入工具函数
var untils = require('./untils');
// 引入基本配置
var config = require('./webpack.config');

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 提取css为单文件
    new ExtractTextPlugin('css/[name].css')
  ]
});

module.exports = merge(prodConfig, {
  plugins: untils.multiHtmlPage(untils.multiDepand)
});
