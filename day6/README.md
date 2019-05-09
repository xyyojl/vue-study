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
// 安装之前要干一件事 npm init
npm init 
npm install webpack -g
```
> 安装webpack或者less最好不要安装全局的，否则可能会导致webpack的版本差异，所以最好本地安装