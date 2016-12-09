//引入path内置模块
var path=require('path');
//引入express 依赖模块，用来启动静态服务器
var express = require('express');

//实例 express
var app=express();

console.log(__dirname);
//console.log(filename);
//拼接物理路径，用来指定虚拟路径的访问
var viewsPath = path.join(__dirname,'views');
console.log(viewsPath);
app.use('/',express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath = path.join(__dirname,'public');
//指定访问静态资源文件的路径
app.use('/public',express.static(publicPath));

//监听端口 9999，用来启动
app.listen(9999,function(){
	console.log('server run at port 9999');
});

//模块导出
module.exports = app;