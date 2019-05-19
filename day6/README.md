## vue-cli

下载一个全局生成的vue项目的脚手架

```
npm install vue-cli -g
// 创建
vue init webpack <项目名>
cd 项目名
npm install
npm run dev
```

## 模块

- node模块的规范 commonjs
- cmd(seajs)       amd(require)
- umd 为了做兼容处理的
- esmodule 可以在浏览器上使用
  - 如何定义模块（一个js就是一个模块）
  - 如何导出模块（export）
  - 如何使用模块 （import）

## 先下载webpack
```
// 安装 webpack 之前要干一件事 npm init
npm init -y
npm install webpack
```
> 安装webpack或者less最好不要安装全局的，否则可能会导致webpack的版本存在差异，所以最好本地安装

- 在package.json中配置一个脚本，这个脚本用的命令是webpack，会去当前的node_modules下找bin对应的webpack名字让其执行，其实执行的就是bin/webpack.js，webpack.js需要当前目录下有个名字叫webpack.config.js的文件，我们通过npm run build 执行的目录是当前文件的目录，所以会去当前目录下查找。
模块相互依赖，源码放在一个文件夹，打包后的代码放在另一个文件夹
## babel 转义es6 -> es5
- 安装babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```
## babel-preset-es2015
- 让翻译官拥有解析es6语法的功能
```
npm install babel-preset-es2015 --save-dev
```

## babel-preset-stage-0
- 解析es7的语法的
```
npm install babel-preset-stage-0 --save-dev
```