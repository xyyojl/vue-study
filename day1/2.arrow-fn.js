// arrow fn 箭头函数 不具备this,arguments
// 自己家没有this 就找到上一级的this

// 如何更改this指向
/* 
    1. call apply bind
    2. var that = this;
    3. => 箭头函数
*/

// 如何确定this是谁 看谁调用的 .前面是谁 this就是谁
function a(b) {
    return b+1;
}
// 参数只有一个参数,可以去掉括号 
// 去掉function 关键字 参数只有一个可以省略小括号 小括号和大括号之间有一个箭头
// 如果没有大括号则直接返回值 有大括号必须写return 有写return就必须写大括号
// let a = b => {return b+1;}
let a1 = b => b+1
console.log(a1(2));

/* function a2(b){
    return function(c){
        return b + c;
    }
} */
// 将上面这个函数改写成箭头函数
let a2 = b => c => b+c  // 高阶函数 (>=两个箭头的)
a2(1)(2);
console.log(a2(2)(2));


/* 
// 下面这个是闭包
let a = function(b){
    return function(c){
        return b+c;
    }
}();
*/
/* 闭包: 函数执行的一瞬间叫闭包,(不销毁的作用域),当执行后返回的结果必须是引用类型, 
被外界变量(a)接受 此时这个函数不会销毁(模块化) */
// 在vue 中很多时候不能用箭头函数
// 这个返回也没有用
[1,2,3].forEach(item => console.log(item))

