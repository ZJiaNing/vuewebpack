// nodejs 中的path模块
var path = require('path');
// console.log(path);
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    // entry: path.resolve(__dirname, '../app/index/index.js'),
    // 使用热加载
    entry: {
        home: [
            path.resolve(__dirname, '../app/index/index.js')
        ]
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: [' ' ,'.css', '.js', '.vue'],    // 第一个单引号里面有一个空格的
        alias: {
          'vue$': 'vue/dist/vue'
        }
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
              test: /\.css$/,
              loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  compact: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({   // 这个插件用于帮你自动生成html文件，因为编译生成的bundle.js的hash值是会动态变的
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: 'body'
        })
    ]
}
