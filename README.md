# Nodejs-studybook
记录自己学习Nodejs的过程


> 2022-04-05 第一天

## 认识nodejs
### 1.nodejs 运行在服务端的js环境

### 2.模块分类
 1.全局模块(变量)： 
  无需引入、直接使用
  global __dirname、process...
 2核心模块：fs http...
  无需下载，直接引入
 3 第三方模块
  已经发布的模块，需要下载
  cnpm vue-cli webpack
4 自定义模块
  用户自己发布的模块 npm publish,需要下载

### 3.工具: nodemon 一个支持服务端热重载的依赖

### 4.目标
- 搭建简易的web服务，可以加载html文件
- 编写简单接口，可以返回json数据
- 加载资源文件img css...  