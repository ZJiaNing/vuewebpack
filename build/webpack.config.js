// nodejs 中的path模块
var path = require('path');
// console.log(path);

// 下面的这个插件是用来动态生成html文件，以及自动注入编译打包之后的js文件的
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// path： 是node的一个模块
// __dirname: 是webpack的配置文件所在的目录路径！！！！！

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    // entry: path.resolve(__dirname, '../app/index/index.js'),
    // 使用热加载
    entry: {
        home: [
            path.resolve(__dirname, '../app/index/index.js')
        ],
        article: [
          path.resolve(__dirname, '../app/index/articleindex.js')
        ]
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash:5].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: [' ', 'css', '.scss', '.js', '.vue'],    // 第一个单引号里面有一个空格的
        alias: {
          'vue$': 'vue/dist/vue'
        }
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件, 这个配置的这个option告诉vue-loader，我们
            // 要将vue文件中的scss文件独立出去
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            scss: ExtractTextPlugin.extract({
                              fallback: 'style-loader',
                              use: ['css-loader', 'sass-loader']
                            })
                        }
                    }
                }]
            },
            {
              test: /\.css$/,
              loader: ['style-loader', 'css-loader']

            },
            {
              test: /\.scss$/,
              loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  compact: false
                  // presets: ['es2015']  // 应该把这个配置放到.babelrc文件中，虽然我还不知道这份文件存在的意义
                }
            },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: "url-loader",
              query: {
                limit: 50000
              }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({   // 这个插件用于帮你自动生成html文件，因为编译生成的bundle.js的hash值是会动态变的
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}

/*
*  memo about how to config the basic webpack configuration
*/

/* how to config css
  {
     test: /\.css$/,
     loader: ['style-loader', 'css-loader']
   }

   style-loader: 将所有的计算后的样式加入页面中
   css-loader: 使你能够使用类似@import 和 url(…)的方法实现 require()的功能
*/
