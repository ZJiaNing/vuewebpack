// 开发模式
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 将css单独打包
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
// webpack-merge provides a merge function that concatenates arrays and merges objects creating a new object.
var merge = require('webpack-merge');
// 引入基本配置
var config = require('./webpack.config');
// var untils = require('./untils');

// 因为这个时候的输出都是在内存中的，所以可以直接将路径设置成根目录
// 当然你也可以视这样的'/my/'，这样的话，就是多了一层：“my文件夹"

var defaultConfig = merge(config, {
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
        title: 'New &&&& title',
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: 'body'     // 思考一下，如果这边是'body'的话，那么css是怎么实现注入的呢——同样会注入的那个地方，我好奇它的注入机制？？
    })
  ]
})


// config.output.publicPath = '/';
//
// config.plugins = [
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     // new webpack.NoErrorsPlugin(),
//     new HtmlWebpackPlugin({
//         title: 'New &&&& title',
//         filename: 'app/index/index.html',
//         template: path.resolve(__dirname, '../app/index/index.html'),
//         inject: true
//     })
// ];

// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(defaultConfig.entry).forEach(function (name, i) {
    var extras = [devClient]
    defaultConfig.entry[name] = extras.concat(defaultConfig.entry[name])
})

module.exports = defaultConfig;

// 问题：vue文件中，引入scss文件，初次编译的时候会报错，但是在hot-loadin的过程中，
// 修改scss文件，再次编译，却不会再报错
// 解决方案： 在loaders的地方加上了include的配置，，但是为什么呢？ 这个报错难道是因为
// 缺失的访问路径导致的吗？  i don't know the reason of this problem.
// 但是加入这个配置之后，css文件就没有办法抽取出来了，，，为什么呢？
