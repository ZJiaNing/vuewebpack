var webpack = require('webpack');
//  利用这个插件可以绘制一幅神奇的图！！！！可以帮你分析你生成的bundle中具体的文件占比情况如何
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var config = require('./webpack.config');
config.plugins.push(new BundleAnalyzerPlugin())
module.exports = config;
