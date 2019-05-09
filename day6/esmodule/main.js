// 入口文件
console.log(1)
// 如果是第三方模块 不需要加 ./ 如果是文件模块 需要加 ./
// 在另一个文件中将内容解构出来即可使用
// import 具有声明的功能
// import 放到页面的顶部
/* import {str,str2,a} from './a.js';
console.log(str,str2);
a() */
import * as b from './a.js'
console.log(b.str,b.str2);
b.a() 

// 导出一个使用 default
// xxx 代表的是default hou的结果
import xxx from './b.js'
console.log(xxx)