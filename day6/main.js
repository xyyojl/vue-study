// 入口文件
console.log(1)
// 如果是第三方模块 不需要加 ./ 如果是文件模块 需要加 ./
// 在另一个文件中将内容解构出来即可使用
// import 具有声明的功能
import {str,str2} from './a.js';
console.log(str,str2);