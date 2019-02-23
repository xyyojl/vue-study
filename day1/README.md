## react 

## angular4 + ts typscript

## es6 82原则 let const ...  => class

## vue数据驱动 （主要操作的是操作数据）

- 操作dom（频繁操作dom，高性能，重渲染，重绘）

## JS数据类型

- 基本 number string boolean null（空） undefined（压根没有）
- Object function
- Symbol（es6）

最常见的数据类型：{} []

### 数组的变异（括号中的能改变原数组）

- 操作数组的方法 （pop push unshift shift splice reverse sort） indexOf lastIndexOf  concat  slice

## forEach filter（过滤） map（映射） some every includes reduce find 

## node 版本 >8.5 webstorm > 2017以上版本（vscode，sublime）

LTS 标准版 current 当前最新版

## 框架和库

- 框架 vue （拥有完整的解决方案）**我们写好人家调用我（被动）**
- 库 jquery underscore(模板引擎) zepto animate.css 我们调用他（主动）

简单来说，比如一栋房子，房子里面有各种家具，只有进入住就可以啦，这就是框架，给你一栋房子，沙发，冰箱等等都是自己买回来的，这就是库

## 渐进式 （渐进增强：低版本不支持，高版本做得更炫，更支持）

- vue全家桶 vue.js + vue-router(实现vue的单页面) + vuex(状态的管理) + axios(获取数据)
- 通过组合 完成一个完整的框架

## MVC（backbone）单向

- model 数据
- view 视图
- controller 控制器

## MVVM（angular,vue）双向

- model 数据
- view 视图
- viewModel 视图模型

## Object.defineProperty(es5)的没有替代方法

- 不支持IE8以下

## 安装vue

- cdn的方式
- npm 安装 node package manager

```js
npm init // 初始化会产生package.json的文件这个文件用来描述项目的依赖，不能有大写 特殊字符 中文，而且不要和安装包的名字相同
npm init -y // 这个是直接返回结果，需要满足某些条件
npm install vue // 安装vue，如果把node_modules删除掉，然后再输入npm install 可以安装相同的依赖
```

我们绑定的数据是字符串，{},[],function(){}

