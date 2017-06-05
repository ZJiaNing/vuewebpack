var path = require('path');
// 下面的这个插件是用来动态生成html文件，以及自动注入编译打包之后的js文件的HtmlWebpackPlugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

//  多依赖关系
// 我这边不用暴露出去，因为内部使用就好了
exports.multiDepand  = {
  "home": "index",
  "article": "articleindex"
}

// 入口文件的依赖关系
exports.multiEntry = function (relation){
  var output = {};
  var depend = relation;
  Object.keys(depend).forEach(function (name){
    // output[depend[name]] = "../app/index/" + depend[name] + ".js";
    output[name] = path.resolve(__dirname, "../app/index/" + depend[name] + ".js");
  });

  console.log('the output array is: ');
  // 不过为什么输出的这个文件名之间的间隔会有两个双斜杠呢？
  console.log(output);

  return output;
}


// 动态创建多个html-webpack-plugin，生成多份入口文件
// 这边的关系路径可能还需要再想想，因为，，，有点不放心
exports.multiHtmlPage = function (relation){
  var output = [];
  var depend = relation;
  // 按照html-webpack-plugin插件的配置创建多个
  Object.keys(depend).forEach(function (name){
    output.push(new HtmlWebpackPlugin({
      title: 'My Blog',
      filename: '../' + name + '.html',
      chunks: [name],
      template: path.resolve(__dirname, '../app/index/' + depend[name] + '.html'),
      inject: true
    }))
  });

  console.log('the multi page relation is: ');
  console.log(output);

  return output;
}


// 开发环境的时候生成的html文件
exports.multiDevHtmlPage = function(relation){
  var output = [];
  var depend = relation;
  // 按照html-webpack-plugin插件的配置创建多个
  Object.keys(depend).forEach(function (name){
    //path.resolve(__dirname, '../app/index/index.html'),
    output.push(new HtmlWebpackPlugin({
      title: 'My Blog',
      filename: 'app/index/' + name + '.html',
      chunks: [name],
      template: path.resolve(__dirname, '../app/index/' + depend[name] + '.html'),
      inject: true
    }))
  });

  console.log('the multi page relation is: ');
  console.log(output);

  return output;
}
